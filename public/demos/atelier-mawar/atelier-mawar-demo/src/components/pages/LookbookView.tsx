/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import CurtainWipe from '../CurtainWipe';
import { lookbookItems } from '../../data';

export default function LookbookView() {
  return (
    <div className="pb-32">
      {/* Immersive Header */}
      <section className="editorial-section min-h-[50vh] flex flex-col justify-end px-6 md:px-16 lg:px-24 pb-16 pt-24 text-center md:text-left">
        <div className="max-w-3xl space-y-4">
          <span className="font-mono text-[9px] tracking-[0.25em] text-primary uppercase block">
            SS26 LOGS
          </span>
          <h1 className="text-serif-display text-5xl md:text-8xl text-dark font-light leading-none">
            Morning Solitude <br />
            <span className="italic font-normal text-primary">Lookbook</span>
          </h1>
          <p className="font-sans text-[13px] font-light text-neutral-400 max-w-md pt-4 leading-relaxed">
            Captured during early dawn as the mountain mist rolls across mossy fern beds. A visual study of silhouettes interacting with unconfined wind.
          </p>
        </div>
      </section>

      {/* Scrolling Lookbook Section Block List */}
      <section className="space-y-40">
        {lookbookItems.map((item, index) => {
          const isEven = index % 2 === 0;

          return (
            <div key={item.id} className="editorial-section px-4 md:px-16 lg:px-24">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
                
                {/* Image Box */}
                <div className={`col-span-1 lg:col-span-7 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <CurtainWipe
                    src={item.image}
                    alt={`Lookbook model segment ${item.id}`}
                    aspectRatio="aspect-[4/5] md:aspect-[16/10] lg:aspect-[4/3]"
                  />
                  
                  {/* Image Caption in Mono */}
                  <div className="mt-4 flex justify-between items-baseline text-[10px] font-mono text-neutral-400 select-none">
                    <span>PLATEAU NO. {item.id}</span>
                    <span>SS26 / OUTSIDE TIME</span>
                  </div>
                </div>

                {/* Content Box (Text, Quotes) */}
                <div className={`col-span-1 lg:col-span-5 flex flex-col space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  
                  {/* Giant floating number index */}
                  <span className="font-serif text-6xl md:text-8xl text-neutral-100 font-extralight select-none leading-none">
                    {item.id}
                  </span>

                  {/* Pull Quote */}
                  {item.quote && (
                    <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl italic text-dark font-light leading-snug border-l-2 border-primary pl-6 py-1">
                      "{item.quote}"
                    </blockquote>
                  )}

                  {/* Supporting technical info */}
                  <div className="space-y-1">
                    <p className="font-sans text-[13px] font-light text-neutral-500 leading-relaxed">
                      {item.caption}
                    </p>
                  </div>

                  <div className="pt-2 select-none">
                    <span className="font-mono text-[9px] tracking-[0.2em] text-primary uppercase bg-secondary px-3 py-1">
                      MIST PROFILE
                    </span>
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </section>

      {/* Massive Full Width Quote Break */}
      <section className="editorial-section mt-40 px-6 md:px-16 lg:px-24 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="h-[1px] w-12 bg-neutral-200 mx-auto" />
          <h2 className="font-serif text-3xl md:text-6xl text-dark font-light leading-snug">
            "To be quietly cut, is to allow space between thread and soul."
          </h2>
          <p className="font-mono text-[9px] tracking-[0.25em] text-neutral-400 uppercase">
            — MAWAR BINTI ISMAIL
          </p>
        </div>
      </section>
    </div>
  );
}
