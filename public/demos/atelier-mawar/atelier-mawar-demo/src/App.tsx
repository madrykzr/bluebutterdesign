/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { motion, AnimatePresence } from 'motion/react';
import { Page, Palette, Product } from './types';

// Page Views
import HomeView from './components/pages/HomeView';
import CollectionView from './components/pages/CollectionView';
import LookbookView from './components/pages/LookbookView';
import AtelierView from './components/pages/AtelierView';
import ContactView from './components/pages/ContactView';
import ProductDetailView from './components/pages/ProductDetailView';

// Core interactive components
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import PageTransitionOverlay from './components/PageTransitionOverlay';

// Lucide icon helper
import { Menu, X, Landmark, Compass, Eye, Map, Heart } from 'lucide-react';

export default function App() {
  const [currentPath, setCurrentPath] = useState<Page>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [activePalette, setActivePalette] = useState<Palette>('rose');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenisInstance = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenisInstance.destroy();
    };
  }, []);

  // Timed 800ms Page Transition Engine
  const executeTransition = (action: () => void) => {
    setIsTransitioning(true);
    setMobileMenuOpen(false);
    
    // Switch state precisely half-way through transition (when screen is solid black)
    setTimeout(() => {
      action();
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    }, 400);

    // Conclude transition
    setTimeout(() => {
      setIsTransitioning(false);
    }, 800);
  };

  const handleNavigate = (page: Page) => {
    if (page === currentPath && !selectedProduct) return;
    executeTransition(() => {
      setSelectedProduct(null);
      setCurrentPath(page);
    });
  };

  const handleProductSelect = (product: Product) => {
    executeTransition(() => {
      setSelectedProduct(product);
    });
  };

  return (
    <div className={`theme-${activePalette} min-h-screen flex flex-col relative bg-white selection:bg-secondary selection:text-primary transition-colors duration-1000`}>
      {/* 1. Global Custom Cursor */}
      <CustomCursor />

      {/* 2. Page transition veil cover */}
      <PageTransitionOverlay isTriggered={isTransitioning} />

      {/* 3. Section Scroll index progress indicator */}
      <ScrollProgress />

      {/* 4. Luxury Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-30 bg-white/85 backdrop-blur-md border-b border-neutral-100 font-mono text-[10px] select-none">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex justify-between items-center">
          
          {/* Logo Title */}
          <div 
            onClick={() => handleNavigate('home')}
            className="flex items-center space-x-2 group cursor-pointer"
          >
            <span className="font-serif text-lg md:text-xl font-medium tracking-[0.2em] uppercase text-dark">
              Atelier Mawar
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-12">
            {[
              { id: 'home', label: 'HOME', icon: Landmark },
              { id: 'collection', label: 'THE COLLECTION', icon: Compass },
              { id: 'lookbook', label: 'LOOKBOOK', icon: Eye },
              { id: 'atelier', label: 'THE ATELIER', icon: Map },
              { id: 'contact', label: 'CONTACT', icon: Heart }
            ].map((link) => {
              const isActive = currentPath === link.id && !selectedProduct;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavigate(link.id as Page)}
                  className={`relative uppercase tracking-[0.25em] transition-colors duration-500 py-1 ${
                    isActive ? 'text-primary font-medium' : 'text-neutral-400 hover:text-dark'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-line"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-primary"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Color Palette Switcher - Dynamic Theme Swapper! */}
          <div className="hidden md:flex items-center space-x-2 border border-neutral-200/60 p-1 bg-neutral-50 rounded-none">
            <button
              onClick={() => setActivePalette('rose')}
              className={`px-3 py-1 text-[8px] uppercase tracking-[0.2em] transition-all duration-500 ${
                activePalette === 'rose'
                  ? 'bg-[#6E3848] text-[#F2E2E0] font-medium'
                  : 'text-neutral-500 hover:text-dark bg-transparent'
              }`}
            >
              MAWAR ROSE
            </button>
            <button
              onClick={() => setActivePalette('moss')}
              className={`px-3 py-1 text-[8px] uppercase tracking-[0.2em] transition-all duration-500 ${
                activePalette === 'moss'
                  ? 'bg-[#2C4C38] text-[#EBE4D5] font-medium'
                  : 'text-neutral-500 hover:text-dark bg-transparent'
              }`}
            >
              FOREST MOSS
            </button>
          </div>

          {/* Mobile Menu Action trigger */}
          <div className="flex items-center space-x-4 lg:hidden">
            {/* Color preview key */}
            <button
              onClick={() => setActivePalette(activePalette === 'rose' ? 'moss' : 'rose')}
              className="text-[9px] uppercase font-bold text-primary active:scale-95 transition-transform"
            >
              PALETTE ({activePalette.toUpperCase()})
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-dark hover:text-primary transition-colors focus:outline-none p-1"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* 5. Mobile Navigation Sidebar Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 pt-20 z-20 bg-white/98 flex flex-col justify-between p-8 font-mono border-b border-neutral-100"
          >
            <div className="flex flex-col space-y-8 pt-6 select-none">
              {[
                { id: 'home', label: 'Home' },
                { id: 'collection', label: 'The Collection' },
                { id: 'lookbook', label: 'Lookbook Archive' },
                { id: 'atelier', label: 'The Atelier House' },
                { id: 'contact', label: 'Reservations & Contacts' }
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavigate(link.id as Page)}
                  className="text-serif text-3xl font-light text-left text-dark hover:text-primary transition-colors tracking-tight focus:outline-none"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Mobile Palette switch */}
            <div className="border-t border-neutral-100 pt-8 space-y-4">
              <span className="text-[9px] tracking-widest text-neutral-400 block uppercase">
                SELECT PRIMARY BRAND PALETTE
              </span>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => {
                    setActivePalette('rose');
                    setMobileMenuOpen(false);
                  }}
                  className={`py-3 text-[10px] tracking-widest uppercase text-center border transition-all ${
                    activePalette === 'rose'
                      ? 'border-[#6E3848] bg-[#6E3848] text-white'
                      : 'border-neutral-200 text-neutral-500'
                  }`}
                >
                  MAWAR ROSE
                </button>
                <button
                  onClick={() => {
                    setActivePalette('moss');
                    setMobileMenuOpen(false);
                  }}
                  className={`py-3 text-[10px] tracking-widest uppercase text-center border transition-all ${
                    activePalette === 'moss'
                      ? 'border-[#2C4C38] bg-[#2C4C38] text-white'
                      : 'border-neutral-200 text-neutral-500'
                  }`}
                >
                  FOREST MOSS
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 6. Dynamic Page Slot Area */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedProduct ? `product-${selectedProduct.id}` : currentPath}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1] // signature visual ease
            }}
          >
            {selectedProduct ? (
              <ProductDetailView 
                product={selectedProduct} 
                onBack={() => {
                  executeTransition(() => {
                    setSelectedProduct(null);
                  });
                }}
                onNavigateToContact={() => handleNavigate('contact')}
              />
            ) : (
              <>
                {currentPath === 'home' && (
                  <HomeView 
                    onProductSelect={handleProductSelect} 
                    onNavigate={handleNavigate}
                  />
                )}
                {currentPath === 'collection' && (
                  <CollectionView onProductSelect={handleProductSelect} />
                )}
                {currentPath === 'lookbook' && <LookbookView />}
                {currentPath === 'atelier' && <AtelierView />}
                {currentPath === 'contact' && <ContactView />}
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* 7. Fine-drawn Editorial Footer */}
      <footer className="bg-neutral-50 border-t border-neutral-100 py-16 px-6 md:px-12 select-none">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start text-neutral-400 font-mono text-[9px] tracking-widest">
          
          {/* Column A: Logo line */}
          <div className="md:col-span-4 space-y-3">
            <h5 className="font-serif text-sm tracking-widest text-dark font-medium uppercase">
              Atelier Mawar
            </h5>
            <p className="font-sans text-[11px] font-light leading-normal tracking-normal text-neutral-400 max-w-xs select-text">
              Modern Malaysian Couture. Slowly made in wild raw silk and Cameron Highlands mist drapes.
            </p>
          </div>

          {/* Column B: Navigation redirects */}
          <div className="md:col-span-3 space-y-2 flex flex-col">
            <span className="text-dark font-semibold">SEGMENTS</span>
            <button onClick={() => handleNavigate('home')} className="hover:text-dark transition-colors text-left focus:outline-none">HOME</button>
            <button onClick={() => handleNavigate('collection')} className="hover:text-dark transition-colors text-left focus:outline-none">COLLECTION</button>
            <button onClick={() => handleNavigate('lookbook')} className="hover:text-dark transition-colors text-left focus:outline-none">LOOKBOOK LOG</button>
            <button onClick={() => handleNavigate('atelier')} className="hover:text-dark transition-colors text-left focus:outline-none">THE APPOINTMENT</button>
          </div>

          {/* Column C: Legal & Credentials */}
          <div className="md:col-span-3 space-y-2">
            <span className="text-dark font-semibold">BUKIT DAMANSARA</span>
            <p className="font-sans normal-case text-[11px] tracking-normal leading-normal select-text">
              By appointment only.<br />
              Kuala Lumpur, Malaysia.
            </p>
            <p className="font-sans normal-case text-[11px] tracking-normal">
              © {new Date().getFullYear()} ATELIER MAWAR.
            </p>
          </div>

          {/* Column D: Studio Credit (REQUIRED) */}
          <div className="md:col-span-2 flex md:justify-end items-end h-full pt-6 md:pt-0">
            <a
              href="https://bluebutterstudio.my"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-300 hover:text-dark transition-colors font-semibold"
            >
              DEMO — bluebutterstudio.my
            </a>
          </div>

        </div>
      </footer>
    </div>
  );
}
