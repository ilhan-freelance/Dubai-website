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
    <section className="py-12 md:py-16 lg:min-h-[85vh] bg-[#FAF8F6] text-[#212529] relative overflow-hidden px-6 border-t border-gray-200 flex items-center">
      <div className="max-w-7xl mx-auto space-y-10 relative z-10 text-center w-full">
        
        {/* Floating Small Photo Bubbles Arc Decor */}
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center items-center gap-2 sm:gap-4 opacity-90">
          {FLOATING_BUBBLES.slice(0, 6).map((img, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-[#4A6B5B] shadow-xs cursor-pointer hover:scale-110 transition-transform"
            >
              <img src={img} alt="Wedding Bubble" className="w-full h-full object-cover" />
            </motion.div>
          ))}
        </div>

        {/* Header */}
        <div className="space-y-3 max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 text-[#C9A96E]">
            <div className="w-8 h-[1px] bg-[#C9A96E]" />
            <span className="text-xs font-sans font-semibold tracking-[0.25em] uppercase">
              EXCELLENCE &amp; TRUST
            </span>
            <div className="w-8 h-[1px] bg-[#C9A96E]" />
          </div>

          <h2 className="font-['Playfair_Display'] text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] tracking-tight leading-snug">
            Why Choose Love Details?
          </h2>
        </div>

        {/* 3 Circular Feature Bubble Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          {MAIN_BUBBLES.map((bubble, idx) => (
            <motion.div
              key={bubble.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              className="flex flex-col items-center text-center space-y-4 group cursor-pointer"
            >
              {/* Circular Photo Card */}
              <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-2 border-white shadow-lg bg-white relative">
                <img
                  src={bubble.image}
                  alt={bubble.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="space-y-1 max-w-xs">
                <h3 className="font-['Playfair_Display'] text-2xl sm:text-3xl font-semibold text-[#212529] group-hover:text-[#4A6B5B] transition-colors">
                  {bubble.title}
                </h3>
                <p className="text-xs text-[#212529]/80 font-sans leading-relaxed font-normal">
                  {bubble.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Pill Button */}
        <div className="pt-2">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="px-7 py-3 bg-[#3B5649] hover:bg-[#2A3E34] text-white rounded-full transition-all text-xs font-sans font-semibold uppercase tracking-widest cursor-pointer shadow-sm hover:scale-105"
          >
            See More
          </button>
        </div>

      </div>
    </section>
  );
};
