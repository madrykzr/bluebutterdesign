import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import PlaceholderImage from "@/components/PlaceholderImage";
import SectionHeading from "@/components/SectionHeading";
import { featuredProjects, type Project } from "@/lib/portfolio";

export default function PortfolioTeaser() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          align="left"
          index="04"
          eyebrow="Our Work"
          title="Real work, real businesses"
          description="One live client project and demo concepts across every industry we serve — so you can see exactly what we build before you commit."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, i) => (
            <AnimatedSection key={project.slug} delay={i * 0.07}>
              <PortfolioCard project={project} />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.45} className="mt-8">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 font-heading text-sm font-medium text-bluegrey-dark transition-colors hover:text-charcoal"
          >
            View all projects
            <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}

function PortfolioCard({ project }: { project: Project }) {
  const href = project.href ?? (project.demoPath ? `/portfolio/${project.slug}` : "/portfolio");

  return (
    <Link
      href={href}
      {...(project.href ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group flex flex-col overflow-hidden rounded-[24px] border border-charcoal/8 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-butter hover:shadow-butter-lg"
    >
      {/* screenshot */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-mist">
        {project.demo && (
          <span className="absolute left-3 top-3 z-10 rounded-full bg-charcoal/80 px-2.5 py-1 font-mono text-[9px] font-semibold uppercase tracking-mono text-cream">
            Demo
          </span>
        )}
        {!project.demo && (
          <span className="absolute left-3 top-3 z-10 rounded-full bg-butter px-2.5 py-1 font-mono text-[9px] font-semibold uppercase tracking-mono text-charcoal">
            Live
          </span>
        )}
        <PlaceholderImage
          src={project.image.src}
          alt={project.image.alt}
          width={project.image.width}
          height={project.image.height}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          fallbackClassName="!rounded-none !border-0 !h-full"
        />
      </div>

      {/* text */}
      <div className="flex flex-1 flex-col p-5">
        <p className="font-mono text-[10px] uppercase tracking-mono text-bluegrey">{project.category}</p>
        <h3 className="mt-2 font-heading text-lg font-semibold text-charcoal">{project.title}</h3>
        <p className="mt-1.5 flex-1 text-sm leading-relaxed text-charcoal/60">{project.description}</p>

        <span className="mt-4 inline-flex items-center gap-1.5 font-heading text-xs font-medium text-bluegrey-dark transition-colors group-hover:text-charcoal">
          {project.demo ? "Preview demo" : "View live site"}
          <svg className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
