import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart, ArrowRight, Quote, MapPin, Calendar, CheckCircle2, Compass, ShieldCheck, MessageCircle, Star, Award, Layers, Users } from 'lucide-react';
import { AnimatedSection } from '../components/common/AnimatedSection';

interface AboutPageProps {
  onOpenEnquiry: () => void;
}

const STORY_CHAPTERS = [
  {
    id: 'dinner-2015',
    year: '2015',
    title: 'The Dinner Conversation',
    subtitle: 'Where it all started over dinner & wine in Dubai',
    dialogue: [
      { speaker: 'MENKA', text: 'Do we tell them it started over dinner?' },
      { speaker: 'PREETI', text: 'We have to tell them it started over dinner.' },
      { speaker: 'MENKA', text: 'And possibly a little wine.' },
      { speaker: 'PREETI', text: 'Possibly?' },
    ],
    narrative: 'It was 2015. We were two friends in Dubai, both expecting babies at very similar stages of life. Preeti was expecting her first child; Menka, her second. We met through family with zero grand business plan—until one dinner changed everything.',
    script: [
      { speaker: 'MENKA', text: 'We were talking about life, work, and what was next. I said, "Once the baby is born, I want to start a business."' },
      { speaker: 'PREETI', text: 'Obviously, I asked: "What business?"' },
      { speaker: 'MENKA', text: 'And I said: "Wedding planning."' },
      { speaker: 'PREETI', text: 'Which was slightly ridiculous because I had just moved to Dubai a few months earlier, newly married, and I looked at her and said: "You know I was a wedding planner in Delhi, right?"' },
      { speaker: 'MENKA & PREETI', text: 'The next morning we called each other to ask: "Were we actually serious last night... or was that just the wine talking?"' }
    ]
  },
  {
    id: 'first-project-2016',
    year: '2016',
    title: 'Zero Investment & The 5th Birthday Party',
    subtitle: 'Starting small with immense heart',
    dialogue: [
      { speaker: 'PREETI', text: 'Did we have a big launch planned? Not even slightly.' },
      { speaker: 'MENKA', text: 'We started with zero investment. No glamorous launch. No enormous office. No huge team waiting behind us.' },
      { speaker: 'PREETI', text: 'Just two women who knew weddings, believed they could create something together, and were willing to start small.' }
    ],
    narrative: 'Our very first event wasn’t a 500-person destination wedding—it was a fifth birthday party. A family trusted us with their celebration, and that trust meant everything. One celebration became another; birthdays became engagements, and intimate events grew into luxury weddings.',
    script: []
  },
  {
    id: 'feeling-real',
    year: '100+ Weddings',
    title: 'When It Started Feeling Real',
    subtitle: 'Growing scale, unchanging personal care',
    dialogue: [
      { speaker: 'MENKA', text: 'I don’t know if there was ever one moment. We didn’t suddenly wake up and say, "We’ve made it."' },
      { speaker: 'PREETI', text: 'Because every time the weddings became bigger, our ambitions became bigger too.' }
    ],
    narrative: 'Over the years, we’ve planned and produced more than 100 weddings, with Indian destination weddings becoming a significant part of our world. And while the scale has grown, one thing remains unchanged: Every single client still has one of us personally managing their celebration from first idea to the last dance.',
    script: []
  },
  {
    id: 'disagreements',
    year: 'Partnership',
    title: 'Do We Always Agree?',
    subtitle: 'The strength of two perspectives',
    dialogue: [
      { speaker: 'PREETI', text: 'Do we always agree? Absolutely.' },
      { speaker: 'MENKA', text: 'She’s lying! We disagree. We debate. We occasionally drive each other completely mad!' },
      { speaker: 'PREETI', text: 'But that’s also the strength of having two people care deeply about the same thing.' }
    ],
    narrative: 'After all these years, we know when to push each other, when to challenge an idea, when to compromise—and when one of us needs to say, "Trust me on this." The result is rarely purely Menka or purely Preeti. It becomes ours.',
    script: []
  },
  {
    id: 'luxury-meaning',
    year: 'Philosophy',
    title: 'What Luxury Means To Us',
    subtitle: 'Luxury is thoughtfulness',
    dialogue: [
      { speaker: 'PREETI', text: 'Guests should experience the magic.' },
      { speaker: 'MENKA', text: 'Our couples shouldn’t have to see the machinery that creates it.' }
    ],
    narrative: 'For us, luxury isn’t simply abundance or the number of flowers in a ballroom. Luxury is thoughtfulness. It’s understanding a family well enough to know what matters to them, finding the detail that makes a celebration unmistakably theirs, and quietly managing a hundred details behind the scenes.',
    script: []
  },
  {
    id: 'decade-later',
    year: '2016 – 2026',
    title: 'A Decade Later & Beyond',
    subtitle: '10 years of creating extraordinary moments',
    dialogue: [
      { speaker: 'MENKA & PREETI', text: 'We still sit across a table from each other with an idea and ask: "What if we did it this way?"' }
    ],
    narrative: 'More than a decade later, there have been 100+ weddings, countless celebrations, thousands of decisions, beautiful destinations, late nights, early mornings, and lifelong friendships with families around the world. And very often, that initial quiet question is where something extraordinary begins.',
    script: []
  }
];

const BEHIND_THE_SCENES_SERVICES = [
  { icon: Sparkles, title: 'Décor & Design', desc: 'Bespoke spatial mapping, floral architecture & moodboards' },
  { icon: Layers, title: 'Production & Setup', desc: 'Custom stage engineering, 3D renders & lighting' },
  { icon: Star, title: 'Entertainment & Artists', desc: 'Curation of master musicians, DJs & performers' },
  { icon: Heart, title: 'Hospitality & Experience', desc: 'VIP guest concierge, protocol & luxury RSVP care' },
  { icon: Compass, title: 'Transportation & Logistics', desc: 'Chauffeur fleets, charter coordination & transfers' },
  { icon: Award, title: 'Rituals & Traditions', desc: 'Authentic Indian ceremony aesthetics & mandap decor' },
  { icon: Users, title: 'Vendor Coordination', desc: 'Master chefs, photographers & artisan team leads' },
  { icon: ShieldCheck, title: 'On-Ground Management', desc: 'Seamless day-of producer execution & direct care' },
];

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenEnquiry }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="pt-0 pb-28 bg-[#FAF8F6] text-[#262822] overflow-hidden">
      
      {/* ── 1. CINEMATIC HERO BANNER IMAGE ── */}
      <section className="relative w-full pt-0 pb-12">
        <AnimatedSection direction="up">
          <div className="w-full aspect-[21/9] sm:aspect-[24/9] md:aspect-[28/9] overflow-hidden relative group bg-[#1A1C18]">
            <motion.img
              src="/hero_about_atelier.png"
              alt="Love Details Atelier Founders Philosophy"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
          </div>
        </AnimatedSection>
      </section>

      {/* ── 2. PAGE HEADING & SUBTITLE ── */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 pt-2 pb-16 text-center space-y-4">
        <AnimatedSection direction="up">
          <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-[#7A8864]/10 border border-[#7A8864]/25 shadow-xs mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#7A8864]" />
            <span className="micro-label text-[#7A8864] tracking-[0.3em]">
              OUR PHILOSOPHY &amp; GENESIS
            </span>
          </div>
          
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light text-[#262822] tracking-tight">
            Different Journeys. A Shared Passion. <br className="hidden sm:inline" />
            <span className="italic text-[#7A8864]">One Extraordinary Vision.</span>
          </h1>
          <div className="w-20 h-0.5 bg-[#7A8864]/40 mx-auto mt-4" />
        </AnimatedSection>
      </section>

      {/* ── 3. MEET THE FOUNDERS (REAL PORTRAIT PHOTO SHOWCASE) ── */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 pb-24">
        <div className="bg-gradient-to-br from-white via-[#FAF7F2] to-white rounded-3xl border border-[#C8C0B5]/60 p-8 sm:p-12 shadow-xl space-y-12">
          
          {/* Header Tag */}
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="micro-label text-[#7A8864] tracking-[0.3em]">MEET THE FOUNDERS</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#262822]">
              Menka &amp; Preeti
            </h2>
            <p className="text-xs sm:text-sm font-serif italic text-[#7A8864]">
              Two women, one vision, a decade of unforgettable celebrations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Bio: Menka */}
            <div className="lg:col-span-4 space-y-5 bg-white p-7 sm:p-8 rounded-2xl border border-[#C8C0B5]/40 shadow-sm relative group hover:border-[#7A8864]/50 transition-all">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#7A8864]/10 border border-[#7A8864]/20 text-[#7A8864] text-xs font-serif font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>MENKA — EVENTS BY EXPERIENCE</span>
              </div>
              <h3 className="font-serif text-2xl font-light text-[#262822]">
                Spatial Producer &amp; Strategist
              </h3>
              <p className="font-serif text-sm text-[#262822]/85 leading-relaxed">
                Born and raised in Dubai, Menka has been in the events industry since 2006. She started with exhibitions and agency client management before moving into private luxury events. Planning her own Dubai wedding in 2008 gave her deep, empathetic understanding of what couples experience.
              </p>
              <div className="pt-3 border-t border-[#C8C0B5]/30 text-xs italic font-serif text-[#7A8864]">
                “Every event taught me something. And I’m still learning.”
              </div>
            </div>

            {/* Middle Real Portrait Photo Frame */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center">
              <div className="relative group w-full max-w-sm aspect-[4/5] rounded-3xl overflow-hidden border-2 border-[#D4AF37]/50 shadow-2xl bg-[#1A1C18]">
                <motion.img
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  src="/founders-menka-priti.jpg"
                  alt="Love Details Founders Menka and Preeti"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <span className="text-xs font-serif italic text-[#E5D5BC] bg-black/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 inline-block">
                    Menka &amp; Preeti — Co-Founders
                  </span>
                </div>
              </div>
            </div>

            {/* Right Bio: Preeti */}
            <div className="lg:col-span-4 space-y-5 bg-white p-7 sm:p-8 rounded-2xl border border-[#C8C0B5]/40 shadow-sm relative group hover:border-[#7A8864]/50 transition-all">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#7A8864]/10 border border-[#7A8864]/20 text-[#7A8864] text-xs font-serif font-semibold">
                <Heart className="w-3.5 h-3.5" />
                <span>PREETI — WEDDINGS WITH A HEART</span>
              </div>
              <h3 className="font-serif text-2xl font-light text-[#262822]">
                Creative Director &amp; Stylist
              </h3>
              <p className="font-serif text-sm text-[#262822]/85 leading-relaxed">
                Preeti comes from Delhi, where she spearheaded high-profile weddings before moving to Dubai. Her deep mastery of Indian celebrations, ritual aesthetics, family dynamics, and emotional wedding design brings a heartfelt, artistic perspective to Love Details.
              </p>
              <div className="pt-3 border-t border-[#C8C0B5]/30 text-xs italic font-serif text-[#7A8864]">
                “I’ve always believed in the magic of celebrations.”
              </div>
            </div>

          </div>

          {/* Central Founders Quote Banner */}
          <div className="bg-[#262822] text-[#FAF7F2] p-8 sm:p-10 rounded-2xl border border-[#D4AF37]/35 text-center space-y-3 shadow-lg">
            <Quote className="w-7 h-7 text-[#D4AF37] mx-auto opacity-80" />
            <blockquote className="font-serif text-xl sm:text-2xl font-light italic max-w-3xl mx-auto leading-relaxed text-[#FAF7F2]">
              “Different journeys, but the same dream — to create celebrations that truly matter.”
            </blockquote>
            <p className="micro-label text-[#D4AF37] tracking-[0.25em] font-semibold pt-1">
              — MENKA &amp; PREETI
            </p>
          </div>

        </div>
      </section>

      {/* ── 4. CONVERSATIONAL STORY: "TWO FRIENDS. ONE CONVERSATION." ── */}
      <section className="bg-gradient-to-b from-[#1C1E1A] via-[#262923] to-[#1C1E1A] text-[#FAF7F2] py-24 border-y border-[#D4AF37]/35 shadow-2xl">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 space-y-12">
          
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <div className="inline-flex items-center space-x-2 text-[#D4AF37]">
              <MessageCircle className="w-4 h-4" />
              <span className="micro-label tracking-[0.3em]">OUR DIALOGUE &amp; STORY</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-white">
              Two Friends. One Conversation.
            </h2>
            <p className="text-sm font-serif italic text-[#E5D5BC]/80">
              Select a chapter below to read how a casual dinner in 2015 sparked a decade of luxury wedding craft.
            </p>
          </div>

          {/* Chapter Selector Tabs */}
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            {STORY_CHAPTERS.map((chap, idx) => (
              <button
                key={chap.id}
                onClick={() => setActiveTab(idx)}
                className={`px-5 py-2.5 rounded-full text-xs font-serif tracking-wider transition-all duration-300 cursor-pointer border ${
                  activeTab === idx
                    ? 'bg-[#D4AF37] text-[#262822] border-[#D4AF37] font-bold shadow-lg scale-105'
                    : 'bg-white/5 text-[#E5D5BC]/80 border-white/15 hover:bg-white/10 hover:text-white'
                }`}
              >
                <span>{chap.year} — {chap.title}</span>
              </button>
            ))}
          </div>

          {/* Active Chapter Card */}
          <div className="bg-white/5 border border-white/15 p-8 sm:p-12 rounded-3xl space-y-8 backdrop-blur-md shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                <div className="border-b border-white/10 pb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-xs micro-label text-[#D4AF37] block tracking-[0.25em]">CHAPTER 0{activeTab + 1}</span>
                    <h3 className="font-serif text-2xl sm:text-4xl font-light text-white mt-1">
                      {STORY_CHAPTERS[activeTab].title}
                    </h3>
                  </div>
                  <span className="px-4 py-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] font-serif text-xs italic">
                    {STORY_CHAPTERS[activeTab].subtitle}
                  </span>
                </div>

                {/* Script Dialogue Lines */}
                <div className="space-y-4 bg-black/40 p-6 sm:p-8 rounded-2xl border border-white/10">
                  {STORY_CHAPTERS[activeTab].dialogue.map((item, i) => (
                    <div key={i} className="flex flex-col sm:flex-row items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-4">
                      <span className="text-xs font-serif tracking-widest text-[#D4AF37] font-bold uppercase min-w-[90px]">
                        {item.speaker}:
                      </span>
                      <span className="font-serif italic text-base sm:text-lg text-white/90">
                        “{item.text}”
                      </span>
                    </div>
                  ))}
                </div>

                {/* Narrative Text */}
                <p className="font-serif text-base sm:text-lg text-[#E5D5BC]/90 leading-relaxed border-l-2 border-[#D4AF37]/50 pl-6 py-1">
                  {STORY_CHAPTERS[activeTab].narrative}
                </p>

                {STORY_CHAPTERS[activeTab].script.length > 0 && (
                  <div className="space-y-3 pt-4 border-t border-white/10">
                    {STORY_CHAPTERS[activeTab].script.map((item, i) => (
                      <div key={i} className="flex flex-col sm:flex-row items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-4">
                        <span className="text-xs font-serif tracking-widest text-[#7A8864] font-bold uppercase min-w-[90px]">
                          {item.speaker}:
                        </span>
                        <span className="font-serif text-sm text-[#E5D5BC]/80">
                          “{item.text}”
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* ── 5. A DECADE OF CELEBRATIONS & BEHIND THE SCENES ── */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 py-24 space-y-12">
        <AnimatedSection direction="up">
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <span className="micro-label text-[#7A8864] tracking-[0.3em]">WHAT HAPPENS BEHIND A LOVE DETAILS EVENT</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#262822]">
              A Decade of Celebrations <span className="italic text-[#7A8864]">&amp; Counting</span>
            </h2>
            <div className="w-16 h-0.5 bg-[#7A8864]/40 mx-auto mt-3" />
            <p className="font-serif text-base text-[#262822]/80 leading-relaxed">
              A wedding may look effortless on the day, but behind it is months of spatial design, detailed coordination, and an entire producer team bringing every element to life.
            </p>
          </div>
        </AnimatedSection>

        {/* 8-Pillar Behind The Scenes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BEHIND_THE_SCENES_SERVICES.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <AnimatedSection key={idx} direction="up" delay={idx * 0.05}>
                <div className="bg-white p-7 rounded-2xl border border-[#C8C0B5]/40 shadow-sm hover:shadow-xl transition-all duration-300 space-y-4 h-full flex flex-col justify-between group hover:border-[#7A8864]/50">
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-full bg-[#7A8864]/10 flex items-center justify-center text-[#7A8864]">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif text-xl font-light text-[#262822]">
                      {item.title}
                    </h3>
                    <p className="text-xs font-serif text-[#262822]/80 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="w-full h-0.5 bg-[#7A8864]/20 group-hover:bg-[#7A8864] transition-colors" />
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </section>

      {/* ── 6. REAL MOMENTS PHOTO COLLAGE SHOWCASE ── */}
      <section className="bg-[#1C1E1A] text-white py-20 border-y border-[#D4AF37]/35">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 space-y-12">
          
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="micro-label text-[#D4AF37] tracking-[0.3em]">OUR VISUAL ARCHIVE</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light">
              Moments That Matter
            </h2>
            <p className="text-xs sm:text-sm font-serif italic text-[#E5D5BC]">
              From intimate beach vows to grand multi-day royal wedding galas across the UAE &amp; beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="rounded-2xl overflow-hidden border border-[#D4AF37]/40 shadow-2xl aspect-[4/5] relative group bg-black">
              <motion.img
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.8 }}
                src="/about-red-arch-hero.png"
                alt="Love Details Red Rose Arch Wedding"
                className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-xs font-serif italic text-[#E5D5BC]">
                Red Rose Arch &amp; Floral Canopy
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-[#D4AF37]/40 shadow-2xl aspect-[4/5] relative group bg-black">
              <motion.img
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.8 }}
                src="/about-red-mandap.png"
                alt="Love Details Royal Mandap Wedding"
                className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-xs font-serif italic text-[#E5D5BC]">
                Royal Mandap Architecture
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-[#D4AF37]/40 shadow-2xl aspect-[4/5] relative group bg-black">
              <motion.img
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.8 }}
                src="/about-couple-arch.png"
                alt="Love Details Couple Floral Arch"
                className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-xs font-serif italic text-[#E5D5BC]">
                Waterfront Beach Sanctuary
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-[#D4AF37]/40 shadow-2xl aspect-[4/5] relative group bg-black">
              <motion.img
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.8 }}
                src="/couture-night-aerial.jpg"
                alt="Love Details Aerial Gala Night"
                className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-xs font-serif italic text-[#E5D5BC]">
                Aerial Couture Night Gala
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── 7. DESTINATIONS & 10 YEARS MILESTONE STRIP ── */}
      <section className="bg-white border-y border-[#C8C0B5]/40 py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-2 text-[#7A8864]">
              <Calendar className="w-5 h-5" />
              <span className="micro-label tracking-[0.2em]">10 YEARS CELEBRATED</span>
            </div>
            <h3 className="font-serif text-2xl font-light text-[#262822]">Jan 2016 — Jan 2026</h3>
            <p className="text-xs font-serif text-[#262822]/80 leading-relaxed max-w-xs mx-auto">
              From a 5th birthday party to 100+ extraordinary celebrations across a decade of craft.
            </p>
          </div>

          <div className="space-y-2">
            <div className="inline-flex items-center space-x-2 text-[#7A8864]">
              <MapPin className="w-5 h-5" />
              <span className="micro-label tracking-[0.2em]">ACROSS THE UAE</span>
            </div>
            <h3 className="font-serif text-2xl font-light text-[#262822]">Dubai, Abu Dhabi, RAK</h3>
            <p className="text-xs font-serif text-[#262822]/80 leading-relaxed max-w-xs mx-auto">
              Premier resort lawns, private desert dunes, beach sanctuaries &amp; iconic ballrooms.
            </p>
          </div>

          <div className="space-y-2">
            <div className="inline-flex items-center space-x-2 text-[#7A8864]">
              <Compass className="w-5 h-5" />
              <span className="micro-label tracking-[0.2em]">GLOBAL DESTINATIONS</span>
            </div>
            <h3 className="font-serif text-2xl font-light text-[#262822]">Bahrain, Oman &amp; Beyond</h3>
            <p className="text-xs font-serif text-[#262822]/80 leading-relaxed max-w-xs mx-auto">
              Bringing royal Indian wedding celebrations &amp; bespoke planning to international shores.
            </p>
          </div>

        </div>
      </section>

      {/* ── 8. CLOSING ATELIER PROMISE & CTA ── */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 pt-20">
        <AnimatedSection direction="up">
          <div className="bg-gradient-to-r from-[#7A8864] via-[#5C674A] to-[#3B4828] text-white p-12 md:p-16 rounded-3xl shadow-2xl text-center space-y-6 relative overflow-hidden">
            <div className="max-w-3xl mx-auto space-y-4 relative z-10">
              <span className="micro-label text-[#E5D5BC] tracking-[0.3em]">LOVE DETAILS ATELIER</span>
              <h2 className="font-serif text-3xl sm:text-5xl font-light leading-snug">
                Friends. Partners. Planners.
              </h2>
              <p className="text-base sm:text-xl font-serif italic text-[#E5D5BC]">
                “Creating celebrations that feel deeply personal, beautifully considered, and entirely your own.”
              </p>
              <div className="pt-4">
                <button
                  onClick={onOpenEnquiry}
                  className="button-editorial px-9 py-4 bg-white text-[#262822] hover:bg-[#FAF7F2] transition-colors inline-flex items-center space-x-3 rounded-full shadow-xl cursor-pointer font-bold"
                >
                  <span>SCHEDULE A PRIVATE CONSULTATION</span>
                  <ArrowRight className="w-4 h-4 text-[#7A8864]" />
                </button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

    </div>
  );
};
