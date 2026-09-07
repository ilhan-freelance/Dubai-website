import React, { useState } from 'react';
import { SERVICES_DATA } from '../../data/servicesData';
import { ArrowUpRight, Check, Diamond } from 'lucide-react';
import { AnimatedSection } from '../common/AnimatedSection';
import { motion, AnimatePresence } from 'framer-motion';

interface ServicesPreviewProps {
  onSelectService: (serviceId: string) => void;
}

export const ServicesPreview: React.FC<ServicesPreviewProps> = ({ onSelectService }) => {
  const [activeId, setActiveId] = useState<string>(SERVICES_DATA[0].id);
  const activeService = SERVICES_DATA.find((s) => s.id === activeId) || SERVICES_DATA[0];

  return (
    <section className="text-white py-32 md:py-52 relative overflow-hidden" style={{
      background: 'linear-gradient(160deg, #FAF8F5 0%, #F5EDDF 40%, #F9E8E8 100%)'
    }}>

      {/* Blush dot pattern */}
      <div className="absolute inset-0 bg-dot-blush" />

      {/* Background watermark */}
      <div className="absolute top-1/4 right-0 pointer-events-none select-none opacity-[0.04] overflow-hidden">
        <span className="font-display-luxury text-[200px] md:text-[300px] tracking-[0.1em] uppercase text-[#262822] block leading-none font-light">
          SERVICES
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-8 md:px-16 relative z-10">

        {/* Section Header */}
        <AnimatedSection direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="space-y-5 max-w-xl">
              <div className="flex items-center space-x-3">
                <Diamond className="w-3.5 h-3.5" style={{ color: '#C9A96E' }} />
                <span className="micro-label tracking-[0.32em]" style={{ color: '#C9A96E' }}>
                  HAUTE COUTURE CAPABILITIES
                </span>
              </div>
              <h2 className="font-display-luxury text-4xl sm:text-6xl font-light leading-[1.05] text-[#1C1A2E] tracking-tight">
                Our Services,{' '}
                <span className="italic" style={{
                  background: 'linear-gradient(135deg, #C9A96E 0%, #9E7B45 50%, #C9A96E 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  Thoughtfully Curated.
                </span>
              </h2>
            </div>
            <p className="micro-label text-[#C9A96E]/70 max-w-xs leading-relaxed tracking-[0.22em]">
              CREATIVE DIRECTION · SPATIAL ARCHITECTURE · FULL EVENT PRODUCTION
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
                    className={`group p-6 md:p-8 border transition-all duration-500 cursor-pointer relative overflow-hidden ${
                      isActive
                        ? 'shadow-2xl'
                        : ''
                    }`}
                    style={isActive ? {
                      background: 'linear-gradient(145deg, #1C1A2E 0%, #14122A 100%)',
                      borderColor: 'rgba(201, 169, 110, 0.4)',
                      boxShadow: '0 20px 60px rgba(28, 26, 46, 0.25), 0 0 0 1px rgba(201, 169, 110, 0.1)',
                    } : {
                      background: 'rgba(250, 248, 245, 0.6)',
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

                    {/* Shimmer on active */}
                    {isActive && (
                      <div className="absolute inset-0 pointer-events-none overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C9A96E]/5 to-transparent" />
                      </div>
                    )}

                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-6 md:space-x-8">
                        <span className={`font-display-luxury text-3xl md:text-4xl transition-all duration-300 ${isActive ? 'font-normal' : ''}`}
                          style={isActive ? {
                            background: 'linear-gradient(135deg, #E8D4A8 0%, #C9A96E 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                          } : { color: '#C9A96E', opacity: 0.5 }}>
                          {service.number}
                        </span>

                        <div className="space-y-2.5">
                          <h3 className={`font-display-luxury text-2xl md:text-3xl font-light transition-all duration-300 ${
                            isActive ? 'italic' : 'text-[#1C1A2E]'
                          }`}
                          style={isActive ? {
                            background: 'linear-gradient(135deg, #F2D4D4 0%, #E8D4A8 50%, #C9A96E 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                          } : {}}>
                            {service.title}
                          </h3>

                          <p className={`text-xs md:text-sm max-w-lg font-light leading-relaxed ${
                            isActive ? 'text-white/60' : 'text-[#1C1A2E]/60'
                          }`}>
                            {service.tagline}
                          </p>

                          {/* Blush pink inclusion tags */}
                          {isActive && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="pt-3 flex flex-wrap gap-2"
                            >
                              {service.keyInclusions.slice(0, 3).map((inc, i) => (
                                <span key={i} className="text-[10px] uppercase tracking-wider px-3 py-1 flex items-center gap-1 font-medium" style={{
                                  background: 'rgba(232, 180, 184, 0.15)',
                                  color: '#E8B4B8',
                                  border: '1px solid rgba(232, 180, 184, 0.3)',
                                }}>
                                  <Check className="w-3 h-3" />
                                  {inc}
                                </span>
                              ))}
                            </motion.div>
                          )}
                        </div>
                      </div>

                      <div className={`p-3 rounded-full border transition-all duration-300 shrink-0 ml-4 ${isActive ? 'scale-110' : ''}`}
                        style={isActive ? {
                          background: 'linear-gradient(135deg, #C9A96E 0%, #9E7B45 100%)',
                          borderColor: '#C9A96E',
                          color: '#FAF8F5',
                        } : {
                          borderColor: 'rgba(201, 169, 110, 0.3)',
                          color: 'rgba(201, 169, 110, 0.5)',
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
              <div className="aspect-[4/5] overflow-hidden shadow-2xl relative gold-border-glow">
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

                <div className="absolute inset-0" style={{
                  background: 'linear-gradient(to top, rgba(28,26,46,0.9) 0%, rgba(28,26,46,0.3) 50%, transparent 100%)'
                }} />

                {/* Pink blush glow overlay */}
                <div className="absolute inset-0" style={{
                  background: 'radial-gradient(ellipse at 30% 20%, rgba(232, 180, 184, 0.08) 0%, transparent 60%)'
                }} />

                <div className="absolute bottom-8 left-8 right-8 text-white space-y-2 z-10">
                  <span className="micro-label tracking-[0.25em]" style={{ color: '#E8D4A8' }}>
                    ✦ ATELIER CATEGORY {activeService.number}
                  </span>
                  <p className="font-display-luxury text-3xl italic font-light text-gold-gradient-light">
                    {activeService.title}
                  </p>
                  <p className="text-xs text-white/60 font-light max-w-xs leading-relaxed">
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
