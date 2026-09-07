import React, { useState } from 'react';
import { JOURNAL_ARTICLES } from '../data/journalData';
import type { JournalArticle } from '../data/journalData';
import { ArrowUpRight, Sparkles, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { AnimatedSection } from '../components/common/AnimatedSection';

interface JournalPageProps {
  onSelectArticle: (article: JournalArticle) => void;
}

export const JournalPage: React.FC<JournalPageProps> = ({ onSelectArticle }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const categories = [
    'ALL',
    'Planning Guides',
    'Dubai Venues',
    'Destination Weddings',
    'Wedding Inspiration',
    'Event Design'
  ];

  const filteredArticles =
    selectedCategory === 'ALL'
      ? JOURNAL_ARTICLES
      : JOURNAL_ARTICLES.filter((a) => a.category === selectedCategory);

  const featuredArticle = JOURNAL_ARTICLES[0];

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
                THE ATELIER JOURNAL & EDITORIALS
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light text-[#262822] leading-[1.15] tracking-tight">
              Notes on Design & <br />
              <span className="italic text-[#7A8864]">Atmosphere.</span>
            </h1>
            
            <p className="text-base sm:text-xl text-[#262822]/80 max-w-3xl font-serif leading-relaxed border-l-2 border-[#7A8864]/40 pl-6 py-1">
              Curated perspectives, venue guides, and aesthetic reflections from our Dubai planning directors and creative team.
            </p>
          </div>
        </AnimatedSection>

        {/* Hero Image Banner */}
        <AnimatedSection direction="up" delay={0.2}>
          <div className="w-full aspect-21/9 rounded-3xl overflow-hidden border border-[#D4AF37]/40 shadow-2xl relative group bg-[#1A1C18]">
            <motion.img
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              src="/hero_journal_editorial.png"
              alt="The Atelier Journal & Editorial Essays"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />
            
            <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full border border-[#D4AF37]/40 shadow-lg text-xs font-serif text-[#946B00] flex items-center space-x-2 font-bold">
              <span className="w-2.5 h-2.5 rounded-full bg-[#7A8864] animate-pulse" />
              <span>ATELIER EDITORIALS</span>
            </div>

            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-center justify-between text-white gap-2 text-xs font-serif italic">
              <span className="bg-black/50 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20">
                Design Principles, Atmosphere & Botanical Styling
              </span>
              <span className="text-[#E5D5BC] bg-black/40 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10">
                Dubai & Worldwide Destination Perspectives
              </span>
            </div>
          </div>
        </AnimatedSection>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#C8C0B5]/40">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
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

      {/* ── FEATURED EDITORIAL SPOTLIGHT ── */}
      {selectedCategory === 'ALL' && featuredArticle && (
        <section className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 mb-16">
          <div className="text-xs uppercase tracking-[0.25em] text-[#7A8864] font-sans font-bold mb-4 flex items-center space-x-2">
            <span className="w-6 h-px bg-[#7A8864]" />
            <span>FEATURED EDITORIAL ESSAY</span>
          </div>

          <div
            onClick={() => onSelectArticle(featuredArticle)}
            className="group cursor-pointer rounded-3xl overflow-hidden border border-[#D4AF37]/40 shadow-2xl relative bg-[#1A1C18] grid grid-cols-1 lg:grid-cols-12 items-center"
          >
            <div className="lg:col-span-7 h-96 lg:h-[480px] overflow-hidden relative">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                src={featuredArticle.image}
                alt={featuredArticle.title}
                className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
              />
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-serif text-[#7A8864] border border-[#C8C0B5]/40 font-bold">
                {featuredArticle.category}
              </div>
            </div>

            <div className="lg:col-span-5 p-8 lg:p-12 text-white space-y-6 bg-gradient-to-br from-[#262822] to-[#1A1C18] h-full flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-white/10">
              <div className="flex items-center space-x-4 text-xs text-[#E5D5BC]">
                <span className="flex items-center space-x-1">
                  <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>{featuredArticle.readTime}</span>
                </span>
                <span>·</span>
                <span>{featuredArticle.date}</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl font-light text-white group-hover:text-[#D4AF37] transition-colors leading-tight">
                {featuredArticle.title}
              </h2>

              <p className="text-xs sm:text-sm text-[#E5D5BC]/85 font-serif italic leading-relaxed line-clamp-3">
                “{featuredArticle.excerpt}”
              </p>

              <div className="pt-2">
                <span className="button-editorial px-6 py-3 bg-[#7A8864] text-white rounded-full inline-flex items-center space-x-2 text-xs group-hover:bg-[#5C674A] transition-colors shadow-md">
                  <span>READ FULL ESSAY</span>
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── ARTICLES GRID ── */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              onClick={() => onSelectArticle(article)}
              className="group cursor-pointer space-y-6 bg-white p-5 rounded-3xl border border-[#C8C0B5]/50 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-full aspect-4/3 overflow-hidden rounded-2xl border border-[#C8C0B5]/40 relative bg-black">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-1000 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-serif text-[#7A8864] border border-[#C8C0B5]/40 font-bold">
                    {article.category}
                  </div>
                </div>

                <div className="space-y-3 px-2">
                  <div className="flex items-center space-x-3 text-xs text-[#262822]/60 font-sans">
                    <span className="flex items-center space-x-1">
                      <Clock className="w-3 h-3 text-[#7A8864]" />
                      <span>{article.readTime}</span>
                    </span>
                    <span>·</span>
                    <span>{article.date}</span>
                  </div>

                  <h2 className="font-serif text-2xl font-light text-[#262822] group-hover:text-[#7A8864] transition-colors leading-snug">
                    {article.title}
                  </h2>

                  <p className="text-xs text-[#262822]/75 font-serif leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="pt-4 px-2 border-t border-[#C8C0B5]/30">
                <span className="button-editorial text-xs text-[#7A8864] group-hover:text-[#5C674A] font-bold inline-flex items-center space-x-1">
                  <span>READ ESSAY</span>
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

    </div>
  );
};
