import React, { useState } from 'react';
import { SERVICES_DATA } from '../../data/servicesData';
import { ArrowUpRight, Check } from 'lucide-react';
import { AnimatedSection } from '../common/AnimatedSection';
import { motion, AnimatePresence } from 'framer-motion';

interface ServicesPreviewProps {
  onSelectService: (serviceId: string) => void;
}

export const ServicesPreview: React.FC<ServicesPreviewProps> = ({ onSelectService }) => {
  const [activeId, setActiveId] = useState<string>(SERVICES_DATA[0].id);
  const activeService = SERVICES_DATA.find((s) => s.id === activeId) || SERVICES_DATA[0];

  return (
    <section className="text-[#212529] py-32 md:py-52 relative overflow-hidden" style={{
      background: 'linear-gradient(160deg, #FFFFFF 0%, #FAF8F5 50%, #FFFFFF 100%)'
    }}>

      {/* Gold/Sage dot pattern */}
      <div className="absolute inset-0 bg-dot-gold" />

      {/* Background watermark */}
      <div className="absolute top-1/4 right-0 pointer-events-none select-none opacity-[0.03] overflow-hidden">
        <span className="font-display-luxury text-[200px] md:text-[300px] tracking-[0.1em] uppercase text-[#212529] block leading-none font-light">
          SERVICES
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-8 md:px-16 relative z-10">

        {/* Section Header */}
        <AnimatedSection direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-2 text-[#C9A96E]">
                <div className="w-8 h-[1px] bg-[#C9A96E]" />
                <span className="text-xs font-sans font-semibold tracking-[0.25em] uppercase">
                  OUR CAPABILITIES
                </span>
              </div>

              <h2 className="font-['Playfair_Display'] text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] tracking-tight leading-[1.15]">
                Bespoke Services, <br />
                <span className="italic font-normal text-[#4A6B5B]">
                  Thoughtfully Curated
                </span>
              </h2>
            </div>
            <p className="text-xs font-sans font-semibold tracking-[0.2em] text-[#C9A96E] uppercase max-w-xs leading-relaxed">
              Creative Direction · Spatial Architecture · Full Event Production
            </p>
          </div>
        </AnimatedSection>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Services Accordion - 7 cols */}
          <div className="lg:col-span-7 space-y-3">
            {SERVICES_DATA.map((service, index) => {
              const isActive = activeId === service.id;
              return (
                <AnimatedSection key={service.id} direction="up" delay={index * 0.08}>
                  <div
                    onMouseEnter={() => setActiveId(service.id)}
                    onClick={() => onSelectService(service.id)}
                    className={`group p-6 md:p-8 border transition-all duration-500 cursor-pointer relative overflow-hidden rounded-2xl ${
                      isActive
                        ? 'shadow-xl'
                        : ''
                    }`}
                    style={isActive ? {
                      background: 'linear-gradient(145deg, #16181B 0%, #212529 100%)',
                      borderColor: 'rgba(201, 169, 110, 0.4)',
                      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(201, 169, 110, 0.1)',
                    } : {
                      background: '#FFFFFF',
                      borderColor: 'rgba(201, 169, 110, 0.2)',
                    }}
                  >
                    {/* Gold accent bar */}
                    {isActive && (
                      <motion.div
                        layoutId="activeServiceBar"
                        className="absolute top-0 left-0 bottom-0 w-1.5"
                        style={{ background: 'linear-gradient(180deg, #E8D4A8 0%, #C9A96E 50%, #9E7B45 100%)' }}
                      />
                    )}

                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-6 md:space-x-8">
                        <span className={`font-display-luxury text-3xl md:text-4xl transition-all duration-300 ${isActive ? 'font-normal' : ''}`}
                          style={isActive ? {
                            background: 'linear-gradient(135deg, #E8D4A8 0%, #C9A96E 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                          } : { color: '#C9A96E', opacity: 0.6 }}>
                          {service.number}
                        </span>

                        <div className="space-y-2.5">
                          <h3 className={`font-display-luxury text-2xl md:text-3xl font-light transition-all duration-300 ${
                            isActive ? 'italic' : 'text-[#212529]'
                          }`}
                          style={isActive ? {
                            background: 'linear-gradient(135deg, #F9F5EC 0%, #E8D4A8 50%, #C9A96E 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                          } : {}}>
                            {service.title}
                          </h3>

                          <p className={`text-xs md:text-sm max-w-lg font-light leading-relaxed ${
                            isActive ? 'text-white/70' : 'text-[#212529]/75'
                          }`}>
                            {service.tagline}
                          </p>

                          {/* Sage green inclusion tags */}
                          {isActive && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="pt-3 flex flex-wrap gap-2"
                            >
                              {service.keyInclusions.slice(0, 3).map((inc, i) => (
                                <span key={i} className="text-[10px] uppercase tracking-wider px-3 py-1 flex items-center gap-1 font-medium rounded-full" style={{
                                  background: 'rgba(74, 107, 91, 0.2)',
                                  color: '#8DA999',
                                  border: '1px solid rgba(141, 169, 153, 0.3)',
                                }}>
                                  <Check className="w-3 h-3 text-[#C9A96E]" />
                                  {inc}
                                </span>
                              ))}
                            </motion.div>
                          )}
                        </div>
                      </div>

                      <div className={`p-3 rounded-full border transition-all duration-300 shrink-0 ml-4 ${isActive ? 'scale-110' : ''}`}
                        style={isActive ? {
                          background: 'linear-gradient(135deg, #D4AF37 0%, #C9A96E 100%)',
                          borderColor: '#C9A96E',
                          color: '#111',
                        } : {
                          borderColor: 'rgba(201, 169, 110, 0.3)',
                          color: '#4A6B5B',
                        }}>
                        <ArrowUpRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>

          {/* Preview Panel - 5 cols */}
          <div className="lg:col-span-5 relative hidden lg:block">
            <AnimatedSection direction="left" delay={0.2}>
              <div className="aspect-[4/5] overflow-hidden shadow-2xl relative rounded-2xl gold-border-glow">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeService.id}
                    initial={{ opacity: 0, scale: 1.08 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    src={activeService.image}
                    alt={activeService.title}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                <div className="absolute bottom-8 left-8 right-8 text-white space-y-2 z-10">
                  <span className="micro-label tracking-[0.25em] text-[#E8D4A8]">
                    ✦ ATELIER CATEGORY {activeService.number}
                  </span>
                  <p className="font-display-luxury text-3xl italic font-light text-gold-gradient-light">
                    {activeService.title}
                  </p>
                  <p className="text-xs text-white/70 font-light max-w-xs leading-relaxed">
                    {activeService.idealFor}
                  </p>
                </div>
              </div>

              {/* Decorative accent below */}
              <div className="mt-6 subtle-divider-gold" />
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};
