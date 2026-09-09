import React from 'react';
import { Diamond } from 'lucide-react';

const TICKER_ITEMS = [
  "Dubai's #1 Luxury Wedding Planners",
  "Burj Al Arab  ·  Palm Jumeirah  ·  Desert Escapes",
  "Now Booking 2025 & 2026  ·  Limited Dates Available",
  "Featured in Vogue Weddings  ·  Harper's Bazaar Bride",
  "Arabian Business Luxury Award Winners",
  "Full-Service Dubai Wedding Planning Atelier",
  "WhatsApp Us to Reserve Your Date",
];

const Sep = () => (
  <span className="mx-6 flex items-center shrink-0">
    <Diamond className="w-2 h-2 text-[#7A3B4A]" />
  </span>
);

export const TopAnnouncementBar: React.FC = () => {
  return (
    <div
      className="w-full py-2.5 overflow-hidden relative select-none border-b border-[#D09CA1] z-50 shadow-xs"
      style={{
        background: '#E0B3B7',
      }}
    >
      {/* Left fade mask */}
      <div
        className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, #E0B3B7, transparent)' }}
      />
      {/* Right fade mask */}
      <div
        className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, #E0B3B7, transparent)' }}
      />

      {/* Marquee track — continuous moving text */}
      <div className="marquee-track">
        {/* Set 1 */}
        {TICKER_ITEMS.map((item, i) => (
          <React.Fragment key={`a-${i}`}>
            <span className="whitespace-nowrap text-[10px] font-sans font-bold uppercase tracking-[0.22em] text-[#1A1D20] shrink-0">
              {item}
            </span>
            <Sep />
          </React.Fragment>
        ))}
        {/* Set 2 */}
        {TICKER_ITEMS.map((item, i) => (
          <React.Fragment key={`b-${i}`}>
            <span className="whitespace-nowrap text-[10px] font-sans font-bold uppercase tracking-[0.22em] text-[#1A1D20] shrink-0">
              {item}
            </span>
            <Sep />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
