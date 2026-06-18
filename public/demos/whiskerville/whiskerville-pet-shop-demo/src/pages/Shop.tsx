/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, SlidersHorizontal, Sparkles } from 'lucide-react';
import { Product } from '../types';
import { ProductBowl, ProductTennisBall, ProductMouseToy, ProductShampoo, ProductCollar, ProductCatnip, ProductTreatsBag, ProductPetBed } from '../components/Illustrations';
import { playPop } from '../components/SoundEffects';

interface ShopProps {
  products: Product[];
  onAddToCart: (product: Product, quantity: number) => void;
  onNavigateToProduct: (productSlug: string) => void;
}

type CategoryFilter = 'All' | 'Dogs' | 'Cats' | 'Small Pets' | 'Treats' | 'Toys' | 'Accessories';

export const Shop: React.FC<ShopProps> = ({
  products,
  onAddToCart,
  onNavigateToProduct,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'recommended' | 'low-high' | 'high-low' | 'alpha'>('recommended');

  const categories: CategoryFilter[] = ['All', 'Dogs', 'Cats', 'Small Pets', 'Treats', 'Toys', 'Accessories'];

  const handleCategorySelect = (category: CategoryFilter) => {
    playPop();
    setSelectedCategory(category);
  };

  // Filter & Search & Sort logical pipeline
  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'low-high':
        return a.price - b.price;
      case 'high-low':
        return b.price - a.price;
      case 'alpha':
        return a.name.localeCompare(b.name);
      case 'recommended':
      default:
        // Rank by best ratings, popularity or default ordering
        const scoreA = a.rating + (a.isPopular ? 1 : 0);
        const scoreB = b.rating + (b.isPopular ? 1 : 0);
        return scoreB - scoreA;
    }
  });

  return (
    <div id="shop-catalog-view" className="space-y-12 py-6 select-none">
      
      {/* Header claim layout */}
      <div className="max-w-7xl mx-auto px-6 text-center space-y-4">
        <h2 className="font-serif font-black text-4xl sm:text-5xl text-brand-charcoal tracking-tight">
          The Whiskerville Pantry
        </h2>
        <p className="text-sm font-medium text-brand-charcoal/70 max-w-xl mx-auto leading-relaxed">
          Delightful items curated for furry KL friends. Safe, sustainable ingredients, robust stitches, and endless satisfaction.
        </p>
      </div>

      {/* SEARCH AND FILTER BAR STICKY CHIPS */}
      <div className="max-w-7xl mx-auto px-6 space-y-6">
        
        {/* Search Input and Sort controls */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          
          {/* Interactive Search Bar wrapper */}
          <div className="md:col-span-8 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-charcoal/40" size={18} />
            <input
              type="text"
              placeholder="Search kibbles, fluffy beds, teething toys..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white pl-12 pr-6 py-3.5 rounded-xl border border-[#E6DDD0] text-sm text-brand-charcoal placeholder:text-brand-charcoal/40 font-medium focus:outline-hidden focus:ring-1 focus:ring-brand-pink focus:border-brand-pink transition-all shadow-soft"
            />
          </div>

          {/* Sorting Dropdown */}
          <div className="md:col-span-4 relative flex items-center">
            <SlidersHorizontal className="absolute left-4 text-brand-charcoal/50 mr-2" size={16} />
            <select
              value={sortBy}
              onChange={(e) => { playPop(); setSortBy(e.target.value as any); }}
              className="w-full bg-white pl-11 pr-8 py-3.5 rounded-xl border border-[#E6DDD0] text-sm font-bold text-brand-charcoal focus:outline-hidden appearance-none cursor-pointer shadow-soft"
            >
              <option value="recommended">★ Recommends</option>
              <option value="low-high">Price: Low to High</option>
              <option value="high-low">Price: High to Low</option>
              <option value="alpha">Alphabetical</option>
            </select>
            <div className="pointer-events-none absolute right-4 text-brand-charcoal">
              ▼
            </div>
          </div>
        </div>

        {/* Dynamic Category Chips Scroll row */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <motion.button
                key={cat}
                onClick={() => handleCategorySelect(cat)}
                
                // CATEGORY ACTIVE WIGGLE INDICATION
                // When active category is clicked, wiggle slightly
                animate={isActive ? {
                  scale: [1, 1.05, 0.98, 1.02, 1],
                  rotate: [0, -3, 3, -2, 0]
                } : { scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 350, damping: 12 }}
                
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider border transition-all shadow-sm flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-brand-pink border-transparent text-white'
                    : 'bg-white border-[#E6DDD0] text-brand-charcoal/70 hover:bg-brand-cream/40'
                }`}
              >
                {isActive && <Sparkles size={11} className="text-white shrink-0" />}
                <span>{cat}</span>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* FILTERED PRODUCTS GRID VIEW */}
      <div className="max-w-7xl mx-auto px-6">
        <AnimatePresence mode="wait">
          {sortedProducts.length === 0 ? (
            
            /* No search results layout */
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-center py-20 bg-white border border-dashed border-[#E6DDD0] rounded-2xl-custom max-w-lg mx-auto shadow-soft"
              id="shop-no-results-view"
            >
              <span className="text-4xl">😿</span>
              <h3 className="font-serif font-bold text-lg text-brand-charcoal mt-4">No treats matching that search</h3>
              <p className="text-xs text-brand-charcoal/60 mt-1 max-w-[300px] mx-auto">
                Try searching for something else or reset your category query to reveal our complete organic listings.
              </p>
              <button
                onClick={() => { playPop(); setSelectedCategory('All'); setSearchQuery(''); }}
                className="mt-5 px-6 py-2.5 bg-brand-pink text-white font-bold text-xs uppercase rounded-full shadow-soft hover:bg-brand-pink-dark"
              >
                Reveal All Products
              </button>
            </motion.div>
          ) : (
            
            /* High fidelity grid layouts */
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
              id="shop-products-grid"
            >
              {sortedProducts.map((product) => (
                <motion.div
                  key={product.id}
                  whileHover={{ y: -8 }}
                  className="bg-white border border-[#E6DDD0] rounded-2xl-custom overflow-hidden shadow-soft flex flex-col group relative"
                >
                  {/* PRODUCT CARD PEEK SIGNATURE INTERACTION */}
                  {/* Cute pet peeks out from the side container on hover! */}
                  <div className="absolute top-1/4 -right-6 z-0 pointer-events-none group-hover:right-3 transition-all duration-300 w-8 h-8 opacity-0 group-hover:opacity-100 bg-[#FFF] border border-[#E6DDD0] rounded-full flex items-center justify-center text-base shadow-soft">
                    🐱
                  </div>

                  {/* Top Illustrated aspect framework */}
                  <div
                    onClick={() => { playPop(); onNavigateToProduct(product.slug); }}
                    className="aspect-square w-full border-b border-[#E6DDD0]/60 relative cursor-pointer overflow-hidden z-10"
                  >
                    {product.illustrationType === 'treats' && <ProductTreatsBag />}
                    {product.illustrationType === 'bed' && <ProductPetBed />}
                    {product.illustrationType === 'toy' && <ProductTennisBall />}
                    {product.illustrationType === 'bowl' && <ProductBowl />}
                    {product.illustrationType === 'shampoo' && <ProductShampoo />}
                    {product.illustrationType === 'collar' && <ProductCollar />}
                    {product.illustrationType === 'mouse' && <ProductMouseToy />}
                    {product.illustrationType === 'catnip' && <ProductCatnip />}

                    {/* Fictional Pricing Tag sticker */}
                    {product.isPopular && (
                      <div className="absolute top-3 left-3 bg-brand-pink text-white text-[9px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full select-none shadow-sm">
                        ★ POPULAR
                      </div>
                    )}

                    {!product.isAvailable && (
                      <div className="absolute inset-0 bg-brand-charcoal/60 flex items-center justify-center p-4">
                        <span className="bg-white border border-[#E6DDD0] text-brand-charcoal/60 uppercase font-mono font-bold text-xs px-4 py-2 rounded-xl rotate-[-6deg] shadow-md">
                          📭 Sold Out
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Core Card Specs panel */}
                  <div className="p-5 flex flex-col flex-1 gap-2.5 relative z-10 bg-white">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-brand-charcoal/50 uppercase tracking-wider font-bold">
                        {product.category}
                      </span>
                      <div className="flex items-center gap-0.5 text-xs font-bold text-brand-charcoal font-sans bg-[#FFF6E8] px-1.5 py-0.5 rounded-full border border-[#E6DDD0]/30">
                        <span>★</span>
                        <span>{product.rating.toFixed(1)}</span>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h4
                        onClick={() => { playPop(); onNavigateToProduct(product.slug); }}
                        className="font-serif font-extrabold text-base text-brand-charcoal leading-tight truncate hover:text-brand-pink cursor-pointer transition-colors"
                      >
                        {product.name}
                      </h4>
                      <p className="text-[11px] text-brand-charcoal/60 line-clamp-2 leading-relaxed">
                        {product.description}
                      </p>
                    </div>

                    <div className="pt-2 mt-auto flex items-center justify-between gap-3">
                      <span className="font-mono text-lg font-black text-brand-charcoal leading-none">
                        RM {product.price.toFixed(2)}
                      </span>

                      {/* Add-to-cart springy trigger controls */}
                      <motion.button
                        disabled={!product.isAvailable}
                        whileHover={product.isAvailable ? { scale: 1.05 } : {}}
                        whileTap={product.isAvailable ? { scale: 0.92 } : {}}
                        transition={{ type: "spring", stiffness: 450, damping: 14 }}
                        onClick={() => onAddToCart(product, 1)}
                        className={`px-3 py-1.5 text-[10px] font-bold border rounded-full flex items-center gap-1 shadow-sm transition-all ${
                          product.isAvailable
                            ? 'bg-[#FFF] hover:bg-brand-pink hover:text-white text-brand-charcoal border-[#E6DDD0]'
                            : 'bg-neutral-100 text-neutral-400 border border-neutral-200 cursor-not-allowed'
                        }`}
                      >
                        <span>Add</span>
                        <span>🛒</span>
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </div>
  );
};
