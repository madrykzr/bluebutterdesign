/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Clock, MapPin, Phone } from 'lucide-react';

export default function ContactView() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Private Fitting SS26',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setLoading(true);
    // Simulate quiet delay
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  };

  return (
    <div className="pb-32">
      {/* Editorial Header */}
      <section className="editorial-section min-h-[45vh] flex flex-col justify-end px-6 md:px-16 lg:px-24 pb-12 pt-24">
        <div className="border-b border-neutral-100 pb-8 space-y-3">
          <span className="font-mono text-[9px] tracking-[0.25em] text-primary uppercase block">
            RESERVATIONS
          </span>
          <h1 className="text-serif-display text-4xl md:text-7xl text-dark font-light leading-none">
            Inquiries <span className="italic font-normal">& Boutique</span>
          </h1>
        </div>
      </section>

      {/* Form and Details Segment */}
      <section className="editorial-section px-6 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          {/* Left Block: Minimalist Form */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="contact-form"
                  onSubmit={handleSubmit}
                  className="space-y-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="space-y-1">
                    <p className="font-serif text-2xl italic text-dark font-light mb-8">
                      "Write to us to request private viewing rolls or fitting appointments."
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Full Name */}
                    <div className="flex flex-col space-y-1">
                      <label className="font-mono text-[9px] text-neutral-400 uppercase tracking-widest">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sofea binti Hamzah"
                        className="border-b border-neutral-200 focus:border-primary focus:outline-none transition-colors duration-500 bg-transparent text-sm font-light py-2 px-1 rounded-none text-dark"
                      />
                    </div>

                    {/* Email Address */}
                    <div className="flex flex-col space-y-1">
                      <label className="font-mono text-[9px] text-neutral-400 uppercase tracking-widest">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="sofea@domain.my"
                        className="border-b border-neutral-200 focus:border-primary focus:outline-none transition-colors duration-500 bg-transparent text-sm font-light py-2 px-1 rounded-none text-dark"
                      />
                    </div>
                  </div>

                  {/* Subject Inquire Dropdown */}
                  <div className="flex flex-col space-y-1">
                    <label className="font-mono text-[9px] text-neutral-400 uppercase tracking-widest">
                      Inquiry Class
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="border-b border-neutral-200 focus:border-primary focus:outline-none transition-colors duration-500 bg-transparent text-sm font-light py-2 px-1 rounded-none text-neutral-600 appearance-none cursor-pointer"
                    >
                      <option value="Private Fitting SS26">Private Fitting: SS26 Cameron Highlands range</option>
                      <option value="Couture Commission">Bespoke Couture Commission (Central Studio)</option>
                      <option value="Brand Catalog Copy">Complimentary Collection Physical Catalog</option>
                      <option value="Press Inquire">Press & Medium Relations</option>
                    </select>
                  </div>

                  {/* Message body */}
                  <div className="flex flex-col space-y-1">
                    <label className="font-mono text-[9px] text-neutral-400 uppercase tracking-widest">
                      Your Message
                    </label>
                    <textarea
                      rows={4}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Share details of your chosen silhouettes, sizes, or preferred calendar dates..."
                      className="border-b border-neutral-200 focus:border-primary focus:outline-none transition-colors duration-500 bg-transparent text-sm font-light py-2 px-1 rounded-none text-dark resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={loading}
                      className="font-mono text-[10px] tracking-[0.25em] uppercase bg-primary text-white hover:bg-dark py-3.5 px-8 transition-colors duration-500 w-full md:w-auto"
                    >
                      {loading ? 'TRANSMITTING...' : 'REQUEST APPOINTMENT'}
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="success-message"
                  className="space-y-6 bg-secondary/20 p-8 border border-secondary"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="font-mono text-[9px] tracking-[0.25em] text-primary uppercase block">
                    TRANSMISSION RECORDED
                  </span>
                  <h3 className="font-serif text-3xl font-light text-dark">
                    Thank you, {formData.name}.
                  </h3>
                  <p className="font-sans text-sm font-light text-neutral-600 leading-relaxed max-w-md">
                    Our atelier hosting secretary will review your request for <span className="italic">"{formData.subject}"</span> and reach out to you within 24 working hours at <span className="underline">{formData.email}</span>.
                  </p>
                  <div className="h-[1px] w-8 bg-primary" />
                  <p className="font-sans text-[11px] font-light text-neutral-400 uppercase tracking-widest">
                    ATELIER MAWAR KUALA LUMPUR / PRIVATE REGISTRY
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Block: Location & Open hours details */}
          <div className="lg:col-span-5 space-y-12 bg-neutral-50/50 p-8 border border-neutral-100 rounded-none">
            
            {/* Coordination details */}
            <div className="space-y-3">
              <span className="font-mono text-[9px] tracking-[0.25em] text-neutral-400 uppercase block">
                COORDINATES
              </span>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <p className="font-sans text-[13px] font-light text-neutral-600 leading-relaxed">
                  Mawar Atelier House,<br />
                  Persiaran Bukit Damansara,<br />
                  50490 Kuala Lumpur, Malaysia
                </p>
              </div>
            </div>

            {/* Timings */}
            <div className="space-y-3">
              <span className="font-mono text-[9px] tracking-[0.25em] text-neutral-400 uppercase block">
                WORK HOURS
              </span>
              <div className="flex items-start space-x-3">
                <Clock className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <div className="font-sans text-[13px] font-light text-neutral-600 space-y-1">
                  <p>Tuesday to Saturday — 10:00 to 18:00</p>
                  <p className="font-mono text-[10px] text-neutral-400 uppercase">
                    Strictly by Private Booking Only
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Lines */}
            <div className="space-y-3">
              <span className="font-mono text-[9px] tracking-[0.25em] text-neutral-400 uppercase block">
                DIRECT CHANNELS
              </span>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                  <p className="font-sans text-[13px] font-light text-neutral-600">
                    +60 3-2011 8989
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                  <p className="font-sans text-[13px] font-light text-neutral-600">
                    registry@ateliermawar.my
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
