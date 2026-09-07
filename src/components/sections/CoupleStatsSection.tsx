import React from 'react';
import { motion } from 'framer-motion';
import { Diamond, Award, Globe, Heart, Crown } from 'lucide-react';
import { AnimatedSection } from '../common/AnimatedSection';

export const CoupleStatsSection: React.FC = () => {
  const STATS = [
    {
      icon: Heart,
      number: '450+',
      label: 'Luxury Celebrations',
      sublabel: 'Crafted with royal elegance across Dubai'
    },
    {
      icon: Globe,
      number: '18+',
      label: 'Global Destinations',
      sublabel: 'From UAE palaces to Italian villas'
    },
    {
      icon: Crown,
      number: '100%',
      label: 'Bespoke Direction',
      sublabel: 'Zero templates, pure customized artistry'
    },
    {
      icon: Award,
      number: '15 Yrs',
      label: 'Dubai Atelier Mastery',
      sublabel: 'Unrivaled UAE venue & vendor relationships'
    }
  ];

  return (
    <section className="bg-gradient-to-b from-[#FAF8F5] via-[#F9E8E8]/35 to-[#FAF8F5] text-[#1C1A2E] py-28 md:py-40 border-t border-[#C9A96E]/20 relative overflow-hidden">
      
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F9E8E8]/50 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-16">
        
        {/* Header */}
        <AnimatedSection direction="up">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-[#F9E8E8] px-4 py-1.5 rounded-full border border-[#E8B4B8]/40 shadow-xs">
              <Diamond className="w-3.5 h-3.5 text-[#C9A96E] fill-[#C9A96E]" />
              <span className="text-[11px] font-sans font-semibold text-[#1C1A2E] tracking-[0.3em] uppercase">
                BY THE NUMBERS
              </span>
            </div>
            
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-normal text-[#1C1A2E] tracking-tight leading-[1.15]">
              A Legacy of <br />
              <span className="italic font-serif bg-gradient-to-r from-[#C9A96E] via-[#D4888F] to-[#9E7B45] bg-clip-text text-transparent">
                Unforgettable Milestones.
              </span>
            </h2>
          </div>
        </AnimatedSection>

        {/* 4 Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <AnimatedSection key={stat.label} direction="up" delay={idx * 0.12}>
                <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 border border-[#C9A96E]/25 hover:border-[#C9A96E] hover:bg-[#F9E8E8]/50 hover:shadow-[0_20px_40px_rgba(201,169,110,0.15)] transition-all duration-500 text-center space-y-4 group cursor-pointer h-full flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-full bg-[#F9E8E8] border border-[#E8B4B8]/50 flex items-center justify-center mx-auto text-[#C9A96E] group-hover:scale-110 group-hover:bg-[#1C1A2E] group-hover:text-[#E8D4A8] transition-all">
                      <Icon className="w-5 h-5" />
                    </div>

                    <motion.div
                      initial={{ scale: 0.8 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: idx * 0.1 }}
                      className="font-display text-4xl md:text-5xl font-semibold bg-gradient-to-r from-[#1C1A2E] via-[#9E7B45] to-[#C9A96E] bg-clip-text text-transparent"
                    >
                      {stat.number}
                    </motion.div>

                    <h3 className="font-display text-xl font-normal text-[#1C1A2E]">
                      {stat.label}
                    </h3>
                  </div>

                  <p className="text-xs text-[#1C1A2E]/70 font-sans font-light pt-2 border-t border-[#C9A96E]/15">
                    {stat.sublabel}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

      </div>
    </section>
  );
};
