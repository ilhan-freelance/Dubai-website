import React from 'react';
import { motion } from 'framer-motion';

interface ServicesSectionProps {
  onSelectService: (serviceId?: string) => void;
}

const SERVICES = [
  {
    id: 'full-planning',
    number: '1',
    title: 'Full Wedding Planning',
    image: '/service-planning.png',
    description: 'Complete end-to-end management, architectural floral design, venue negotiations, guest hospitality, and full budget control from concept to final send-off.'
  },
  {
    id: 'partial-coordination',
    number: '2',
    title: 'Partial Coordination',
    image: '/service-coordination.png',
    description: 'Ideal for couples who have initiated planning but require expert Dubai atelier refinement, high-end vendor selection, and master timeline execution.'
  },
  {
    id: 'day-of-management',
    number: '3',
    title: 'Day-of Management',
    image: '/service-day-of.png',
    description: 'White-glove on-site production directing every single runsheet minute, vendor arrivals, and technical setup so you enjoy absolute peace of mind.'
  }
];

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  return (
    <section className="py-24 md:py-36 bg-[#F7ECEE] text-[#2A2226] relative overflow-hidden px-6">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="font-['Great_Vibes'] text-4xl sm:text-5xl text-[#944C5E] block leading-none">
            Our Services
          </span>
          <h2 className="font-['Playfair_Display'] text-3xl sm:text-5xl font-normal text-[#2A2226] tracking-tight">
            Bespoke Planning For Your Special Day
          </h2>
          <p className="text-xs sm:text-sm text-[#2A2226]/80 font-sans leading-relaxed">
            From intimate desert vows to multi-day royal palace galas, our couture services are tailored around your vision and peace of mind.
          </p>
        </div>

        {/* 3 Column Cards Grid with circular number badges on top */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-4">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              onClick={() => onSelectService(service.id)}
              className="bg-white rounded-3xl p-6 pt-10 border border-[#EBD3D7] shadow-lg relative flex flex-col justify-between group cursor-pointer hover:shadow-xl transition-all duration-300"
            >
              {/* Circular Sage Green Number Badge centered on top edge */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#7A8864] text-white flex items-center justify-center font-['Playfair_Display'] text-xl font-normal shadow-md border-2 border-white">
                {service.number}
              </div>

              <div className="space-y-5 text-center">
                {/* Photo */}
                <div className="w-full aspect-[16/11] rounded-2xl overflow-hidden shadow-sm bg-gray-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <h3 className="font-['Playfair_Display'] text-2xl font-normal text-[#2A2226] group-hover:text-[#944C5E] transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs text-[#2A2226]/80 font-sans leading-relaxed font-normal">
                  {service.description}
                </p>
              </div>

              <div className="pt-6 text-center">
                <button
                  onClick={(e) => { e.stopPropagation(); onSelectService(service.id); }}
                  className="px-6 py-2.5 bg-[#944C5E] hover:bg-[#7A3D4D] text-white rounded-full text-xs font-sans font-semibold uppercase tracking-wider transition-colors cursor-pointer inline-block shadow-sm"
                >
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Services CTA */}
        <div className="text-center pt-2">
          <button
            onClick={() => onSelectService()}
            className="px-8 py-3.5 bg-[#944C5E] hover:bg-[#7A3D4D] text-white rounded-full transition-all text-xs font-sans font-semibold uppercase tracking-widest cursor-pointer shadow-md"
          >
            View All Services
          </button>
        </div>

      </div>
    </section>
  );
};


