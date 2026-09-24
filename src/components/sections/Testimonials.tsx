import React, { useState, useEffect } from 'react';
import { TESTIMONIALS_DATA } from '../../data/testimonialsData';
import { WALL_PHOTOS } from '../../data/wallPhotosData';
import { ChevronLeft, ChevronRight } from 'lucide-react';
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
  '/about-couple-laugh.png'
];

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const activeTestimonial = TESTIMONIALS_DATA[activeIndex];

  // Automatic motion animation transition every 6 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
    }, 6000);
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

  // Multi-row marquee photo tracks
  const row1 = [...WALL_PHOTOS.slice(0, 15), ...WALL_PHOTOS.slice(0, 15)];
  const row2 = [...WALL_PHOTOS.slice(15, 30), ...WALL_PHOTOS.slice(15, 30)];
  const row3 = [...WALL_PHOTOS.slice(30, 45), ...WALL_PHOTOS.slice(30, 45)];
  const row4 = [...WALL_PHOTOS.slice(45, 58), ...WALL_PHOTOS.slice(45, 58)];

  return (
    <section className="bg-[#121417] text-white py-6 sm:py-8 md:py-10 relative overflow-hidden border-t border-[#C9A96E]/20 flex items-center justify-center">
      
      {/* ── BACKGROUND: CONTINUOUS MOVING MARQUEE PHOTO WALL ── */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-20 select-none space-y-2 -rotate-2 scale-110">
        
        {/* Row 1 - Moving Left */}
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 40, ease: 'linear', repeat: Infinity }}
          className="flex space-x-2.5 w-max"
        >
          {row1.map((imgSrc, idx) => (
            <div key={`r1-${idx}`} className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border border-white/20 shrink-0 bg-[#1A1D22]">
              <img
                src={imgSrc}
                alt=""
                onError={(e) => handleBgImgError(e, idx)}
                className="w-full h-full object-cover filter brightness-90 contrast-110"
              />
            </div>
          ))}
        </motion.div>

        {/* Row 2 - Moving Right */}
        <motion.div
          animate={{ x: ['-50%', '0%'] }}
          transition={{ duration: 48, ease: 'linear', repeat: Infinity }}
          className="flex space-x-2.5 w-max"
        >
          {row2.map((imgSrc, idx) => (
            <div key={`r2-${idx}`} className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border border-white/20 shrink-0 bg-[#1A1D22]">
              <img
                src={imgSrc}
                alt=""
                onError={(e) => handleBgImgError(e, idx + 15)}
                className="w-full h-full object-cover filter brightness-90 contrast-110"
              />
            </div>
          ))}
        </motion.div>

        {/* Row 3 - Moving Left */}
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 38, ease: 'linear', repeat: Infinity }}
          className="flex space-x-2.5 w-max"
        >
          {row3.map((imgSrc, idx) => (
            <div key={`r3-${idx}`} className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border border-white/20 shrink-0 bg-[#1A1D22]">
              <img
                src={imgSrc}
                alt=""
                onError={(e) => handleBgImgError(e, idx + 30)}
                className="w-full h-full object-cover filter brightness-90 contrast-110"
              />
            </div>
          ))}
        </motion.div>

        {/* Row 4 - Moving Right */}
        <motion.div
          animate={{ x: ['-50%', '0%'] }}
          transition={{ duration: 52, ease: 'linear', repeat: Infinity }}
          className="flex space-x-2.5 w-max"
        >
          {row4.map((imgSrc, idx) => (
            <div key={`r4-${idx}`} className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border border-white/20 shrink-0 bg-[#1A1D22]">
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

      {/* Dark Vignette Overlay for High Contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#121417]/90 via-[#121417]/85 to-[#121417]/95 z-0 pointer-events-none" />
      
      {/* Warm Ambient Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-[#C9A96E]/12 rounded-full blur-[130px] pointer-events-none z-0" />

      {/* ── MAIN CONTENT CONTAINER ── */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10 w-full space-y-4 text-center">
        
        {/* Section Header */}
        <AnimatedSection direction="up">
          <div className="text-center space-y-1 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 text-[#C9A96E]">
              <div className="w-6 h-[1px] bg-[#C9A96E]" />
              <span className="text-[10px] font-sans font-semibold tracking-[0.2em] uppercase text-[#E8D4A8]">
                LOVE STORIES &amp; CELEBRATIONS
              </span>
              <div className="w-6 h-[1px] bg-[#C9A96E]" />
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal text-white tracking-tight leading-snug italic">
              Words of Love from Our Couples
            </h2>
          </div>
        </AnimatedSection>

        {/* ── COMPACT TESTIMONIAL CARD ── */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial.id}
              initial={{ opacity: 0, scale: 0.97, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: -8 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#1A1D22]/90 backdrop-blur-xl rounded-2xl p-4 sm:p-6 md:p-7 border border-[#C9A96E]/40 shadow-xl relative space-y-3.5 flex flex-col items-center justify-center gold-border-glow"
            >
              {/* Animated Progress Line */}
              <motion.div
                key={`prog-${activeTestimonial.id}`}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: isPaused ? 0 : 1 }}
                transition={{ duration: 6, ease: 'linear' }}
                className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C9A96E] via-[#E8D4A8] to-[#9E7B45] origin-left rounded-t-2xl z-20"
              />

              {/* ── TOP CENTER: COUPLE NAME ONLY ── */}
              <div className="text-center">
                <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#E8D4A8] tracking-wide italic leading-none drop-shadow-md">
                  {activeTestimonial.clientNames}
                </h3>
              </div>

              {/* ── CENTER: PUNCHY REVIEWS QUOTE ── */}
              <blockquote className="max-w-xl mx-auto px-2">
                <p className="font-serif text-base sm:text-xl md:text-2xl font-light leading-relaxed text-[#FAF8F5] tracking-tight italic">
                  “{activeTestimonial.quote}”
                </p>
              </blockquote>

              {/* ── BOTTOM: CONTROLS & SLIDE COUNTER ── */}
              <div className="pt-3 border-t border-white/10 w-full flex items-center justify-between text-[11px] text-[#E8D4A8] font-sans">
                <span className="font-semibold tracking-wider uppercase">
                  Story {activeIndex + 1} of {TESTIMONIALS_DATA.length}
                </span>

                <div className="flex items-center space-x-2">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handlePrev}
                    className="w-8 h-8 rounded-full border border-[#C9A96E]/40 text-[#E8D4A8] hover:bg-[#C9A96E] hover:text-[#111] transition-all cursor-pointer shadow-xs flex items-center justify-center"
                    aria-label="Previous story"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleNext}
                    className="w-8 h-8 rounded-full border border-[#C9A96E]/40 text-[#E8D4A8] hover:bg-[#C9A96E] hover:text-[#111] transition-all cursor-pointer shadow-xs flex items-center justify-center"
                    aria-label="Next story"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
