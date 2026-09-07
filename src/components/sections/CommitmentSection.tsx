import React from 'react';
import { motion } from 'framer-motion';

interface CommitmentSectionProps {
  onLearnMore: () => void;
}

export const CommitmentSection: React.FC<CommitmentSectionProps> = ({ onLearnMore }) => {
  return (
    <section className="py-24 md:py-36 bg-[#FAF8F6] text-[#2A2226] relative overflow-hidden px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <span className="font-['Great_Vibes'] text-4xl sm:text-5xl text-[#6B7956] block leading-none">
              Our Commitment
            </span>

            <h2 className="font-['Playfair_Display'] text-3xl sm:text-5xl font-normal text-[#2A2226] tracking-tight leading-tight">
              Your Vision, <br />
              Our Flawless Execution
            </h2>

            <p className="text-xs sm:text-sm text-[#2A2226]/80 font-sans leading-relaxed font-normal">
              We take pride in turning your distinct vision into a seamless reality. From high-fashion spatial layouts to minute-by-minute vendor logistics, our Dubai atelier team coordinates every element with royal precision and white-glove discretion.
            </p>

            <div className="pt-2">
              <button
                onClick={onLearnMore}
                className="px-8 py-3.5 bg-[#6B7956] hover:bg-[#586745] text-white rounded-full transition-all text-xs font-sans font-semibold uppercase tracking-widest cursor-pointer shadow-md"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Right 3-Photo Overlapping Staggered Layout */}
          <div className="lg:col-span-6 relative h-[420px] sm:h-[480px] flex items-center justify-center">
            {/* Top Right Photo */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="absolute top-0 right-4 w-48 sm:w-60 aspect-[4/5] rounded-3xl overflow-hidden border-4 border-white shadow-xl z-10"
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
              className="absolute top-16 left-4 w-52 sm:w-64 aspect-[4/5] rounded-3xl overflow-hidden border-4 border-white shadow-2xl z-20"
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
              className="absolute bottom-0 right-12 w-44 sm:w-56 aspect-[4/5] rounded-3xl overflow-hidden border-4 border-white shadow-xl z-30"
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

