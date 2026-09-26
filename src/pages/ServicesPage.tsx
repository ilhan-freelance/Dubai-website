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
    lines: [
      'Bespoke mandap architecture, waterfront floral installations, and full-scale spatial design.',
      'From intimate beach vows to grand multi-day royal celebrations across Dubai & Abu Dhabi.',
      'Complete end-to-end master production, artisan curation, and VIP guest concierge care.'
    ]
  },
  {
    id: 'private-parties',
    title: 'Private Parties',
    image: '/offering_private_parties.png',
    lines: [
      'Intimate villa poolside lounge setups, warm ambient illumination, and bespoke party styling.',
      'Crafted for discerning hosts seeking exclusive entertainment, mixology bars, and gourmet dining.',
      'Full spatial transformation with signature floral features, acoustic sound, and seamless execution.'
    ]
  },
  {
    id: 'religious-events',
    title: 'Religious Events',
    image: '/offering_religious_events.png',
    lines: [
      'Sacred traditional ceremonies adorned with fresh marigolds, jasmine, and regal silk drapes.',
      'Authentic ritual aesthetics, brass diya lighting, and custom mandap & pooja architecture.',
      'Respectful cultural heritage planning with precision timing, floral art, and guest protocol.'
    ]
  },
  {
    id: 'corporate-events',
    title: 'Corporate Events',
    image: '/offering_corporate_events.png',
    lines: [
      'High-impact executive galas, brand launches, and VIP summits in iconic Dubai ballrooms.',
      'Sophisticated architectural lighting, bespoke banquet styling, and custom stage design.',
      'Delivering flawless corporate hospitality, production management, and brand storytelling.'
    ]
  },
  {
    id: 'milestone-birthdays',
    title: 'Milestone Birthdays',
    image: '/offering_milestone_birthdays.png',
    lines: [
      'Glamorous milestone 30th, 50th, and special age celebrations in luxury rooftop venues.',
      'Custom neon installation, ambient lighting design, champagne towers, and live DJ production.',
      'Creating vibrant, unforgettable party atmospheres tailored to your personal aesthetic.'
    ]
  },
  {
    id: 'celebrations',
    title: 'Celebrations',
    image: '/offering_celebrations.png',
    lines: [
      'Custom-commissioned floral arches, candlelit pathways, and romantic anniversary settings.',
      'Specialized decor for proposals, vow renewals, baby showers, and intimate family milestones.',
      'Transforming every special occasion into a timeless, photogenic luxury experience.'
    ]
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
                    className={`lg:col-span-6 space-y-6 ${
                      isEven ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <div className="space-y-3">
                      <h3 className="font-serif text-4xl sm:text-6xl font-light text-[#262822] tracking-tight">
                        {event.title}
                      </h3>
                      <div className="w-14 h-0.5 bg-[#7A8864]/50 mt-3" />
                    </div>

                    <div className="space-y-3.5 font-serif text-base sm:text-lg text-[#262822]/85 border-l-2 border-[#7A8864]/40 pl-5 py-1 leading-relaxed">
                      {event.lines.map((line, idx) => (
                        <p key={idx}>
                          {line}
                        </p>
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
      </section>

    </div>
  );
};

