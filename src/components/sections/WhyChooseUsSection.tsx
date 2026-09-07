import React from 'react';
import { motion } from 'framer-motion';

const FLOATING_BUBBLES = [
  '/portfolio-dubai.png',
  '/about-couple-arch.png',
  '/portfolio-garden.png',
  '/about-bridesmaids.png',
  '/portfolio-dance.png',
  '/portfolio-rings.png',
  '/about-groom.png',
  '/about-couple-laugh.png'
];

const MAIN_BUBBLES = [
  {
    title: 'Bespoke Design',
    image: '/about-couple-arch.png',
    description: 'Every celebration is tailored around your individual narrative, eliminating generic formulas in favor of true couture artistry.'
  },
  {
    title: 'Trusted Suppliers',
    image: '/portfolio-dubai.png',
    description: "Privileged access to Dubai's premier floral architects, Michelin-level culinary directors, and elite acoustic performers."
  },
  {
    title: 'Location Magic',
    image: '/portfolio-desert.png',
    description: 'Exclusive access to UAE palace courts, desert sanctuaries, private island lawns, and iconic waterfront luxury resorts.'
  }
];

export const WhyChooseUsSection: React.FC = () => {
  return (
    <section className="py-24 md:py-36 bg-[#EBD3D7] text-[#2A2226] relative overflow-hidden px-6">
      
      {/* Floating Small Photo Bubbles Arc Decor with Sage Green Ring Borders */}
      <div className="max-w-6xl mx-auto mb-10 flex flex-wrap justify-center items-center gap-3 sm:gap-6 opacity-90">
        {FLOATING_BUBBLES.map((img, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className={`rounded-full overflow-hidden border-2 border-[#7A8864] shadow-md cursor-pointer hover:scale-110 transition-transform ${
              i % 2 === 0 ? 'w-12 h-12 sm:w-16 sm:h-16' : 'w-10 h-10 sm:w-14 sm:h-14'
            }`}
          >
            <img src={img} alt="Wedding Bubble" className="w-full h-full object-cover" />
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto space-y-16 relative z-10 text-center">
        
        {/* Header */}
        <div className="space-y-4 max-w-3xl mx-auto">
          <span className="font-['Great_Vibes'] text-4xl sm:text-5xl text-[#944C5E] block leading-none">
            Why Choose Us
          </span>

          <h2 className="font-['Playfair_Display'] text-3xl sm:text-5xl font-normal text-[#2A2226] tracking-tight leading-snug">
            Crafting weddings that unforgettably align with your absolute dream.
          </h2>
        </div>

        {/* 3 Circular Feature Bubble Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {MAIN_BUBBLES.map((bubble, idx) => (
            <motion.div
              key={bubble.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              className="flex flex-col items-center text-center space-y-6 group cursor-pointer"
            >
              {/* Circular Photo Card */}
              <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-white shadow-xl bg-white relative">
                <img
                  src={bubble.image}
                  alt={bubble.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="space-y-2 max-w-xs">
                <h3 className="font-['Playfair_Display'] text-2xl font-normal text-[#2A2226] group-hover:text-[#7A8864] transition-colors">
                  {bubble.title}
                </h3>
                <p className="text-xs text-[#2A2226]/85 font-sans leading-relaxed font-normal">
                  {bubble.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Pill Button */}
        <div className="pt-4">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="px-8 py-3.5 bg-[#944C5E] hover:bg-[#7A3D4D] text-white rounded-full transition-all text-xs font-sans font-semibold uppercase tracking-widest cursor-pointer shadow-md"
          >
            See More
          </button>
        </div>

      </div>
    </section>
  );
};


