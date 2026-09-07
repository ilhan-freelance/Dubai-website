import React from 'react';
import { Diamond } from 'lucide-react';

const AWARDS = [
  'VOGUE WEDDINGS FEATURED',
  'DUBAI BEST LUXURY PLANNER 2025',
  'HARPER’S BAZAAR BRIDE',
  'ELLE WEDDING EXCELLENCE',
  'ARABIAN BUSINESS LUXURY ATELIER',
  'DESTINATION WEDDING COUNCIL MEMBER',
  'BRIDES INTERNATIONAL SELECTION'
];

export const AwardsRibbon: React.FC = () => {
  return (
    <div className="bg-[#1C1A2E] text-[#E8D4A8] py-6 border-y border-[#C9A96E]/30 overflow-hidden relative select-none">
      
      {/* Side Vignette Fades */}
      <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-[#1C1A2E] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-[#1C1A2E] to-transparent z-10 pointer-events-none" />

      {/* Ticker Track */}
      <div className="flex w-max animate-marquee space-x-12 items-center">
        {[...AWARDS, ...AWARDS, ...AWARDS].map((award, i) => (
          <div key={i} className="flex items-center space-x-8 shrink-0">
            <span className="font-sans text-xs font-semibold tracking-[0.3em] uppercase text-[#E8D4A8]">
              {award}
            </span>
            <Diamond className="w-3 h-3 text-[#C9A96E] fill-[#C9A96E]" />
          </div>
        ))}
      </div>
    </div>
  );
};
