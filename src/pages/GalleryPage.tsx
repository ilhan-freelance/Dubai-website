import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowLeft } from 'lucide-react';

interface GalleryPageProps {
  onOpenEnquiry: () => void;
  onNavigateHome: () => void;
}

interface GalleryItem {
  id: string;
  image: string;
  title: string;
  aspect: string;
}

// 40+ Dense Photo Wall Array matching the reference screenshot
const GALLERY_ITEMS: GalleryItem[] = [
  { id: 'g1', image: '/portfolio-dubai.png', title: 'Emirates Palace Royal Gala', aspect: 'aspect-[3/4]' },
  { id: 'g2', image: '/about-couple-arch.png', title: 'Cascading Hydrangea Arch', aspect: 'aspect-[4/5]' },
  { id: 'g3', image: '/portfolio-garden.png', title: 'Bvlgari Resort Lawn', aspect: 'aspect-[3/4]' },
  { id: 'g4', image: '/about-couple-laugh.png', title: 'Sunset Dune Romance', aspect: 'aspect-[3/5]' },
  { id: 'g5', image: '/portfolio-dance.png', title: 'Midnight Crystal Reception', aspect: 'aspect-[4/5]' },
  { id: 'g6', image: '/portfolio-rings.png', title: 'Solstice Ring Details', aspect: 'aspect-[3/4]' },
  { id: 'g7', image: '/portfolio-desert.png', title: 'Al Maha Desert Dinner', aspect: 'aspect-[2/3]' },
  { id: 'g8', image: '/about-bridesmaids.png', title: 'Bridal Party Toast', aspect: 'aspect-[4/5]' },
  { id: 'g9', image: '/hero-aisle.png', title: 'Floral Aisle Entry', aspect: 'aspect-[3/4]' },
  { id: 'g10', image: '/about-groom.png', title: 'Groom Preparations', aspect: 'aspect-[3/5]' },
  { id: 'g11', image: '/hero_journal_editorial.png', title: 'Couture Tablescape', aspect: 'aspect-[4/5]' },
  { id: 'g12', image: '/hero_venues_dubai.png', title: 'Royal Court Pavilion', aspect: 'aspect-[3/4]' },
  { id: 'g13', image: '/hero_about_atelier.png', title: 'Atelier Styling Session', aspect: 'aspect-[2/3]' },
  { id: 'g14', image: '/hero_services_atelier.png', title: 'Palace Stage Production', aspect: 'aspect-[4/5]' },
  { id: 'g15', image: '/hero_testimonials_trust.png', title: 'Oceanfront Vows', aspect: 'aspect-[3/4]' },
  { id: 'g16', image: '/hero_packages_scope.png', title: 'Champagne Tower Toast', aspect: 'aspect-[3/5]' },
  { id: 'g17', image: '/hero_portfolio_archive.png', title: 'Architectural Lighting', aspect: 'aspect-[4/5]' },
  { id: 'g18', image: '/hero_contact_atelier.png', title: 'VIP Guest Concierge', aspect: 'aspect-[3/4]' },
  { id: 'g19', image: '/service-planning.png', title: 'Floral Installation', aspect: 'aspect-[2/3]' },
  { id: 'g20', image: '/service-coordination.png', title: 'Grand Staircase Entry', aspect: 'aspect-[4/5]' },
  { id: 'g21', image: '/service-day-of.png', title: 'Candlelit Alfresco Table', aspect: 'aspect-[3/4]' },
  { id: 'g22', image: '/about-couple-arch.png', title: 'Hydrangea Mandap Decor', aspect: 'aspect-[3/5]' },
  { id: 'g23', image: '/portfolio-dubai.png', title: 'Burj Al Arab Ballroom', aspect: 'aspect-[4/5]' },
  { id: 'g24', image: '/about-couple-laugh.png', title: 'Desert Sunset Portraits', aspect: 'aspect-[3/4]' },
  { id: 'g25', image: '/portfolio-garden.png', title: 'Coastal Glasshouse Lawn', aspect: 'aspect-[2/3]' },
  { id: 'g26', image: '/portfolio-dance.png', title: 'Sparkler First Dance', aspect: 'aspect-[4/5]' },
  { id: 'g27', image: '/portfolio-rings.png', title: 'Custom Ring Box Details', aspect: 'aspect-[3/4]' },
  { id: 'g28', image: '/portfolio-desert.png', title: 'Firefly Dune Evening', aspect: 'aspect-[3/5]' },
  { id: 'g29', image: '/about-bridesmaids.png', title: 'Bridesmaid Gown Details', aspect: 'aspect-[4/5]' },
  { id: 'g30', image: '/hero-aisle.png', title: 'Candlelit Runway Aisle', aspect: 'aspect-[3/4]' },
  { id: 'g31', image: '/about-groom.png', title: 'Tuxedo Styling Suite', aspect: 'aspect-[2/3]' },
  { id: 'g32', image: '/hero_journal_editorial.png', title: 'Gold Calligraphy Stationery', aspect: 'aspect-[4/5]' },
  { id: 'g33', image: '/hero_venues_dubai.png', title: 'Palm Jumeirah Terrace', aspect: 'aspect-[3/4]' },
  { id: 'g34', image: '/hero_about_atelier.png', title: 'Bridal Veil Fitting', aspect: 'aspect-[3/5]' },
  { id: 'g35', image: '/hero_services_atelier.png', title: 'Midnight Gala Fireworks', aspect: 'aspect-[4/5]' },
  { id: 'g36', image: '/hero_testimonials_trust.png', title: 'Couples Sunset Toast', aspect: 'aspect-[3/4]' }
];

export const GalleryPage: React.FC<GalleryPageProps> = ({ onOpenEnquiry, onNavigateHome }) => {
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  return (
    <div className="pt-20 pb-20 bg-white text-[#212529] min-h-screen">
      
      {/* ── MINIMAL TOP HEADER (Matching User Screenshot) ── */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 pt-4 pb-6 flex items-center justify-between border-b border-gray-100 mb-4">
        <button
          onClick={onNavigateHome}
          className="px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-full text-xs font-sans font-semibold uppercase tracking-wider text-[#212529] inline-flex items-center space-x-2 transition-all cursor-pointer border border-gray-200"
        >
          <ArrowLeft className="w-4 h-4 text-[#3B5649]" />
          <span>Back to Home</span>
        </button>

        <h1 className="font-['Playfair_Display'] text-2xl sm:text-4xl font-normal text-[#212529] tracking-tight">
          Client Diaries
        </h1>

        <button
          onClick={onOpenEnquiry}
          className="px-5 py-2 bg-[#3B5649] hover:bg-[#2A3E34] text-white rounded-full text-xs font-sans font-semibold uppercase tracking-wider transition-all cursor-pointer shadow-xs"
        >
          Inquire
        </button>
      </header>

      {/* ── DENSE 4-COLUMN MASONRY PHOTO WALL (Exact Match with Reference Image) ── */}
      <main className="max-w-7xl mx-auto px-2 sm:px-4">
        <div className="columns-2 md:columns-3 lg:columns-4 gap-2 sm:gap-2.5 space-y-2 sm:space-y-2.5">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={() => setLightboxItem(item)}
              className="break-inside-avoid overflow-hidden rounded-lg sm:rounded-xl relative group cursor-pointer bg-gray-100 border border-gray-100"
            >
              <motion.img
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
                src={item.image}
                alt={item.title}
                className="w-full h-auto object-cover block"
              />
              
              {/* Soft Subtle Hover Vignette & Title */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                <span className="font-['Playfair_Display'] text-xs font-normal text-white drop-shadow-md">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* ── LIGHTBOX ZOOM MODAL ── */}
      <AnimatePresence>
        {lightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setLightboxItem(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[90vh] bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/20 flex flex-col justify-between"
            >
              <button
                onClick={() => setLightboxItem(null)}
                className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-black/70 text-white flex items-center justify-center border border-white/30 hover:bg-white hover:text-black transition-all cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-full max-h-[75vh] overflow-hidden flex items-center justify-center bg-gray-950">
                <img
                  src={lightboxItem.image}
                  alt={lightboxItem.title}
                  className="max-w-full max-h-[75vh] object-contain"
                />
              </div>

              <div className="p-4 bg-black/90 text-white flex items-center justify-between border-t border-white/10">
                <h3 className="font-['Playfair_Display'] text-lg font-normal text-white">
                  {lightboxItem.title}
                </h3>
                <button
                  onClick={() => { setLightboxItem(null); onOpenEnquiry(); }}
                  className="px-5 py-2 bg-[#3B5649] hover:bg-[#2A3E34] text-white rounded-full text-xs font-sans font-semibold uppercase tracking-wider cursor-pointer"
                >
                  Book Atelier
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};
