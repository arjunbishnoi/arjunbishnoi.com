import { NextResponse } from "next/server";
import {
  extractClientIdentifierFromHeader,
  relayContactForm,
} from "@/lib/contact/contact-relay";

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
  company?: string;
};

export const runtime = "nodejs";

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const clientIdentifier = extractClientIdentifierFromHeader({
    forwardedFor: request.headers.get("x-forwarded-for"),
    realIp: request.headers.get("x-real-ip"),
    cfConnectingIp: request.headers.get("cf-connecting-ip"),
    userAgent: request.headers.get("user-agent"),
  });

  const result = await relayContactForm(payload, {
    clientIdentifier,
    origin: request.headers.get("origin") ?? undefined,
    referer: request.headers.get("referer") ?? undefined,
    subject: "New Portfolio Contact",
  });

  if (!result.ok) {
    return NextResponse.json({ error: result.error }, { status: result.status });
  }

  return NextResponse.json({ message: result.message });
}
