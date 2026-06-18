/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBasket, Volume2, VolumeX, Menu, X, Sparkles } from 'lucide-react';
import { isSoundEnabled, setSoundEnabled, playDing, playPop } from './SoundEffects';

interface NavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  cartCount: number;
  isCartPeeking: boolean;
  onOpenCartModal: () => void;
  onSoundToggleCallback: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  activeTab,
  setActiveTab,
  cartCount,
  isCartPeeking,
  onOpenCartModal,
  onSoundToggleCallback,
}) => {
  const [soundOn, setSoundOn] = useState(isSoundEnabled());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSoundToggle = () => {
    const newState = !soundOn;
    setSoundOn(newState);
    setSoundEnabled(newState);
    onSoundToggleCallback();
    if (newState) {
      setTimeout(() => {
        playDing();
      }, 50);
    }
  };

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'shop', label: 'Shop' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About Us' },
    { id: 'visit', label: 'Visit' },
  ];

  const handleTabClick = (tabId: string) => {
    playPop();
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-[#FFF6E8]/95 backdrop-blur-md shadow-soft border-b border-[#E6DDD0]'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo and Brand Title */}
        <div
          id="brand-logo-section"
          onClick={() => handleTabClick('home')}
          className="flex items-center gap-3 cursor-pointer group select-none"
        >
          <motion.div
            whileHover={{ scale: 1.1, rotate: [0, -10, 10, -10, 0] }}
            transition={{ type: "spring", stiffness: 400, damping: 12 }}
            className="w-11 h-11 bg-brand-pink rounded-full flex items-center justify-center border border-[#E6DDD0] shadow-soft"
          >
            {/* SVG Paw Logo */}
            <svg viewBox="0 0 100 100" className="w-7 h-7 fill-white">
              <circle cx="50" cy="55" r="20" />
              <circle cx="28" cy="28" r="10" />
              <circle cx="50" cy="18" r="11" />
              <circle cx="72" cy="28" r="10" />
            </svg>
          </motion.div>
          <div>
            <h1 className="font-serif font-black text-2xl tracking-tight text-brand-charcoal leading-none">
              Whiskerville
            </h1>
            <span className="font-mono text-[9px] uppercase tracking-wider text-brand-charcoal/60">
              Kuala Lumpur
            </span>
          </div>
        </div>

        {/* Desktop Tabs Navigation (pill slide layout) */}
        <nav id="desktop-nav-menu" className="hidden md:flex items-center bg-white p-1.5 rounded-full border border-[#E6DDD0] shadow-soft">
          {menuItems.map((item) => {
            const isActive = activeTab === item.id || (item.id === 'shop' && activeTab.startsWith('shop_'));
            return (
              <button
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                className={`relative px-5 py-2 text-sm font-semibold rounded-full select-none transition-colors duration-200 ${
                  isActive ? 'text-brand-charcoal font-bold' : 'text-brand-charcoal/70 hover:text-brand-charcoal'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabPill"
                    transition={{ type: 'spring', stiffness: 380, damping: 25 }}
                    className="absolute inset-0 bg-[#F4B6B033] rounded-full z-0"
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Action Controls Frame (Sound, Cart, Hamburger) */}
        <div className="flex items-center gap-3">
          
          {/* Welcome Sound Toggle pill */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSoundToggle}
            className={`p-2.5 rounded-2xl border border-[#E6DDD0] flex items-center justify-center shadow-soft select-none transition-colors duration-300 ${
              soundOn ? 'bg-brand-sage text-white border-transparent' : 'bg-white text-brand-charcoal/40'
            }`}
            title={soundOn ? "Mute playful ambient dings" : "Unmute sweet audio cues!"}
          >
            {soundOn ? <Volume2 size={20} /> : <VolumeX size={20} />}
            <span className="text-xs font-mono font-bold ml-1 hidden lg:inline">
              {soundOn ? "Sound On" : "Muted"}
            </span>
          </motion.button>

          {/* Interactive Cart Button with Peek pet */}
          <div className="relative">
            {/* Tiny Pet Peeking Out Animation */}
            <AnimatePresence>
              {isCartPeeking && (
                <motion.div
                  initial={{ y: 22, opacity: 0, scale: 0.6 }}
                  animate={{ y: -8, opacity: 1, scale: 1 }}
                  exit={{ y: 22, opacity: 0, scale: 0.6 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 15 }}
                  className="absolute -top-10 left-3 z-10 w-8 h-8 pointer-events-none"
                >
                  {/* Sweet white/ginger cat kitten peeking */}
                  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
                    <circle cx="50" cy="50" r="45" fill="#FBAD75" stroke="#E6DDD0" strokeWidth="2" />
                    <path d="M15,25 L5,5 L32,23 Z" fill="#EA9C75" />
                    <path d="M85,25 L95,5 L68,23 Z" fill="#EA9C75" />
                    <circle cx="35" cy="45" r="7" fill="#2D2D2D" />
                    <circle cx="33" cy="43" r="2" fill="#FFF" />
                    <circle cx="65" cy="45" r="7" fill="#2D2D2D" />
                    <circle cx="63" cy="43" r="2" fill="#FFF" />
                    <circle cx="50" cy="56" r="4" fill="#F4B6B0" />
                  </svg>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                playPop();
                onOpenCartModal();
              }}
              className="relative p-2.5 rounded-2xl bg-white text-brand-charcoal border border-[#E6DDD0] shadow-soft flex items-center gap-2 select-none hover:bg-brand-cream/40"
              id="header-cart-trigger"
            >
              <ShoppingBasket size={20} className="text-brand-pink" />
              <span className="text-sm font-extrabold font-sans hidden sm:inline">My Basket</span>
              
              {/* Spring layout-based cart size count bubble */}
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={cartCount}
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.5, opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 450, damping: 14 }}
                  className="absolute -top-2.5 -right-2.5 bg-brand-pink text-white border border-white text-xs font-mono font-bold w-6 h-6 rounded-full flex items-center justify-center shadow-soft"
                >
                  {cartCount}
                </motion.span>
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Hamburger Menu for Mobile viewports */}
          <button
            onClick={() => {
              playPop();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="p-2.5 rounded-2xl bg-white border border-[#E6DDD0] text-brand-charcoal md:hidden shadow-soft flex items-center justify-center"
            aria-label="Toggle mobile menu navigation"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Expandable Mobile Navigation Slide Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden bg-[#FFF6E8]/95 backdrop-blur-md border border-[#E6DDD0] overflow-hidden px-6"
            id="mobile-nav-drawer"
          >
            <div className="flex flex-col gap-2 py-4">
              {menuItems.map((item) => {
                const isActive = activeTab === item.id || (item.id === 'shop' && activeTab.startsWith('shop_'));
                return (
                  <button
                    key={item.id}
                    onClick={() => handleTabClick(item.id)}
                    className={`w-full text-left px-5 py-3 rounded-2xl text-base font-bold flex items-center justify-between border transition-all ${
                      isActive
                        ? 'bg-[#F4B6B033] border-[#E6DDD0]'
                        : 'bg-white/80 border-[#E6DDD0] text-brand-charcoal/80'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <Sparkles size={16} className="text-brand-pink" />}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
