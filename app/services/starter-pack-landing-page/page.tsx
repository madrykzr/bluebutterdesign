import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { getService } from "@/lib/services";

const service = getService("starter-pack-landing-page")!;

export const metadata: Metadata = {
  title: "Starter Pack Landing Page — RM 200 Fixed",
  description:
    "Get your small business online for a fixed RM 200. One page with your contact info and WhatsApp button — no domain needed. Free hosting on Vercel or Netlify.",
  alternates: { canonical: "/services/starter-pack-landing-page" },
};

export default function StarterPackLandingPageService() {
  return <ServicePageTemplate service={service} />;
}
