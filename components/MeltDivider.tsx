"use client";

import { motion, useReducedMotion } from "framer-motion";

type MeltDividerProps = {
  /** Colour of the section above (the colour that "drips" down) */
  from?: string;
  /** Background colour of the section below */
  to?: string;
  className?: string;
  flip?: boolean;
};

/**
 * Signature Bluebutter section divider — a wavy "melting drip" edge with
 * thin strands that animate downward when scrolled into view, like butter
 * melting off the section above. Pure SVG, no image files.
 */
export default function MeltDivider({
  from = "#FAFAF7",
  to = "transparent",
  className = "",
  flip = false,
}: MeltDividerProps) {
  const reduce = useReducedMotion();

  // a few thin drip strands at varying x positions / lengths
  const strands = [
    { x: 180, w: 10, h: 34, delay: 0.05 },
    { x: 470, w: 8, h: 22, delay: 0.18 },
    { x: 720, w: 12, h: 44, delay: 0.1 },
    { x: 980, w: 8, h: 26, delay: 0.24 },
    { x: 1240, w: 10, h: 38, delay: 0.14 },
  ];

  return (
    <div
      aria-hidden="true"
      className={`relative -mt-px w-full overflow-hidden leading-none ${className}`}
      style={{ backgroundColor: to, transform: flip ? "rotate(180deg)" : undefined }}
    >
      <svg
        viewBox="0 0 1440 96"
        preserveAspectRatio="none"
        className="block h-[56px] w-full md:h-[84px]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill={from}
          d="M0,0 L1440,0 L1440,26
            C1404,26 1398,72 1356,72 C1314,72 1320,26 1252,26
            C1192,26 1200,54 1152,54 C1104,54 1112,26 1040,26
            C964,26 976,82 920,82 C864,82 876,26 800,26
            C736,26 744,60 696,60 C648,60 656,26 580,26
            C504,26 516,76 460,76 C404,76 416,26 340,26
            C280,26 288,48 240,48 C192,48 200,26 132,26
            C84,26 76,64 40,64 C18,64 8,40 0,40 Z"
        />
        {/* animated drip strands */}
        {strands.map((s, i) => (
          <motion.rect
            key={i}
            x={s.x}
            y={24}
            width={s.w}
            height={s.h}
            rx={s.w / 2}
            fill={from}
            style={{ transformOrigin: `${s.x + s.w / 2}px 24px` }}
            initial={reduce ? { scaleY: 1 } : { scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, delay: s.delay, ease: [0.65, 0, 0.35, 1] }}
          >
            <title>drip</title>
          </motion.rect>
        ))}
        {strands.map((s, i) => (
          <motion.circle
            key={`d-${i}`}
            cx={s.x + s.w / 2}
            r={s.w / 2 + 1}
            fill={from}
            initial={reduce ? { cy: 24 + s.h } : { cy: 24 }}
            whileInView={{ cy: 24 + s.h + 4 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, delay: s.delay + 0.05, ease: [0.65, 0, 0.35, 1] }}
          />
        ))}
      </svg>
    </div>
  );
}
