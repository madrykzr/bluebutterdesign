export const site = {
  name: "Bluebutter Design",
  tagline: "Web design & development for businesses across Malaysia",
  description:
    "Bluebutter Design is a Malaysian web design and development agency building custom websites with modern technology. Fast, responsive and designed to convert, for cafes, retail, corporate, e-commerce, creative studios and many more.",
  // TODO: replace with your real domain before going live
  url: "https://bluebutterdesign.my",
  email: "bluebutterdesign@gmail.com",
  phone: "+60 10-552 3737",
  whatsapp: "https://wa.me/60105523737",
  whatsappLabel: "+60 10-552 3737",
  location: "Selangor, Malaysia",
  socials: {
    instagram: "https://www.instagram.com/bluebutterdesignmy",
    facebook: "https://facebook.com/bluebutterdesign",
    tiktok: "https://tiktok.com/@bluebutterdesign",
  },
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Landing Page", href: "/services/landing-page" },
      { label: "Business Website", href: "/services/business-website" },
      { label: "Corporate Website", href: "/services/corporate-website" },
      { label: "E-Commerce", href: "/services/e-commerce" },
    ],
  },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];
