import AnimatedSection from "@/components/AnimatedSection";

const stack = [
  { name: "Next.js / React", note: "modern, fast framework" },
  { name: "Tailwind CSS", note: "clean, consistent styling" },
  { name: "Figma", note: "UI design" },
  { name: "Sanity / Contentful", note: "easy CMS" },
  { name: "SEO & Core Web Vitals", note: "found on Google" },
  { name: "Vercel / Netlify", note: "reliable hosting" },
  { name: "Framer Motion", note: "smooth animation" },
  { name: "API & Webhooks", note: "connect anything" },
];

export default function TechStackStrip() {
  return (
    <section className="border-y border-charcoal/5 bg-mist py-12" aria-label="Our tech stack">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <p className="text-center font-heading text-sm font-semibold uppercase tracking-[0.2em] text-charcoal/40">
          Built with tools you can trust
        </p>
        <AnimatedSection>
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {stack.map((tech) => (
              <li
                key={tech.name}
                className="group flex items-center gap-2 rounded-full border border-charcoal/10 bg-cream px-4 py-2 transition-colors hover:border-butter-dark hover:bg-butter/20"
                title={tech.note}
              >
                <span className="h-2 w-2 rounded-full bg-bluegrey transition-colors group-hover:bg-butter-dark" aria-hidden="true" />
                <span className="font-heading text-sm font-medium text-charcoal/80">
                  {tech.name}
                </span>
              </li>
            ))}
          </ul>
        </AnimatedSection>
      </div>
    </section>
  );
}
