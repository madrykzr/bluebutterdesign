import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import Sticker from "@/components/Sticker";

const milestones = [
  { pct: "50%", label: "Deposit to start" },
  { pct: "25%", label: "After design mockup approval" },
  { pct: "25%", label: "On launch & handover" },
];

type PaymentOptionsProps = {
  index?: string;
  dark?: boolean;
};

export default function PaymentOptions({ index = "06", dark = false }: PaymentOptionsProps) {
  const headingProps = { dark } as const;
  return (
    <section className={`relative py-20 md:py-28 ${dark ? "bg-charcoal" : ""}`}>
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          align="left"
          index={index}
          eyebrow="Flexible payment"
          title="Pay how you want"
          description="Two simple ways to pay. Choose whichever fits your cashflow — both keep things crystal clear."
          {...headingProps}
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Option 1 — Pay in full */}
          <AnimatedSection delay={0} className="h-full">
            <div className="relative flex h-full flex-col rounded-[28px] border border-butter-dark/40 bg-butter/25 p-7 shadow-card md:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-mono text-bluegrey-dark">
                    Option 01
                  </p>
                  <h3 className="mt-1 font-heading text-2xl font-semibold text-charcoal">
                    Pay in full
                  </h3>
                </div>
                <Sticker rotate={-5} variant="charcoal">Save 5%</Sticker>
              </div>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-mono text-charcoal/55">
                For projects RM 500 and above
              </p>
              <p className="mt-4 text-sm leading-relaxed text-charcoal/75 md:text-base">
                Save 5% when you pay the full amount upfront. Fastest project
                start, simplest paperwork.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-charcoal/80">
                <Bullet>5% discount applied to your quote</Bullet>
                <Bullet>One invoice, one receipt</Bullet>
                <Bullet>We start the day payment lands</Bullet>
              </ul>
            </div>
          </AnimatedSection>

          {/* Option 2 — Milestone installments */}
          <AnimatedSection delay={0.12} className="h-full">
            <div className="relative flex h-full flex-col rounded-[28px] border border-bluegrey/30 bg-bluegrey/10 p-7 shadow-card md:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-mono text-bluegrey-dark">
                    Option 02
                  </p>
                  <h3 className="mt-1 font-heading text-2xl font-semibold text-charcoal">
                    Milestone installments
                  </h3>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-mono text-charcoal/55">
                    For projects RM 501 and above · max 3 months
                  </p>
                </div>
                <Sticker rotate={4} variant="outline">No interest</Sticker>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-charcoal/75 md:text-base">
                Split into up to 3 payments tied to project milestones. No
                interest, no fees, no subscriptions — just pay as we hit each stage.
              </p>
              <ol className="mt-5 space-y-3">
                {milestones.map((m, i) => (
                  <li
                    key={m.label}
                    className="flex items-center gap-4 rounded-2xl border border-charcoal/8 bg-white p-3"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-bluegrey font-heading text-sm font-bold text-white">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="font-heading text-base font-semibold text-charcoal">
                        {m.pct}
                      </p>
                      <p className="font-mono text-[11px] uppercase tracking-mono text-charcoal/55">
                        {m.label}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.2}>
          <p className="mx-auto mt-8 max-w-3xl rounded-2xl border border-charcoal/8 bg-white/70 p-5 text-center text-sm leading-relaxed text-charcoal/70 shadow-card backdrop-blur-sm">
            <span className="font-mono text-[11px] uppercase tracking-mono text-bluegrey-dark">
              How to pay
            </span>{" "}
            — We accept bank transfer (Maybank / CIMB), TNG eWallet, DuitNow QR
            and major cards. A proper invoice is provided for every payment.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2.5">
      <svg
        className="mt-0.5 h-4 w-4 shrink-0 text-bluegrey"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2.5}
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
      </svg>
      <span>{children}</span>
    </li>
  );
}
