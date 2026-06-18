import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { getService } from "@/lib/services";

const service = getService("corporate-website")!;

export const metadata: Metadata = {
  title: "Corporate Website Design",
  description:
    "Multi-page corporate web presence with blog, analytics, and advanced SEO. Professional, polished, and performance-optimized. From RM 2,000.",
  alternates: { canonical: "/services/corporate-website" },
};

export default function CorporateWebsiteService() {
  return <ServicePageTemplate service={service} />;
}
