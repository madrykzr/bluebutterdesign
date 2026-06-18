import type { FaqItem } from "@/components/Faq";

export type ServiceDetail = {
  slug: string;
  name: string;
  headline: string;
  intro: string;
  whatItIs: string;
  whoItsFor: string[];
  included: string[];
  automation: {
    intro: string;
    options: string[];
  };
  timeline: string;
  price: string;
  priceNote: string;
  faq: FaqItem[];
};

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "starter-pack-landing-page",
    name: "Starter Pack Landing Page",
    headline: "Get your small business online, RM 200, fixed.",
    intro:
      "The most budget-friendly way to get your business online. One page, your contact details, and a WhatsApp button, shareable anywhere, no domain needed.",
    whatItIs:
      "A Starter Pack landing page is a single page hosted for free on Vercel, Netlify, or Beacon.ai. You get a shareable link (like yourbrand.vercel.app) you can post on Instagram, WhatsApp, printed flyers, or anywhere. No domain purchase required, perfect for small businesses wanting to get visible fast without the full investment.",
    whoItsFor: [
      "Home-based sellers just getting started",
      "Pop-up stalls, food trucks, or temporary promotions",
      "Anyone testing a business idea before committing to a bigger site",
      "Side hustles that need a professional shareable link fast",
    ],
    included: [
      "1 custom-designed promotional page",
      "Your business name, tagline & description",
      "WhatsApp click-to-chat button",
      "Contact info & social media links",
      "Mobile-friendly layout",
      "Free hosting on Vercel / Netlify / Beacon.ai",
    ],
    automation: {
      intro: "Simple is the name of the game here, no complicated setup needed:",
      options: [
        "WhatsApp First (free), all enquiries go straight to your WhatsApp. Set up an auto-greeting once and it handles itself",
        "Social links, direct visitors to your Instagram, Shopee, or wherever you actually sell",
      ],
    },
    timeline: "1–2 working days",
    price: "From RM 200",
    priceNote: "RM 200 – RM 350 depending on content",
    faq: [
      {
        question: "Do I need to buy a domain?",
        answer:
          "Nope, we deploy to a free subdomain (e.g., yourbrand.vercel.app) which you can share anywhere. If you want a proper .com or .my later, we can add it anytime, it's just RM 50–100/year.",
      },
      {
        question: "Can I upgrade to a proper website later?",
        answer:
          "Yes. We build on the same stack, so upgrading to a full Landing Page (RM 500) or Business Website means adding to what's already there, you only pay the difference in work.",
      },
      {
        question: "No enquiry form, how do customers contact me?",
        answer:
          "Through WhatsApp directly. We set up a click-to-chat button with a pre-filled greeting so customers reach you in one tap. For most home businesses, this is faster and more personal than a form.",
      },
      {
        question: "What is the difference between this and the RM 500 Landing Page?",
        answer:
          "The Starter Pack is purely a presence page, your story, contact info, and WhatsApp button. The full Landing Page adds an enquiry form with Google Sheets tracking, basic SEO, Google Analytics, and a revision round. If you need leads tracked properly, go with the full Landing Page.",
      },
    ],
  },
  {
    slug: "landing-page",
    name: "Landing Page",
    headline: "One page. One goal. Get customers contacting you.",
    intro:
      "The fastest, most affordable way to get your business online properly, a single beautiful page that tells people who you are, what you do, and how to reach you.",
    whatItIs:
      "A landing page is a single-page website, think of it as your business card, brochure and signboard rolled into one link you can share anywhere: WhatsApp status, Instagram bio, Google Maps, flyers. Everything a customer needs to know, on one fast-loading page.",
    whoItsFor: [
      "New businesses getting online for the first time",
      "Home-based businesses that mainly sell through WhatsApp or Instagram",
      "Stalls, food trucks and pop-ups that need a shareable link",
      "Anyone testing an idea before investing in a bigger site",
    ],
    included: [
      "1 custom-designed page (not a template)",
      "WhatsApp click-to-chat button",
      "Basic enquiry form",
      "Your story, services, photos, location & opening hours",
      "Mobile-friendly and fast-loading",
      "Basic SEO so Google can find you",
      "1 revision round",
    ],
    automation: {
      intro:
        "Even a one-pager can work for you while you sleep. For landing pages we usually recommend keeping it simple:",
      options: [
        "WhatsApp First (free), click-to-chat button with an auto-greeting, because most of your customers will just want to message you",
        "Budget Smart (RM0/month), enquiry form that auto-saves to Google Sheets with an auto-reply email, so you never lose a lead",
        "No payment gateway needed, landing pages are for enquiries, not checkout. We'll say so honestly if anyone tries to upsell you one",
      ],
    },
    timeline: "3–5 working days",
    price: "From RM 500",
    priceNote: "RM 500 – RM 1,200 depending on scope",
    faq: [
      {
        question: "Can I upgrade to a full website later?",
        answer:
          "Yes, that's the beauty of starting with a landing page. We build it on the same foundation as our bigger packages, so upgrading to a 5-page business website later means adding pages, not starting over. You only pay the difference in work.",
      },
      {
        question: "Do I need to buy a domain name?",
        answer:
          "We'll help you register one (usually around RM50–100/year for a .com or .my). It's the only recurring cost, hosting for a landing page can be free on Vercel or Netlify, and we set that up for you.",
      },
      {
        question: "What do you need from me to start?",
        answer:
          "Just your business info, a few photos, and 30 minutes for a chat. If you don't have nice photos yet, we'll advise you on taking decent ones with your phone, or work with what you have.",
      },
      {
        question: "One revision round, what does that mean?",
        answer:
          "After we show you the finished design, you get one round of changes (collect all your feedback, we apply it in one go). It keeps the project fast and the price low. Extra rounds can be added at a small fee if needed.",
      },
    ],
  },
  {
    slug: "business-website",
    name: "Business Website",
    headline: "A proper home for your business, bookings, pages, the works.",
    intro:
      "Up to 5 pages with booking forms, a CMS you can edit yourself, and full SEO setup. Our most popular package, and for good reason.",
    whatItIs:
      "A multi-page website (Home, About, Services/Menu, Gallery, Contact, or whatever fits your business) with a content management system, so you can update prices, photos and opening hours yourself without calling us. It's the package that fits most cafes, salons, studios and boutiques perfectly.",
    whoItsFor: [
      "Cafes & restaurants that want a menu and booking page",
      "Barbers, salons & studios that take appointments",
      "Photographers & creatives who need a portfolio plus enquiry flow",
      "Boutiques & pet shops that want a real online presence beyond social media",
    ],
    included: [
      "Up to 5 custom-designed pages",
      "CMS (Sanity or Contentful), edit your own content",
      "Booking / enquiry form integration",
      "WhatsApp click-to-chat throughout",
      "Full SEO setup + Google Business Profile",
      "Photo gallery / menu / portfolio section",
      "2 revision rounds",
      "Handover training session (plain English, promise)",
    ],
    automation: {
      intro:
        "This is where automation really pays off. Bookings and enquiries flow in automatically, no more missed messages:",
      options: [
        "Budget Smart (RM0/month, our recommendation), booking form → Google Calendar auto-creates the appointment, Google Sheets logs the enquiry, Apps Script sends a confirmation email. Zero subscriptions",
        "Ready-Made Tools, prefer a polished dashboard? Cal.com or Calendly for bookings, Tally for forms, Zapier/Make to connect them. Free tiers cover most businesses",
        "WhatsApp First, every page gets click-to-chat, plus auto-greeting setup on WhatsApp Business",
      ],
    },
    timeline: "1–2 weeks",
    price: "From RM 1,200",
    priceNote: "RM 1,200 – RM 2,500 depending on scope",
    faq: [
      {
        question: "Can I really update the website myself?",
        answer:
          "Yes. The CMS works like filling in a form, change your menu prices, swap photos, edit opening hours. If you can use Instagram, you can use this. We include a training session and a short cheat-sheet at handover.",
      },
      {
        question: "What if I need more than 5 pages?",
        answer:
          "No problem, extra pages are quoted per page, or we'll suggest the Corporate package if you need a lot more. We'll always recommend the cheaper option that genuinely fits.",
      },
      {
        question: "How do bookings work without monthly fees?",
        answer:
          "Our Budget Smart setup connects your booking form straight to Google Calendar and Google Sheets using Google Apps Script. Google's tools are free, the setup is a one-time job by us, and there's nothing to renew. It just works.",
      },
      {
        question: "What are the ongoing costs?",
        answer:
          "Domain name (~RM50–100/year) and that's usually it. Hosting on Vercel's free tier handles most business traffic comfortably. If your site grows big enough to need paid hosting, that's a good problem, and still only ~RM100/month.",
      },
    ],
  },
  {
    slug: "corporate-website",
    name: "Corporate Website",
    headline: "Look as established online as you are in person.",
    intro:
      "A polished multi-page website with blog, analytics and priority support, for companies that need to impress clients, partners and even future hires.",
    whatItIs:
      "A full corporate presence: multiple pages for your services, team, projects and news, a blog to share updates and boost SEO, and analytics so you can see exactly who's visiting. Built to look credible to procurement teams, partners and customers doing their homework on you.",
    whoItsFor: [
      "Established SMEs and agencies upgrading an outdated site",
      "Companies that tender for projects and get background-checked online",
      "Firms that publish news, case studies or thought-leadership",
      "Businesses with multiple branches, departments or service lines",
    ],
    included: [
      "Multi-page custom design (structure planned with you)",
      "CMS + blog / news section",
      "Team, careers and project showcase pages",
      "Analytics setup with a monthly-glance dashboard",
      "Advanced SEO & Core Web Vitals optimization",
      "Multi-language ready (English / Bahasa Malaysia)",
      "Priority support",
      "3 revision rounds",
    ],
    automation: {
      intro:
        "Corporate sites usually need enquiries routed to the right people, automatically:",
      options: [
        "Budget Smart (RM0/month), enquiry forms that log to Google Sheets and notify the right department by email via Apps Script",
        "Ready-Made Tools, Typeform for polished RFQ forms, Cal.com for meeting scheduling with your sales team, Zapier/Make/n8n to push leads into your CRM",
        "WhatsApp First, a click-to-chat for the Malaysian market, routed to your sales line",
      ],
    },
    timeline: "2–3 weeks",
    price: "From RM 2,000",
    priceNote: "RM 2,000 – RM 3,000 depending on scope",
    faq: [
      {
        question: "Can you migrate our old website's content?",
        answer:
          "Yes. We'll move over the content worth keeping, rewrite what's outdated, and set up redirects so any links to your old pages still work, important for keeping your Google ranking.",
      },
      {
        question: "Do you write the content or do we?",
        answer:
          "Either works. Most clients give us rough notes and we polish them into clear, friendly English (and Bahasa if needed). Full copywriting from scratch can be added to the quote.",
      },
      {
        question: "What does priority support mean?",
        answer:
          "Your messages jump the queue. Urgent fixes get same-day attention, and small content updates are typically done within 1–2 working days.",
      },
      {
        question: "Can the blog help us get found on Google?",
        answer:
          "Definitely, it's one of the best long-term SEO investments. Each helpful article is another doorway into your site. We'll set up the structure and show your team how to publish posts that actually rank.",
      },
    ],
  },
  {
    slug: "e-commerce",
    name: "E-Commerce",
    headline: "Your own online store, open 24 hours, no shopping mall rent.",
    intro:
      "Sell your products directly to customers with a store you fully own, product pages, cart, Malaysian payment options, and order notifications to your phone.",
    whatItIs:
      "A complete online store on your own domain: product catalogue with photos and variants, shopping cart, checkout with local payment methods, and a product manager you control. Unlike marketplace platforms, there's no commission on every sale and no fighting for attention next to competitors.",
    whoItsFor: [
      "Boutiques & retail shops ready to sell beyond the storefront",
      "Pet shops, bakeries and specialty stores with loyal customers",
      "Home-based sellers outgrowing Instagram DMs and Shopee fees",
      "Brands that want full control of their pricing and customer data",
    ],
    included: [
      "Online store with custom product pages",
      "Product management via CMS, add/edit products yourself",
      "Shopping cart & checkout flow",
      "Payment gateway integration (add-on, see below)",
      "Order notifications by email / WhatsApp",
      "Shipping & delivery options setup",
      "Full SEO setup for product searches",
      "Training session, managing orders and products",
    ],
    automation: {
      intro:
        "E-commerce is where the payment gateway add-on comes in, plus automation to keep orders flowing smoothly:",
      options: [
        "Payment Gateway add-on (extra charge), choose from Stripe, Billplz, toyyibPay, SenangPay or iPay88. We'll recommend based on your bank, fees and whether you need FPX, cards or e-wallets",
        "Budget Smart (RM0/month), orders auto-logged to Google Sheets, confirmation emails via Apps Script",
        "Ready-Made Tools, Zapier/Make to connect orders to your courier, accounting or stock list",
        "WhatsApp First, \"chat before you buy\" buttons on every product, plus WhatsApp catalog setup",
      ],
    },
    timeline: "3–4 weeks",
    price: "From RM 2,000",
    priceNote: "RM 2,000 – RM 5,000 depending on scope · payment gateway add-on",
    faq: [
      {
        question: "Which payment gateway should I choose?",
        answer:
          "For most Malaysian stores we suggest Billplz or toyyibPay to start, low fees, FPX bank transfers, easy approval. Stripe is great if you want international cards. We'll compare the fees for your situation honestly; we don't take commissions from any of them.",
      },
      {
        question: "Why is the payment gateway an add-on?",
        answer:
          "Because not every store needs one on day one. Some clients start with WhatsApp ordering (free) and add online checkout once sales justify it. Charging it separately keeps the base price honest, you only pay for what you use.",
      },
      {
        question: "How is this better than just using Shopee or Lazada?",
        answer:
          "Keep using them! But on marketplaces you pay commission on every sale, compete on price next to lookalikes, and don't own the customer relationship. Your own store has no per-sale commission, builds your brand, and the customer data is yours. Most of our clients run both.",
      },
      {
        question: "Can I manage products and orders myself?",
        answer:
          "Yes, adding a product is like making a social media post: photos, name, price, description, publish. Orders arrive by email or WhatsApp notification. We include a training session so you're comfortable before launch.",
      },
    ],
  },
];

export function getService(slug: string) {
  return serviceDetails.find((service) => service.slug === slug);
}
