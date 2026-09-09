import React from 'react';
import { Sparkles } from 'lucide-react';
import { AnimatedSection } from '../common/AnimatedSection';

export const WhyLoveDetails: React.FC = () => {
  const pillars = [
    {
      num: '01',
      title: 'Bespoke Architectural Planning',
      desc: 'Every celebration is shaped around the couple, story, and grand vision behind it. We never apply templated formulas.'
    },
    {
      num: '02',
      title: 'Couture Creative Direction',
      desc: 'From high-fashion concept design & architectural floral installations to candlelit dining sanctuaries and lighting design.'
    },
    {
      num: '03',
      title: 'Flawless VIP Coordination',
      desc: 'Every microscopic element is executed with royal precision from initial consultation through post-wedding brunch.'
    },
    {
      num: '04',
      title: 'White-Glove Discretion & Concierge',
      desc: 'An intimate, highly exclusive planning journey crafted around complete client privacy, peace of mind, and ultra-luxe service.'
    }
  ];

  return (
    <section className="bg-white text-[#212529] py-32 md:py-44 border-t border-[#C9A96E]/20 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none opacity-[0.03] w-full text-center">
        <span className="font-display text-[180px] md:text-[280px] tracking-[0.2em] uppercase text-[#212529] block leading-none font-light">
          PILLARS
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-16">
        
        {/* Header */}
        <AnimatedSection direction="up">
          <div className="max-w-3xl space-y-3">
            <div className="flex items-center gap-2 text-[#C9A96E]">
              <div className="w-8 h-[1px] bg-[#C9A96E]" />
              <span className="text-xs font-sans font-semibold tracking-[0.25em] uppercase">
                THE ATELIER STANDARD
              </span>
            </div>

            <h2 className="font-['Playfair_Display'] text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] tracking-tight leading-[1.15]">
              Why Choose Love Details? <br />
              <span className="italic font-normal text-[#4A6B5B]">
                Thoughtful by Design. Flawless by Execution.
              </span>
            </h2>
          </div>
        </AnimatedSection>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, idx) => (
            <AnimatedSection key={pillar.num} direction="up" delay={idx * 0.15}>
              <div className="bg-white rounded-2xl p-8 border border-[#C9A96E]/20 hover:border-[#C9A96E] hover:bg-[#FAF8F5] hover:shadow-[0_15px_30px_rgba(201,169,110,0.12)] transition-all duration-500 space-y-5 group cursor-pointer h-full flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-[#C9A96E]/20 pb-4 group-hover:border-[#C9A96E]/40">
                    <span className="font-display text-4xl text-[#C9A96E] font-medium block group-hover:scale-110 transition-transform origin-left">
                      {pillar.num}
                    </span>
                    <Sparkles className="w-4 h-4 text-[#8DA999] group-hover:text-[#C9A96E] transition-colors" />
                  </div>
                  
                  <h3 className="font-display text-2xl font-semibold text-[#212529] group-hover:text-[#4A6B5B] transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-xs md:text-sm text-[#212529]/75 leading-relaxed font-light font-sans">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-2 flex items-center space-x-2 text-[10px] uppercase font-semibold text-[#9E7B45] tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>ATELIER GUARANTEE</span>
                  <div className="h-px w-6 bg-[#C9A96E]" />
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
};
