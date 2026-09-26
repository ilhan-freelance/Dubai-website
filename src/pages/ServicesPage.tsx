import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { AnimatedSection } from '../components/common/AnimatedSection';

interface ServicesPageProps {
  onOpenEnquiry: (eventType?: string) => void;
}

const EVENTS_MANAGED = [
  {
    id: 'weddings',
    title: 'Weddings',
    image: '/offering_weddings.png',
    description: 'We specialize in end-to-end master production, bespoke mandap architecture, and waterfront spatial design. From intimate beach vows to grand multi-day royal wedding galas across Dubai & Abu Dhabi, our atelier orchestrates artisan curation, floral installations, and VIP concierge protocol.',
    tags: ['Mandap Architecture', 'Waterfront Galas', 'VIP Concierge']
  },
  {
    id: 'private-parties',
    title: 'Private Parties',
    image: '/offering_private_parties.png',
    description: 'Transforming private estates and villa poolside lawns into exclusive evening lounges with warm ambient illumination. Designed for discerning hosts seeking bespoke party styling, curated entertainment, mixology bars, and flawless acoustic sound execution.',
    tags: ['Villa Poolside Lounges', 'Ambient Lighting', 'Mixology Bars']
  },
  {
    id: 'religious-events',
    title: 'Religious Events',
    image: '/offering_religious_events.png',
    description: 'Sacred traditional ceremonies brought to life with marigolds, jasmine floral arches, and regal silk drapes. Combining authentic ritual aesthetics with custom pooja architecture, brass diya illumination, and respectful cultural heritage planning.',
    tags: ['Traditional Floral Art', 'Brass Diya Lighting', 'Cultural Protocol']
  },
  {
    id: 'corporate-events',
    title: 'Corporate Events',
    image: '/offering_corporate_events.png',
    description: "High-impact executive galas, brand launches, and VIP summits hosted in Dubai's iconic luxury ballrooms. Featuring sophisticated architectural lighting, bespoke banquet styling, custom stage production, and flawless brand narrative management.",
    tags: ['Executive Galas', 'Ballroom Styling', 'Brand Summits']
  },
  {
    id: 'milestone-birthdays',
    title: 'Milestone Birthdays',
    image: '/offering_milestone_birthdays.png',
    description: 'Glamorous milestone 30th, 50th, and special age galas hosted in premier rooftop venues across the UAE. Complete with custom neon art installations, ambient lighting design, champagne towers, and high-energy live DJ sound production.',
    tags: ['Rooftop Venues', 'Neon Art & DJ', 'Champagne Towers']
  },
  {
    id: 'celebrations',
    title: 'Celebrations',
    image: '/offering_celebrations.png',
    description: "Custom-commissioned floral arches, candlelit pathways, and romantic settings for life's treasured moments. Tailored styling for proposals, vow renewals, anniversaries, and intimate family milestone gatherings.",
    tags: ['Romantic Floral Arches', 'Proposals & Anniversaries', 'Custom Styling']
  }
];

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenEnquiry }) => {
  return (
    <div className="pt-0 pb-28 bg-[#FAF8F6] text-[#262822] overflow-hidden">
      
      {/* ── PAGE HERO SECTION WITH HERO IMAGE ── */}
      <section className="relative w-full pt-0 pb-16">
        <AnimatedSection direction="up">
          <div className="w-full aspect-[21/9] sm:aspect-[24/9] md:aspect-[28/9] overflow-hidden relative group bg-[#1A1C18]">
            <motion.img
              src="/offerings_hero_section.png"
              alt="Love Details Atelier Services Planning"
              className="w-full h-full object-cover"
            />
          </div>
        </AnimatedSection>
      </section>

      {/* ── EVENTS MANAGED SECTION ── */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 pt-10 sm:pt-14 md:pt-16 pb-20 space-y-12">
        <AnimatedSection direction="up">
          <div className="text-center mb-4 sm:mb-8">
            <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-light text-[#262822] tracking-tight leading-snug">
              Our Curated Atelier Offerings &amp; <span className="italic text-[#7A8864]">Event Verticals</span>
            </h2>
            <div className="w-16 h-0.5 bg-[#7A8864]/40 mx-auto mt-3" />
          </div>
        </AnimatedSection>

        {/* Alternating Editorial Sections */}
        <div className="space-y-20 sm:space-y-28">
          {EVENTS_MANAGED.map((event, index) => {
            const isEven = index % 2 === 0;
            return (
              <AnimatedSection key={event.id} direction="up">
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${index === 0 ? 'pt-4 sm:pt-6' : 'border-t border-[#C8C0B5]/40 pt-16 sm:pt-20'}`}>
                  
                  {/* Image Block */}
                  <div
                    className={`lg:col-span-6 ${
                      isEven ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <div className="w-full aspect-[4/3] overflow-hidden rounded-3xl border border-[#D4AF37]/35 shadow-2xl relative group bg-[#1A1C18]">
                      <motion.img
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
                      />
                    </div>
                  </div>

                  {/* Text Editorial Block */}
                  <div
                    className={`lg:col-span-6 space-y-6 max-w-xl ${
                      isEven ? 'lg:order-2 lg:pl-4' : 'lg:order-1 lg:pr-4'
                    }`}
                  >
                    <div className="space-y-3">
                      <h3 className="font-serif text-4xl sm:text-6xl font-light text-[#262822] tracking-tight">
                        {event.title}
                      </h3>
                      <div className="w-14 h-0.5 bg-[#7A8864]/50 mt-3" />
                    </div>

                    <p className="font-serif text-base sm:text-lg text-[#262822]/85 border-l-2 border-[#7A8864]/40 pl-5 py-1 leading-relaxed text-pretty">
                      {event.description}
                    </p>

                    <div className="flex flex-wrap gap-2.5 pt-1">
                      {event.tags.map((tag, idx) => (
                        <span key={idx} className="px-3.5 py-1.5 bg-[#7A8864]/10 text-[#7A8864] rounded-full text-xs font-serif tracking-wide border border-[#7A8864]/20">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="pt-2">
                      <button
                        onClick={() => onOpenEnquiry(event.title)}
                        className="button-editorial px-8 py-4 bg-[#7A8864] text-[#FAF7F2] hover:bg-[#5C674A] transition-all inline-flex items-center space-x-3 rounded-full shadow-lg cursor-pointer hover:scale-[1.02]"
                      >
                        <span>ENQUIRE FOR {event.title.toUpperCase()}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                </div>
              </AnimatedSection>
            );
          })}
        </div>
    </div>
  );
};

