import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, ShieldCheck, Crown, Sparkle } from 'lucide-react';

interface CommitmentSectionProps {
  onExplorePackages: () => void;
  onOpenEnquiry: () => void;
}

export const CommitmentSection: React.FC<CommitmentSectionProps> = ({ onExplorePackages, onOpenEnquiry }) => {
  return (
    <section className="py-16 md:py-24 lg:min-h-[75vh] relative overflow-hidden px-6 border-t border-b border-gray-200/80 flex items-center justify-center bg-[#FDFBF7]">
      
      {/* 50% Visible Light Decorative Background Image */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0">
        <img
          src="/commitment_light_bg.png"
          alt="Dubai Luxury Floral Arch Background"
          className="w-full h-full object-cover opacity-50 filter saturate-[1.1]"
        />
        {/* Soft Warm Light Overlay Scrim for 100% High Contrast Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5]/90 via-[#FAF8F5]/80 to-[#FAF8F5]/90" />
      </div>

      <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10 w-full">
        
        {/* Header Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-3"
        >
          <span className="text-xs sm:text-sm font-sans font-semibold tracking-[0.3em] uppercase text-[#4A6B5B] inline-flex items-center gap-2 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full border border-gray-200 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#4A6B5B]" />
            OUR UNCOMPROMISING COMMITMENT
          </span>

          <h2 className="font-['Playfair_Display'] text-4xl sm:text-6xl md:text-7xl font-normal text-[#212529] tracking-tight leading-tight pt-2">
            Unrivaled Elegance. <br />
            <span className="italic text-[#3B5649] font-light">Royal Precision.</span>
          </h2>
        </motion.div>

        {/* Minimal Sub-text Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-sm sm:text-base text-[#212529]/85 font-sans leading-relaxed max-w-2xl mx-auto font-normal"
        >
          From high-fashion spatial layouts to minute-by-minute vendor logistics, our Dubai atelier coordinates every element with royal precision, white-glove discretion, and 100% bespoke perfection.
        </motion.p>

        {/* 3 Minimal Pill Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex flex-wrap justify-center gap-3 pt-2"
        >
          <div className="flex items-center gap-2 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full border border-gray-200/90 text-xs font-sans font-semibold text-[#212529] shadow-xs">
            <Crown className="w-4 h-4 text-[#3B5649]" />
            <span>100% Bespoke Curation</span>
          </div>

          <div className="flex items-center gap-2 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full border border-gray-200/90 text-xs font-sans font-semibold text-[#212529] shadow-xs">
            <ShieldCheck className="w-4 h-4 text-[#3B5649]" />
            <span>White-Glove Discretion</span>
          </div>

          <div className="flex items-center gap-2 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full border border-gray-200/90 text-xs font-sans font-semibold text-[#212529] shadow-xs">
            <Sparkle className="w-4 h-4 text-[#3B5649]" />
            <span>Zero Hidden Fees</span>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <button
            onClick={onExplorePackages}
            className="px-8 py-3.5 bg-[#3B5649] hover:bg-[#2A3E34] text-white rounded-full text-xs font-sans font-semibold uppercase tracking-widest transition-all cursor-pointer shadow-md hover:scale-105 inline-flex items-center space-x-2.5"
          >
            <span>EXPLORE OUR PACKAGES</span>
            <ArrowRight className="w-4 h-4 text-[#E8D4A8]" />
          </button>

          <button
            onClick={onOpenEnquiry}
            className="px-8 py-3.5 bg-white/90 hover:bg-white border border-gray-300 hover:border-[#3B5649] text-[#212529] rounded-full text-xs font-sans font-semibold uppercase tracking-widest transition-all cursor-pointer shadow-xs hover:scale-105"
          >
            INQUIRE WITH ATELIER
          </button>
        </motion.div>

      </div>
    </section>
  );
};
