/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingBag, Plus, Minus, Trash2, Milestone, Sparkles } from 'lucide-react';
import { CartItem } from '../types';
import { playPop, playSparkle } from './SoundEffects';
import confetti from 'canvas-confetti';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export const CartModal: React.FC<CartModalProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [isSuccessCheckedOut, setIsSuccessCheckedOut] = useState(false);

  const subtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const deliveryFee = subtotal > 150 ? 0 : subtotal === 0 ? 0 : 15;
  const grandTotal = subtotal + deliveryFee;

  const handleCheckoutSubmit = () => {
    if (cart.length === 0) return;
    
    // Play sound effects
    playSparkle();

    // Fire gorgeous brand palette pastel confetti!
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#F4B6B0', '#A8C09A', '#8AA8C1', '#FFF1C0', '#FFEED4']
    });

    setIsSuccessCheckedOut(true);
  };

  const handleResetCheckout = () => {
    playPop();
    onClearCart();
    setIsSuccessCheckedOut(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end select-none">
      {/* Backdrop shadow overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => { playPop(); onClose(); }}
        className="absolute inset-0 bg-brand-charcoal/40 backdrop-blur-sm"
      />

      {/* Slide out drawer panel */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 220 }}
        className="relative w-full max-w-md h-full bg-brand-cream border-l border-[#E6DDD0] shadow-2xl flex flex-col z-10"
      >
        
        {/* Drawer Header context */}
        <div className="p-6 border-b border-[#E6DDD0] flex items-center justify-between bg-white">
          <div className="flex items-center gap-2">
            <ShoppingBag className="text-brand-pink" />
            <h2 className="font-serif font-extrabold text-xl text-brand-charcoal">Your Pet Basket</h2>
          </div>
          <button
            onClick={() => { playPop(); onClose(); }}
            className="p-2 bg-white rounded-xl border border-[#E6DDD0] text-brand-charcoal hover:bg-[#F4B6B033] hover:scale-105 active:scale-95 transition-all shadow-soft"
            aria-label="Close cart drawer"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content Scroll Panel */}
        <div className="flex-1 overflow-y-auto p-6 scroll-smooth">
          <AnimatePresence mode="wait">
            {isSuccessCheckedOut ? (
              /* Success visual screens */
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="h-full flex flex-col items-center justify-center text-center gap-6"
                id="cart-checkout-success"
              >
                <div className="w-20 h-20 bg-brand-sage rounded-full flex items-center justify-center shadow-soft animate-bounce">
                  <svg viewBox="0 0 100 100" className="w-10 h-10 stroke-white stroke-[10] fill-none" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20,53 42,75 80,32" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif font-black text-2xl text-brand-charcoal tracking-tight">
                    Order Approved!
                  </h3>
                  <p className="text-brand-charcoal/80 text-sm font-sans mt-2 max-w-[280px] mx-auto">
                    Kopi, Milo, and Mochi are celebrating your selections! Since this is a demo, no real RM was deducted.
                  </p>
                </div>

                <div className="bg-white border border-[#E6DDD0] p-4 rounded-3xl w-full text-left flex items-start gap-3 shadow-soft">
                  <Milestone className="text-brand-blue mt-1 shrink-0" size={20} />
                  <div>
                    <h4 className="font-bold text-sm text-brand-charcoal">Free Demo Delivery!</h4>
                    <p className="text-xs text-brand-charcoal/70 mt-0.5">We would theoretically dispatch this organic haul straight from Plaza Damansara, KL within 1 hour!</p>
                  </div>
                </div>

                <button
                  onClick={handleResetCheckout}
                  className="w-full bg-brand-sage hover:bg-brand-sage-dark text-white py-4 rounded-full font-bold text-base shadow-soft hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  <Sparkles size={18} />
                  <span>Start New Haul</span>
                </button>
              </motion.div>
            ) : cart.length === 0 ? (
              /* Empty state layout */
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="h-full flex flex-col items-center justify-center text-center gap-4 py-16"
                id="cart-empty-view"
              >
                <div className="w-20 h-20 bg-[#F4B6B033] rounded-full flex items-center justify-center border border-dashed border-brand-pink">
                  <ShoppingBag size={32} className="text-brand-pink" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg text-brand-charcoal">Your basket is resting empty</h3>
                  <p className="text-xs text-brand-charcoal/60 mt-1 max-w-[240px]">
                    Browse the shop products and throw in some bone treats or plush toys to make tails wag!
                  </p>
                </div>
              </motion.div>
            ) : (
              /* Basket items list */
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col gap-4"
                id="cart-items-list"
              >
                {cart.map((item) => (
                  <motion.div
                    key={item.product.id}
                    layout
                    exit={{ opacity: 0, x: -50 }}
                    className="p-4 bg-white border border-[#E6DDD0] rounded-xl-custom flex items-center gap-4 shadow-soft"
                  >
                    {/* Tiny pastel placeholder illustrated thumb */}
                    <div className="w-14 h-14 rounded-xl border border-[#E6DDD0]/40 overflow-hidden bg-brand-cream shrink-0 flex items-center justify-center font-bold text-lg select-none">
                      {item.product.illustrationType === 'treats' && <span className="text-3xl">🍖</span>}
                      {item.product.illustrationType === 'bed' && <span className="text-3xl">🛏️</span>}
                      {item.product.illustrationType === 'toy' && <span className="text-3xl">🎾</span>}
                      {item.product.illustrationType === 'bowl' && <span className="text-3xl">🍲</span>}
                      {item.product.illustrationType === 'shampoo' && <span className="text-3xl">🧴</span>}
                      {item.product.illustrationType === 'collar' && <span className="text-3xl">🎗️</span>}
                      {item.product.illustrationType === 'mouse' && <span className="text-3xl">🐭</span>}
                      {item.product.illustrationType === 'catnip' && <span className="text-3xl">🌿</span>}
                    </div>

                    {/* Product titles & pricing */}
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-sm text-brand-charcoal truncate">
                        {item.product.name}
                      </h4>
                      <p className="font-mono text-xs text-brand-charcoal/70 tracking-tight mt-0.5">
                        RM {item.product.price.toFixed(2)} each
                      </p>
                      <p className="font-black text-sm text-brand-pink-dark font-sans mt-1">
                        RM {(item.product.price * item.quantity).toFixed(2)}
                      </p>
                    </div>

                    {/* Quantity controls */}
                    <div className="flex flex-col items-center gap-2">
                      <div className="flex items-center bg-white border border-[#E6DDD0] rounded-full p-0.5 shadow-sm">
                        <button
                          onClick={() => { playPop(); onUpdateQuantity(item.product.id, -1); }}
                          className="w-6 h-6 rounded-full flex items-center justify-center text-brand-charcoal hover:bg-brand-pink/20 transition-all font-bold"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={11} />
                        </button>
                        <span className="font-mono text-xs font-bold px-2 select-none w-5 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => { playPop(); onUpdateQuantity(item.product.id, 1); }}
                          className="w-6 h-6 rounded-full flex items-center justify-center text-brand-charcoal hover:bg-brand-pink/20 transition-all font-bold"
                          aria-label="Increase quantity"
                        >
                          <Plus size={11} />
                        </button>
                      </div>

                      <button
                        onClick={() => { playPop(); onRemoveItem(item.product.id); }}
                        className="text-brand-charcoal/40 hover:text-brand-pink-dark transition-colors"
                        aria-label="Remove item from cart"
                        title="Delete product item"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Drawer Footer controls */}
        {!isSuccessCheckedOut && cart.length > 0 && (
          <div className="p-6 border-t border-[#E6DDD0] bg-white flex flex-col gap-4">
            
            {/* Split breakdown */}
            <div className="flex flex-col gap-2 font-mono text-xs">
              <div className="flex items-center justify-between text-brand-charcoal/80">
                <span>Items Subtotal:</span>
                <span className="font-bold">RM {subtotal.toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between text-brand-charcoal/80">
                <span>KL Delivery Fee:</span>
                <span className="font-bold">{deliveryFee === 0 ? "FREE (Orders over RM150)" : `RM ${deliveryFee.toFixed(2)}`}</span>
              </div>
              <div className="h-[1px] bg-[#E6DDD0] my-1" />
              <div className="flex items-center justify-between text-base font-sans font-black text-brand-charcoal">
                <span>Total Amount:</span>
                <span className="font-mono font-black text-lg">RM {grandTotal.toFixed(2)}</span>
              </div>
            </div>

            {/* Simulated Checkout Button with spring scales */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleCheckoutSubmit}
              className="w-full bg-[#2D2D2D] hover:bg-black text-white py-4 rounded-full font-bold text-base shadow-lg relative overflow-hidden group select-none transition-all flex items-center justify-center gap-2"
              id="checkout-action-button"
            >
              <span>Secure Demo Checkout</span>
              <span className="bg-brand-pink text-white text-xs font-mono font-bold px-2.5 py-0.5 rounded-full">
                RM {grandTotal.toFixed(2)}
              </span>
            </motion.button>
            <p className="text-[10px] text-center text-brand-charcoal/40 font-mono tracking-wider">
              No real submissions · KL local delivery demonstration
            </p>
          </div>
        )}
      </motion.div>
    </div>
  );
};
