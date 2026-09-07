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
    <section className="py-12 bg-[#FAF8F6] overflow-hidden px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {STRIP_PHOTOS.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="w-full aspect-[3/4] rounded-2xl overflow-hidden border-2 border-white shadow-md group cursor-pointer"
            >
              <img
                src={img}
                alt={`Wedding Moment ${idx + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
