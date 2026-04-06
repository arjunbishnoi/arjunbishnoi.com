"use server";

export type ContactState = {
  success: boolean;
  message: string | null;
  error: string | null;
};

export async function submitContact(
  prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return {
      success: false,
      message: null,
      error: "Please fill in all fields.",
    };
  }

  try {
    const endpoint =
      process.env.CONTACT_FORM_ENDPOINT ??
      "https://formsubmit.co/ajax/contact@arjunbishnoi.com";

    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
        _subject: "New Portfolio Contact (Server Action)",
        _captcha: "false",
      }),
    });

    const data = await response.json().catch(() => null);

    if (!response.ok) {
      throw new Error(data?.message || "Failed to send message via Server Action.");
    }

    return {
      success: true,
      message: "Message sent! I'll get back to you soon.",
      error: null,
    };
  } catch (error) {
    console.error("Server Action Error:", error);
    return {
      success: false,
      message: null,
      error: "Something went wrong. Please try again later.",
    };
  }
}
