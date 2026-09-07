import React, { useRef } from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  onOpenEnquiry: () => void;
  onExploreWork: () => void;
}

// Floating gold petal animation
const PETALS = Array.from({ length: 12 });

export const Hero: React.FC<HeroProps> = ({ onOpenEnquiry, onExploreWork }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScrollDown = () => {
    const next = scrollRef.current?.nextElementSibling as HTMLElement | null;
    if (next) next.scrollIntoView({ behavior: 'smooth' });
    else window.scrollBy({ top: window.innerHeight * 0.9, behavior: 'smooth' });
  };

  return (
    <section ref={scrollRef} className="relative w-full min-h-screen flex flex-col justify-center items-center text-center overflow-hidden">

      {/* ── BACKGROUND: Dubai luxury wedding video ── */}
      <div className="absolute -top-[130px] left-0 right-0 bottom-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/hero-aisle.png"
          className="w-full h-full object-cover object-center scale-105"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          <img
            src="/hero-aisle.png"
            alt="Luxury Dubai wedding ceremony"
            className="w-full h-full object-cover object-center"
          />
        </video>
        {/* Deep cinematic gradient — dark at top/bottom, subtle dark tint in middle for maximum text pop */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/85" />
        {/* Radial vignette overlay focusing lighting on center */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/20 to-black/70" />
        {/* Warm rose gold ambient tint */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#2B0E18]/40 via-transparent to-[#C9A96E]/15 mix-blend-overlay" />
      </div>

      {/* ── FLOATING GOLD PETALS ── */}
      {PETALS.map((_, i) => (
        <div
          key={i}
          className="petal"
          style={{
            width: `${6 + (i % 4) * 3}px`,
            height: `${6 + (i % 4) * 3}px`,
            background: i % 3 === 0 ? 'rgba(201,169,110,0.55)' : 'rgba(249,232,232,0.55)',
            left: `${5 + i * 8}%`,
            animationDuration: `${10 + i * 1.4}s`,
            animationDelay: `${i * 0.8}s`,
          }}
        />
      ))}

      {/* ── MAIN CONTENT ── */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 space-y-6">

        {/* Calligraphic Eyebrow with delicate gold rules */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.1 }}
          className="flex items-center justify-center gap-3 sm:gap-6"
        >
          <div className="hidden sm:block w-12 sm:w-24 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]/80" />
          <span
            className="font-['Great_Vibes'] text-4xl sm:text-5xl md:text-6xl font-normal block leading-tight tracking-wide text-[#F5EDD8]"
            style={{
              textShadow: '0 2px 12px rgba(0,0,0,0.95), 0 0 20px rgba(212,175,55,0.4)',
              filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.95))',
            }}
          >
            Dubai's Finest Wedding Atelier
          </span>
          <div className="hidden sm:block w-12 sm:w-24 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]/80" />
        </motion.div>

        {/* Main Royal Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.22 }}
          className="font-['Cormorant_Garamond'] text-4xl sm:text-6xl md:text-[76px] font-normal tracking-tight leading-[1.08] max-w-4xl mx-auto"
        >
          <span
            className="block font-['Cormorant_Garamond'] font-medium text-3xl sm:text-5xl md:text-[62px] pb-1"
            style={{
              background: 'linear-gradient(90deg, #FFFFFF 0%, #F5EDD8 35%, #D4AF37 70%, #FFFDF7 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 4px 22px rgba(0,0,0,0.95))',
            }}
          >
            Crafting Unforgettable
          </span>
          <span
            className="font-['Cormorant_Garamond'] italic font-normal block text-4xl sm:text-6xl md:text-[78px]"
            style={{
              background: 'linear-gradient(90deg, #FFFFFF 0%, #F5EDD8 35%, #D4AF37 70%, #FFFDF7 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 4px 22px rgba(0,0,0,0.95))',
            }}
          >
            Love Stories in Dubai.
          </span>
        </motion.h1>


        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.48 }}
          className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Gold gradient primary CTA */}
          <button
            onClick={onOpenEnquiry}
            className="group relative px-9 py-3.5 rounded-full font-sans text-xs font-bold uppercase tracking-wider cursor-pointer shadow-2xl overflow-hidden transition-all duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #D4AF37 0%, #F3E5AB 50%, #C9A96E 100%)',
              color: '#121019',
              boxShadow: '0 8px 30px rgba(212,175,55,0.4)',
            }}
          >
            <span className="relative z-10">Plan My Dubai Wedding</span>
            <div className="absolute inset-0 bg-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

          {/* White outlined pill */}
          <button
            onClick={onExploreWork}
            className="px-9 py-3.5 bg-black/40 backdrop-blur-md border border-white/70 text-white hover:bg-white/20 rounded-full transition-all duration-300 font-sans text-xs font-semibold uppercase tracking-wider cursor-pointer shadow-xl"
            style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}
          >
            View Our Work
          </button>
        </motion.div>


      </div>

      {/* ── BOTTOM GOLD DIVIDER LINE ── */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] z-10"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(201,169,110,0.6) 30%, rgba(201,169,110,0.9) 50%, rgba(201,169,110,0.6) 70%, transparent)'
        }}
      />
    </section>
  );
};
