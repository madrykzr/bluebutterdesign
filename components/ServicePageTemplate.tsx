import AddOns from "@/components/AddOns";
import AnimatedSection from "@/components/AnimatedSection";
import Button from "@/components/Button";
import CtaBand from "@/components/CtaBand";
import Faq from "@/components/Faq";
import HeroBlobs from "@/components/HeroBlobs";
import Label from "@/components/Label";
import MeltDivider from "@/components/MeltDivider";
import PaymentOptions from "@/components/PaymentOptions";
import PricingCard from "@/components/PricingCard";
import SectionHeading from "@/components/SectionHeading";
import Sticker from "@/components/Sticker";
import WhyPriceRange from "@/components/WhyPriceRange";
import { WhatsAppIcon } from "@/components/Navbar";
import { getPackageBySlug } from "@/lib/packages";
import { site } from "@/lib/site";
import type { ServiceDetail } from "@/lib/services";

/**
 * Shared layout for the four /services sub-pages.
 */
export default function ServicePageTemplate({ service }: { service: ServiceDetail }) {
  const pkg = getPackageBySlug(service.slug);
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-cream">
        <HeroBlobs />
        <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-16 md:px-6 md:pb-24 md:pt-24">
          <AnimatedSection direction="right" className="max-w-4xl">
            <Label>Services / {service.name}</Label>
            <h1
              className="mt-5 wordmark text-charcoal"
              style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}
            >
              {service.headline}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-charcoal/70">
              {service.intro}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href="/contact" variant="butter" size="lg">
                Get a free quote
              </Button>
              <Button href={site.whatsapp} variant="whatsapp" size="lg" external>
                <WhatsAppIcon className="h-5 w-5" />
                WhatsApp us
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Sticker rotate={-4} variant="butter">{service.price}</Sticker>
              <Sticker rotate={3} variant="outline">{service.priceNote}</Sticker>
              <Sticker rotate={-2} variant="blue">⏱ {service.timeline}</Sticker>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <MeltDivider from="#FAFAF7" to="#EEF2F8" />

      {/* What it is + who it's for */}
      <section className="bg-mist py-20 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-2 md:px-6">
          <AnimatedSection>
            <h2 className="font-heading text-2xl font-semibold text-charcoal md:text-3xl">
              What is a {service.name.toLowerCase()}?
            </h2>
            <p className="mt-4 leading-relaxed text-charcoal/70">{service.whatItIs}</p>
          </AnimatedSection>
          <AnimatedSection delay={0.12}>
            <h2 className="font-heading text-2xl font-semibold text-charcoal md:text-3xl">
              Who it&apos;s for
            </h2>
            <ul className="mt-4 space-y-3">
              {service.whoItsFor.map((who) => (
                <li key={who} className="flex items-start gap-3 text-charcoal/80">
                  <span
                    className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-butter-dark"
                    aria-hidden="true"
                  />
                  {who}
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </section>

      <MeltDivider from="#EEF2F8" to="#FAF5E8" />

      {/* What's included */}
      <section className="relative bg-dot-grid bg-buttermilk py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <SectionHeading
            eyebrow="What's included"
            title={`Everything in the ${service.name} package`}
            description={`${service.price} · ${service.priceNote} · Delivered in ${service.timeline}`}
          />
          <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
            {service.included.map((item, i) => (
              <AnimatedSection key={item} delay={i * 0.05}>
                <div className="flex items-start gap-3 rounded-2xl border border-charcoal/5 bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-butter hover:shadow-butter">
                  <svg
                    className="mt-0.5 h-5 w-5 shrink-0 text-bluegrey"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  <span className="text-sm leading-relaxed text-charcoal/80">{item}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <MeltDivider from="#FAF5E8" to="#EEF2F8" />

      {/* Pricing */}
      {pkg && (
        <section className="bg-mist py-20 md:py-24">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <SectionHeading
              eyebrow="Pricing"
              title={`What the ${service.name} costs`}
              description="One-time payment — the price you agree is the price you pay. No hidden fees, no subscriptions."
            />
            <div className="mx-auto max-w-sm">
              <AnimatedSection>
                <PricingCard pkg={pkg} />
              </AnimatedSection>
            </div>
            <WhyPriceRange className="mt-8" />
          </div>
        </section>
      )}

      <MeltDivider from="#EEF2F8" to="#FAFAF7" />

      {/* Automation options for this service */}
      <section className="bg-cream py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <SectionHeading
            eyebrow="Automation options"
            title="Make it work while you sleep"
            description={service.automation.intro}
          />
          <div className="space-y-4">
            {service.automation.options.map((option, i) => (
              <AnimatedSection key={option} delay={i * 0.08}>
                <div className="flex items-start gap-4 rounded-2xl border border-butter-dark/30 bg-butter/15 p-5">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-butter font-heading text-sm font-bold text-charcoal">
                    {i + 1}
                  </span>
                  <p className="text-sm leading-relaxed text-charcoal/80">{option}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <MeltDivider from="#FAFAF7" to="#EEF2F8" />

      {/* FAQ */}
      <section className="bg-mist py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <SectionHeading
            eyebrow="FAQ"
            title="Questions we hear a lot"
            description="Still unsure about something? Just WhatsApp us — no question is too small."
          />
          <AnimatedSection>
            <Faq items={service.faq} />
          </AnimatedSection>
        </div>
      </section>

      <MeltDivider from="#EEF2F8" to="#FAF5E8" />

      {/* Payment options */}
      <div className="bg-buttermilk">
        <PaymentOptions />
      </div>

      <MeltDivider from="#FAF5E8" to="#EEF2F8" />

      {/* Add-ons */}
      <div className="bg-mist">
        <AddOns />
      </div>

      <CtaBand from="#EEF2F8" />
    </>
  );
}
