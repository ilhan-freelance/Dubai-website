import React from 'react';
import { Diamond, Sparkles } from 'lucide-react';
import { AnimatedSection } from '../common/AnimatedSection';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Discover',
      desc: 'An intimate initial consultation to capture your personal narrative, scope, guest experiences, and high-fashion aesthetic.'
    },
    {
      num: '02',
      title: 'Concept',
      desc: 'Developing architectural spatial layouts, bespoke color palettes, floral concepts, and iconic venue proposals.'
    },
    {
      num: '03',
      title: 'Design',
      desc: 'Curating custom stationery, fine culinary menus, acoustic choreography, luxury lighting, and living floral mockups.'
    },
    {
      num: '04',
      title: 'Plan',
      desc: 'Managing full vendor master contracts, UAE government permits, guest hospitality, and minute-by-minute runsheets.'
    },
    {
      num: '05',
      title: 'Execute',
      desc: 'Our full producer team directs build-up on site, ensuring flawless technical execution and total host peace of mind.'
    },
    {
      num: '06',
      title: 'Celebrate',
      desc: 'Stepping back so you can immerse fully in every breathtaking moment with your loved ones in true Dubai luxury.'
    }
  ];

  return (
    <section className="bg-gradient-to-b from-[#FAF8F5] via-[#F9E8E8]/30 to-[#FAF8F5] text-[#1C1A2E] py-32 md:py-44 border-t border-[#C9A96E]/20 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-1/3 left-10 pointer-events-none select-none opacity-[0.03] w-full">
        <span className="font-display text-[180px] md:text-[280px] tracking-[0.15em] uppercase text-[#1C1A2E] block leading-none font-light">
          PROCESS
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16 relative z-10">
        
        {/* Header */}
        <AnimatedSection direction="up">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center space-x-2 bg-[#F9E8E8] px-4 py-1.5 rounded-full border border-[#E8B4B8]/40">
              <Diamond className="w-3.5 h-3.5 text-[#C9A96E] fill-[#C9A96E]" />
              <span className="text-[11px] font-sans font-semibold text-[#1C1A2E] tracking-[0.3em] uppercase">
                THE ATELIER VOYAGE
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl font-normal text-[#1C1A2E] tracking-tight leading-[1.1]">
              Our Couture <br />
              <span className="italic font-serif bg-gradient-to-r from-[#C9A96E] via-[#D4888F] to-[#9E7B45] bg-clip-text text-transparent">
                Planning Journey.
              </span>
            </h2>
            <p className="text-xs md:text-sm text-[#1C1A2E]/75 font-sans font-light leading-relaxed">
              A serene, structured multi-phase journey tailored around your peace of mind and complete discretion.
            </p>
          </div>
        </AnimatedSection>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative">
          
          {/* Desktop Gold Timeline Horizontal Line */}
          <div className="hidden lg:block absolute top-12 left-6 right-6 h-[2px] bg-gradient-to-r from-[#C9A96E]/20 via-[#C9A96E] to-[#C9A96E]/20 -z-0" />

          {steps.map((step, idx) => (
            <AnimatedSection key={step.num} direction="up" delay={idx * 0.1}>
              <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-[#C9A96E]/20 hover:border-[#C9A96E] hover:bg-[#F9E8E8]/40 hover:shadow-[0_15px_30px_rgba(201,169,110,0.15)] transition-all duration-500 space-y-4 group cursor-pointer h-full flex flex-col justify-between relative z-10">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-full border-2 border-[#C9A96E] text-[#1C1A2E] flex items-center justify-center font-display text-base font-semibold bg-[#FAF8F5] group-hover:bg-gradient-to-br group-hover:from-[#1C1A2E] group-hover:to-[#2A2840] group-hover:text-[#E8D4A8] group-hover:border-[#C9A96E] transition-all duration-300 shadow-md">
                    {step.num}
                  </div>
                  
                  <h3 className="font-display text-2xl font-normal text-[#1C1A2E] group-hover:text-[#9E7B45] transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs text-[#1C1A2E]/75 leading-relaxed font-sans font-light">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-2 flex items-center justify-between border-t border-[#C9A96E]/15 text-[10px] uppercase font-semibold text-[#9E7B45] tracking-widest">
                  <span>PHASE {step.num}</span>
                  <Sparkles className="w-3.5 h-3.5 text-[#E8B4B8] group-hover:text-[#C9A96E] transition-colors" />
                </div>
              </div>
            </AnimatedSection>
          ))}

        </div>

      </div>
    </section>
  );
};
