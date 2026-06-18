"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import PlaceholderImage from "@/components/PlaceholderImage";
import { images } from "@/lib/images";

/**
 * Signature move (home hero only): the mascot peeks from the bottom-right of
 * the viewport and slowly tilts toward the cursor as it moves. Desktop only,
 * disabled on reduced motion.
 */
export default function CursorMascot() {
  const [enabled, setEnabled] = useState(false);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const sx = useSpring(mx, { stiffness: 80, damping: 18, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 80, damping: 18, mass: 0.6 });

  // map cursor position (0–1) to a gentle tilt + lean
  const rotate = useTransform(sx, [0, 1], [14, -14]);
  const tx = useTransform(sx, [0, 1], [10, -10]);
  const ty = useTransform(sy, [0, 1], [6, -6]);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const ok = fine.matches && !reduce.matches;
    setEnabled(ok);
    if (!ok) return;

    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX / window.innerWidth);
      my.set(e.clientY / window.innerHeight);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed bottom-0 right-3 z-40 hidden w-28 origin-bottom lg:block xl:w-36"
      initial={{ y: 120, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.1, duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
      style={{ rotate, x: tx, y: ty }}
    >
      <PlaceholderImage
        src={images.mascotPeek.src}
        alt=""
        width={images.mascotPeek.width}
        height={images.mascotPeek.height}
        fallbackClassName="!border !border-dashed !border-butter-dark/40 !bg-butter/30"
      />
    </motion.div>
  );
}
