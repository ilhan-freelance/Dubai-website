import React from 'react';
import { motion } from 'framer-motion';

interface CommitmentSectionProps {
  onLearnMore: () => void;
}

export const CommitmentSection: React.FC<CommitmentSectionProps> = ({ onLearnMore }) => {
  return (
    <section className="py-12 md:py-16 lg:min-h-[85vh] bg-white text-[#212529] relative overflow-hidden px-6 border-t border-[#C9A96E]/20 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs sm:text-sm font-sans font-semibold tracking-[0.3em] uppercase text-[#4A6B5B] block">
              OUR COMMITMENT
            </span>

            <h2 className="font-['Playfair_Display'] text-4xl sm:text-6xl font-normal text-[#212529] tracking-tight leading-tight">
              Your Vision, <br />
              Our Flawless Execution
            </h2>

            <p className="text-xs sm:text-sm text-[#212529]/75 font-sans leading-relaxed font-normal">
              We take pride in turning your distinct vision into a seamless reality. From high-fashion spatial layouts to minute-by-minute vendor logistics, our Dubai atelier team coordinates every element with royal precision and white-glove discretion.
            </p>

            <div className="pt-2">
              <button
                onClick={onLearnMore}
                className="px-7 py-3 bg-[#4A6B5B] hover:bg-[#3B5649] text-white rounded-full transition-all text-xs font-sans font-semibold uppercase tracking-widest cursor-pointer shadow-sm hover:scale-105"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Right 3-Photo Overlapping Staggered Layout */}
          <div className="lg:col-span-6 relative h-[360px] sm:h-[400px] flex items-center justify-center">
            {/* Top Right Photo */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="absolute top-0 right-4 w-40 sm:w-52 aspect-[4/5] rounded-2xl overflow-hidden border-2 border-[#C9A96E]/30 shadow-lg z-10"
            >
              <img
                src="/portfolio-dubai.png"
                alt="Dubai Luxury Wedding Reception"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Middle Left Photo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute top-12 left-4 w-44 sm:w-56 aspect-[4/5] rounded-2xl overflow-hidden border-2 border-white shadow-xl z-20"
            >
              <img
                src="/about-couple-arch.png"
                alt="Couple at Wedding Arch"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Bottom Right Photo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute bottom-0 right-8 w-36 sm:w-48 aspect-[4/5] rounded-2xl overflow-hidden border-2 border-[#4A6B5B]/30 shadow-lg z-30"
            >
              <img
                src="/portfolio-garden.png"
                alt="Elegant Garden Reception"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
