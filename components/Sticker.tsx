import { ReactNode } from "react";

type StickerProps = {
  children: ReactNode;
  /** rotation in degrees, e.g. -4 or 5 */
  rotate?: number;
  variant?: "butter" | "blue" | "charcoal" | "outline";
  className?: string;
};

const variants = {
  butter: "bg-butter text-charcoal border-butter-dark/40",
  blue: "bg-bluegrey text-white border-bluegrey-dark/40",
  charcoal: "bg-charcoal text-cream border-charcoal-light",
  outline: "bg-cream/80 text-charcoal border-charcoal/15 backdrop-blur",
};

/**
 * Small rotated sticker/badge pill, punctuation for key moments
 * ("RM0/mo", "MADE IN MALAYSIA", "EST. 2026"). Mono type by design.
 */
export default function Sticker({
  children,
  rotate = -4,
  variant = "butter",
  className = "",
}: StickerProps) {
  return (
    <span
      style={{ transform: `rotate(${rotate}deg)` }}
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-[11px] font-medium uppercase tracking-mono shadow-sticker ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
