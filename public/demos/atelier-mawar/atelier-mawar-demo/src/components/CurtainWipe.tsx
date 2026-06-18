/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

interface CurtainWipeProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string; // e.g. "aspect-[3/4]" or "aspect-video"
  primaryColor?: string; // hex or tailwind text
  delay?: number;
}

export default function CurtainWipe({
  src,
  alt,
  className = '',
  aspectRatio = 'aspect-[3/4]',
  delay = 0,
}: CurtainWipeProps) {
  return (
    <div className={`relative overflow-hidden clip-reveal ${aspectRatio} ${className}`}>
      {/* Underlying Image */}
      <motion.img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        className="w-full h-full object-cover"
        initial={{ scale: 1.15, filter: 'blur(4px) grayscale(10%)' }}
        whileInView={{ scale: 1, filter: 'blur(0px) grayscale(0%)' }}
        viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
        transition={{
          duration: 1.4,
          delay: delay + 0.1,
          ease: [0.22, 1, 0.36, 1], // Ultra luxury ease-out cubic-bezier
        }}
      />

      {/* Wipe Curtain Overlay */}
      <motion.div
        className="absolute inset-0 bg-primary z-10"
        style={{
          backgroundColor: 'var(--brand-primary, #6E3848)',
        }}
        initial={{ x: '0%' }}
        whileInView={{ x: '101%' }}
        viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
        transition={{
          duration: 1.2,
          delay: delay,
          ease: [0.22, 1, 0.36, 1],
        }}
      />

      {/* Decorative subtle second blush sweep */}
      <motion.div
        className="absolute inset-0 bg-secondary z-9"
        style={{
          backgroundColor: 'var(--brand-secondary, #F2E2E0)',
        }}
        initial={{ x: '0%' }}
        whileInView={{ x: '101%' }}
        viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
        transition={{
          duration: 1.35,
          delay: delay + 0.05,
          ease: [0.22, 1, 0.36, 1],
        }}
      />
    </div>
  );
}
