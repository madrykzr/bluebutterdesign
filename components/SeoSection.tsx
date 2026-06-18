import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";

const seoItems = [
  {
    title: "On-page SEO",
    description:
      "Every page is written and structured so Google understands exactly what you offer, proper headings, descriptions and keywords your customers actually search.",
  },
  {
    title: "Meta & OG tags",
    description:
      "When someone shares your site on WhatsApp or Facebook, it shows a clean preview with your logo and message, not a broken link.",
  },
  {
    title: "Sitemap & indexing",
    description:
      "We submit your sitemap to Google so every page gets found and indexed properly from day one.",
  },
  {
    title: "Google Business Profile",
    description:
      "We set up (or tidy up) your Google Business Profile so you appear on Google Maps when nearby customers search for you.",
  },
  {
    title: "Core Web Vitals",
    description:
      "Fast-loading pages aren't just nice, Google ranks them higher. We optimise images, code and hosting for top speed scores.",
  },
  {
    title: "Local SEO for Malaysia",
    description:
      "We optimise for how Malaysians actually search, \"kedai kopi near me\", \"barber PJ\", \"photographer KL\", in English and Bahasa.",
  },
];

export default function SeoSection({ dark = false }: { dark?: boolean }) {
  return (
    <section
      className={`relative py-20 md:py-28 ${dark ? "bg-charcoal" : "bg-buttermilk"}`}
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="SEO Strategy"
          title="Get found by customers, not just look pretty"
          description="A beautiful website nobody finds is a waste of money. Every Bluebutter site ships with a proper SEO foundation, built in from day one."
          dark={dark}
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {seoItems.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.08}>
              <div
                className={`h-full rounded-3xl border p-6 transition-all duration-300 hover:-translate-y-1 ${
                  dark
                    ? "border-cream/10 bg-charcoal-light hover:border-butter/50"
                    : "border-charcoal/5 bg-cream shadow-card hover:border-butter hover:shadow-butter"
                }`}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-butter/40 font-heading text-sm font-bold text-charcoal">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3
                  className={`mt-4 font-heading text-base font-semibold ${
                    dark ? "text-cream" : "text-charcoal"
                  }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`mt-2 text-sm leading-relaxed ${
                    dark ? "text-cream/60" : "text-charcoal/70"
                  }`}
                >
                  {item.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
