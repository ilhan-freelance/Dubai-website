import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { AnimatedSection } from '../common/AnimatedSection';
import { motion } from 'framer-motion';

interface DubaiPositioningProps {
  onExploreVenues: () => void;
}

export const DubaiPositioning: React.FC<DubaiPositioningProps> = ({ onExploreVenues }) => {
  return (
    <section className="bg-[#FAF7F2] text-[#262822] py-28 md:py-40 border-t border-[#C8C0B5]/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Panoramic Image Block - 7 cols */}
          <div className="lg:col-span-7 relative">
            <AnimatedSection direction="right">
              <div className="aspect-16/10 overflow-hidden border border-[#C8C0B5]/50 shadow-2xl relative group">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  src="/portfolio-dubai.png"
                  alt="Dubai Luxury Architecture & Venue Setting"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white z-10">
                  <span className="micro-label text-[#E5D5BC]">
                    DUBAI · ABU DHABI · UAE DESTINATION
                  </span>
                  <span className="text-xs font-serif italic text-white/80">
                    Palace & Desert Atelier
                  </span>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Copy Block - 5 cols */}
          <div className="lg:col-span-5 space-y-6">
            <AnimatedSection direction="left" delay={0.2}>
              <div className="flex items-center gap-2 text-[#7A8864] mb-2">
                <div className="w-6 h-[1px] bg-[#7A8864]" />
                <span className="text-xs font-sans font-semibold tracking-[0.25em] uppercase">
                  DESTINATION EXPERTISE
                </span>
              </div>

              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#262822] leading-tight">
                Dubai &amp; UAE Destination Weddings
              </h2>
              <p className="text-sm md:text-base text-[#262822]/80 leading-relaxed font-light mt-4">
                We navigate the complex tapestry of UAE luxury hospitality with grace. From private island resorts in Jumeirah Bay to moonlit desert dunes in conservation reserves and palatial ballrooms in Abu Dhabi, we connect you with the region’s finest spaces.
              </p>
              <div className="pt-2 flex flex-wrap gap-2 text-xs uppercase tracking-widest text-[#7A8864] font-medium">
                <span className="bg-[#7A8864]/10 px-3 py-1 border border-[#7A8864]/20">Dubai</span>
                <span className="bg-[#7A8864]/10 px-3 py-1 border border-[#7A8864]/20">Abu Dhabi</span>
                <span className="bg-[#7A8864]/10 px-3 py-1 border border-[#7A8864]/20">UAE Coast</span>
                <span className="bg-[#7A8864]/10 px-3 py-1 border border-[#7A8864]/20">Global Destinations</span>
              </div>
              <div className="pt-6">
                <button
                  onClick={onExploreVenues}
                  className="button-editorial px-7 py-4 bg-[#7A8864] text-[#FAF7F2] hover:bg-[#5C674A] inline-flex items-center space-x-3 transition-all cursor-pointer shadow-md"
                  data-cursor-text="VENUES"
                >
                  <span>DISCOVER UAE VENUE SELECTION</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </AnimatedSection>
          </div>

        </div>
      </div>
    </section>
  );
};
