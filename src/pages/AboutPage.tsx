import React from 'react';
import { ArrowRight, Sparkles, Award, Compass, Heart, ShieldCheck } from 'lucide-react';
import { AnimatedSection } from '../components/common/AnimatedSection';
import { motion } from 'framer-motion';

interface AboutPageProps {
  onOpenEnquiry: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenEnquiry }) => {
  return (
    <div className="pt-24 pb-28 bg-[#FAF8F6] text-[#262822] overflow-hidden">
      
      {/* ── HERO SECTION WITH PROMINENT HERO IMAGE ── */}
      <section className="relative max-w-7xl mx-auto px-6 sm:px-10 md:px-16 pt-8 pb-16 space-y-10">
        <div className="absolute top-10 right-10 w-96 h-96 bg-[#7A8864]/10 rounded-full filter blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#D4AF37]/10 rounded-full filter blur-3xl pointer-events-none" />

        <AnimatedSection direction="up">
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center space-x-3 px-4 py-1.5 rounded-full bg-[#7A8864]/10 border border-[#7A8864]/25 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#7A8864]" />
              <span className="micro-label text-[#7A8864] tracking-[0.3em]">
                THE LOVE DETAILS ATELIER · DUBAI & UAE
              </span>
            </div>
            
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light text-[#262822] leading-[1.15] tracking-tight">
              “Behind Every Extraordinary <br />
              <span className="italic text-[#7A8864] font-normal">Celebration Is a Story.”</span>
            </h1>
            
            <p className="text-lg md:text-xl font-serif italic text-[#7A8864] max-w-3xl leading-relaxed border-l-2 border-[#7A8864]/40 pl-6 py-1">
              We believe the finest celebrations are defined not by excess, but by intention, spatial harmony, artistic restraint, and genuine human emotion.
            </p>
          </div>
        </AnimatedSection>

        {/* Hero Banner Image */}
        <AnimatedSection direction="up" delay={0.2}>
          <div className="w-full aspect-21/9 rounded-3xl overflow-hidden border border-[#D4AF37]/40 shadow-2xl relative group bg-[#1A1C18]">
            <motion.img
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              src="/hero_about_atelier.png"
              alt="Love Details Dubai Atelier Setting"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent pointer-events-none" />
            
            <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full border border-[#D4AF37]/40 shadow-lg text-xs font-serif text-[#946B00] flex items-center space-x-2 font-bold">
              <span className="w-2.5 h-2.5 rounded-full bg-[#7A8864] animate-pulse" />
              <span>EST. DUBAI, UAE</span>
            </div>

            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-center justify-between text-white gap-2 text-xs font-serif italic">
              <span className="bg-black/50 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20">
                Dubai Luxury Atelier & Spatial Design Studio
              </span>
              <span className="text-[#E5D5BC] bg-black/40 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10">
                Jumeira Bay & Downtown Atelier
              </span>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* ── STATS METRICS STRIP ── */}
      <section className="bg-gradient-to-r from-[#262822] via-[#33352D] to-[#262822] text-[#FAF7F2] py-14 border-y border-[#D4AF37]/30 shadow-xl">
        <div className="max-w-7xl mx-auto px-6 md:px-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-1">
            <span className="font-serif text-3xl sm:text-5xl font-light text-[#D4AF37]">15+</span>
            <p className="text-xs uppercase tracking-[0.2em] text-[#E5D5BC]/90 font-sans">Years of Craft</p>
          </div>
          <div className="space-y-1">
            <span className="font-serif text-3xl sm:text-5xl font-light text-[#D4AF37]">250+</span>
            <p className="text-xs uppercase tracking-[0.2em] text-[#E5D5BC]/90 font-sans">Royal Commissions</p>
          </div>
          <div className="space-y-1">
            <span className="font-serif text-3xl sm:text-5xl font-light text-[#D4AF37]">40+</span>
            <p className="text-xs uppercase tracking-[0.2em] text-[#E5D5BC]/90 font-sans">Global Destinations</p>
          </div>
          <div className="space-y-1">
            <span className="font-serif text-3xl sm:text-5xl font-light text-[#D4AF37]">100%</span>
            <p className="text-xs uppercase tracking-[0.2em] text-[#E5D5BC]/90 font-sans">Bespoke Atelier</p>
          </div>
        </div>
      </section>

      {/* ── MAIN STORY NARRATIVE & ETHOS ── */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-32">
            <AnimatedSection direction="up">
              <span className="micro-label text-[#7A8864]">OUR GENESIS & ETHOS</span>
              <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#262822] leading-tight">
                Crafted in Dubai for International Visionaries.
              </h2>
              <div className="w-16 h-0.5 bg-[#7A8864]" />
              <p className="text-sm text-[#262822]/75 font-sans leading-relaxed pt-2">
                We believe true luxury is understated, deeply personal, and flawlessly orchestrated.
              </p>
            </AnimatedSection>
          </div>

          <div className="lg:col-span-7 space-y-10 text-base md:text-lg text-[#262822]/85 leading-relaxed font-serif">
            <AnimatedSection direction="up" delay={0.1}>
              <div className="bg-white p-8 md:p-10 rounded-2xl border border-[#C8C0B5]/50 shadow-md space-y-4">
                <p className="first-letter:text-5xl first-letter:font-serif first-letter:text-[#7A8864] first-letter:float-left first-letter:mr-3 first-letter:leading-none">
                  Love Details was founded in Dubai with a singular conviction: that luxury event planning should evoke profound emotion, quiet beauty, and complete peace of mind.
                </p>
                <p>
                  In a region world-renowned for monumental architecture and grand hospitality, we ground our work in artistic restraint. We curate sanctuaries where warm candlelight meets fine linen textures, where fragrant botanicals replace synthetic backdrops, and where every guest feels profoundly cherished.
                </p>
              </div>
            </AnimatedSection>

            {/* 4 Core Pillars Cards */}
            <AnimatedSection direction="up" delay={0.2}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 text-xs font-sans">
                
                <div className="bg-[#FAF7F2] p-6 rounded-xl border border-[#7A8864]/25 space-y-3 hover:border-[#7A8864] transition-colors shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-[#7A8864]/10 flex items-center justify-center text-[#7A8864]">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-[#262822]">Uncompromising Vision</h3>
                  <p className="text-[#262822]/75 leading-relaxed">Bespoke creative direction tailored entirely around your personal narrative and aesthetic taste.</p>
                </div>

                <div className="bg-[#FAF7F2] p-6 rounded-xl border border-[#7A8864]/25 space-y-3 hover:border-[#7A8864] transition-colors shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-[#7A8864]/10 flex items-center justify-center text-[#7A8864]">
                    <Compass className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-[#262822]">Spatial Harmony</h3>
                  <p className="text-[#262822]/75 leading-relaxed">Architectural floral installations, candlelit dining, and lighting artistry engineered for emotional resonance.</p>
                </div>

                <div className="bg-[#FAF7F2] p-6 rounded-xl border border-[#7A8864]/25 space-y-3 hover:border-[#7A8864] transition-colors shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-[#7A8864]/10 flex items-center justify-center text-[#7A8864]">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-[#262822]">Global Protocol</h3>
                  <p className="text-[#262822]/75 leading-relaxed">Seamless UAE permits, royal security, VIP concierge, and multilingual producer support.</p>
                </div>

                <div className="bg-[#FAF7F2] p-6 rounded-xl border border-[#7A8864]/25 space-y-3 hover:border-[#7A8864] transition-colors shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-[#7A8864]/10 flex items-center justify-center text-[#7A8864]">
                    <Heart className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-[#262822]">Discreet Concierge</h3>
                  <p className="text-[#262822]/75 leading-relaxed">Strict non-disclosure privacy for high-profile clients, royal families, and international dignitaries.</p>
                </div>

              </div>
            </AnimatedSection>

          </div>

        </div>
      </section>

      {/* ── PHILOSOPHY BANNER ── */}
      <section className="bg-gradient-to-br from-[#7A8864] via-[#5C674A] to-[#3B4828] text-[#FAF7F2] py-28 my-12 text-center px-6 relative overflow-hidden rounded-3xl max-w-7xl mx-auto shadow-2xl">
        <div className="absolute -right-16 -top-16 w-64 h-64 bg-[#D4AF37]/20 rounded-full filter blur-2xl pointer-events-none" />
        <div className="max-w-3xl mx-auto space-y-6 relative z-10">
          <div className="inline-flex items-center space-x-2 text-[#E5D5BC]">
            <Award className="w-4 h-4" />
            <span className="micro-label tracking-[0.3em]">OUR ATELIER PROMISE</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-light leading-snug">
            “We design not for applause, but for memories that linger for a lifetime.”
          </h2>
          <div className="w-20 h-0.5 bg-[#E5D5BC]/60 mx-auto pt-2" />
        </div>
      </section>

      {/* ── TEAM / ATELIER COLLECTIVE ── */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 py-20">
        <div className="space-y-16">
          <AnimatedSection direction="up">
            <div className="max-w-xl space-y-3">
              <span className="micro-label text-[#7A8864]">THE PRODUCERS & ARTISTS</span>
              <h2 className="font-serif text-4xl sm:text-5xl font-light text-[#262822]">
                Our Atelier Team
              </h2>
              <p className="text-sm text-[#262822]/75 leading-relaxed font-sans">
                A dedicated collective of creative directors, floral sculptors, spatial designers, and protocol leads based in Dubai.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            
            <AnimatedSection direction="up" delay={0.1}>
              <div className="space-y-4 group cursor-pointer bg-white p-4 rounded-2xl border border-[#C8C0B5]/40 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="aspect-3/4 overflow-hidden rounded-xl border border-[#C8C0B5]/50 shadow-md bg-[#C8C0B5]/10 relative">
                  <motion.img
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.8 }}
                    src="/about-groom.png"
                    alt="Atelier Creative Director"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute top-3 left-3 bg-[#7A8864]/90 text-white text-[10px] uppercase font-sans tracking-widest px-3 py-1 rounded-full backdrop-blur-md">
                    LEAD DIRECTOR
                  </div>
                </div>
                <div className="px-2 pb-2">
                  <h3 className="font-serif text-xl font-medium text-[#262822]">Atelier Creative Director</h3>
                  <span className="micro-label text-[#7A8864] block mt-1">SPATIAL & FLORAL DIRECTION</span>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.2}>
              <div className="space-y-4 group cursor-pointer bg-white p-4 rounded-2xl border border-[#C8C0B5]/40 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="aspect-3/4 overflow-hidden rounded-xl border border-[#C8C0B5]/50 shadow-md bg-[#C8C0B5]/10 relative">
                  <motion.img
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.8 }}
                    src="/about-bridesmaids.png"
                    alt="Senior Producer"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute top-3 left-3 bg-[#7A8864]/90 text-white text-[10px] uppercase font-sans tracking-widest px-3 py-1 rounded-full backdrop-blur-md">
                    OPERATIONS
                  </div>
                </div>
                <div className="px-2 pb-2">
                  <h3 className="font-serif text-xl font-medium text-[#262822]">Senior Event Producer</h3>
                  <span className="micro-label text-[#7A8864] block mt-1">LOGISTICS & PROTOCOL</span>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.3}>
              <div className="space-y-4 group cursor-pointer bg-white p-4 rounded-2xl border border-[#C8C0B5]/40 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="aspect-3/4 overflow-hidden rounded-xl border border-[#C8C0B5]/50 shadow-md bg-[#C8C0B5]/10 relative">
                  <motion.img
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.8 }}
                    src="/about-couple-laugh.png"
                    alt="Guest Experience Lead"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute top-3 left-3 bg-[#7A8864]/90 text-white text-[10px] uppercase font-sans tracking-widest px-3 py-1 rounded-full backdrop-blur-md">
                    CONCIERGE
                  </div>
                </div>
                <div className="px-2 pb-2">
                  <h3 className="font-serif text-xl font-medium text-[#262822]">Guest Concierge Lead</h3>
                  <span className="micro-label text-[#7A8864] block mt-1">DESTINATION & HOSPITALITY</span>
                </div>
              </div>
            </AnimatedSection>

          </div>

          {/* CTA Box */}
          <AnimatedSection direction="up" delay={0.4}>
            <div className="pt-12 text-center bg-gradient-to-r from-[#7A8864]/10 via-[#FAF7F2] to-[#7A8864]/10 p-12 rounded-3xl border border-[#7A8864]/30 space-y-6">
              <h3 className="font-serif text-3xl text-[#262822] font-light">
                Ready to Discuss Your Celebration?
              </h3>
              <p className="text-sm text-[#262822]/80 max-w-xl mx-auto font-serif italic">
                Our directors are available for private consultations at our Dubai Atelier or online video conference worldwide.
              </p>
              <div>
                <button
                  onClick={onOpenEnquiry}
                  className="button-editorial px-9 py-4 bg-[#7A8864] text-[#FAF7F2] hover:bg-[#5C674A] transition-all inline-flex items-center space-x-3 rounded-full shadow-lg cursor-pointer hover:scale-[1.02]"
                >
                  <span>SCHEDULE A CONFIDENTIAL CONSULTATION</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </AnimatedSection>

        </div>
      </section>

    </div>
  );
};
