import React from 'react';
import { motion } from 'framer-motion';

interface WeddingGallerySectionProps {
  onOpenFullGallery: () => void;
}

// All 10 client celebration moment photos
const SINGLE_ROW_PHOTOS = [
  { img: '/moments-gold/moment-1-dj-neon.png', width: 'w-[380px]' },
  { img: '/moments-gold/moment-2-red-canopy.jpg', width: 'w-[440px]' },
  { img: '/moments-gold/moment-3-cybertruck-dj.png', width: 'w-[360px]' },
  { img: '/moments-gold/moment-4-blossom-arch.png', width: 'w-[320px]' },
  { img: '/moments-gold/moment-5-gold-hall.png', width: 'w-[420px]' },
  { img: '/moments-gold/moment-6-poolside-floral.jpg', width: 'w-[400px]' },
  { img: '/moments-gold/moment-7-magenta-dj-stage.jpg', width: 'w-[340px]' },
  { img: '/moments-gold/moment-8-pink-tent-runway.jpg', width: 'w-[390px]' },
  { img: '/moments-gold/moment-9-turtle-bay-entrance.jpg', width: 'w-[430px]' },
  { img: '/moments-gold/moment-10-dhol-night-bhatias.jpg', width: 'w-[350px]' }
];

// Duplicate for 100% seamless infinite loop
const DUP_PHOTOS = [...SINGLE_ROW_PHOTOS, ...SINGLE_ROW_PHOTOS];

export const WeddingGallerySection: React.FC<WeddingGallerySectionProps> = ({ onOpenFullGallery }) => {
  return (
    <section className="py-10 md:py-16 bg-white text-[#212529] px-4 md:px-8 border-t border-gray-100 flex items-center justify-center">
      
      {/* Single Moving Photo Banner Container (No Grid, Single Direction Strip) */}
      <div 
        onClick={onOpenFullGallery}
        className="w-full max-w-7xl h-[420px] md:h-[480px] rounded-3xl overflow-hidden relative group cursor-pointer bg-black shadow-xl"
      >
        
        {/* Single Row Continuous Track Moving in ONE Direction (Left to Right) */}
        <div className="absolute inset-0 flex items-center overflow-hidden opacity-90 group-hover:opacity-100 transition-opacity duration-500">
          <motion.div
            className="flex gap-3 shrink-0 h-full py-1"
            animate={{ x: ['-50%', '0%'] }}
            transition={{
              ease: 'linear',
              duration: 35,
              repeat: Infinity
            }}
          >
            {DUP_PHOTOS.map((item, idx) => (
              <div key={idx} className={`${item.width} h-full shrink-0 overflow-hidden relative bg-gray-800 rounded-xl`}>
                <img
                  src={item.img}
                  alt="Wedding Moment"
                  className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Dark Vignette Overlay for High Text Readability */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-500 z-10" />

        {/* Clean 1-2 Line Text & Button Directly ON the Moving Photo Banner */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6 space-y-3">
          
          <h2 className="font-['Playfair_Display'] text-3xl sm:text-5xl md:text-6xl font-normal text-white drop-shadow-xl tracking-tight leading-tight">
            Moments Frozen in Gold
          </h2>

          <p className="text-xs sm:text-sm text-white/90 font-sans tracking-wide max-w-md drop-shadow-md">
            A visual lookbook of candid emotions across 50+ celebrations
          </p>

          <div className="pt-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onOpenFullGallery();
              }}
              className="px-8 py-3 bg-[#C9A96E] hover:bg-[#b8975c] text-white rounded-full text-xs font-sans font-bold uppercase tracking-widest transition-all shadow-xl hover:scale-108 cursor-pointer"
            >
              VIEW MORE
            </button>
          </div>

        </div>

      </div>

    </section>
  );
};
