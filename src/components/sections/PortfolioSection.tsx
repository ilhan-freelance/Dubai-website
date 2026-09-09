import React, { useState } from 'react';
import { PORTFOLIO_PROJECTS } from '../../data/portfolioData';
import type { PortfolioProject } from '../../data/portfolioData';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface PortfolioSectionProps {
  onSelectProject: (project: PortfolioProject) => void;
  onViewAll?: () => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onSelectProject }) => {
  const [activeIdx, setActiveIdx] = useState(0);

  const prevIdx = (activeIdx - 1 + PORTFOLIO_PROJECTS.length) % PORTFOLIO_PROJECTS.length;
  const nextIdx = (activeIdx + 1) % PORTFOLIO_PROJECTS.length;

  const handlePrev = () => setActiveIdx(prevIdx);
  const handleNext = () => setActiveIdx(nextIdx);

  return (
    <section className="py-12 md:py-16 lg:min-h-[85vh] bg-white text-[#212529] relative overflow-hidden px-6 border-t border-gray-100 flex items-center">
      
      {/* Side Decorative Botanical Leaf Branch Watermarks in Sage Green */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 opacity-20 pointer-events-none hidden lg:block -ml-8">
        <svg className="w-56 h-[400px] text-[#8DA999]" viewBox="0 0 160 300" fill="currentColor">
          <path d="M10 280 Q 70 150 140 20" stroke="currentColor" strokeWidth="2.5" fill="none" />
          <path d="M40 220 Q 15 200 10 185 Q 35 190 40 220 Z" />
          <path d="M60 180 Q 90 160 95 145 Q 70 150 60 180 Z" />
          <path d="M80 140 Q 55 120 50 105 Q 75 110 80 140 Z" />
          <path d="M100 100 Q 130 80 135 65 Q 110 70 100 100 Z" />
          <path d="M120 60 Q 95 40 90 25 Q 115 30 120 60 Z" />
        </svg>
      </div>
      <div className="absolute top-1/2 right-0 -translate-y-1/2 opacity-20 pointer-events-none hidden lg:block -mr-8 scale-x-[-1]">
        <svg className="w-56 h-[400px] text-[#8DA999]" viewBox="0 0 160 300" fill="currentColor">
          <path d="M10 280 Q 70 150 140 20" stroke="currentColor" strokeWidth="2.5" fill="none" />
          <path d="M40 220 Q 15 200 10 185 Q 35 190 40 220 Z" />
          <path d="M60 180 Q 90 160 95 145 Q 70 150 60 180 Z" />
          <path d="M80 140 Q 55 120 50 105 Q 75 110 80 140 Z" />
          <path d="M100 100 Q 130 80 135 65 Q 110 70 100 100 Z" />
          <path d="M120 60 Q 95 40 90 25 Q 115 30 120 60 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto space-y-10 relative z-10 w-full">
        
        {/* Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="text-xs sm:text-sm font-sans font-semibold tracking-[0.3em] uppercase text-[#4A6B5B] block">
            FEATURED CASE STUDIES
          </span>
          <h2 className="font-['Playfair_Display'] text-4xl sm:text-6xl font-normal text-[#212529] tracking-tight leading-tight">
            Iconic Dubai Celebrations
          </h2>
          <p className="text-xs sm:text-sm text-[#212529]/75 font-sans leading-relaxed">
            Explore complete event narratives — from venue transformations to bespoke guest experiences across Dubai's most prestigious landmarks.
          </p>
        </div>

        {/* 3-Card Carousel Gallery (Left, Center Featured, Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
          
          {/* Left Preview Card */}
          <div className="lg:col-span-3 hidden lg:block relative group cursor-pointer" onClick={handlePrev}>
            <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden border border-gray-200 shadow-sm relative opacity-70 group-hover:opacity-100 transition-all duration-500">
              <img
                src={PORTFOLIO_PROJECTS[prevIdx].heroImage}
                alt={PORTFOLIO_PROJECTS[prevIdx].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full bg-white/90 text-[#4A6B5B] flex items-center justify-center shadow-md hover:scale-110 transition-transform cursor-pointer"
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Center Featured Card */}
          <div className="lg:col-span-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6 }}
                onClick={() => onSelectProject(PORTFOLIO_PROJECTS[activeIdx])}
                className="w-full aspect-[16/10] rounded-2xl overflow-hidden border-2 border-white shadow-xl relative group cursor-pointer"
              >
                <img
                  src={PORTFOLIO_PROJECTS[activeIdx].heroImage}
                  alt={PORTFOLIO_PROJECTS[activeIdx].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-5 left-5 right-5 text-white space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-sans uppercase tracking-widest text-white font-semibold bg-[#3B5649]/90 px-3 py-0.5 rounded-full backdrop-blur-md inline-block">
                      {PORTFOLIO_PROJECTS[activeIdx].location} · {PORTFOLIO_PROJECTS[activeIdx].category}
                    </span>
                    <span className="text-[9px] font-sans uppercase tracking-wider text-[#E8D4A8] bg-black/40 px-2.5 py-0.5 rounded-full backdrop-blur-md hidden sm:inline-block border border-[#E8D4A8]/30">
                      Read Full Story →
                    </span>
                  </div>
                  <h3 className="font-['Playfair_Display'] text-xl sm:text-3xl font-normal text-white">
                    {PORTFOLIO_PROJECTS[activeIdx].title}
                  </h3>
                  <p className="text-xs text-white/80 font-serif italic line-clamp-1">
                    {PORTFOLIO_PROJECTS[activeIdx].subtitle}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Mobile Nav Controls */}
            <div className="flex lg:hidden justify-center items-center gap-4 mt-4">
              <button
                onClick={handlePrev}
                className="p-2.5 rounded-full bg-[#3B5649] text-white cursor-pointer shadow-sm"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-xs font-sans font-medium text-[#212529]">
                {activeIdx + 1} / {PORTFOLIO_PROJECTS.length}
              </span>
              <button
                onClick={handleNext}
                className="p-2.5 rounded-full bg-[#3B5649] text-white cursor-pointer shadow-sm"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Preview Card */}
          <div className="lg:col-span-3 hidden lg:block relative group cursor-pointer" onClick={handleNext}>
            <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden border border-gray-200 shadow-sm relative opacity-70 group-hover:opacity-100 transition-all duration-500">
              <img
                src={PORTFOLIO_PROJECTS[nextIdx].heroImage}
                alt={PORTFOLIO_PROJECTS[nextIdx].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <button
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full bg-white/90 text-[#4A6B5B] flex items-center justify-center shadow-md hover:scale-110 transition-transform cursor-pointer"
                  aria-label="Next"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
