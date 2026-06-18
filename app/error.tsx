"use client";

import { useEffect } from "react";
import Button from "@/components/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log to your error reporting service here
    console.error(error);
  }, [error]);

  return (
    <section className="bg-cream">
      <div className="mx-auto flex max-w-3xl flex-col items-center px-4 py-24 text-center md:py-32">
        <span className="text-5xl" aria-hidden="true">
          🫠
        </span>
        <h1 className="mt-6 text-3xl font-semibold text-charcoal md:text-4xl">
          Something went a bit wobbly.
        </h1>
        <p className="mt-4 max-w-md text-charcoal/70">
          Not your fault — something on our side slipped. Try again, and if it
          keeps happening, drop us a message so we can fix it.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center justify-center rounded-full bg-butter px-8 py-4 font-heading font-medium text-charcoal shadow-butter transition-all duration-300 hover:-translate-y-0.5 hover:bg-butter-dark"
          >
            Try again
          </button>
          <Button href="/contact" variant="secondary" size="lg">
            Report the problem
          </Button>
        </div>
      </div>
    </section>
  );
}
