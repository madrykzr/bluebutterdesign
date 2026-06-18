/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Product } from '../../types';
import CurtainWipe from '../CurtainWipe';
import ProductCard from '../ProductCard';
import { products } from '../../data';

interface HomeViewProps {
  onProductSelect: (p: Product) => void;
  onNavigate: (route: 'collection' | 'lookbook' | 'atelier' | 'contact') => void;
}

export default function HomeView({ onProductSelect, onNavigate }: HomeViewProps) {
  // Pull a subset for featured items
  const featuredProducts = products.slice(0, 3);
  const secondaryProducts = products.slice(3, 7);

  return (
    <div className="space-y-24 md:space-y-40 pb-20">
      {/* SECTION I: HERO - Editorial Asymmetric layout with Parallax Offset */}
      <section className="editorial-section relative min-h-screen flex flex-col justify-center pt-24 md:pt-32 px-6 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* Left Block: Tracked displaying headers and brand bio */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full pt-4 md:pt-16 z-20">
            <div className="space-y-6">
              <motion.span 
                initial={{ opacity: 0, letterSpacing: '0.1em' }}
                animate={{ opacity: 1, letterSpacing: '0.2em' }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="font-mono text-[9px] tracking-[0.25em] text-primary uppercase block"
              >
                Atelier Mawar — Modern Malaysian Couture
              </motion.span>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="text-serif-display text-5xl md:text-7xl lg:text-8xl tracking-[-0.04em] text-dark font-light"
              >
                Morning fog <br />
                <span className="italic text-primary">in Cameron</span> <br />
                Highlands.
              </motion.h1>
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="mt-12 md:mt-24 space-y-4 max-w-sm"
            >
              <p className="font-sans text-[13px] md:text-[14px] font-light text-neutral-500 leading-relaxed">
                SS26 represents a quiet, meditative return to soil and vapor. Deeply rooted in the landscapes of Malaysia, our garments emerge like silhouettes shaped by mountain dew.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('collection')}
                  className="font-mono text-[10px] tracking-[0.2em] uppercase border-b border-primary text-primary pb-1 hover:text-dark hover:border-dark transition-all duration-300 pointer-events-auto"
                >
                  Explore SS26 Collection
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right Block: Asymmetric Image Canvas with Parallax Effect */}
          <div className="lg:col-span-7 relative flex justify-end">
            <div className="w-full max-w-xl md:max-w-2xl relative">
              <CurtainWipe
                src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=1200"
                alt="Modern luxury Malaysian couture drape"
                aspectRatio="aspect-[4/5] lg:aspect-[3/4]"
              />
              
              {/* Overlapping Floating Caption block */}
              <div className="absolute -bottom-8 left-0 md:left-8 bg-white p-6 max-w-xs border border-neutral-50 shadow-xs z-20">
                <p className="font-mono text-[9px] text-neutral-400 uppercase tracking-widest mb-1">
                  PLATEAU ARCHIVES
                </p>
                <p className="font-sans text-[10px] font-light text-neutral-600 leading-normal italic">
                  "The silence of tea fields at dawn, carefully translated into weightless mulberry silk."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION II: THE ESSAY (Break Out Quote layout) */}
      <section className="editorial-section px-6 md:px-16 lg:px-24 relative">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <span className="font-mono text-[9px] tracking-[0.25em] text-neutral-400 uppercase block">
            THE ESSAY
          </span>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl tracking-tight text-dark font-light italic leading-snug">
            "There is a heavy silence that gathers in the deep tea gardens of Bukit Damansara at sunrise. We wanted to cut that absolute silence directly into modern, unstructured garments."
          </h2>
          <div className="w-12 h-[1px] bg-primary mx-auto" />
          <p className="font-sans text-[12px] md:text-[14px] font-light text-neutral-400 max-w-md mx-auto leading-relaxed">
            Quiet luxury is not just an aesthetic—it is a temporal pace. Handcrafted under natural sunlight over several weeks, we restrict our rolls to provide genuine artisanal scale.
          </p>
        </div>
      </section>

      {/* SECTION III: FEATURED GRID (Staggered offsets) */}
      <section className="editorial-section px-6 md:px-16 lg:px-24">
        <div className="flex flex-col space-y-12 select-none">
          <div className="flex justify-between items-end border-b border-neutral-100 pb-4">
            <div>
              <span className="font-mono text-[9px] tracking-[0.25em] text-neutral-400 uppercase block">
                SELECTED PIECES
              </span>
              <h3 className="font-serif text-2xl md:text-4xl text-dark tracking-tight font-light">
                Our Signature Silhouettes
              </h3>
            </div>
            <button
              onClick={() => onNavigate('collection')}
              className="font-mono text-[9px] tracking-[0.2em] uppercase text-primary border-b border-transparent hover:border-primary pb-0.5 transition-all duration-300"
            >
              View All SS26
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 pt-6">
            {featuredProducts.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
                // First card aligned normal, second slightly offset down, third normal again for asymmetric rhythm
                className={idx === 1 ? 'md:translate-y-8' : ''}
              >
                <ProductCard product={product} onClick={onProductSelect} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION IV: INTERACTIVE BANNER COUTURE SPLIT */}
      <section className="editorial-section relative overflow-hidden bg-neutral-50 px-6 py-20 md:py-32 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Text panel */}
          <div className="space-y-8 max-w-md">
            <span className="font-mono text-[9px] tracking-[0.25em] text-primary uppercase block">
              COUTURE LABS
            </span>
            <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-dark font-light leading-tight">
              Quietly cut,<br />
              <span className="italic">carefully matched.</span>
            </h2>
            <p className="font-sans text-[13px] font-light text-neutral-500 leading-relaxed">
              Every detail, from the bias-cut Habotai silk bindings down to the button loops of our Kebaya jackets, are tailored to flow gently against wind. The fabrics breathe in high moisture, drying to soft rustic textures.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('atelier')}
                className="font-mono text-[10px] tracking-[0.22em] uppercase border-b border-primary text-primary pb-1 hover:text-dark hover:border-dark transition-colors duration-300"
              >
                Read Mawar’s Story
              </button>
            </div>
          </div>

          {/* Staggered double image panel */}
          <div className="grid grid-cols-12 gap-4 relative">
            <div className="col-span-8 z-10">
              <CurtainWipe
                src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=800"
                alt="Linen weave modeling"
                aspectRatio="aspect-[3/4]"
              />
            </div>
            <div className="col-span-6 col-start-7 -mt-20 z-20 shadow-xl border-4 border-white">
              <CurtainWipe
                src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=800"
                alt="Finely stitched detail close-up"
                aspectRatio="aspect-[4/5]"
                delay={0.2}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION V: NEW ARRIVALS GRID */}
      <section className="editorial-section px-6 md:px-16 lg:px-24">
        <div className="flex flex-col space-y-12">
          <div className="text-center md:text-left">
            <span className="font-mono text-[9px] tracking-[0.25em] text-neutral-400 uppercase block">
              CATALÓGUE
            </span>
            <h3 className="font-serif text-2xl md:text-4xl text-dark tracking-tight font-light mt-1">
              The Cameron Collection
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {secondaryProducts.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <ProductCard product={product} onClick={onProductSelect} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION VI: LOOKBOOK TEASER */}
      <section className="editorial-section min-h-[70vh] relative flex items-center justify-center px-6">
        {/* Full screen background representation with absolute card cover */}
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            <img
              src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80&w=1600"
              alt="Cameron Highlands pine moss landscape"
              className="w-full h-full object-cover opacity-15 grayscale-[50%]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />
          </div>
        </div>

        <div className="relative z-10 text-center max-w-xl mx-auto space-y-8 bg-white/40 backdrop-blur-md p-8 md:p-12 border border-white/50">
          <span className="font-mono text-[9px] tracking-[0.3em] text-primary uppercase block">
            VISUAL PORTRAIT
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-dark tracking-tight font-light leading-tight">
            The SS26 Lookbook <br />
            <span className="italic font-normal">Morning Solitude</span>
          </h2>
          <p className="font-sans text-[12px] md:text-[13px] font-light text-neutral-500 leading-relaxed">
            Scroll our interactive landscape log, showcasing moments of solitude in the high peaks of Cameron. Flowing drapes, fog and mist.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('lookbook')}
              className="font-mono text-[10px] tracking-[0.25em] uppercase bg-primary text-white hover:bg-dark py-3 px-8 transition-colors duration-500"
            >
              Enter Lookbook Log
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
