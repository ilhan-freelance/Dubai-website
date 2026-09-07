import React, { useState } from 'react';
import { PORTFOLIO_PROJECTS } from '../../data/portfolioData';
import type { PortfolioProject } from '../../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';
import { AnimatedSection } from '../common/AnimatedSection';
import { motion, AnimatePresence } from 'framer-motion';

interface FeaturedPortfolioProps {
  onSelectProject: (project: PortfolioProject) => void;
  onViewAllPortfolio: () => void;
}

export const FeaturedPortfolio: React.FC<FeaturedPortfolioProps> = ({
  onSelectProject,
  onViewAllPortfolio
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('ALL');

  const categories = ['ALL', 'Weddings', 'Destination', 'Corporate', 'Private'];

  const filteredProjects =
    activeFilter === 'ALL'
      ? PORTFOLIO_PROJECTS.slice(0, 5)
      : PORTFOLIO_PROJECTS.filter(
          (p) => p.category.toLowerCase() === activeFilter.toLowerCase()
        ).slice(0, 5);

  return (
    <section className="bg-[#FAF7F2] text-[#262822] py-28 md:py-40 border-t border-[#C8C0B5]/40 relative overflow-hidden">
      
      {/* Background Watermark */}
      <div className="absolute top-10 left-6 pointer-events-none select-none opacity-[0.03]">
        <span className="font-serif text-[180px] md:text-[250px] tracking-[0.15em] uppercase text-[#262822] block leading-none">
          PORTFOLIO
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <AnimatedSection direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="space-y-3 max-w-xl">
              <span className="micro-label text-[#7A8864]">SELECTED CELEBRATIONS</span>
              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-[#262822]">
                Celebrations, Beautifully Composed.
              </h2>
            </div>
            
            {/* Quick Category Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => {
                const isActive = activeFilter === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveFilter(cat)}
                    className={`button-editorial px-4 py-2 text-[11px] transition-all cursor-pointer border ${
                      isActive
                        ? 'bg-[#7A8864] text-[#FAF7F2] border-[#7A8864]'
                        : 'bg-transparent text-[#262822]/70 border-[#C8C0B5]/60 hover:border-[#7A8864] hover:text-[#7A8864]'
                    }`}
                  >
                    {cat.toUpperCase()}
                  </button>
                );
              })}
            </div>
          </div>
        </AnimatedSection>

        {/* Asymmetric Editorial Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start"
          >
            {filteredProjects.map((project, idx) => {
              const isLarge = idx === 0;
              const isVertical = idx === 1;
              const colSpan = isLarge ? 'md:col-span-7' : isVertical ? 'md:col-span-5 md:mt-12' : 'md:col-span-4';
              const aspect = isLarge ? 'aspect-16/10' : isVertical ? 'aspect-3/4' : 'aspect-4/3';

              return (
                <div
                  key={project.id}
                  onClick={() => onSelectProject(project)}
                  className={`${colSpan} group cursor-pointer space-y-4`}
                  data-cursor-text="STORY"
                >
                  <div className={`w-full ${aspect} overflow-hidden border border-[#C8C0B5]/40 shadow-xl relative bg-[#262822]`}>
                    <motion.img
                      whileHover={{ scale: 1.06 }}
                      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                      src={project.heroImage}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Editorial Frame Overlay */}
                    <div className="absolute inset-0 border-[10px] border-[#FAF7F2]/20 pointer-events-none group-hover:border-[#FAF7F2]/40 transition-colors" />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-85 group-hover:opacity-70 transition-opacity" />

                    <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end text-white z-10">
                      <div className="space-y-1">
                        <span className="micro-label text-[#E5D5BC]">
                          {project.category} · {project.location}
                        </span>
                        <h3 className={`font-serif font-light ${isLarge ? 'text-3xl md:text-4xl' : 'text-2xl'}`}>
                          {project.title}
                        </h3>
                        <p className="text-xs text-white/70 italic font-serif line-clamp-1 hidden sm:block">
                          {project.subtitle}
                        </p>
                      </div>
                      <span className="button-editorial text-xs text-[#E5D5BC] group-hover:text-white flex items-center gap-1 shrink-0 ml-4">
                        View Story <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* View All Button */}
        <AnimatedSection direction="up" delay={0.4}>
          <div className="pt-16 text-center">
            <button
              onClick={onViewAllPortfolio}
              className="button-editorial px-8 py-4 bg-transparent border border-[#7A8864] text-[#7A8864] hover:bg-[#7A8864] hover:text-[#FAF7F2] transition-colors inline-flex items-center space-x-3 cursor-pointer"
              data-cursor-text="ALL"
            >
              <span>EXPLORE COMPLETE PORTFOLIO ARCHIVE</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
};
