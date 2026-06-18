import { images, type SiteImage } from "@/lib/images";

export type ProjectTint = "butter" | "bluegrey" | "cream" | "charcoal";

export type Project = {
  slug: string;
  title: string;
  /** mono caption, e.g. "MUSIC PRODUCTION" or "CAFE — DEMO" */
  category: string;
  description: string;
  image: SiteImage;
  href?: string;
  /** path to the pre-built demo index.html inside /public */
  demoPath?: string;
  demo: boolean;
  tint: ProjectTint;
  /** show on the homepage "Selected Work" teaser */
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "parallel-records",
    title: "Parallel Records",
    category: "Music Production",
    description: "A moody, modern site for a Malaysian music production house.",
    image: images.portfolioParallelRecords,
    href: "https://www.parallelrecordsmy.com/",
    demo: false,
    tint: "butter",
    featured: true,
  },
  {
    slug: "kopi-and-co",
    title: "Kopi & Co",
    category: "Cafe — Demo",
    description: "A warm kedai kopi concept with menu and one-tap table bookings.",
    image: images.portfolioDemoCafe,
    demoPath: "/demos/kopi-co/kopi-&-co-demo/index.html",
    demo: true,
    tint: "bluegrey",
    featured: true,
  },
  {
    slug: "atelier-mawar",
    title: "Atelier Mawar",
    category: "Boutique — Demo",
    description: "An elegant boutique concept with a lookbook and WhatsApp enquiries.",
    image: images.portfolioDemoBoutique,
    demoPath: "/demos/atelier-mawar/atelier-mawar-demo/index.html",
    demo: true,
    tint: "cream",
    featured: true,
  },
  {
    slug: "sharp-and-co-barbers",
    title: "Sharp & Co Barbers",
    category: "Barber — Demo",
    description: "A bold barbershop concept with price list and slot booking.",
    image: images.portfolioDemoBarber,
    demoPath: "/demos/sharp-co/sharp-&-co.-barbers/index.html",
    demo: true,
    tint: "charcoal",
    featured: true,
  },
  {
    slug: "whiskerville-pet-shop",
    title: "Whiskerville Pet Shop",
    category: "Pet Shop — Demo",
    description: "A friendly pet shop concept with grooming bookings and a catalog.",
    image: images.portfolioDemoPetshop,
    demoPath: "/demos/whiskerville/whiskerville-pet-shop-demo/index.html",
    demo: true,
    tint: "bluegrey",
    featured: false,
  },
  {
    slug: "lumen-and-loom",
    title: "Lumen & Loom",
    category: "Photographer — Demo",
    description: "Minimal photography portfolio with gallery.",
    image: images.portfolioDemoPhotographer,
    demoPath: "/demos/lumen-loom/lumen-&-loom/index.html",
    demo: true,
    tint: "cream",
    featured: true,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
