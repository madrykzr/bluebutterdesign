/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, HeartPulse, Award, Calendar, ChevronRight } from 'lucide-react';
import { Product, Review } from '../types';
import { SHOP_INFO, REVIEWS, PET_OF_THE_MONTH } from '../data';
import { MascotsHero, ServiceIllustration, ProductBowl, ProductTennisBall, ProductMouseToy, ProductShampoo, ProductCollar, ProductCatnip, ProductTreatsBag, ProductPetBed, PetMochiPortrait } from '../components/Illustrations';
import { playPop, playDing, playSparkle } from '../components/SoundEffects';

interface HomeProps {
  products: Product[];
  onAddToCart: (product: Product, quantity: number) => void;
  onNavigateToTab: (tabId: string) => void;
  onNavigateToProduct: (productSlug: string) => void;
}

export const Home: React.FC<HomeProps> = ({
  products,
  onAddToCart,
  onNavigateToTab,
  onNavigateToProduct,
}) => {
  // Select a few popular/featured products to display
  const featuredProducts = products.filter(p => p.isPopular).slice(0, 3);

  // Quick action triggers sound if active
  const handleQuickClick = () => {
    playPop();
  };

  return (
    <div id="home-view" className="space-y-24 py-6">
      
      {/* ----------------- 1. HERO SECTION ----------------- */}
      <section className="relative pt-12 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center select-none">
        
        {/* Left hand brand claims and hero tags */}
        <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 350, damping: 20 }}
            className="inline-flex items-center gap-2 bg-[#F4B6B033] border border-[#F4B6B055] px-4 py-1.5 rounded-full shadow-soft"
          >
            <Sparkles size={16} className="text-brand-pink animate-pulse" />
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-brand-charcoal">
              {SHOP_INFO.locality} · Friendly Neighbors Since 2021
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.1 }}
            className="space-y-4"
          >
            <h2 className="font-serif font-black text-4xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-brand-charcoal">
              Treats, toys &amp; <br />
              <span className="text-brand-pink underline decoration-[#F4B6B0] decoration-[3px] underline-offset-4">tail wags.</span>
            </h2>
            
            {/* Soft Caveat Handwritten flourish */}
            <p className="font-hand text-brand-sage-dark text-3xl sm:text-4xl transform -rotate-2 select-none font-bold block pt-1">
              "Where every tummy gets rubbed!"
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-base sm:text-lg text-brand-charcoal/80 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed"
          >
            {SHOP_INFO.description} Experience gentle professional grooming, check-ups, and catalog items with RM local savings.
          </motion.p>

          {/* SQUISHY SPRING HERO CTA BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 220, damping: 16, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            {/* Primary Action Button (stiffness: 400, damping: 17 on click/press scale) */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.92 }}
              transition={{ type: "spring", stiffness: 450, damping: 14 }}
              onClick={() => { playPop(); onNavigateToTab('shop'); }}
              className="w-full sm:w-auto px-8 py-4 bg-brand-pink text-white rounded-full font-bold text-base shadow-soft hover:bg-brand-pink-dark flex items-center justify-center gap-2 group transition-all"
            >
              <span>Explore Shop Goods</span>
              <ArrowRight size={18} className="transform group-hover:translate-x-1.5 transition-transform" />
            </motion.button>

            {/* Secondary Action Link */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.92 }}
              transition={{ type: "spring", stiffness: 450, damping: 14 }}
              onClick={() => { playPop(); onNavigateToTab('visit'); }}
              className="w-full sm:w-auto px-8 py-4 bg-white text-brand-charcoal rounded-full border border-[#E6DDD0] font-bold text-base shadow-soft hover:bg-brand-cream/30 flex items-center justify-center gap-2 transition-all"
            >
              <span>Book Appointment</span>
              <Calendar size={18} />
            </motion.button>
          </motion.div>
        </div>

        {/* Right hand dynamic interactive 3D hero illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center items-center"
        >
          <MascotsHero className="w-full max-w-[420px]" />
        </motion.div>
      </section>

      {/* ----------------- 2. THREE FEATURE BENEFITS ----------------- */}
      <section className="bg-brand-sage/5 py-12 border-y border-[#E6DDD0]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 select-none">
          
          <div className="flex gap-4 p-5 rounded-2xl bg-white border border-[#E6DDD0] shadow-soft hover:scale-103 transition-transform">
            <div className="w-12 h-12 rounded-full bg-brand-pink/15 text-brand-pink shrink-0 flex items-center justify-center font-bold text-xl">
              🌱
            </div>
            <div>
              <h4 className="font-bold text-base text-brand-charcoal">100% Organic Goods</h4>
              <p className="text-xs text-brand-charcoal/70 mt-1">Chemical-free locally curated treats and food options approved by vets.</p>
            </div>
          </div>

          <div className="flex gap-4 p-5 rounded-2xl bg-white border border-[#E6DDD0] shadow-soft hover:scale-103 transition-transform">
            <div className="w-12 h-12 rounded-full bg-brand-sage/15 text-brand-sage shrink-0 flex items-center justify-center font-bold text-xl">
              🛁
            </div>
            <div>
              <h4 className="font-bold text-base text-brand-charcoal">Stress-Free Spas</h4>
              <p className="text-xs text-brand-charcoal/70 mt-1">Gentle cage-free bubble grooms with warm air styling massages.</p>
            </div>
          </div>

          <div className="flex gap-4 p-5 rounded-2xl bg-white border border-[#E6DDD0] shadow-soft hover:scale-103 transition-transform">
            <div className="w-12 h-12 rounded-full bg-brand-blue/15 text-[#718FA9] shrink-0 flex items-center justify-center font-bold text-xl">
              🩺
            </div>
            <div>
              <h4 className="font-bold text-base text-brand-charcoal">Zero-Fear Clinic</h4>
              <p className="text-xs text-brand-charcoal/70 mt-1">Positive-reinforcement checks with liquid tuna treats.</p>
            </div>
          </div>

        </div>
      </section>

      {/* ----------------- 3. FEATURED PRODUCTS GRID ----------------- */}
      <section className="max-w-7xl mx-auto px-6 space-y-12 select-none">
        <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between gap-4 text-center sm:text-left">
          <div>
            <h3 className="font-serif font-black text-3xl sm:text-4xl text-brand-charcoal tracking-tight">
              Best-selling tail waggers
            </h3>
            <p className="text-sm font-medium text-brand-charcoal/70 mt-1">
              Top curated picks based on KL pet approval scores.
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => { playPop(); onNavigateToTab('shop'); }}
            className="px-6 py-2.5 bg-white rounded-full border border-[#E6DDD0] text-xs font-bold uppercase tracking-wider flex items-center gap-1 hover:bg-brand-cream/40 transition-all shadow-soft"
          >
            <span>View Full Catalog</span>
            <ChevronRight size={14} />
          </motion.button>
        </div>

        {/* Featured list layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ y: -8 }}
              className="bg-white border border-[#E6DDD0] rounded-2xl-custom overflow-hidden shadow-soft flex flex-col group relative"
              id={`featured-card-${product.id}`}
            >
              {/* Product Card Peek Signature Interaction */}
              {/* On hover, a small pet peeks out from the side! */}
              <div className="absolute top-1/3 -left-6 z-0 pointer-events-none group-hover:left-3 transition-all duration-300 w-8 h-8 opacity-0 group-hover:opacity-100 bg-[#FFF] border border-[#E6DDD0] rounded-full flex items-center justify-center select-none text-base shadow-soft">
                🐾
              </div>

              {/* Dynamic Illustrated Placeholder Cover with correct aspect Ratio */}
              <div
                onClick={() => { playPop(); onNavigateToProduct(product.slug); }}
                className="aspect-square w-full border-b border-[#E6DDD0] relative cursor-pointer overflow-hidden z-10 flex items-center justify-center"
              >
                {product.illustrationType === 'treats' && <ProductTreatsBag />}
                {product.illustrationType === 'bed' && <ProductPetBed />}
                {product.illustrationType === 'toy' && <ProductTennisBall />}
                {product.illustrationType === 'bowl' && <ProductBowl />}
                {product.illustrationType === 'shampoo' && <ProductShampoo />}
                {product.illustrationType === 'collar' && <ProductCollar />}
                {product.illustrationType === 'mouse' && <ProductMouseToy />}
                {product.illustrationType === 'catnip' && <ProductCatnip />}

                {/* Popular Pill Tag */}
                <div className="absolute top-4 left-4 bg-[#F4B6B0] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-white/30 shadow-sm">
                  ★ Best Seller
                </div>
              </div>

              {/* Product Core Details */}
              <div className="p-6 flex flex-col flex-1 gap-3 relative z-10 bg-white">
                <div className="flex items-center justify-between gap-2.5">
                  <span className="font-mono text-xs text-brand-charcoal/50 uppercase tracking-wider font-bold">
                    {product.category}
                  </span>
                  <div className="flex items-center gap-1 bg-[#FFF6E8] border border-[#E6DDD0]/30 px-2 py-0.5 rounded-full text-xs font-mono font-bold text-brand-charcoal">
                    <span>★</span>
                    <span>{product.rating.toFixed(1)}</span>
                  </div>
                </div>

                <div className="space-y-1">
                  <h4
                    onClick={() => { playPop(); onNavigateToProduct(product.slug); }}
                    className="font-serif font-extrabold text-lg text-brand-charcoal truncate cursor-pointer hover:text-brand-pink transition-colors leading-tight"
                  >
                    {product.name}
                  </h4>
                  <p className="text-xs text-brand-charcoal/70 line-clamp-2">
                    {product.description}
                  </p>
                </div>

                <div className="pt-2 mt-auto flex items-center justify-between gap-4">
                  <span className="font-mono text-xl font-black text-brand-charcoal">
                    RM {product.price.toFixed(2)}
                  </span>

                  {/* SQUISHY SPRING ADD-TO-CART BUTTON (confetti triggers) */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.92 }}
                    transition={{ type: "spring", stiffness: 450, damping: 14 }}
                    onClick={() => onAddToCart(product, 1)}
                    className="px-4 py-2 bg-[#FFF] hover:bg-brand-pink hover:text-white transition-all text-xs font-bold border border-[#E6DDD0] rounded-full shadow-sm flex items-center gap-1.5"
                  >
                    <span>Grab It</span>
                    <span className="opacity-40 font-normal">|</span>
                    <span>🛒</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ----------------- 4. CUSTOMER PET PHOTO WALL ----------------- */}
      <section className="bg-brand-blue/5 border-y border-[#E6DDD0] py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 space-y-12 select-none">
          
          <div className="text-center max-w-xl mx-auto space-y-3">
            <h3 className="font-serif font-black text-3xl sm:text-4xl text-brand-charcoal tracking-tight">
              Our Customer Photo Wall
            </h3>
            <p className="text-sm font-medium text-brand-charcoal/70 leading-relaxed">
              Real happy cuties who frequent Bukit Damansara! These stylized micro portraits drift and wave endless loops of joy.
            </p>
          </div>

          {/* Staggered rotating display grids */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.map((review, idx) => {
              // Create unique infinite loops for floating effects
              const duration = idx === 0 ? 12 : idx === 1 ? 16 : 14;
              const rotateDirection = idx % 2 === 0 ? [2, -2, 2] : [-2, 2, -2];
              
              return (
                <motion.div
                  key={review.id}
                  animate={{
                    y: [0, -10, 0],
                    rotate: rotateDirection
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: duration,
                    ease: "easeInOut"
                  }}
                  className="bg-white border border-[#E6DDD0] p-6 rounded-xl-custom shadow-soft flex flex-col gap-4 text-left group"
                >
                  <div className="flex items-center gap-4">
                    {/* Circle Avatar rotating in place */}
                    <div
                      style={{ backgroundColor: review.avatarBg }}
                      className="w-14 h-14 rounded-full border border-white flex items-center justify-center text-2xl relative overflow-hidden shadow-soft shrink-0 select-none"
                    >
                      {idx === 0 && <span>🐶</span>}
                      {idx === 1 && <span>🐱</span>}
                      {idx === 2 && <span>🐰</span>}
                    </div>

                    <div>
                      <h4 className="font-bold text-sm text-brand-charcoal leading-none">
                        {review.petName}
                      </h4>
                      <span className="font-mono text-[10px] text-brand-charcoal/50 uppercase tracking-wider block mt-0.5">
                        {review.petBreed} · Owner: {review.ownerName}
                      </span>
                    </div>

                    <div className="ml-auto text-xl text-yellow-500">
                      {"★".repeat(review.rating)}
                    </div>
                  </div>

                  <p className="text-xs text-brand-charcoal/80 italic leading-relaxed font-sans mt-1">
                    "{review.text}"
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ----------------- 5. PET OF THE MONTH ----------------- */}
      <section className="max-w-7xl mx-auto px-6 select-none">
        <div className="border border-[#E6DDD0] bg-white rounded-2xl-custom overflow-hidden grid grid-cols-1 md:grid-cols-12 shadow-soft">
          
          {/* Mochi Portrait Illustrated Frame */}
          <div className="md:col-span-4 min-h-[250px] relative">
            <PetMochiPortrait className="w-full h-full object-cover" />
          </div>

          {/* Story descriptions */}
          <div className="md:col-span-8 p-8 md:p-12 flex flex-col justify-center gap-6">
            <div className="space-y-2">
              <span className="bg-brand-sage text-white font-sans text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-sm inline-block">
                ★ Pet of the Month!
              </span>
              <h3 className="font-serif font-black text-3xl sm:text-4xl text-brand-charcoal tracking-tight mt-1">
                Meet {PET_OF_THE_MONTH.name} the {PET_OF_THE_MONTH.breed}
              </h3>
            </div>

            <p className="text-brand-charcoal/85 text-sm sm:text-base leading-relaxed font-sans font-medium">
              {PET_OF_THE_MONTH.story}
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-3 font-mono text-xs pt-1 border-t border-[#E6DDD0]">
              <div>
                <span className="text-brand-charcoal/50">Age: </span>
                <span className="font-bold text-brand-charcoal">{PET_OF_THE_MONTH.age}</span>
              </div>
              <div>
                <span className="text-brand-charcoal/50">Adored Partner: </span>
                <span className="font-bold text-brand-charcoal">{PET_OF_THE_MONTH.adoredBy}</span>
              </div>
              <div>
                <span className="text-brand-charcoal/50">Chief Tester's Fave: </span>
                <span className="font-bold text-brand-pink-dark font-black">{PET_OF_THE_MONTH.favoriteThing}</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ----------------- 6. CLINIC BOOKING TEASER ----------------- */}
      <section className="max-w-4xl mx-auto px-6 select-none pb-8 text-center text-balance space-y-6">
        <HeartPulse className="text-brand-pink w-16 h-16 mx-auto animate-pulse" />
        <div className="space-y-3">
          <h3 className="font-serif font-black text-3xl text-brand-charcoal tracking-tight">
            Need a wellness check-up or sweet groom?
          </h3>
          <p className="text-sm font-medium text-brand-charcoal/70 max-w-xl mx-auto leading-relaxed font-sans">
            Our zero-fear staff (Aunty Lin, Dr. Faiz &amp; Hana) cannot wait to treat your favorite friends. Schedule a flexible session with our fictional calendar planner in a snap!
          </p>
        </div>
        <div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.92 }}
            transition={{ type: "spring", stiffness: 450, damping: 14 }}
            onClick={() => { playPop(); onNavigateToTab('visit'); }}
            className="px-8 py-3.5 bg-brand-sage hover:bg-brand-sage-dark transition-all text-white font-bold rounded-full text-sm uppercase tracking-wider flex items-center justify-center gap-1.5 mx-auto shadow-soft"
          >
            <span>Book Fictional Consultation</span>
            <ArrowRight size={16} />
          </motion.button>
        </div>
      </section>

    </div>
  );
};
