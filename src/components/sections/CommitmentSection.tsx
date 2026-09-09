import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, ShieldCheck, Crown, Clock, Sparkle } from 'lucide-react';

interface CommitmentSectionProps {
  onExplorePackages: () => void;
  onOpenEnquiry: () => void;
}

const COMMITMENTS = [
  {
    icon: Crown,
    title: '100% Bespoke Curation',
    description: 'No template weddings. Every floral arch, lighting cue, and spatial layout is custom-designed around your love story.'
  },
  {
    icon: ShieldCheck,
    title: 'White-Glove Discretion',
    description: 'VIP & celebrity privacy protocols. Complete confidentiality and non-disclosure governance for all high-profile galas.'
  },
  {
    icon: Clock,
    title: 'Precision Run-Sheets',
    description: 'Minute-by-minute production directing. From supplier arrivals to midnight fireworks, we manage every cue seamlessly.'
  },
  {
    icon: Sparkle,
    title: 'Transparent Governance',
    description: 'Zero hidden fees. Direct venue negotiations, audited supplier contracts, and total fiscal transparency at every stage.'
  }
];

export const CommitmentSection: React.FC<CommitmentSectionProps> = ({ onExplorePackages, onOpenEnquiry }) => {
  return (
    <section className="py-16 md:py-24 bg-[#F9F8F5] text-[#212529] relative overflow-hidden px-6 border-t border-b border-gray-200/80 flex items-center">
      
      {/* Background Floral Watermark */}
      <div className="absolute -bottom-10 -left-10 opacity-15 pointer-events-none select-none">
        <svg className="w-96 h-96 text-[#4A6B5B]" viewBox="0 0 200 200" fill="currentColor">
          <path d="M100 0 C120 40 160 80 200 100 C160 120 120 160 100 200 C80 160 40 120 0 100 C40 80 80 40 100 0 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto space-y-12 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8 space-y-3">
            <span className="text-xs sm:text-sm font-sans font-semibold tracking-[0.3em] uppercase text-[#4A6B5B] inline-flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#4A6B5B]" />
              OUR COMMITMENT
            </span>
            <h2 className="font-['Playfair_Display'] text-4xl sm:text-6xl font-normal text-[#212529] tracking-tight leading-tight">
              Unrivaled Elegance. <br />
              <span className="italic text-[#3B5649] font-light">Zero Stress Execution.</span>
            </h2>
          </div>

          <div className="lg:col-span-4 flex lg:justify-end gap-3">
            <button
              onClick={onExplorePackages}
              className="px-7 py-3.5 bg-[#3B5649] hover:bg-[#2A3E34] text-white rounded-full text-xs font-sans font-semibold uppercase tracking-widest transition-all cursor-pointer shadow-md hover:scale-105 inline-flex items-center space-x-2"
            >
              <span>EXPLORE PACKAGES</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#E8D4A8]" />
            </button>
            <button
              onClick={onOpenEnquiry}
              className="px-6 py-3.5 bg-white border border-gray-300 hover:border-[#3B5649] text-[#212529] rounded-full text-xs font-sans font-semibold uppercase tracking-widest transition-all cursor-pointer shadow-xs hover:scale-105"
            >
              INQUIRE NOW
            </button>
          </div>
        </div>

        {/* 4 Pillars Grid & Hero Visual Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: 4 Commitment Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {COMMITMENTS.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="bg-white rounded-2xl p-6 border border-gray-200/90 shadow-sm hover:shadow-md hover:border-[#4A6B5B]/40 transition-all duration-300 space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-[#F4F6F4] text-[#3B5649] flex items-center justify-center">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="font-['Playfair_Display'] text-xl font-normal text-[#212529]">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#212529]/75 font-sans leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: High Fashion Editorial Card Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 rounded-3xl overflow-hidden shadow-xl border border-gray-200 relative min-h-[380px] bg-gray-900 group"
          >
            <img
              src="/portfolio-dubai.png"
              alt="Dubai Royal Wedding Production"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 text-white space-y-3">
              <span className="text-[10px] font-sans uppercase tracking-widest text-[#E8D4A8] font-bold bg-black/40 px-3 py-1 rounded-full backdrop-blur-md inline-block border border-white/20">
                100% FLAWLESS EXECUTION GUARANTEE
              </span>
              <h4 className="font-['Playfair_Display'] text-2xl font-normal text-white leading-tight">
                Architecting Your Dream Day With Royal Discretion
              </h4>
              <p className="text-xs text-white/80 font-sans leading-relaxed">
                From desert dunes to iconic Dubai landmarks, we manage every detail so you experience pure romance.
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
