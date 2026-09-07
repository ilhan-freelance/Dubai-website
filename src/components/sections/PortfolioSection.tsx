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
    <section className="py-24 md:py-36 bg-[#FAF8F6] text-[#2A2226] relative overflow-hidden px-6">
      
      {/* Side Decorative Botanical Leaf Branch Watermarks (Matching Reference Image) */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 opacity-25 pointer-events-none hidden lg:block -ml-8">
        <svg className="w-64 h-[500px] text-[#C48292]" viewBox="0 0 160 300" fill="currentColor">
          <path d="M10 280 Q 70 150 140 20" stroke="currentColor" strokeWidth="2.5" fill="none" />
          <path d="M40 220 Q 15 200 10 185 Q 35 190 40 220 Z" />
          <path d="M60 180 Q 90 160 95 145 Q 70 150 60 180 Z" />
          <path d="M80 140 Q 55 120 50 105 Q 75 110 80 140 Z" />
          <path d="M100 100 Q 130 80 135 65 Q 110 70 100 100 Z" />
          <path d="M120 60 Q 95 40 90 25 Q 115 30 120 60 Z" />
        </svg>
      </div>
      <div className="absolute top-1/2 right-0 -translate-y-1/2 opacity-25 pointer-events-none hidden lg:block -mr-8 scale-x-[-1]">
        <svg className="w-64 h-[500px] text-[#C48292]" viewBox="0 0 160 300" fill="currentColor">
          <path d="M10 280 Q 70 150 140 20" stroke="currentColor" strokeWidth="2.5" fill="none" />
          <path d="M40 220 Q 15 200 10 185 Q 35 190 40 220 Z" />
          <path d="M60 180 Q 90 160 95 145 Q 70 150 60 180 Z" />
          <path d="M80 140 Q 55 120 50 105 Q 75 110 80 140 Z" />
          <path d="M100 100 Q 130 80 135 65 Q 110 70 100 100 Z" />
          <path d="M120 60 Q 95 40 90 25 Q 115 30 120 60 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto space-y-14 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="font-['Great_Vibes'] text-4xl sm:text-5xl text-[#944C5E] block leading-none">
            Our Portfolio
          </span>
          <h2 className="font-['Playfair_Display'] text-3xl sm:text-5xl font-normal text-[#2A2226] tracking-tight">
            Visualizing Your Dreams Into Reality
          </h2>
          <p className="text-xs sm:text-sm text-[#2A2226]/80 font-sans leading-relaxed">
            Take a look into our portfolio of extraordinary celebrations in Dubai. Each event is a masterclass in romance, high-fashion styling, and precision.
          </p>
        </div>

        {/* 3-Card Carousel Gallery (Left, Center Featured, Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* Left Preview Card */}
          <div className="lg:col-span-3 hidden lg:block relative group cursor-pointer" onClick={handlePrev}>
            <div className="w-full aspect-3/4 rounded-3xl overflow-hidden border-2 border-white shadow-md relative opacity-70 group-hover:opacity-100 transition-all duration-500">
              <img
                src={PORTFOLIO_PROJECTS[prevIdx].heroImage}
                alt={PORTFOLIO_PROJECTS[prevIdx].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <button
                  onClick={handlePrev}
                  className="w-12 h-12 rounded-full bg-white/90 text-[#944C5E] flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer"
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-6 h-6" />
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
                className="w-full aspect-16/11 sm:aspect-16/10 rounded-3xl overflow-hidden border-4 border-white shadow-2xl relative group cursor-pointer"
              >
                <img
                  src={PORTFOLIO_PROJECTS[activeIdx].heroImage}
                  alt={PORTFOLIO_PROJECTS[activeIdx].title}
                  className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                  <span className="text-[10px] font-sans uppercase tracking-widest text-[#EBD3D7] font-semibold">
                    {PORTFOLIO_PROJECTS[activeIdx].location} · {PORTFOLIO_PROJECTS[activeIdx].category}
                  </span>
                  <h3 className="font-['Playfair_Display'] text-2xl sm:text-4xl font-normal text-white">
                    {PORTFOLIO_PROJECTS[activeIdx].title}
                  </h3>
                  <p className="text-xs text-white/80 font-serif italic line-clamp-1">
                    {PORTFOLIO_PROJECTS[activeIdx].subtitle}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Mobile Nav Controls */}
            <div className="flex lg:hidden justify-center items-center gap-4 mt-6">
              <button
                onClick={handlePrev}
                className="p-3 rounded-full bg-[#944C5E] text-white cursor-pointer shadow-md"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="text-xs font-sans font-medium text-[#2A2226]">
                {activeIdx + 1} / {PORTFOLIO_PROJECTS.length}
              </span>
              <button
                onClick={handleNext}
                className="p-3 rounded-full bg-[#944C5E] text-white cursor-pointer shadow-md"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right Preview Card */}
          <div className="lg:col-span-3 hidden lg:block relative group cursor-pointer" onClick={handleNext}>
            <div className="w-full aspect-3/4 rounded-3xl overflow-hidden border-2 border-white shadow-md relative opacity-70 group-hover:opacity-100 transition-all duration-500">
              <img
                src={PORTFOLIO_PROJECTS[nextIdx].heroImage}
                alt={PORTFOLIO_PROJECTS[nextIdx].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <button
                  onClick={handleNext}
                  className="w-12 h-12 rounded-full bg-white/90 text-[#944C5E] flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer"
                  aria-label="Next"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
