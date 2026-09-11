import React, { useState, useEffect, useRef } from 'react';
import { X, ArrowRight, Sparkles, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavigationProps {
  currentTab: string;
  onNavigate: (tab: string) => void;
  onOpenEnquiry?: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  currentTab,
  onNavigate,
  onOpenEnquiry,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleItemClick = (id: string) => {
    onNavigate(id);
    setDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Philosophy', id: 'about' },
    { label: 'Offerings', id: 'services' },
    { label: 'Experience', id: 'portfolio' },
    { label: 'Destinations', id: 'venues' },
    { label: 'Connect', id: 'contact' },
  ];

  return (
    <header className="w-full z-50 sticky top-0 bg-white/96 backdrop-blur-xl border-b border-[#C9A96E]/30 shadow-[0_4px_25px_rgba(28,43,36,0.06)] transition-all duration-300">
      <div
        ref={navRef}
        className={`w-full max-w-7xl mx-auto px-4 sm:px-8 relative transition-all duration-300 ${
          isScrolled ? 'py-2.5' : 'py-3.5'
        }`}
      >
        <div className="flex items-center justify-between relative min-h-[48px]">
          
          {/* ── FAR LEFT: MENU BUTTON (2-LINE HAMBURGER + MENU TEXT) ── */}
          <div className="relative z-20">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-2.5 px-3.5 py-2 rounded-full hover:bg-[#3B5649]/10 text-[#1A1D20] hover:text-[#3B5649] transition-all cursor-pointer group"
              aria-label="Toggle Navigation Menu"
            >
              {dropdownOpen ? (
                <X className="w-5 h-5 text-[#3B5649]" />
              ) : (
                /* Custom 2-line Hamburger Icon */
                <div className="flex flex-col gap-1 w-5 justify-center items-start">
                  <span className="w-5 h-[1.8px] bg-[#1A1D20] group-hover:bg-[#3B5649] transition-colors rounded-full" />
                  <span className="w-3.5 h-[1.8px] bg-[#1A1D20] group-hover:bg-[#3B5649] transition-colors rounded-full" />
                </div>
              )}
              <span className="text-xs sm:text-sm font-sans font-semibold text-[#1A1D20] group-hover:text-[#3B5649] transition-colors">
                {dropdownOpen ? 'Close' : 'Menu'}
              </span>
            </button>

            {/* ── DROPDOWN CARD ── */}
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 8 }}
                  animate={{ opacity: 1, scale: 1, y: 14 }}
                  exit={{ opacity: 0, scale: 0.95, y: 8 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  className="absolute left-0 top-full w-64 sm:w-72 bg-[#FAF7F2] border border-[#C9A96E]/40 rounded-2xl p-2.5 shadow-[0_16px_40px_rgba(28,43,36,0.14)] z-50 overflow-hidden"
                >
                  <div className="py-1">
                    {navItems.map((item) => {
                      const isActive = currentTab === item.id;
                      return (
                        <button
                          key={item.id}
                          onClick={() => handleItemClick(item.id)}
                          className={`w-full text-left px-4 py-3 rounded-xl text-sm sm:text-base font-serif font-semibold tracking-wide transition-all cursor-pointer flex items-center justify-between group/item ${
                            isActive
                              ? 'bg-[#3B5649] text-white shadow-xs'
                              : 'text-[#1A1D20] hover:text-[#3B5649] hover:bg-white/90'
                          }`}
                        >
                          <span>{item.label}</span>
                          <ChevronRight
                            className={`w-4 h-4 transition-transform group-hover/item:translate-x-1 ${
                              isActive ? 'text-[#E8D4A8]' : 'text-[#C9A96E] opacity-60'
                            }`}
                          />
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ── DEAD CENTER: BRAND LOGO (HD RESOLUTION, NO CUTOFF) ── */}
          <div
            onClick={() => handleItemClick('home')}
            className="cursor-pointer group flex items-center gap-3 select-none absolute left-1/2 -translate-x-1/2 z-10 shrink-0 py-1"
          >
            {/* Crisp HD Monogram Emblem */}
            <img
              src="/logo-hd-emblem.png"
              alt="Love Details HD Monogram Emblem"
              className="h-9 sm:h-11 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-xs"
            />

            <div className="h-6 sm:h-7 w-[1px] bg-[#C9A96E]/40 hidden sm:block" />

            <div className="flex flex-col text-left">
              <span className="font-serif text-base sm:text-lg md:text-xl font-bold tracking-[0.24em] text-[#1A1D20] uppercase leading-none group-hover:text-[#3B5649] transition-colors">
                LOVE DETAILS
              </span>
              <span className="text-[9px] sm:text-[10px] font-sans font-bold tracking-[0.32em] text-[#C9A96E] uppercase leading-none flex items-center gap-1 mt-1">
                DUBAI <Sparkles className="w-2.5 h-2.5 text-[#C9A96E]" /> ATELIER
              </span>
            </div>
          </div>

          {/* ── FAR RIGHT: INQUIRE CTA BUTTON ── */}
          <div className="flex items-center gap-3 z-20">
            <button
              onClick={() => {
                if (onOpenEnquiry) onOpenEnquiry();
                else handleItemClick('contact');
              }}
              className="px-5 sm:px-6 py-2 sm:py-2.5 rounded-full bg-[#3B5649] hover:bg-[#2C4439] text-[#FAF8F5] text-[11px] font-sans font-bold uppercase tracking-[0.2em] transition-all shadow-md hover:shadow-lg hover:scale-105 cursor-pointer flex items-center gap-2 border border-[#C9A96E]/40"
            >
              <span>Inquire</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#E8D4A8]" />
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};





