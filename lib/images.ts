/**
 * Images manifest — every illustration and mockup the site expects.
 *
 * Drop the real PNG files directly into /public using these exact filenames
 * and the placeholders will be replaced automatically (no code changes needed).
 */
export const images = {
  mascotHero: {
    src: "/mascot-hero.png",
    alt: "Bluebutter mascot, a friendly melting butter character, waving hello",
    width: 560,
    height: 560,
  },
  mascotLaptop: {
    src: "/mascot-laptop.png",
    alt: "Bluebutter mascot happily working on a laptop",
    width: 520,
    height: 520,
  },
  mascotMelted404: {
    src: "/mascot-melted-404.png",
    alt: "Bluebutter mascot fully melted into a puddle",
    width: 480,
    height: 480,
  },
  mascotPeek: {
    src: "/mascot-peek.png",
    alt: "Bluebutter mascot peeking from the corner",
    width: 280,
    height: 280,
  },
  mascotThumbsup: {
    src: "/mascot-thumbsup.png",
    alt: "Bluebutter mascot giving a thumbs-up",
    width: 320,
    height: 320,
  },
  portfolioParallelRecords: {
    src: "/portfolio-parallel-records.png",
    alt: "Browser mockup of the Parallel Records website",
    width: 960,
    height: 640,
  },
  portfolioDemoCafe: {
    src: "/portfolio-demo-cafe.png",
    alt: "Demo concept website for a Malaysian kopitiam cafe",
    width: 960,
    height: 640,
  },
  portfolioDemoBoutique: {
    src: "/portfolio-demo-boutique.png",
    alt: "Demo concept website for a fashion boutique",
    width: 960,
    height: 640,
  },
  portfolioDemoBarber: {
    src: "/portfolio-demo-barber.png",
    alt: "Demo concept website for a barbershop",
    width: 960,
    height: 640,
  },
  portfolioDemoPetshop: {
    src: "/portfolio-demo-petshop.png",
    alt: "Demo concept website for a pet shop",
    width: 960,
    height: 640,
  },
  portfolioDemoPhotographer: {
    src: "/portfolio-demo-photographer.png",
    alt: "Demo concept website for a minimal photography studio",
    width: 960,
    height: 640,
  },
} as const;

export type SiteImage = (typeof images)[keyof typeof images];
