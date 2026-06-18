import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/portfolio";
import { site } from "@/lib/site";

export async function generateStaticParams() {
  return projects
    .filter((p) => p.demo && p.demoPath)
    .map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug && p.demo && p.demoPath);
  if (!project) return {};
  return {
    title: `${project.title} — Demo Preview`,
    description: project.description,
  };
}

export default async function PortfolioPreviewPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug && p.demo && p.demoPath);

  if (!project || !project.demoPath) notFound();

  const waMessage = `Hi! I saw the ${project.title} demo and I'd love something similar for my business.`;
  const waUrl = `${site.whatsapp}?text=${encodeURIComponent(waMessage)}`;

  return (
    <div className="flex flex-col">
      {/* preview bar — sits below sticky navbar */}
      <div className="sticky top-20 md:top-28 z-40 flex items-center justify-between gap-3 border-b border-charcoal/10 bg-cream/95 px-4 py-3 backdrop-blur md:px-6">
        <Link
          href="/portfolio"
          className="flex shrink-0 items-center gap-1.5 font-mono text-[11px] uppercase tracking-mono text-charcoal/55 transition-colors hover:text-charcoal"
        >
          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
          Back
        </Link>

        <div className="flex flex-col items-center truncate text-center">
          <p className="font-mono text-[9px] uppercase tracking-mono text-charcoal/40">{project.category}</p>
          <p className="font-heading text-sm font-semibold text-charcoal leading-tight">{project.title}</p>
        </div>

        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex shrink-0 items-center gap-1.5 rounded-full bg-butter px-3.5 py-2 font-heading text-xs font-semibold text-charcoal transition-colors hover:bg-butter-dark md:px-5 md:text-sm"
        >
          I want this
          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </a>
      </div>

      {/* full-viewport iframe */}
      <iframe
        src={project.demoPath}
        title={`${project.title} demo preview`}
        className="w-full border-0"
        style={{ height: "calc(100svh - 5rem - 53px)" }}
        loading="lazy"
      />
    </div>
  );
}
