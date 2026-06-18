/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';

interface PageTransitionOverlayProps {
  isTriggered: boolean;
}

export default function PageTransitionOverlay({ isTriggered }: PageTransitionOverlayProps) {
  return (
    <AnimatePresence>
      {isTriggered && (
        <motion.div
          key="transition-veil"
          className="fixed inset-0 bg-dark z-50 pointer-events-auto flex items-center justify-center bg-[#0A0A0A]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.4, // Overlap fade-in / fade-out to meet exact 800ms window
            ease: [0.22, 1, 0.36, 1], // Couture ease
          }}
        >
          {/* Subtle logo centered during dark transitions */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 0.2, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="font-serif italic text-2xl tracking-[0.2em] text-[#F2E2E0] uppercase text-center"
          >
            Atelier Mawar
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
