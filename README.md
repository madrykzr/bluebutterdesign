# Bluebutter Design — Website

Web design &amp; development agency for businesses across Malaysia. 🧈

Built with **Next.js 15 (App Router) · TypeScript · Tailwind CSS · Framer Motion**.
Editorial 2026 studio aesthetic with a butter-melt motion language.

### Motion & interaction stack
- **Lenis** (`lenis/react`) — app-wide smooth scroll, auto-disabled on `prefers-reduced-motion`. (Note: `@studio-freight/react-lenis` was renamed; `lenis/react` is the current, React-19-compatible package.)
- **react-fast-marquee** — the auto-scrolling category / social-proof strips.
- **Framer Motion** — letter-by-letter hero, magnetic buttons, custom cursor, parallax mascot, scroll-triggered melt dividers.
- Custom cursor + cursor-following hero mascot are **desktop-only** and disabled on reduced motion. JetBrains Mono is used for all editorial mono labels.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new), import the repo — Vercel auto-detects Next.js. No config needed.
3. Click **Deploy**. Done.

Or with the CLI:

```bash
npm i -g vercel
vercel          # preview deploy
vercel --prod   # production deploy
```

## Things to customize before launch

| What | Where |
| --- | --- |
| WhatsApp number, email, socials, domain URL | [lib/site.ts](lib/site.ts) |
| Package prices (currently `RM XXX` placeholders) | [lib/packages.ts](lib/packages.ts) |
| Service page prices/FAQs | [lib/services.ts](lib/services.ts) |
| Contact form backend (Formspree / Google Apps Script) | [app/contact/actions.ts](app/contact/actions.ts) — instructions inside |
| Testimonials (placeholders) | [components/Testimonials.tsx](components/Testimonials.tsx) |

## Images

Mascot illustrations and portfolio mockups are referenced via the manifest in
[lib/images.ts](lib/images.ts). Until the real PNGs exist, the site shows
butter-tinted placeholder boxes labelled with the expected filename.

**Drop your AI-generated images directly into `/public` with these exact names
and they appear automatically — no code changes:**

- `mascot-hero.png` — mascot waving (hero)
- `mascot-laptop.png` — mascot on a laptop (about)
- `mascot-melted-404.png` — melted mascot (404 page)
- `mascot-peek.png` — mascot peeking (CTA band corner)
- `portfolio-parallel-records.png` — browser mockup of parallelrecordsmy.com
- `portfolio-demo-cafe.png`, `portfolio-demo-boutique.png`, `portfolio-demo-barber.png`, `portfolio-demo-petshop.png` — demo concept mockups

> ⚠️ Export PNGs with a **real transparent background** (alpha channel). If you
> screenshot an image from an editor, the grey/white "transparency" checkerboard
> gets saved as actual pixels and will show on the site. Use the tool's
> **Export / Download as PNG** option, not a screenshot.

Logos live in `/public`: `logo.png` (navbar), `logo-dark.png` (footer), `icon.png` (favicon).

## SEO included

- Per-page metadata + OpenGraph tags (Metadata API)
- `app/sitemap.ts` → `/sitemap.xml`
- `app/robots.ts` → `/robots.txt`
- JSON-LD LocalBusiness schema in the root layout
- Remember to update `site.url` in [lib/site.ts](lib/site.ts) to your real domain

## Project structure

```
app/                  Routes (App Router)
  page.tsx            Home
  about/              About
  services/           Services overview + 4 sub-pages
  portfolio/          Portfolio
  contact/            Contact (+ server action)
  not-found.tsx       Custom 404 (melted mascot)
  loading.tsx         Skeleton loader
  error.tsx           Error boundary
components/           Reusable UI (Button, MeltDivider, MarqueeStrip, …)
lib/                  Editable content: site info, packages, services, images
public/               Logos + /images (drop generated art here)
```
