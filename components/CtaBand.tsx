import Button from "@/components/Button";
import AnimatedSection from "@/components/AnimatedSection";
import MeltDivider from "@/components/MeltDivider";
import { site } from "@/lib/site";
import { WhatsAppIcon } from "@/components/Navbar";

/**
 * Dark charcoal CTA band with a headline and call-to-action buttons.
 * `from` should match the background colour of the section above so the
 * melt divider carries that tone down into the dark band.
 */
export default function CtaBand({ from = "#FAFAF7" }: { from?: string }) {
  return (
    <section className="relative">
      <MeltDivider from={from} to="#2E3440" />
      <div className="relative overflow-hidden bg-charcoal bg-dot-grid-light">
        <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-24">
          <AnimatedSection className="relative z-10 max-w-2xl">
            <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-butter">
              Ready when you are
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-cream md:text-4xl">
              Let&apos;s get your business online — the easy way
            </h2>
            <p className="mt-4 text-base leading-relaxed text-cream/70 md:text-lg">
              Tell us about your business over WhatsApp or the contact form.
              We&apos;ll reply within one working day with honest advice and a
              clear quote. No pressure, no jargon.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={site.whatsapp} variant="whatsapp" size="lg" external>
                <WhatsAppIcon className="h-5 w-5" />
                Chat on WhatsApp
              </Button>
              <Button href="/contact" variant="butter" size="lg">
                Get a free quote
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </div>
      <MeltDivider from="#2E3440" to="#FAFAF7" />
    </section>
  );
}
