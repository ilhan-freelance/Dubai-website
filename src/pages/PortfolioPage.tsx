import React, { useState } from 'react';
import { PORTFOLIO_PROJECTS } from '../data/portfolioData';
import type { PortfolioProject } from '../data/portfolioData';
import { ArrowUpRight, Sparkles, MapPin, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { AnimatedSection } from '../components/common/AnimatedSection';

interface PortfolioPageProps {
  onSelectProject: (project: PortfolioProject) => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<string>('ALL');

  const categories = ['ALL', 'Weddings', 'Destination', 'Corporate', 'Private'];

  const filteredProjects =
    activeFilter === 'ALL'
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter(
          (p) => p.category.toLowerCase() === activeFilter.toLowerCase()
        );

  const featuredProject = PORTFOLIO_PROJECTS[0];

  return (
    <div className="pt-24 pb-28 bg-[#FAF8F6] text-[#262822] overflow-hidden">
      
      {/* ── PAGE HERO SECTION WITH HERO IMAGE ── */}
      <section className="relative max-w-7xl mx-auto px-6 sm:px-10 md:px-16 pt-8 pb-12 space-y-10">
        <div className="absolute top-10 right-10 w-96 h-96 bg-[#7A8864]/10 rounded-full filter blur-3xl pointer-events-none" />

        <AnimatedSection direction="up">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-3 px-4 py-1.5 rounded-full bg-[#7A8864]/10 border border-[#7A8864]/25 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#7A8864]" />
              <span className="micro-label text-[#7A8864] tracking-[0.3em]">
                OUR VISUAL ARCHIVE & STORIES
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light text-[#262822] leading-[1.15] tracking-tight">
              Celebrations, <br />
              <span className="italic text-[#7A8864]">Beautifully Composed.</span>
            </h1>
            
            <p className="text-base sm:text-xl text-[#262822]/80 max-w-3xl font-serif leading-relaxed border-l-2 border-[#7A8864]/40 pl-6 py-1">
              An editorial showcase of weddings, destination gatherings, and private celebrations planned and designed across Dubai, Abu Dhabi, and international sanctuaries.
            </p>
          </div>
        </AnimatedSection>

        {/* Hero Image Banner */}
        <AnimatedSection direction="up" delay={0.2}>
          <div className="w-full aspect-21/9 rounded-3xl overflow-hidden border border-[#D4AF37]/40 shadow-2xl relative group bg-[#1A1C18]">
            <motion.img
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              src="/hero_portfolio_archive.png"
              alt="Love Details Dubai Portfolio Showcase"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />
            
            <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full border border-[#D4AF37]/40 shadow-lg text-xs font-serif text-[#946B00] flex items-center space-x-2 font-bold">
              <span className="w-2.5 h-2.5 rounded-full bg-[#7A8864] animate-pulse" />
              <span>VISUAL ARCHIVE</span>
            </div>

            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-center justify-between text-white gap-2 text-xs font-serif italic">
              <span className="bg-black/50 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20">
                Al Maha Desert Resort & Royal Palaces
              </span>
              <span className="text-[#E5D5BC] bg-black/40 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10">
                Editorial Weddings & Private Celebrations
              </span>
            </div>
          </div>
        </AnimatedSection>

        {/* Filters Bar */}
        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#C8C0B5]/40">
          {categories.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`button-editorial px-6 py-2.5 rounded-full text-xs transition-all cursor-pointer border shadow-xs ${
                  isActive
                    ? 'bg-[#7A8864] text-white border-[#7A8864] font-bold shadow-md'
                    : 'bg-white text-[#262822]/80 border-[#C8C0B5] hover:border-[#7A8864] hover:text-[#7A8864]'
                }`}
              >
                {cat.toUpperCase()}
              </button>
            );
          })}
        </div>
      </section>

      {/* ── FEATURED SPOTLIGHT PROJECT ── */}
      {activeFilter === 'ALL' && featuredProject && (
        <section className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 mb-16">
          <div className="text-xs uppercase tracking-[0.25em] text-[#7A8864] font-sans font-bold mb-4 flex items-center space-x-2">
            <span className="w-6 h-px bg-[#7A8864]" />
            <span>FEATURED ATELIER SPOTLIGHT</span>
          </div>

          <div
            onClick={() => onSelectProject(featuredProject)}
            className="group cursor-pointer rounded-3xl overflow-hidden border border-[#D4AF37]/40 shadow-2xl relative bg-[#1A1C18] grid grid-cols-1 lg:grid-cols-12 items-center"
          >
            <div className="lg:col-span-7 h-96 lg:h-[500px] overflow-hidden relative">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                src={featuredProject.heroImage}
                alt={featuredProject.title}
                className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent lg:hidden" />
            </div>

            <div className="lg:col-span-5 p-8 lg:p-12 text-white space-y-6 bg-gradient-to-br from-[#262822] to-[#1A1C18] h-full flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-white/10">
              <div className="inline-flex items-center space-x-2 bg-[#7A8864]/20 border border-[#7A8864]/40 px-3 py-1 rounded-full text-xs text-[#E5D5BC]">
                <span>{featuredProject.category}</span>
                <span>·</span>
                <span>{featuredProject.year}</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-light text-white group-hover:text-[#D4AF37] transition-colors leading-tight">
                {featuredProject.title}
              </h2>

              <p className="text-xs sm:text-sm text-[#E5D5BC]/85 font-serif italic leading-relaxed">
                “{featuredProject.summary}”
              </p>

              <div className="space-y-2 text-xs text-[#E5D5BC]/80 font-sans pt-2 border-t border-white/10">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-[#7A8864]" />
                  <span>{featuredProject.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-[#7A8864]" />
                  <span>{featuredProject.guestCount}</span>
                </div>
              </div>

              <div className="pt-4">
                <span className="button-editorial px-6 py-3 bg-[#7A8864] text-white rounded-full inline-flex items-center space-x-2 text-xs group-hover:bg-[#5C674A] transition-colors shadow-md">
                  <span>EXPLORE FULL STORY</span>
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── MASONRY / EDITORIAL GALLERY GRID ── */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer space-y-4 animate-in fade-in duration-500"
            >
              <div
                className={`w-full overflow-hidden rounded-2xl border border-[#C8C0B5]/50 shadow-lg relative bg-black ${
                  idx % 4 === 0 ? 'aspect-3/4' : idx % 3 === 0 ? 'aspect-16/10' : 'aspect-4/3'
                }`}
              >
                <img
                  src={project.heroImage}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-1000 opacity-90 group-hover:opacity-100"
                />
                
                {/* Floating Glassmorphism Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-serif text-[#7A8864] border border-[#C8C0B5]/40 shadow-md font-bold">
                  {project.category}
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-90 group-hover:opacity-75 transition-opacity" />
                
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                  <div className="flex items-center space-x-2 text-[11px] text-[#E5D5BC]">
                    <MapPin className="w-3 h-3 text-[#D4AF37]" />
                    <span className="truncate">{project.location}</span>
                  </div>

                  <h3 className="font-serif text-2xl font-light text-white group-hover:text-[#D4AF37] transition-colors leading-snug">
                    {project.title}
                  </h3>

                  <div className="pt-2 flex items-center justify-between text-xs text-[#E5D5BC] group-hover:text-white border-t border-white/20">
                    <span className="flex items-center space-x-1">
                      <Users className="w-3.5 h-3.5 text-[#7A8864]" />
                      <span>{project.guestCount}</span>
                    </span>
                    
                    <span className="button-editorial flex items-center gap-1 text-[#D4AF37] font-bold">
                      VIEW STORY <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
