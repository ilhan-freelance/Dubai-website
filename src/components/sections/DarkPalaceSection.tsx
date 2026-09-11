import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, MapPin, ArrowRight } from 'lucide-react';

interface DarkPalaceSectionProps {
  onNavigateVenues?: () => void;
  onOpenEnquiry?: () => void;
}

const DESTINATION_VENUE_BOXES = [
  {
    id: 'venue-1',
    title: 'Raffles Imperial Palace',
    category: 'ROYAL PALACE',
    location: 'Palm Jumeirah, Dubai',
    image: '/portfolio-dubai.png',
  },
  {
    id: 'venue-2',
    title: 'Al Maha Desert Dunes',
    category: 'DESERT SANCTUARY',
    location: 'Dubai Conservation Reserve',
    image: '/portfolio-desert.png',
  },
  {
    id: 'venue-3',
    title: 'Bvlgari Waterfront Lawns',
    category: 'PRIVATE ISLAND',
    location: 'Jumeira Bay Island',
    image: '/portfolio-garden.png',
  },
  {
    id: 'venue-4',
    title: 'Armani Fountain Terrace',
    category: 'URBAN ICONIC',
    location: 'Downtown Dubai',
    image: '/portfolio-dance.png',
  },
  {
    id: 'venue-5',
    title: 'One&Only Royal Mirage',
    category: 'ARABIAN BEACH',
    location: 'Al Sufouh, Dubai',
    image: '/about-couple-arch.png',
  },
  {
    id: 'venue-6',
    title: 'Jumeirah Al Qasr Pier',
    category: 'PALACE CANAL',
    location: 'Madinat Jumeirah',
    image: '/portfolio-rings.png',
  },
];

export const DarkPalaceSection: React.FC<DarkPalaceSectionProps> = ({ onNavigateVenues, onOpenEnquiry }) => {
  const handleAction = () => {
    if (onNavigateVenues) {
      onNavigateVenues();
    } else if (onOpenEnquiry) {
      onOpenEnquiry();
    }
  };

  // Create duplicate set for seamless infinite vertical scroll
  const verticalTrackItems = [...DESTINATION_VENUE_BOXES, ...DESTINATION_VENUE_BOXES];

  return (
    <section className="py-14 md:py-20 bg-[#FAF8F6] text-[#1A1D20] px-4 sm:px-6 md:px-10 relative overflow-hidden border-t border-[#C9A96E]/20">
      <div className="max-w-6xl mx-auto">
        {/* Single Outer Frame Container */}
        <div className="bg-white rounded-3xl border border-[#C9A96E]/40 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-center min-h-[500px] md:min-h-[540px]">
          
          {/* Left Side: Badge, Heading, Content & Action Button */}
          <div className="lg:col-span-6 p-8 sm:p-10 md:p-14 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#3B5649]/10 border border-[#3B5649]/25 text-[#3B5649] text-[11px] font-sans font-bold tracking-[0.2em] uppercase shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#C9A96E]" />
              Destination Elegance
            </div>

            <div className="space-y-3.5">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1D20] tracking-tight leading-[1.15]">
                Palaces, Islands &amp; <br />
                <span className="italic text-[#3B5649] font-normal">Desert Sanctuaries</span>
              </h2>

              <p className="text-xs sm:text-sm text-[#4A5056] font-sans font-normal leading-relaxed max-w-md">
                Explore Dubai &amp; UAE's most prestigious royal ballrooms, candlelit desert dunes, and private island waterfront estates curated by our atelier.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={handleAction}
                className="px-7 py-3.5 bg-[#3B5649] hover:bg-[#2C4439] text-white rounded-full text-xs font-sans font-bold tracking-[0.18em] uppercase transition-all cursor-pointer shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center gap-3 border border-[#C9A96E]/40"
              >
                <span>Explore Destinations &amp; Venues</span>
                <ArrowRight className="w-4 h-4 text-[#E2C08D]" />
              </button>
            </div>
          </div>

          {/* Right Side: Single Column Top-to-Down Vertically Moving Animation Container */}
          <div className="lg:col-span-6 h-[460px] md:h-[520px] relative overflow-hidden bg-[#FAF7F2] p-5 sm:p-7 border-t lg:border-t-0 lg:border-l border-[#C9A96E]/25 flex items-center justify-center">
            
            {/* Top Fade Gradient Mask */}
            <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#FAF7F2] via-[#FAF7F2]/90 to-transparent z-10 pointer-events-none" />
            {/* Bottom Fade Gradient Mask */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#FAF7F2] via-[#FAF7F2]/90 to-transparent z-10 pointer-events-none" />

            {/* Single Vertical Moving Track (Top to Down) */}
            <div className="w-full h-full overflow-hidden">
              <motion.div
                animate={{ y: ['0%', '-50%'] }}
                transition={{
                  duration: 24,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="flex flex-col gap-6"
              >
                {verticalTrackItems.map((venue, idx) => (
                  <div
                    key={`v-single-${venue.id}-${idx}`}
                    onClick={handleAction}
                    className="cursor-pointer rounded-2xl overflow-hidden bg-white border border-[#C9A96E]/35 shadow-lg p-4 sm:p-5 flex flex-col sm:flex-row items-center gap-4 sm:gap-5 transition-all hover:border-[#3B5649]/50"
                  >
                    {/* Venue Image Thumbnail - High-Impact Luxury Aspect */}
                    <div className="w-full sm:w-44 h-36 sm:h-28 rounded-xl overflow-hidden bg-gray-900 shrink-0 relative shadow-inner">
                      <img
                        src={venue.image}
                        alt={venue.title}
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                    </div>

                    {/* Venue Details */}
                    <div className="space-y-2 min-w-0 flex-1 w-full text-left">
                      <h4 className="font-serif text-lg sm:text-xl font-bold text-[#1A1D20] truncate tracking-wide">
                        {venue.title}
                      </h4>

                      <p className="text-xs sm:text-sm text-[#3B5649] font-sans font-bold flex items-center gap-2 truncate">
                        <MapPin className="w-4 h-4 text-[#C9A96E] shrink-0" />
                        <span>{venue.location}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

