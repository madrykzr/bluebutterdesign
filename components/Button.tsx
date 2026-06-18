"use client";

import Link from "next/link";
import { ReactNode, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "butter" | "ghost" | "whatsapp";
  size?: "sm" | "md" | "lg";
  className?: string;
  external?: boolean;
};

// base classes + the colour that sweeps in from the left on hover
const variants: Record<string, { base: string; fill: string; hoverText: string }> = {
  primary: {
    base: "bg-bluegrey text-white shadow-card",
    fill: "bg-butter",
    hoverText: "group-hover:text-charcoal",
  },
  secondary: {
    base: "bg-white text-charcoal border border-charcoal/10 shadow-card",
    fill: "bg-butter",
    hoverText: "group-hover:text-charcoal",
  },
  butter: {
    base: "bg-butter text-charcoal shadow-butter",
    fill: "bg-charcoal",
    hoverText: "group-hover:text-cream",
  },
  ghost: {
    base: "text-bluegrey-dark",
    fill: "bg-butter",
    hoverText: "group-hover:text-charcoal",
  },
  whatsapp: {
    base: "bg-bluegrey text-white shadow-card",
    fill: "bg-bluegrey-dark",
    hoverText: "group-hover:text-white",
  },
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm md:text-base",
  lg: "px-8 py-4 text-base md:text-lg",
};

/**
 * Magnetic button, the wrapper gently follows the cursor within ~10px on
 * hover, with a butter-coloured fill that sweeps in from the left. Keeps the
 * original API; uses next/link for internal routes, <a> for external.
 */
export default function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  external = false,
}: ButtonProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 300, damping: 20, mass: 0.4 });
  const y = useSpring(my, { stiffness: 300, damping: 20, mass: 0.4 });

  const v = variants[variant];

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    mx.set(Math.max(-10, Math.min(10, relX * 0.3)));
    my.set(Math.max(-10, Math.min(10, relY * 0.3)));
  };
  const handleLeave = () => {
    mx.set(0);
    my.set(0);
  };

  const classes = `group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-heading font-medium transition-shadow duration-300 hover:shadow-lift ${v.base} ${sizes[size]} ${className}`;

  const inner = (
    <>
      <span
        aria-hidden="true"
        className={`absolute inset-0 origin-left scale-x-0 rounded-full transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:scale-x-100 ${v.fill}`}
      />
      <span className={`relative z-10 inline-flex items-center gap-2 transition-colors duration-300 ${v.hoverText}`}>
        {children}
      </span>
    </>
  );

  const fullWidth = className.includes("w-full");

  return (
    <motion.span
      ref={ref}
      style={{ x, y }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={fullWidth ? "block w-full" : "inline-block"}
    >
      {external ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {inner}
        </a>
      ) : (
        <Link href={href} className={classes}>
          {inner}
        </Link>
      )}
    </motion.span>
  );
}
