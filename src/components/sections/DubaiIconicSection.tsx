import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Diamond, Sparkles, MapPin, Building2, Landmark } from 'lucide-react';
import { AnimatedSection } from '../common/AnimatedSection';

interface DubaiIconicSectionProps {
  onOpenEnquiry: () => void;
}

export const DubaiIconicSection: React.FC<DubaiIconicSectionProps> = ({ onOpenEnquiry }) => {
  return (
    <section className="bg-[#1C1A2E] text-white py-32 md:py-48 relative overflow-hidden border-t border-[#C9A96E]/30">
      
      {/* Glow Lights */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#C9A96E]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F9E8E8]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Dubai Image Runway */}
          <div className="lg:col-span-6 relative">
            <AnimatedSection direction="right">
              <div className="relative group">
                
                {/* Main Dubai Image Card */}
                <div className="w-full aspect-4/5 rounded-2xl overflow-hidden border border-[#C9A96E]/40 shadow-2xl relative">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    src="/portfolio-dubai.png"
                    alt="Dubai Luxury Skyline & Palace Celebration"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C1A2E] via-transparent to-transparent opacity-80" />

                  {/* Floating Gold Tag */}
                  <div className="absolute top-6 left-6 bg-[#1C1A2E]/80 backdrop-blur-md px-4 py-2 rounded-full border border-[#C9A96E]/40 flex items-center space-x-2">
                    <MapPin className="w-3.5 h-3.5 text-[#C9A96E]" />
                    <span className="text-[10px] font-sans font-semibold text-[#E8D4A8] tracking-[0.25em] uppercase">
                      DUBAI & ABU DHABI ATELIER
                    </span>
                  </div>

                  {/* Floating Bottom Card Overlay */}
                  <div className="absolute bottom-6 left-6 right-6 bg-[#1C1A2E]/90 backdrop-blur-xl p-5 rounded-xl border border-[#C9A96E]/30 space-y-2">
                    <div className="flex items-center justify-between text-xs text-[#E8D4A8]">
                      <span className="font-display text-lg font-normal text-white">The Royal Mirage & Desert Estates</span>
                      <Sparkles className="w-4 h-4 text-[#C9A96E]" />
                    </div>
                    <p className="text-xs text-[#E8D4A8]/70 font-sans font-light">
                      Curating private island galas, desert candlelit dining, and palace ballrooms.
                    </p>
                  </div>

                </div>

                {/* Secondary Inset Decorative Photo Frame */}
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="absolute -bottom-8 -right-8 w-48 sm:w-56 aspect-4/5 rounded-xl overflow-hidden border-2 border-[#C9A96E] shadow-2xl hidden sm:block z-20"
                >
                  <img
                    src="/portfolio-desert.png"
                    alt="Dubai Desert Luxury Setting"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[#1C1A2E]/30" />
                </motion.div>

              </div>
            </AnimatedSection>
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-6 space-y-8">
            <AnimatedSection direction="left">
              <div className="space-y-6">
                
                <div className="inline-flex items-center space-x-2 bg-[#2A2840] px-4 py-1.5 rounded-full border border-[#C9A96E]/40">
                  <Diamond className="w-3.5 h-3.5 text-[#C9A96E] fill-[#C9A96E]" />
                  <span className="text-[11px] font-sans font-semibold text-[#E8D4A8] tracking-[0.3em] uppercase">
                    DESTINATION MASTERY
                  </span>
                </div>

                <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight leading-[1.12]">
                  The Dubai Pinnacle <br />
                  <span className="italic font-serif bg-gradient-to-r from-[#E8D4A8] via-[#F9E8E8] to-[#C9A96E] bg-clip-text text-transparent">
                    Of Quiet Luxury.
                  </span>
                </h2>

                <p className="text-sm sm:text-base text-[#E8D4A8]/80 font-sans font-light leading-relaxed">
                  Love Details stands at the intersection of traditional Arabian hospitality and global high-fashion event direction. We orchestrate grand scale celebrations for royal families, international VIPs, and discerning couples seeking an unrepeatable Dubai experience.
                </p>

                {/* Features List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#C9A96E]/20">
                  <div className="flex items-start space-x-3">
                    <Building2 className="w-5 h-5 text-[#C9A96E] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-display font-medium text-white">Palace & Resort Access</h4>
                      <p className="text-xs text-[#E8D4A8]/70 font-sans font-light">Privileged access to top UAE venues</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Landmark className="w-5 h-5 text-[#C9A96E] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-display font-medium text-white">Government Permits</h4>
                      <p className="text-xs text-[#E8D4A8]/70 font-sans font-light">Seamless regulatory & protocol clearance</p>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-6">
                  <button
                    onClick={onOpenEnquiry}
                    className="px-8 py-4 bg-gradient-to-r from-[#C9A96E] to-[#E8D4A8] text-[#1C1A2E] rounded-full hover:shadow-[0_0_30px_rgba(201,169,110,0.5)] transition-all duration-300 font-sans text-xs font-bold tracking-widest uppercase inline-flex items-center space-x-2.5 cursor-pointer"
                  >
                    <span>SCHEDULE DUBAI ATELIER CONSULTATION</span>
                    <ArrowUpRight className="w-4 h-4 text-[#1C1A2E]" />
                  </button>
                </div>

              </div>
            </AnimatedSection>
          </div>

        </div>
      </div>
    </section>
  );
};
