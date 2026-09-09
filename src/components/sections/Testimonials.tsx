import React, { useState, useEffect } from 'react';
import { TESTIMONIALS_DATA } from '../../data/testimonialsData';
import { WALL_PHOTOS } from '../../data/wallPhotosData';
import { ChevronLeft, ChevronRight, Star, Heart, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedSection } from '../common/AnimatedSection';

const LOCAL_FALLBACKS = [
  '/portfolio-dubai.png',
  '/about-couple-arch.png',
  '/portfolio-desert.png',
  '/portfolio-garden.png',
  '/about-bridesmaids.png',
  '/portfolio-dance.png',
  '/portfolio-rings.png',
  '/about-groom.png',
  '/about-couple-laugh.png',
  '/hero-aisle.png',
  '/service-planning.png',
  '/service-coordination.png',
  '/service-day-of.png',
  '/hero_about_atelier.png',
  '/hero_testimonials_trust.png'
];

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const activeTestimonial = TESTIMONIALS_DATA[activeIndex];

  // Automatic motion animation transition every 5 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  // Helper for image load error fallback
  const handleBgImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>, idx: number) => {
    e.currentTarget.onerror = null;
    e.currentTarget.src = LOCAL_FALLBACKS[idx % LOCAL_FALLBACKS.length];
  };

  // Slice unique photos for each multi-row marquee line (15 unique photos per row x 2 duplicates = 30 per row)
  const row1 = [...WALL_PHOTOS.slice(0, 15), ...WALL_PHOTOS.slice(0, 15)];
  const row2 = [...WALL_PHOTOS.slice(15, 30), ...WALL_PHOTOS.slice(15, 30)];
  const row3 = [...WALL_PHOTOS.slice(30, 45), ...WALL_PHOTOS.slice(30, 45)];
  const row4 = [...WALL_PHOTOS.slice(45, 58), ...WALL_PHOTOS.slice(45, 58)];

  return (
    <section className="bg-[#121417] text-white py-12 md:py-16 relative overflow-hidden border-t border-[#C9A96E]/20 flex items-center justify-center min-h-[85vh]">
      
      {/* ── BACKGROUND: 100+ UNIQUE WEDDING PHOTOS MULTI-ROW MARQUEE WALL ── */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-30 select-none space-y-2.5 -rotate-2 scale-110">
        
        {/* Row 1 - Left */}
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 40, ease: 'linear', repeat: Infinity }}
          className="flex space-x-2.5 w-max"
        >
          {row1.map((imgSrc, idx) => (
            <div key={`r1-${idx}`} className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden border border-white/20 shrink-0 bg-[#1A1D22]">
              <img
                src={imgSrc}
                alt=""
                onError={(e) => handleBgImgError(e, idx)}
                className="w-full h-full object-cover filter brightness-90 contrast-110"
              />
            </div>
          ))}
        </motion.div>

        {/* Row 2 - Right */}
        <motion.div
          animate={{ x: ['-50%', '0%'] }}
          transition={{ duration: 48, ease: 'linear', repeat: Infinity }}
          className="flex space-x-2.5 w-max"
        >
          {row2.map((imgSrc, idx) => (
            <div key={`r2-${idx}`} className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden border border-white/20 shrink-0 bg-[#1A1D22]">
              <img
                src={imgSrc}
                alt=""
                onError={(e) => handleBgImgError(e, idx + 15)}
                className="w-full h-full object-cover filter brightness-90 contrast-110"
              />
            </div>
          ))}
        </motion.div>

        {/* Row 3 - Left */}
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 38, ease: 'linear', repeat: Infinity }}
          className="flex space-x-2.5 w-max"
        >
          {row3.map((imgSrc, idx) => (
            <div key={`r3-${idx}`} className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden border border-white/20 shrink-0 bg-[#1A1D22]">
              <img
                src={imgSrc}
                alt=""
                onError={(e) => handleBgImgError(e, idx + 30)}
                className="w-full h-full object-cover filter brightness-90 contrast-110"
              />
            </div>
          ))}
        </motion.div>

        {/* Row 4 - Right */}
        <motion.div
          animate={{ x: ['-50%', '0%'] }}
          transition={{ duration: 52, ease: 'linear', repeat: Infinity }}
          className="flex space-x-2.5 w-max"
        >
          {row4.map((imgSrc, idx) => (
            <div key={`r4-${idx}`} className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden border border-white/20 shrink-0 bg-[#1A1D22]">
              <img
                src={imgSrc}
                alt=""
                onError={(e) => handleBgImgError(e, idx + 45)}
                className="w-full h-full object-cover filter brightness-90 contrast-110"
              />
            </div>
          ))}
        </motion.div>

      </div>

      {/* Dark Vignette Gradient Overlay for Crisp Text Contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#121417]/90 via-[#121417]/80 to-[#121417]/95 z-0 pointer-events-none" />
      
      {/* Warm Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#C9A96E]/15 rounded-full blur-[160px] pointer-events-none z-0" />

      {/* ── ONE FRAME WRAPPER ── */}
      <div className="max-w-5xl mx-auto px-6 md:px-10 relative z-10 w-full space-y-6">
        
        {/* Header */}
        <AnimatedSection direction="up">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 text-[#C9A96E]">
              <div className="w-8 h-[1px] bg-[#C9A96E]" />
              <span className="text-[11px] font-sans font-semibold tracking-[0.25em] uppercase text-[#E8D4A8]">
                LOVE STORIES &amp; CELEBRATIONS
              </span>
              <div className="w-8 h-[1px] bg-[#C9A96E]" />
            </div>

            <h2 className="font-['Playfair_Display'] text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
              Words of Love from Our Couples
            </h2>
          </div>
        </AnimatedSection>

        {/* ── AUTOMATIC BEAUTIFUL MOTION CARD ── */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial.id}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#1A1D22]/95 backdrop-blur-xl rounded-3xl p-6 sm:p-10 md:p-12 border border-[#C9A96E]/40 shadow-2xl relative grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-center gold-border-glow"
            >
              
              {/* Animated Progress Line */}
              <motion.div
                key={`prog-${activeTestimonial.id}`}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: isPaused ? 0 : 1 }}
                transition={{ duration: 5, ease: 'linear' }}
                className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C9A96E] via-[#E8D4A8] to-[#9E7B45] origin-left rounded-t-3xl z-20"
              />

              {/* ── LEFT SIDE: WEDDING PHOTO + COUPLE NAME & VENUE ── */}
              <div className="md:col-span-5 flex flex-col items-center text-center space-y-3">
                <div className="relative w-48 sm:w-56 aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-2 border-[#C9A96E]/40 group">
                  <motion.img
                    initial={{ scale: 1.08 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8 }}
                    src={activeTestimonial.image}
                    alt={activeTestimonial.clientNames}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

                  {/* Heart Icon Badge */}
                  <div className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md text-[#E8D4A8] flex items-center justify-center shadow-md border border-[#C9A96E]/40">
                    <Heart className="w-3.5 h-3.5 fill-[#E8D4A8]" />
                  </div>
                </div>

                {/* Couple Name & Wedding Location */}
                <div className="space-y-0.5">
                  <h3 className="font-['Great_Vibes'] text-3xl sm:text-4xl text-[#E8D4A8] leading-none font-normal">
                    {activeTestimonial.clientNames}
                  </h3>
                  <p className="text-[11px] font-sans font-semibold text-[#C9A96E] tracking-wider uppercase pt-1">
                    {activeTestimonial.eventType}
                  </p>
                  <span className="text-[10px] font-sans text-white/70 font-normal block">
                    {activeTestimonial.location} · {activeTestimonial.year}
                  </span>
                </div>
              </div>

              {/* ── RIGHT SIDE: REVIEWS & MOTION CONTROLS ── */}
              <div className="md:col-span-7 space-y-5">
                
                {/* 5-Star Rating */}
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1">
                    {[...Array(activeTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                    ))}
                  </div>
                  <span className="text-[10px] font-sans font-semibold text-[#E8D4A8] tracking-widest uppercase ml-2 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-[#C9A96E]" />
                    VERIFIED WEDDING REVIEW
                  </span>
                </div>

                {/* Review Quote Text */}
                <p className="font-['Playfair_Display'] text-xl sm:text-2xl lg:text-3xl font-normal leading-relaxed text-[#FAF8F5] tracking-tight italic">
                  “{activeTestimonial.quote}”
                </p>

                {/* Controls & Slide Counter */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-sans font-semibold text-[#E8D4A8] tracking-wider uppercase">
                    Story {activeIndex + 1} of {TESTIMONIALS_DATA.length}
                  </span>

                  <div className="flex items-center space-x-3">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handlePrev}
                      className="w-10 h-10 rounded-full border border-[#C9A96E]/40 text-[#E8D4A8] hover:bg-[#C9A96E] hover:text-[#111] transition-all cursor-pointer shadow-md flex items-center justify-center"
                      aria-label="Previous story"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleNext}
                      className="w-10 h-10 rounded-full border border-[#C9A96E]/40 text-[#E8D4A8] hover:bg-[#C9A96E] hover:text-[#111] transition-all cursor-pointer shadow-md flex items-center justify-center"
                      aria-label="Next story"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </motion.button>
                  </div>
                </div>

              </div>

            </motion.div>
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
};
