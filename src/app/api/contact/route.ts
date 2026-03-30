import { NextResponse } from "next/server";

const contactRelayEndpoint =
  process.env.CONTACT_FORM_ENDPOINT ??
  "https://formsubmit.co/ajax/contact@arjunbishnoi.com";
const contactRequestTimeoutMs = 10000;

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
};

export const runtime = "nodejs";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = payload.name?.trim() ?? "";
  const email = payload.email?.trim() ?? "";
  const message = payload.message?.trim() ?? "";

  if (!name || !email || !message) {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const abortController = new AbortController();
  const timeoutId = setTimeout(() => abortController.abort(), contactRequestTimeoutMs);

  const origin = request.headers.get("origin") ?? "https://www.arjunbishnoi.com";
  const referer = request.headers.get("referer") ?? "https://www.arjunbishnoi.com/";

  try {
    const response = await fetch(contactRelayEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Origin": origin,
        "Referer": referer,
      },
      signal: abortController.signal,
      body: JSON.stringify({
        name,
        email,
        message,
        _subject: "New Portfolio Contact",
        _captcha: "false",
      }),
    });

    const responseBody = await response.json().catch(() => null);

    if (!response.ok || responseBody?.success === "false" || responseBody?.success === false) {
      console.error("Contact relay error", {
        status: response.status,
        responseBody,
      });

      return NextResponse.json(
        { error: "Something went wrong. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({ message: "Message sent." });
  } catch (error) {
    const isAbortError = error instanceof DOMException && error.name === "AbortError";

    console.error("Contact relay request failed", {
      error: error instanceof Error ? error.message : "Unknown error",
    });

    return NextResponse.json(
      {
        error: isAbortError
          ? "The request took too long. Please try again."
          : "Something went wrong. Please try again.",
      },
      { status: 502 }
    );
  } finally {
    clearTimeout(timeoutId);
  }
}
