/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

// Classical Roman Numerals converter
const toRoman = (num: number): string => {
  const romanMap: [number, string][] = [
    [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']
  ];
  let result = '';
  let val = num;
  for (const [limit, symbol] of romanMap) {
    while (val >= limit) {
      result += symbol;
      val -= limit;
    }
  }
  return result || 'I';
};

export default function ScrollProgress() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [totalSections, setTotalSections] = useState(1);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // 1. Calculate overall scroll percentage
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        setScrollPercent(window.scrollY / docHeight);
      } else {
        setScrollPercent(0);
      }

      // 2. Identify active editorial-section
      const sections = Array.from(document.querySelectorAll('.editorial-section'));
      if (sections.length === 0) {
        setTotalSections(1);
        setCurrentIndex(1);
        return;
      }

      setTotalSections(sections.length);

      // Find which section is most centered in the viewport
      const viewportMid = window.innerHeight / 2;
      let closestIndex = 0;
      let closestDist = Infinity;

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        // Distance of section center from viewport middle
        const sectionMid = rect.top + rect.height / 2;
        const dist = Math.abs(sectionMid - viewportMid);
        
        if (dist < closestDist) {
          closestDist = dist;
          closestIndex = index;
        }
      });

      setCurrentIndex(closestIndex + 1);
    };

    // Fast event binding
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Execute initially
    handleScroll();

    // Re-run scan when route transitions append or remove DOM nodes
    const observer = new MutationObserver(handleScroll);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="fixed top-8 right-8 z-40 hidden md:flex flex-col items-end space-y-3 pointer-events-none">
      {/* Roman Index Indicator */}
      <div className="font-mono text-[10px] tracking-[0.25em] text-neutral-400 bg-white/70 backdrop-blur-xs px-2 py-1 select-none">
        <span className="text-dark font-medium transition-colors duration-500">
          {toRoman(currentIndex)}
        </span>
        <span className="text-neutral-300 mx-2">/</span>
        <span className="text-neutral-400">
          {toRoman(totalSections)}
        </span>
      </div>

      {/* Tiny Precision Scrollbar Rail */}
      <div className="w-[1px] h-24 bg-neutral-100 relative overflow-hidden">
        <motion.div
          className="absolute top-0 right-0 left-0 bg-primary"
          style={{
            originY: 0,
            height: `${scrollPercent * 100}%`,
            backgroundColor: 'var(--brand-primary, #6E3848)'
          }}
          transition={{
            type: 'spring',
            stiffness: 100,
            damping: 30,
            restDelta: 0.001
          }}
        />
      </div>
    </div>
  );
}
