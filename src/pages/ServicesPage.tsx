import React from 'react';
import { SERVICES_DATA } from '../data/servicesData';
import { Check, ArrowRight, Sparkles, Compass, ShieldCheck, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { AnimatedSection } from '../components/common/AnimatedSection';

interface ServicesPageProps {
  onOpenEnquiry: (eventType?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenEnquiry }) => {
  const processSteps = [
    { number: '01', title: 'Vision & Narrative', desc: 'Detailed moodboards, spatial mapping, and aesthetic direction tailored to your essence.' },
    { number: '02', title: 'Spatial Architecture', desc: 'Selecting venues, floorplan engineering, 3D renderings, and lighting design.' },
    { number: '03', title: 'Artisan Curation', desc: 'Handpicking master florists, Michelin-level chefs, acoustic musicians, and photographers.' },
    { number: '04', title: 'Master Production', desc: 'Seamless day-of producer execution, VIP concierge care, and protocol management.' },
  ];

  return (
    <div className="pt-24 pb-28 bg-[#FAF8F6] text-[#262822] overflow-hidden">
      
      {/* ── PAGE HERO SECTION WITH HERO IMAGE ── */}
      <section className="relative max-w-7xl mx-auto px-6 sm:px-10 md:px-16 pt-8 pb-16 space-y-10">
        <div className="absolute -top-10 left-1/3 w-96 h-96 bg-[#7A8864]/10 rounded-full filter blur-3xl pointer-events-none" />
        
        <AnimatedSection direction="up">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-3 px-4 py-1.5 rounded-full bg-[#7A8864]/10 border border-[#7A8864]/25 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#7A8864]" />
              <span className="micro-label text-[#7A8864] tracking-[0.3em]">
                ATELIER SERVICES & CAPABILITIES
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light text-[#262822] leading-[1.15] tracking-tight">
              Thoughtful Design. <br />
              <span className="italic text-[#7A8864]">Seamless Execution.</span>
            </h1>
            
            <p className="text-base sm:text-xl text-[#262822]/80 max-w-3xl font-serif leading-relaxed border-l-2 border-[#7A8864]/40 pl-6 py-1">
              Every celebration is shaped around the unique story, scale, and guest experience desired by our clients. Explore our primary planning verticals below.
            </p>
          </div>
        </AnimatedSection>

        {/* Hero Image Banner */}
        <AnimatedSection direction="up" delay={0.2}>
          <div className="w-full aspect-21/9 rounded-3xl overflow-hidden border border-[#D4AF37]/40 shadow-2xl relative group bg-[#1A1C18]">
            <motion.img
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              src="/hero_services_atelier.png"
              alt="Love Details Atelier Services Planning"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />
            
            <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full border border-[#D4AF37]/40 shadow-lg text-xs font-serif text-[#946B00] flex items-center space-x-2 font-bold">
              <span className="w-2.5 h-2.5 rounded-full bg-[#7A8864] animate-pulse" />
              <span>FULL ATELIER SERVICES</span>
            </div>

            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-center justify-between text-white gap-2 text-xs font-serif italic">
              <span className="bg-black/50 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20">
                End-to-End Creative Direction & Spatial Design
              </span>
              <span className="text-[#E5D5BC] bg-black/40 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10">
                Dubai, Abu Dhabi & International Destinations
              </span>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* ── THE ATELIER METHOD (PROCESS STEPS) ── */}
      <section className="bg-gradient-to-r from-[#262822] via-[#33352D] to-[#262822] text-[#FAF7F2] py-20 border-y border-[#D4AF37]/35 shadow-2xl">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="micro-label text-[#D4AF37] tracking-[0.3em]">OUR FOUR-STAGE JOURNEY</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-light">The Atelier Planning Architecture</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step) => (
              <div
                key={step.number}
                className="bg-white/5 border border-white/10 p-6 rounded-2xl space-y-4 hover:border-[#D4AF37]/50 transition-colors"
              >
                <div className="flex justify-between items-center">
                  <span className="font-serif text-3xl text-[#D4AF37] font-light">{step.number}</span>
                  <Compass className="w-5 h-5 text-[#E5D5BC]/60" />
                </div>
                <h3 className="font-serif text-xl font-medium text-white">{step.title}</h3>
                <p className="text-xs text-[#E5D5BC]/80 leading-relaxed font-sans">{step.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── SERVICES LIST EDITORIAL ── */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 py-24 space-y-32">
        {SERVICES_DATA.map((service, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={service.id}
              id={service.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center border-t border-[#C8C0B5]/40 pt-20"
            >
              {/* Image Block */}
              <div
                className={`lg:col-span-6 ${
                  isEven ? 'lg:order-1' : 'lg:order-2'
                }`}
              >
                <div className="w-full aspect-4/3 overflow-hidden rounded-2xl border border-[#D4AF37]/35 shadow-2xl relative group bg-black">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
                  />
                  <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full text-xs font-serif text-[#946B00] border border-[#D4AF37]/40 shadow-lg font-bold">
                    CATEGORY {service.number}
                  </div>
                  <div className="absolute bottom-6 right-6 bg-black/60 backdrop-blur-md px-4 py-2 rounded-lg text-xs font-serif text-[#E5D5BC] border border-white/10">
                    DUBAI & UAE ATELIER
                  </div>
                </div>
              </div>

              {/* Text Editorial Content */}
              <div
                className={`lg:col-span-6 space-y-6 ${
                  isEven ? 'lg:order-2' : 'lg:order-1'
                }`}
              >
                <div className="space-y-2">
                  <span className="micro-label text-[#7A8864] block tracking-[0.25em]">{service.tagline}</span>
                  <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#262822]">
                    {service.title}
                  </h2>
                </div>

                <p className="text-base sm:text-lg text-[#262822]/85 font-serif leading-relaxed">
                  {service.description}
                </p>

                {/* Key Inclusions List */}
                <div className="space-y-4 pt-4 border-t border-[#C8C0B5]/40">
                  <div className="flex items-center space-x-2">
                    <ShieldCheck className="w-4 h-4 text-[#7A8864]" />
                    <h3 className="micro-label text-[#7A8864] tracking-[0.2em]">CORE SERVICE SCOPE</h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#262822]/90 font-sans">
                    {service.keyInclusions.map((item, idx) => (
                      <div key={idx} className="flex items-start space-x-2 bg-white p-3 rounded-lg border border-[#C8C0B5]/30 shadow-xs">
                        <Check className="w-4 h-4 text-[#7A8864] shrink-0 mt-0.5" />
                        <span className="leading-tight">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Ideal For */}
                <div className="bg-[#7A8864]/10 border-l-4 border-[#7A8864] p-5 rounded-r-xl text-xs font-serif text-[#262822]">
                  <span className="font-semibold not-italic block mb-1 micro-label text-[#7A8864]">IDEAL FOR</span>
                  <p className="italic leading-relaxed">{service.idealFor}</p>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => onOpenEnquiry(service.title)}
                    className="button-editorial px-8 py-4 bg-[#7A8864] text-[#FAF7F2] hover:bg-[#5C674A] transition-all inline-flex items-center space-x-3 rounded-full shadow-lg cursor-pointer hover:scale-[1.02]"
                  >
                    <span>ENQUIRE FOR {service.title.toUpperCase()}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* ── BOTTOM CONSULTATION BANNER ── */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16">
        <div className="bg-gradient-to-r from-[#7A8864] via-[#5C674A] to-[#3B4828] text-white p-12 md:p-16 rounded-3xl shadow-2xl text-center space-y-6 relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-4">
            <Clock className="w-8 h-8 text-[#E5D5BC] mx-auto" />
            <h2 className="font-serif text-3xl sm:text-5xl font-light">Need a Custom Commission Scope?</h2>
            <p className="text-sm font-serif italic text-[#E5D5BC]">
              Our Dubai producers craft tailored proposals for multi-day events, VIP security protocols, and international destinations.
            </p>
            <div className="pt-4">
              <button
                onClick={() => onOpenEnquiry('Custom Service')}
                className="button-editorial px-9 py-4 bg-white text-[#262822] hover:bg-[#FAF7F2] transition-colors inline-flex items-center space-x-3 rounded-full shadow-xl cursor-pointer font-bold"
              >
                <span>REQUEST CUSTOM PROPOSAL</span>
                <ArrowRight className="w-4 h-4 text-[#7A8864]" />
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
