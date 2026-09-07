import React, { useState } from 'react';
import { UAE_VENUES } from '../data/venuesData';
import { MapPin, Users, ArrowUpRight, Sparkles, Compass } from 'lucide-react';
import { motion } from 'framer-motion';
import { AnimatedSection } from '../components/common/AnimatedSection';

interface VenuesPageProps {
  onOpenEnquiry: () => void;
}

export const VenuesPage: React.FC<VenuesPageProps> = ({ onOpenEnquiry }) => {
  const [selectedRegion, setSelectedRegion] = useState<string>('ALL');

  const regions = ['ALL', 'Dubai', 'Abu Dhabi', 'Other UAE'];

  const filteredVenues =
    selectedRegion === 'ALL'
      ? UAE_VENUES
      : UAE_VENUES.filter((v) => v.region === selectedRegion);

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
                UAE LUXURY SANCTUARIES & PALACES
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light text-[#262822] leading-[1.15] tracking-tight">
              Venue Selection & <br />
              <span className="italic text-[#7A8864]">Atelier Curation.</span>
            </h1>
            
            <p className="text-base sm:text-xl text-[#262822]/80 max-w-3xl font-serif leading-relaxed border-l-2 border-[#7A8864]/40 pl-6 py-1">
              An editorial directory of premier waterfront palaces, desert reserves, private islands, and modern urban sanctuaries across Dubai, Abu Dhabi, and the United Arab Emirates.
            </p>
          </div>
        </AnimatedSection>

        {/* Hero Image Banner */}
        <AnimatedSection direction="up" delay={0.2}>
          <div className="w-full aspect-21/9 rounded-3xl overflow-hidden border border-[#D4AF37]/40 shadow-2xl relative group bg-[#1A1C18]">
            <motion.img
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              src="/hero_venues_dubai.png"
              alt="UAE Luxury Venues Showcase"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />
            
            <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full border border-[#D4AF37]/40 shadow-lg text-xs font-serif text-[#946B00] flex items-center space-x-2 font-bold">
              <span className="w-2.5 h-2.5 rounded-full bg-[#7A8864] animate-pulse" />
              <span>UAE SANCTUARIES</span>
            </div>

            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-center justify-between text-white gap-2 text-xs font-serif italic">
              <span className="bg-black/50 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20">
                Bvlgari Resort Jumeira Bay, One&Only & Desert Reserves
              </span>
              <span className="text-[#E5D5BC] bg-black/40 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10">
                Exclusive Protocol & Private Permits
              </span>
            </div>
          </div>
        </AnimatedSection>

        {/* Region Filters */}
        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#C8C0B5]/40">
          {regions.map((reg) => {
            const isActive = selectedRegion === reg;
            return (
              <button
                key={reg}
                onClick={() => setSelectedRegion(reg)}
                className={`button-editorial px-6 py-2.5 rounded-full text-xs transition-all cursor-pointer border shadow-xs ${
                  isActive
                    ? 'bg-[#7A8864] text-white border-[#7A8864] font-bold shadow-md'
                    : 'bg-white text-[#262822]/80 border-[#C8C0B5] hover:border-[#7A8864] hover:text-[#7A8864]'
                }`}
              >
                {reg.toUpperCase()}
              </button>
            );
          })}
        </div>
      </section>

      {/* ── VENUES GRID ── */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {filteredVenues.map((venue) => (
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
