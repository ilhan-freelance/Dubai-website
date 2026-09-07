import React from 'react';
import { TESTIMONIALS_DATA } from '../data/testimonialsData';
import { Quote, ArrowRight, Sparkles, Star, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { AnimatedSection } from '../components/common/AnimatedSection';

interface TestimonialsPageProps {
  onOpenEnquiry: () => void;
}

export const TestimonialsPage: React.FC<TestimonialsPageProps> = ({ onOpenEnquiry }) => {
  const pressMentions = [
    'Vogue Weddings',
    'Harper’s Bazaar Bride',
    'Emirates Woman',
    'Brides Magazine',
    "L'Officiel Arabia"
  ];

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
                CLIENT REFLECTIONS & TESTIMONIALS
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light text-[#262822] leading-[1.15] tracking-tight">
              Reflections of <br />
              <span className="italic text-[#7A8864]">Trust & Emotion.</span>
            </h1>
            
            <p className="text-base sm:text-xl text-[#262822]/80 max-w-3xl font-serif leading-relaxed border-l-2 border-[#7A8864]/40 pl-6 py-1">
              Read what couples, private hosts, and international families say about their voyage with Love Details Atelier in Dubai.
            </p>
          </div>
        </AnimatedSection>

        {/* Hero Image Banner */}
        <AnimatedSection direction="up" delay={0.2}>
          <div className="w-full aspect-21/9 rounded-3xl overflow-hidden border border-[#D4AF37]/40 shadow-2xl relative group bg-[#1A1C18]">
            <motion.img
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              src="/hero_testimonials_trust.png"
              alt="Love Details Client Celebration Reflections"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />
            
            <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full border border-[#D4AF37]/40 shadow-lg text-xs font-serif text-[#946B00] flex items-center space-x-2 font-bold">
              <span className="w-2.5 h-2.5 rounded-full bg-[#7A8864] animate-pulse" />
              <span>CLIENT STORIES</span>
            </div>

            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-center justify-between text-white gap-2 text-xs font-serif italic">
              <span className="bg-black/50 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20">
                Memories Crafted Across Dubai & International Sanctuaries
              </span>
              <span className="text-[#E5D5BC] bg-black/40 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10">
                100% Verified Client Reviews
              </span>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* ── PRESS & ACCOLADES STRIP ── */}
      <section className="bg-gradient-to-r from-[#262822] via-[#33352D] to-[#262822] text-[#FAF7F2] py-10 border-y border-[#D4AF37]/35 shadow-xl mb-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 space-y-4">
          <div className="text-center">
            <span className="micro-label text-[#D4AF37] tracking-[0.3em] flex items-center justify-center space-x-2">
              <Award className="w-3.5 h-3.5" />
              <span>FEATURED IN LEADING INTERNATIONAL PUBLICATIONS</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 pt-2 font-serif text-base sm:text-xl text-[#E5D5BC]/90 italic">
            {pressMentions.map((press, i) => (
              <span key={i} className="hover:text-[#D4AF37] transition-colors">
                {press}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS EDITORIAL ARCHIVE ── */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 space-y-24">
        {TESTIMONIALS_DATA.map((item, idx) => (
          <div
            key={item.id}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-t border-[#C8C0B5]/40 pt-20"
          >
            {item.image && (
              <div
                className={`lg:col-span-5 ${
                  idx % 2 === 0 ? 'lg:order-1' : 'lg:order-2'
                }`}
              >
                <div className="w-full aspect-3/4 overflow-hidden rounded-3xl border border-[#D4AF37]/40 shadow-2xl relative bg-black">
                  <motion.img
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 1 }}
                    src={item.image}
                    alt={item.clientNames}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full text-xs font-serif text-[#E5D5BC] border border-white/20">
                    {item.location}
                  </div>
                </div>
              </div>
            )}

            <div
              className={`space-y-8 ${
                item.image
                  ? 'lg:col-span-7'
                  : 'lg:col-span-12 max-w-4xl mx-auto text-center'
              } ${idx % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}
            >
              <div className="flex items-center space-x-1 text-[#D4AF37]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>

              <Quote className="w-12 h-12 text-[#7A8864]/50" />

              <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl font-light leading-relaxed text-[#262822] italic border-l-4 border-[#7A8864] pl-6 py-2">
                “{item.quote}”
              </blockquote>

              <div className="space-y-2 pt-2">
                <cite className="not-italic font-serif text-2xl text-[#7A8864] block font-normal">
                  — {item.clientNames}
                </cite>
                <div className="inline-flex items-center space-x-2 bg-[#7A8864]/10 border border-[#7A8864]/30 px-4 py-1.5 rounded-full text-xs font-sans text-[#7A8864]">
                  <span>{item.eventType}</span>
                  <span>·</span>
                  <span>{item.location} ({item.year})</span>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Bottom CTA Box */}
        <div className="pt-20 border-t border-[#C8C0B5]/40 text-center space-y-6 bg-gradient-to-r from-[#7A8864]/10 via-[#FAF7F2] to-[#7A8864]/10 p-12 rounded-3xl border border-[#7A8864]/30">
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#262822]">
            Ready to Begin Your Own Narrative?
          </h2>
          <p className="text-sm text-[#262822]/80 max-w-lg mx-auto font-serif italic">
            Connect with our Atelier producers in Dubai for a private consultation tailored around your vision.
          </p>
          <div>
            <button
              onClick={onOpenEnquiry}
              className="button-editorial px-9 py-4 bg-[#7A8864] text-[#FAF7F2] hover:bg-[#5C674A] transition-all inline-flex items-center space-x-3 rounded-full shadow-lg cursor-pointer hover:scale-[1.02] font-bold"
            >
              <span>CONNECT WITH OUR ATELIER</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
