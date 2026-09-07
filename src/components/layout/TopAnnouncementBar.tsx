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
  <span className="mx-6 flex items-center">
    <Diamond className="w-2 h-2 text-[#D4AF37] drop-shadow-[0_0_6px_rgba(212,175,55,0.8)]" />
  </span>
);

export const TopAnnouncementBar: React.FC = () => {
  return (
    <div
      className="w-full py-2.5 overflow-hidden relative select-none border-b border-[#D4AF37]/20 z-50 shadow-sm"
      style={{
        background: 'linear-gradient(90deg, #7A3B4B 0%, #A65B6F 50%, #7A3B4B 100%)',
      }}
    >
      {/* Left fade mask */}
      <div
        className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, #7A3B4B, transparent)' }}
      />
      {/* Right fade mask */}
      <div
        className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, #7A3B4B, transparent)' }}
      />

      {/* Marquee track — continuous moving text */}
      <div className="marquee-track">
        {/* First set */}
        {TICKER_ITEMS.map((item, i) => (
          <React.Fragment key={`a-${i}`}>
            <span
              className="whitespace-nowrap text-[10px] font-sans font-semibold uppercase tracking-[0.22em] text-[#FAF8F6]"
              style={{ textShadow: '0 1px 4px rgba(0,0,0,0.3)' }}
            >
              {item}
            </span>
            <Sep />
          </React.Fragment>
        ))}
        {/* Duplicate set for seamless loop */}
        {TICKER_ITEMS.map((item, i) => (
          <React.Fragment key={`b-${i}`}>
            <span
              className="whitespace-nowrap text-[10px] font-sans font-semibold uppercase tracking-[0.22em] text-[#FAF8F6]"
              style={{ textShadow: '0 1px 4px rgba(0,0,0,0.3)' }}
            >
              {item}
            </span>
            <Sep />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
