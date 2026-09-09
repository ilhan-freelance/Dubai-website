import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, Sparkles, Quote } from 'lucide-react';
import { AnimatedSection } from '../common/AnimatedSection';

interface FounderStorySectionProps {
  onOpenEnquiry?: () => void;
}

export const FounderStorySection: React.FC<FounderStorySectionProps> = ({ onOpenEnquiry }) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="py-12 md:py-16 lg:min-h-[85vh] bg-[#FAF8F6] text-[#212529] relative overflow-hidden px-6 border-t border-gray-200 flex items-center">
      
      {/* Background Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none opacity-[0.025] w-full text-center">
        <span className="font-display text-[140px] md:text-[220px] tracking-[0.18em] uppercase text-[#212529] block leading-none font-light">
          FOUNDERS
        </span>
      </div>

      <div className="max-w-7xl mx-auto space-y-10 relative z-10 w-full">
        
        {/* Header */}
        <AnimatedSection direction="up">
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-2 text-[#C9A96E]">
              <div className="w-8 h-[1px] bg-[#C9A96E]" />
              <span className="text-xs font-sans font-semibold tracking-[0.25em] uppercase">
                THE FOUNDERS' STORY
              </span>
              <div className="w-8 h-[1px] bg-[#C9A96E]" />
            </div>

            <h2 className="font-['Playfair_Display'] text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] tracking-tight leading-tight">
              Architects of Romance
            </h2>
          </div>
        </AnimatedSection>

        {/* Main Grid: Left Video Player Placeholder | Right Editorial Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Video Player Placeholder Card (7 cols) */}
          <div className="lg:col-span-7">
            <AnimatedSection direction="right">
              <div
                onClick={() => setIsVideoOpen(true)}
                className="w-full aspect-16/9 rounded-2xl overflow-hidden border-2 border-white shadow-xl relative group cursor-pointer bg-gray-900"
              >
                {/* Background Poster Image */}
                <img
                  src="/hero_about_atelier.png"
                  alt="Love Details Founders Story Video"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                />

                {/* Gradient Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />

                {/* Glowing Play Button Center */}
                <div className="absolute inset-0 flex flex-col items-center justify-center space-y-3">
                  <div className="relative flex items-center justify-center">
                    <span className="animate-ping absolute inline-flex h-16 w-16 rounded-full bg-[#C9A96E] opacity-50"></span>
                    
                    <button
                      aria-label="Play Founders Story Video"
                      className="w-16 h-16 rounded-full bg-white/95 text-[#1F382B] flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform cursor-pointer border border-[#C9A96E] z-10"
                    >
                      <Play className="w-6 h-6 fill-[#1F382B] ml-1" />
                    </button>
                  </div>

                  <div className="text-center space-y-0.5">
                    <span className="text-[11px] uppercase tracking-[0.2em] text-[#E8D4A8] font-semibold font-sans block">
                      FOUNDERS' FILM
                    </span>
                    <span className="text-[10px] text-white/70 font-serif italic block">
                      3 Min · Behind The Atelier Vision
                    </span>
                  </div>
                </div>

                {/* Bottom Tag */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-[11px] font-serif italic z-10">
                  <span className="bg-black/60 backdrop-blur-md px-3.5 py-1 rounded-full border border-white/20">
                    Dubai Atelier
                  </span>
                  <div className="flex items-center space-x-1 text-[#E8D4A8]">
                    <Sparkles className="w-3 h-3 text-[#C9A96E]" />
                    <span>Couture Direction</span>
                  </div>
                </div>

              </div>
            </AnimatedSection>
          </div>

          {/* Right: Founder Quote & Ethos (5 cols) */}
          <div className="lg:col-span-5">
            <AnimatedSection direction="left">
              <div className="space-y-4 bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm relative">
                <Quote className="w-10 h-10 text-[#C9A96E]/20 absolute top-5 right-5" />

                <div className="space-y-1.5">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#4A6B5B] font-semibold font-sans block">
                    FOUNDERS' STATEMENT
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#212529] leading-snug">
                    “We don't just organize events; we design emotional sanctuaries.”
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-[#212529]/80 font-sans leading-relaxed font-light">
                  Love Details was born out of a shared passion for high-fashion architecture and quiet luxury. We recognized that Dubai’s most discerning couples were seeking celebrations that felt authentic, understated, and intensely personal.
                </p>

                {/* Founder Monogram Signature */}
                <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <span className="font-['Great_Vibes'] text-2xl text-[#C9A96E] block leading-none">
                      Love Details Founders
                    </span>
                    <span className="text-[9px] uppercase tracking-widest text-[#4A6B5B] font-sans font-semibold mt-1 block">
                      Creative Directors
                    </span>
                  </div>

                  {onOpenEnquiry && (
                    <button
                      onClick={onOpenEnquiry}
                      className="px-4 py-1.5 bg-[#3B5649] hover:bg-[#2A3E34] text-white rounded-full text-[11px] font-semibold uppercase tracking-wider transition-all cursor-pointer shadow-xs"
                    >
                      Inquire
                    </button>
                  )}
                </div>

              </div>
            </AnimatedSection>
          </div>

        </div>

      </div>

      {/* ── VIDEO MODAL POPUP ── */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
            onClick={() => setIsVideoOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl aspect-16/9 bg-black rounded-3xl overflow-hidden shadow-2xl border border-[#C9A96E]/40"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-4 right-4 z-20 w-11 h-11 rounded-full bg-black/70 text-white flex items-center justify-center border border-white/30 hover:bg-white hover:text-black transition-all cursor-pointer"
                aria-label="Close video"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Video Player */}
              <video
                autoPlay
                controls
                className="w-full h-full object-cover"
              >
                <source src="/hero-video.mp4" type="video/mp4" />
                Your browser does not support video playback.
              </video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};
