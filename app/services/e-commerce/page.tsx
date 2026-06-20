import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { getService } from "@/lib/services";

const service = getService("e-commerce")!;

export const metadata: Metadata = {
  title: "E-Commerce Website Design",
  description:
    "Custom online stores with Malaysian payment gateways, inventory management, and mobile-first storefronts. From RM 2,000.",
  alternates: { canonical: "/services/e-commerce" },
};

export default function ECommerceService() {
  return <ServicePageTemplate service={service} showYearlyCosts />;
}
