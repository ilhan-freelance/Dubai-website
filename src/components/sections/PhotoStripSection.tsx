import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Volume2, VolumeX, X } from 'lucide-react';

interface StripItem {
  id: string;
  type: 'photo' | 'reel';
  image: string;
  video?: string;
}

const STRIP_ITEMS: StripItem[] = [
  {
    id: 'item-1',
    type: 'photo',
    image: '/portfolio-dubai.png',
  },
  {
    id: 'item-2',
    type: 'reel',
    image: '/portfolio-dance.png',
    video: '/hero-video.mp4',
  },
  {
    id: 'item-3',
    type: 'photo',
    image: '/about-couple-arch.png',
  },
  {
    id: 'item-4',
    type: 'reel',
    image: '/portfolio-garden.png',
    video: '/hero-video.mp4',
  },
  {
    id: 'item-5',
    type: 'photo',
    image: '/portfolio-rings.png',
  },
  {
    id: 'item-6',
    type: 'reel',
    image: '/about-bridesmaids.png',
    video: '/hero-video.mp4',
  },
];

export const PhotoStripSection: React.FC = () => {
  const [activeModalItem, setActiveModalItem] = useState<StripItem | null>(null);
  const [mutedStates, setMutedStates] = useState<Record<string, boolean>>({
    'item-2': true,
    'item-4': true,
    'item-6': true,
  });
  const [playingStates, setPlayingStates] = useState<Record<string, boolean>>({});
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});

  const handleMouseEnter = (id: string) => {
    const video = videoRefs.current[id];
    if (video) {
      video.play().catch(() => {});
      setPlayingStates((prev) => ({ ...prev, [id]: true }));
    }
  };

  const handleMouseLeave = (id: string) => {
    const video = videoRefs.current[id];
    if (video) {
      video.pause();
      setPlayingStates((prev) => ({ ...prev, [id]: false }));
    }
  };

  const toggleMute = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    const video = videoRefs.current[id];
    if (video) {
      const nextMuted = !video.muted;
      video.muted = nextMuted;
      setMutedStates((prev) => ({ ...prev, [id]: nextMuted }));
    }
  };

  return (
    <section className="pt-2 md:pt-4 pb-16 md:pb-24 bg-[#FAF8F6] overflow-hidden px-4 sm:px-6 md:px-10 relative">
      <div className="max-w-7xl mx-auto">
        {/* 6 Cards Alternating: 1.Pic, 2.Reel, 3.Pic, 4.Reel, 5.Pic, 6.Reel */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {STRIP_ITEMS.map((item, idx) => {
            const isReel = item.type === 'reel';
            const isPlaying = playingStates[item.id];
            const isMuted = mutedStates[item.id] ?? true;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8, scale: 1.03 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                onMouseEnter={() => isReel && handleMouseEnter(item.id)}
                onMouseLeave={() => isReel && handleMouseLeave(item.id)}
                onClick={() => setActiveModalItem(item)}
                className="w-full h-[360px] sm:h-[420px] md:h-[470px] rounded-3xl overflow-hidden border-4 border-white ring-2 ring-[#C9A96E]/30 shadow-xl group cursor-pointer relative bg-[#1A1D20] gold-border-glow transition-all"
              >
                {/* Media Content */}
                {isReel && item.video ? (
                  <video
                    ref={(el) => { videoRefs.current[item.id] = el; }}
                    src={item.video}
                    poster={item.image}
                    loop
                    muted={isMuted}
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <img
                    src={item.image}
                    alt="Dubai Atelier Moment"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                )}

                {/* Subtle vignette hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 opacity-30 group-hover:opacity-50 transition-opacity" />

                {/* Sound Mute/Unmute Toggle for Reels */}
                {isReel && (
                  <button
                    onClick={(e) => toggleMute(e, item.id)}
                    className="absolute top-3.5 right-3.5 z-20 p-2 rounded-full bg-black/50 backdrop-blur-md border border-white/30 text-white hover:bg-black/80 hover:scale-110 transition-all shadow-md"
                    title={isMuted ? 'Unmute' : 'Mute'}
                  >
                    {isMuted ? <VolumeX className="w-3.5 h-3.5 text-white/80" /> : <Volume2 className="w-3.5 h-3.5 text-[#E2C08D]" />}
                  </button>
                )}

                {/* Center Play Button for Reel identification */}
                {isReel && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                    <div
                      className={`w-12 h-12 rounded-full bg-white/25 backdrop-blur-md border border-white/50 flex items-center justify-center text-white shadow-xl transition-all duration-300 ${
                        isPlaying ? 'scale-0 opacity-0' : 'scale-100 opacity-90 group-hover:scale-110'
                      }`}
                    >
                      <Play className="w-5 h-5 ml-0.5 fill-white text-white" />
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Clean Modal Lightbox */}
      <AnimatePresence>
        {activeModalItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveModalItem(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md h-[80vh] max-h-[750px] bg-black rounded-3xl overflow-hidden border border-white/20 shadow-2xl flex items-center justify-center"
            >
              <button
                onClick={() => setActiveModalItem(null)}
                className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/20 hover:bg-white hover:text-black transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              {activeModalItem.type === 'reel' && activeModalItem.video ? (
                <video
                  src={activeModalItem.video}
                  poster={activeModalItem.image}
                  autoPlay
                  controls
                  loop
                  playsInline
                  className="w-full h-full object-cover rounded-3xl"
                />
              ) : (
                <img
                  src={activeModalItem.image}
                  alt="Dubai Atelier"
                  className="w-full h-full object-cover rounded-3xl"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};




