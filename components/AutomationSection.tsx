import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";

type AutomationOption = {
  badge?: string;
  label: string;
  title: string;
  monthly: string;
  bestFor: string;
  description: string;
  items: string[];
  highlight?: boolean;
};

const options: AutomationOption[] = [
  {
    badge: "No Monthly Fees",
    label: "Option A",
    title: "Budget Smart",
    monthly: "RM0 / month",
    bestFor: "Most businesses",
    description:
      "We build your form to talk directly to free Google tools. One-time setup by us, zero subscription fees — forever.",
    items: [
      "Custom web form → Google Sheets (auto-saves every enquiry)",
      "Google Calendar (auto-creates bookings)",
      "Google Apps Script (auto-reply emails & notifications)",
      "One-time setup by us, nothing to renew",
    ],
    highlight: true,
  },
  {
    label: "Option B",
    title: "Ready-Made Tools",
    monthly: "Free tiers, paid as you grow",
    bestFor: "Businesses that want polished dashboards",
    description:
      "Trusted off-the-shelf tools with friendly interfaces. Start free, upgrade only when your business grows into it.",
    items: [
      "Forms: Tally.so, Formspree, Typeform",
      "Bookings: Cal.com, Calendly",
      "Workflow automation: Zapier, Make, n8n",
      "We set everything up and show you how it works",
    ],
  },
  {
    label: "Option C",
    title: "WhatsApp First",
    monthly: "Free",
    bestFor: "Walk-in businesses & quick chats",
    description:
      "Most Malaysian customers prefer to just WhatsApp you. We make that one tap away from every page.",
    items: [
      "WhatsApp Business click-to-chat buttons",
      "Catalog links for your products or services",
      "Auto-greeting message setup",
      "Works with the phone you already have",
    ],
  },
];

export default function AutomationSection({ compact = false }: { compact?: boolean }) {
  return (
    <section className="relative bg-noise bg-mist py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Automation & Integration"
          title="Let your website do the admin work"
          description="Enquiries, bookings and follow-ups — handled automatically while you run your business. Pick the option that fits your budget. We'll recommend honestly."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {options.map((option, i) => (
            <AnimatedSection key={option.title} delay={i * 0.12} className="h-full">
              <div
                className={`relative flex h-full flex-col rounded-3xl border bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-butter ${
                  option.highlight
                    ? "border-butter-dark ring-2 ring-butter"
                    : "border-charcoal/5 hover:border-butter"
                }`}
              >
                {option.badge && (
                  <span className="absolute -top-3.5 left-7 rounded-full bg-butter px-4 py-1 font-heading text-xs font-semibold uppercase tracking-wider text-charcoal shadow-card">
                    {option.badge}
                  </span>
                )}
                <p className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-bluegrey">
                  {option.label}
                </p>
                <h3 className="mt-1 font-heading text-xl font-semibold text-charcoal">
                  {option.title}
                </h3>
                <p className="mt-2 font-heading text-sm font-semibold text-bluegrey-dark">
                  {option.monthly}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/70">
                  {option.description}
                </p>
                <ul className="mt-5 flex-1 space-y-2.5">
                  {option.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-charcoal/80">
                      <svg
                        className="mt-0.5 h-4 w-4 shrink-0 text-butter-dark"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 rounded-2xl bg-cream px-4 py-2.5 text-xs font-medium text-charcoal/60">
                  Best for: {option.bestFor}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {!compact && (
          <AnimatedSection delay={0.2}>
            <div className="mt-10 rounded-3xl border border-bluegrey/20 bg-bluegrey/5 p-7 md:p-8">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="inline-flex items-center gap-2 rounded-full bg-bluegrey px-4 py-1 font-heading text-xs font-semibold uppercase tracking-wider text-white">
                    Add-on · Extra charge
                  </p>
                  <h3 className="mt-3 font-heading text-lg font-semibold text-charcoal">
                    Payment Gateways (e-commerce only)
                  </h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-charcoal/70">
                    Selling online? We can connect a payment gateway so customers pay
                    directly on your site. Available as an add-on for e-commerce
                    projects. <strong>Simple landing pages don&apos;t need this</strong> —
                    we&apos;ll tell you honestly if you can skip it.
                  </p>
                </div>
                <ul className="flex flex-wrap gap-2 md:max-w-xs md:justify-end">
                  {["Stripe", "Billplz", "toyyibPay", "SenangPay", "iPay88"].map((gateway) => (
                    <li
                      key={gateway}
                      className="rounded-full border border-charcoal/10 bg-white px-4 py-1.5 font-heading text-sm font-medium text-charcoal/80"
                    >
                      {gateway}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>
        )}
      </div>
    </section>
  );
}
