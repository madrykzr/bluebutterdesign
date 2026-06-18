/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Mail, Clock, CalendarDays, Milestone, Smile, CheckSquare, Sparkles } from 'lucide-react';
import { SHOP_INFO } from '../data';
import { playPop, playSparkle } from '../components/SoundEffects';
import confetti from 'canvas-confetti';

interface VisitProps {}

export const Visit: React.FC<VisitProps> = () => {
  // Booking Form State fields
  const [petName, setPetName] = useState('');
  const [petCategory, setPetCategory] = useState('Dog');
  const [serviceSelected, setServiceSelected] = useState('Gentle Grooming');
  const [ownerName, setOwnerName] = useState('');
  const [phone, setPhone] = useState('');
  const [bookingDate, setBookingDate] = useState('2026-06-25');
  const [bookingTime, setBookingTime] = useState('11:00 AM');
  const [whatsappUpdates, setWhatsappUpdates] = useState(true);

  // Success Confirmation State
  const [bookedData, setBookedData] = useState<any | null>(null);

  const handleSubmitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!petName || !ownerName || !phone) return;

    // Play tone/sparkle
    playSparkle();

    // Explode gorgeous pastel confetti!
    confetti({
      particleCount: 120,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#F4B6B0', '#A8C09A', '#8AA8C1', '#FFF1C0', '#FFEED4']
    });

    setBookedData({
      petName,
      petCategory,
      serviceSelected,
      ownerName,
      phone,
      bookingDate,
      bookingTime,
    });
  };

  const handleResetBooking = () => {
    playPop();
    setPetName('');
    setPetCategory('Dog');
    setServiceSelected('Gentle Grooming');
    setOwnerName('');
    setPhone('');
    setBookingDate('2026-06-25');
    setBookingTime('11:00 AM');
    setBookedData(null);
  };

  const timeSlots = [
    '10:30 AM',
    '11:00 AM', // default
    '1:00 PM',
    '2:30 PM',
    '4:00 PM',
    '5:30 PM',
    '7:00 PM'
  ];

  return (
    <div id="visit-us-view" className="space-y-16 py-6 select-none">
      
      {/* Title block */}
      <div className="max-w-7xl mx-auto px-6 text-center space-y-4">
        <h2 className="font-serif font-black text-4xl sm:text-5xl text-brand-charcoal tracking-tight">
          Visit Us in Plaza Damansara
        </h2>
        <p className="text-sm font-medium text-brand-charcoal/70 max-w-xl mx-auto leading-relaxed">
          Conveniently nestled in Bukit Damansara, Kuala Lumpur. Parking is easy, the air is cool, and fresh puppy treats are baked fresh daily!
        </p>
      </div>

      {/* Main Grid: Info Cards + Map + Booking Form */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* LEFT COLUMN: CONTACT DETAILS & PLACEHOLDER MAP */}
        <div className="lg:col-span-5 space-y-8">
          
          <div className="bg-white border border-[#E6DDD0] p-8 rounded-2xl-custom space-y-6 shadow-soft">
            <h3 className="font-serif font-black text-2xl text-brand-charcoal tracking-tight">
              Location details
            </h3>

            <div className="space-y-4">
              
              <div className="flex gap-3.5 items-start">
                <MapPin className="text-brand-pink shrink-0 mt-0.5" strokeWidth={2.5} size={20} />
                <div>
                  <h4 className="font-bold text-xs font-mono text-brand-charcoal/40 uppercase">HQ Address</h4>
                  <p className="text-sm text-brand-charcoal font-medium leading-relaxed mt-0.5">
                    {SHOP_INFO.location}
                  </p>
                </div>
              </div>

              <div className="flex gap-3.5 items-start border-t border-[#E6DDD0]/60 pt-4">
                <Clock className="text-brand-sage-dark shrink-0 mt-0.5" strokeWidth={2.5} size={20} />
                <div>
                  <h4 className="font-bold text-xs font-mono text-brand-charcoal/40 uppercase">Pantry Operating Hours</h4>
                  <p className="text-sm text-brand-charcoal font-medium leading-relaxed mt-0.5">
                    {SHOP_INFO.hours}
                  </p>
                  <span className="text-[10px] text-brand-charcoal/50 leading-relaxed block mt-0.5">Includes weekends &amp; public holidays</span>
                </div>
              </div>

              <div className="flex gap-3.5 items-start border-t border-[#E6DDD0]/60 pt-4">
                <Phone className="text-brand-blue-dark shrink-0 mt-0.5" strokeWidth={2.5} size={20} />
                <div>
                  <h4 className="font-bold text-xs font-mono text-brand-charcoal/40 uppercase">Hotline Number</h4>
                  <p className="text-sm text-brand-charcoal font-mono font-bold mt-0.5">
                    {SHOP_INFO.phone}
                  </p>
                </div>
              </div>

              <div className="flex gap-3.5 items-start border-t border-[#E6DDD0]/60 pt-4">
                <Mail className="text-brand-pink-dark shrink-0 mt-0.5" strokeWidth={2.5} size={20} />
                <div>
                  <h4 className="font-bold text-xs font-mono text-brand-charcoal/40 uppercase">Official Support Email</h4>
                  <p className="text-sm text-brand-charcoal font-mono mt-0.5">
                    {SHOP_INFO.email}
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Stylized Illustrated Vet Map Card */}
          <div className="border border-[#E6DDD0] bg-[#F4B6B011] rounded-2xl-custom p-6 text-center space-y-4 shadow-soft">
            <h4 className="font-serif font-black text-lg text-brand-charcoal">Plaza Damansara Visual Map</h4>
            {/* Playful vector map mockup */}
            <div className="h-44 rounded-2xl bg-[#FFF6E8] border border-[#E6DDD0]/60 relative overflow-hidden flex flex-col items-center justify-center p-4">
              <div className="absolute inset-x-0 top-1/2 h-4 bg-brand-sage opacity-40 rotate-[12deg]" />
              <div className="absolute inset-y-0 left-1/3 w-4 bg-brand-sage opacity-40 rotate-[-25deg]" />
              
              {/* HQ Marker */}
              <div className="z-10 bg-[#FFF] border border-[#E6DDD0] px-3.5 py-2 rounded-full flex items-center gap-1.5 shadow-soft">
                <span className="text-xl animate-bounce">📍</span>
                <span className="font-serif font-black text-xs text-brand-charcoal">Whiskerville!</span>
              </div>

              <div className="absolute bottom-2 left-2 bg-brand-charcoal text-brand-cream text-[8px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full">
                Jalan Medan Setia 1
              </div>
            </div>
            <p className="text-[11px] text-brand-charcoal/60 leading-normal">
              Located on the shoplot row just opposite the local banking branch. Free street parking spots are widely available before 12:00 PM and after 6:00 PM.
            </p>
          </div>

        </div>

        {/* RIGHT COLUMN: BOOKING FORM FRAME */}
        <div className="lg:col-span-7 bg-white border border-[#E6DDD0] p-8 rounded-2xl-custom shadow-soft relative">
          
          <AnimatePresence mode="wait">
            {!bookedData ? (
              
              /* Default Form view */
              <motion.form
                key="booking-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmitBooking}
                className="space-y-6"
                id="clinical-booking-form"
              >
                <div className="space-y-1">
                  <h3 className="font-serif font-black text-2xl text-brand-charcoal tracking-tight">
                    Fictional Consultation Planner
                  </h3>
                  <p className="text-xs text-brand-charcoal/60">
                    Schedule a wellness, spa, or taxi pickup session. No accounts, no real payments required.
                  </p>
                </div>

                <div className="h-[1px] bg-[#E6DDD0]" />

                {/* Pet Name input */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-brand-charcoal" htmlFor="form-pet-name">
                      Pet's Full Name *
                    </label>
                    <input
                      required
                      id="form-pet-name"
                      type="text"
                      placeholder="e.g. Milo, Kopi, Bobo"
                      value={petName}
                      onChange={(e) => setPetName(e.target.value)}
                      className="w-full bg-white px-4 py-3 rounded-full border border-[#E6DDD0] text-sm text-brand-charcoal focus:outline-hidden focus:border-brand-pink transition-all font-medium placeholder:text-brand-charcoal/30"
                    />
                  </div>

                  {/* Pet Category picker */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-brand-charcoal" htmlFor="form-pet-cat">
                      Pet Category
                    </label>
                    <div className="flex bg-[#FFF6E8] border border-[#E6DDD0]/60 rounded-full p-0.5">
                      {['Dog', 'Cat', 'Small Pet'].map((cat) => {
                        const checked = petCategory === cat;
                        return (
                          <button
                            key={cat}
                            type="button"
                            onClick={() => { playPop(); setPetCategory(cat); }}
                            className={`flex-grow py-2 text-xs font-bold rounded-full transition-all cursor-pointer ${
                              checked ? 'bg-brand-pink text-white shadow-soft' : 'text-brand-charcoal/50 hover:text-brand-charcoal'
                            }`}
                          >
                            {cat}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Service Type Selection */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-brand-charcoal" htmlFor="form-service">
                    Preferred Service *
                  </label>
                  <select
                    id="form-service"
                    value={serviceSelected}
                    onChange={(e) => { playPop(); setServiceSelected(e.target.value); }}
                    className="w-full bg-white px-4 py-3.5 rounded-2xl border border-[#E6DDD0] text-sm font-bold text-brand-charcoal focus:outline-hidden appearance-none cursor-pointer"
                  >
                    <option value="Gentle Grooming">🛁 Gentle Grooming Spa (RM 50-150)</option>
                    <option value="Veterinary Consultation">🩺 Caring Vet Consultation (RM 60)</option>
                    <option value="Cloud-Comfort Boarding">🏨 Cloud-Comfort Boarding (RM 50/night)</option>
                    <option value="Pet Taxi Services">🚖 Doorstep Pet Taxi (RM 30 flat)</option>
                  </select>
                </div>

                <div className="h-[1px] bg-[#E6DDD0]" />

                {/* Owner info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-brand-charcoal" htmlFor="form-owner-name">
                      Owner's Display Name *
                    </label>
                    <input
                      required
                      id="form-owner-name"
                      type="text"
                      placeholder="e.g. Rachel Lau"
                      value={ownerName}
                      onChange={(e) => setOwnerName(e.target.value)}
                      className="w-full bg-white px-4 py-3 rounded-full border border-[#E6DDD0] text-sm text-brand-charcoal focus:outline-hidden placeholder:text-brand-charcoal/30"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-brand-charcoal" htmlFor="form-phone">
                      Contact Mobile (+60) *
                    </label>
                    <input
                      required
                      id="form-phone"
                      type="tel"
                      placeholder="e.g. 12-345 6789"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-white px-4 py-3 rounded-full border border-[#E6DDD0] text-sm text-brand-charcoal focus:outline-hidden placeholder:text-brand-charcoal/30 font-mono"
                    />
                  </div>
                </div>

                {/* Date & Time slots selectors */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-brand-charcoal" htmlFor="form-date">
                      Appointment Date *
                    </label>
                    <input
                      required
                      id="form-date"
                      type="date"
                      value={bookingDate}
                      onChange={(e) => setBookingDate(e.target.value)}
                      className="w-full bg-white px-4 py-3 rounded-2xl border border-[#E6DDD0] text-sm text-brand-charcoal focus:outline-hidden font-mono font-bold"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-brand-charcoal" htmlFor="form-time">
                      Preferred Block Hour
                    </label>
                    <select
                      id="form-time"
                      value={bookingTime}
                      onChange={(e) => { playPop(); setBookingTime(e.target.value); }}
                      className="w-full bg-white px-4 py-3 rounded-2xl border border-[#E6DDD0] text-sm font-bold text-brand-charcoal focus:outline-hidden font-mono"
                    >
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* WhatsApp notifications checkbox check */}
                <div
                  onClick={() => { playPop(); setWhatsappUpdates(!whatsappUpdates); }}
                  className="flex items-center gap-3 p-3 bg-brand-sage/10 rounded-2xl cursor-pointer border border-brand-sage/20 hover:border-brand-sage transition-all shadow-sm"
                >
                  <div className={`w-5 h-5 rounded-md border border-[#E6DDD0] shrink-0 flex items-center justify-center font-bold relative transition-all ${
                    whatsappUpdates ? 'bg-brand-sage text-white border-transparent' : 'bg-white'
                  }`}>
                    {whatsappUpdates && <span className="text-[10px] text-white font-black">✓</span>}
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-brand-charcoal">Receive photolog updates via WhatsApp</h5>
                    <p className="text-[10px] text-brand-charcoal/50 leading-none mt-0.5">We will theoretically text you cute snapshots while boarding or grooming.</p>
                  </div>
                </div>

                {/* Submit button */}
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full bg-brand-sage hover:bg-brand-sage-dark text-white py-4 rounded-full font-bold text-base shadow-soft transition-all flex items-center justify-center gap-2 select-none border-0 cursor-pointer"
                >
                  <CalendarDays size={18} />
                  <span>Reserve Spot Now</span>
                </motion.button>
              </motion.form>
            ) : (
              
              /* Success Confirmation Card block */
              <motion.div
                key="booking-success"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="text-center py-6 space-y-6"
                id="booking-confirmation-screen"
              >
                <div className="w-20 h-20 bg-brand-sage rounded-2xl border border-brand-sage/30 flex items-center justify-center shadow-soft mx-auto animate-bounce">
                  <Smile size={36} className="text-white" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif font-black text-2xl text-brand-charcoal tracking-tight">
                    Spot Reserved for {bookedData.petName}!
                  </h3>
                  <p className="text-xs text-brand-charcoal/60 max-w-sm mx-auto">
                    Aunty Lin &amp; the gang have updated the ledger boards! Since this is a demo, no real representative slots were pinned.
                  </p>
                </div>

                {/* Detailed appointment summary table */}
                <div className="bg-white border border-[#E6DDD0] p-6 rounded-2xl-custom text-left space-y-4 max-w-md mx-auto shadow-soft">
                  <h4 className="font-serif font-black text-base text-brand-charcoal border-b border-[#E6DDD0]/60 pb-2">
                    Ledger Summary
                  </h4>

                  <div className="grid grid-cols-2 gap-y-3 gap-x-2 text-xs">
                    
                    <div>
                      <span className="text-brand-charcoal/40 font-mono block">PET GUEST</span>
                      <span className="font-black text-brand-charcoal truncate block">{bookedData.petName} ({bookedData.petCategory})</span>
                    </div>

                    <div>
                      <span className="text-brand-charcoal/40 font-mono block">BOOKED SERVICE</span>
                      <span className="font-black text-brand-charcoal truncate block">{bookedData.serviceSelected}</span>
                    </div>

                    <div>
                      <span className="text-brand-charcoal/40 font-mono block">APPOINTMENT SLOT</span>
                      <span className="font-black text-brand-charcoal block">{bookedData.bookingDate}</span>
                    </div>

                    <div>
                      <span className="text-brand-charcoal/40 font-mono block">DESIRED HOUR</span>
                      <span className="font-mono font-bold text-brand-charcoal block">{bookedData.bookingTime}</span>
                    </div>

                    <div className="col-span-2 border-t border-brand-charcoal/10 pt-2.5">
                      <span className="text-brand-charcoal/40 font-mono block">OWNER CONTACT</span>
                      <span className="font-bold text-brand-charcoal leading-none block mt-0.5">{bookedData.ownerName} (+60 {bookedData.phone})</span>
                    </div>
                  </div>
                </div>

                <div className="bg-brand-blue/10 border border-brand-blue/20 rounded-2xl p-4 flex gap-2.5 items-start text-left max-w-md mx-auto shadow-sm">
                  <Milestone className="text-brand-blue-dark shrink-0 mt-0.5" size={18} />
                  <div>
                    <h5 className="font-bold text-xs text-brand-charcoal">Demo Spot Unlocked</h5>
                    <p className="text-[10px] text-brand-charcoal/70 leading-normal">Your slot with Dr. Faiz / Hana has been contextually saved in transient cache memories. Feel free to draft another booking!</p>
                  </div>
                </div>

                <button
                  onClick={handleResetBooking}
                  className="px-8 py-3.5 bg-brand-pink hover:bg-brand-pink-dark text-white rounded-full font-bold text-sm uppercase tracking-wider shadow-soft transition-colors cursor-pointer"
                >
                  Confirm Other Booking
                </button>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>

    </div>
  );
};
