"use server";

const CONTACT_RELAY_ENDPOINT =
  process.env.CONTACT_FORM_ENDPOINT ??
  "https://formsubmit.co/ajax/contact@arjunbishnoi.com";

const CONTACT_REQUEST_TIMEOUT_MS = Number(
  process.env.CONTACT_REQUEST_TIMEOUT_MS ?? 10000,
);
const CONTACT_RATE_LIMIT_WINDOW_MS = Number(
  process.env.CONTACT_RATE_LIMIT_WINDOW_MS ?? 15 * 60 * 1000,
);
const CONTACT_RATE_LIMIT_MAX_REQUESTS = Number(
  process.env.CONTACT_RATE_LIMIT_MAX_REQUESTS ?? 5,
);
const CONTACT_ALLOWED_ORIGINS = process.env.CONTACT_ALLOWED_ORIGINS;
const UPSTASH_REDIS_REST_URL = process.env.UPSTASH_REDIS_REST_URL;
const UPSTASH_REDIS_REST_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN;
const HAS_DISTRIBUTED_RATE_LIMIT = Boolean(
  UPSTASH_REDIS_REST_URL && UPSTASH_REDIS_REST_TOKEN,
);

const DEFAULT_ORIGIN = "https://arjunbishnoi.com";
const DEFAULT_REFERER = "https://arjunbishnoi.com/";

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

type ContactPayload = {
  name: string;
  email: string;
  message: string;
  company?: string;
};

type RelayOptions = {
  clientIdentifier: string;
  origin?: string;
  referer?: string;
  subject?: string;
};

export type ContactRelayResult =
  | { ok: true; status: 200; message: string }
  | { ok: false; status: number; error: string };

declare global {
  var __contactRateLimitStore: Map<string, RateLimitEntry> | undefined;
}

const rateLimitStore =
  globalThis.__contactRateLimitStore ?? new Map<string, RateLimitEntry>();

if (!globalThis.__contactRateLimitStore) {
  globalThis.__contactRateLimitStore = rateLimitStore;
}

function normalizeText(value: string | null | undefined) {
  return value?.trim() ?? "";
}

function normalizeOrigin(value: string | undefined) {
  if (!value) return null;

  try {
    return new URL(value).origin.toLowerCase();
  } catch {
    return null;
  }
}

function getAllowedOrigins() {
  const configured = CONTACT_ALLOWED_ORIGINS
    ? CONTACT_ALLOWED_ORIGINS.split(",")
        .map((value) => normalizeOrigin(value.trim()))
        .filter((value): value is string => Boolean(value))
    : [];

  if (configured.length > 0) {
    return new Set(configured);
  }

  const defaults = [DEFAULT_ORIGIN];

  if (process.env.NODE_ENV !== "production") {
    defaults.push(
      "http://localhost:3000",
      "http://localhost:3001",
      "http://127.0.0.1:3000",
      "http://127.0.0.1:3001",
    );
  }

  return new Set(
    defaults
      .map((value) => normalizeOrigin(value))
      .filter((value): value is string => Boolean(value)),
  );
}

function isAllowedRequestOrigin(origin: string | undefined, referer: string | undefined) {
  const allowedOrigins = getAllowedOrigins();
  const requestOrigin = normalizeOrigin(origin) ?? normalizeOrigin(referer);

  if (!requestOrigin) {
    return process.env.NODE_ENV !== "production";
  }

  return allowedOrigins.has(requestOrigin);
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function normalizeClientIdentifier(value: string | null | undefined) {
  const normalized = normalizeText(value).toLowerCase();
  if (!normalized) return "anonymous";
  return normalized.slice(0, 120);
}

function consumeInMemoryRateLimit(identifier: string) {
  const now = Date.now();
  const key = normalizeClientIdentifier(identifier);
  const existing = rateLimitStore.get(key);

  if (!existing || now >= existing.resetAt) {
    rateLimitStore.set(key, {
      count: 1,
      resetAt: now + CONTACT_RATE_LIMIT_WINDOW_MS,
    });
    return { allowed: true };
  }

  if (existing.count >= CONTACT_RATE_LIMIT_MAX_REQUESTS) {
    return {
      allowed: false,
      retryAfterSeconds: Math.ceil((existing.resetAt - now) / 1000),
    };
  }

  existing.count += 1;
  rateLimitStore.set(key, existing);
  return { allowed: true };
}

async function runRedisCommand(commandPath: string) {
  if (!UPSTASH_REDIS_REST_URL || !UPSTASH_REDIS_REST_TOKEN) {
    return null;
  }

  const response = await fetch(`${UPSTASH_REDIS_REST_URL}/${commandPath}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${UPSTASH_REDIS_REST_TOKEN}`,
    },
    cache: "no-store",
  });

  if (!response.ok) {
    return null;
  }

  return response.json().catch(() => null);
}

async function consumeRateLimit(identifier: string) {
  const key = normalizeClientIdentifier(identifier);

  if (!HAS_DISTRIBUTED_RATE_LIMIT) {
    return consumeInMemoryRateLimit(key);
  }

  try {
    const redisKey = `contact:rate-limit:${key}`;
    const encodedKey = encodeURIComponent(redisKey);
    const incrementResult = await runRedisCommand(`incr/${encodedKey}`);
    const count = Number(incrementResult?.result);

    if (!Number.isFinite(count)) {
      return consumeInMemoryRateLimit(key);
    }

    if (count === 1) {
      await runRedisCommand(
        `pexpire/${encodedKey}/${CONTACT_RATE_LIMIT_WINDOW_MS}`,
      );
    }

    if (count > CONTACT_RATE_LIMIT_MAX_REQUESTS) {
      const ttlResult = await runRedisCommand(`pttl/${encodedKey}`);
      const retryAfterMs = Number(ttlResult?.result);

      return {
        allowed: false,
        retryAfterSeconds:
          Number.isFinite(retryAfterMs) && retryAfterMs > 0
            ? Math.ceil(retryAfterMs / 1000)
            : Math.ceil(CONTACT_RATE_LIMIT_WINDOW_MS / 1000),
      };
    }

    return { allowed: true };
  } catch (error) {
    console.error("Distributed rate limit failed, falling back to memory", {
      error: error instanceof Error ? error.message : "Unknown error",
    });

    return consumeInMemoryRateLimit(key);
  }
}

function validatePayload(payload: ContactPayload) {
  if (!payload.name || !payload.email || !payload.message) {
    return "All fields are required.";
  }

  if (!isValidEmail(payload.email)) {
    return "Please enter a valid email address.";
  }

  if (payload.name.length > 120 || payload.email.length > 200) {
    return "Please use shorter name or email values.";
  }

  if (payload.message.length > 5000) {
    return "Message is too long. Please keep it under 5000 characters.";
  }

  return null;
}

export function extractClientIdentifierFromHeader(
  forwardedFor: string | null,
  fallback: string | null,
) {
  const ipFromForwardedFor = forwardedFor?.split(",")[0]?.trim();
  return normalizeClientIdentifier(ipFromForwardedFor || fallback || "anonymous");
}

export async function relayContactForm(
  rawPayload: Partial<ContactPayload>,
  options: RelayOptions,
): Promise<ContactRelayResult> {
  if (!isAllowedRequestOrigin(options.origin, options.referer)) {
    return {
      ok: false,
      status: 403,
      error: "Invalid request origin.",
    };
  }

  const honeypotValue = normalizeText(rawPayload.company);
  if (honeypotValue) {
    // Return a success-like response to avoid giving bots a useful signal.
    return {
      ok: true,
      status: 200,
      message: "Message sent! I'll get back to you soon.",
    };
  }

  const payload: ContactPayload = {
    name: normalizeText(rawPayload.name),
    email: normalizeText(rawPayload.email),
    message: normalizeText(rawPayload.message),
    company: "",
  };

  const validationError = validatePayload(payload);
  if (validationError) {
    return { ok: false, status: 400, error: validationError };
  }

  const rateLimit = await consumeRateLimit(options.clientIdentifier);
  if (!rateLimit.allowed) {
    return {
      ok: false,
      status: 429,
      error: `Too many messages sent recently. Please try again in ${rateLimit.retryAfterSeconds} seconds.`,
    };
  }

  const abortController = new AbortController();
  const timeoutId = setTimeout(
    () => abortController.abort(),
    CONTACT_REQUEST_TIMEOUT_MS,
  );

  try {
    const response = await fetch(CONTACT_RELAY_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Origin: DEFAULT_ORIGIN,
        Referer: DEFAULT_REFERER,
      },
      signal: abortController.signal,
      body: JSON.stringify({
        ...payload,
        _subject: options.subject ?? "New Portfolio Contact",
        _captcha: "false",
      }),
    });

    const responseBody = await response.json().catch(() => null);

    if (
      !response.ok ||
      responseBody?.success === "false" ||
      responseBody?.success === false
    ) {
      console.error("Contact relay error", {
        status: response.status,
        responseBody,
      });

      return {
        ok: false,
        status: 502,
        error: "Something went wrong. Please try again.",
      };
    }

    return {
      ok: true,
      status: 200,
      message: "Message sent! I'll get back to you soon.",
    };
  } catch (error) {
    const isAbortError = error instanceof DOMException && error.name === "AbortError";

    console.error("Contact relay request failed", {
      error: error instanceof Error ? error.message : "Unknown error",
    });

    return {
      ok: false,
      status: 502,
      error: isAbortError
        ? "The request took too long. Please try again."
        : "Something went wrong. Please try again.",
    };
  } finally {
    clearTimeout(timeoutId);
  }
}