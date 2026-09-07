import React from 'react';
import { motion } from 'framer-motion';
import { Diamond, Sparkles } from 'lucide-react';
import { AnimatedSection } from '../common/AnimatedSection';

export const LuxuryStatement: React.FC = () => {
  return (
    <section className="bg-[#1C1A2E] text-white py-36 md:py-52 relative overflow-hidden text-center px-6 border-y border-[#C9A96E]/30">
      
      {/* Glow Ambient Lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C9A96E]/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-[#F9E8E8]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Decorative Gold Frame Border */}
      <div className="absolute top-8 left-8 right-8 bottom-8 border border-[#C9A96E]/20 rounded-3xl pointer-events-none hidden md:block" />
      <div className="absolute top-12 left-12 right-12 bottom-12 border border-[#E8B4B8]/10 rounded-2xl pointer-events-none hidden md:block" />

      {/* Background Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none opacity-[0.025] w-full text-center">
        <span className="font-display text-[140px] md:text-[260px] tracking-[0.2em] uppercase text-[#E8D4A8] block leading-none font-light">
          MANIFESTO
        </span>
      </div>

      <AnimatedSection direction="up">
        <div className="max-w-5xl mx-auto space-y-10 relative z-10">
          
          <div className="inline-flex items-center space-x-2 bg-[#2A2840]/90 backdrop-blur-md px-5 py-2 rounded-full border border-[#C9A96E]/40">
            <Diamond className="w-3.5 h-3.5 text-[#C9A96E] fill-[#C9A96E]" />
            <span className="text-[11px] font-sans font-semibold text-[#E8D4A8] tracking-[0.35em] uppercase">
              LOVE DETAILS · DUBAI BRAND ETHOS
            </span>
          </div>

          <motion.h2
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-[1.15] tracking-tight text-white"
          >
            “Details make the moment. <br className="hidden sm:block" />
            <span className="italic font-serif bg-gradient-to-r from-[#E8D4A8] via-[#F9E8E8] to-[#C9A96E] bg-clip-text text-transparent">
              Emotion makes the memory.”
            </span>
          </motion.h2>

          <div className="flex items-center justify-center space-x-4 pt-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#C9A96E]" />
            <Sparkles className="w-4 h-4 text-[#C9A96E]" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#C9A96E]" />
          </div>

          <p className="text-sm md:text-base text-[#E8D4A8]/80 font-sans tracking-wide max-w-2xl mx-auto font-light leading-relaxed">
            Crafting rare, emotion-infused celebrations across Dubai’s iconic palaces, desert estates, and coastal havens.
          </p>

        </div>
      </AnimatedSection>
    </section>
  );
};
