"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Button from "@/components/Button";
import { pricingDisclaimer, type Package } from "@/lib/packages";

/**
 * Sticky-note pricing card. The "Most Popular" sticker protrudes above the
 * card's top edge — the parent scroller MUST have enough top padding for it
 * not to clip (see DragScroller / page-level pt-12).
 *
 * Card body: From-price + range sublabel + features (first 6–8 visible) +
 * "+ X more features ↓" toggle that smoothly expands the rest in place.
 */
export default function PricingCard({ pkg, index }: { pkg: Package; index?: string }) {
  const reduce = useReducedMotion();
  const [expanded, setExpanded] = useState(false);
  const rest = reduce ? 0 : pkg.popular ? -2 : 1.2;
  const scale = pkg.popular ? 1.04 : 1;
  const moreCount = pkg.moreFeatures?.length ?? 0;

  return (
    <motion.div
      initial={{ rotate: rest, scale }}
      whileHover={{ rotate: 0, scale: scale + 0.02, y: -8 }}
      transition={{ type: "spring", stiffness: 240, damping: 18 }}
      className={`relative z-10 flex flex-col rounded-[28px] border bg-white p-7 ${
        pkg.popular
          ? "border-butter-dark shadow-butter-lg ring-2 ring-butter"
          : "border-charcoal/8 shadow-card"
      }`}
    >
      {pkg.popular && (
        <span
          style={{ transform: "rotate(6deg)" }}
          className="absolute -right-3 -top-4 z-20 inline-flex items-center gap-1 whitespace-nowrap rounded-full bg-butter px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-mono text-charcoal shadow-sticker"
        >
          ★ Most Popular
        </span>
      )}

      {/* Header row */}
      <div className="flex items-center justify-between">
        <p className="font-mono text-[11px] uppercase tracking-mono text-bluegrey">{pkg.name}</p>
        {index && <span className="font-mono text-[11px] text-charcoal/30">{index}</span>}
      </div>
      <h3 className="mt-1 font-heading text-xl font-semibold text-charcoal">{pkg.subtitle}</h3>

      {/* Price block */}
      <p
        className="mt-5 font-heading font-bold text-charcoal"
        style={{ fontSize: "clamp(1.4rem, 3.5vw, 1.9rem)", lineHeight: 1.1 }}
      >
        {pkg.priceFrom}
      </p>
      <p className="mt-1 font-mono text-[11px] uppercase tracking-mono text-charcoal/45">
        {pkg.priceNote}
      </p>
      <p className="mt-2 font-mono text-[11px] leading-snug text-charcoal/60">
        {pkg.priceRange}{" "}
        <span className="text-charcoal/40">{pkg.rangeNote}</span>
      </p>

      <p className="mt-4 text-sm leading-relaxed text-charcoal/70">{pkg.description}</p>

      <p className="mt-4 font-mono text-[11px] uppercase tracking-mono text-bluegrey-dark">
        Best for — {pkg.bestFor}
      </p>

      {/* Visible features */}
      <ul className="mt-5 space-y-2.5">
        {pkg.visibleFeatures.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm text-charcoal/85">
            <CheckIcon />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* Expandable extra features */}
      <AnimatePresence initial={false}>
        {expanded && moreCount > 0 && (
          <motion.div
            key="more"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
            style={{ overflow: "hidden" }}
          >
            <div className="mt-5 flex items-center gap-3">
              <span className="h-px flex-1 bg-charcoal/15" aria-hidden="true" />
              <span className="font-mono text-[10px] uppercase tracking-mono text-charcoal/45">
                More included
              </span>
              <span className="h-px flex-1 bg-charcoal/15" aria-hidden="true" />
            </div>
            <ul className="mt-4 space-y-2.5">
              {pkg.moreFeatures.map((feature, i) => (
                <motion.li
                  key={feature}
                  initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.04, duration: 0.3 }}
                  className="flex items-start gap-2.5 text-sm text-charcoal/85"
                >
                  <CheckIcon />
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle */}
      {moreCount > 0 && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          className="mt-4 self-start font-mono text-[11px] uppercase tracking-mono text-bluegrey-dark transition-colors hover:text-bluegrey"
        >
          {expanded ? "− Show less ↑" : `+ ${moreCount} more features ↓`}
        </button>
      )}

      {/* Disclaimer */}
      <p className="mt-5 border-t border-charcoal/8 pt-4 font-mono text-[10px] leading-relaxed tracking-wide text-charcoal/45">
        {pricingDisclaimer}
      </p>

      {/* Delivery */}
      <p className="mt-3 font-mono text-[11px] uppercase tracking-mono text-charcoal/55">
        Delivery — {pkg.delivery}
      </p>

      {/* Optional footnote (e.g. e-commerce gateway add-on) */}
      {pkg.footnote && (
        <p className="mt-2 text-xs leading-relaxed text-charcoal/55">{pkg.footnote}</p>
      )}

      {/* CTAs */}
      <div className="mt-5 space-y-2">
        <Button href="/contact" variant={pkg.popular ? "butter" : "primary"} size="sm" className="w-full">
          Get a free quote
        </Button>
        <Link
          href={pkg.href}
          className="block text-center font-mono text-[11px] uppercase tracking-mono text-bluegrey-dark hover:underline"
        >
          See full details →
        </Link>
      </div>
    </motion.div>
  );
}

function CheckIcon() {
  return (
    <svg
      className="mt-0.5 h-4 w-4 shrink-0 text-bluegrey"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
  );
}
