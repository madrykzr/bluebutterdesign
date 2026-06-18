"use client";

import Link from "next/link";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  type PanInfo,
} from "framer-motion";
import PlaceholderImage from "@/components/PlaceholderImage";
import type { Project, ProjectTint } from "@/lib/portfolio";

const GAP = 24;

const tintStyles: Record<
  ProjectTint,
  { bg: string; title: string; sub: string; cat: string; arrow: string; badge: string }
> = {
  butter: {
    bg: "bg-butter/35",
    title: "text-charcoal",
    sub: "text-charcoal/70",
    cat: "text-bluegrey-dark",
    arrow: "border-charcoal/20 text-charcoal hover:bg-charcoal hover:text-cream hover:border-charcoal",
    badge: "bg-charcoal/85 text-cream",
  },
  bluegrey: {
    bg: "bg-bluegrey/15",
    title: "text-charcoal",
    sub: "text-charcoal/70",
    cat: "text-bluegrey-dark",
    arrow: "border-charcoal/20 text-charcoal hover:bg-bluegrey hover:text-white hover:border-bluegrey",
    badge: "bg-charcoal/85 text-cream",
  },
  cream: {
    bg: "bg-cream border border-[#E5E5E5]",
    title: "text-charcoal",
    sub: "text-charcoal/70",
    cat: "text-butter-dark",
    arrow: "border-charcoal/20 text-charcoal hover:bg-butter hover:text-charcoal hover:border-butter-dark",
    badge: "bg-butter text-charcoal",
  },
  charcoal: {
    bg: "bg-charcoal",
    title: "text-cream",
    sub: "text-cream/70",
    cat: "text-butter",
    arrow: "border-cream/30 text-cream hover:bg-butter hover:text-charcoal hover:border-butter",
    badge: "bg-butter text-charcoal",
  },
};

export default function ProjectCarousel({
  projects,
  ariaLabel = "Project showcase",
}: {
  projects: Project[];
  ariaLabel?: string;
}) {
  const reduce = useReducedMotion();
  const viewportRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

  const [index, setIndex] = useState(0);
  const indexRef = useRef(0);
  const [tileWidth, setTileWidth] = useState(0);
  const [gutter, setGutter] = useState(24);
  const [hintVisible, setHintVisible] = useState(true);

  const maxIndex = projects.length - 1;
  const stride = tileWidth + GAP;

  // Measure the viewport and compute tile sizing / gutter alignment.
  useLayoutEffect(() => {
    const measure = () => {
      const vw = viewportRef.current?.clientWidth ?? window.innerWidth;
      const mobile = vw < 640;
      const g = mobile ? 16 : Math.max(24, (vw - 1180) / 2);
      const tw = mobile ? Math.round(vw - 32) : Math.round(Math.min(vw * 0.72, 900));
      setGutter(g);
      setTileWidth(tw);
      // keep the current tile aligned after a resize (no animation)
      x.set(g - indexRef.current * (tw + GAP));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [x]);

  const snapTo = useCallback(
    (i: number) => {
      const clamped = Math.max(0, Math.min(maxIndex, i));
      indexRef.current = clamped;
      setIndex(clamped);
      animate(
        x,
        gutter - clamped * stride,
        reduce ? { duration: 0 } : { type: "spring", stiffness: 260, damping: 36 }
      );
    },
    [gutter, stride, maxIndex, reduce, x]
  );

  const movedRef = useRef(false);

  const onDragStart = () => {
    movedRef.current = false;
    setHintVisible(false);
  };
  const onDrag = (_: unknown, info: PanInfo) => {
    if (Math.abs(info.offset.x) > 5) movedRef.current = true;
  };
  const onDragEnd = (_: unknown, info: PanInfo) => {
    const predicted = x.get() + info.velocity.x * 0.15;
    const raw = Math.round((gutter - predicted) / stride);
    snapTo(raw);
  };
  // suppress the click that fires on a child link right after a drag
  const onClickCapture = (e: React.MouseEvent) => {
    if (movedRef.current) {
      e.preventDefault();
      e.stopPropagation();
      movedRef.current = false;
    }
  };

  const go = (dir: number) => {
    setHintVisible(false);
    snapTo(index + dir);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      go(-1);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      go(1);
    }
  };

  return (
    <div
      role="group"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
      tabIndex={0}
      onKeyDown={onKeyDown}
      className="relative left-1/2 right-1/2 -mx-[50vw] w-screen rounded-none focus:outline-none focus-visible:ring-2 focus-visible:ring-bluegrey/60"
    >
      {/* viewport */}
      <div ref={viewportRef} className="overflow-hidden">
        <motion.div
          className="flex cursor-grab items-stretch active:cursor-grabbing"
          style={{ x, gap: GAP }}
          drag="x"
          dragConstraints={{ left: gutter - maxIndex * stride, right: gutter }}
          dragElastic={0.12}
          dragMomentum={false}
          onDragStart={onDragStart}
          onDrag={onDrag}
          onDragEnd={onDragEnd}
          onClickCapture={onClickCapture}
          data-cursor="hover"
        >
          {projects.map((project, i) => (
            <Tile key={project.slug} project={project} width={tileWidth} active={i === index} />
          ))}
        </motion.div>
      </div>

      {/* desktop side arrows */}
      <div className="pointer-events-none absolute inset-y-0 left-0 right-0 hidden items-center justify-between px-6 lg:flex">
        <div className="pointer-events-auto" style={{ marginLeft: Math.max(0, gutter - 64) }}>
          <ArrowButton dir="prev" disabled={index === 0} onClick={() => go(-1)} />
        </div>
        <div className="pointer-events-auto" style={{ marginRight: Math.max(0, gutter - 64) }}>
          <ArrowButton dir="next" disabled={index === maxIndex} onClick={() => go(1)} />
        </div>
      </div>

      {/* drag hint */}
      <AnimatePresence>
        {hintVisible && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="pointer-events-none absolute left-1/2 top-6 -translate-x-1/2 font-mono text-[11px] uppercase tracking-mono text-charcoal/45"
          >
            ← drag to explore →
          </motion.p>
        )}
      </AnimatePresence>

      {/* controls bar */}
      <div
        className="mt-8 flex items-center justify-between gap-4"
        style={{ paddingLeft: gutter, paddingRight: gutter }}
      >
        {/* progress + dots */}
        <div className="flex items-center gap-4">
          <span className="font-mono text-[11px] uppercase tracking-mono text-charcoal/60">
            {String(index + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
          </span>
          <div className="flex items-center gap-2" role="tablist" aria-label="Choose a project">
            {projects.map((p, i) => (
              <button
                key={p.slug}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Go to ${p.title}`}
                onClick={() => {
                  setHintVisible(false);
                  snapTo(i);
                }}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === index ? "w-7 bg-bluegrey" : "w-2.5 bg-charcoal/20 hover:bg-charcoal/40"
                }`}
              />
            ))}
          </div>
        </div>

        {/* mobile arrows */}
        <div className="flex items-center gap-3 lg:hidden">
          <ArrowButton dir="prev" disabled={index === 0} onClick={() => go(-1)} small />
          <ArrowButton dir="next" disabled={index === maxIndex} onClick={() => go(1)} small />
        </div>
      </div>
    </div>
  );
}

function Tile({
  project,
  width,
  active,
}: {
  project: Project;
  width: number;
  active: boolean;
}) {
  const t = tintStyles[project.tint];
  const isExternal = Boolean(project.href);
  const linkHref = project.href ?? (project.demoPath ? `/portfolio/${project.slug}` : "/contact");
  const linkLabel = project.href ? "View Project" : (project.demoPath ? "Preview demo" : "Discuss your project");

  const ArrowLink = (
    <Link
      href={linkHref}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      aria-label={`${linkLabel} — ${project.title}`}
      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border transition-colors ${t.arrow}`}
      draggable={false}
    >
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
      </svg>
    </Link>
  );

  return (
    <motion.article
      className="shrink-0"
      style={{ width: width || "72vw" }}
      animate={{ opacity: active ? 1 : 0.55, scale: active ? 1 : 0.97 }}
      transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      <div className={`flex h-full flex-col gap-6 rounded-[28px] p-5 sm:p-7 ${t.bg}`}>
        {/* clean device-neutral image card — no chrome */}
        <div className="relative overflow-hidden rounded-2xl bg-white shadow-card">
          {project.demo && (
            <span
              className={`absolute left-4 top-4 z-10 rounded-full px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-mono ${t.badge}`}
            >
              Demo concept
            </span>
          )}
          <div className="aspect-[16/10] w-full">
            <PlaceholderImage
              src={project.image.src}
              alt={project.image.alt}
              width={project.image.width}
              height={project.image.height}
              className="h-full w-full object-cover"
              fallbackClassName="!h-full !rounded-none !border-0"
            />
          </div>
        </div>

        {/* text row */}
        <div className="flex items-end justify-between gap-4">
          <div className="min-w-0">
            <p className={`font-mono text-[11px] uppercase tracking-mono ${t.cat}`}>
              {project.category}
            </p>
            <h3 className={`mt-2 font-heading text-2xl font-semibold leading-tight sm:text-3xl ${t.title}`}>
              {project.title}
            </h3>
            <p className={`mt-2 text-sm leading-relaxed ${t.sub}`}>{project.description}</p>
            <span className={`mt-3 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-mono ${t.cat}`}>
              {linkLabel}
            </span>
          </div>
          {ArrowLink}
        </div>
      </div>
    </motion.article>
  );
}

function ArrowButton({
  dir,
  disabled,
  onClick,
  small = false,
}: {
  dir: "prev" | "next";
  disabled: boolean;
  onClick: () => void;
  small?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={dir === "prev" ? "Previous project" : "Next project"}
      className={`flex items-center justify-center rounded-full border border-charcoal/15 bg-white/90 text-charcoal shadow-card backdrop-blur transition-all duration-300 hover:border-bluegrey hover:bg-bluegrey hover:text-white disabled:pointer-events-none disabled:opacity-40 ${
        small ? "h-10 w-10" : "h-14 w-14"
      }`}
    >
      <svg
        className={small ? "h-4 w-4" : "h-5 w-5"}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden="true"
        style={{ transform: dir === "prev" ? "rotate(180deg)" : undefined }}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
      </svg>
    </button>
  );
}
