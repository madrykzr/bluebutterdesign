import type { Metadata } from "next";
import AddOns from "@/components/AddOns";
import AnimatedSection from "@/components/AnimatedSection";
import AutomationSection from "@/components/AutomationSection";
import CtaBand from "@/components/CtaBand";
import HeroBlobs from "@/components/HeroBlobs";
import Label from "@/components/Label";
import MeltDivider from "@/components/MeltDivider";
import PaymentOptions from "@/components/PaymentOptions";
import PricingCard from "@/components/PricingCard";
import SectionHeading from "@/components/SectionHeading";
import SeoSection from "@/components/SeoSection";
import ServiceCard from "@/components/ServiceCard";
import Sticker from "@/components/Sticker";
import WhyPriceRange from "@/components/WhyPriceRange";
import { packages } from "@/lib/packages";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description:
    "Landing pages from RM 500. Business websites from RM 1,200. Corporate sites, e-commerce, and custom builds. Transparent pricing, no hidden fees.",
  alternates: { canonical: "/services" },
};

const overview = [
  {
    title: "Starter Pack Landing Page",
    description:
      "One page online in 48 hours, contact info, WhatsApp button, free hosting. Fixed RM 200, no domain needed.",
    href: "/services/starter-pack-landing-page",
    bestFor: "Home businesses, pop-ups, side hustles",
    rotate: -2,
    offset: "lg:mt-0",
  },
  {
    title: "Pro Landing Page",
    description:
      "One sharp, fast page with your story, services, photos and a WhatsApp button. The quickest way to look professional online.",
    href: "/services/landing-page",
    bestFor: "New & home-based businesses",
    rotate: 1.5,
    offset: "lg:mt-10",
  },
  {
    title: "Business Website",
    description:
      "Up to 5 pages with booking forms, a CMS you update yourself, and full SEO. The sweet spot for most growing businesses.",
    href: "/services/business-website",
    bestFor: "Cafes, salons, studios, boutiques",
    rotate: -1.5,
    offset: "lg:mt-0",
  },
  {
    title: "Corporate Website",
    description:
      "A polished multi-page presence with blog and analytics, for companies that get googled before the deal closes.",
    href: "/services/corporate-website",
    bestFor: "Established SMEs & agencies",
    rotate: 1,
    offset: "lg:mt-10",
  },
  {
    title: "E-Commerce",
    description:
      "Your own online store with Malaysian payment gateways, no marketplace commission eating your margin.",
    href: "/services/e-commerce",
    bestFor: "Retail shops & product brands",
    rotate: -1,
    offset: "lg:mt-0",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-cream">
        <HeroBlobs />
        <div className="relative mx-auto max-w-6xl px-4 pb-12 pt-20 md:px-6 md:pb-16 md:pt-28">
          <AnimatedSection direction="right" className="max-w-4xl">
            <Label index="04">Services</Label>
            <h1
              className="mt-5 wordmark text-charcoal"
              style={{ fontSize: "clamp(2.75rem, 9vw, 7rem)" }}
            >
              Pick the website that fits today
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-charcoal/70">
              Five packages, all custom-designed, all one-time payment.
              Start small and upgrade anytime, we build every site on the same
              solid foundation.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Sticker rotate={-4} variant="butter">One-time payment</Sticker>
              <Sticker rotate={3} variant="outline">No rental fees</Sticker>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Overview grid, staggered, rotated */}
      <section className="bg-cream pb-20 md:pb-24">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:grid-cols-2 md:px-6 lg:grid-cols-3 xl:grid-cols-5">
          {overview.map((service, i) => (
            <AnimatedSection key={service.href} delay={i * 0.1} className={`h-full ${service.offset}`}>
              <ServiceCard
                title={service.title}
                description={service.description}
                href={service.href}
                bestFor={service.bestFor}
                index={String(i + 1).padStart(2, "0")}
                rotate={service.rotate}
                icon={
                  <span className="font-mono text-base font-bold" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                }
              />
            </AnimatedSection>
          ))}
        </div>
      </section>

      <MeltDivider from="#FAFAF7" to="#FAF5E8" />

      {/* Full packages, horizontal sticky-note stack. pt-16 reserves room
          for the "Most Popular" sticker that protrudes above the cards. */}
      <section id="packages" className="bg-buttermilk pb-20 pt-16 md:pb-28 md:pt-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading
            align="left"
            index="05"
            eyebrow="Packages & pricing"
            title="Honest prices in MYR, everything spelled out"
            description="One-time payment, your website is yours. Tap the 'more features' link inside any card to see everything included."
          />
        </div>
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid grid-cols-1 gap-6 pt-16 sm:grid-cols-2 lg:grid-cols-3">
            {packages.map((pkg, i) => (
              <PricingCard key={pkg.name} pkg={pkg} index={String(i + 1).padStart(2, "0")} />
            ))}
          </div>
        </div>

        <WhyPriceRange className="mt-12 px-4 md:px-6" />

        <AnimatedSection className="mx-auto mt-8 max-w-3xl px-4 md:px-6">
          <div className="rounded-[28px] border border-butter-dark/30 bg-butter/15 p-6 text-center">
            <p className="text-sm leading-relaxed text-charcoal/80">
              <strong className="font-heading">Not sure which package?</strong>{" "}
              Tell us about your business on{" "}
              <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="font-medium text-bluegrey-dark underline-offset-2 hover:underline">
                WhatsApp
              </a>{" "}
              and we&apos;ll recommend the cheapest option that genuinely fits.
              Sometimes that&apos;s the smallest one, and we&apos;ll say so.
            </p>
          </div>
        </AnimatedSection>
      </section>

      <MeltDivider from="#FAF5E8" to="#EEF2F8" />

      {/* Payment options */}
      <div className="bg-mist">
        <PaymentOptions index="06" />
      </div>

      <MeltDivider from="#EEF2F8" to="#FAF5E8" />

      {/* Add-ons */}
      <div className="bg-buttermilk">
        <AddOns index="07" />
      </div>

      <MeltDivider from="#FAF5E8" to="#EEF2F8" />

      {/* Automation comparison */}
      <AutomationSection />

      <MeltDivider from="#EEF2F8" to="#FAF5E8" />

      {/* SEO strategy */}
      <SeoSection />

      <CtaBand from="#FAF5E8" />
    </>
  );
}
