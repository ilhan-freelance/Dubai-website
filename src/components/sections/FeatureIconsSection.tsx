import React from 'react';
import { Sparkles, Music, Cake, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const FEATURES = [
  {
    icon: Sparkles,
    title: 'Custom Venue & Styling'
  },
  {
    icon: Music,
    title: 'Entertainment & Music'
  },
  {
    icon: Cake,
    title: 'Vendor Coordination'
  },
  {
    icon: ShieldCheck,
    title: 'Full Day-of Operations'
  }
];

export const FeatureIconsSection: React.FC = () => {
  return (
    <section className="py-10 md:py-14 bg-[#FAF8F6] text-[#2A2226] relative overflow-hidden px-6 border-t border-[#C5D1BD]/60 flex items-center justify-center">
      <div className="max-w-5xl mx-auto text-center space-y-8 w-full">
        
        <div className="space-y-2 max-w-xl mx-auto">
          <span className="text-xs sm:text-sm font-sans font-semibold tracking-[0.3em] uppercase text-[#4A6B5B] block">
            ATELIER HIGHLIGHTS
          </span>
          <p className="text-xs sm:text-sm text-[#2A2226]/80 font-sans leading-relaxed">
            From bespoke floral styling and live acoustic orchestras to VIP concierge travel, we handle every detail.
          </p>
        </div>

        {/* 4 Circular Icon Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {FEATURES.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="flex flex-col items-center space-y-3 group cursor-pointer"
              >
                <div className="w-16 h-16 rounded-full bg-[#EAEFE6] border border-[#C5D1BD] flex items-center justify-center text-[#6B7956] group-hover:bg-[#6B7956] group-hover:text-white transition-all duration-300 shadow-xs">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="font-sans text-[11px] font-semibold uppercase tracking-wider text-[#2A2226] text-center max-w-[130px]">
                  {feat.title}
                </h4>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

