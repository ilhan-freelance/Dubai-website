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
    <section className="py-12 md:py-16 lg:min-h-[85vh] bg-white text-[#212529] relative overflow-hidden px-6 border-t border-[#C9A96E]/20 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Side: 2 Overlapping Curved Photo Frames */}
          <div className="lg:col-span-5 relative h-[320px] sm:h-[380px] flex items-center justify-center">
            {/* Top Left Photo Frame */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="absolute top-0 left-4 w-44 sm:w-56 aspect-4/5 rounded-2xl overflow-hidden border-2 border-[#C9A96E]/30 shadow-lg z-10"
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
              className="absolute bottom-0 right-4 w-48 sm:w-60 aspect-4/5 rounded-2xl overflow-hidden border-2 border-[#4A6B5B]/30 shadow-xl z-20"
            >
              <img
                src="/portfolio-rings.png"
                alt="Dubai Wedding Detail"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Right Side: Accordions */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-[#C9A96E]">
                <div className="w-6 h-[1px] bg-[#C9A96E]" />
                <span className="text-xs font-sans font-semibold tracking-[0.25em] uppercase">
                  COMMON INQUIRIES
                </span>
              </div>

              <h2 className="font-['Playfair_Display'] text-4xl sm:text-5xl font-bold text-[#1A1A1A] tracking-tight">
                Frequently Asked Questions
              </h2>
            </div>

            {/* Accordion List */}
            <div className="space-y-3">
              {FAQS.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={idx}
                    className="border border-[#C9A96E]/20 rounded-xl overflow-hidden bg-white shadow-xs transition-all hover:border-[#C9A96E]/50"
                  >
                    <button
                      onClick={() => toggleFAQ(idx)}
                      className="w-full p-4 text-left flex items-center justify-between font-sans text-sm sm:text-base font-semibold text-[#212529] hover:text-[#4A6B5B] cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      <span className="w-6 h-6 rounded-full bg-[#EAF0EC] text-[#4A6B5B] flex items-center justify-center shrink-0 ml-3">
                        {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                      </span>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="px-4 pb-4 pt-1 text-xs text-[#212529]/75 font-sans leading-relaxed border-t border-[#C9A96E]/15"
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
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-[#C9A96E]/20 pt-4">
              <div>
                <span className="text-[11px] text-[#212529]/70 font-sans font-medium uppercase tracking-wider block">
                  Have specific requirements?
                </span>
              </div>

              <button
                onClick={onOpenEnquiry}
                className="px-6 py-2.5 bg-[#4A6B5B] hover:bg-[#3B5649] text-white rounded-full transition-all text-xs font-sans font-semibold uppercase tracking-widest cursor-pointer shadow-xs hover:scale-105"
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
