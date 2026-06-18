/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

export const MascotFollower: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  
  // Motion values for client mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Springs create the springy lerp delay.
  // The dog is more responsive.
  const dogX = useSpring(mouseX, { stiffness: 110, damping: 22 });
  const dogY = useSpring(mouseY, { stiffness: 110, damping: 22 });

  // The cat lags slightly more.
  const catX = useSpring(mouseX, { stiffness: 65, damping: 18 });
  const catY = useSpring(mouseY, { stiffness: 65, damping: 18 });

  // Tracks scroll rate to simulate "running"
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Hide tracker on touch-enabled devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      // Offset slightly so they follow beside the cursor instead of directly under it (keeps elements clickable)
      mouseX.set(e.clientX + 32);
      mouseY.set(e.clientY + 32);
      if (!isVisible) {
        setIsVisible(true);
      }
    };

    let scrollTimeout: NodeJS.Timeout;
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsScrolling(true);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [mouseX, mouseY, isVisible]);

  // Rotations that wobble while the user scrolls or moves
  const runningWobble = isScrolling ? [0, -10, 10, -10, 5, 0] : [0];

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden hidden md:block">
      {/* ---------------- DOG FOLLOWER ---------------- */}
      <motion.div
        style={{
          x: dogX,
          y: dogY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={isScrolling ? {
          y: [0, -12, 0],
          rotate: [-15, 15, -15, 0],
        } : {
          y: 0,
          rotate: 0
        }}
        transition={isScrolling ? {
          y: { repeat: Infinity, duration: 0.4, ease: "easeInOut" },
          rotate: { repeat: Infinity, duration: 0.6, ease: "easeInOut" }
        } : { duration: 0.2 }}
        className="absolute w-14 h-14"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
          {/* Paw backdrop or cute head */}
          <circle cx="50" cy="50" r="42" fill="#EFA751" stroke="#FFFBF5" strokeWidth="4" />
          {/* Inner ears */}
          <path d="M15,35 C5,35 1,55 5,75 Z" fill="#D7A15C" />
          <path d="M85,35 C95,35 99,55 95,75 Z" fill="#D7A15C" />
          {/* Eyes */}
          <circle cx="36" cy="45" r="5" fill="#2D2D2D" />
          <circle cx="34" cy="43" r="1.5" fill="#FFFBF5" />
          <circle cx="64" cy="45" r="5" fill="#2D2D2D" />
          <circle cx="62" cy="43" r="1.5" fill="#FFFBF5" />
          {/* Cheeky blushing */}
          <circle cx="28" cy="58" r="4" fill="#F4B6B0" opacity="0.8" />
          <circle cx="72" cy="58" r="4" fill="#F4B6B0" opacity="0.8" />
          {/* White snout */}
          <ellipse cx="50" cy="60" rx="14" ry="10" fill="#FFFBF5" />
          <path d="M45,56 C45,54 55,54 55,56 C55,60 50,64 50,64 Z" fill="#2D2D2D" />
          {/* Floppy tongue */}
          <path d="M46,65 C46,65 44,78 50,78 C56,78 54,65 54,65 Z" fill="#F4B6B0" />
        </svg>
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-brand-charcoal text-white text-[9px] font-mono px-2 py-0.5 rounded-full uppercase whitespace-nowrap shadow-sm opacity-60">
          Bark!
        </div>
      </motion.div>

      {/* ---------------- CAT FOLLOWER (Lags slightly more) ---------------- */}
      <motion.div
        style={{
          x: catX,
          y: catY,
          // Slightly offset from the dog so they don't clip on top of each other
          marginLeft: '48px',
          marginTop: '32px',
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={isScrolling ? {
          y: [0, -9, 0],
          rotate: [12, -12, 12, 0],
        } : {
          y: 0,
          rotate: 0
        }}
        transition={isScrolling ? {
          y: { repeat: Infinity, duration: 0.35, delay: 0.08, ease: "easeInOut" },
          rotate: { repeat: Infinity, duration: 0.55, delay: 0.05, ease: "easeInOut" }
        } : { duration: 0.2 }}
        className="absolute w-12 h-12"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
          <circle cx="50" cy="50" r="42" fill="#FBAD75" stroke="#FFFBF5" strokeWidth="4" />
          {/* Pointy ears */}
          <path d="M15,25 L5,5 L28,21 Z" fill="#EA9C75" />
          <path d="M85,25 L95,5 L72,21 Z" fill="#EA9C75" />
          {/* Eyes */}
          <ellipse cx="36" cy="46" rx="5" ry="5" fill="#2D2D2D" />
          <circle cx="34" cy="44" r="1.5" fill="#FFFBF5" />
          <ellipse cx="64" cy="46" rx="5" ry="5" fill="#2D2D2D" />
          <circle cx="62" cy="44" r="1.5" fill="#FFFBF5" />
          {/* Mini snout & whiskers */}
          <polygon points="48,52 52,52 50,55" fill="#F4B6B0" />
          <path d="M47,57 C48,59 50,59 50,57 C50,59 52,59 53,57" stroke="#2D2D2D" strokeWidth="1.5" />
          {/* Whiskers */}
          <line x1="25" y1="55" x2="15" y2="54" stroke="#FFFBF5" strokeWidth="2" />
          <line x1="25" y1="60" x2="13" y2="61" stroke="#FFFBF5" strokeWidth="2" />
          <line x1="75" y1="55" x2="85" y2="54" stroke="#FFFBF5" strokeWidth="2" />
          <line x1="75" y1="60" x2="87" y2="61" stroke="#FFFBF5" strokeWidth="2" />
        </svg>
        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-brand-charcoal text-white text-[9px] font-mono px-2 py-0.5 rounded-full uppercase whitespace-nowrap shadow-sm opacity-60">
          Meow
        </div>
      </motion.div>
    </div>
  );
};
