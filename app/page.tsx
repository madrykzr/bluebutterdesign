import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import AutomationSection from "@/components/AutomationSection";
import Button from "@/components/Button";
import CtaBand from "@/components/CtaBand";
import HeroHome from "@/components/HeroHome";
import CursorMascot from "@/components/motion/CursorMascot";
import MarqueeStrip from "@/components/MarqueeStrip";
import MeltDivider from "@/components/MeltDivider";
import ProjectCarousel from "@/components/portfolio/ProjectCarousel";
import PricingCard from "@/components/PricingCard";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import TechStackStrip from "@/components/TechStackStrip";
import Testimonials from "@/components/Testimonials";
import WhyPriceRange from "@/components/WhyPriceRange";
import { featuredProjects } from "@/lib/portfolio";
import { packages } from "@/lib/packages";
import { site } from "@/lib/site";


export const metadata: Metadata = {
  title: `${site.name} — Web Design & Development Malaysia`,
  description:
    "Custom websites built with modern technology. Fast, responsive, and designed to convert. Serving businesses across Malaysia — cafes, retail, corporate, e-commerce, creative studios, and many more.",
  alternates: { canonical: "/" },
};

const servicesOverview = [
  {
    title: "Landing Page",
    description: "One sharp page with your story, services and a WhatsApp button. Online by next week.",
    href: "/services/landing-page",
    bestFor: "New & home businesses",
    icon: <PageIcon />,
    rotate: -1.5,
    offset: "lg:mt-0",
  },
  {
    title: "Business Website",
    description: "Up to 5 pages with bookings, CMS and SEO. The sweet spot for most growing businesses.",
    href: "/services/business-website",
    bestFor: "Cafes, salons, studios",
    icon: <StoreIcon />,
    rotate: 1.5,
    offset: "lg:mt-10",
  },
  {
    title: "Corporate Website",
    description: "Multi-page presence with blog and analytics, for companies that get googled before deals.",
    href: "/services/corporate-website",
    bestFor: "Established SMEs",
    icon: <BuildingIcon />,
    rotate: -1,
    offset: "lg:mt-0",
  },
  {
    title: "E-Commerce",
    description: "Your own online store with Malaysian payment options — no marketplace commissions.",
    href: "/services/e-commerce",
    bestFor: "Retail & product brands",
    icon: <CartIcon />,
    rotate: 1,
    offset: "lg:mt-10",
  },
];

const socialProof = [
  "Trusted by businesses across Malaysia",
  "RM0/month automation",
  "Reply within 1 working day",
  "Modern stack — Next.js + Tailwind",
  "Built for performance & SEO",
  "Transparent pricing",
];

export default function HomePage() {
  return (
    <>
      <HeroHome />
      <CursorMascot />

      {/* marquee #1 — categories, mono, butter, scrolling left */}
      <MarqueeStrip speed={45} direction="left" variant="butter" />

      {/* ── Services overview — staggered, rotated cards ───── */}
      <section className="relative bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <SectionHeading
            align="left"
            index="02"
            eyebrow="What we build"
            title="One agency, every kind of website"
            description="From a single landing page to a full online store — pick what fits today, upgrade when you grow. We'll honestly tell you which one you need."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {servicesOverview.map((s, i) => (
              <AnimatedSection key={s.href} delay={i * 0.1} className={`h-full ${s.offset}`}>
                <ServiceCard
                  title={s.title}
                  description={s.description}
                  href={s.href}
                  bestFor={s.bestFor}
                  icon={s.icon}
                  index={String(i + 1).padStart(2, "0")}
                  rotate={s.rotate}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <MeltDivider from="#FAFAF7" to="#EEF2F8" />

      {/* ── Automation & Integration ───────────────────────── */}
      <AutomationSection />

      <MeltDivider from="#EEF2F8" to="#FAF5E8" />

      {/* ── Selected work — editorial carousel ─────────────── */}
      <section className="overflow-hidden bg-buttermilk py-20 md:py-28">
        <div className="mx-auto mb-4 flex max-w-6xl flex-col gap-6 px-4 md:flex-row md:items-end md:justify-between md:px-6">
          <SectionHeading
            align="left"
            index="03"
            eyebrow="Selected work"
            title="Real work, real businesses"
            description="Drag, use the arrows, or tap the dots to explore."
          />
          <div className="shrink-0 md:pb-16">
            <Button href="/portfolio" variant="secondary">
              See all work →
            </Button>
          </div>
        </div>
        <ProjectCarousel projects={featuredProjects} ariaLabel="Selected Bluebutter Design work" />
      </section>

      {/* ── Tech stack ─────────────────────────────────────── */}
      <TechStackStrip />

      {/* ── Packages — horizontal sticky-note stack ────────── */}
      <section className="relative bg-noise bg-cream pb-20 pt-16 md:pb-28 md:pt-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <SectionHeading
            align="left"
            index="04"
            eyebrow="Packages"
            title="Simple packages, honest prices"
            description=”Every package is one-time payment — your website is yours, no rental. Tap the “more features” link inside any card to see the full list.”
          />
        </div>
        <div className=”mx-auto max-w-6xl px-4 md:px-6”>
          <div className=”grid grid-cols-1 gap-6 pt-16 sm:grid-cols-2 xl:grid-cols-4”>
            {packages.map((pkg, i) => (
              <PricingCard key={pkg.name} pkg={pkg} index={String(i + 1).padStart(2, “0”)} />
            ))}
          </div>
        </div>

        <WhyPriceRange className="mt-12 px-4 md:px-6" />

        <p className="mx-auto mt-8 max-w-6xl px-4 font-mono text-[11px] uppercase tracking-mono text-charcoal/50 md:px-6">
          Not sure which fits?{" "}
          <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="text-bluegrey-dark underline">
            WhatsApp us
          </a>{" "}
          — we recommend the cheapest option that genuinely works.
        </p>
      </section>

      {/* marquee #2 — social proof, charcoal, scrolling right, slower */}
      <MarqueeStrip items={socialProof} speed={32} direction="right" variant="charcoal" />

      {/* ── Testimonials ───────────────────────────────────── */}
      <Testimonials />

      {/* ── CTA band ───────────────────────────────────────── */}
      <CtaBand from="#FAF5E8" />
    </>
  );
}

/* ── Small inline icons ─────────────────────────────────── */

function PageIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
    </svg>
  );
}

function StoreIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
    </svg>
  );
}
