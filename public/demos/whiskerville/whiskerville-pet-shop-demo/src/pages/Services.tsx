/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Check, Heart, Shield, Sparkles, Clock, CircleDollarSign } from 'lucide-react';
import { SERVICES } from '../data';
import { ServiceIllustration } from '../components/Illustrations';
import { playPop } from '../components/SoundEffects';

interface ServicesProps {
  onNavigateToTab: (tabId: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onNavigateToTab }) => {
  return (
    <div id="services-view" className="space-y-16 py-6 select-none">
      
      {/* Services Title and Description */}
      <div className="max-w-7xl mx-auto px-6 text-center space-y-4">
        <h2 className="font-serif font-black text-4xl sm:text-5xl text-brand-charcoal tracking-tight">
          Services at Whiskerville
        </h2>
        <p className="text-sm font-medium text-brand-charcoal/70 max-w-xl mx-auto leading-relaxed">
          From gentle shear sculpts to calming heart exams and daily KL shuttles. Our cage-free philosophy values your pet's sensory boundaries above all.
        </p>
      </div>

      {/* Grid of full Services descriptions with illustrations and features list */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {SERVICES.map((service, idx) => {
          // Map index to a specific type
          const mapping: ('groomer' | 'vet' | 'founder')[] = ['groomer', 'vet', 'founder', 'groomer'];
          const iconType = mapping[idx] || 'groomer';

          return (
            <motion.div
              key={service.id}
              whileHover={{ y: -6 }}
              className="bg-white border border-[#E6DDD0] p-8 rounded-2xl-custom flex flex-col justify-between gap-6 shadow-soft relative group"
              id={`service-card-${service.id}`}
            >
              <div className="space-y-6">
                
                {/* Header elements: illustration + name + prices */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <ServiceIllustration type={iconType} className="border border-[#E6DDD0]/60 shadow-soft shrink-0" />
                    <div>
                      <h3 className="font-serif font-black text-xl sm:text-2xl text-brand-charcoal leading-tight">
                        {service.name}
                      </h3>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-xs text-brand-charcoal/60 mt-1">
                        <span className="flex items-center gap-1">
                          <Clock size={12} />
                          <span>{service.duration}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-brand-charcoal/80 text-sm leading-relaxed font-sans font-medium">
                  {service.description}
                </p>

                <div className="h-[1px] bg-[#E6DDD0]" />

                {/* Features checklist */}
                <div className="space-y-2.5">
                  <h4 className="font-bold text-xs uppercase tracking-wider text-brand-charcoal/50 font-mono">
                    Service Includes:
                  </h4>
                  <ul className="grid grid-cols-1 gap-2">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs text-brand-charcoal/80 font-sans font-medium">
                        <div className="w-5 h-5 rounded-full bg-brand-sage/20 border border-brand-sage flex items-center justify-center shrink-0 mt-0.5">
                          <Check size={12} className="text-brand-sage-dark stroke-[3px]" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Footer displaying prices and quick triggers */}
              <div className="pt-6 border-t border-[#E6DDD0] flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-auto">
                <div>
                  <span className="font-mono text-[10px] text-brand-charcoal/40 uppercase tracking-widest block">
                    Estimated Fee
                  </span>
                  <span className="font-mono text-xl font-black text-brand-charcoal leading-none">
                    {service.priceRange}
                  </span>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.92 }}
                  transition={{ type: "spring", stiffness: 450, damping: 14 }}
                  onClick={() => { playPop(); onNavigateToTab('visit'); }}
                  className="px-6 py-3 bg-[#FFF] text-xs font-bold border border-[#E6DDD0] rounded-full uppercase tracking-wider shadow-sm hover:bg-brand-pink hover:text-white hover:border-transparent transition-all text-center animate-none"
                >
                  Book Session
                </motion.button>
              </div>

            </motion.div>
          );
        })}
      </div>

      {/* Trust and safety standards banner */}
      <div className="max-w-4xl mx-auto px-6 pt-6">
        <div className="bg-white border border-[#E6DDD0] p-8 rounded-2xl-custom shadow-soft grid grid-cols-1 md:grid-cols-3 gap-8 text-center items-center">
          
          <div className="space-y-1">
            <Shield className="text-brand-pink w-8 h-8 mx-auto" strokeWidth={2.5} />
            <h5 className="font-bold text-sm text-brand-charcoal">Liability Fully Covered</h5>
            <p className="text-[10px] text-brand-charcoal/60">Comprehensive insurance protection for all boarding and taxi guests.</p>
          </div>

          <div className="space-y-1 border-t md:border-t-0 md:border-x border-[#E6DDD0]/60 pt-4 md:pt-0 md:px-4">
            <Heart className="text-brand-sage-dark w-8 h-8 mx-auto" strokeWidth={2.5} />
            <h5 className="font-bold text-sm text-brand-charcoal">Cage-Free Philosophy</h5>
            <p className="text-[10px] text-brand-charcoal/60">Absolutely no chains, cages, or sensory stressors, keeping things calming.</p>
          </div>

          <div className="space-y-1 border-t md:border-t-0 pt-4 md:pt-0 border-[#E6DDD0]/60">
            <Sparkles className="text-brand-blue-dark w-8 h-8 mx-auto" strokeWidth={2.5} />
            <h5 className="font-bold text-sm text-brand-charcoal">Certified Sanitized</h5>
            <p className="text-[10px] text-brand-charcoal/60">Veterinarian hospital-grade sterilization protocols applied every evening.</p>
          </div>

        </div>
      </div>

    </div>
  );
};
