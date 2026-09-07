import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedSection } from '../common/AnimatedSection';
import { Sparkles, ArrowRight, Diamond } from 'lucide-react';

interface MoodboardPreset {
  id: string;
  name: string;
  subtitle: string;
  palette: { name: string; hex: string }[];
  image: string;
  venueSuggestion: string;
  vibe: string;
}

const MOODBOARD_PRESETS: MoodboardPreset[] = [
  {
    id: 'rose-gold-palace',
    name: 'Blush Rose & Liquid Gold Royal Palace',
    subtitle: 'Baby Pink Velvet · Liquid Gold Trim · Candlelit Crystal Chandeliers',
    palette: [
      { name: 'Baby Blush Pink', hex: '#F9E8E8' },
      { name: 'Rose Gold Shimmer', hex: '#E8B4B8' },
      { name: 'Dubai Liquid Gold', hex: '#C9A96E' },
      { name: 'Midnight Drama', hex: '#1C1A2E' }
    ],
    image: '/portfolio-dubai.png',
    venueSuggestion: 'Emirates Palace Mandarin Oriental & Royal Mirage',
    vibe: 'Couture baby-pink floral arches paired with gold-embossed table settings and crystal light installations.'
  },
  {
    id: 'coastal-atelier',
    name: 'Jumeira Island Waterfront Glasshouse',
    subtitle: 'Champagne Linen · Travertine Marble · Coastal Peonies',
    palette: [
      { name: 'Liquid Gold', hex: '#C9A96E' },
      { name: 'Warm Champagne', hex: '#F5EDDF' },
      { name: 'Soft Rose Petal', hex: '#F2D4D4' },
      { name: 'Pure Ivory', hex: '#FAF8F5' }
    ],
    image: '/portfolio-garden.png',
    venueSuggestion: 'Bvlgari Resort & Yacht Club Jumeira Bay',
    vibe: 'Mirrored coastal runways over ocean waters with soft pink candlelight glow.'
  },
  {
    id: 'solstice-dunes',
    name: 'Arabian Desert Solstice & Rose Gold',
    subtitle: 'Sunset Sand Gold · Dusky Pink Linen · Firefly Lantern Canopy',
    palette: [
      { name: 'Desert Gold', hex: '#E8D4A8' },
      { name: 'Blush Silk', hex: '#E8B4B8' },
      { name: 'Deep Midnight', hex: '#1C1A2E' },
      { name: 'Ivory Warmth', hex: '#FAF8F5' }
    ],
    image: '/portfolio-desert.png',
    venueSuggestion: 'Al Maha Desert Resort & Bab Al Shams Pavilion',
    vibe: 'Raw organic sand dunes illuminated by thousands of floating gold lanterns and blush floral pathways.'
  }
];

interface PaletteBuilderProps {
  onOpenEnquiry: () => void;
}

export const PaletteBuilder: React.FC<PaletteBuilderProps> = ({ onOpenEnquiry }) => {
  const [selectedId, setSelectedId] = useState(MOODBOARD_PRESETS[0].id);

  const activePreset = MOODBOARD_PRESETS.find((m) => m.id === selectedId) || MOODBOARD_PRESETS[0];

  return (
    <section className="bg-gradient-to-b from-[#FAF8F5] via-[#F9E8E8]/30 to-[#FAF8F5] text-[#1C1A2E] py-32 md:py-44 border-t border-[#C9A96E]/20 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-12 right-0 pointer-events-none select-none opacity-[0.03] w-full text-right">
        <span className="font-display text-[180px] md:text-[280px] tracking-[0.15em] uppercase text-[#1C1A2E] block leading-none font-light">
          ATMOSPHERE
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-16">
        
        {/* Header */}
        <AnimatedSection direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-4 max-w-xl">
              <div className="inline-flex items-center space-x-2 bg-[#F9E8E8] px-4 py-1.5 rounded-full border border-[#E8B4B8]/40">
                <Diamond className="w-3.5 h-3.5 text-[#C9A96E] fill-[#C9A96E]" />
                <span className="text-[11px] font-sans font-semibold text-[#1C1A2E] tracking-[0.3em] uppercase">
                  INTERACTIVE ATELIER MOODBOARD
                </span>
              </div>
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-normal text-[#1C1A2E] tracking-tight leading-[1.1]">
                Curate Your <br />
                <span className="italic font-serif bg-gradient-to-r from-[#C9A96E] via-[#D4888F] to-[#9E7B45] bg-clip-text text-transparent">
                  Wedding Atmosphere.
                </span>
              </h2>
            </div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#9E7B45] max-w-xs font-semibold font-sans">
              EXPLORE SIGNATURE PALETTES & VENUE PAIRINGS FOR YOUR DUBAI CELEBRATION
            </p>
          </div>
        </AnimatedSection>

        {/* Interactive Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MOODBOARD_PRESETS.map((preset) => {
            const isSelected = selectedId === preset.id;
            return (
              <button
                key={preset.id}
                onClick={() => setSelectedId(preset.id)}
                className={`p-7 text-left rounded-2xl border transition-all duration-300 cursor-pointer relative overflow-hidden ${
                  isSelected
                    ? 'bg-white border-[#C9A96E] shadow-[0_15px_30px_rgba(201,169,110,0.2)]'
                    : 'bg-white/60 border-[#C9A96E]/20 hover:border-[#C9A96E]/60 hover:bg-[#F9E8E8]/40'
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="activeMoodboardBorder"
                    className="absolute top-0 left-0 bottom-0 w-2 bg-gradient-to-b from-[#C9A96E] to-[#E8B4B8]"
                  />
                )}
                
                <span className="text-[10px] font-sans font-semibold text-[#C9A96E] tracking-[0.25em] block mb-2 uppercase">
                  ATMOSPHERE PRESET
                </span>
                <h3 className="font-display text-xl md:text-2xl font-normal text-[#1C1A2E] mb-1">
                  {preset.name}
                </h3>
                <p className="text-xs text-[#1C1A2E]/70 font-serif italic mb-4 line-clamp-1">
                  {preset.subtitle}
                </p>

                {/* Swatches Bar */}
                <div className="flex items-center space-x-2.5 pt-3 border-t border-[#C9A96E]/20">
                  {preset.palette.map((swatch, i) => (
                    <span
                      key={i}
                      className="w-5 h-5 rounded-full border border-black/15 shadow-xs"
                      style={{ backgroundColor: swatch.hex }}
                      title={swatch.name}
                    />
                  ))}
                </div>
              </button>
            );
          })}
        </div>

        {/* Live Preview Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePreset.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white/90 backdrop-blur-md border border-[#C9A96E]/30 p-8 md:p-12 rounded-3xl shadow-2xl"
          >
            {/* Image Preview */}
            <div className="lg:col-span-7 aspect-16/10 rounded-2xl overflow-hidden border border-[#C9A96E]/30 shadow-2xl relative group bg-[#1C1A2E]">
              <img
                src={activePreset.image}
                alt={activePreset.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1A2E]/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white flex justify-between items-end">
                <div>
                  <span className="text-[10px] font-sans font-semibold text-[#E8D4A8] tracking-[0.25em] uppercase block">
                    ATMOSPHERIC CONCEPT
                  </span>
                  <p className="font-display text-2xl font-normal text-white italic">{activePreset.name}</p>
                </div>
                <span className="text-xs text-[#E8D4A8] font-sans font-semibold tracking-widest uppercase">Dubai, UAE</span>
              </div>
            </div>

            {/* Spec Details */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center space-x-1.5 text-xs text-[#9E7B45] font-sans font-semibold tracking-widest uppercase">
                <Sparkles className="w-3.5 h-3.5 text-[#C9A96E]" />
                <span>SPECIFICATION DOSSIER</span>
              </div>

              <h3 className="font-display text-3xl font-normal text-[#1C1A2E]">
                {activePreset.name}
              </h3>
              
              <p className="text-xs md:text-sm text-[#1C1A2E]/80 leading-relaxed font-sans font-light italic bg-[#F9E8E8]/50 p-4 rounded-xl border border-[#E8B4B8]/40">
                “{activePreset.vibe}”
              </p>

              <div className="space-y-4 pt-2 border-t border-[#C9A96E]/20 text-xs">
                <div>
                  <span className="text-[10px] font-sans font-semibold text-[#9E7B45] tracking-widest uppercase block mb-1">
                    RECOMMENDED SANCTUARY
                  </span>
                  <span className="font-display text-lg text-[#1C1A2E] block font-normal">
                    {activePreset.venueSuggestion}
                  </span>
                </div>

                <div>
                  <span className="text-[10px] font-sans font-semibold text-[#9E7B45] tracking-widest uppercase block mb-2">
                    PALETTE COMPOSITION
                  </span>
                  <div className="space-y-2">
                    {activePreset.palette.map((swatch, i) => (
                      <div key={i} className="flex items-center justify-between text-xs font-sans text-[#1C1A2E]/80 bg-[#FAF8F5] px-3 py-1.5 rounded-lg border border-[#C9A96E]/15">
                        <div className="flex items-center space-x-2.5">
                          <span className="w-4 h-4 rounded-full border border-black/20" style={{ backgroundColor: swatch.hex }} />
                          <span className="font-medium text-[#1C1A2E]">{swatch.name}</span>
                        </div>
                        <span className="text-[10px] font-mono font-semibold text-[#9E7B45]">{swatch.hex}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenEnquiry}
                  className="w-full px-6 py-4 bg-gradient-to-r from-[#1C1A2E] to-[#2A2840] text-[#E8D4A8] rounded-full hover:shadow-[0_0_25px_rgba(201,169,110,0.3)] transition-all font-sans text-xs font-semibold tracking-widest uppercase flex items-center justify-center space-x-2 cursor-pointer border border-[#C9A96E]/40"
                >
                  <span>REQUEST PROPOSAL FOR THIS ATMOSPHERE</span>
                  <ArrowRight className="w-4 h-4 text-[#C9A96E]" />
                </button>
              </div>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
