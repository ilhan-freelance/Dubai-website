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

  const project = PORTFOLIO_PROJECTS[activeIdx];

  const prevIdx = (activeIdx - 1 + PORTFOLIO_PROJECTS.length) % PORTFOLIO_PROJECTS.length;
  const nextIdx = (activeIdx + 1) % PORTFOLIO_PROJECTS.length;

  const handlePrev = () => {
    setActiveIdx(prevIdx);
  };
  
  const handleNext = () => {
    setActiveIdx(nextIdx);
  };

  return (
    <section className="py-8 md:py-12 bg-[#FAF7F2] text-[#212529] relative overflow-hidden px-4 sm:px-6 lg:px-12 border-t border-[#C8C0B5]/30">
      
      {/* Background Watermark Accent */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 opacity-[0.03] pointer-events-none select-none text-center">
        <span className="font-serif text-[100px] sm:text-[150px] md:text-[180px] tracking-[0.2em] uppercase text-[#262822] block leading-none font-light">
          CELEBRATIONS
        </span>
      </div>

      <div className="max-w-6xl mx-auto space-y-6 relative z-10 w-full">
        
        {/* Section Header (Stylish & Grand) */}
        <div className="text-center max-w-3xl mx-auto pb-2">
          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light text-[#262822] tracking-tight leading-tight italic">
            Iconic Dubai Celebrations
          </h2>
        </div>

        {/* 3-Card Carousel Showcase (Larger Grand Scale) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* Left Preview Card */}
          <div className="lg:col-span-3 hidden lg:block relative group cursor-pointer" onClick={handlePrev}>
            <div className="w-full h-[360px] md:h-[400px] rounded-2xl overflow-hidden border border-[#C8C0B5]/40 shadow-lg relative bg-black group-hover:shadow-2xl transition-all duration-300">
              <img
                src={PORTFOLIO_PROJECTS[prevIdx].heroImage}
                alt={PORTFOLIO_PROJECTS[prevIdx].title}
                className="w-full h-full object-cover opacity-70 filter blur-[1.5px] group-hover:opacity-85 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-5 flex flex-col justify-between items-center text-center">
                <span className="text-[10px] tracking-widest text-[#E5D5BC] uppercase font-sans font-semibold">PREVIOUS</span>
                <div className="space-y-1">
                  <h4 className="font-serif text-xl font-light italic text-[#FAF7F2] drop-shadow-md leading-tight">
                    {PORTFOLIO_PROJECTS[prevIdx].title}
                  </h4>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/90 text-[#7A8864] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                  <ChevronLeft className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>

          {/* Main Showcase Card (Center - Enlarged Grand View) */}
          <div className="lg:col-span-6 relative">
            
            {/* Mobile Navigation Arrows */}
            <button
              onClick={handlePrev}
              className="lg:hidden absolute left-2 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white/95 text-[#262822] flex items-center justify-center shadow-md cursor-pointer border border-[#C8C0B5]/40"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5 text-[#7A8864]" />
            </button>
            <button
              onClick={handleNext}
              className="lg:hidden absolute right-2 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white/95 text-[#262822] flex items-center justify-center shadow-md cursor-pointer border border-[#C8C0B5]/40"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5 text-[#7A8864]" />
            </button>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="w-full rounded-3xl overflow-hidden shadow-2xl relative cursor-pointer group border border-[#C8C0B5]/50"
                onClick={() => onSelectProject(project)}
              >
                {/* Front of Card: Subtle Blurred Background Image with Highlighted Couple Name */}
                <div className="w-full h-[480px] sm:h-[540px] md:h-[580px] relative overflow-hidden rounded-3xl bg-[#1E201B]">
                  {/* Subtle Blurred Background Image */}
                  <img
                    src={project.heroImage}
                    alt={project.title}
                    className="w-full h-full object-cover object-center filter blur-[2px] sm:blur-[2px] transition-all duration-700 ease-out"
                  />

                  {/* Dark Elegant Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 group-hover:from-black/80 transition-colors" />

                  {/* Fine Editorial Frame Overlay */}
                  <div className="absolute inset-5 border border-white/30 rounded-2xl pointer-events-none group-hover:border-white/50 transition-colors" />

                  {/* Center Highlighted Couple Name ONLY (No Location, No Subtitle) */}
                  <div className="absolute inset-0 p-8 sm:p-12 flex flex-col items-center justify-center text-center z-10 space-y-4">
                    <span className="text-xs font-sans tracking-[0.3em] uppercase text-[#E5D5BC] font-semibold opacity-90">
                      CELEBRATION STORY
                    </span>
                    <h3 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal text-white tracking-wide italic leading-tight drop-shadow-[0_10px_25px_rgba(0,0,0,0.9)] bg-gradient-to-r from-white via-[#F5E6C8] to-[#E5D5BC] bg-clip-text text-transparent">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Preview Card */}
          <div className="lg:col-span-3 hidden lg:block relative group cursor-pointer" onClick={handleNext}>
            <div className="w-full h-[360px] md:h-[400px] rounded-2xl overflow-hidden border border-[#C8C0B5]/40 shadow-lg relative bg-black group-hover:shadow-2xl transition-all duration-300">
              <img
                src={PORTFOLIO_PROJECTS[nextIdx].heroImage}
                alt={PORTFOLIO_PROJECTS[nextIdx].title}
                className="w-full h-full object-cover opacity-70 filter blur-[1.5px] group-hover:opacity-85 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-5 flex flex-col justify-between items-center text-center">
                <span className="text-[10px] tracking-widest text-[#E5D5BC] uppercase font-sans font-semibold">NEXT</span>
                <div className="space-y-1">
                  <h4 className="font-serif text-xl font-light italic text-[#FAF7F2] drop-shadow-md leading-tight">
                    {PORTFOLIO_PROJECTS[nextIdx].title}
                  </h4>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/90 text-[#7A8864] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                  <ChevronRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};


