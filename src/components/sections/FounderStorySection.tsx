import React from 'react';
import { Quote } from 'lucide-react';
import { AnimatedSection } from '../common/AnimatedSection';

interface FounderStorySectionProps {
  onOpenEnquiry?: () => void;
}

export const FounderStorySection: React.FC<FounderStorySectionProps> = ({ onOpenEnquiry }) => {

  return (
    <section className="pt-12 md:pt-16 pb-4 md:pb-6 bg-[#FAF8F6] text-[#212529] relative overflow-hidden px-6 border-t border-gray-200 flex flex-col justify-center">
      
      {/* Background Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none opacity-[0.025] w-full text-center">
        <span className="font-display text-[140px] md:text-[220px] tracking-[0.18em] uppercase text-[#212529] block leading-none font-light">
          FOUNDERS
        </span>
      </div>

      <div className="max-w-7xl mx-auto space-y-10 relative z-10 w-full">
        
        {/* Header */}
        <AnimatedSection direction="up">
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-2 text-[#C9A96E]">
              <div className="w-8 h-[1px] bg-[#C9A96E]" />
              <span className="text-xs font-sans font-semibold tracking-[0.25em] uppercase">
                THE FOUNDERS' STORY
              </span>
              <div className="w-8 h-[1px] bg-[#C9A96E]" />
            </div>

            <h2 className="font-['Playfair_Display'] text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] tracking-tight leading-tight">
              Architects of Romance
            </h2>
          </div>
        </AnimatedSection>

        {/* Main Grid: Left Video Player Placeholder | Right Editorial Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Founders Portrait Card (7 cols) */}
          <div className="lg:col-span-7">
            <AnimatedSection direction="right">
              <div className="w-full rounded-3xl overflow-hidden border-4 border-white ring-2 ring-[#C9A96E]/30 shadow-2xl relative bg-[#FAF7F2] group gold-border-glow aspect-[16/10]">
                <img
                  src="/founders-menka-priti.jpg"
                  alt="Love Details Founders Menka & Priti in Dubai"
                  className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700"
                />
              </div>
            </AnimatedSection>
          </div>

          {/* Right: Founder Quote & Ethos (5 cols) */}
          <div className="lg:col-span-5">
            <AnimatedSection direction="left">
              <div className="space-y-4 bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm relative">
                <Quote className="w-10 h-10 text-[#C9A96E]/20 absolute top-5 right-5" />

                <div className="space-y-1.5">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#4A6B5B] font-semibold font-sans block">
                    FOUNDERS' STATEMENT
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#212529] leading-snug">
                    “We don't just organize events; we design emotional sanctuaries.”
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-[#212529]/80 font-sans leading-relaxed font-light">
                  Love Details was born out of a shared passion for high-fashion architecture and quiet luxury. We recognized that Dubai’s most discerning couples were seeking celebrations that felt authentic, understated, and intensely personal.
                </p>

                {/* Founder Monogram Signature */}
                <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <span className="font-['Great_Vibes'] text-2xl text-[#C9A96E] block leading-none">
                      Love Details Founders
                    </span>
                    <span className="text-[9px] uppercase tracking-widest text-[#4A6B5B] font-sans font-semibold mt-1 block">
                      Creative Directors
                    </span>
                  </div>

                  {onOpenEnquiry && (
                    <button
                      onClick={onOpenEnquiry}
                      className="px-4 py-1.5 bg-[#3B5649] hover:bg-[#2A3E34] text-white rounded-full text-[11px] font-semibold uppercase tracking-wider transition-all cursor-pointer shadow-xs"
                    >
                      Inquire
                    </button>
                  )}
                </div>

              </div>
            </AnimatedSection>
          </div>

        </div>

      </div>

    </section>
  );
};
