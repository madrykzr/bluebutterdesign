/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  // Mouse coordinates with spring properties for buttery elastic motion
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 40, stiffness: 350, mass: 0.6 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check if device supports hover/fine pointer
    const mediaQuery = window.matchMedia('(any-pointer: fine)');
    setIsMobile(!mediaQuery.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsMobile(!e.matches);
    };

    mediaQuery.addEventListener('change', handleMediaChange);

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX - 12);
      cursorY.set(e.clientY - 12);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Listen to hovering state on clickable elements
    const addHoverListeners = () => {
      const clickables = document.querySelectorAll('a, button, select, input, [role="button"], .interactive-card');
      clickables.forEach((el) => {
        el.addEventListener('mouseenter', () => setIsHovered(true));
        el.addEventListener('mouseleave', () => setIsHovered(false));
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Initial listener scan
    addHoverListeners();

    // Re-check periodically when DOM changes (as SPA transitions occur)
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    // Enable custom cursor styles class on html
    if (mediaQuery.matches) {
      document.documentElement.classList.add('custom-cursor-enabled');
    }

    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      observer.disconnect();
      document.documentElement.classList.remove('custom-cursor-enabled');
    };
  }, [cursorX, cursorY, isVisible]);

  if (isMobile || !isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 border rounded-full pointer-events-none z-50 mix-blend-difference flex items-center justify-center"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        borderColor: isHovered ? 'rgba(255, 255, 255, 0.4)' : '#6E3848',
        borderWidth: isHovered ? '1px' : '1.5px',
      }}
      animate={{
        scale: isHovered ? 2.2 : 1,
        backgroundColor: isHovered ? 'rgba(110, 56, 72, 0.05)' : 'rgba(0, 0, 0, 0)',
      }}
      transition={{
        type: 'tween',
        ease: [0.22, 1, 0.36, 1],
        duration: 0.6,
      }}
    >
      {/* Inner Pinpoint Dot */}
      <motion.div
        className="w-1 h-1 bg-primary rounded-full"
        style={{
          backgroundColor: '#6E3848',
        }}
        animate={{
          scale: isHovered ? 0.5 : 1,
        }}
        transition={{
          duration: 0.3,
        }}
      />
    </motion.div>
  );
}
