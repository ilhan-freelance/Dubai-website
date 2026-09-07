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
    <section className="py-20 bg-[#FAF8F6] text-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#2B1D24] rounded-3xl p-8 sm:p-14 shadow-2xl relative overflow-hidden border border-[#944C5E]/30">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column Text */}
            <div className="lg:col-span-5 space-y-6">
              <span className="font-['Great_Vibes'] text-4xl text-[#E8B4B8] block leading-none">
                Destination Elegance
              </span>

              <h2 className="font-['Playfair_Display'] text-3xl sm:text-5xl font-normal text-white leading-tight">
                Dubai Palace &amp; Desert Weddings
              </h2>

              <p className="text-xs sm:text-sm text-white/80 font-sans leading-relaxed font-light">
                We specialize in grand scale destination celebrations across Dubai, Abu Dhabi, and private UAE estates. From royal palace ballrooms to secluded firelit desert dunes.
              </p>

              <div className="pt-2">
                <button
                  onClick={onOpenEnquiry}
                  className="px-8 py-3.5 bg-[#944C5E] hover:bg-[#B86B7D] text-white rounded-full transition-all text-xs font-sans font-semibold uppercase tracking-widest cursor-pointer shadow-md"
                >
                  Explore Venues
                </button>
              </div>
            </div>

            {/* Right Column 3 Cards Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-5">
              {PALACE_CARDS.map((card, idx) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className="space-y-3 group cursor-pointer"
                >
                  <div className="w-full aspect-square rounded-2xl overflow-hidden border-2 border-[#944C5E]/50 shadow-md bg-black/40">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                    />
                  </div>
                  <div className="text-center sm:text-left space-y-1">
                    <h4 className="font-['Playfair_Display'] text-sm font-normal text-white group-hover:text-[#E8B4B8] transition-colors">
                      {card.title}
                    </h4>
                    <p className="text-[10px] text-white/70 font-sans uppercase tracking-wider">
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
