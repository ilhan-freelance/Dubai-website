import React, { useRef } from 'react';
import { PORTFOLIO_PROJECTS } from '../../data/portfolioData';
import type { PortfolioProject } from '../../data/portfolioData';
import { ArrowUpRight, ChevronLeft, ChevronRight, Diamond, Sparkles } from 'lucide-react';
import { AnimatedSection } from '../common/AnimatedSection';
import { motion } from 'framer-motion';

interface HorizontalPortfolioProps {
  onSelectProject: (project: PortfolioProject) => void;
  onViewAll: () => void;
}

export const HorizontalPortfolio: React.FC<HorizontalPortfolioProps> = ({
  onSelectProject,
  onViewAll
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -550 : 550;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-b from-[#FAF8F5] via-[#F9E8E8]/25 to-[#FAF8F5] text-[#262822] py-32 md:py-44 border-t border-[#C9A96E]/20 relative overflow-hidden">
      
      {/* Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#F9E8E8]/60 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#C9A96E]/10 blur-[150px] pointer-events-none rounded-full" />

      {/* Background Watermark */}
      <div className="absolute top-8 left-10 pointer-events-none select-none opacity-[0.03]">
        <span className="font-display text-[180px] md:text-[300px] tracking-[0.15em] uppercase text-[#1C1A2E] block leading-none font-light">
          ARCHIVE
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-16">
        
        {/* Header */}
        <AnimatedSection direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center space-x-2 bg-[#F9E8E8]/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#E8B4B8]/40">
                <Diamond className="w-3.5 h-3.5 text-[#C9A96E] fill-[#C9A96E]" />
                <span className="text-[11px] font-sans font-semibold text-[#1C1A2E] tracking-[0.3em] uppercase">
                  THE VISUAL ARCHIVE
                </span>
              </div>
              <h2 className="font-display text-4xl sm:text-6xl font-normal text-[#1C1A2E] tracking-tight leading-[1.1]">
                Celebrations, <br />
                <span className="italic font-serif bg-gradient-to-r from-[#C9A96E] via-[#D4888F] to-[#9E7B45] bg-clip-text text-transparent">
                  Beautifully Composed.
                </span>
              </h2>
            </div>

            {/* Navigation & Action Controls */}
            <div className="flex items-center space-x-3">
              <button
                onClick={() => scroll('left')}
                className="p-3.5 border border-[#C9A96E]/30 rounded-full hover:border-[#C9A96E] hover:bg-[#C9A96E]/10 transition-all cursor-pointer group"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5 text-[#1C1A2E] group-hover:text-[#C9A96E] transition-colors" />
              </button>
              <button
                onClick={() => scroll('right')}
                className="p-3.5 border border-[#C9A96E]/30 rounded-full hover:border-[#C9A96E] hover:bg-[#C9A96E]/10 transition-all cursor-pointer group"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5 text-[#1C1A2E] group-hover:text-[#C9A96E] transition-colors" />
              </button>
              <button
                onClick={onViewAll}
                className="px-6 py-3.5 bg-gradient-to-r from-[#1C1A2E] to-[#2A2840] text-[#E8D4A8] rounded-full hover:shadow-[0_0_25px_rgba(201,169,110,0.3)] transition-all text-xs font-semibold tracking-widest inline-flex items-center space-x-2.5 ml-3 cursor-pointer border border-[#C9A96E]/40"
              >
                <span>VIEW FULL GALLERY</span>
                <ArrowUpRight className="w-4 h-4 text-[#C9A96E]" />
              </button>
            </div>
          </div>
        </AnimatedSection>

        {/* Horizontal Scroll Gallery */}
        <div
          ref={scrollContainerRef}
          className="flex space-x-8 overflow-x-auto scrollbar-none pb-8 pt-2 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {PORTFOLIO_PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              onClick={() => onSelectProject(project)}
              className="shrink-0 w-[85vw] sm:w-[500px] md:w-[580px] snap-start group cursor-pointer space-y-4"
            >
              <div className="w-full aspect-4/5 md:aspect-16/11 overflow-hidden rounded-2xl border border-[#C9A96E]/20 shadow-2xl relative bg-[#1C1A2E] group-hover:border-[#C9A96E]/60 transition-all duration-500">
                <motion.img
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  src={project.heroImage}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                />
                
                {/* Overlay Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1A2E] via-[#1C1A2E]/30 to-transparent opacity-90 group-hover:opacity-75 transition-opacity" />
                
                {/* Category Pill Tag */}
                <div className="absolute top-6 left-6 bg-[#1C1A2E]/80 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-sans font-semibold text-[#E8D4A8] border border-[#C9A96E]/40 uppercase tracking-widest flex items-center space-x-2">
                  <Sparkles className="w-3 h-3 text-[#C9A96E]" />
                  <span>{project.category} · {project.year}</span>
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-3 z-10">
                  <span className="text-[11px] font-sans text-[#E8D4A8] tracking-[0.25em] uppercase block font-semibold">
                    {project.location}
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl font-normal text-white leading-tight group-hover:text-[#F5EDD8] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-white/75 font-serif italic line-clamp-1">
                    {project.subtitle}
                  </p>

                  <div className="pt-3 flex items-center justify-between border-t border-[#C9A96E]/30 text-xs text-[#E8D4A8]">
                    <span className="font-sans font-medium text-[11px] text-white/80">{project.guestCount}</span>
                    <span className="inline-flex items-center gap-1.5 text-[#C9A96E] font-semibold tracking-wider text-[11px] uppercase group-hover:translate-x-1 transition-transform">
                      VIEW CELEBRATION <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
