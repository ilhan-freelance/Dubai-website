import React from 'react';
import { UAE_VENUES } from '../../data/venuesData';
import { MapPin, Users, ArrowUpRight, Diamond, Sparkles } from 'lucide-react';
import { AnimatedSection } from '../common/AnimatedSection';
import { motion } from 'framer-motion';

interface VenueShowcaseSectionProps {
  onExploreVenues: () => void;
}

export const VenueShowcaseSection: React.FC<VenueShowcaseSectionProps> = ({ onExploreVenues }) => {
  const featuredVenues = UAE_VENUES.slice(0, 4);

  return (
    <section className="bg-white text-[#212529] py-32 md:py-44 border-t border-[#C9A96E]/20 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 pointer-events-none select-none opacity-[0.03]">
        <span className="font-display text-[180px] md:text-[300px] tracking-[0.2em] uppercase text-[#212529] block leading-none font-light">
          SANCTUARIES
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-16">
        
        {/* Header */}
        <AnimatedSection direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center space-x-2 bg-[#EAF0EC] px-4 py-1.5 rounded-full border border-[#8DA999]/40">
                <Diamond className="w-3.5 h-3.5 text-[#4A6B5B] fill-[#4A6B5B]" />
                <span className="text-[11px] font-sans font-semibold text-[#1F382B] tracking-[0.3em] uppercase">
                  DUBAI & UAE SANCTUARIES
                </span>
              </div>
              <h2 className="font-display text-4xl sm:text-6xl font-normal text-[#212529] tracking-tight leading-[1.1]">
                Venues of <br />
                <span className="italic font-serif bg-gradient-to-r from-[#C9A96E] via-[#8DA999] to-[#9E7B45] bg-clip-text text-transparent">
                  Unrivaled Distinction.
                </span>
              </h2>
            </div>
            
            <button
              onClick={onExploreVenues}
              className="px-6 py-3.5 bg-[#4A6B5B] text-white rounded-full hover:bg-[#3B5649] transition-all text-xs font-semibold tracking-widest inline-flex items-center space-x-2.5 cursor-pointer self-start md:self-auto border border-[#C9A96E]/40 group shadow-md"
            >
              <span>EXPLORE ALL UAE VENUES</span>
              <ArrowUpRight className="w-4 h-4 text-[#E8D4A8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </AnimatedSection>

        {/* Venues 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {featuredVenues.map((venue, idx) => (
            <AnimatedSection key={venue.id} direction="up" delay={idx * 0.15}>
              <div
                onClick={onExploreVenues}
                className="bg-white border border-[#C9A96E]/20 rounded-2xl overflow-hidden group hover:border-[#C9A96E] hover:shadow-[0_20px_40px_rgba(201,169,110,0.12)] transition-all duration-500 cursor-pointer space-y-6 flex flex-col justify-between"
              >
                <div className="space-y-6">
                  {/* Image with Gold Inner Border Accent */}
                  <div className="w-full aspect-16/10 overflow-hidden relative bg-gray-900">
                    <motion.img
                      whileHover={{ scale: 1.07 }}
                      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                      src={venue.image}
                      alt={venue.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                    
                    {/* Region Pill */}
                    <div className="absolute top-4 left-4 bg-black/75 backdrop-blur-md px-3.5 py-1 rounded-full text-[10px] font-sans font-semibold text-[#E8D4A8] border border-[#C9A96E]/40 uppercase tracking-widest flex items-center space-x-1.5">
                      <Sparkles className="w-3 h-3 text-[#C9A96E]" />
                      <span>{venue.region}</span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="px-8 space-y-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-display text-2xl md:text-3xl font-normal text-[#212529] group-hover:text-[#4A6B5B] transition-colors">
                          {venue.name}
                        </h3>
                        <span className="text-xs text-[#9E7B45] flex items-center gap-1 mt-1 font-serif italic">
                          <MapPin className="w-3.5 h-3.5 text-[#C9A96E]" />
                          {venue.location}
                        </span>
                      </div>
                      <span className="text-xs text-[#1F382B] flex items-center gap-1 font-sans bg-[#EAF0EC] px-3 py-1 rounded-full border border-[#8DA999]/40">
                        <Users className="w-3.5 h-3.5 text-[#4A6B5B]" />
                        {venue.capacity}
                      </span>
                    </div>

                    <p className="text-xs md:text-sm text-[#212529]/75 font-light leading-relaxed">
                      {venue.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-1">
                      {venue.highlights.map((h, i) => (
                        <span
                          key={i}
                          className="text-[10px] uppercase tracking-wider bg-[#FAF8F5] text-[#212529] px-3 py-1 rounded-full border border-[#C9A96E]/20 font-medium"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-8 pb-7 pt-2">
                  <div className="w-full py-3.5 border-t border-[#C9A96E]/20 text-[#212529] group-hover:text-[#4A6B5B] transition-colors flex items-center justify-between text-xs font-semibold tracking-wider">
                    <span className="uppercase">DISCOVER SANCTUARY DETAILS</span>
                    <ArrowUpRight className="w-4 h-4 text-[#C9A96E] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
};
