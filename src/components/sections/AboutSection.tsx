import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface AboutSectionProps {
  onLearnMore: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onLearnMore }) => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#FAF8F5] text-[#212529] relative overflow-hidden px-4 sm:px-6 z-20">
      
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-[#E8D4A8]/20 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-80 h-80 rounded-full bg-[#8DA999]/15 blur-[140px] pointer-events-none" />

      {/* Decorative Background Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none opacity-[0.03] w-full text-center overflow-hidden">
        <span className="font-display text-[140px] sm:text-[220px] md:text-[280px] tracking-[0.15em] uppercase text-[#212529] block leading-none font-light">
          ATELIER
        </span>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 space-y-8 lg:space-y-12">
        
        {/* ── HIGH-IMPACT 6-PHOTO EDITORIAL GALLERY LAYOUT ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 xl:gap-10 items-center">
          
          {/* ── LEFT COLUMN: 3 OVERLAPPING WEDDING PHOTOS (4 cols) ── */}
          <div className="lg:col-span-4 relative flex flex-col items-center lg:items-end gap-3 sm:gap-4">
            
            {/* Photo 1: Top Hero Arch Frame */}
            <motion.div
              initial={{ opacity: 0, y: 30, rotate: -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: -2 }}
              whileHover={{ rotate: 0, scale: 1.04 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="w-full max-w-[280px] sm:max-w-xs xl:max-w-sm aspect-[4/5] rounded-3xl overflow-hidden border-4 border-white ring-2 ring-[#C9A96E]/40 shadow-2xl relative bg-white group gold-border-glow"
            >
              <img
                src="/about-couple-arch.png"
                alt="Grand Floral Wedding Arch"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
              />
            </motion.div>

            {/* Photo 2: Middle Desert Sunset Card */}
            <motion.div
              initial={{ opacity: 0, x: -30, y: 15 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="w-4/5 max-w-[220px] sm:max-w-xs aspect-[16/10] rounded-2xl overflow-hidden border-4 border-white shadow-xl bg-white -mt-12 sm:-mt-16 lg:-mr-6 z-20 relative group"
            >
              <img
                src="/portfolio-desert.png"
                alt="Dubai Desert Sunset Wedding"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
              />
            </motion.div>

            {/* Photo 3: Bottom Bridesmaids Photo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="w-3/4 max-w-[180px] sm:max-w-[210px] aspect-[4/3] rounded-2xl overflow-hidden border-4 border-white shadow-xl bg-white -mt-10 sm:-mt-12 lg:-mr-10 z-30 relative group"
            >
              <img
                src="/about-bridesmaids.png"
                alt="Bridal Party Elegance"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
              />
            </motion.div>

          </div>

          {/* ── CENTER COLUMN: EDITORIAL COPY & CALL TO ACTION (4 cols) ── */}
          <div className="lg:col-span-4 text-center space-y-5 px-2">
            
            <div className="flex items-center justify-center gap-2">
              <div className="w-10 h-[1px] bg-[#C9A96E]" />
              <span className="text-xs font-sans font-semibold tracking-[0.3em] uppercase text-[#C9A96E]">
                ABOUT LOVE DETAILS
              </span>
              <div className="w-10 h-[1px] bg-[#C9A96E]" />
            </div>

            <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight leading-[1.15]">
              The Minds Behind <br />
              <span className="italic font-normal text-[#3B5649]">Your Perfect Day</span>
            </h2>

            <p className="text-xs sm:text-sm md:text-base text-[#212529]/80 font-sans leading-relaxed max-w-md mx-auto font-light">
              Every love story deserves a breathtaking celebration. Our atelier blends visionary creative direction, spatial architecture, and white-glove Dubai logistics to curate modern luxury weddings tailored uniquely to your style.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 sm:pt-4 flex items-center justify-center gap-3 sm:gap-4 flex-wrap">
              <button
                onClick={onLearnMore}
                className="px-7 py-3 bg-[#3B5649] hover:bg-[#2A3E34] text-white rounded-full transition-all text-xs font-sans font-semibold uppercase tracking-widest cursor-pointer shadow-md hover:scale-105 inline-flex items-center gap-2"
              >
                <span>Book Atelier Service</span>
                <ArrowUpRight className="w-4 h-4 text-[#E8D4A8]" />
              </button>

              <button
                onClick={onLearnMore}
                className="px-6 py-3 bg-white border border-gray-300 text-[#212529] hover:bg-[#EAF0EC] hover:border-[#3B5649] rounded-full transition-all text-xs font-sans font-semibold uppercase tracking-widest cursor-pointer shadow-xs hover:scale-105"
              >
                Our Story
              </button>
            </div>

          </div>

          {/* ── RIGHT COLUMN: 3 OVERLAPPING WEDDING PHOTOS (4 cols) ── */}
          <div className="lg:col-span-4 relative flex flex-col items-center lg:items-start gap-3 sm:gap-4">
            
            {/* Photo 4: Top Hero Ballroom Frame */}
            <motion.div
              initial={{ opacity: 0, y: 30, rotate: 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 2 }}
              whileHover={{ rotate: 0, scale: 1.04 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="w-full max-w-[280px] sm:max-w-xs xl:max-w-sm aspect-[4/5] rounded-3xl overflow-hidden border-4 border-white ring-2 ring-[#C9A96E]/40 shadow-2xl relative bg-white group gold-border-glow"
            >
              <img
                src="/portfolio-dubai.png"
                alt="Bvlgari Resort Waterfront Gala"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
              />
            </motion.div>

            {/* Photo 5: Middle Dance Celebration Card */}
            <motion.div
              initial={{ opacity: 0, x: 30, y: 15 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="w-4/5 max-w-[220px] sm:max-w-xs aspect-[16/10] rounded-2xl overflow-hidden border-4 border-white shadow-xl bg-white -mt-12 sm:-mt-16 lg:-ml-6 z-20 relative group"
            >
              <img
                src="/portfolio-dance.png"
                alt="Midnight Dance Gala"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
              />
            </motion.div>

            {/* Photo 6: Bottom Groom Attire Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="w-3/4 max-w-[180px] sm:max-w-[210px] aspect-[4/3] rounded-2xl overflow-hidden border-4 border-white shadow-xl bg-white -mt-10 sm:-mt-12 lg:-ml-10 z-30 relative group"
            >
              <img
                src="/about-groom.png"
                alt="Black-Tie Royal Groom"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
              />
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};
