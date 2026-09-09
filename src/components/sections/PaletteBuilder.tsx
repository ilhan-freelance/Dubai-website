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
    id: 'emerald-gold-palace',
    name: 'Eucalyptus Sage & Liquid Gold Palace',
    subtitle: 'Pure White Linen · Sage Botanical Arches · Dubai Liquid Gold Trim',
    palette: [
      { name: 'Pure White Canvas', hex: '#FFFFFF' },
      { name: 'Warm Ivory', hex: '#FAF8F5' },
      { name: 'Eucalyptus Sage', hex: '#4A6B5B' },
      { name: 'Soft Rose Accent', hex: '#F8E7E9' },
      { name: 'Dubai Liquid Gold', hex: '#C9A96E' }
    ],
    image: '/portfolio-dubai.png',
    venueSuggestion: 'Emirates Palace Mandarin Oriental & Royal Mirage',
    vibe: 'Architectural sage green botanical arches paired with gold-embossed table settings on crisp white linen.'
  },
  {
    id: 'coastal-atelier',
    name: 'Jumeira Island Waterfront Glasshouse',
    subtitle: 'Champagne Linen · Travertine Marble · Coastal Peonies',
    palette: [
      { name: 'Pure White', hex: '#FFFFFF' },
      { name: 'Liquid Gold', hex: '#C9A96E' },
      { name: 'Warm Ivory', hex: '#FAF8F5' },
      { name: 'Soft Rose Petal', hex: '#FDF2F4' },
      { name: 'Sage Leaf', hex: '#8DA999' }
    ],
    image: '/portfolio-garden.png',
    venueSuggestion: 'Bvlgari Resort & Yacht Club Jumeira Bay',
    vibe: 'Mirrored coastal runways over ocean waters with soft pink and green floral accents.'
  },
  {
    id: 'solstice-dunes',
    name: 'Arabian Desert Solstice & Royal Gold',
    subtitle: 'Sunset Sand Gold · Dusky Linen · Firefly Lantern Canopy',
    palette: [
      { name: 'Desert Gold', hex: '#E8D4A8' },
      { name: 'Sage Botanical', hex: '#4A6B5B' },
      { name: 'Blush Touch', hex: '#E8B4B8' },
      { name: 'Ivory Warmth', hex: '#FAF8F5' }
    ],
    image: '/portfolio-desert.png',
    venueSuggestion: 'Al Maha Desert Resort & Bab Al Shams Pavilion',
    vibe: 'Raw organic sand dunes illuminated by thousands of floating gold lanterns and botanical floral pathways.'
  }
];

interface PaletteBuilderProps {
  onOpenEnquiry: () => void;
}

export const PaletteBuilder: React.FC<PaletteBuilderProps> = ({ onOpenEnquiry }) => {
  const [selectedId, setSelectedId] = useState(MOODBOARD_PRESETS[0].id);

  const activePreset = MOODBOARD_PRESETS.find((m) => m.id === selectedId) || MOODBOARD_PRESETS[0];

  return (
    <section className="bg-white text-[#212529] py-32 md:py-44 border-t border-[#C9A96E]/20 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-12 right-0 pointer-events-none select-none opacity-[0.03] w-full text-right">
        <span className="font-display text-[180px] md:text-[280px] tracking-[0.15em] uppercase text-[#212529] block leading-none font-light">
          ATMOSPHERE
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-16">
        
        {/* Header */}
        <AnimatedSection direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-4 max-w-xl">
              <div className="inline-flex items-center space-x-2 bg-[#EAF0EC] px-4 py-1.5 rounded-full border border-[#8DA999]/40">
                <Diamond className="w-3.5 h-3.5 text-[#4A6B5B] fill-[#4A6B5B]" />
                <span className="text-[11px] font-sans font-semibold text-[#1F382B] tracking-[0.3em] uppercase">
                  INTERACTIVE ATELIER MOODBOARD
                </span>
              </div>
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-normal text-[#212529] tracking-tight leading-[1.1]">
                Curate Your <br />
                <span className="italic font-serif bg-gradient-to-r from-[#C9A96E] via-[#8DA999] to-[#9E7B45] bg-clip-text text-transparent">
                  Wedding Atmosphere.
                </span>
              </h2>
            </div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#4A6B5B] max-w-xs font-semibold font-sans">
              EXPLORE SIGNATURE PALETTES & VENUE PAIRINGS FOR YOUR DUBAI CELEBRATION
            </p>
          </div>
        </AnimatedSection>

        {/* Tab Selection */}
        <div className="flex flex-wrap gap-4 border-b border-[#C9A96E]/20 pb-6">
          {MOODBOARD_PRESETS.map((preset) => {
            const isSelected = preset.id === selectedId;
            return (
              <button
                key={preset.id}
                onClick={() => setSelectedId(preset.id)}
                className={`px-6 py-3 rounded-full text-xs font-semibold tracking-wider transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#4A6B5B] text-white shadow-md border border-[#C9A96E]'
                    : 'bg-[#FAF8F5] text-[#212529] hover:bg-[#EAF0EC] border border-[#C9A96E]/20'
                }`}
              >
                {preset.name}
              </button>
            );
          })}
        </div>

        {/* Active Preset Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePreset.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-[#FAF8F5] rounded-3xl p-8 md:p-12 border border-[#C9A96E]/25 shadow-xl"
          >
            {/* Left Info & Color Swatches - 7 cols */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-3">
                <span className="text-xs font-sans uppercase tracking-[0.25em] text-[#C9A96E] font-semibold">
                  {activePreset.subtitle}
                </span>
                <h3 className="font-display text-3xl sm:text-4xl text-[#212529]">
                  {activePreset.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#212529]/80 font-sans leading-relaxed">
                  {activePreset.vibe}
                </p>
              </div>

              {/* Swatches */}
              <div className="space-y-3">
                <span className="text-[11px] font-sans uppercase tracking-widest text-[#4A6B5B] font-semibold block">
                  Harmonious Color Palette
                </span>
                <div className="flex flex-wrap gap-4">
                  {activePreset.palette.map((color) => (
                    <div key={color.name} className="flex items-center space-x-3 bg-white px-4 py-2.5 rounded-2xl border border-[#C9A96E]/20 shadow-sm">
                      <div
                        className="w-6 h-6 rounded-full border border-gray-200 shadow-inner"
                        style={{ backgroundColor: color.hex }}
                      />
                      <div className="flex flex-col">
                        <span className="text-xs font-medium text-[#212529] font-sans">{color.name}</span>
                        <span className="text-[10px] text-gray-400 font-mono">{color.hex}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Venue Suggestion */}
              <div className="pt-4 border-t border-[#C9A96E]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] font-sans uppercase tracking-widest text-gray-400 block">Recommended Venue Architecture</span>
                  <span className="text-sm font-display text-[#4A6B5B] font-medium">{activePreset.venueSuggestion}</span>
                </div>
                
                <button
                  onClick={onOpenEnquiry}
                  className="px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-[#C9A96E] hover:from-[#C9A96E] hover:to-[#9E7B45] text-[#111] rounded-full text-xs font-sans font-semibold uppercase tracking-wider transition-all cursor-pointer inline-flex items-center space-x-2 shadow-md hover:scale-105 shrink-0"
                >
                  <span>Design This Vibe</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Photo - 5 cols */}
            <div className="lg:col-span-5 aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative gold-border-glow">
              <img
                src={activePreset.image}
                alt={activePreset.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white flex items-center justify-between">
                <span className="text-xs font-serif italic text-[#E8D4A8]">Dubai Atelier Signature Concept</span>
                <Sparkles className="w-4 h-4 text-[#C9A96E]" />
              </div>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
