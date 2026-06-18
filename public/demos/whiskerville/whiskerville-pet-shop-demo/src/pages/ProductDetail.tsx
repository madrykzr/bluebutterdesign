/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ShoppingCart, Truck, ShieldAlert, Award, Sparkles, Star } from 'lucide-react';
import { Product } from '../types';
import { ProductBowl, ProductTennisBall, ProductMouseToy, ProductShampoo, ProductCollar, ProductCatnip, ProductTreatsBag, ProductPetBed } from '../components/Illustrations';
import { playPop } from '../components/SoundEffects';

interface ProductDetailProps {
  productSlug: string;
  products: Product[];
  onAddToCart: (product: Product, quantity: number) => void;
  onNavigateToShop: () => void;
  onNavigateToProduct: (productSlug: string) => void;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({
  productSlug,
  products,
  onAddToCart,
  onNavigateToShop,
  onNavigateToProduct,
}) => {
  const [quantity, setQuantity] = useState(1);

  const product = products.find((p) => p.slug === productSlug);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-20 text-center select-none">
        <h3 className="font-serif font-black text-2xl text-brand-charcoal">Treat not found</h3>
        <p className="text-sm text-brand-charcoal/60 mt-2">The selected Whiskerville product seems to have run off!</p>
        <button
          onClick={onNavigateToShop}
          className="mt-6 px-6 py-3 bg-brand-pink text-white font-bold rounded-full text-sm shadow-soft hover:bg-brand-pink-dark transition-all"
        >
          Return to Pantry Shop
        </button>
      </div>
    );
  }

  // Find related products (same category or others, excluding current product)
  const relatedProducts = products
    .filter((p) => p.id !== product.id)
    .slice(0, 3);

  const handleQtyChange = (delta: number) => {
    playPop();
    setQuantity((prev) => Math.max(1, Math.min(10, prev + delta)));
  };

  const handleAddToCartClick = () => {
    onAddToCart(product, quantity);
  };

  return (
    <div id="product-detail-view" className="max-w-7xl mx-auto px-6 py-6 space-y-16 select-none">
      
      {/* 1. Navigation Back anchor */}
      <button
        onClick={() => { playPop(); onNavigateToShop(); }}
        className="inline-flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-[#FFF6E8] border border-[#E6DDD0] rounded-full text-xs font-bold uppercase text-brand-charcoal transition-all shadow-soft"
      >
        <ChevronLeft size={16} />
        <span>Back to Pantry Shop</span>
      </button>

      {/* 2. Main details Grid panels */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left hand giant illustrated box wrapper */}
        <div className="lg:col-span-6 aspect-square w-full border border-[#E6DDD0] rounded-2xl-custom overflow-hidden shadow-soft relative bg-white flex items-center justify-center p-8">
          {product.illustrationType === 'treats' && <ProductTreatsBag className="w-full h-full" />}
          {product.illustrationType === 'bed' && <ProductPetBed className="w-full h-full" />}
          {product.illustrationType === 'toy' && <ProductTennisBall className="w-full h-full" />}
          {product.illustrationType === 'bowl' && <ProductBowl className="w-full h-full" />}
          {product.illustrationType === 'shampoo' && <ProductShampoo className="w-full h-full" />}
          {product.illustrationType === 'collar' && <ProductCollar className="w-full h-full" />}
          {product.illustrationType === 'mouse' && <ProductMouseToy className="w-full h-full" />}
          {product.illustrationType === 'catnip' && <ProductCatnip className="w-full h-full" />}

          {/* Stamped Popular Status banner */}
          {product.isPopular && (
            <div className="absolute top-6 left-6 bg-brand-pink text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-md">
              ★ Highly Rated
            </div>
          )}
        </div>

        {/* Right hand specs and checkout trigger parameters */}
        <div className="lg:col-span-6 space-y-8">
          
          {/* Header tags and rating */}
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="bg-brand-sage/20 border border-brand-sage-dark/20 text-brand-sage-dark font-mono text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full">
                {product.category}
              </span>
              <div className="flex items-center gap-1 bg-[#FFF6E8] border border-[#E6DDD0]/30 px-3 py-1 rounded-full text-xs font-mono font-bold text-brand-charcoal shadow-sm">
                <Star size={12} className="fill-brand-charcoal text-brand-charcoal" />
                <span>{product.rating.toFixed(1)} / 5.0 Rating</span>
              </div>
            </div>

            <h2 className="font-serif font-black text-3xl sm:text-4xl text-brand-charcoal leading-none w-full">
              {product.name}
            </h2>
            <p className="font-mono text-xl font-black text-brand-charcoal pt-1">
              RM {product.price.toFixed(2)}
            </p>
          </div>

          <div className="h-[1px] bg-[#E6DDD0]" />

          {/* Description paragraphs */}
          <div className="space-y-4">
            <h4 className="font-serif font-extrabold text-base text-brand-charcoal">Description</h4>
            <p className="text-brand-charcoal/80 text-sm leading-relaxed font-sans font-medium">
              {product.description}
            </p>
            <p className="text-xs text-brand-charcoal/60 leading-relaxed font-sans">
              All Whiskerville goods undergo rigorous checks right here in Bukit Damansara, KL. We guarantee premium results, safe processing, and tailored care instructions.
            </p>
          </div>

          <div className="h-[1px] bg-[#E6DDD0]" />

          {/* Product Specific Info Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <div className="p-3.5 bg-brand-sage/10 border border-brand-sage/20 rounded-2xl flex gap-3">
              <Award className="text-brand-sage shrink-0" size={18} />
              <div>
                <h5 className="font-bold text-xs text-brand-charcoal">Hypoallergenic &amp; Safe</h5>
                <p className="text-[10px] text-brand-charcoal/60 mt-0.5">Tested for sensitive tummies by Dr. Faiz.</p>
              </div>
            </div>

            <div className="p-3.5 bg-brand-blue/10 border border-brand-blue/20 rounded-2xl flex gap-3">
              <Truck className="text-brand-blue shrink-0" size={18} />
              <div>
                <h5 className="font-bold text-xs text-brand-charcoal">KL Swift Dispatch</h5>
                <p className="text-[10px] text-brand-charcoal/60 mt-0.5">Theoretically arrives in 1 hour flat!</p>
              </div>
            </div>

          </div>

          {/* Quantity pickers and main Add-to-cart action button */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            
            {/* Quantity select element frame */}
            <div className="flex items-center justify-between p-1 bg-[#FFF6E8] border border-[#E6DDD0]/60 rounded-full min-w-[130px] shadow-sm">
              <button
                onClick={() => handleQtyChange(-1)}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white border border-[#E6DDD0]/60 hover:bg-brand-pink hover:text-white transition-all font-bold text-brand-charcoal shrink-0"
                title="Subtract piece"
              >
                -
              </button>
              <span className="font-mono font-black text-sm text-brand-charcoal min-w-[20px] text-center select-none">
                {quantity}
              </span>
              <button
                onClick={() => handleQtyChange(1)}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white border border-[#E6DDD0]/60 hover:bg-brand-pink hover:text-white transition-all font-bold text-brand-charcoal shrink-0"
                title="Add piece"
              >
                +
              </button>
            </div>

            {/* SQUISHY SPRING ADD-TO-CART BUTTON (confetti triggers) */}
            <motion.button
              disabled={!product.isAvailable}
              whileHover={product.isAvailable ? { scale: 1.05 } : {}}
              whileTap={product.isAvailable ? { scale: 0.92 } : {}}
              transition={{ type: "spring", stiffness: 450, damping: 14 }}
              onClick={handleAddToCartClick}
              className={`flex-1 w-full py-4 rounded-full font-bold text-base shadow-soft uppercase tracking-wider flex items-center justify-center gap-2 select-none transition-all ${
                product.isAvailable
                  ? 'bg-brand-pink hover:bg-brand-pink-dark text-white'
                  : 'bg-neutral-100 text-neutral-400 border border-neutral-200 cursor-not-allowed'
              }`}
            >
              <ShoppingCart size={18} />
              <span>{product.isAvailable ? `Add ${quantity} to Basket` : 'Sold Out'}</span>
              {product.isAvailable && (
                <span className="bg-white/20 text-white text-xs font-mono font-bold px-3 py-1 rounded-full ml-1">
                  RM {(product.price * quantity).toFixed(2)}
                </span>
              )}
            </motion.button>
          </div>

        </div>
      </div>

      {/* 3. RELATED RECOMMENDATIONS CARDS */}
      <div className="space-y-6 pt-8 border-t border-[#E6DDD0]">
        <h3 className="font-serif font-black text-2xl text-brand-charcoal tracking-tight">
          Other goodies pets love
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {relatedProducts.map((related) => (
            <motion.div
              key={related.id}
              whileHover={{ y: -6 }}
              className="p-5 bg-white border border-[#E6DDD0] rounded-2xl flex items-center gap-4 cursor-pointer hover:border-brand-pink hover:shadow-soft transition-all"
              onClick={() => { playPop(); onNavigateToProduct(related.slug); }}
            >
              <div className="w-16 h-16 rounded-xl border border-[#E6DDD0]/60 overflow-hidden bg-[#FFF6E8] flex items-center justify-center font-bold text-xl select-none shrink-0">
                {related.illustrationType === 'treats' && <span>🍖</span>}
                {related.illustrationType === 'bed' && <span>🛏️</span>}
                {related.illustrationType === 'toy' && <span>🐱</span>}
                {related.illustrationType === 'bowl' && <span>🍲</span>}
                {related.illustrationType === 'shampoo' && <span>🧴</span>}
                {related.illustrationType === 'collar' && <span>🎗️</span>}
                {related.illustrationType === 'mouse' && <span>🐭</span>}
                {related.illustrationType === 'catnip' && <span>🌿</span>}
              </div>
              
              <div className="min-w-0">
                <h4 className="font-bold text-sm text-brand-charcoal truncate">
                  {related.name}
                </h4>
                <p className="font-mono text-xs text-brand-pink-dark font-bold mt-0.5">
                  RM {related.price.toFixed(2)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </div>
  );
};
