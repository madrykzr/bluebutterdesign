import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { getService } from "@/lib/services";

const service = getService("promo-landing-page")!;

export const metadata: Metadata = {
  title: "Promo Landing Page — From RM 200",
  description:
    "Get your business online in 48 hours for just RM 200. One promotional page with your contact info and WhatsApp button — no domain needed. Free hosting on Vercel or Netlify.",
  alternates: { canonical: "/services/promo-landing-page" },
};

export default function PromoLandingPageService() {
  return <ServicePageTemplate service={service} />;
}
