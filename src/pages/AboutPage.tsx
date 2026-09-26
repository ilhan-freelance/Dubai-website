import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart, ArrowRight, Quote, MapPin, Calendar, Compass, ShieldCheck, Star, Layers, Users, Award, CheckCircle2, ChevronRight, MessageSquare, GlassWater } from 'lucide-react';
import { AnimatedSection } from '../components/common/AnimatedSection';

interface AboutPageProps {
  onOpenEnquiry: () => void;
}

const BEHIND_THE_SCENES_SERVICES = [
  { icon: Sparkles, title: 'Spatial Mapping & Décor', desc: 'Bespoke architectural renders, floral design & ambient lighting maps.' },
  { icon: Layers, title: 'Production Engineering', desc: 'Custom stage fabrication, acoustic alignment & structural engineering.' },
  { icon: Star, title: 'Couture Entertainment', desc: 'Curating international artists, master musicians, DJs & theatrical acts.' },
  { icon: Heart, title: 'VIP Guest Concierge', desc: 'Luxury RSVP management, protocol handling & personalized hospitality.' },
  { icon: Compass, title: 'Charter & Fleet Logistics', desc: 'Chauffeur fleets, private transfers & seamless arrival coordination.' },
  { icon: Award, title: 'Authentic Ritual Mandaps', desc: 'Deep mastery of traditional Indian wedding ceremonies & sacred aesthetics.' },
  { icon: Users, title: 'Artisan & Culinary Curation', desc: 'Collaborating with celebrity chefs, master patissiers & elite photographers.' },
  { icon: ShieldCheck, title: 'Day-of Producer Care', desc: 'Direct, hands-on producer leadership ensuring zero stress for the couple.' },
];

const TIMELINE_MILESTONES = [
  {
    year: '2015',
    title: 'The Spark Over Dinner',
    desc: 'Two friends in Dubai expecting babies, reflecting on their event careers and sharing a vision for heartfelt luxury celebrations.',
    tag: 'THE BEGINNING'
  },
  {
    year: '2016',
    title: 'Zero Investment & 1st Event',
    desc: 'Launched with zero capital and no lavish office. Our first commission was a 5th birthday party that earned deep client trust.',
    tag: 'FIRST COMMISSION'
  },
  {
    year: '2019',
    title: 'Luxury Engagements & Soirées',
    desc: 'Word of mouth spread, expanding from intimate gatherings into grand engagement galas and high-profile private celebrations.',
    tag: 'EXPANSION'
  },
  {
    year: '2022',
    title: 'Destination Royal Weddings',
    desc: 'Designing multi-day destination Indian weddings across luxury resorts, beach havens, and private estates in Dubai & Abu Dhabi.',
    tag: 'ROYAL WEDDINGS'
  },
  {
    year: '2026',
    title: '10 Years of Love Details',
    desc: 'A decade of craft, 100+ extraordinary celebrations, and an unshakeable reputation for bespoke, thoughtful event production.',
    tag: 'DECADE MILESTONE'
  }
];

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenEnquiry }) => {
  const [activeTab, setActiveTab] = useState<'menka' | 'preeti'>('menka');

  return (
    <div className="pt-0 pb-28 bg-[#FAF8F6] text-[#262822] overflow-hidden selection:bg-[#7A8864] selection:text-white">
      
      {/* ── 1. CINEMATIC HERO BANNER IMAGE (FULL BLEED WITH GRADUAL FADE) ── */}
      <section className="relative w-full pt-0 pb-0">
        <AnimatedSection direction="up">
          <div className="w-full aspect-[21/9] sm:aspect-[24/9] md:aspect-[28/9] overflow-hidden relative group bg-[#1A1C18]">
            <img
              src="/hero_philosophy_story.png"
              alt="Love Details Atelier Philosophy"
              className="w-full h-full object-cover"
            />
            {/* Smooth gradual bottom fade merging into page background */}
            <div className="absolute inset-x-0 bottom-0 h-28 sm:h-36 md:h-44 bg-gradient-to-t from-[#FAF8F6] via-[#FAF8F6]/60 to-transparent pointer-events-none" />
          </div>
        </AnimatedSection>
      </section>

      {/* ── 2. SINGLE LINE MAIN HEADING (POSITIONED BELOW HERO FRAME) ── */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 pt-8 sm:pt-14 md:pt-20 pb-20 sm:pb-24 text-center space-y-4">
        <AnimatedSection direction="up">
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light text-[#262822] tracking-tight leading-tight">
            Behind Every Extraordinary Celebration <span className="italic text-[#7A8864]">Is a Story.</span>
          </h1>
        </AnimatedSection>
      </section>

      {/* ── 3. MEET THE FOUNDERS (MENKA & PREETI) - REAL PHOTO & BRAND STORY ── */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 pb-24 space-y-14">
        
        <AnimatedSection direction="up">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="micro-label text-[#7A8864] tracking-[0.3em]">MEET THE FOUNDERS</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#262822]">
              Menka &amp; Preeti
            </h2>
            <p className="text-sm sm:text-base font-serif italic text-[#7A8864]">
              Two friends, one vision, a decade of creating unforgettable memories.
            </p>
          </div>
        </AnimatedSection>

        {/* Founder Spotlight Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Authentic Founders Image */}
          <div className="lg:col-span-6">
            <AnimatedSection direction="up">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-[#D4AF37]/30 via-[#7A8864]/30 to-[#D4AF37]/30 rounded-3xl blur-md opacity-70 group-hover:opacity-100 transition duration-1000"></div>
                <div className="relative w-full aspect-[4/3] overflow-hidden rounded-3xl border-2 border-[#D4AF37]/40 shadow-2xl bg-[#1A1C18]">
                  <img
                    src="/founders-menka-priti.jpg"
                    alt="Love Details Founders Menka & Preeti"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md border border-white/20 p-4 rounded-2xl text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-serif text-base font-medium">Menka &amp; Preeti</p>
                        <p className="text-xs text-[#E5D5BC] font-serif">Co-Founders &amp; Creative Directors</p>
                      </div>
                      <span className="px-3 py-1 bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#D4AF37] text-[10px] micro-label tracking-widest rounded-full">
                        SINCE 2016
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Founder Roles Tabs & Details */}
          <div className="lg:col-span-6 space-y-6">
            <AnimatedSection direction="up">
              
              {/* Tab Selector Buttons */}
              <div className="flex bg-[#EFECE6] p-1.5 rounded-2xl border border-[#C8C0B5]/60">
                <button
                  onClick={() => setActiveTab('menka')}
                  className={`flex-1 py-3 px-4 rounded-xl text-xs font-serif font-semibold tracking-wider transition-all duration-300 flex items-center justify-center space-x-2 ${
                    activeTab === 'menka'
                      ? 'bg-white text-[#262822] shadow-md border border-[#C8C0B5]/40'
                      : 'text-[#262822]/70 hover:text-[#262822]'
                  }`}
                >
                  <Sparkles className="w-4 h-4 text-[#7A8864]" />
                  <span>MENKA — EVENTS BY EXPERIENCE</span>
                </button>
                <button
                  onClick={() => setActiveTab('preeti')}
                  className={`flex-1 py-3 px-4 rounded-xl text-xs font-serif font-semibold tracking-wider transition-all duration-300 flex items-center justify-center space-x-2 ${
                    activeTab === 'preeti'
                      ? 'bg-white text-[#262822] shadow-md border border-[#C8C0B5]/40'
                      : 'text-[#262822]/70 hover:text-[#262822]'
                  }`}
                >
                  <Heart className="w-4 h-4 text-[#7A8864]" />
                  <span>PREETI — WEDDINGS WITH A HEART</span>
                </button>
              </div>

              {/* Dynamic Content Display */}
              <AnimatePresence mode="wait">
                {activeTab === 'menka' ? (
                  <motion.div
                    key="menka"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white p-8 rounded-3xl border border-[#C8C0B5]/60 shadow-md space-y-5"
                  >
                    <div className="flex items-center space-x-3 border-b border-[#C8C0B5]/30 pb-4">
                      <div className="w-10 h-10 rounded-full bg-[#7A8864]/10 flex items-center justify-center text-[#7A8864]">
                        <Sparkles className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-serif text-2xl font-light text-[#262822]">Menka</h3>
                        <p className="text-xs font-serif text-[#7A8864] font-medium">Spatial Producer &amp; Event Strategist</p>
                      </div>
                    </div>

                    <p className="font-serif text-sm text-[#262822]/85 leading-relaxed">
                      Born and raised in Dubai, Menka has been in the events industry since 2006. Starting with major exhibitions and corporate client management, she later pivoted to high-end private celebrations. Planning her own Dubai wedding in 2008 gave her a profound, firsthand understanding of what couples experience.
                    </p>

                    <div className="space-y-2 pt-2 border-t border-[#C8C0B5]/30">
                      <div className="flex items-start space-x-2 text-xs font-serif text-[#262822]/80">
                        <CheckCircle2 className="w-4 h-4 text-[#7A8864] shrink-0 mt-0.5" />
                        <span><strong>20+ Years in Dubai:</strong> Deep venue relationships across top resorts &amp; private estates.</span>
                      </div>
                      <div className="flex items-start space-x-2 text-xs font-serif text-[#262822]/80">
                        <CheckCircle2 className="w-4 h-4 text-[#7A8864] shrink-0 mt-0.5" />
                        <span><strong>Logistical Precision:</strong> Spatial blueprints, budget safeguards &amp; seamless execution.</span>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="preeti"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white p-8 rounded-3xl border border-[#C8C0B5]/60 shadow-md space-y-5"
                  >
                    <div className="flex items-center space-x-3 border-b border-[#C8C0B5]/30 pb-4">
                      <div className="w-10 h-10 rounded-full bg-[#7A8864]/10 flex items-center justify-center text-[#7A8864]">
                        <Heart className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-serif text-2xl font-light text-[#262822]">Preeti</h3>
                        <p className="text-xs font-serif text-[#7A8864] font-medium">Creative Director &amp; Stylist</p>
                      </div>
                    </div>

                    <p className="font-serif text-sm text-[#262822]/85 leading-relaxed">
                      Preeti brings extensive experience from Delhi, where she spearheaded high-profile weddings before moving to Dubai. Her deep mastery of Indian celebrations, ritual aesthetics, floral design, family dynamics, and emotional wedding styling brings a heartfelt perspective to Love Details.
                    </p>

                    <div className="space-y-2 pt-2 border-t border-[#C8C0B5]/30">
                      <div className="flex items-start space-x-2 text-xs font-serif text-[#262822]/80">
                        <CheckCircle2 className="w-4 h-4 text-[#7A8864] shrink-0 mt-0.5" />
                        <span><strong>Ritual Expertise:</strong> Authentic Indian Mandap architecture &amp; tradition curation.</span>
                      </div>
                      <div className="flex items-start space-x-2 text-xs font-serif text-[#262822]/80">
                        <CheckCircle2 className="w-4 h-4 text-[#7A8864] shrink-0 mt-0.5" />
                        <span><strong>Heartfelt Care:</strong> Warm family touch, guest concierge &amp; sensory decor styling.</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </AnimatedSection>
          </div>

        </div>

        {/* Dual Quote Banner */}
        <AnimatedSection direction="up">
          <div className="bg-gradient-to-r from-[#7A8864]/15 via-[#FAF7F2] to-[#7A8864]/15 p-8 sm:p-10 rounded-3xl border border-[#7A8864]/30 text-center space-y-3 shadow-xs">
            <Quote className="w-8 h-8 text-[#7A8864] mx-auto opacity-75" />
            <blockquote className="font-serif text-xl sm:text-2xl font-light text-[#262822] italic max-w-3xl mx-auto leading-relaxed">
              “Different journeys, but the exact same dream — to create celebrations that truly matter.”
            </blockquote>
            <p className="micro-label text-[#7A8864] tracking-[0.25em] font-semibold pt-1">
              — MENKA &amp; PREETI
            </p>
          </div>
        </AnimatedSection>

      </section>

      {/* ── 4. CONVERSATIONAL STORY NARRATIVE (LUXURY EDITORIAL CHAPTERS) ── */}
      <section className="bg-gradient-to-b from-[#262822] via-[#2F3229] to-[#262822] text-[#FAF7F2] py-24 border-y border-[#D4AF37]/35 shadow-2xl relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 space-y-20">
          
          <AnimatedSection direction="up">
            <div className="text-center space-y-3 max-w-3xl mx-auto">
              <span className="micro-label text-[#D4AF37] tracking-[0.3em]">OUR STORY &amp; DIALOGUE</span>
              <h2 className="font-serif text-3xl sm:text-5xl font-light text-white leading-tight">
                Two Friends. One Dinner. And a Business We Never Planned.
              </h2>
              <div className="w-16 h-0.5 bg-[#D4AF37]/50 mx-auto mt-3" />
            </div>
          </AnimatedSection>

          {/* Sequential Dialogue Story Cards */}
          <div className="space-y-24">
            
            {/* Story Chapter 1 */}
            <AnimatedSection direction="up">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-6 space-y-6">
                  <div className="inline-flex items-center space-x-2 text-[#D4AF37] text-xs micro-label tracking-[0.25em]">
                    <GlassWater className="w-4 h-4" />
                    <span>CHAPTER 01 / THE DINNER IN 2015</span>
                  </div>
                  
                  <h3 className="font-serif text-3xl sm:text-4xl font-light text-white">
                    “Do we tell them it started over dinner?”
                  </h3>

                  {/* Dialogue script card */}
                  <div className="space-y-3 bg-black/50 p-6 rounded-2xl border border-[#D4AF37]/30 font-serif italic text-base text-[#E5D5BC]">
                    <p><strong className="text-[#D4AF37] not-italic">MENKA:</strong> “Do we tell them it started over dinner?”</p>
                    <p><strong className="text-[#D4AF37] not-italic">PREETI:</strong> “We have to tell them it started over dinner... and possibly a little wine!”</p>
                  </div>

                  <p className="font-serif text-base text-[#E5D5BC]/90 leading-relaxed border-l-2 border-[#D4AF37]/50 pl-5 py-1">
                    It was 2015. We were two friends in Dubai, both expecting babies and at very similar stages of life. Preeti was expecting her first child; Menka, her second. We had originally met through family with no grand business introduction. But over dinner, talking about weddings, events, and what was missing in Dubai's event landscape, a spark was lit.
                  </p>
                </div>

                <div className="lg:col-span-6">
                  <div className="w-full aspect-[4/3] overflow-hidden rounded-3xl border border-[#D4AF37]/35 shadow-2xl relative bg-[#1A1C18]">
                    <img
                      src="/about-pop-table.jpg"
                      alt="Love Details Dinner Story 2015"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Story Chapter 2 */}
            <AnimatedSection direction="up">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-6 lg:order-2 space-y-6">
                  <div className="inline-flex items-center space-x-2 text-[#D4AF37] text-xs micro-label tracking-[0.25em]">
                    <Calendar className="w-4 h-4" />
                    <span>CHAPTER 02 / JAN 2016 — ZERO CAPITAL</span>
                  </div>
                  
                  <h3 className="font-serif text-3xl sm:text-4xl font-light text-white">
                    From a 5th Birthday Party to Royal Mandaps
                  </h3>

                  {/* Dialogue script card */}
                  <div className="space-y-3 bg-black/50 p-6 rounded-2xl border border-[#D4AF37]/30 font-serif italic text-base text-[#E5D5BC]">
                    <p><strong className="text-[#D4AF37] not-italic">PREETI:</strong> “Did we have a big launch planned? Not even slightly.”</p>
                    <p><strong className="text-[#D4AF37] not-italic">MENKA:</strong> “We started with zero investment. No grand office. Just two women who knew events inside out.”</p>
                  </div>

                  <p className="font-serif text-base text-[#E5D5BC]/90 leading-relaxed border-l-2 border-[#D4AF37]/50 pl-5 py-1">
                    In January 2016, Love Details was born. Our very first project wasn’t a 500-guest luxury wedding—it was a fifth birthday party. A family trusted us, and we put our hearts into every detail. That trust sparked word-of-mouth recommendations. Birthdays became engagements, and intimate gatherings grew into 100+ multi-day destination weddings.
                  </p>
                </div>

                <div className="lg:col-span-6 lg:order-1">
                  <div className="w-full aspect-[4/3] overflow-hidden rounded-3xl border border-[#D4AF37]/35 shadow-2xl relative bg-[#1A1C18]">
                    <img
                      src="/about-yellow-lantern.png"
                      alt="Love Details Intimate First Event Journey"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Story Chapter 3 */}
            <AnimatedSection direction="up">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-6 space-y-6">
                  <div className="inline-flex items-center space-x-2 text-[#D4AF37] text-xs micro-label tracking-[0.25em]">
                    <MessageSquare className="w-4 h-4" />
                    <span>CHAPTER 03 / THE DYNAMICS &amp; CHEMISTRY</span>
                  </div>
                  
                  <h3 className="font-serif text-3xl sm:text-4xl font-light text-white">
                    “Do we always agree? Never.”
                  </h3>

                  {/* Dialogue script card */}
                  <div className="space-y-3 bg-black/50 p-6 rounded-2xl border border-[#D4AF37]/30 font-serif italic text-base text-[#E5D5BC]">
                    <p><strong className="text-[#D4AF37] not-italic">MENKA:</strong> “Do we always agree? Never. We debate, we push each other, but we ALWAYS agree on the client.”</p>
                    <p><strong className="text-[#D4AF37] not-italic">PREETI:</strong> “Menka keeps the engine running smoothly. I make sure every moment touches the heart.”</p>
                  </div>

                  <p className="font-serif text-base text-[#E5D5BC]/90 leading-relaxed border-l-2 border-[#D4AF37]/50 pl-5 py-1">
                    Our strength lies in our contrast. Menka brings decades of Dubai production, venue diplomacy, and budget discipline. Preeti brings visual storytelling, floral mastery, and deep cultural sensitivity for traditional Indian rituals. Together, we give our clients both ironclad precision and pure heart.
                  </p>
                </div>

                <div className="lg:col-span-6">
                  <div className="w-full aspect-[4/3] overflow-hidden rounded-3xl border border-[#D4AF37]/35 shadow-2xl relative bg-[#1A1C18]">
                    <img
                      src="/about-red-mandap.png"
                      alt="Love Details Mandap & Production Craft"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Story Chapter 4 */}
            <AnimatedSection direction="up">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-6 lg:order-2 space-y-6">
                  <div className="inline-flex items-center space-x-2 text-[#D4AF37] text-xs micro-label tracking-[0.25em]">
                    <Star className="w-4 h-4" />
                    <span>CHAPTER 04 / WHAT LUXURY MEANS TO US</span>
                  </div>
                  
                  <h3 className="font-serif text-3xl sm:text-4xl font-light text-white">
                    “Luxury Is Thoughtfulness.”
                  </h3>

                  {/* Dialogue script card */}
                  <div className="space-y-3 bg-black/50 p-6 rounded-2xl border border-[#D4AF37]/30 font-serif italic text-base text-[#E5D5BC]">
                    <p><strong className="text-[#D4AF37] not-italic">PREETI:</strong> “Guests should experience the magic effortlessly.”</p>
                    <p><strong className="text-[#D4AF37] not-italic">MENKA:</strong> “Our couples shouldn’t have to see the heavy machinery that creates it.”</p>
                  </div>

                  <p className="font-serif text-base text-[#E5D5BC]/90 leading-relaxed border-l-2 border-[#D4AF37]/50 pl-5 py-1">
                    For us, luxury isn’t simply abundance or throwing thousands of flowers into a ballroom. Luxury is thoughtfulness. It is knowing a family well enough to anticipate their needs before they ask, and having the restraint to know when design is complete and perfect.
                  </p>
                </div>

                <div className="lg:col-span-6 lg:order-1">
                  <div className="w-full aspect-[4/3] overflow-hidden rounded-3xl border border-[#D4AF37]/35 shadow-2xl relative bg-[#1A1C18]">
                    <img
                      src="/about-couple-laugh.png"
                      alt="Love Details Joyful Couple Moment"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </AnimatedSection>

          </div>

        </div>
      </section>

      {/* ── 5. TIMELINE: 10 YEARS OF CRAFT (2016-2026) ── */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 py-24 space-y-16">
        
        <AnimatedSection direction="up">
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <span className="micro-label text-[#7A8864] tracking-[0.3em]">DECADE OF CRAFT</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#262822]">
              10 Years of Love Details <span className="italic text-[#7A8864]">(2016 – 2026)</span>
            </h2>
            <div className="w-16 h-0.5 bg-[#7A8864]/40 mx-auto mt-3" />
            <p className="font-serif text-base text-[#262822]/80 leading-relaxed">
              From our humble beginning over a Dubai dinner to managing multi-million dirham destination weddings across the GCC.
            </p>
          </div>
        </AnimatedSection>

        {/* Milestone Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {TIMELINE_MILESTONES.map((item, idx) => (
            <AnimatedSection key={idx} direction="up">
              <div className="bg-white p-6 rounded-2xl border border-[#C8C0B5]/50 shadow-xs hover:border-[#7A8864] hover:shadow-md transition-all h-full flex flex-col justify-between space-y-4 group">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-3xl font-light text-[#7A8864] group-hover:text-[#D4AF37] transition-colors">
                      {item.year}
                    </span>
                    <span className="text-[10px] micro-label text-[#7A8864] bg-[#7A8864]/10 px-2 py-0.5 rounded-full">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-medium text-[#262822]">
                    {item.title}
                  </h3>
                  <p className="text-xs font-serif text-[#262822]/75 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

      </section>

      {/* ── 6. BEHIND THE SCENES: WHAT WE HANDLE ── */}
      <section className="bg-[#FAF7F2] border-y border-[#C8C0B5]/40 py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 space-y-16">
          
          <AnimatedSection direction="up">
            <div className="text-center space-y-3 max-w-3xl mx-auto">
              <span className="micro-label text-[#7A8864] tracking-[0.3em]">BEHIND THE SCENES</span>
              <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#262822]">
                What Happens Behind a <span className="italic text-[#7A8864]">Love Details Event</span>
              </h2>
              <div className="w-16 h-0.5 bg-[#7A8864]/40 mx-auto mt-3" />
              <p className="font-serif text-base text-[#262822]/80 leading-relaxed">
                A wedding may look effortless on the day, but behind it is months of spatial design, detailed coordination, and an entire producer team bringing every element to life.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left 8 Pillars Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {BEHIND_THE_SCENES_SERVICES.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div key={idx} className="bg-white p-6 rounded-2xl border border-[#C8C0B5]/50 shadow-xs space-y-2 group hover:border-[#7A8864]/60 transition-colors">
                    <div className="w-9 h-9 rounded-full bg-[#7A8864]/10 flex items-center justify-center text-[#7A8864]">
                      <IconComp className="w-4.5 h-4.5" />
                    </div>
                    <h3 className="font-serif text-lg font-light text-[#262822]">
                      {item.title}
                    </h3>
                    <p className="text-xs font-serif text-[#262822]/75 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5">
              <div className="w-full aspect-[4/5] overflow-hidden rounded-3xl border border-[#D4AF37]/35 shadow-2xl relative bg-[#1A1C18]">
                <img
                  src="/about-bridesmaids.png"
                  alt="Love Details Behind The Scenes Production"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── 7. DESTINATIONS & MILESTONES STRIP ── */}
      <section className="bg-white border-b border-[#C8C0B5]/40 py-16">
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
