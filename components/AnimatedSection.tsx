"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

type AnimatedSectionProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  as?: "div" | "section" | "article" | "li";
};

const offsets = {
  up: { y: 32, x: 0 },
  down: { y: -32, x: 0 },
  left: { x: 32, y: 0 },
  right: { x: -32, y: 0 },
  none: { x: 0, y: 0 },
};

/**
 * Fades + slides children into view on scroll. Respects reduced motion.
 */
export default function AnimatedSection({
  children,
  className,
  delay = 0,
  direction = "up",
  as = "div",
}: AnimatedSectionProps) {
  const reduceMotion = useReducedMotion();
  const offset = reduceMotion ? offsets.none : offsets[direction];
  const Component = motion[as];

  return (
    <Component
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </Component>
  );
}
