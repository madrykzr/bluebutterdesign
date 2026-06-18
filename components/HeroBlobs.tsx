"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Large soft-blurred organic blobs drifting slowly behind the hero.
 * Butter at 10–15% opacity, blue grey at 6–8%. Pure CSS/Motion, no images.
 */
export default function HeroBlobs() {
  const reduceMotion = useReducedMotion();

  const drift = (path: { x: number[]; y: number[] }, duration: number) =>
    reduceMotion
      ? {}
      : {
          animate: { x: path.x, y: path.y },
          transition: {
            duration,
            repeat: Infinity,
            repeatType: "mirror" as const,
            ease: "easeInOut" as const,
          },
        };

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* butter, warm tone (10–12%) */}
      <motion.div
        className="absolute -top-32 -left-24 h-[480px] w-[520px] rounded-[45%_55%_60%_40%/55%_45%_55%_45%] bg-butter blur-3xl"
        style={{ opacity: 0.12 }}
        {...drift({ x: [0, 60, 20], y: [0, 40, 80] }, 26)}
      />
      <motion.div
        className="absolute -bottom-40 left-1/4 h-[420px] w-[460px] rounded-[50%_50%_55%_45%/60%_40%_60%_40%] bg-butter blur-3xl"
        style={{ opacity: 0.1 }}
        {...drift({ x: [0, 50, -20], y: [0, -40, -10] }, 24)}
      />
      {/* blue-grey, cool tone (6–8%) */}
      <motion.div
        className="absolute top-1/4 -right-40 h-[520px] w-[560px] rounded-[55%_45%_40%_60%/45%_55%_45%_55%] bg-bluegrey blur-3xl"
        style={{ opacity: 0.08 }}
        {...drift({ x: [0, -70, -30], y: [0, 50, 10] }, 30)}
      />
      <motion.div
        className="absolute -bottom-24 -right-10 h-[360px] w-[380px] rounded-[50%_50%_45%_55%/55%_45%_60%_40%] bg-bluegrey blur-3xl"
        style={{ opacity: 0.06 }}
        {...drift({ x: [0, -40, -10], y: [0, -30, -60] }, 28)}
      />
    </div>
  );
}
