import AnimatedSection from "@/components/AnimatedSection";

/**
 * Small inline explainer that sits right under the pricing cards.
 * Not its own section — drops into whatever background it's placed on.
 */
export default function WhyPriceRange({ className = "" }: { className?: string }) {
  return (
    <AnimatedSection className={`mx-auto max-w-3xl ${className}`}>
      <div className="rounded-[28px] border border-charcoal/8 bg-white/70 p-6 shadow-card backdrop-blur-sm md:p-7">
        <p className="font-mono text-[11px] uppercase tracking-mono text-bluegrey-dark">
          FAQ
        </p>
        <h3 className="mt-2 font-heading text-xl font-semibold text-charcoal">
          Why a price range?
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-charcoal/75 md:text-base">
          Every business is different. A 3-page cafe website is simpler than a
          5-page boutique with online booking. We give you a clear quote after a
          quick chat — no hidden fees, no surprises. The price you agree on is
          the price you pay.
        </p>
      </div>
    </AnimatedSection>
  );
}
