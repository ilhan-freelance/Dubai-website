import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, CheckCircle2, Star } from 'lucide-react';

interface CommitmentSectionProps {
  onExplorePackages?: () => void;
  onOpenEnquiry?: () => void;
}

const GUARANTEES = [
  {
    roman: 'I',
    badge: 'Couture Originality',
    title: '100% Bespoke Design',
    subtitle: 'Zero Templates',
    description: 'Custom stage floral architecture, 3D spatial renderings, and personalized couture lighting.',
    points: ['3D Photorealistic Renderings', 'Custom Stage & Floral Sculptures'],
    stat: '100% Tailored',
    bgImage: '/guarantee_bespoke_design.png'
  },
  {
    roman: 'II',
    badge: 'Privacy Guarantee',
    title: 'White-Glove Discretion',
    subtitle: 'Royal & VIP Protocol',
    description: 'Legally binding NDAs, discrete security protocols, and confidential guest list governance.',
    points: ['Legally Binding NDAs', 'Private Dune & Estate Access'],
    stat: '100% Confidential',
    bgImage: '/guarantee_privacy_discretion.png'
  },
  {
    roman: 'III',
    badge: 'Flawless Directing',
    title: 'Zero-Stress Execution',
    subtitle: 'Live Master Timeline',
    description: 'Minute-by-minute live runsheet directing with audited transparent supplier budget management.',
    points: ['Audited Vendor Contracts', 'On-Site Executive Director'],
    stat: '0% Hidden Fees',
    bgImage: '/guarantee_flawless_execution.png'
  }
];

export const CommitmentSection: React.FC<CommitmentSectionProps> = ({ onExplorePackages, onOpenEnquiry }) => {
  return (
    <section className="py-16 md:py-24 bg-[#FAF8F5] border-t border-b border-[#C9A96E]/20 relative overflow-hidden px-6 lg:px-12">
      
      {/* Background Soft Glow */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[500px] h-[300px] bg-[radial-gradient(circle_at_center,rgba(201,169,110,0.08)_0%,transparent_70%)] blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-[radial-gradient(circle_at_center,rgba(74,107,91,0.06)_0%,transparent_70%)] blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Opulent Atelier Header & CTA */}
          <div className="lg:col-span-4 space-y-5 text-center lg:text-left">
            
            {/* Top Badge */}
            <div>
              <div className="inline-flex items-center gap-2 text-[#4A6B5B] text-[10px] font-sans font-semibold tracking-[0.25em] uppercase bg-[#EAF0EC] px-3.5 py-1.5 rounded-full border border-[#8DA999]/30 shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#C9A96E]" />
                <span>THE ATELIER PROMISE</span>
              </div>
            </div>

            {/* Display Heading */}
            <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl lg:text-5xl font-normal text-[#212529] tracking-tight leading-[1.15]">
              Architecting <br />
              <span className="font-['Pinyon_Script'] text-4xl sm:text-5xl lg:text-6xl text-[#C9A96E] font-normal inline-block my-0.5">
                Flawless
              </span> <br />
              Royal Guarantees
            </h2>

            <div className="w-16 h-[2px] bg-gradient-to-r from-[#C9A96E] to-transparent mx-auto lg:mx-0" />

            <p className="text-xs sm:text-sm text-[#212529]/80 font-sans leading-relaxed font-light max-w-md mx-auto lg:mx-0">
              Three unwavering commitments crafted to ensure your Dubai wedding unfolds with pure luxury, absolute privacy, and zero operational friction.
            </p>

            {/* Clean Forest Sage CTA Button */}
            <div className="pt-2">
              <button
                onClick={onExplorePackages || onOpenEnquiry}
                className="px-7 py-3.5 bg-[#4A6B5B] hover:bg-[#1F382B] text-white rounded-full text-xs font-sans font-semibold uppercase tracking-widest transition-all cursor-pointer shadow-md hover:scale-105 inline-flex items-center space-x-2.5 group"
              >
                <span>EXPLORE PACKAGES</span>
                <ArrowRight className="w-4 h-4 text-[#E8D4A8] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

          {/* Right Column: Larger & Vibrant Image Cards Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {GUARANTEES.map((item, idx) => {
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.12 }}
                  onClick={onExplorePackages || onOpenEnquiry}
                  className="rounded-3xl p-7 sm:p-8 border border-[#C9A96E]/40 shadow-xl hover:shadow-2xl hover:border-[#C9A96E] hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between space-y-6 group cursor-pointer relative overflow-hidden text-white min-h-[390px] sm:min-h-[420px]"
                >
                  {/* Full Vibrant Background Photo - High Image Visibility */}
                  <div className="absolute inset-0 w-full h-full select-none pointer-events-none overflow-hidden rounded-3xl">
                    <img 
                      src={item.bgImage} 
                      alt={item.title} 
                      className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 filter brightness-95 saturate-[1.15]"
                    />
                    {/* Subtle Gradient Scrim - Darker at bottom for text, Light & Vivid at top */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1611] via-[#0A1611]/60 to-black/30 group-hover:from-[#0A1611]/95 group-hover:via-[#0A1611]/50 transition-colors duration-500" />
                  </div>

                  {/* Gold Corner Accents */}
                  <div className="absolute top-3.5 left-3.5 w-3.5 h-3.5 border-t-2 border-l-2 border-[#C9A96E] pointer-events-none shadow-xs" />
                  <div className="absolute top-3.5 right-3.5 w-3.5 h-3.5 border-t-2 border-r-2 border-[#C9A96E] pointer-events-none shadow-xs" />

                  {/* Card Content */}
                  <div className="space-y-5 relative z-10">
                    
                    {/* Top Bar - No Icons */}
                    <div className="flex items-center justify-between border-b border-white/20 pb-4">
                      <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#9E7B45] text-[#0A1611] flex items-center justify-center font-['Playfair_Display'] text-base font-bold shadow-md">
                        {item.roman}
                      </span>
                      <span className="text-[10px] font-sans font-semibold tracking-widest uppercase text-[#E8D4A8] bg-black/40 px-3 py-1 rounded-full border border-[#C9A96E]/40 backdrop-blur-md shadow-xs">
                        {item.badge}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <div className="space-y-2">
                      <h3 className="font-['Playfair_Display'] text-2xl font-normal text-white group-hover:text-[#E8D4A8] transition-colors leading-snug drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-white/90 font-sans leading-relaxed font-light drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                        {item.description}
                      </p>
                    </div>

                    {/* Bullet Points */}
                    <div className="space-y-2 pt-3 border-t border-white/20">
                      {item.points.map((pt, pIdx) => (
                        <div key={pIdx} className="flex items-center space-x-2 text-xs text-white font-sans drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#E8D4A8] shrink-0" />
                          <span className="truncate">{pt}</span>
                        </div>
                      ))}
                    </div>

                  </div>

                  {/* Card Footer Stat */}
                  <div className="pt-4 border-t border-white/20 flex items-center justify-between relative z-10">
                    <span className="text-xs font-bold text-[#E8D4A8] font-sans uppercase tracking-widest drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                      {item.stat}
                    </span>
                    <div className="flex items-center space-x-1 text-[#D4AF37]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-[#D4AF37]" />
                      ))}
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};








