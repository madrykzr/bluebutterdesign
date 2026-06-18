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
    href: "https://demokopico.vercel.app/",
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
    href: "https://demoatelier-mawar.vercel.app/",
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
    href: "https://sharp-co-barbers-bluebutterdesign.vercel.app/",
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
    href: "https://demo-whiskerville-bluebutterdesign.vercel.app/",
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
    href: "https://lumen-loom-bluebutterdesign.vercel.app/",
    demo: true,
    tint: "cream",
    featured: true,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
