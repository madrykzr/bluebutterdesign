/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

export default function ProductCard({ product, onClick }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onClick={() => onClick(product)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group cursor-pointer flex flex-col relative interactive-card"
    >
      {/* Editorial Card Aspect Container */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-50 mb-4 clip-reveal">
        {/* Resting Image */}
        <img
          src={product.frontImage}
          alt={product.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover grayscale-5 group-hover:scale-105 transition-transform duration-1000 ease-out"
        />

        {/* Hover Crossfade Alternate Angle Image */}
        <AnimatePresence>
          {isHovered && (
            <motion.img
              src={product.altImage}
              alt={`${product.name} detail`}
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1.05 }}
              exit={{ opacity: 0, scale: 1 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
          )}
        </AnimatePresence>

        {/* Subtle vignette/shimmer overlay */}
        <div className="absolute inset-0 bg-black/3 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

        {/* Tag on card top-left: "SS26" */}
        <div className="absolute top-4 left-4 mix-blend-difference">
          <span className="font-mono text-[9px] text-white tracking-[0.25em] bg-black/30 backdrop-blur-xs px-2 py-1">
            SS26
          </span>
        </div>
      </div>

      {/* Text Details - Slides Up slightly on Hover */}
      <motion.div
        animate={{ y: isHovered ? -4 : 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col space-y-1"
      >
        <div className="flex justify-between items-baseline">
          <h3 className="font-serif text-lg md:text-xl text-dark tracking-tight font-normal leading-tight group-hover:text-primary transition-colors duration-500">
            {product.name}
          </h3>
          <span className="font-mono text-[11px] text-neutral-500 tracking-wider">
            {product.price}
          </span>
        </div>
        <p className="font-sans text-[12px] font-light text-neutral-500 line-clamp-1 group-hover:text-neutral-700 transition-colors duration-500">
          {product.description}
        </p>
      </motion.div>
    </div>
  );
}
