import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { getPackageBySlug } from "@/lib/packages";
import { getService } from "@/lib/services";

const service = getService("landing-page")!;
const starterPack = getPackageBySlug("starter-pack-landing-page");

export const metadata: Metadata = {
  title: "Pro Landing Page Design",
  description:
    "One sharp page to tell your story and convert visitors. Mobile-first, SEO-ready, live in under a week. From RM 200.",
  alternates: { canonical: "/services/landing-page" },
};

export default function LandingPageService() {
  return (
    <ServicePageTemplate
      service={service}
      additionalPackages={starterPack ? [starterPack] : []}
    />
  );
}
