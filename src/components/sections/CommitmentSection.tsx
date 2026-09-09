import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, ShieldCheck, Crown, Clock } from 'lucide-react';

interface CommitmentSectionProps {
  onExplorePackages: () => void;
  onOpenEnquiry: () => void;
}

const GUARANTEES = [
  {
    number: '01',
    icon: Crown,
    title: '100% Bespoke Design',
    description: 'No template weddings. Every floral architecture, lighting cue, and spatial layout is custom-designed around your unique vision.'
  },
  {
    number: '02',
    icon: ShieldCheck,
    title: 'White-Glove Discretion',
    description: 'Complete privacy governance, NDAs, and celebrity protocols for confidential, high-profile Dubai galas and intimate vows.'
  },
  {
    number: '03',
    icon: Clock,
    title: 'Zero-Stress Execution',
    description: 'Minute-by-minute runsheet directing with audited supplier contracts, total budget transparency, and zero hidden costs.'
  }
];

export const CommitmentSection: React.FC<CommitmentSectionProps> = ({ onExplorePackages, onOpenEnquiry }) => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden px-6 border-t border-b border-gray-200/80 flex items-center justify-center bg-[#FDFBF7]">
      
      {/* 50% Visible Light Decorative Background Image */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0">
        <img
          src="/commitment_light_bg.png"
          alt="Dubai Luxury Floral Arch Background"
          className="w-full h-full object-cover opacity-55 filter saturate-[1.1]"
        />
        {/* Soft Warm Scrim Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5]/90 via-[#FAF8F5]/85 to-[#FAF8F5]/90" />
      </div>

      <div className="max-w-7xl mx-auto space-y-12 relative z-10 w-full">
        
        {/* Clear Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="text-xs sm:text-sm font-sans font-semibold tracking-[0.3em] uppercase text-[#4A6B5B] inline-flex items-center gap-2 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full border border-gray-200 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#4A6B5B]" />
            THE ATELIER PROMISE
          </span>

          <h2 className="font-['Playfair_Display'] text-4xl sm:text-6xl font-normal text-[#212529] tracking-tight leading-tight">
            Our Uncompromising Commitment
          </h2>

          <p className="text-xs sm:text-sm text-[#212529]/80 font-sans leading-relaxed max-w-xl mx-auto">
            3 Royal Guarantees that define how we architect every extraordinary Dubai celebration.
          </p>
        </div>

        {/* 3 Clear Commitment Guarantee Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {GUARANTEES.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="bg-white/95 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-gray-200/90 shadow-md hover:shadow-xl hover:border-[#4A6B5B]/50 transition-all duration-300 space-y-4 relative group"
              >
                <div className="flex items-center justify-between">
                  <span className="w-9 h-9 rounded-full bg-[#3B5649] text-white flex items-center justify-center font-['Playfair_Display'] text-sm font-semibold shadow-xs">
                    {item.number}
                  </span>
                  <div className="w-9 h-9 rounded-full bg-[#F4F6F4] text-[#3B5649] flex items-center justify-center group-hover:bg-[#3B5649] group-hover:text-white transition-colors">
                    <IconComp className="w-4 h-4" />
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-['Playfair_Display'] text-2xl font-normal text-[#212529] group-hover:text-[#3B5649] transition-colors">
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

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <button
            onClick={onExplorePackages}
            className="px-8 py-3.5 bg-[#3B5649] hover:bg-[#2A3E34] text-white rounded-full text-xs font-sans font-semibold uppercase tracking-widest transition-all cursor-pointer shadow-md hover:scale-105 inline-flex items-center space-x-2.5"
          >
            <span>EXPLORE OUR PACKAGES</span>
            <ArrowRight className="w-4 h-4 text-[#E8D4A8]" />
          </button>

          <button
            onClick={onOpenEnquiry}
            className="px-8 py-3.5 bg-white/95 hover:bg-white border border-gray-300 hover:border-[#3B5649] text-[#212529] rounded-full text-xs font-sans font-semibold uppercase tracking-widest transition-all cursor-pointer shadow-xs hover:scale-105"
          >
            INQUIRE WITH ATELIER
          </button>
        </div>

      </div>
    </section>
  );
};
