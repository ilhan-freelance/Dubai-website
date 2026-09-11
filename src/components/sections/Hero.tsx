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

  return (
    <section ref={scrollRef} className="relative w-full min-h-screen flex flex-col justify-center items-center text-center overflow-hidden">

      {/* ── BACKGROUND: Dubai luxury wedding video ── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
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
        {/* Light cinematic gradient overlay for bright, vibrant video & readable text */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/15 to-black/50" />
        {/* Subtle bottom vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
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
      <div className="relative z-10 max-w-5xl mx-auto px-6 space-y-8 pt-16 sm:pt-24 md:pt-32">

        {/* Cursive Single Line Headline in White */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.1 }}
          className="flex items-center justify-center gap-2 sm:gap-5 w-full overflow-hidden"
        >
          <div className="hidden sm:block w-8 sm:w-20 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-white/90 shrink-0" />
          <span
            className="font-['Great_Vibes'] text-2xl sm:text-4xl md:text-5xl font-normal text-white whitespace-nowrap drop-shadow-xl tracking-wide leading-none py-1"
            style={{ textShadow: '0 2px 14px rgba(0,0,0,0.95)' }}
          >
            Dubai's Premier Luxury Wedding Atelier
          </span>
          <div className="hidden sm:block w-8 sm:w-20 h-[1px] bg-gradient-to-l from-transparent via-white/50 to-white/90 shrink-0" />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={onOpenEnquiry}
            className="group relative px-9 py-3.5 rounded-full font-sans text-xs font-bold uppercase tracking-wider cursor-pointer shadow-2xl overflow-hidden transition-all duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #D4AF37 0%, #E8D4A8 50%, #C9A96E 100%)',
              color: '#121019',
              boxShadow: '0 8px 25px rgba(212, 175, 55, 0.35)',
            }}
          >
            <span className="relative z-10">Plan My Dubai Wedding</span>
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
