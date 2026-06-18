"use client";

import Marquee from "react-fast-marquee";

type MarqueeStripProps = {
  items?: string[];
  direction?: "left" | "right";
  speed?: number;
  variant?: "butter" | "charcoal" | "outline";
  className?: string;
};

const defaultItems = [
  "Web Design & Development · Malaysia",
  "Cafes",
  "Retail",
  "Corporate",
  "E-Commerce",
  "Creative Studios",
  "& Many More",
];

const variants = {
  butter: "border-y border-butter-dark/25 bg-butter/40 text-charcoal/75",
  charcoal: "border-y border-charcoal-light bg-charcoal text-cream/80",
  outline: "border-y border-charcoal/10 bg-cream text-charcoal/60",
};

/**
 * Auto-scrolling marquee strip in mono editorial type.
 * Different speeds / directions can be combined for the layered look.
 */
export default function MarqueeStrip({
  items = defaultItems,
  direction = "left",
  speed = 45,
  variant = "butter",
  className = "",
}: MarqueeStripProps) {
  return (
    <div
      className={`relative overflow-hidden py-3.5 ${variants[variant]} ${className}`}
      aria-label="Bluebutter Design, web design and development across Malaysia"
    >
      <Marquee speed={speed} direction={direction} autoFill gradient={false}>
        {items.map((item, i) => (
          <span key={i} className="flex items-center font-mono text-xs uppercase tracking-mono">
            <span className="px-6">{item}</span>
            <span className="text-butter-dark" aria-hidden="true">
              ✺
            </span>
          </span>
        ))}
      </Marquee>
    </div>
  );
}
