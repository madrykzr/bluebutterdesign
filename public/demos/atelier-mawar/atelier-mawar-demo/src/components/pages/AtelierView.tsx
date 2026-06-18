/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import CurtainWipe from '../CurtainWipe';

export default function AtelierView() {
  return (
    <div className="pb-32">
      {/* Editorial Header */}
      <section className="editorial-section min-h-[45vh] flex flex-col justify-end px-6 md:px-16 lg:px-24 pb-12 pt-24">
        <div className="border-b border-neutral-100 pb-8 space-y-3">
          <span className="font-mono text-[9px] tracking-[0.25em] text-primary uppercase block">
            OUR HISTÓRY
          </span>
          <h1 className="text-serif-display text-4xl md:text-7xl text-dark font-light leading-none">
            The Atelier <span className="italic font-normal">& the Story</span>
          </h1>
        </div>
      </section>

      {/* Narrative Section with Left/Right spacing */}
      <section className="editorial-section px-6 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          {/* Main Story Panel */}
          <div className="lg:col-span-6 space-y-8">
            <h2 className="font-serif text-2xl md:text-4xl text-dark font-light italic leading-snug">
              Creating a vocabulary of modern Malaysian posture, informed by silence and rain.
            </h2>
            
            <div className="space-y-6 font-sans text-[13px] md:text-[14px] font-light text-neutral-500 leading-relaxed max-w-lg">
              <p>
                Atelier Mawar was established in 2022 in Kuala Lumpur with a simple, quiet intention: to create handcrafted garments that feel completely weightless on the skin while respecting heavy classic architectures.
              </p>
              <p>
                Each piece is carved incrementally. Rather than mass manufacturing, we select linen rolls, raw ramie, and washed silk crepe, cutting them on the bias or pressing classic accordion terraces by hand. In doing so, we capture the calm posture of Southeast Asian mornings.
              </p>
              <p>
                Our collections are designed to match both hot tropical humidity and chilly high-altitude mist. They are pieces of quiet reassurance—slowly made, meant to survive seasons.
              </p>
            </div>
            
            {/* Address and visiting rules */}
            <div className="pt-6 border-t border-neutral-100 space-y-2 max-w-sm">
              <h4 className="font-mono text-[10px] tracking-[0.2em] text-dark uppercase font-medium">
                BUKIT DAMANSARA HOUSE
              </h4>
              <p className="font-sans text-[12px] font-light text-neutral-400">
                Mawar Atelier, Bukit Damansara, Kuala Lumpur.<br />
                Available by rare private appointments only.
              </p>
            </div>
          </div>

          {/* Founder Portrait Panel (Staggered layout) */}
          <div className="lg:col-span-6 space-y-8">
            <div className="relative max-w-md mx-auto">
              <CurtainWipe
                src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=1200"
                alt="Portrait of founder Mawar binti Ismail"
                aspectRatio="aspect-[3/4]"
              />
              
              {/* Overlapping Founder Bio overlay */}
              <div className="absolute -bottom-10 right-4 bg-white p-6 max-w-xs border border-neutral-100 shadow-sm">
                <span className="font-mono text-[9px] tracking-[0.2em] text-neutral-400 uppercase">
                  FOUNDER PROFILE
                </span>
                <p className="font-serif text-xl font-normal text-dark mt-1">
                  Mawar binti Ismail
                </p>
                <p className="font-sans text-[11px] font-light text-neutral-500 mt-2 leading-relaxed">
                  Trained at Central Saint Martins, London. Returned to Kuala Lumpur in 2022 to establish her eponymous house of modern drapes.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Core Architectural Values (Bento Grid Style) */}
      <section className="editorial-section mt-40 px-6 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-neutral-100 pt-16 select-none">
          
          <div className="space-y-4">
            <span className="font-mono text-[10px] tracking-[0.25em] text-primary">I / SLOW TAILORING</span>
            <h3 className="font-serif text-xl font-normal text-dark">One Drape at a Time</h3>
            <p className="font-sans text-[12px] font-light text-neutral-400 leading-relaxed">
              We never cut multiple rolls in haste. Every fabric layer settles under sunlight to achieve true tension before cutting.
            </p>
          </div>

          <div className="space-y-4">
            <span className="font-mono text-[10px] tracking-[0.25em] text-primary">II / RUSTIC MATERÍALS</span>
            <h3 className="font-serif text-xl font-normal text-dark">Uncut Fiber Integrity</h3>
            <p className="font-sans text-[12px] font-light text-neutral-400 leading-relaxed">
              Accepting the slight variations of wild silk cocoon slubs and linen threads as true testimonies of artisanal reality.
            </p>
          </div>

          <div className="space-y-4">
            <span className="font-mono text-[10px] tracking-[0.25em] text-primary">III / SOUTHEAST FORM</span>
            <h3 className="font-serif text-xl font-normal text-dark">The Kebaya Retooled</h3>
            <p className="font-sans text-[12px] font-light text-neutral-400 leading-relaxed">
              Transforming traditional garments of Malaysia into modern deconstructed drapes that flow seamlessly without stiff constraints.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
