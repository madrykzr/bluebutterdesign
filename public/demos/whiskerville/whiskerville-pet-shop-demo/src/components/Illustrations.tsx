/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';

// Common filters for standard soft 3D claymorphic depth
const ShadowDefs = () => (
  <defs>
    <filter id="clay-shadow" x="-20%" y="-20%" width="150%" height="150%">
      <feDropShadow dx="0" dy="10" stdDeviation="8" floodColor="#2D2D2D" floodOpacity="0.15" />
    </filter>
    <filter id="inner-highlight" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="3" result="blur" />
      <feComposite in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowDiff" />
      <feFlood floodColor="#FFFFFF" floodOpacity="0.4" />
      <feComposite in2="shadowDiff" operator="in" />
      <feComposite in2="SourceGraphic" operator="over" />
    </filter>
  </defs>
);

// 1. HERO MASCOTS: A dog and a cat sitting together
export const MascotsHero: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative select-none ${className}`}>
      <svg
        viewBox="0 0 500 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-md"
      >
        <ShadowDefs />
        
        {/* Playful Dog Background Blob */}
        <circle cx="250" cy="220" r="160" fill="#FFF6E8" stroke="#F4B6B0" strokeWidth="8" strokeDasharray="12 8" />

        {/* ------------------ THE DOG (Left) ------------------ */}
        <g transform="translate(110, 100)" className="cursor-pointer">
          {/* Dog Tail */}
          <motion.path
            d="M5,170 C-20,150 -30,120 -15,100 C-5,85 15,95 10,120 C5,145 15,160 15,160 Z"
            fill="#D7A15C"
            transform-origin="10px 160px"
            animate={{
              rotate: [0, -15, 10, -15, 5, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 2.2,
              ease: "easeInOut"
            }}
          />
          
          {/* Dog Body */}
          <path
            d="M20,130 C20,90 100,90 100,130 C100,180 110,240 100,250 C90,260 20,260 15,250 C5,240 20,180 20,130 Z"
            fill="#EFA751"
            filter="url(#clay-shadow)"
          />
          {/* Dog Chest (White fur) */}
          <path
            d="M40,160 C40,140 80,140 80,160 C80,200 90,240 75,248 C60,252 40,245 40,220 C40,200 40,180 40,160 Z"
            fill="#FFFBF5"
          />

          {/* Dog Head */}
          <motion.g
            animate={{
              y: [0, -3, 0],
              rotate: [0, 1, -1, 0]
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut"
            }}
          >
            {/* Crown of Head & snout shadow */}
            <rect x="25" y="40" width="70" height="70" rx="35" fill="#EFA751" />
            
            {/* Dog Ears */}
            {/* Left Ear */}
            <motion.path
              d="M25,48 C15,48 0,70 0,110 C0,130 15,130 25,110 Z"
              fill="#D7A15C"
              transform-origin="25px 48px"
              animate={{ rotate: [0, 6, -3, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            />
            {/* Right Ear */}
            <motion.path
              d="M95,48 C105,48 120,70 120,110 C120,130 105,130 95,110 Z"
              fill="#D7A15C"
              transform-origin="95px 48px"
              animate={{ rotate: [0, -6, 3, 0] }}
              transition={{ repeat: Infinity, duration: 3, delay: 0.3, ease: "easeInOut" }}
            />

            {/* Dog Eyes */}
            {/* Left Eye */}
            <g transform="translate(42, 70)">
              <circle cx="0" cy="0" r="7" fill="#2D2D2D" />
              <motion.ellipse
                cx="-2" cy="-2" rx="2" ry="2" fill="#FFFFFF"
                animate={{ scaleY: [1, 0.1, 1] }}
                transition={{ repeat: Infinity, duration: 4, repeatDelay: 3 }}
              />
            </g>
            {/* Right Eye */}
            <g transform="translate(78, 70)">
              <circle cx="0" cy="0" r="7" fill="#2D2D2D" />
              <motion.ellipse
                cx="-2" cy="-2" rx="2" ry="2" fill="#FFFFFF"
                animate={{ scaleY: [1, 0.1, 1] }}
                transition={{ repeat: Infinity, duration: 4, repeatDelay: 3 }}
              />
            </g>

            {/* Muzzle */}
            <path d="M40,78 C40,73 80,73 80,78 C80,95 70,105 50,105 C42,105 40,90 40,78 Z" fill="#FFFBF5" />
            
            {/* Dog Nose */}
            <path d="M53,80 C53,77 67,77 67,80 C67,85 62,90 60,90 C58,90 53,85 53,80 Z" fill="#2D2D2D" />

            {/* Tongue */}
            <motion.path
              d="M55,94 C55,94 54,112 60,112 C66,112 65,94 65,94 Z"
              fill="#F4B6B0"
              animate={{ scaleY: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            />
            {/* Mouth Seam */}
            <path d="M50,88 C54,92 66,92 70,88" stroke="#2D2D2D" strokeWidth="2.5" strokeLinecap="round" />
          </motion.g>

          {/* Collaring */}
          <path d="M28,145 C50,154 70,154 92,145" stroke="#8AA8C1" strokeWidth="7" strokeLinecap="round" />
          <circle cx="60" cy="154" r="6" fill="#FAD2C0" />
        </g>

        {/* ------------------ THE CAT (Right) ------------------ */}
        <g transform="translate(260, 140)">
          {/* Cat Tail */}
          <motion.path
            d="M85,170 C110,180 130,160 125,130 C120,110 105,100 108,80 C110,65 125,75 120,90"
            stroke="#EA9C75"
            strokeWidth="10"
            strokeLinecap="round"
            fill="none"
            transform-origin="85px 170px"
            animate={{
              rotate: [0, 8, -6, 8, -4, 0]
            }}
            transition={{
              repeat: Infinity,
              duration: 2.8,
              ease: "easeInOut"
            }}
          />

          {/* Cat Body */}
          <path
            d="M15,100 C15,70 85,70 85,100 C85,130 95,200 85,210 C75,220 15,220 10,210 C5,200 15,130 15,100 Z"
            fill="#FBAD75"
            filter="url(#clay-shadow)"
          />
          <path d="M35,120 C35,110 65,110 65,120 C65,150 75,210 65,215 C55,220 35,220 35,210 Z" fill="#FFFBF5" />

          {/* Cat Head */}
          <motion.g
            animate={{
              y: [0, 2, 0],
              rotate: [0, -1, 1, 0]
            }}
            transition={{
              repeat: Infinity,
              duration: 3.5,
              ease: "easeInOut"
            }}
          >
            <rect x="20" y="30" width="60" height="55" rx="27.5" fill="#FBAD75" />
            
            {/* Ears */}
            {/* Left Ear */}
            <motion.path
              d="M20,40 L5,10 L30,32 Z"
              fill="#EA9C75"
              animate={{ rotate: [0, -5, 3, 0] }}
              transition={{ repeat: Infinity, duration: 3.2, ease: "easeInOut" }}
            />
            {/* Right Ear */}
            <motion.path
              d="M80,40 L95,10 L70,32 Z"
              fill="#EA9C75"
              animate={{ rotate: [0, 5, -3, 0] }}
              transition={{ repeat: Infinity, duration: 3.2, delay: 0.2, ease: "easeInOut" }}
            />

            {/* Cat Eyes */}
            <g transform="translate(35, 55)">
              <ellipse cx="0" cy="0" rx="6" ry="6" fill="#2D2D2D" />
              <circle cx="-1" cy="-1" r="1.5" fill="#FFFFFF" />
            </g>
            <g transform="translate(65, 55)">
              <ellipse cx="0" cy="0" rx="6" ry="6" fill="#2D2D2D" />
              <circle cx="-1" cy="-1" r="1.5" fill="#FFFFFF" />
            </g>

            {/* Nose & Whiskers */}
            <polygon points="48,60 52,60 50,63" fill="#F4B6B0" />
            <path d="M47,65 C48,67 50,67 50,65 C50,67 52,67 53,65" stroke="#2D2D2D" strokeWidth="1.5" />
            
            {/* Whiskers Left */}
            <line x1="25" y1="62" x2="10" y2="60" stroke="#F4B6B0" strokeWidth="2" strokeLinecap="round" />
            <line x1="25" y1="67" x2="8" y2="69" stroke="#F4B6B0" strokeWidth="2" strokeLinecap="round" />
            
            {/* Whiskers Right */}
            <line x1="75" y1="62" x2="90" y2="60" stroke="#F4B6B0" strokeWidth="2" strokeLinecap="round" />
            <line x1="75" y1="67" x2="92" y2="69" stroke="#F4B6B0" strokeWidth="2" strokeLinecap="round" />
          </motion.g>

          {/* Little green collar with bell */}
          <path d="M22,82 C37,89 53,89 68,82" stroke="#A8C09A" strokeWidth="5" strokeLinecap="round" />
          <circle cx="45" cy="88" r="4" fill="#FFF1C0" stroke="#2D2D2D" strokeWidth="1" />
        </g>
      </svg>
    </div>
  );
};

// 2. PRODUCT - TREATS BAG (Pastel Pink background)
export const ProductTreatsBag: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`w-full h-full flex items-center justify-center p-6 bg-brand-pink rounded-[32px] ${className}`}>
      <svg viewBox="0 0 200 200" className="w-4/5 h-4/5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ShadowDefs />
        
        {/* Soft shadow below bag */}
        <ellipse cx="100" cy="180" rx="55" ry="10" fill="#2D2D2D" fillOpacity="0.1" />

        {/* The Bag Body */}
        <g filter="url(#clay-shadow)">
          <path
            d="M50,40 L150,40 C155,40 160,45 157,55 L142,165 C140,173 132,178 123,178 L77,178 C68,178 60,173 58,165 L43,55 C40,45 45,40 50,40 Z"
            fill="#FFFBF5"
          />
        </g>

        {/* Bag Top seal */}
        <path d="M46,40 L154,40 L150,50 L50,50 Z" fill="#EFA751" />
        <line x1="60" y1="45" x2="140" y2="45" stroke="#FFFBF5" strokeWidth="2.5" strokeDasharray="4 4" />

        {/* Cute Bag Label */}
        <rect x="58" y="72" width="84" height="75" rx="12" fill="#8AA8C1" />

        {/* Bone Emblem */}
        <path
          d="M85,110 C80,105 80,97 87,97 C92,97 94,103 100,106 C106,103 108,97 113,97 C120,97 120,105 115,110 L115,110 C120,115 120,123 113,123 C108,123 106,117 100,114 C94,117 92,123 87,123 C80,123 80,115 85,110 Z"
          fill="#FFFBF5"
        />

        {/* Mini sparkles */}
        <path d="M152,80 L156,84 L152,88 L148,84 Z" fill="#FFFBF5" />
        <path d="M142,110 L144,112 L142,114 L140,112 Z" fill="#FFFBF5" />
        <path d="M48,135 L52,139 L48,143 L44,139 Z" fill="#FFFBF5" />
      </svg>
    </div>
  );
};

// 3. PRODUCT - PET BED (Sage Green background)
export const ProductPetBed: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`w-full h-full flex items-center justify-center p-6 bg-brand-sage rounded-[32px] ${className}`}>
      <svg viewBox="0 0 200 200" className="w-4/5 h-4/5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ShadowDefs />

        {/* Ground shadow */}
        <ellipse cx="100" cy="170" rx="72" ry="16" fill="#2D2D2D" fillOpacity="0.15" />

        {/* Outer Ring of Pet Bed */}
        <path
          d="M25,130 C15,95 45,70 100,70 C155,70 185,95 175,130 C165,160 140,175 100,175 C60,175 35,160 25,130 Z"
          fill="#EFA751"
          filter="url(#clay-shadow)"
        />

        {/* Fluffy white inside bolster ring */}
        <path
          d="M37,130 C29,103 50,84 100,84 C150,84 171,103 163,130 C155,152 135,164 100,164 C65,164 45,152 37,130 Z"
          fill="#FFFBF5"
        />

        {/* Soft pink insert cushion */}
        <path
          d="M48,132 C43,112 60,98 100,98 C140,98 157,112 152,132 C147,148 130,156 100,156 C70,156 53,148 48,132 Z"
          fill="#F4B6B0"
        />

        {/* Tiny plush tufts or buttons in center of bolster bed */}
        <circle cx="100" cy="128" r="4.5" fill="#FFFBF5" />
        <circle cx="75" cy="122" r="3.5" fill="#FFFBF5" opacity="0.8" />
        <circle cx="125" cy="122" r="3.5" fill="#FFFBF5" opacity="0.8" />
        
        {/* Sleeping mini-Zzz sparkle */}
        <path d="M152,48 L160,48 L152,56 L160,56" stroke="#FFFBF5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M136,36 L142,36 L136,42 L142,42" stroke="#FFFBF5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
};

// 4. PET PORTRAIT - MOCHI THE SHIBA (Dusty Blue background)
export const PetMochiPortrait: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`w-full h-full flex items-center justify-center p-6 bg-brand-blue rounded-[32px] ${className}`}>
      <svg viewBox="0 0 200 200" className="w-5/6 h-5/6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ShadowDefs />

        {/* Outer Circular frame backdrop */}
        <circle cx="100" cy="100" r="85" fill="#8AA8C1" stroke="#FFFBF5" strokeWidth="6" />

        {/* Shiba Ears */}
        {/* Left Ear */}
        <path d="M50,85 L32,45 L72,67 Z" fill="#EFA751" filter="url(#clay-shadow)" />
        <path d="M47,80 L38,53 L62,69 Z" fill="#FFFBF5" />
        
        {/* Right Ear */}
        <path d="M150,85 L168,45 L128,67 Z" fill="#EFA751" filter="url(#clay-shadow)" />
        <path d="M153,80 L162,53 L138,69 Z" fill="#FFFBF5" />

        {/* Shiba Round Chubby Face */}
        <circle cx="100" cy="110" r="54" fill="#EFA751" filter="url(#clay-shadow)" />

        {/* White cheeks / jowl patterns */}
        <path d="M100,100 C75,100 50,115 50,135 C50,158 80,164 100,164 C120,164 150,158 150,135 C150,115 125,100 100,100 Z" fill="#FFFBF5" />

        {/* Eyes (Cute curved happy arcs) */}
        <path d="M70,108 C75,103 81,103 86,108" stroke="#2D2D2D" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M114,108 C119,103 125,103 130,108" stroke="#2D2D2D" strokeWidth="3.5" strokeLinecap="round" />

        {/* Pink Blush Cheeks */}
        <circle cx="62" cy="124" r="7" fill="#F4B6B0" opacity="0.8" />
        <circle cx="138" cy="124" r="7" fill="#F4B6B0" opacity="0.8" />

        {/* Shiba Snout */}
        <ellipse cx="100" cy="128" rx="14" ry="11" fill="#FFFBF5" stroke="#EFA751" strokeWidth="2.5" />
        <path d="M92,124 C92,121 108,121 108,124 C108,128 100,132 100,132 Z" fill="#2D2D2D" />
        <path d="M100,132 L100,138" stroke="#2D2D2D" strokeWidth="2" />
        <path d="M94,138 C97,141 100,141 100,138 C100,141 103,141 106,138" stroke="#2D2D2D" strokeWidth="2" strokeLinecap="round" />

        {/* Sweet red collar */}
        <path d="M68,154 C88,162 112,162 132,154" stroke="#F4B6B0" strokeWidth="6" strokeLinecap="round" />
        <circle cx="100" cy="161" r="5" fill="#FFF1C0" />
      </svg>
    </div>
  );
};

// 5. GENERIC DOCK BOWLI (Blue Background)
export const ProductBowl: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`w-full h-full flex items-center justify-center p-4 bg-brand-blue rounded-[24px] ${className}`}>
      <svg viewBox="0 0 100 100" className="w-4/5 h-4/5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ShadowDefs />
        <ellipse cx="50" cy="85" rx="36" ry="6" fill="#2D2D2D" fillOpacity="0.1" />
        <path d="M15,80 C15,55 25,48 50,48 C75,48 85,55 85,80 Z" fill="#FFFBF5" filter="url(#clay-shadow)" />
        <path d="M22,80 C22,65 30,58 50,58 C70,58 78,65 78,80 Z" fill="#A8C09A" />
        {/* Small bone on the front */}
        <rect x="42" y="66" width="16" height="8" rx="4" fill="#FFFBF5" />
        <circle cx="42" cy="67" r="3" fill="#FFFBF5" />
        <circle cx="42" cy="73" r="3" fill="#FFFBF5" />
        <circle cx="58" cy="67" r="3" fill="#FFFBF5" />
        <circle cx="58" cy="73" r="3" fill="#FFFBF5" />
      </svg>
    </div>
  );
};

// 6. TENNIS BALL (Soft Pink Background)
export const ProductTennisBall: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`w-full h-full flex items-center justify-center p-4 bg-brand-pink rounded-[24px] ${className}`}>
      <svg viewBox="0 0 100 100" className="w-4/5 h-4/5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ShadowDefs />
        <circle cx="50" cy="50" r="36" fill="#A8C09A" filter="url(#clay-shadow)" />
        {/* Tennis Curved seams */}
        <path d="M22,34 C36,36 36,64 22,66" stroke="#FFFBF5" strokeWidth="4.5" strokeLinecap="round" />
        <path d="M78,34 C64,36 64,64 78,66" stroke="#FFFBF5" strokeWidth="4.5" strokeLinecap="round" />
      </svg>
    </div>
  );
};

// 7. TOY MOUSE / TOY (Sage background)
export const ProductMouseToy: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`w-full h-full flex items-center justify-center p-4 bg-brand-sage rounded-[24px] ${className}`}>
      <svg viewBox="0 0 100 100" className="w-4/5 h-4/5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ShadowDefs />
        {/* Mouse Body */}
        <path d="M25,65 C25,40 55,35 75,52 C85,60 80,75 60,75 C45,75 25,75 25,65 Z" fill="#FFFBF5" filter="url(#clay-shadow)" />
        {/* Mouse Tail */}
        <path d="M25,67 C15,69 8,62 12,50" stroke="#F4B6B0" strokeWidth="3" fill="none" strokeLinecap="round" />
        {/* Mouse Ears */}
        <circle cx="68" cy="42" r="8" fill="#F4B6B0" />
        {/* Mouse Eye */}
        <circle cx="72" cy="54" r="2" fill="#2D2D2D" />
        {/* Whisker line */}
        <line x1="78" y1="58" x2="88" y2="58" stroke="#2D2D2D" strokeWidth="1" />
      </svg>
    </div>
  );
};

// 8. SHAMPOO BOTTLE (Cream Background)
export const ProductShampoo: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`w-full h-full flex items-center justify-center p-4 bg-[#FFF0D4] rounded-[24px] ${className}`}>
      <svg viewBox="0 0 100 100" className="w-4/5 h-4/5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ShadowDefs />
        {/* Cap */}
        <rect x="42" y="16" width="16" height="10" rx="3" fill="#8AA8C1" />
        {/* Bottle Body */}
        <path d="M32,26 L68,26 C72,26 75,30 75,34 L70,82 C70,86 66,90 62,90 L38,90 C34,90 30,86 30,82 L25,34 C25,30 28,26 32,26 Z" fill="#FFFBF5" filter="url(#clay-shadow)" />
        {/* Premium Label */}
        <rect x="36" y="44" width="28" height="30" rx="4" fill="#F4B6B0" />
        {/* Little bubble print */}
        <circle cx="50" cy="56" r="4" fill="#FFFBF5" />
        <circle cx="46" cy="62" r="2.5" fill="#FFFBF5" />
        <circle cx="54" cy="64" r="2" fill="#FFFBF5" />
      </svg>
    </div>
  );
};

// 9. COLLAR / STRAP (Sage Background)
export const ProductCollar: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`w-full h-full flex items-center justify-center p-4 bg-brand-sage rounded-[24px] ${className}`}>
      <svg viewBox="0 0 100 100" className="w-4/5 h-4/5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ShadowDefs />
        {/* Rounded strap */}
        <circle cx="50" cy="50" r="28" stroke="#F4B6B0" strokeWidth="10" strokeLinecap="round" filter="url(#clay-shadow)" fill="none" />
        {/* Gold brass buckle */}
        <rect x="42" y="16" width="16" height="14" rx="4" stroke="#FFF1C0" strokeWidth="4" fill="none" />
        <line x1="50" y1="16" x2="50" y2="30" stroke="#FFF1C0" strokeWidth="3" />
        {/* Dangling star charm */}
        <path d="M50,70 L51,75 L56,75 L52,78 L54,83 L50,80 L46,83 L48,78 L44,75 L49,75 Z" fill="#FFF1C0" />
      </svg>
    </div>
  );
};

// 10. CATNIP SPRAY / BOTTLE (Lilac / Blue Background)
export const ProductCatnip: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`w-full h-full flex items-center justify-center p-4 bg-[#EBD9FC] rounded-[24px] ${className}`}>
      <svg viewBox="0 0 100 100" className="w-4/5 h-4/5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ShadowDefs />
        {/* Spray nozzle */}
        <path d="M48,15 L56,15 L56,22 L48,22 Z" fill="#2D2D2D" />
        <path d="M43,22 L57,22 L55,27 L45,27 Z" fill="#8AA8C1" />
        <path d="M38,20 L44,22 L44,24 L38,24 Z" fill="#2D2D2D" />
        {/* Bottle */}
        <rect x="35" y="27" width="30" height="58" rx="8" fill="#FFFBF5" filter="url(#clay-shadow)" />
        {/* Label */}
        <rect x="39" y="42" width="22" height="30" rx="3" fill="#A8C09A" />
        {/* Leaf drawing */}
        <path d="M50,48 C45,55 50,60 50,60 C50,60 55,55 50,48 Z" fill="#FFFBF5" />
      </svg>
    </div>
  );
};

// Service Item Renderers mapping to correct design shapes contextually
export const ServiceIllustration: React.FC<{ type: 'groomer' | 'vet' | 'founder'; className?: string }> = ({ type, className = '' }) => {
  if (type === 'groomer') {
    return (
      <svg viewBox="0 0 100 100" className={`w-20 h-20 bg-brand-pink p-3 rounded-full ${className}`}>
        <defs>
          <filter id="mini-shadow"><feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.1"/></filter>
        </defs>
        {/* Bubbles */}
        <circle cx="28" cy="25" r="4" fill="#FFFBF5" opacity="0.8" />
        <circle cx="75" cy="30" r="5" fill="#FFFBF5" opacity="0.6" />
        <circle cx="50" cy="22" r="3" fill="#FFFBF5" opacity="0.9" />
        {/* Groomer Scissors & Comb */}
        <g filter="url(#mini-shadow)">
          <path d="M45,45 C45,40 37,40 37,45 L37,70" stroke="#FFFBF5" strokeWidth="5" strokeLinecap="round" />
          <path d="M55,45 C55,40 63,40 63,45 L63,70" stroke="#FFFBF5" strokeWidth="5" strokeLinecap="round" />
          <line x1="39" y1="58" x2="61" y2="58" stroke="#FFF1C0" strokeWidth="4" />
        </g>
        <circle cx="41" cy="74" r="5" stroke="#FFFBF5" strokeWidth="4" fill="none" />
        <circle cx="59" cy="74" r="5" stroke="#FFFBF5" strokeWidth="4" fill="none" />
      </svg>
    );
  }
  if (type === 'vet') {
    return (
      <svg viewBox="0 0 100 100" className={`w-20 h-20 bg-brand-blue p-3 rounded-full ${className}`}>
        {/* Stethoscope */}
        <path d="M30,30 C30,70 70,70 70,30" stroke="#FFFBF5" strokeWidth="6" strokeLinecap="round" fill="none" />
        <path d="M50,62 L50,80" stroke="#FFFBF5" strokeWidth="6" strokeLinecap="round" />
        <circle cx="50" cy="81" r="9" fill="#FFF1C0" stroke="#FFFBF5" strokeWidth="2" />
        <circle cx="30" cy="25" r="4" fill="#FFFBF5" />
        <circle cx="70" cy="25" r="4" fill="#FFFBF5" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 100 100" className={`w-20 h-20 bg-brand-sage p-3 rounded-full ${className}`}>
      {/* Baker chef hat / mixing heart */}
      <path d="M32,48 C24,42 40,24 50,38 C60,24 76,42 68,48 L50,68 Z" fill="#FFFBF5" />
      <circle cx="36" cy="72" r="5" fill="#FFF1C0" />
      <circle cx="50" cy="76" r="4" fill="#FFF1C0" />
      <circle cx="64" cy="72" r="5" fill="#FFF1C0" />
    </svg>
  );
};
