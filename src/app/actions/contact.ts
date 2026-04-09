"use server";

import { headers } from "next/headers";
import {
  extractClientIdentifierFromHeader,
  relayContactForm,
} from "@/lib/contact/contact-relay";

export type ContactState = {
  success: boolean;
  message: string | null;
  error: string | null;
};

export async function submitContact(
  _prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name = String(formData.get("name") ?? "");
  const email = String(formData.get("email") ?? "");
  const message = String(formData.get("message") ?? "");
  const company = String(formData.get("company") ?? "");

  const requestHeaders = await headers();
  const clientIdentifier = extractClientIdentifierFromHeader(
    requestHeaders.get("x-forwarded-for"),
    requestHeaders.get("x-real-ip") ?? requestHeaders.get("cf-connecting-ip"),
  );

  const result = await relayContactForm(
    { name, email, message, company },
    {
      clientIdentifier,
      origin: requestHeaders.get("origin") ?? undefined,
      referer: requestHeaders.get("referer") ?? undefined,
      subject: "New Portfolio Contact",
    },
  );

  if (!result.ok) {
    return {
      success: false,
      message: null,
      error: result.error,
    };
  }

  return {
    success: true,
    message: result.message,
    error: null,
  };
}
