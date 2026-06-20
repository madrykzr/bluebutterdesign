import AnimatedSection from "@/components/AnimatedSection";

const domainRows = [
  {
    ext: ".com",
    note: "The classic. Works for any business, trusted worldwide.",
    range: "RM40–60 / year",
    highlight: true,
  },
  {
    ext: ".net / .org",
    note: "Solid alternatives if your preferred .com name is taken.",
    range: "RM55–75 / year",
  },
  {
    ext: ".my / .com.my",
    note: "Malaysian local domain. Builds local trust and helps local SEO.",
    range: "RM80–120 / year",
  },
  {
    ext: ".co / .store / .studio",
    note: "Niche or branded extensions for specific industries.",
    range: "RM100–250 / year",
  },
  {
    ext: ".io",
    note: "Popular with tech and creative brands. Premium pricing.",
    range: "RM200–400 / year",
  },
];

export default function YearlyRunningCosts() {
  return (
    <AnimatedSection delay={0.1}>
      <div className="mt-8 rounded-3xl border border-charcoal/8 bg-white p-7 shadow-card md:p-8">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-mono text-bluegrey-dark">
              After launch
            </p>
            <h3 className="mt-1 font-heading text-xl font-semibold text-charcoal">
              Yearly running costs
            </h3>
          </div>
          <p className="rounded-full bg-butter/40 px-4 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-mono text-charcoal/80">
            Typically RM40–120 / year total
          </p>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-charcoal/65">
          Your website build is a one-time payment. The only thing you pay every year after is your domain name. Hosting on Vercel is free and handles most Malaysian SME traffic comfortably.
        </p>

        <div className="mt-6">
          <p className="mb-2 font-mono text-[10px] uppercase tracking-mono text-charcoal/40">
            Domain name — choose one
          </p>
          <div className="overflow-hidden rounded-2xl border border-charcoal/8">
            {domainRows.map((row, i) => (
              <div
                key={row.ext}
                className={`flex flex-col gap-1 px-5 py-3.5 sm:flex-row sm:items-center sm:gap-4 ${
                  i < domainRows.length - 1 ? "border-b border-charcoal/6" : ""
                } ${row.highlight ? "bg-butter/12" : "bg-white"}`}
              >
                <span className="w-36 shrink-0 font-mono text-[12px] font-semibold text-charcoal">
                  {row.ext}
                  {row.highlight && (
                    <span className="ml-2 rounded-full bg-butter px-2 py-0.5 font-mono text-[9px] uppercase tracking-mono text-charcoal">
                      Popular
                    </span>
                  )}
                </span>
                <p className="flex-1 text-xs leading-relaxed text-charcoal/60">{row.note}</p>
                <span className="shrink-0 text-right text-xs font-semibold text-charcoal/80 sm:text-right">
                  {row.range}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <div className="flex-1 rounded-2xl border border-charcoal/5 bg-mist p-4">
            <p className="font-mono text-[10px] uppercase tracking-mono text-bluegrey-dark">
              Hosting
            </p>
            <p className="mt-1 text-sm font-semibold text-charcoal">Free</p>
            <p className="mt-0.5 text-xs leading-relaxed text-charcoal/55">
              Vercel free tier. Handles most Malaysian SME traffic well. Upgrade only if you grow past around 100,000 page views a month, which is rare for SMEs.
            </p>
          </div>
          <div className="flex-1 rounded-2xl border border-charcoal/5 bg-mist p-4">
            <p className="font-mono text-[10px] uppercase tracking-mono text-bluegrey-dark">
              Our recommendation
            </p>
            <p className="mt-1 text-sm font-semibold text-charcoal">.com or .my</p>
            <p className="mt-0.5 text-xs leading-relaxed text-charcoal/55">
              Most clients go with .com for the price and familiarity, or .my if they want to signal they are a Malaysian business. We register it for you during setup.
            </p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
