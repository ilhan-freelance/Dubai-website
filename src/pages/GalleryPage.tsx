import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

interface GalleryPageProps {
  onOpenEnquiry: () => void;
  onNavigateHome: () => void;
}

export interface GalleryItem {
  id: string;
  image: string;
  title: string;
  category: 'DJ & Nightlife' | 'Canopies & Arches' | 'Outdoor & Resorts' | 'Cultural Nights';
  location: string;
}

const INITIAL_GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'm-adit-diva-beach',
    image: '/adit-diva/adit-diva-beach.jpg',
    title: 'Adit & Diva Bougainvillea Beach Arches',
    category: 'Canopies & Arches',
    location: 'Saadiyat Beach Sanctuary'
  },
  {
    id: 'm-adit-diva-mandap',
    image: '/adit-diva/adit-diva-mandap.jpg',
    title: 'Adit & Diva Pastel Mandap & Waterfront Lawn',
    category: 'Canopies & Arches',
    location: 'Saadiyat Beach Sanctuary'
  },
  {
    id: 'm-adit-diva-night',
    image: '/adit-diva/adit-diva-night.jpg',
    title: 'Adit & Diva Starlight Canopy Gala Night',
    category: 'DJ & Nightlife',
    location: 'Waterfront Estate, Abu Dhabi'
  },
  {
    id: 'm-adit-diva-resort',
    image: '/adit-diva/adit-diva-resort.jpg',
    title: 'Adit & Diva Luxury Beachfront Resort & Cabanas',
    category: 'Outdoor & Resorts',
    location: 'Saadiyat Beach Resort'
  },
  {
    id: 'm-adit-diva-stage',
    image: '/adit-diva/adit-diva-stage.jpg',
    title: 'Adit & Diva Concert Stage & Night Lighting',
    category: 'DJ & Nightlife',
    location: 'Grand Ballroom Pavilion, Dubai'
  },
  {
    id: 'm1',
    image: '/moments-gold/moment-1-dj-neon.png',
    title: 'Abhishek Ki Baraat DJ Neon Setup',
    category: 'DJ & Nightlife',
    location: 'Dubai Desert Sanctuary'
  },
  {
    id: 'm2',
    image: '/moments-gold/moment-2-red-canopy.jpg',
    title: 'Grand Red Floral Canopy & Palace Facade',
    category: 'Canopies & Arches',
    location: 'Emirates Palace, Abu Dhabi'
  },
  {
    id: 'm3',
    image: '/moments-gold/moment-3-cybertruck-dj.png',
    title: 'Cybertruck Sound System & DJ Station',
    category: 'DJ & Nightlife',
    location: 'Private Dubai Estate'
  },
  {
    id: 'm4',
    image: '/moments-gold/moment-4-blossom-arch.png',
    title: 'Pastel Blossom Entrance Arch & Veil',
    category: 'Canopies & Arches',
    location: 'Jumeirah Beach Hotel'
  },
  {
    id: 'm5',
    image: '/moments-gold/moment-5-gold-hall.png',
    title: 'Gold Chandelier & Lush Botanical Canopy',
    category: 'Canopies & Arches',
    location: 'Armani Hotel Ballroom'
  },
  {
    id: 'm6',
    image: '/moments-gold/moment-6-poolside-floral.jpg',
    title: 'Poolside Pergola Floral Arch & Pampas Grass',
    category: 'Outdoor & Resorts',
    location: 'Anantara The Palm Dubai'
  },
  {
    id: 'm7',
    image: '/moments-gold/moment-7-magenta-dj-stage.jpg',
    title: 'Bougainvillea Magenta Stage & DJ Console',
    category: 'DJ & Nightlife',
    location: 'Saadiyat Island Resort'
  },
  {
    id: 'm8',
    image: '/moments-gold/moment-8-pink-tent-runway.jpg',
    title: 'Royal Pink & Gold Arabian Canopy Walkway',
    category: 'Canopies & Arches',
    location: 'The Ritz-Carlton Dubai'
  },
  {
    id: 'm9',
    image: '/moments-gold/moment-9-turtle-bay-entrance.jpg',
    title: 'Turtle Bay Resort Floral Entrance & Pathway',
    category: 'Outdoor & Resorts',
    location: 'Park Hyatt Saadiyat'
  },
  {
    id: 'm10',
    image: '/moments-gold/moment-10-dhol-night-bhatias.jpg',
    title: "Dhol Night Hosted by Bhatia's - Grand Celebration",
    category: 'Cultural Nights',
    location: 'Taj Exotica Resort & Spa'
  }
];

export const GalleryPage: React.FC<GalleryPageProps> = ({ onOpenEnquiry, onNavigateHome }) => {
  return (
    <div className="pt-6 sm:pt-8 pb-20 bg-[#FAF7F2] text-[#212529] min-h-screen">
      
      {/* ── TOP HEADER ── */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 pt-2 pb-6 flex flex-col md:flex-row items-center justify-between border-b border-[#C8C0B5]/40 mb-10 gap-6">
        <button
          onClick={onNavigateHome}
          className="px-5 py-2.5 bg-white hover:bg-[#7A8864] hover:text-white rounded-full text-xs font-sans font-semibold uppercase tracking-wider text-[#212529] inline-flex items-center space-x-2 transition-all cursor-pointer border border-[#C8C0B5]/50 shadow-xs shrink-0"
        >
          <ArrowLeft className="w-4 h-4 text-[#7A8864]" />
          <span>Back to Home</span>
        </button>

        {/* Stylish Underlined Editorial Header: Client Diaries */}
        <div className="text-center">
          <div className="relative inline-block pb-3">
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal text-[#262822] tracking-tight italic leading-tight">
              Client Diaries
            </h1>
            {/* Elegant Luxury Gold & Olive Underline Accent */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 sm:w-48 h-1 bg-gradient-to-r from-transparent via-[#7A8864] to-transparent rounded-full shadow-sm" />
          </div>
        </div>

        <button
          onClick={onOpenEnquiry}
          className="px-6 py-2.5 bg-[#7A8864] hover:bg-[#687553] text-white rounded-full text-xs font-sans font-semibold uppercase tracking-wider transition-all cursor-pointer shadow-md shrink-0"
        >
          Inquire
        </button>
      </header>

      {/* ── UNCONSTRAINED NATURAL PHOTO WALL (NO FRAMES, NO CAPTIONS, NO CLICKS) ── */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {INITIAL_GALLERY_ITEMS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.03 }}
              className="break-inside-avoid overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-auto object-contain rounded-2xl block"
              />
            </motion.div>
          ))}
        </div>
      </main>

    </div>
  );
};
