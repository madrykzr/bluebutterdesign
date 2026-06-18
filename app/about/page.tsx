import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import Button from "@/components/Button";
import CtaBand from "@/components/CtaBand";
import HeroBlobs from "@/components/HeroBlobs";
import Label from "@/components/Label";
import MeltDivider from "@/components/MeltDivider";
import PlaceholderImage from "@/components/PlaceholderImage";
import ProcessTimeline from "@/components/ProcessTimeline";
import SectionHeading from "@/components/SectionHeading";
import Sticker from "@/components/Sticker";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "A Malaysian web design agency building fast, modern websites with Next.js, Tailwind, and Framer Motion. We deliver quality work on time, every time.",
  alternates: { canonical: "/about" },
};

const reasons = [
  {
    title: "We speak human, not tech",
    description:
      "No jargon, no acronyms thrown around to sound clever. We explain everything the way we'd explain it to our own mak, clearly, patiently, in plain English (or Bahasa).",
  },
  {
    title: "Clear quotes, zero hidden fees",
    description:
      "You get one honest quote before we start. Want to add extra features or pages later? We'll always tell you the cost upfront before doing any work, you stay in full control, no surprises mid-project.",
  },
  {
    title: "Your site, your choice",
    description:
      "Your website is fully yours. Host it free on Vercel or Netlify, or use your own provider, your call. We build on a solid foundation so you're never locked in and never dependent on us just to keep things running.",
  },
  {
    title: "Modern stack, modern results",
    description:
      "Next.js, Tailwind, Framer Motion, Vercel, the same tools the world's best agencies use. Fast loads, smooth interactions, ready to scale as your business grows.",
  },
  {
    title: "Fast without cutting corners",
    description:
      "A landing page in a week, a full site in two to three. We work quick because we've done it many times, not because we skip the important parts.",
  },
  {
    title: "We stick around",
    description:
      "Launch day isn't goodbye. Questions, tweaks, upgrades, just WhatsApp us. We answer like a kawan, not a ticket number.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero / studio story */}
      <section className="relative overflow-hidden bg-cream">
        <HeroBlobs />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 pb-20 pt-16 md:px-6 md:pb-24 md:pt-24 lg:grid-cols-2">
          <AnimatedSection direction="right">
            <Label index="03">About Bluebutter Design</Label>
            <h1
              className="mt-5 wordmark text-charcoal"
              style={{ fontSize: "clamp(2.75rem, 8vw, 6rem)" }}
            >
              The story behind the butter
            </h1>
            <div className="mt-4 flex flex-wrap gap-3">
              <Sticker rotate={-4} variant="blue">Made in Malaysia</Sticker>
              <Sticker rotate={3} variant="butter">Est. 2026</Sticker>
            </div>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-charcoal/70 md:text-lg">
              <p>
                Bluebutter Design started with a simple observation: too many
                Malaysian businesses were stuck choosing between overpriced
                agencies with corporate-sized invoices, or cheap template mills
                that left owners with slow, cookie-cutter sites they
                couldn&apos;t even update.
              </p>
              <p>
                We thought websites should be like good butter, warm,
                smooth, and they make everything better. So we built a studio
                around three things: honest fixed pricing, plain-English
                communication, and websites that genuinely work hard for the
                businesses that own them.
              </p>
              <p>
                Today we design and build for cafes, boutiques, photographers,
                music studios, barbers and pet shops across Malaysia, every
                project hand-made, no templates, no nonsense.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection direction="left" delay={0.15}>
            <div className="relative mx-auto max-w-md">
              <div className="rounded-3xl bg-gradient-to-b from-butter/30 to-cream p-6 shadow-card">
                <PlaceholderImage
                  src={images.mascotLaptop.src}
                  alt={images.mascotLaptop.alt}
                  width={images.mascotLaptop.width}
                  height={images.mascotLaptop.height}
                  className="w-full"
                />
              </div>
              <div
                className="absolute -bottom-4 -left-4 -z-10 h-28 w-28 rounded-[55%_45%_50%_50%/45%_55%_45%_55%] bg-bluegrey/20 blur-sm"
                aria-hidden="true"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <MeltDivider from="#FAFAF7" to="#EEF2F8" />

      {/* Why businesses choose us */}
      <section className="bg-mist py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <SectionHeading
            eyebrow="Why us"
            title="Why businesses choose Bluebutter"
            description="There are plenty of web design agencies out there. Here's what makes working with us feel different."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason, i) => (
              <AnimatedSection key={reason.title} delay={i * 0.08} className="h-full">
                <div className="h-full rounded-3xl border border-charcoal/5 bg-cream p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-butter hover:shadow-butter">
                  <span className="font-heading text-2xl" aria-hidden="true">
                    🧈
                  </span>
                  <h3 className="mt-3 font-heading text-lg font-semibold text-charcoal">
                    {reason.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal/70">
                    {reason.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <MeltDivider from="#EEF2F8" to="#FAF5E8" />

      {/* How we work, process timeline */}
      <section className="relative bg-dot-grid bg-buttermilk py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <SectionHeading
            eyebrow="How we work"
            title="From first chat to launch day"
            description="A clear six-step process, so you always know what's happening and what comes next."
          />
          <div className="mx-auto max-w-2xl">
            <ProcessTimeline />
          </div>
          <AnimatedSection className="mt-12 text-center">
            <Button href="/services" variant="primary" size="lg">
              See what we can build for you
            </Button>
          </AnimatedSection>
        </div>
      </section>

      <CtaBand from="#FAF5E8" />
    </>
  );
}
