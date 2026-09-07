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
    <section className="py-20 bg-[#FAF8F6] text-[#2A2226] relative overflow-hidden px-6 border-t border-[#C5D1BD]/60">
      <div className="max-w-5xl mx-auto text-center space-y-12">
        
        <div className="space-y-3 max-w-xl mx-auto">
          <span className="font-['Great_Vibes'] text-4xl sm:text-5xl text-[#6B7956] block leading-none">
            And more!
          </span>
          <p className="text-xs sm:text-sm text-[#2A2226]/80 font-sans leading-relaxed">
            From bespoke floral styling and live acoustic orchestras to VIP concierge travel, we handle every detail.
          </p>
        </div>

        {/* 4 Circular Icon Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {FEATURES.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="flex flex-col items-center space-y-4 group cursor-pointer"
              >
                <div className="w-20 h-20 rounded-full bg-[#EAEFE6] border-2 border-[#C5D1BD] flex items-center justify-center text-[#6B7956] group-hover:bg-[#6B7956] group-hover:text-white transition-all duration-300 shadow-md">
                  <Icon className="w-8 h-8" />
                </div>
                <h4 className="font-sans text-xs font-semibold uppercase tracking-wider text-[#2A2226] text-center max-w-[140px]">
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

