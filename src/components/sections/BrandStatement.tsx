import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Diamond } from 'lucide-react';
import { AnimatedSection } from '../common/AnimatedSection';

interface BrandStatementProps {
  onLearnMore: () => void;
}

export const BrandStatement: React.FC<BrandStatementProps> = ({ onLearnMore }) => {
  return (
    <section className="text-white py-32 md:py-52 relative overflow-hidden" style={{
      background: 'linear-gradient(145deg, #1C1A2E 0%, #14122A 55%, #201E38 100%)'
    }}>

      {/* Gold dot pattern */}
      <div className="absolute inset-0 bg-dot-gold opacity-60" />

      {/* Decorative watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none opacity-[0.03] w-full text-center overflow-hidden">
        <span className="font-display-luxury text-[160px] sm:text-[220px] md:text-[310px] tracking-[0.2em] uppercase text-white font-light whitespace-nowrap">
          ATELIER
        </span>
      </div>

      {/* Floating gold orbs */}
      <motion.div
        animate={{ y: [-15, 15, -15], x: [-10, 10, -10] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-16 right-[15%] w-72 h-72 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(201, 169, 110, 0.10) 0%, transparent 70%)' }}
      />
      <motion.div
        animate={{ y: [10, -10, 10], x: [8, -8, 8] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-20 left-[10%] w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(232, 180, 184, 0.08) 0%, transparent 70%)' }}
      />

      {/* Top gold line */}
      <div className="absolute top-0 left-0 right-0 h-px subtle-divider-gold" />
      <div className="absolute bottom-0 left-0 right-0 h-px subtle-divider-gold" />

      <div className="max-w-7xl mx-auto px-8 md:px-16 relative z-10">

        {/* Micro header */}
        <AnimatedSection direction="up">
          <div className="flex items-center space-x-3 mb-16">
            <div className="w-8 h-px bg-[#C9A96E]" />
            <span className="text-xs font-sans font-semibold tracking-[0.25em] text-[#C9A96E] uppercase">
              THE ATELIER MANIFESTO
            </span>
          </div>
        </AnimatedSection>

        {/* Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">

          {/* Left - 7 cols */}
          <div className="lg:col-span-7 space-y-10">

            <AnimatedSection direction="up" delay={0.1}>
              <h2 className="font-display-luxury text-4xl sm:text-5xl md:text-6xl font-normal leading-[1.1] tracking-tight">
                <span className="text-white font-bold block mb-2">Every Celebration Begins With Emotion.</span>
                <span className="italic font-light text-[#E8D4A8]">
                  We turn that emotion into architecture.
                </span>
              </h2>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.2}>
              <div className="space-y-6 font-sans text-base md:text-lg leading-relaxed font-light max-w-2xl pl-6" style={{
                borderLeft: '2px solid rgba(201, 169, 110, 0.35)',
                color: 'rgba(232, 212, 168, 0.75)',
              }}>
                <p>
                  From the initial spark of inspiration to the final moonlit farewell, Love Details combines artistic direction, spatial design, and flawless execution to craft events that define modern Middle Eastern luxury.
                </p>
                <p>
                  We believe true luxury is never loud. It lives in negative space, candlelit ambiance, hand-poured wax, tactile linens, and the effortless peace of mind of our hosts.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.3}>
              <div className="pt-4 flex flex-wrap items-center gap-6">
                <button
                  onClick={onLearnMore}
                  className="button-editorial px-8 py-4 flex items-center space-x-3 cursor-pointer group relative overflow-hidden shadow-xl"
                  style={{ background: 'linear-gradient(135deg, #C9A96E 0%, #9E7B45 100%)', color: '#FAF8F5' }}
                >
                  <span className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-[100%] transition-transform duration-700" />
                  <span className="relative z-10 tracking-[0.18em]">READ OUR ATELIER STORY</span>
                  <ArrowUpRight className="w-4 h-4 relative z-10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>

                <div className="flex items-center space-x-2 text-xs font-serif-luxury italic" style={{ color: '#C9A96E' }}>
                  <Diamond className="w-3.5 h-3.5" />
                  <span>Dubai · Jumeira Bay · Desert Reserves</span>
                </div>
              </div>
            </AnimatedSection>

            {/* Stats mini */}
            <AnimatedSection direction="up" delay={0.4}>
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#C9A96E]/15">
                {[
                  { num: '500+', label: 'Celebrations' },
                  { num: '12', label: 'Countries' },
                  { num: '15', label: 'Years' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="font-display-luxury text-3xl md:text-4xl font-light text-gold-gradient">
                      {stat.num}
                    </div>
                    <div className="micro-label mt-1" style={{ color: 'rgba(201, 169, 110, 0.6)' }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Right - 5 cols */}
          <div className="lg:col-span-5 relative">
            <AnimatedSection direction="left" delay={0.2}>
              <div className="relative">

                {/* Gold frame accent */}
                <div className="absolute -top-4 -right-4 w-full h-full border border-[#C9A96E]/25 z-0" />

                {/* Main image */}
                <div className="relative z-10 aspect-[3/4] overflow-hidden gold-border-glow shadow-2xl group">
                  <motion.img
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                    src="/portfolio-dubai.png"
                    alt="Love Details Dubai Wedding Reception"
                    className="w-full h-full object-cover"
                  />
                  {/* Pink-gold overlay on hover */}
                  <div className="absolute inset-0 transition-opacity duration-700" style={{
                    background: 'linear-gradient(to top, rgba(28,26,46,0.85) 0%, rgba(28,26,46,0.3) 50%, transparent 100%)'
                  }} />
                  {/* Caption */}
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="micro-label" style={{ color: '#E8D4A8', letterSpacing: '0.22em' }}>
                      Candlelit Tablescape Sanctuary
                    </span>
                    <p className="text-xs font-serif-luxury italic mt-1" style={{ color: 'rgba(232,212,168,0.7)' }}>
                      Bvlgari Resort Jumeira Bay
                    </p>
                  </div>
                </div>

                {/* Overlapping secondary image */}
                <div className="absolute -bottom-10 -left-10 w-3/5 aspect-[4/3] overflow-hidden z-20 hidden sm:block shadow-2xl border-2 border-[#1C1A2E]">
                  <img
                    src="/about-couple-arch.png"
                    alt="Dubai Luxury Wedding Couple"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Gold blush accent dot */}
                <div className="absolute -top-8 -left-8 w-16 h-16 rounded-full hidden sm:block" style={{
                  background: 'radial-gradient(circle, rgba(232, 180, 184, 0.4) 0%, transparent 70%)',
                  filter: 'blur(8px)',
                }} />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};
