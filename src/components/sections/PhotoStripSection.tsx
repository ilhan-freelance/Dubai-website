import React from 'react';
import { motion } from 'framer-motion';

const STRIP_PHOTOS = [
  '/portfolio-dubai.png',
  '/about-couple-arch.png',
  '/portfolio-garden.png',
  '/about-bridesmaids.png',
  '/portfolio-dance.png',
  '/portfolio-rings.png'
];

export const PhotoStripSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#FAF8F6] overflow-hidden px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
          {STRIP_PHOTOS.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.04 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="w-full h-[340px] sm:h-[400px] md:h-[450px] rounded-3xl overflow-hidden border-4 border-white ring-2 ring-[#C9A96E]/40 shadow-xl group cursor-pointer relative bg-white gold-border-glow"
            >
              <img
                src={img}
                alt={`Wedding Moment ${idx + 1}`}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
