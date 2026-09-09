import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, CheckCircle2, Crown, Palette, ShieldCheck } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceId?: string) => void;
}

const SERVICES = [
  {
    id: 'full-planning',
    number: '01',
    phase: 'Phase 01',
    tagline: 'End-to-End Atelier Production',
    title: 'Full Wedding Planning',
    image: '/service-planning.png',
    icon: Crown,
    description: 'Complete 360° management from initial vision boards to final send-off, handling every vendor contract and guest touchpoint.',
    highlights: [
      'Venue Scouting & Contract Negotiations',
      'Architectural Decor & Floral Design',
      'Guest Concierge & VIP Hospitality'
    ]
  },
  {
    id: 'partial-coordination',
    number: '02',
    phase: 'Phase 02',
    tagline: 'Design & Vendor Refinement',
    title: 'Partial Coordination',
    image: '/service-coordination.png',
    icon: Palette,
    description: 'Tailored for couples with a booked venue who require Dubai atelier styling, elite supplier audits, and master scheduling.',
    highlights: [
      'High-End Dubai Vendor Audits',
      'Spatial 3D Layout & Styling Refinement',
      'Master Production Run-Sheet Creation'
    ]
  },
  {
    id: 'day-of-management',
    number: '03',
    phase: 'Phase 03',
    tagline: 'White-Glove On-Site Directing',
    title: 'Day-of Management',
    image: '/service-day-of.png',
    icon: ShieldCheck,
    description: 'Flawless on-site execution directing every single minute of your runsheet, technical cues, and vendor arrivals.',
    highlights: [
      'Dedicated On-Site Bridal Concierge',
      'Technical, Stage & Lighting Cues',
      'Vendor Arrival & Setup Directing'
    ]
  }
];

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  return (
    <section className="py-12 md:py-16 lg:min-h-[85vh] bg-white text-[#212529] relative overflow-hidden px-6 border-t border-gray-100 flex items-center">
      
      {/* Background Subtle Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.02] select-none">
        <span className="font-['Playfair_Display'] text-[160px] md:text-[260px] tracking-widest text-[#212529] uppercase font-bold">
          ATELIER
        </span>
      </div>

      <div className="max-w-7xl mx-auto space-y-8 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="text-center space-y-2 max-w-4xl mx-auto">
          <span className="text-xs sm:text-sm font-sans font-semibold tracking-[0.3em] uppercase text-[#4A6B5B] inline-flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#4A6B5B]" />
            OUR EXPERTISE
          </span>
          <h2 className="font-['Playfair_Display'] text-3xl sm:text-5xl lg:text-6xl font-normal text-[#212529] tracking-tight leading-tight whitespace-nowrap">
            Couture Planning & Execution
          </h2>
        </div>

        {/* 3 Column Process Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, idx) => {
            const IconComp = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                onClick={() => onSelectService(service.id)}
                className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm hover:shadow-xl hover:border-[#4A6B5B]/50 transition-all duration-300 flex flex-col justify-between group cursor-pointer relative overflow-hidden"
              >
                <div className="space-y-4">
                  
                  {/* Top Bar: Step Tag & Icon */}
                  <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                    <div className="flex items-center gap-2">
                      <span className="w-7 h-7 rounded-full bg-[#3B5649] text-white flex items-center justify-center font-['Playfair_Display'] text-xs font-semibold shadow-xs">
                        {service.number}
                      </span>
                      <div>
                        <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#4A6B5B] block leading-none">
                          {service.phase}
                        </span>
                        <span className="text-[10px] font-serif italic text-gray-500 leading-none">
                          {service.tagline}
                        </span>
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#F4F6F4] text-[#3B5649] flex items-center justify-center group-hover:bg-[#3B5649] group-hover:text-white transition-colors duration-300">
                      <IconComp className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Photo Container */}
                  <div className="w-full aspect-[16/9] rounded-xl overflow-hidden shadow-xs relative bg-gray-100">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-1.5">
                    <h3 className="font-['Playfair_Display'] text-xl font-normal text-[#212529] group-hover:text-[#3B5649] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-[#212529]/75 font-sans leading-relaxed line-clamp-2 min-h-[36px]">
                      {service.description}
                    </p>
                  </div>

                  {/* Deliverables Checklist */}
                  <div className="pt-2 space-y-1.5 border-t border-gray-100">
                    {service.highlights.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-[11px] text-[#212529]/85 font-sans">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#4A6B5B] shrink-0 mt-0.5" />
                        <span className="leading-tight">{item}</span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Bottom Action Link */}
                <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between text-[11px] font-semibold text-[#3B5649] group-hover:text-[#2A3E34]">
                  <span className="uppercase tracking-wider text-[10px]">Explore Service Details</span>
                  <div className="w-7 h-7 rounded-full bg-[#F4F6F4] group-hover:bg-[#3B5649] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-xs">
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
