import React from 'react';
import { motion } from 'framer-motion';

interface AboutSectionProps {
  onLearnMore: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onLearnMore }) => {
  return (
    <section className="py-20 md:py-32 bg-[#FAF8F6] text-[#2A2226] relative overflow-hidden px-6 z-20">
      <div className="max-w-7xl mx-auto">

        {/* 3-column layout: left photos | center text | right photos */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* Left Column - 2 stacked/overlapping photos */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-end gap-4 relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-52 sm:w-60 aspect-[3/4] rounded-3xl overflow-hidden border-4 border-[#C5D1BD] shadow-xl bg-white"
            >
              <img
                src="/about-couple-arch.png"
                alt="Couple at wedding arch"
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="w-60 sm:w-72 aspect-[16/10] rounded-3xl overflow-hidden border-4 border-[#C5D1BD] shadow-xl bg-white -mt-6 lg:-mr-8 z-10"
            >
              <img
                src="/about-couple-laugh.png"
                alt="Happy couple laughing"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Center Text Block */}
          <div className="lg:col-span-4 text-center space-y-5 px-2">
            <span className="font-['Great_Vibes'] text-4xl sm:text-5xl text-[#6B7956] block leading-none">
              About Love Details
            </span>

            <h2 className="font-['Playfair_Display'] text-3xl sm:text-5xl font-normal text-[#2A2226] tracking-tight leading-tight">
              The Minds Behind <br />
              Your Perfect Day
            </h2>

            <p className="text-xs sm:text-sm text-[#2A2226]/80 font-sans leading-relaxed max-w-sm mx-auto font-normal">
              We believe every love story deserves a breathtaking celebration. Our dedicated team blends visionary creative direction with flawless logistics to curate bespoke luxury weddings tailored uniquely to your style. From initial concept sketch to the final grand exit, we handle every intricate detail seamlessly, allowing you to immerse yourself fully in the magic of your moments.
            </p>

            <div className="pt-2 flex items-center justify-center gap-4">
              <button
                onClick={onLearnMore}
                className="px-7 py-2.5 bg-[#6B7956] hover:bg-[#586745] text-white rounded-full transition-all text-xs font-sans font-semibold uppercase tracking-wider cursor-pointer shadow-sm"
              >
                Book a service
              </button>
              <button
                onClick={onLearnMore}
                className="px-7 py-2.5 bg-white border border-[#6B7956] text-[#6B7956] hover:bg-[#EAEFE6] rounded-full transition-all text-xs font-sans font-semibold uppercase tracking-wider cursor-pointer shadow-sm"
              >
                Read more
              </button>
            </div>
          </div>

          {/* Right Column - 2 stacked/overlapping photos */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start gap-4 relative">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-52 sm:w-60 aspect-[3/4] rounded-3xl overflow-hidden border-4 border-[#C5D1BD] shadow-xl bg-white"
            >
              <img
                src="/about-bridesmaids.png"
                alt="Elegant bridesmaids"
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="w-52 sm:w-60 aspect-[3/4] rounded-3xl overflow-hidden border-4 border-[#C5D1BD] shadow-xl bg-white -mt-6 lg:-ml-6 z-10"
            >
              <img
                src="/about-groom.png"
                alt="Elegant groom"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

