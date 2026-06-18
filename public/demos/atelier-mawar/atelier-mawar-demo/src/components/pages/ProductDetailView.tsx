/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Product } from '../../types';
import CurtainWipe from '../CurtainWipe';
import { ArrowLeft, HelpCircle, ShieldCheck, RefreshCw } from 'lucide-react';

interface ProductDetailViewProps {
  product: Product;
  onBack: () => void;
  onNavigateToContact: () => void;
}

export default function ProductDetailView({ product, onBack, onNavigateToContact }: ProductDetailViewProps) {
  return (
    <div className="pb-32">
      {/* Back button to gallery */}
      <section className="editorial-section px-6 md:px-16 lg:px-24 pt-28 pb-6">
        <button
          onClick={onBack}
          className="group flex items-center space-x-2 font-mono text-[10px] tracking-[0.2em] uppercase text-neutral-400 hover:text-primary transition-colors duration-300 pointer-events-auto"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300 text-current" />
          <span>BACK TO CATALOGUE</span>
        </button>
      </section>

      {/* Main product showcase split */}
      <section className="editorial-section px-6 md:px-16 lg:px-24 select-none">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Block: Double stacked image assets */}
          <div className="lg:col-span-7 space-y-12">
            <div className="relative">
              <CurtainWipe
                src={product.frontImage}
                alt={`${product.name} resting portrait`}
                aspectRatio="aspect-[3/4]"
              />
              <span className="font-mono text-[9px] text-neutral-400 uppercase tracking-widest block mt-2 text-right">
                I. resting posture
              </span>
            </div>

            <div className="relative">
              <CurtainWipe
                src={product.altImage}
                alt={`${product.name} alternate angle showcase`}
                aspectRatio="aspect-[3/4]"
                delay={0.15}
              />
              <span className="font-mono text-[9px] text-neutral-400 uppercase tracking-widest block mt-2 text-right">
                II. structural detail
              </span>
            </div>
          </div>

          {/* Right Block: Pure-luxury detail descriptions */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-10">
            
            {/* Title block */}
            <div className="space-y-4 border-b border-neutral-100 pb-8">
              <span className="font-mono text-[9px] tracking-[0.3em] text-primary uppercase block">
                SS26 ORIGINAL — {product.slug.toUpperCase()}
              </span>
              <h1 className="font-serif text-3xl md:text-5xl text-dark font-light tracking-tight leading-none">
                {product.name}
              </h1>
              <p className="font-mono text-base md:text-lg text-primary font-medium">
                {product.price}
              </p>
            </div>

            {/* Description essay */}
            <div className="space-y-4 text-neutral-500 font-sans text-sm font-light leading-relaxed">
              <p>{product.description}</p>
              <p>
                Modeled from unspun mountain fibers and washed natural pigments. Each piece is dynamically finished to respond softly to ambient breeze, keeping drapes fluid.
              </p>
            </div>

            {/* Spec list in Monaco/JetBrains Mono format */}
            <div className="space-y-3">
              <h4 className="font-mono text-[10px] tracking-[0.25em] text-dark uppercase font-semibold">
                CRAFTSMAN SPECIFICATIONS
              </h4>
              <ul className="space-y-2.5 font-mono text-[11px] text-neutral-400 list-none pl-0">
                {product.details.map((detail, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="text-primary select-none mt-0.5">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Non-working Buy Action - Boutique Appointment notice */}
            <div className="bg-neutral-50 border border-neutral-100 p-6 space-y-4">
              <span className="font-mono text-[9px] tracking-[0.2em] text-primary uppercase block font-semibold">
                EXCLUSIVITY NOTICE
              </span>
              <p className="font-sans text-[12px] font-light text-neutral-500 leading-normal">
                To preserve fine fabric alignment and correct posture fitting, Atelier Mawar SS26 pieces are customized to your exact frame by appointment only. We do not support online shopping cart checkouts.
              </p>
              
              <button
                onClick={onNavigateToContact}
                className="font-mono text-[10px] tracking-[0.25em] uppercase w-full bg-dark text-white hover:bg-primary py-3.5 px-6 transition-colors duration-500 block text-center"
              >
                REQUEST A PRIVATE FITTING
              </button>
            </div>

            {/* Auxiliary brand assurance lines */}
            <div className="grid grid-cols-3 gap-6 pt-6 text-center select-none">
              <div className="flex flex-col items-center space-y-1">
                <ShieldCheck className="w-4 h-4 text-primary" />
                <span className="font-mono text-[8px] text-neutral-400 uppercase tracking-widest">
                  Genuine Silk
                </span>
              </div>
              <div className="flex flex-col items-center space-y-1">
                <RefreshCw className="w-4 h-4 text-primary" />
                <span className="font-mono text-[8px] text-neutral-400 uppercase tracking-widest">
                  Tailored To fit
                </span>
              </div>
              <div className="flex flex-col items-center space-y-1">
                <HelpCircle className="w-4 h-4 text-primary" />
                <span className="font-mono text-[8px] text-neutral-400 uppercase tracking-widest">
                  Local Atelier
                </span>
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
