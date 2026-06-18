/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, CalendarDays, ExternalLink, Heart, Footprints } from 'lucide-react';
import { Product, CartItem } from './types';
import { PRODUCTS } from './data';
import { playDing, playPop, playSparkle } from './components/SoundEffects';
import { Navigation } from './components/Navigation';
import { MascotFollower } from './components/MascotFollower';
import { CartModal } from './components/CartModal';

// Pages import
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { ProductDetail } from './pages/ProductDetail';
import { Services } from './pages/Services';
import { About } from './pages/About';
import { Visit } from './pages/Visit';

import confetti from 'canvas-confetti';

const footerContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const footerItemVariants = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 90,
      damping: 14,
    },
  },
};

export default function App() {
  // Navigation tabs state ('home', 'shop', 'services', 'about', 'visit', or 'product_[slug]')
  const [activeTab, setActiveTab] = useState<string>('home');
  const [prevTab, setPrevTab] = useState<string>('home');
  
  // Cart state loaded/saved with standard persistence
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const stored = localStorage.getItem('whiskerville-cart-items');
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      return [];
    }
  });

  // Controls drawer triggers
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCartPeeking, setIsCartPeeking] = useState(false);

  // Sync cart items with storage
  useEffect(() => {
    try {
      localStorage.setItem('whiskerville-cart-items', JSON.stringify(cart));
    } catch (e) {
      // Ignore store errors
    }
  }, [cart]);

  // Handle addition to cart (increases quantity, play sound, explode sparkles, peeks pet)
  const handleAddToCart = (product: Product, qty: number) => {
    playSparkle();

    // Explode gorgeous pastel confetti!
    confetti({
      particleCount: 80,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: ['#F4B6B0', '#A8C09A', '#8AA8C1', '#FFF1C0']
    });
    confetti({
      particleCount: 80,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: ['#F4B6B0', '#A8C09A', '#8AA8C1', '#FFF1C0']
    });

    // Toggle high header peeking pet
    setIsCartPeeking(true);
    setTimeout(() => {
      setIsCartPeeking(false);
    }, 1800);

    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.product.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + qty }
            : item
        );
      }
      return [...prevCart, { product, quantity: qty }];
    });
  };

  // Modify cart quantities
  const handleUpdateCartQuantity = (productId: string, delta: number) => {
    setCart((prevCart) => {
      return prevCart
        .map((item) => {
          if (item.product.id === productId) {
            const nextQty = item.quantity + delta;
            return { ...item, quantity: nextQty };
          }
          return item;
        })
        .filter((item) => item.quantity > 0);
    });
  };

  // Delete cart item
  const handleRemoveCartItem = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.product.id !== productId));
  };

  // Flush cart on successful checkout
  const handleClearCart = () => {
    setCart([]);
  };

  // Total amount of elements
  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  // Deep routing controllers
  const navigateToProductDetail = (slug: string) => {
    setPrevTab(activeTab);
    setActiveTab(`product_${slug}`);
  };

  const navigateToTab = (tabId: string) => {
    setPrevTab(activeTab);
    setActiveTab(tabId);
  };

  // Trigger brief sound sample on sound toggle
  const handleSoundToggleCallback = () => {
    // optional tracking
  };

  return (
    <div className="relative min-h-screen bg-brand-cream text-brand-charcoal overflow-x-hidden font-sans">
      
      {/* 1. CURSOR-FOLLOWING MASCOTS (Hidden on mobile) */}
      <MascotFollower />

      {/* 2. SHARED FIXED NAVIGATION BAR (peeking triggers, spring tabs sliders) */}
      <Navigation
        activeTab={activeTab}
        setActiveTab={navigateToTab}
        cartCount={totalCartCount}
        isCartPeeking={isCartPeeking}
        onOpenCartModal={() => setIsCartOpen(true)}
        onSoundToggleCallback={handleSoundToggleCallback}
      />

      {/* 3. SCROLL CONTENT SCREEN (Page content swap triggers) */}
      <main className="pt-28 pb-16 min-h-screen max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
          >
            {activeTab === 'home' && (
              <Home
                products={PRODUCTS}
                onAddToCart={handleAddToCart}
                onNavigateToTab={navigateToTab}
                onNavigateToProduct={navigateToProductDetail}
              />
            )}

            {activeTab === 'shop' && (
              <Shop
                products={PRODUCTS}
                onAddToCart={handleAddToCart}
                onNavigateToProduct={navigateToProductDetail}
              />
            )}

            {activeTab.startsWith('product_') && (
              <ProductDetail
                productSlug={activeTab.slice(8)} // strip prefix
                products={PRODUCTS}
                onAddToCart={handleAddToCart}
                onNavigateToShop={() => navigateToTab('shop')}
                onNavigateToProduct={navigateToProductDetail}
              />
            )}

            {activeTab === 'services' && (
              <Services onNavigateToTab={navigateToTab} />
            )}

            {activeTab === 'about' && (
              <About />
            )}

            {activeTab === 'visit' && (
              <Visit />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* 4. VISUAL BASKET CART DRAWER MODAL */}
      <AnimatePresence>
        {isCartOpen && (
          <CartModal
            isOpen={isCartOpen}
            onClose={() => setIsCartOpen(false)}
            cart={cart}
            onUpdateQuantity={handleUpdateCartQuantity}
            onRemoveItem={handleRemoveCartItem}
            onClearCart={handleClearCart}
          />
        )}
      </AnimatePresence>

      {/* 5. GORGEOUS PLAYFUL BRAND FOOTER SECTION */}
      <motion.footer
        id="global-shop-footer"
        whileHover={{ y: -4 }}
        transition={{ type: 'spring', stiffness: 180, damping: 20 }}
        className="bg-brand-cream border-t-3 border-brand-charcoal select-none"
      >
        
        {/* Footprint divider decorations */}
        <div className="flex justify-center -translate-y-4">
          <div className="bg-[#FFF6E8] border-2 border-brand-charcoal px-4 py-1.5 rounded-full flex gap-1.5 text-brand-charcoal text-xs shadow-sm font-mono font-bold font-black">
            <Footprints size={14} className="text-brand-pink animate-bounce" />
            <span> Bukit Damansara, KL </span>
          </div>
        </div>

        <motion.div
          variants={footerContainerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left"
        >
          
          {/* Logo & Credits */}
          <motion.div variants={footerItemVariants} className="space-y-3">
            <div className="flex items-center justify-center md:justify-start gap-2.5">
              <span className="w-8 h-8 rounded-xl bg-brand-pink border-2 border-brand-charcoal flex items-center justify-center text-sm font-black shadow-xs">
                🏠
              </span>
              <h4 className="font-serif font-black text-xl text-brand-charcoal">
                Whiskerville
              </h4>
            </div>
            <p className="text-xs text-brand-charcoal/60 max-w-sm leading-relaxed">
              Whiskerville is a visual demo site portraying premium organic Malaysian pet care cataloging. Created with love, spring layout physics, and rich dynamic interfaces.
            </p>
          </motion.div>

          {/* Directory Shortcuts switcher links */}
          <motion.div
            variants={footerItemVariants}
            className="flex flex-col sm:flex-row gap-x-8 gap-y-2 text-xs font-bold text-brand-charcoal/80"
          >
            <motion.button whileHover={{ scale: 1.05 }} onClick={() => navigateToTab('home')} className="hover:text-brand-pink transition-colors cursor-pointer">Home</motion.button>
            <motion.button whileHover={{ scale: 1.05 }} onClick={() => navigateToTab('shop')} className="hover:text-brand-pink transition-colors cursor-pointer">Pantry Shop</motion.button>
            <motion.button whileHover={{ scale: 1.05 }} onClick={() => navigateToTab('services')} className="hover:text-brand-pink transition-colors cursor-pointer">Therapy Services</motion.button>
            <motion.button whileHover={{ scale: 1.05 }} onClick={() => navigateToTab('about')} className="hover:text-brand-pink transition-colors cursor-pointer">Meet Staff</motion.button>
            <motion.button whileHover={{ scale: 1.05 }} onClick={() => navigateToTab('visit')} className="hover:text-brand-pink transition-colors cursor-pointer">Operating Hours</motion.button>
          </motion.div>

          {/* Fictional Studio attribution with design claim */}
          <motion.div variants={footerItemVariants} className="text-center md:text-right space-y-1.5 shrink-0">
            <span className="text-[10px] uppercase font-mono tracking-wider block text-brand-charcoal/40 font-black">
              DESIGNED IN MALAYSIA
            </span>
            <span className="text-xs font-bold font-sans block text-brand-charcoal flex items-center justify-center md:justify-end gap-1.5">
              <span>A demo by </span>
              <a
                href="https://bluebutterstudio.my"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => { e.preventDefault(); playPop(); }}
                className="text-brand-pink-dark hover:underline flex items-center gap-0.5 font-extrabold"
              >
                <span>Bluebutter Studio</span>
                <ExternalLink size={10} />
              </a>
            </span>
            <span className="text-[9px] font-mono block text-brand-charcoal/50">
              · bluebutterstudio.my ·
            </span>
          </motion.div>

        </motion.div>

        {/* copyright disclaimer */}
        <div className="bg-brand-charcoal py-4 text-center select-none text-[10px] font-mono text-brand-cream/40">
          &copy; 2026 Whiskerville Pet Shop · All rights reserved · Malaysia demonstration sandbox
        </div>
      </motion.footer>

    </div>
  );
}
