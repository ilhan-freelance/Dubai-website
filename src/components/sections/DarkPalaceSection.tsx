import React from 'react';
import { motion } from 'framer-motion';

interface DarkPalaceSectionProps {
  onOpenEnquiry: () => void;
}

const PALACE_CARDS = [
  {
    title: 'Royal Palace Celebrations',
    image: '/portfolio-dubai.png',
    subtitle: 'Grand Imperial Ballrooms'
  },
  {
    title: 'Desert Candlelit Vows',
    image: '/portfolio-desert.png',
    subtitle: 'Private Dunes & Sunset Sanctuaries'
  },
  {
    title: 'Coastal Island Galas',
    image: '/portfolio-garden.png',
    subtitle: 'Jumeira Waterfront Lawns'
  }
];

export const DarkPalaceSection: React.FC<DarkPalaceSectionProps> = ({ onOpenEnquiry }) => {
  return (
    <section className="py-12 md:py-16 bg-white text-white px-6 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="bg-[#1A1D20] rounded-2xl p-6 sm:p-10 shadow-xl relative overflow-hidden border border-[#C9A96E]/30">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column Text */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-2 text-[#E8D4A8]">
                <div className="w-6 h-[1px] bg-[#C9A96E]" />
                <span className="text-xs font-sans font-semibold tracking-[0.25em] uppercase">
                  DESTINATION ELEGANCE
                </span>
              </div>

              <h2 className="font-['Playfair_Display'] text-4xl sm:text-5xl font-bold text-white leading-tight">
                Palace &amp; Desert Weddings
              </h2>

              <p className="text-xs sm:text-sm text-white/80 font-sans leading-relaxed font-light">
                We specialize in grand scale destination celebrations across Dubai, Abu Dhabi, and private UAE estates. From royal palace ballrooms to secluded firelit desert dunes.
              </p>

              <div className="pt-2">
                <button
                  onClick={onOpenEnquiry}
                  className="px-7 py-3 bg-gradient-to-r from-[#D4AF37] to-[#C9A96E] hover:from-[#C9A96E] hover:to-[#9E7B45] text-[#111] rounded-full transition-all text-xs font-sans font-semibold uppercase tracking-widest cursor-pointer shadow-sm hover:scale-105"
                >
                  Explore Venues
                </button>
              </div>
            </div>

            {/* Right Column 3 Cards Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {PALACE_CARDS.map((card, idx) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className="space-y-2 group cursor-pointer"
                >
                  <div className="w-full aspect-square rounded-xl overflow-hidden border border-[#C9A96E]/30 shadow-sm bg-black/40">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                    />
                  </div>
                  <div className="text-center sm:text-left space-y-0.5">
                    <h4 className="font-['Playfair_Display'] text-base sm:text-lg font-semibold text-white group-hover:text-[#C9A96E] transition-colors">
                      {card.title}
                    </h4>
                    <p className="text-[9px] text-[#E8D4A8] font-sans uppercase tracking-wider">
                      {card.subtitle}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
