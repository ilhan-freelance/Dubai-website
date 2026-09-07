import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQSectionProps {
  onOpenEnquiry: () => void;
}

const FAQS = [
  {
    q: 'What regions in Dubai & UAE do you coordinate?',
    a: 'We coordinate full destination weddings, private island galas, and desert celebrations across Dubai, Abu Dhabi, Ras Al Khaimah, and international destination settings worldwide.'
  },
  {
    q: 'How far in advance should we book our Dubai wedding?',
    a: 'We recommend initiating planning 6 to 12 months prior for major UAE palace venues and peak winter season dates (October through April).'
  },
  {
    q: 'Do you handle destination guests & VIP concierge?',
    a: 'Yes. Our team offers end-to-end guest hospitality management including 5-star hotel block bookings, private airport transfers, luxury welcome bags, and curated pre-wedding excursions.'
  },
  {
    q: 'Can we customize our wedding package?',
    a: 'Every single event produced by Love Details is 100% bespoke and built from the ground up according to your vision, guest count, and aesthetic preferences.'
  }
];

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenEnquiry }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-24 md:py-36 bg-[#FAF8F6] text-[#2A2226] relative overflow-hidden px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: 2 Overlapping Curved Photo Frames */}
          <div className="lg:col-span-5 relative h-[380px] sm:h-[450px] flex items-center justify-center">
            {/* Top Left Photo Frame */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="absolute top-0 left-4 w-52 sm:w-64 aspect-4/5 rounded-3xl overflow-hidden border-4 border-white shadow-xl z-10"
            >
              <img
                src="/portfolio-dance.png"
                alt="Dubai Wedding Celebration"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Bottom Right Photo Frame */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute bottom-0 right-4 w-56 sm:w-68 aspect-4/5 rounded-3xl overflow-hidden border-4 border-white shadow-2xl z-20"
            >
              <img
                src="/portfolio-rings.png"
                alt="Dubai Wedding Detail"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Right Side: Accordions */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h2 className="font-['Playfair_Display'] text-3xl sm:text-5xl font-normal text-[#2A2226] tracking-tight">
                You may be wondering...
              </h2>
            </div>

            {/* Accordion List */}
            <div className="space-y-4">
              {FAQS.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={idx}
                    className="border border-[#C5D1BD] rounded-2xl overflow-hidden bg-white shadow-xs transition-all"
                  >
                    <button
                      onClick={() => toggleFAQ(idx)}
                      className="w-full p-5 text-left flex items-center justify-between font-sans text-sm font-semibold text-[#2A2226] hover:text-[#6B7956] cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      <span className="w-7 h-7 rounded-full bg-[#EAEFE6] text-[#6B7956] flex items-center justify-center shrink-0 ml-3">
                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </span>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#2A2226]/80 font-sans leading-relaxed border-t border-[#C5D1BD]/40"
                        >
                          {faq.a}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Bottom Callout Text */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#C5D1BD]/60 pt-6">
              <div>
                <span className="text-xs text-[#2A2226]/70 font-sans font-medium uppercase tracking-wider block">
                  Have more questions?
                </span>
                <span
                  onClick={onOpenEnquiry}
                  className="font-['Great_Vibes'] text-4xl text-[#6B7956] cursor-pointer hover:opacity-80 transition-opacity block leading-none mt-1"
                >
                  Let's Talk
                </span>
              </div>

              <button
                onClick={onOpenEnquiry}
                className="px-7 py-3 bg-[#6B7956] hover:bg-[#586745] text-white rounded-full transition-all text-xs font-sans font-semibold uppercase tracking-widest cursor-pointer shadow-xs"
              >
                Contact Atelier
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

