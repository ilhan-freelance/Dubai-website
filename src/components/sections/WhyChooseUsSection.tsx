import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface WhyChooseUsSectionProps {
  onNavigate?: (tab: string) => void;
  onLearnMore?: () => void;
  onOpenEnquiry?: () => void;
}

const MAIN_BUBBLES = [
  {
    title: 'Bespoke Design',
    image: '/about-couple-arch.png',
    description: 'Every celebration is tailored around your individual narrative, eliminating generic formulas in favor of true couture artistry.',
    tab: 'services'
  },
  {
    title: 'Trusted Suppliers',
    image: '/portfolio-dubai.png',
    description: "Privileged access to Dubai's premier floral architects, Michelin-level culinary directors, and elite acoustic performers.",
    tab: 'services'
  },
  {
    title: 'Location Magic',
    image: '/portfolio-desert.png',
    description: 'Exclusive access to UAE palace courts, desert sanctuaries, private island lawns, and iconic waterfront luxury resorts.',
    tab: 'venues'
  }
];

export const WhyChooseUsSection: React.FC<WhyChooseUsSectionProps> = ({
  onNavigate,
  onLearnMore,
  onOpenEnquiry
}) => {
  const handleLearnMoreClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onLearnMore) {
      onLearnMore();
    } else if (onNavigate) {
      onNavigate('about');
    } else if (onOpenEnquiry) {
      onOpenEnquiry();
    }
  };

  const handleCardClick = (tab: string) => {
    if (onNavigate) {
      onNavigate(tab);
    } else if (onLearnMore) {
      onLearnMore();
    }
  };

  return (
    <section className="py-16 md:py-24 bg-[#FAF8F5] text-[#212529] relative overflow-hidden px-6 border-t border-b border-gray-200/80">
      
      {/* Background Soft Glow */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[radial-gradient(circle_at_center,rgba(201,169,110,0.06)_0%,transparent_70%)] blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto space-y-12 relative z-10 w-full">
        
        {/* Header with Repositioned Unboxed Text Link */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#212529]/10 pb-8">
          <div className="space-y-2 max-w-2xl">
            <span className="text-[11px] font-sans font-semibold tracking-[0.25em] uppercase text-[#C9A96E]">
              DISTINCTION & ARTISTRY
            </span>
            <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight leading-tight">
              Why Choose Love Details?
            </h2>
            <p className="text-xs sm:text-sm text-[#212529]/75 font-sans font-light leading-relaxed">
              Couture spatial design, vetted high-society supplier networks, and exclusive venue access across the UAE.
            </p>
          </div>

          {/* Repositioned Unboxed Text Link (Top Right Header Alignment) */}
          <button
            onClick={handleLearnMoreClick}
            className="inline-flex items-center space-x-2 text-xs sm:text-sm font-sans font-semibold uppercase tracking-[0.2em] text-[#4A6B5B] hover:text-[#1F382B] transition-all cursor-pointer group border-b-2 border-[#4A6B5B]/30 hover:border-[#4A6B5B] pb-1 shrink-0 self-start md:self-end mb-1"
          >
            <span>LEARN MORE ABOUT US</span>
            <ArrowRight className="w-4 h-4 text-[#C9A96E] group-hover:translate-x-1.5 transition-transform" />
          </button>
        </div>

        {/* 3 Circular Feature Bubble Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-2">
          {MAIN_BUBBLES.map((bubble, idx) => (
            <motion.div
              key={bubble.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              onClick={() => handleCardClick(bubble.tab)}
              className="flex flex-col items-center text-center space-y-4 group cursor-pointer"
            >
              {/* Circular Photo Card */}
              <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-2 border-white shadow-lg bg-white relative group-hover:border-[#C9A96E] transition-colors">
                <img
                  src={bubble.image}
                  alt={bubble.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="space-y-1 max-w-xs">
                <h3 className="font-['Playfair_Display'] text-2xl sm:text-3xl font-semibold text-[#212529] group-hover:text-[#4A6B5B] transition-colors">
                  {bubble.title}
                </h3>
                <p className="text-xs text-[#212529]/80 font-sans leading-relaxed font-normal">
                  {bubble.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};




