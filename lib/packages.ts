/**
 * Pricing packages — single source of truth for the home pricing section,
 * the /services page, and each service sub-page's hero. Edit values here,
 * the whole site updates.
 *
 * Dash conventions (don't switch to plain hyphens):
 *   • Price ranges use EN dash with spaces: "RM 500 – RM 1,200"
 *   • Delivery / range text uses EN dash with no spaces: "3–5 working days"
 *   • Label separators use EM dash with spaces: "DELIVERY — 3–5 working days"
 */
export type Package = {
  name: string;
  subtitle: string;
  /** Big headline price, e.g. "From RM 500" */
  priceFrom: string;
  /** Range sublabel, e.g. "RM 500 – RM 1,200" (en-dash + spaces) */
  priceRange: string;
  /** Caption that follows the range, e.g. "depending on scope" */
  rangeNote: string;
  /** Mono caption under the price, e.g. "One-time" */
  priceNote: string;
  description: string;
  bestFor: string;
  /** First 6–8 features shown by default */
  visibleFeatures: string[];
  /** Hidden features revealed by the "+ X more features" toggle */
  moreFeatures: string[];
  /** En-dash, no spaces — "3–5 working days" or "1–2 weeks" */
  delivery: string;
  href: string;
  popular?: boolean;
  /** Optional extra footnote shown under the card (e.g. e-commerce gateway add-on) */
  footnote?: string;
};

export const packages: Package[] = [
  {
    name: "Promo",
    subtitle: "Promo Landing Page",
    priceFrom: "From RM 200",
    priceRange: "RM 200 – RM 350",
    rangeNote: "depending on content",
    priceNote: "One-time",
    description:
      "A simple promotional page to get your business online fast. Share the link anywhere — no domain purchase needed.",
    bestFor: "Home businesses, pop-ups, side hustles on a tight budget",
    visibleFeatures: [
      "1 custom promotional page",
      "WhatsApp click-to-chat button",
      "Contact info & business details",
      "Social media links",
      "Mobile-friendly layout",
      "Free hosting (Vercel / Netlify / Beacon.ai)",
    ],
    moreFeatures: [
      "No domain required — shareable free subdomain",
      "Your brand colours & logo",
      "Basic on-brand typography",
      "Ready to upgrade to a full site anytime",
    ],
    delivery: "1–2 working days",
    href: "/services/promo-landing-page",
  },
  {
    name: "Starter",
    subtitle: "Landing Page",
    priceFrom: "From RM 500",
    priceRange: "RM 500 – RM 1,200",
    rangeNote: "depending on scope",
    priceNote: "One-time",
    description:
      "One beautiful page that tells customers who you are and how to reach you. Perfect for getting online fast.",
    bestFor: "New businesses, freelancers, single-product launches",
    visibleFeatures: [
      "1 custom-designed page",
      "WhatsApp click-to-chat button",
      "Enquiry form (Google Sheets connected)",
      "Mobile-friendly & fast loading",
      "Basic on-page SEO",
      "1 revision round",
    ],
    moreFeatures: [
      "Free SSL (HTTPS lock)",
      "Google Analytics setup",
      "Favicon & social share image",
      "Meta tags & Open Graph",
      "Stock photos sourced (up to 5)",
      "WhatsApp auto-greeting setup",
      "Hosting setup guidance",
      "Domain connection assistance",
      "30-day post-launch bug fix support",
    ],
    delivery: "3–5 working days",
    href: "/services/landing-page",
  },
  {
    name: "Business",
    subtitle: "Business Website",
    priceFrom: "From RM 1,200",
    priceRange: "RM 1,200 – RM 2,500",
    rangeNote: "depending on scope",
    priceNote: "One-time",
    description:
      "A proper home for your business — up to 5 pages with booking forms and easy content editing.",
    bestFor: "Cafes, salons, photography studios, small boutiques",
    visibleFeatures: [
      "Up to 5 custom pages",
      "CMS — edit content yourself",
      "Booking / enquiry form integration",
      "Full SEO setup + Google Business Profile",
      "WhatsApp integration with auto-replies",
      "Mobile-first responsive design",
      "2 revision rounds",
    ],
    moreFeatures: [
      "Free SSL & security setup",
      "Google Analytics + Search Console",
      "Google Maps embed",
      "Image gallery / portfolio section",
      "Customer testimonials section",
      "Blog-ready structure",
      "Social media integration (IG/FB feed)",
      "Newsletter signup (Mailchimp/Brevo free tier)",
      "Sitemap + robots.txt",
      "60-day post-launch support",
    ],
    delivery: "1–2 weeks",
    href: "/services/business-website",
    popular: true,
  },
  {
    name: "Corporate",
    subtitle: "Corporate Website",
    priceFrom: "From RM 2,000",
    priceRange: "RM 2,000 – RM 3,000",
    rangeNote: "depending on scope",
    priceNote: "One-time",
    description:
      "For established companies that need a polished multi-page presence with a blog and analytics.",
    bestFor: "Established companies, professional services, multi-branch businesses",
    visibleFeatures: [
      "Multi-page custom design",
      "CMS + blog / news section",
      "Analytics dashboard setup",
      "Advanced SEO & Core Web Vitals",
      "Priority WhatsApp support",
      "Multi-language ready (BM/EN)",
      "Team & careers page",
      "3 revision rounds",
    ],
    moreFeatures: [
      "Custom contact forms per department",
      "Google Tag Manager setup",
      "Schema markup (LocalBusiness, Organization)",
      "Performance monitoring dashboard",
      "Live chat integration option",
      "Press / media kit page",
      "Case studies section",
      "Downloadable resources (PDFs / brochures)",
      "Cookie consent banner (PDPA compliant)",
      "Privacy policy & terms template",
      "Staging environment for previews",
      "90-day post-launch support",
    ],
    delivery: "2–3 weeks",
    href: "/services/corporate-website",
  },
  {
    name: "E-Commerce",
    subtitle: "Online Store",
    priceFrom: "From RM 2,000",
    priceRange: "RM 2,000 – RM 5,000",
    rangeNote: "depending on scope",
    priceNote: "One-time",
    description:
      "Sell online with a store your customers will love — products, cart, and Malaysian payment options.",
    bestFor: "Retail brands, online stores, product-based businesses",
    visibleFeatures: [
      "Online store with cart & checkout",
      "Product management dashboard",
      "Mobile-first storefront",
      "SEO + product schema",
      "Order email & WhatsApp notifications",
      "Inventory tracking",
      "3 revision rounds",
      "Up to 50 products at launch",
    ],
    moreFeatures: [
      "Product variations (size / colour / etc.)",
      "Discount codes & coupons",
      "Customer accounts & order history",
      "Wishlist functionality",
      "Product search & filter",
      "Related products / cross-sell",
      "Abandoned cart recovery emails",
      "Shipping zone setup (Malaysia / SEA)",
      "Tax (SST) configuration",
      "Sales analytics dashboard",
      "PDPA-compliant checkout",
      "90-day post-launch support",
    ],
    delivery: "3–4 weeks",
    href: "/services/e-commerce",
    footnote:
      "Payment gateway integration is a separate add-on (Stripe / Billplz / toyyibPay / SenangPay / iPay88 — from RM 500).",
  },
];

/** Find the package whose href matches /services/{slug} */
export function getPackageBySlug(slug: string) {
  return packages.find((p) => p.href === `/services/${slug}`);
}

/** Universal footnote shown beneath every pricing card. */
export const pricingDisclaimer =
  "All prices in MYR · one-time payment · domain & hosting not included.";
