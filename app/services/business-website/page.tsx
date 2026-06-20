import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { getService } from "@/lib/services";

const service = getService("business-website")!;

export const metadata: Metadata = {
  title: "Business Website Design",
  description:
    "Up to 5 custom pages with CMS, booking forms, SEO setup, and WhatsApp integration. Built for businesses that want to grow online. From RM 1,200.",
  alternates: { canonical: "/services/business-website" },
};

export default function BusinessWebsiteService() {
  return <ServicePageTemplate service={service} showYearlyCosts />;
}
