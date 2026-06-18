/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Heart, Landmark, Flame, User, Footprints, Sparkles } from 'lucide-react';
import { STAFF } from '../data';
import { ServiceIllustration } from '../components/Illustrations';

export const About: React.FC = () => {
  return (
    <div id="about-us-view" className="space-y-20 py-6 select-none">
      
      {/* 1. Header Section */}
      <div className="max-w-7xl mx-auto px-6 text-center space-y-4">
        <h2 className="font-serif font-black text-4xl sm:text-5xl text-brand-charcoal tracking-tight">
          Our Whiskerville Story
        </h2>
        <p className="text-sm font-medium text-brand-charcoal/70 max-w-xl mx-auto leading-relaxed">
          How a tiny backup plan in Plaza Damansara grew into Bukit Damansara’s favorite zero-chemical pet sanctuary and organic bakery.
        </p>
      </div>

      {/* 2. Story Grid */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left column text details */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 bg-[#F4B6B033] border border-[#F4B6B055] px-4 py-1.5 rounded-full shadow-soft">
            <Landmark size={14} className="text-brand-charcoal" />
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-brand-charcoal">
              Founded in Kuala Lumpur · 2021
            </span>
          </div>
          
          <h3 className="font-serif font-black text-2xl sm:text-3xl text-brand-charcoal tracking-tight">
            Curating happiness from nose to wiggly tail.
          </h3>

          <p className="text-brand-charcoal/80 text-sm leading-relaxed font-sans font-medium">
            Whiskerville was born out of a simple struggle. In early 2021, our founder, Aunty Lin, noticed her rescue pup Milo broke out in rashes from generic store treats and chemical shampoos. Finding certified organic, chemical-free alternatives in Kuala Lumpur was near impossible.
          </p>
          <p className="text-brand-charcoal/80 text-sm leading-relaxed font-sans font-medium">
            So, Lin started baking organic sweet potato bites on her kitchen counter at weekends. Neighbors noticed their dogs went crazy for them! Today, Whiskerville has expanded into Bukit Damansara's leading spot for premium natural food, cage-free bubble spas, and fearless clinical therapy.
          </p>

          {/* Key milestone bullet badges */}
          <div className="flex flex-wrap gap-3 font-mono text-xs pt-1">
            <span className="px-3.5 py-1.5 bg-brand-pink/15 rounded-xl text-brand-charcoal font-bold">
              🐾 500+ Happy Pups
            </span>
            <span className="px-3.5 py-1.5 bg-brand-sage/15 rounded-xl text-brand-charcoal font-bold">
              🌿 Pure Organic Baking
            </span>
            <span className="px-3.5 py-1.5 bg-brand-blue/15 rounded-xl text-brand-charcoal font-bold">
              🏥 Zero-Fear Clinic
            </span>
          </div>
        </div>

        {/* Right column stylized SVG preview of our home shop entry */}
        <div className="border border-[#E6DDD0] bg-white p-8 sm:p-12 rounded-2xl-custom shadow-soft flex flex-col items-center justify-center text-center gap-6 relative overflow-hidden aspect-square">
          <div className="absolute top-0 right-0 w-24 h-24 bg-brand-pink rounded-bl-full z-0 opacity-40" />
          
          <div className="w-20 h-20 bg-[#FFF6E8] border border-[#E6DDD0] rounded-2xl flex items-center justify-center text-4xl shadow-soft relative z-10 animate-bounce">
            🏬
          </div>

          <div className="space-y-2 relative z-10">
            <h4 className="font-serif font-black text-xl text-brand-charcoal">Plaza Damansara HQ</h4>
            <p className="text-xs text-brand-charcoal/70 max-w-[240px] mx-auto leading-relaxed">
              Drop by for a warm fresh baked cup of goat-milk puppuccinos and let your cats inspect the treat bags firsthand!
            </p>
          </div>

          <span className="text-xs text-brand-pink-dark font-mono font-bold uppercase tracking-wider bg-brand-pink/15 px-4 py-1.5 rounded-full relative z-10 border border-[#F4B6B033]">
            Come Visit Us Always!
          </span>
        </div>
      </div>

      {/* 3. MEET THE STAFF CARDS SECTION */}
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        
        <div className="text-center max-w-xl mx-auto space-y-3">
          <h3 className="font-serif font-black text-3xl text-brand-charcoal tracking-tight">
            Meet the Whiskerville Crew
          </h3>
          <p className="text-sm font-medium text-brand-charcoal/70 max-w-sm mx-auto leading-relaxed">
            The loving, multi-talented caretakers who look after your pets.
          </p>
        </div>

        {/* Profiles structure grids */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STAFF.map((staff) => (
            <div
              key={staff.name}
              className="bg-white border border-[#E6DDD0] p-8 rounded-2xl-custom flex flex-col justify-between gap-6 shadow-soft relative group"
            >
              <div className="space-y-6">
                
                {/* Visual Avatar frame and titles */}
                <div className="flex items-center gap-4">
                  <ServiceIllustration type={staff.illustrationType} className="border border-[#E6DDD0]/60 shadow-soft shrink-0" />
                  <div>
                    <h4 className="font-serif font-black text-xl text-brand-charcoal leading-none">
                      {staff.name}
                    </h4>
                    <span className="font-mono text-xs text-brand-charcoal/50 uppercase tracking-widest block mt-1.5">
                      {staff.role}
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="text-xs text-brand-charcoal/80 leading-relaxed font-sans font-medium">
                    {staff.bio}
                  </p>
                  
                  {/* Specialties checklist */}
                  <p className="text-xs text-brand-charcoal font-bold flex items-center gap-1.5 font-mono">
                    <User size={13} className="text-brand-pink-dark animate-pulse" />
                    <span>Focus: {staff.description}</span>
                  </p>
                </div>

              </div>

              {/* Unique fun fact badge */}
              <div className="pt-4 border-t border-[#E6DDD0] flex items-center justify-between gap-4 mt-auto">
                <div className="text-left font-mono">
                  <span className="text-[9px] text-brand-charcoal/40 uppercase tracking-wider block">
                    FUN FACT
                  </span>
                  <span className="text-[11px] font-bold text-brand-charcoal italic mt-0.5 block max-w-[180px] leading-tight">
                    "{staff.funFact}"
                  </span>
                </div>

                <span className="bg-brand-pink text-white text-[10px] font-mono font-bold uppercase shrink-0 tracking-wider px-3.5 py-1.5 rounded-full shadow-sm">
                  💼 {staff.petCount}
                </span>
              </div>

            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
