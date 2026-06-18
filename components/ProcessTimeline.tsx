import AnimatedSection from "@/components/AnimatedSection";

const steps = [
  {
    title: "Chat & understand",
    description:
      "We start with a relaxed chat — WhatsApp, call, or kopi if you're nearby. We learn about your business, your customers, and what you actually need (not what's trendy).",
  },
  {
    title: "Plan & quote",
    description:
      "You get a clear, fixed quote with everything spelled out — pages, features, timeline. No hidden costs, no surprise invoices later.",
  },
  {
    title: "Design",
    description:
      "We design your pages in Figma first so you can see exactly how your site will look before we build anything. You give feedback, we refine.",
  },
  {
    title: "Build",
    description:
      "We code your site with modern tools — fast, mobile-friendly, and SEO-ready from the first line. You'll get a preview link to watch progress.",
  },
  {
    title: "Launch & handover",
    description:
      "We go live, connect your domain, submit your site to Google, and teach you how to update things yourself. Plain-English handover, promise.",
  },
  {
    title: "Support",
    description:
      "We don't disappear after launch. Questions, small tweaks, or future upgrades — just message us. We reply like humans, not ticket systems.",
  },
];

export default function ProcessTimeline() {
  return (
    <ol className="relative space-y-0">
      {steps.map((step, i) => (
        <AnimatedSection key={step.title} delay={i * 0.08} as="li">
          <div className="relative flex gap-6 pb-10 last:pb-0">
            {/* Line + dot */}
            <div className="flex flex-col items-center">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-butter font-heading text-sm font-bold text-charcoal shadow-card">
                {i + 1}
              </span>
              {i < steps.length - 1 && (
                <span className="mt-2 w-0.5 flex-1 rounded bg-butter/60" aria-hidden="true" />
              )}
            </div>
            <div className="pb-2 pt-1.5">
              <h3 className="font-heading text-lg font-semibold text-charcoal">{step.title}</h3>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-charcoal/70">
                {step.description}
              </p>
            </div>
          </div>
        </AnimatedSection>
      ))}
    </ol>
  );
}
