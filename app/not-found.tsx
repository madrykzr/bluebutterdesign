import type { Metadata } from "next";
import Button from "@/components/Button";
import PlaceholderImage from "@/components/PlaceholderImage";
import Sticker from "@/components/Sticker";
import MeltDivider from "@/components/MeltDivider";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-cream">
      {/* drips from the top edge */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 z-10 h-32">
        {[
          { x: "12%", h: 80 },
          { x: "34%", h: 54 },
          { x: "62%", h: 96 },
          { x: "84%", h: 60 },
        ].map((d, i) => (
          <div
            key={i}
            className="absolute top-0 rounded-b-full bg-butter/70"
            style={{ left: d.x, width: 7, height: d.h }}
          >
            <span className="absolute -bottom-1.5 left-1/2 block h-3 w-3 -translate-x-1/2 rounded-full bg-butter/70" />
          </div>
        ))}
      </div>

      <div className="relative mx-auto flex max-w-5xl flex-col items-center px-4 py-24 text-center md:py-32">
        <span className="mono-label">Error 404 / This page melted</span>

        {/* oversized 404 with a melting-drip mask on the numbers */}
        <div className="relative mt-6">
          <h1
            className="wordmark leading-none text-butter-dark"
            style={{ fontSize: "clamp(7rem, 32vw, 22rem)" }}
            aria-label="404"
          >
            404
          </h1>
          {/* drip strands hanging off the numbers */}
          <svg
            aria-hidden="true"
            viewBox="0 0 600 120"
            preserveAspectRatio="none"
            className="absolute -bottom-8 left-1/2 h-24 w-[min(90vw,600px)] -translate-x-1/2 text-butter-dark"
          >
            {[60, 150, 250, 330, 430, 520].map((x, i) => (
              <g key={i}>
                <rect x={x} y={0} width={10} height={40 + (i % 3) * 26} rx={5} fill="currentColor" />
                <circle cx={x + 5} cy={40 + (i % 3) * 26} r={7} fill="currentColor" />
              </g>
            ))}
          </svg>
        </div>

        <div className="mt-16 w-44 md:w-56">
          <PlaceholderImage
            src={images.mascotMelted404.src}
            alt={images.mascotMelted404.alt}
            width={images.mascotMelted404.width}
            height={images.mascotMelted404.height}
            priority
          />
        </div>

        <h2 className="mt-8 font-heading text-3xl font-semibold text-charcoal md:text-4xl">
          Oh butter. This page melted away.
        </h2>
        <p className="mt-4 max-w-md text-charcoal/70">
          We looked everywhere, but this one&apos;s gone full puddle. Let&apos;s
          scoop you back to somewhere useful.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button href="/" variant="butter" size="lg">
            Back to home
          </Button>
          <Button href="/contact" variant="secondary" size="lg">
            Contact us
          </Button>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Sticker rotate={-5} variant="outline">404 ≠ the end</Sticker>
          <Sticker rotate={4} variant="butter">Still smooth</Sticker>
        </div>
      </div>

      <MeltDivider from="#FAFAF7" to="#FAFAF7" />
    </section>
  );
}
