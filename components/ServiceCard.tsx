"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import PlaceholderImage from "@/components/PlaceholderImage";
import { images } from "@/lib/images";

type ServiceCardProps = {
  title: string;
  description: string;
  href: string;
  icon: ReactNode;
  bestFor?: string;
  /** mono section number, e.g. "01" */
  index?: string;
  /** rest-rotation in degrees; snaps to 0 on hover */
  rotate?: number;
};

export default function ServiceCard({
  title,
  description,
  href,
  icon,
  bestFor,
  index,
  rotate = 0,
}: ServiceCardProps) {
  const reduce = useReducedMotion();
  const rest = reduce ? 0 : rotate;

  return (
    <motion.div
      initial={{ rotate: rest }}
      whileHover={{ rotate: 0, y: -10 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className="h-full"
    >
      <Link
        href={href}
        className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-charcoal/8 bg-white p-7 shadow-card transition-shadow duration-300 hover:border-butter hover:shadow-butter-lg"
      >
        {/* mascot peek — slides up from the bottom-right corner on hover */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-6 -right-4 w-24 translate-y-10 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
        >
          <PlaceholderImage
            src={images.mascotPeek.src}
            alt=""
            width={images.mascotPeek.width}
            height={images.mascotPeek.height}
            fallbackClassName="!border !border-dashed !border-butter-dark/40 !bg-butter/30 !p-2"
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-butter/40 text-bluegrey-dark transition-colors group-hover:bg-butter">
            {icon}
          </div>
          {index && <span className="font-mono text-xs text-charcoal/30">{index}</span>}
        </div>

        <h3 className="mt-6 font-heading text-xl font-semibold text-charcoal">{title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-charcoal/70">{description}</p>

        {bestFor && (
          <p className="mt-5 font-mono text-[11px] uppercase tracking-mono text-bluegrey">
            Best for — {bestFor}
          </p>
        )}
        <span className="relative z-10 mt-4 inline-flex items-center gap-1.5 font-heading text-sm font-medium text-bluegrey-dark">
          Learn more
          <svg
            className="h-4 w-4 transition-transform group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </span>
      </Link>
    </motion.div>
  );
}
