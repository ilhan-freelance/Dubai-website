import React from 'react';
import { ArrowRight, MessageCircle, Diamond } from 'lucide-react';
import { AnimatedSection } from '../common/AnimatedSection';

interface FinalEnquiryCTAProps {
  onOpenEnquiry: () => void;
}

export const FinalEnquiryCTA: React.FC<FinalEnquiryCTAProps> = ({ onOpenEnquiry }) => {
  return (
    <section className="bg-white text-[#212529] py-36 md:py-48 border-t border-[#C9A96E]/30 text-center relative overflow-hidden">
      
      {/* Glow Backlights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#C9A96E]/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Decorative Gold Side Accents */}
      <div className="absolute top-8 left-8 right-8 bottom-8 border border-[#C9A96E]/20 rounded-3xl pointer-events-none hidden md:block" />

      <div className="max-w-4xl mx-auto px-6 space-y-10 relative z-10">
        
        <AnimatedSection direction="up">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-[#EAF0EC] px-5 py-2 rounded-full border border-[#8DA999]/40 shadow-sm">
              <Diamond className="w-3.5 h-3.5 text-[#4A6B5B] fill-[#4A6B5B]" />
              <span className="text-[11px] font-sans font-semibold text-[#1F382B] tracking-[0.35em] uppercase">
                THE FIRST STEP TO FOREVER
              </span>
            </div>
            
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-normal text-[#212529] leading-[1.1] max-w-3xl mx-auto tracking-tight">
              “Let’s Create Something <br />
              <span className="italic font-serif bg-gradient-to-r from-[#C9A96E] via-[#8DA999] to-[#9E7B45] bg-clip-text text-transparent">
                Worth Remembering Forever.”
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#212529]/80 font-sans font-light max-w-xl mx-auto leading-relaxed">
              Tell us a little about your celebration and let’s begin designing the details together.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={0.2}>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-5">
            <button
              onClick={onOpenEnquiry}
              className="w-full sm:w-auto px-9 py-4.5 bg-gradient-to-r from-[#D4AF37] to-[#C9A96E] hover:from-[#C9A96E] hover:to-[#9E7B45] text-[#111] rounded-full transition-all duration-300 flex items-center justify-center space-x-3 cursor-pointer border border-[#C9A96E]/50 font-sans text-xs font-semibold tracking-widest uppercase group shadow-md hover:scale-105"
            >
              <span>BEGIN YOUR ENQUIRY</span>
              <ArrowRight className="w-4 h-4 text-[#111] group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="https://wa.me/971500000000?text=Hello%20Love%20Details,%20I%20would%20like%20to%20begin%20an%20enquiry%20for%20an%20event%20in%20Dubai."
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-9 py-4.5 bg-white border border-[#4A6B5B] text-[#1F382B] rounded-full hover:bg-[#EAF0EC] transition-all flex items-center justify-center space-x-2.5 font-sans text-xs font-semibold tracking-widest uppercase shadow-sm hover:scale-105"
            >
              <MessageCircle className="w-4 h-4 text-[#4A6B5B]" />
              <span>WHATSAPP CONCIERGE</span>
            </a>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
};
