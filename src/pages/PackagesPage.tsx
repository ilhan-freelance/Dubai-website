import React from 'react';
import { PLANNING_TIERS } from '../data/packagesData';
import { ArrowRight, CheckCircle2, Sparkles, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import { AnimatedSection } from '../components/common/AnimatedSection';

interface PackagesPageProps {
  onOpenEnquiry: () => void;
}

export const PackagesPage: React.FC<PackagesPageProps> = ({ onOpenEnquiry }) => {
  const atelierGuarantees = [
    { title: 'Spatial 3D Renderings', desc: 'Photorealistic architectural floorplans and lighting visualizer.' },
    { title: 'Multilingual Producers', desc: 'Arabic, English, French & Russian speaking senior producers.' },
    { title: 'VIP Permitting & Protocol', desc: 'Direct coordination with Dubai Municipality, CID, and venue protocol.' },
    { title: 'Strict Non-Disclosure', desc: 'Complete confidentiality and non-disclosure for high-profile clients.' }
  ];

  return (
    <div className="pt-24 pb-28 bg-white text-[#212529] overflow-hidden">
      
      {/* ── PAGE HERO SECTION WITH HERO IMAGE ── */}
      <section className="relative max-w-7xl mx-auto px-6 sm:px-10 md:px-16 pt-8 pb-12 space-y-10">
        <div className="absolute top-10 right-10 w-96 h-96 bg-[#4A6B5B]/10 rounded-full filter blur-3xl pointer-events-none" />

        <AnimatedSection direction="up">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-3 px-4 py-1.5 rounded-full bg-[#EAF0EC] border border-[#8DA999]/40 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#4A6B5B]" />
              <span className="micro-label text-[#1F382B] tracking-[0.3em]">
                PLANNING ARCHITECTURE & SCOPE
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light text-[#212529] leading-[1.15] tracking-tight">
              Bespoke Proposals, <br />
              <span className="italic text-[#C9A96E]">Crafted Around You.</span>
            </h1>
            
            <p className="text-base sm:text-xl text-[#212529]/80 max-w-3xl font-serif leading-relaxed border-l-2 border-[#4A6B5B]/40 pl-6 py-1">
              Because every celebration varies in scale, venue requirements, multi-day guest travel, and botanical complexity, we do not issue generic packages. Instead, we structure bespoke planning proposals.
            </p>
          </div>
        </AnimatedSection>

        {/* Hero Image Banner */}
        <AnimatedSection direction="up" delay={0.2}>
          <div className="w-full aspect-21/9 rounded-3xl overflow-hidden border border-[#C9A96E]/40 shadow-2xl relative group bg-gray-900">
            <motion.img
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              src="/hero_packages_scope.png"
              alt="Bespoke Planning Architecture Showcase"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
            
            <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full border border-[#C9A96E]/40 shadow-lg text-xs font-serif text-[#9E7B45] flex items-center space-x-2 font-bold">
              <span className="w-2.5 h-2.5 rounded-full bg-[#4A6B5B] animate-pulse" />
              <span>BESPOKE SCOPE</span>
            </div>

            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-center justify-between text-white gap-2 text-xs font-serif italic">
              <span className="bg-black/50 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20">
                The Royal Commission & Intimate Design Scope
              </span>
              <span className="text-[#E8D4A8] bg-black/40 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10">
                100% Tailored Proposal Engine
              </span>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* ── TIERS LIST ── */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PLANNING_TIERS.map((tier) => (
            <div
              key={tier.id}
              className="bg-[#FAF8F6] rounded-3xl border border-[#C9A96E]/20 p-8 md:p-12 space-y-8 flex flex-col justify-between hover:border-[#4A6B5B] transition-all duration-300 shadow-md hover:shadow-xl relative overflow-hidden"
            >
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <span className="font-serif text-4xl text-[#C9A96E] font-light">
                    {tier.code}
                  </span>
                  <span className="micro-label text-[#1F382B] bg-[#EAF0EC] px-3 py-1.5 rounded-full border border-[#8DA999]/40 font-bold">
                    BESPOKE COMMISSION
                  </span>
                </div>

                <div className="space-y-1">
                  <h2 className="font-serif text-3xl font-light text-[#212529]">
                    {tier.name}
                  </h2>
                  <p className="text-xs uppercase tracking-wider text-[#4A6B5B] font-serif italic">
                    {tier.tagline}
                  </p>
                </div>

                <p className="text-xs md:text-sm text-[#212529]/80 leading-relaxed font-serif">
                  {tier.summary}
                </p>

                {/* Key Aspects */}
                <div className="space-y-3 pt-4 border-t border-[#C9A96E]/20">
                  <h3 className="micro-label text-[#4A6B5B] tracking-[0.2em]">CORE ATELIER PILLARS</h3>
                  <ul className="space-y-2 text-xs text-[#212529]/90 font-sans">
                    {tier.keyAspects.map((aspect, idx) => (
                      <li key={idx} className="flex items-start space-x-2 bg-white p-2.5 rounded-lg border border-[#C9A96E]/20">
                        <CheckCircle2 className="w-4 h-4 text-[#4A6B5B] shrink-0 mt-0.5" />
                        <span>{aspect}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action */}
              <div className="pt-6 border-t border-[#C9A96E]/20 space-y-4">
                <p className="text-xs text-[#212529]/70 font-serif italic">
                  Recommended for: <span className="font-semibold text-[#212529]">{tier.recommendedFor}</span>
                </p>

                <button
                  onClick={onOpenEnquiry}
                  className="w-full button-editorial px-6 py-4 bg-[#4A6B5B] text-white hover:bg-[#3B5649] transition-all rounded-full flex items-center justify-center space-x-2 cursor-pointer font-bold text-xs shadow-md hover:scale-[1.02]"
                >
                  <span>REQUEST YOUR BESPOKE PROPOSAL</span>
                  <ArrowRight className="w-4 h-4 text-[#E8D4A8]" />
                </button>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* ── ATELIER GUARANTEES MATRIX ── */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 pt-24">
        <div className="bg-gradient-to-r from-[#16181B] via-[#212529] to-[#16181B] text-white p-12 rounded-3xl border border-[#C9A96E]/40 shadow-2xl space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="micro-label text-[#C9A96E] tracking-[0.3em]">ATELIER SERVICE STANDARD</span>
            <h2 className="font-serif text-3xl font-light">Included in Every Love Details Commission</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {atelierGuarantees.map((item, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-2xl space-y-2">
                <Shield className="w-5 h-5 text-[#C9A96E]" />
                <h3 className="font-serif text-lg font-medium text-white">{item.title}</h3>
                <p className="text-xs text-white/70 leading-relaxed font-sans">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
