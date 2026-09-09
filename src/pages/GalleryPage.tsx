import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ArrowLeft } from 'lucide-react';
import { AnimatedSection } from '../components/common/AnimatedSection';

interface GalleryPageProps {
  onOpenEnquiry: () => void;
  onNavigateHome: () => void;
}

interface GalleryItem {
  id: string;
  image: string;
  title: string;
  category: 'Palace' | 'Desert' | 'Coastal' | 'Florals' | 'Details';
  location: string;
  aspect: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  { id: 'g1', image: '/hero-aisle.png', title: 'Aisle of White Hydrangeas & Candlelight', category: 'Florals', location: 'Emirates Palace Mandarin Oriental', aspect: 'h-[360px]' },
  { id: 'g2', image: '/portfolio-dubai.png', title: 'Royal Imperial Palace Ballroom', category: 'Palace', location: 'Burj Al Arab Jumeirah', aspect: 'h-[440px]' },
  { id: 'g3', image: '/about-couple-arch.png', title: 'Cascading White Rose Floral Arch', category: 'Florals', location: 'One&Only Royal Mirage', aspect: 'h-[320px]' },
  { id: 'g4', image: '/portfolio-desert.png', title: 'Sunset Dunes & Firefly Lanterns', category: 'Desert', location: 'Al Maha Desert Resort', aspect: 'h-[420px]' },
  { id: 'g5', image: '/portfolio-garden.png', title: 'Bvlgari Waterfront Glasshouse Lawn', category: 'Coastal', location: 'Bvlgari Resort Jumeira Bay', aspect: 'h-[380px]' },
  { id: 'g6', image: '/about-couple-laugh.png', title: 'Intimate Sunset Couple Portraits', category: 'Desert', location: 'Bab Al Shams Pavilion', aspect: 'h-[300px]' },
  { id: 'g7', image: '/portfolio-dance.png', title: 'Midnight Crystal Chandelier Gala', category: 'Palace', location: 'Raffles The Palm Dubai', aspect: 'h-[460px]' },
  { id: 'g8', image: '/portfolio-rings.png', title: 'Handcrafted Solstice Diamond Rings', category: 'Details', location: 'Dubai Gold Souk Atelier', aspect: 'h-[280px]' },
  { id: 'g9', image: '/about-bridesmaids.png', title: 'Couture Silk Bridesmaid Processional', category: 'Coastal', location: 'Jumeirah Al Qasr Lawns', aspect: 'h-[350px]' },
  { id: 'g10', image: '/about-groom.png', title: 'Black-Tie Royal Groom Attire', category: 'Details', location: 'Four Seasons Resort Dubai', aspect: 'h-[320px]' },
  { id: 'g11', image: '/service-planning.png', title: 'Architectural Table Settings & Wax', category: 'Details', location: 'Armani Hotel Dubai', aspect: 'h-[400px]' },
  { id: 'g12', image: '/service-coordination.png', title: 'White Glove Runway Reception Stage', category: 'Palace', location: 'Atlantis The Royal', aspect: 'h-[340px]' },
  { id: 'g13', image: '/service-day-of.png', title: 'Candlelit Alfresco Ocean Sanctuary', category: 'Coastal', location: 'Park Hyatt Dubai', aspect: 'h-[390px]' },
  { id: 'g14', image: '/hero_testimonials_trust.png', title: 'Romantic Champagne Toast Ceremony', category: 'Palace', location: 'Palazzo Versace Dubai', aspect: 'h-[310px]' }
];

const CATEGORIES = ['All', 'Palace', 'Desert', 'Coastal', 'Florals', 'Details'];

export const GalleryPage: React.FC<GalleryPageProps> = ({ onOpenEnquiry, onNavigateHome }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <div className="pt-24 pb-32 bg-[#FAF8F6] text-[#212529] min-h-screen overflow-hidden">
      
      {/* ── PAGE HEADER ── */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 pt-8 pb-12 space-y-8">
        
        <div className="flex items-center space-x-4">
          <button
            onClick={onNavigateHome}
            className="px-4 py-2 bg-white border border-gray-200 hover:border-[#4A6B5B] rounded-full text-xs font-sans font-semibold uppercase tracking-wider text-[#212529] inline-flex items-center space-x-2 transition-all cursor-pointer shadow-xs"
          >
            <ArrowLeft className="w-4 h-4 text-[#4A6B5B]" />
            <span>Back to Home</span>
          </button>
        </div>

        <AnimatedSection direction="up">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[#C9A96E]">
              <div className="w-8 h-[1px] bg-[#C9A96E]" />
              <span className="text-xs font-sans font-semibold text-[#C9A96E] tracking-[0.25em] uppercase">
                THE ATELIER GALLERY
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold text-[#1A1A1A] leading-[1.1] tracking-tight">
              Mosaic of Moments <br />
              <span className="italic font-normal text-[#4A6B5B]">
                Dubai Wedding Gallery
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#212529]/75 font-sans max-w-3xl leading-relaxed font-light">
              Explore our full collection of high-fashion celebrations, royal palace galas, desert candlelit vows, and bespoke architectural florals across the United Arab Emirates.
            </p>
          </div>
        </AnimatedSection>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-3 pt-4 border-b border-gray-200 pb-6">
          {CATEGORIES.map((cat) => {
            const isSelected = cat === selectedCategory;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-xs font-sans font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#3B5649] text-white shadow-md border border-[#C9A96E]'
                    : 'bg-white text-[#212529] hover:bg-[#EAF0EC] border border-gray-200'
                }`}
              >
                {cat === 'All' ? 'All Moments' : cat}
              </button>
            );
          })}
        </div>

      </section>

      {/* ── STAGGERED MASONRY GALLERY GRID ── */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16">
        <motion.div
          layout
          className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          <AnimatePresence>
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                onClick={() => setLightboxItem(item)}
                className={`break-inside-avoid rounded-3xl overflow-hidden border border-gray-200 shadow-md relative group cursor-pointer bg-white gold-border-glow ${item.aspect}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Zoom Icon Button */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/30 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-5 h-5 text-[#E8D4A8]" />
                </div>

                {/* Tag Pill */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1 rounded-full text-[10px] font-sans font-semibold text-[#1F382B] border border-gray-200 uppercase tracking-widest">
                  {item.category}
                </div>

                {/* Title Overlay */}
                <div className="absolute bottom-5 left-5 right-5 text-white space-y-1 z-10">
                  <span className="text-[10px] font-sans uppercase tracking-widest text-[#E8D4A8] font-semibold block">
                    {item.location}
                  </span>
                  <h3 className="font-display text-xl font-normal text-white group-hover:text-[#E8D4A8] transition-colors leading-snug">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* ── FOOTER CALLOUT ── */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 pt-24 text-center">
        <div className="bg-white p-12 rounded-3xl border border-gray-200 shadow-xl space-y-6 max-w-3xl mx-auto">
          <span className="font-['Great_Vibes'] text-4xl text-[#C9A96E] block leading-none">
            Ready to compose your narrative?
          </span>
          <h2 className="font-display text-3xl font-normal text-[#212529]">
            Let’s Begin Designing Your Celebration
          </h2>
          <button
            onClick={onOpenEnquiry}
            className="px-8 py-3.5 bg-[#3B5649] hover:bg-[#2A3E34] text-white rounded-full transition-all text-xs font-sans font-semibold uppercase tracking-widest cursor-pointer shadow-md hover:scale-105"
          >
            Inquire With Atelier
          </button>
        </div>
      </section>

      {/* ── LIGHTBOX ZOOM MODAL ── */}
      <AnimatePresence>
        {lightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
            onClick={() => setLightboxItem(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl max-h-[90vh] bg-black rounded-3xl overflow-hidden shadow-2xl border border-[#C9A96E]/40 flex flex-col justify-between"
            >
              {/* Close Button */}
              <button
                onClick={() => setLightboxItem(null)}
                className="absolute top-4 right-4 z-30 w-11 h-11 rounded-full bg-black/70 text-white flex items-center justify-center border border-white/30 hover:bg-white hover:text-black transition-all cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="w-full max-h-[75vh] overflow-hidden flex items-center justify-center bg-gray-950">
                <img
                  src={lightboxItem.image}
                  alt={lightboxItem.title}
                  className="max-w-full max-h-[75vh] object-contain"
                />
              </div>

              {/* Lightbox Footer Bar */}
              <div className="p-6 bg-black/90 border-t border-white/10 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-[10px] font-sans uppercase tracking-widest text-[#E8D4A8] font-semibold">
                    {lightboxItem.category} · {lightboxItem.location}
                  </span>
                  <h3 className="font-display text-2xl font-normal text-white">
                    {lightboxItem.title}
                  </h3>
                </div>

                <button
                  onClick={() => { setLightboxItem(null); onOpenEnquiry(); }}
                  className="px-6 py-2.5 bg-gradient-to-r from-[#D4AF37] to-[#C9A96E] text-[#111] rounded-full text-xs font-sans font-semibold uppercase tracking-wider cursor-pointer shadow-md hover:scale-105 shrink-0"
                >
                  Plan A Celebration Like This
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};
