import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/motion/SmoothScroll";
import CustomCursor from "@/components/motion/CustomCursor";
import { site } from "@/lib/site";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains",
  display: "swap",
});

const defaultTitle = `${site.name}, Web Design & Development Malaysia`;
const ogImage = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: `${site.name}, Web Design & Development · Malaysia`,
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: defaultTitle,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: "Web Design",
  keywords: [
    "web design Malaysia",
    "web development Malaysia",
    "Malaysia web design agency",
    "custom website Malaysia",
    "Next.js developer Malaysia",
    "e-commerce Malaysia",
    "corporate website Malaysia",
    "landing page design Malaysia",
    "Bluebutter Design",
  ],
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_MY",
    url: site.url,
    siteName: site.name,
    title: defaultTitle,
    description: site.description,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: site.description,
    images: [ogImage.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: false,
  },
};

/** ProfessionalService schema, applied site-wide via the root layout so
 * every page (including the homepage and /contact, as specified) carries
 * the structured data. */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  additionalType: "WebDesignCompany",
  name: site.name,
  description: "Web design and development agency based in Malaysia",
  image: `${site.url}/og-image.png`,
  logo: `${site.url}/logo.png`,
  url: site.url,
  email: site.email,
  telephone: site.phone ? site.phone.replace(/\s|-/g, "") : undefined,
  address: {
    "@type": "PostalAddress",
    addressCountry: "MY",
  },
  areaServed: {
    "@type": "Country",
    name: "Malaysia",
  },
  priceRange: "RM 500 - RM 5,000",
  currenciesAccepted: "MYR",
  paymentAccepted: "Bank Transfer, DuitNow, TNG eWallet, Credit Card",
  sameAs: Object.values(site.socials),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} ${jetbrains.variable}`}
    >
      <body suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-butter focus:px-4 focus:py-2 focus:font-heading focus:text-sm"
        >
          Skip to main content
        </a>
        <CustomCursor />
        <SmoothScroll>
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
