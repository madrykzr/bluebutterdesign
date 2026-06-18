/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Product } from '../../types';
import CurtainWipe from '../CurtainWipe';
import ProductCard from '../ProductCard';
import { products } from '../../data';

interface CollectionViewProps {
  onProductSelect: (p: Product) => void;
}

export default function CollectionView({ onProductSelect }: CollectionViewProps) {
  // Let's divide products into creative stylistic sections
  const group1 = products.slice(0, 3); // Part I: Morning Fog
  const group2 = products.slice(3, 6); // Part II: Highland Rain
  const group3 = products.slice(6);    // Part III: Solitary Dusk

  return (
    <div className="pb-32">
      {/* Editorial Title Banner */}
      <section className="editorial-section min-h-[40vh] flex flex-col justify-end px-6 md:px-16 lg:px-24 pb-12 pt-24">
        <div className="border-b border-neutral-100 pb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="space-y-3">
            <span className="font-mono text-[9px] tracking-[0.25em] text-primary uppercase block">
              SS26 ARCHIVE
            </span>
            <h1 className="text-serif-display text-4xl md:text-7xl text-dark font-light leading-tight">
              Collection <span className="italic font-normal">Morning Solitude</span>
            </h1>
          </div>
          <div className="max-w-xs">
            <p className="font-sans text-[12px] font-light text-neutral-400 leading-relaxed text-left md:text-right">
              A comprehensive curation of eight silhouettes. Structured but unrestricted, referencing the moisture and quietude of Cameron Highlands.
            </p>
          </div>
        </div>
      </section>

      {/* PART I: MORNING FOG */}
      <section className="editorial-section mt-16 px-6 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-4">
            <span className="font-mono text-[10px] tracking-[0.25em] text-neutral-400 block">
              PART I
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-dark font-light italic">
              Morning Fog & Vapor
            </h2>
            <p className="font-sans text-[12px] font-light text-neutral-500 leading-relaxed">
              Silhouettes shaped in fine silks and organza sheets that drape like floating mist. Neutral tints of fog-white (#FFFFFF) and secondary clay blush (#F2E2E0).
            </p>
          </div>
          
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="col-span-1">
              <CurtainWipe
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=1200"
                alt="White flowing model drape"
                aspectRatio="aspect-[3/4]"
                className="mb-8"
              />
              <ProductCard product={group1[0]} onClick={onProductSelect} />
            </div>

            <div className="col-span-1 md:translate-y-20">
              <div className="mb-8">
                <ProductCard product={group1[1]} onClick={onProductSelect} />
              </div>
              {group1[2] && <ProductCard product={group1[2]} onClick={onProductSelect} />}
            </div>
          </div>
        </div>
      </section>

      {/* MID REVEAL SEC 1 (Full screen curtain wipe section image divider!) */}
      <section className="editorial-section my-24 md:my-32">
        <CurtainWipe
          src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=1600"
          alt="Fog sliding landscape separator"
          aspectRatio="aspect-[21/9]"
          className="w-full h-[50vh]"
        />
      </section>

      {/* PART II: HIGHLAND RAIN */}
      <section className="editorial-section mt-16 px-6 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-12 order-2 lg:order-1">
            <div className="col-span-1 md:-translate-y-12">
              <div className="mb-8">
                <ProductCard product={group2[0]} onClick={onProductSelect} />
              </div>
              {group2[2] && <ProductCard product={group2[2]} onClick={onProductSelect} />}
            </div>

            <div className="col-span-1">
              <CurtainWipe
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1200"
                alt="Woven fabrics and natural knits"
                aspectRatio="aspect-[3/4]"
                className="mb-8"
                delay={0.1}
              />
              {group2[1] && <ProductCard product={group2[1]} onClick={onProductSelect} />}
            </div>
          </div>

          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-4 order-1 lg:order-2">
            <span className="font-mono text-[10px] tracking-[0.25em] text-neutral-400 block">
              PART II
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-dark font-light italic">
              Highland Rain & Linen
            </h2>
            <p className="font-sans text-[12px] font-light text-neutral-500 leading-relaxed">
              Open-weave tailors, heavy linen knits, and rugged drapes representing rain dropping over wooden cottages. Raw organic edges left exposed.
            </p>
          </div>
        </div>
      </section>

      {/* PART III: SUNSET GLOW */}
      <section className="editorial-section mt-32 px-6 md:px-16 lg:px-24 bg-neutral-50/50 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="font-mono text-[10px] tracking-[0.25em] text-neutral-400 block">
              PART III
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-dark font-light">
              Solitary Dusk
            </h2>
            <p className="font-sans text-[13px] font-light text-neutral-500 leading-relaxed">
              Drapes made from deeper clays, dark rose pigments (#6E3848), and fine heavy silks celebrating sunset. The heavy weighted fall of tailored long-cut trousers and crepe slips.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {group3.map((product, idx) => (
              <div key={product.id} className={idx === 1 ? 'sm:translate-y-8' : ''}>
                <ProductCard product={product} onClick={onProductSelect} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
