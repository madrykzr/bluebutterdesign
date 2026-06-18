import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";

// Placeholder testimonials — replace with real client quotes as they come in.
const testimonials = [
  {
    quote:
      "Working with Bluebutter was painless. They explained everything in plain English and the site was up before our launch date.",
    name: "Client name",
    business: "Music studio, KL",
  },
  {
    quote:
      "Customers keep saying how easy it is to book through our website now. The Google Sheets setup saves me an hour a day.",
    name: "Client name",
    business: "Cafe owner, Penang",
  },
  {
    quote:
      "I'm not a tech person at all, but updating my own site is genuinely simple. They taught me everything in one session.",
    name: "Client name",
    business: "Boutique owner, JB",
  },
];

export default function Testimonials() {
  return (
    <section className="relative bg-dot-grid bg-buttermilk py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Kind words"
          title="What clients say about working with us"
          description="Real feedback from real Malaysian business owners. (More coming soon — we're a young studio with old-school work ethics.)"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <AnimatedSection key={i} delay={i * 0.12} className="h-full">
              <figure className="flex h-full flex-col rounded-3xl border border-charcoal/5 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-butter hover:shadow-butter">
                <svg
                  className="h-8 w-8 text-butter-dark"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-charcoal/80">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 border-t border-charcoal/5 pt-4">
                  <p className="font-heading text-sm font-semibold text-charcoal">{t.name}</p>
                  <p className="text-xs text-charcoal/50">{t.business}</p>
                </figcaption>
              </figure>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
