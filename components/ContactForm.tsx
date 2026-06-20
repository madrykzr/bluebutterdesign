"use client";

import { useActionState, useState } from "react";
import { motion } from "framer-motion";
import PlaceholderImage from "@/components/PlaceholderImage";
import { WhatsAppIcon } from "@/components/Navbar";
import { submitContactForm, type ContactFormState } from "@/app/contact/actions";
import { images } from "@/lib/images";
import { site } from "@/lib/site";

const initialState: ContactFormState = { status: "idle", message: "" };

const projectTypes = [
  "Pro Landing Page",
  "Business Website",
  "Corporate",
  "E-Commerce",
  "Not sure yet",
];

const budgetRanges = [
  "Under RM 1,000",
  "RM 1,000 – RM 2,500",
  "RM 2,500 – RM 5,000",
  "Above RM 5,000",
  "Not sure",
];

const heardFromOptions = [
  "Google",
  "Instagram",
  "TikTok",
  "Friend referral",
  "Other",
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const hasEnoughDigits = (s: string) => (s.match(/\d/g)?.length ?? 0) >= 7;

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContactForm, initialState);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Client-side validation runs before the server action.
  const validate = (form: HTMLFormElement) => {
    const data = new FormData(form);
    const next: Record<string, string> = {};

    if (!String(data.get("name") ?? "").trim()) {
      next.name = "Please tell us your name.";
    }
    const email = String(data.get("email") ?? "").trim();
    if (!email) next.email = "We need your email to reply.";
    else if (!EMAIL_RE.test(email)) next.email = "That email doesn't look right.";

    const whatsapp = String(data.get("whatsapp") ?? "").trim();
    if (!whatsapp) next.whatsapp = "We need a number to message you on.";
    else if (!hasEnoughDigits(whatsapp)) next.whatsapp = "That number doesn't look right.";

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  // ─── SUCCESS state, replace form with mascot + heading ──────
  if (state.status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="flex flex-col items-center rounded-3xl border border-butter-dark/40 bg-butter/20 p-10 text-center"
        role="status"
        aria-live="polite"
      >
        <div className="w-40 md:w-48">
          <PlaceholderImage
            src={images.mascotThumbsup.src}
            alt={images.mascotThumbsup.alt}
            width={images.mascotThumbsup.width}
            height={images.mascotThumbsup.height}
            priority
          />
        </div>
        <h3 className="mt-6 font-heading text-2xl font-semibold text-charcoal md:text-3xl">
          Got it! We&apos;ll WhatsApp you within 24 hours.
        </h3>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-charcoal/70">
          {state.message}
        </p>
        <p className="mt-5 text-sm text-charcoal/65">
          Need us sooner?{" "}
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-bluegrey-dark underline-offset-2 hover:underline"
          >
            Message us directly on WhatsApp
          </a>
          .
        </p>
      </motion.div>
    );
  }

  return (
    <form
      action={formAction}
      onSubmit={(e) => {
        if (!validate(e.currentTarget)) e.preventDefault();
      }}
      noValidate
      className="space-y-5"
    >
      {/* Error toast, shows above the form when server returns error */}
      {state.status === "error" && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          role="alert"
          aria-live="assertive"
          className="flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
        >
          <span aria-hidden="true">⚠</span>
          <p className="flex-1">
            {state.message}{" "}
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline-offset-2 hover:underline"
            >
              WhatsApp us
            </a>
            .
          </p>
        </motion.div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Your name" htmlFor="name" error={errors.name} required>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="name"
            placeholder="e.g. Aina from Kopi Corner"
            aria-invalid={Boolean(errors.name)}
            className={inputClasses(Boolean(errors.name))}
          />
        </Field>
        <Field label="Business / Company" htmlFor="business" hint="Optional">
          <input
            type="text"
            id="business"
            name="business"
            autoComplete="organization"
            placeholder="e.g. Kopi Corner Cafe"
            className={inputClasses(false)}
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Email" htmlFor="email" error={errors.email} required>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            placeholder="you@example.com"
            aria-invalid={Boolean(errors.email)}
            className={inputClasses(Boolean(errors.email))}
          />
        </Field>
        <Field
          label="WhatsApp number"
          htmlFor="whatsapp"
          error={errors.whatsapp}
          hint="Include +60"
          required
        >
          <input
            type="tel"
            id="whatsapp"
            name="whatsapp"
            autoComplete="tel"
            placeholder="+60 12-345 6789"
            aria-invalid={Boolean(errors.whatsapp)}
            className={inputClasses(Boolean(errors.whatsapp))}
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Project type" htmlFor="projectType">
          <select
            id="projectType"
            name="projectType"
            defaultValue="Not sure yet"
            className={inputClasses(false)}
          >
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Budget range" htmlFor="budget">
          <select
            id="budget"
            name="budget"
            defaultValue="Not sure"
            className={inputClasses(false)}
          >
            {budgetRanges.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Tell us about your project" htmlFor="message" hint="Optional">
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="What does your business do? What should the website help you with, more bookings, more walk-ins, selling online?"
          className={inputClasses(false)}
        />
      </Field>

      <Field label="How did you hear about us?" htmlFor="heardFrom">
        <select
          id="heardFrom"
          name="heardFrom"
          defaultValue="Google"
          className={inputClasses(false)}
        >
          {heardFromOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </Field>

      <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={pending}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-bluegrey px-8 py-4 font-heading font-medium text-white shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:bg-bluegrey-dark hover:shadow-lift disabled:cursor-not-allowed disabled:opacity-60"
        >
          {pending ? (
            <>
              <Spinner />
              Sending…
            </>
          ) : (
            <>
              Send message
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </>
          )}
        </button>
        <p className="text-xs text-charcoal/55">
          We reply within one working day. Your details stay with us, no spam,
          ever.
        </p>
      </div>

      {/* Prominent WhatsApp fallback below the form */}
      <div className="mt-2 flex flex-col gap-3 rounded-3xl border border-bluegrey/20 bg-bluegrey/5 p-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-mono text-bluegrey-dark">
            Prefer to chat first?
          </p>
          <p className="mt-1 text-sm leading-relaxed text-charcoal/75">
            Send us a quick WhatsApp, voice notes welcome.
          </p>
        </div>
        <a
          href={site.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-bluegrey px-5 py-3 font-heading text-sm font-medium text-white shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:bg-bluegrey-dark"
        >
          <WhatsAppIcon className="h-4 w-4" />
          WhatsApp us
        </a>
      </div>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  hint,
  error,
  required = false,
  children,
}: {
  label: string;
  htmlFor: string;
  hint?: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="mb-1.5 flex items-baseline justify-between gap-3">
        <label htmlFor={htmlFor} className="font-heading text-sm font-medium text-charcoal">
          {label}
          {required && (
            <span className="text-bluegrey" aria-hidden="true">
              {" "}
              *
            </span>
          )}
        </label>
        {hint && !error && (
          <span className="font-mono text-[10px] uppercase tracking-mono text-charcoal/40">
            {hint}
          </span>
        )}
      </div>
      {children}
      {error && (
        <p role="alert" className="mt-1.5 text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

function inputClasses(hasError: boolean) {
  return `w-full rounded-2xl border bg-white px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/35 transition-colors focus:border-bluegrey focus:outline-none focus:ring-2 focus:ring-bluegrey/30 ${
    hasError ? "border-red-400" : "border-charcoal/10"
  }`;
}

function Spinner() {
  return (
    <svg
      className="h-4 w-4 animate-spin"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle cx={12} cy={12} r={10} stroke="currentColor" strokeOpacity={0.25} strokeWidth={3} />
      <path
        d="M22 12a10 10 0 0 1-10 10"
        stroke="currentColor"
        strokeWidth={3}
        strokeLinecap="round"
      />
    </svg>
  );
}
