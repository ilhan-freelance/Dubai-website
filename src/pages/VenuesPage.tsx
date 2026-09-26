import React from 'react';
import { UAE_VENUES } from '../data/venuesData';
import { MapPin, Users, ArrowUpRight, Compass } from 'lucide-react';
import { motion } from 'framer-motion';
import { AnimatedSection } from '../components/common/AnimatedSection';

interface VenuesPageProps {
  onOpenEnquiry: () => void;
}

export const VenuesPage: React.FC<VenuesPageProps> = ({ onOpenEnquiry }) => {
  return (
    <div className="pt-0 pb-20 bg-[#FAF8F6] text-[#262822] overflow-hidden">
      
      {/* ── 100% EDGE-TO-EDGE FULL WIDTH HERO IMAGE BANNER ── */}
      <section className="w-full pt-0 pb-28 sm:pb-36 md:pb-48">
        <AnimatedSection direction="up">
          <div className="w-full relative bg-[#1A1C18]">
            <motion.img
              src="/hero_venues_dubai_palm.png"
              alt="Dubai Palm Island Luxury Venue Showcase"
              className="w-full h-auto block"
            />
          </div>
        </AnimatedSection>
      </section>

      {/* ── PAGE TITLE SECTION (PUSHED DOWN BELOW HERO IMAGE) ── */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-8 md:px-16 pt-6 pb-16 text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#7A8864]/10 rounded-full filter blur-3xl pointer-events-none" />

        <AnimatedSection direction="up" delay={0.1}>
          <div className="space-y-2 text-center">
            <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#262822] leading-tight tracking-tight text-center sm:whitespace-nowrap">
              Venue Selection &amp; <span className="italic text-[#7A8864]">Atelier Curation.</span>
            </h1>
          </div>
        </AnimatedSection>
      </section>

      {/* ── VENUES GRID ── */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {UAE_VENUES.map((venue) => (
            <div
              key={venue.id}
              className="bg-white rounded-3xl border border-[#C8C0B5]/60 overflow-hidden group hover:border-[#7A8864] transition-all duration-500 shadow-lg flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="w-full aspect-16/10 overflow-hidden relative bg-black">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 1 }}
                    src={venue.image}
                    alt={venue.name}
                    className="w-full h-full object-cover group-hover:opacity-95 transition-opacity"
                  />
                  
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-serif text-[#946B00] border border-[#D4AF37]/40 font-bold shadow-md">
                    {venue.region}
                  </div>

                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-sans text-white border border-white/20 flex items-center space-x-1">
                    <Users className="w-3 h-3 text-[#D4AF37]" />
                    <span>{venue.capacity}</span>
                  </div>
                </div>

                <div className="px-6 md:px-8 space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="font-serif text-2xl sm:text-3xl font-light text-[#262822] group-hover:text-[#7A8864] transition-colors">
                        {venue.name}
                      </h2>
                      <span className="text-xs text-[#7A8864] flex items-center gap-1 mt-1 font-serif italic">
                        <MapPin className="w-3.5 h-3.5" />
                        {venue.location}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs md:text-sm text-[#262822]/80 font-serif leading-relaxed">
                    {venue.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2 border-t border-[#C8C0B5]/30">
                    {venue.highlights.map((h, i) => (
                      <span
                        key={i}
                        className="text-[10px] uppercase tracking-wider bg-[#7A8864]/10 text-[#7A8864] px-3 py-1 rounded-md border border-[#7A8864]/20 font-sans font-semibold"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-6 md:px-8 py-6 mt-6 border-t border-[#C8C0B5]/30 bg-[#FAF7F2]">
                <button
                  onClick={onOpenEnquiry}
                  className="w-full button-editorial px-5 py-3.5 rounded-full border border-[#7A8864]/50 bg-white text-[#262822] hover:bg-[#7A8864] hover:text-white transition-all flex items-center justify-center space-x-2 cursor-pointer text-xs font-bold shadow-xs hover:shadow-md"
                >
                  <span>INQUIRE FOR {venue.name.toUpperCase()}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* ── BESPOKE VENUE SCOUTING BANNER ── */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 pt-20">
        <div className="bg-gradient-to-r from-[#262822] via-[#33352D] to-[#262822] text-[#FAF7F2] p-12 rounded-3xl border border-[#D4AF37]/35 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center space-x-2 text-[#D4AF37]">
              <Compass className="w-4 h-4" />
              <span className="micro-label tracking-[0.25em]">BESPOKE VENUE SCOUTING</span>
            </div>
            <h2 className="font-serif text-3xl font-light">Looking for a Private Estate or Unlisted Location?</h2>
            <p className="text-xs sm:text-sm text-[#E5D5BC]/80 font-sans leading-relaxed">
              Our Dubai producers hold exclusive access permits to private palaces, royal desert retreats, and unlisted beachfront sanctuaries across the UAE.
            </p>
          </div>

          <button
            onClick={onOpenEnquiry}
            className="button-editorial px-8 py-4 bg-[#D4AF37] text-[#262822] hover:bg-[#c49f2e] transition-colors rounded-full font-bold text-xs shrink-0 shadow-lg cursor-pointer"
          >
            REQUEST BESPOKE SCOUTING
          </button>
        </div>
      </section>

    </div>
  );
};
