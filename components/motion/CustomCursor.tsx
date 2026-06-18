"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Custom cursor: a small Morning Butter dot that follows the mouse and
 * expands into a soft melted blob when hovering links / buttons / cards.
 * Desktop only (fine pointer + hover) and disabled on reduced motion.
 */
export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [down, setDown] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const ok = fine.matches && !reduce.matches;
    setEnabled(ok);
    if (!ok) return;

    document.documentElement.classList.add("has-custom-cursor");

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = e.target as HTMLElement | null;
      setHovering(
        Boolean(
          target?.closest(
            "a, button, [role='button'], input, textarea, select, label, [data-cursor='hover']"
          )
        )
      );
    };
    const onDown = () => setDown(true);
    const onUp = () => setDown(false);
    const onLeave = () => {
      x.set(-100);
      y.set(-100);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseleave", onLeave);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, [x, y]);

  if (!enabled) return null;

  const size = hovering ? 56 : 14;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[9999] bg-butter mix-blend-multiply"
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        width: size,
        height: size,
        opacity: hovering ? 0.85 : 1,
        scale: down ? 0.8 : 1,
        // melted-blob radius when hovering, round dot otherwise
        borderRadius: hovering
          ? ["48% 52% 60% 40% / 55% 45% 55% 45%", "55% 45% 45% 55% / 45% 55% 45% 55%"]
          : "50%",
      }}
      transition={{
        width: { type: "spring", stiffness: 300, damping: 22 },
        height: { type: "spring", stiffness: 300, damping: 22 },
        borderRadius: { duration: 4, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
        default: { duration: 0.18 },
      }}
    />
  );
}
