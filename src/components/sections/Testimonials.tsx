import React, { useState } from 'react';
import { TESTIMONIALS_DATA } from '../../data/testimonialsData';
import { ChevronLeft, ChevronRight, Quote, Star, Diamond } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedSection } from '../common/AnimatedSection';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const activeTestimonial = TESTIMONIALS_DATA[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  return (
    <section className="bg-[#1C1A2E] text-white py-32 md:py-48 relative overflow-hidden border-t border-[#C9A96E]/30">
      
      {/* Glow Backlight Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#C9A96E]/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#F9E8E8]/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Decorative Gold Side Accent Lines */}
      <div className="absolute top-0 bottom-0 left-8 w-px bg-gradient-to-b from-transparent via-[#C9A96E]/30 to-transparent hidden lg:block" />
      <div className="absolute top-0 bottom-0 right-8 w-px bg-gradient-to-b from-transparent via-[#C9A96E]/30 to-transparent hidden lg:block" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center space-y-12 relative z-10">
        
        {/* Header */}
        <AnimatedSection direction="up">
          <div className="space-y-4">
            <div className="inline-flex items-center space-x-2 bg-[#2A2840] px-4 py-1.5 rounded-full border border-[#C9A96E]/40">
              <Diamond className="w-3.5 h-3.5 text-[#C9A96E] fill-[#C9A96E]" />
              <span className="text-[11px] font-sans font-semibold text-[#E8D4A8] tracking-[0.3em] uppercase">
                LOVE STORIES & CLIENT REVIEWS
              </span>
            </div>
            
            <div className="flex justify-center space-x-1 pt-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#C9A96E] text-[#C9A96E]" />
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Large Quote Container with Animation */}
        <div className="min-h-[260px] flex items-center justify-center relative px-4">
          <Quote className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-24 text-[#C9A96E]/10 pointer-events-none" />
          
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={activeTestimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-8 relative z-10"
            >
              <p className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-relaxed text-[#FAF8F5] max-w-4xl mx-auto tracking-tight">
                “{activeTestimonial.quote}”
              </p>

              <div className="pt-2 space-y-2">
                <cite className="not-italic font-serif text-2xl bg-gradient-to-r from-[#E8D4A8] via-[#F9E8E8] to-[#C9A96E] bg-clip-text text-transparent font-medium block">
                  — {activeTestimonial.clientNames}
                </cite>
                <div className="flex items-center justify-center space-x-3 text-xs uppercase tracking-[0.25em] text-[#E8D4A8]/80 font-sans font-light">
                  <span>{activeTestimonial.eventType}</span>
                  <span className="text-[#C9A96E]">·</span>
                  <span>{activeTestimonial.location}</span>
                </div>
              </div>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        {/* Carousel Controls */}
        <div className="flex items-center justify-center space-x-6 pt-4">
          <button
            onClick={handlePrev}
            className="p-3.5 border border-[#C9A96E]/40 text-[#E8D4A8] rounded-full hover:border-[#C9A96E] hover:bg-[#C9A96E]/20 transition-all cursor-pointer group"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </button>

          <div className="flex space-x-2.5 items-center">
            {TESTIMONIALS_DATA.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${
                  idx === currentIndex 
                    ? 'w-10 bg-gradient-to-r from-[#C9A96E] to-[#E8D4A8]' 
                    : 'w-2 bg-[#2A2840] hover:bg-[#C9A96E]/50'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-3.5 border border-[#C9A96E]/40 text-[#E8D4A8] rounded-full hover:border-[#C9A96E] hover:bg-[#C9A96E]/20 transition-all cursor-pointer group"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};
