import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import CtaBand from "@/components/CtaBand";
import HeroBlobs from "@/components/HeroBlobs";
import Label from "@/components/Label";
import MarqueeStrip from "@/components/MarqueeStrip";
import ProjectCarousel from "@/components/portfolio/ProjectCarousel";
import Sticker from "@/components/Sticker";
import { projects } from "@/lib/portfolio";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Selected projects and demo concepts across industries, cafes, boutiques, barbershops, interior design, e-commerce, and many more.",
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-cream">
        <HeroBlobs />
        <div className="relative mx-auto max-w-6xl px-4 pb-12 pt-20 md:px-6 md:pb-16 md:pt-28">
          <AnimatedSection direction="right" className="max-w-3xl">
            <Label index="05">Portfolio</Label>
            <h1
              className="mt-5 wordmark text-charcoal"
              style={{ fontSize: "clamp(2.75rem, 9vw, 6.5rem)" }}
            >
              Work we&apos;re proud of
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-charcoal/70">
              We&apos;re a young studio, so we show our work honestly: real
              client projects are marked live, concepts are clearly labelled
              demos. Drag the gallery or use the arrows to explore.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Sticker rotate={-4} variant="blue">1 live project</Sticker>
              <Sticker rotate={3} variant="outline">4 demo concepts</Sticker>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <MarqueeStrip speed={40} direction="left" variant="butter" />

      {/* editorial horizontal showcase */}
      <section className="overflow-hidden bg-mist py-14 md:py-20">
        <ProjectCarousel projects={projects} ariaLabel="All Bluebutter Design projects" />
      </section>

      <CtaBand from="#EEF2F8" />
    </>
  );
}
