import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";

type AddOn = {
  title: string;
  price: string;
  /** Mono caption that follows the price, e.g. "per month" */
  unit?: string;
  description: string;
  popular?: boolean;
};

const addOns: AddOn[] = [
  {
    title: "Monthly Care Plan",
    price: "RM 150",
    unit: "per month",
    description:
      "Hosting management, security updates, up to 2 hours of content edits each month, and priority WhatsApp support.",
    popular: true,
  },
  {
    title: "Payment Gateway Setup",
    price: "From RM 500",
    unit: "one-time · e-commerce",
    description:
      "Stripe, Billplz, toyyibPay, SenangPay or iPay88 — we recommend the best fit for your business and bank.",
  },
  {
    title: "Extra page",
    price: "RM 200",
    unit: "per page",
    description:
      "Need more than the base package allows? Add custom-designed pages anytime — same care, same speed.",
  },
  {
    title: "Logo design",
    price: "From RM 400",
    unit: "one-time",
    description:
      "A clean, modern logo for your brand. Includes 2 directions, 2 revision rounds and final exports for print + web.",
  },
  {
    title: "Copywriting",
    price: "RM 150",
    unit: "per page",
    description:
      "Words that sound like you, written by us. Friendly, search-friendly English (or Bahasa) tailored to your audience.",
  },
];

type AddOnsProps = {
  index?: string;
};

export default function AddOns({ index = "07" }: AddOnsProps) {
  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          align="left"
          index={index}
          eyebrow="Add-ons & care"
          title="Bolt-ons for whatever else you need"
          description="Mix and match with any package. Quoted upfront, never surprise-billed."
        />

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {addOns.map((addon, i) => (
            <AnimatedSection key={addon.title} delay={i * 0.08} as="li" className="h-full">
              <div
                className={`relative flex h-full flex-col rounded-[24px] border bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-butter ${
                  addon.popular
                    ? "border-butter-dark/50 ring-1 ring-butter"
                    : "border-charcoal/8 hover:border-butter"
                }`}
              >
                {addon.popular && (
                  <span className="absolute -top-3 right-5 rounded-full bg-butter px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-mono text-charcoal shadow-sticker">
                    Popular
                  </span>
                )}
                <p className="font-mono text-[11px] uppercase tracking-mono text-bluegrey">
                  Add-on {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-1 font-heading text-lg font-semibold text-charcoal">
                  {addon.title}
                </h3>
                <p
                  className="mt-3 font-heading font-bold text-charcoal"
                  style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.5rem)", lineHeight: 1.1 }}
                >
                  {addon.price}
                </p>
                {addon.unit && (
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-mono text-charcoal/50">
                    {addon.unit}
                  </p>
                )}
                <p className="mt-4 flex-1 text-sm leading-relaxed text-charcoal/70">
                  {addon.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </ul>
      </div>
    </section>
  );
}
