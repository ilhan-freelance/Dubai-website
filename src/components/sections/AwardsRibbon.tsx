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
    <div className="bg-[#E0B3B7] text-[#1A1D20] py-5 border-y border-[#D09CA1] overflow-hidden relative select-none">
      
      {/* Side Vignette Fades */}
      <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-[#E0B3B7] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-[#E0B3B7] to-transparent z-10 pointer-events-none" />

      {/* Ticker Track */}
      <div className="marquee-track items-center">
        {/* Set 1 */}
        {AWARDS.map((award, i) => (
          <div key={`a-${i}`} className="flex items-center space-x-8 shrink-0 pr-8">
            <span className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-[#1A1D20]">
              {award}
            </span>
            <Diamond className="w-3 h-3 text-[#7A3B4A] shrink-0" />
          </div>
        ))}
        {/* Set 2 */}
        {AWARDS.map((award, i) => (
          <div key={`b-${i}`} className="flex items-center space-x-8 shrink-0 pr-8">
            <span className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-[#1A1D20]">
              {award}
            </span>
            <Diamond className="w-3 h-3 text-[#7A3B4A] shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
};
