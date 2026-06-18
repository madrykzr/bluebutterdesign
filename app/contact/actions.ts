"use server";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
  /** field → friendly error, kept on the server side too as a defence-in-depth */
  fieldErrors?: Record<string, string>;
};

type Payload = {
  name: string;
  business: string;
  email: string;
  whatsapp: string;
  projectType: string;
  budget: string;
  message: string;
  heardFrom: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
/** Has the number got at least 7 digits in total? Strips spaces / dashes /
 * pluses first so "+60 12-345 6789" reads as 12 digits and passes. */
const hasEnoughDigits = (s: string) => (s.match(/\d/g)?.length ?? 0) >= 7;

/**
 * Receives the contact form, validates, then POSTs to a Google Apps Script
 * Web App that appends a row to a Google Sheet (the "Budget Smart" setup we
 * recommend to clients — free, no monthly fee).
 *
 * Setup steps live in docs/google-apps-script-setup.md.
 */
export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const data: Payload = {
    name: String(formData.get("name") ?? "").trim(),
    business: String(formData.get("business") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    whatsapp: String(formData.get("whatsapp") ?? "").trim(),
    projectType: String(formData.get("projectType") ?? "").trim(),
    budget: String(formData.get("budget") ?? "").trim(),
    message: String(formData.get("message") ?? "").trim(),
    heardFrom: String(formData.get("heardFrom") ?? "").trim(),
  };

  // Server-side validation (client also runs the same checks)
  const fieldErrors: Record<string, string> = {};
  if (!data.name) fieldErrors.name = "Please tell us your name.";
  if (!data.email) fieldErrors.email = "We need your email to reply.";
  else if (!EMAIL_RE.test(data.email)) fieldErrors.email = "That email doesn't look right.";
  if (!data.whatsapp) fieldErrors.whatsapp = "We need a number to message you on.";
  else if (!hasEnoughDigits(data.whatsapp)) fieldErrors.whatsapp = "That number doesn't look right.";

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: "Please fix the highlighted fields.",
      fieldErrors,
    };
  }

  const endpoint = process.env.GOOGLE_APPS_SCRIPT_URL;

  // If the studio hasn't deployed the Apps Script yet, fall back to a log so
  // the form still feels responsive during development.
  if (!endpoint || endpoint.includes("REPLACE_ME")) {
    console.warn(
      "[contact] GOOGLE_APPS_SCRIPT_URL is not configured — logging instead of saving. " +
        "Run the setup in docs/google-apps-script-setup.md."
    );
    console.log("[contact] enquiry:", { ...data, ts: new Date().toISOString() });
    return {
      status: "success",
      message:
        "Thanks! We received your enquiry — we'll WhatsApp you within 24 hours.",
    };
  }

  try {
    // Apps Script accepts either form-encoded or raw JSON. We send JSON and
    // parse it on the script side with JSON.parse(e.postData.contents).
    // `redirect: "follow"` because Apps Script Web Apps redirect 302 once.
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, ts: new Date().toISOString() }),
      redirect: "follow",
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Apps Script returned ${res.status}`);
    }

    // Apps Script usually returns JSON like {ok:true}. We don't strictly need
    // it, but reading the body confirms the redirect resolved cleanly.
    await res.text();

    return {
      status: "success",
      message:
        "Thanks! We received your enquiry — we'll WhatsApp you within 24 hours.",
    };
  } catch (err) {
    console.error("[contact] failed to forward to Apps Script:", err);
    return {
      status: "error",
      message:
        "Something went wrong on our side. Please WhatsApp us instead — we'll reply fast.",
    };
  }
}
