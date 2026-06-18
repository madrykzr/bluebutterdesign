"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import Button from "@/components/Button";
import Sticker from "@/components/Sticker";
import { images } from "@/lib/images";

const line1 = "Websites";
const line2 = "that feel";
const line3 = "warm.";

/**
 * Editorial home hero: oversized headline animating in letter-by-letter,
 * mono caption labels scattered around it, a parallaxing mascot, and
 * drip strands running down from the very top of the viewport.
 */
export default function HeroHome() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  // mouse-move parallax on the mascot
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const px = useSpring(mx, { stiffness: 60, damping: 18 });
  const py = useSpring(my, { stiffness: 60, damping: 18 });

  // scroll parallax
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const mascotY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 120]);

  // live clock (mono badge)
  const [time, setTime] = useState<string>("");
  useEffect(() => {
    const tick = () =>
      setTime(
        new Intl.DateTimeFormat("en-MY", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Asia/Kuala_Lumpur",
          hour12: false,
        }).format(new Date())
      );
    tick();
    const id = setInterval(tick, 1000 * 30);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (reduce) return;
    const onMove = (e: MouseEvent) => {
      mx.set(((e.clientX / window.innerWidth) - 0.5) * 36);
      my.set(((e.clientY / window.innerHeight) - 0.5) * 24);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my, reduce]);

  const renderWord = (word: string, base: number, className = "") => (
    <span className={`inline-block ${className}`}>
      {word.split("").map((ch, i) => (
        <motion.span
          key={`${word}-${i}`}
          className="inline-block whitespace-pre"
          initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: "0.6em" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: base + i * 0.04, duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          {ch === " " ? " " : ch}
        </motion.span>
      ))}
    </span>
  );

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-cream"
      aria-label="Bluebutter Design, web design and development for businesses across Malaysia"
    >
      {/* drips running down from the top edge, the whole viewport is melting */}
      <ViewportDrips />

      {/* soft drifting blobs */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -left-24 top-24 h-[460px] w-[500px] bg-butter blur-3xl"
          style={{ opacity: 0.15, borderRadius: "45% 55% 60% 40% / 55% 45% 55% 45%" }}
          animate={reduce ? {} : { x: [0, 50, 10], y: [0, 40, 70] }}
          transition={{ duration: 26, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-40 top-1/2 h-[520px] w-[560px] bg-bluegrey blur-3xl"
          style={{ opacity: 0.08, borderRadius: "55% 45% 40% 60% / 45% 55% 45% 55%" }}
          animate={reduce ? {} : { x: [0, -60, -20], y: [0, 40, 0] }}
          transition={{ duration: 30, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
        />
        {/* extra blue-grey blob top-right so the hero isn't mono-yellow */}
        <motion.div
          className="absolute -right-16 -top-24 h-[360px] w-[380px] bg-bluegrey blur-3xl"
          style={{ opacity: 0.07, borderRadius: "50% 50% 45% 55% / 55% 45% 60% 40%" }}
          animate={reduce ? {} : { x: [0, -30, -10], y: [0, 30, 50] }}
          transition={{ duration: 28, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
        />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-4 pb-24 pt-20 md:px-8 md:pb-28 md:pt-28">
        {/* top caption row */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <span className="mono-label">01 / Web Design Team</span>
          <span className="mono-label hidden sm:inline">Based in Malaysia</span>
          <span className="mono-label">
            KL {time && <span className="text-bluegrey-dark">{time}</span>}
          </span>
        </div>

        {/* oversized headline bleeding to the edges */}
        <div className="relative mt-10 md:mt-14">
          <h1 className="wordmark text-charcoal" style={{ fontSize: "clamp(3.5rem, 15vw, 14rem)" }}>
            <span className="block whitespace-nowrap">{renderWord(line1, 0.2)}</span>
            <span className="block whitespace-nowrap pl-[6vw] text-bluegrey-dark">{renderWord(line2, 0.5)}</span>
            <span className="relative block whitespace-nowrap pl-[18vw]">
              {renderWord(line3, 0.8)}
              {/* drip under the final word */}
              <svg
                aria-hidden="true"
                viewBox="0 0 200 40"
                className="absolute -bottom-2 left-[18vw] h-8 w-40 text-butter-dark"
                preserveAspectRatio="none"
              >
                <motion.path
                  d="M2 6 C 40 0, 80 12, 120 5 C 150 0, 180 10, 198 4"
                  stroke="currentColor"
                  strokeWidth={5}
                  strokeLinecap="round"
                  fill="none"
                  initial={reduce ? { pathLength: 1 } : { pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 1.1, duration: 0.9, ease: "easeInOut" }}
                />
              </svg>
            </span>
          </h1>

          {/* mascot floating to the right, parallaxing */}
          <motion.div
            aria-hidden={false}
            className="pointer-events-none absolute -top-6 right-0 hidden w-[26vw] max-w-sm md:block"
            style={{ x: px, y: reduce ? 0 : py, translateY: mascotY }}
          >
            <motion.div
              animate={reduce ? {} : { y: [0, -14, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/mascot-herogif1.gif"
                alt={images.mascotHero.alt}
                className="w-full h-auto"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* lower content: copy + CTAs + scattered stickers */}
        <div className="mt-12 grid items-end gap-8 md:mt-16 md:grid-cols-[1.3fr_1fr]">
          <motion.div
            initial={reduce ? { opacity: 1 } : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.7 }}
          >
            <p className="max-w-lg text-lg leading-relaxed text-charcoal/70">
              Custom websites built with modern technology, fast, responsive,
              and designed to convert. We work with businesses across Malaysia,
              from cafes and retail to corporate, e-commerce and creative
              studios. Transparent pricing, no hidden fees, delivered on time.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact" variant="butter" size="lg">
                Get a free quote
              </Button>
              <Button href="/portfolio" variant="secondary" size="lg">
                See our work
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-wrap items-center gap-3 md:justify-end"
            initial={reduce ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.7 }}
          >
            <Sticker rotate={-5} variant="butter">RM0/mo automation</Sticker>
            <Sticker rotate={4} variant="outline">Online by next week</Sticker>
            <Sticker rotate={-2} variant="blue">Est. 2026</Sticker>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/** Thin butter drip strands hanging down from the top edge of the hero. */
function ViewportDrips() {
  const reduce = useReducedMotion();
  const drips = [
    { x: "8%", w: 7, h: 90, d: 0.2 },
    { x: "22%", w: 5, h: 58, d: 0.45 },
    { x: "40%", w: 9, h: 130, d: 0.1 },
    { x: "58%", w: 6, h: 74, d: 0.55 },
    { x: "73%", w: 8, h: 104, d: 0.3 },
    { x: "90%", w: 5, h: 50, d: 0.6 },
  ];
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 z-10 h-40">
      {drips.map((d, i) => (
        <motion.div
          key={i}
          className="absolute top-0 origin-top rounded-b-full bg-butter/70"
          style={{ left: d.x, width: d.w, height: d.h }}
          initial={reduce ? { scaleY: 1 } : { scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: d.d, duration: 0.9, ease: [0.65, 0, 0.35, 1] }}
        >
          <span
            className="absolute -bottom-1.5 left-1/2 block h-3 w-3 -translate-x-1/2 rounded-full bg-butter/70"
          />
        </motion.div>
      ))}
    </div>
  );
}
