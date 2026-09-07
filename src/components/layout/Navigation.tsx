import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleItemClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const leftNavItems = [
    { label: 'Home', id: 'home' },
    { label: 'About Us', id: 'about' },
    { label: 'Services', id: 'services' },
  ];

  const rightNavItems = [
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'Venues', id: 'venues' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <header
      className={`w-full z-50 sticky top-0 transition-all duration-300 bg-white/98 backdrop-blur-md border-b border-[#D4AF37]/35 shadow-[0_4px_20px_rgba(0,0,0,0.06)] ${
        isScrolled ? 'py-2.5 sm:py-3' : 'py-3.5 sm:py-4'
      }`}
    >
      {/* ── BALANCED FULL SCREEN WIDTH CONTAINER ── */}
      <div className="relative max-w-[1550px] mx-auto px-6 sm:px-10 md:px-14 flex items-center justify-between min-h-[70px] z-10">

        {/* ── MOBILE MENU TOGGLE (LEFT ON MOBILE) ── */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 focus:outline-none text-[#8C2D42] hover:text-[#9B741A] transition-colors z-20"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* ── MOBILE CENTER LOGO ── */}
        <div
          onClick={() => handleItemClick('home')}
          className="lg:hidden cursor-pointer flex flex-col items-center justify-center py-1 z-20 text-center"
        >
          <img
            src="/logo-real-emblem.png"
            alt="Love Details Monogram Emblem"
            className="h-12 w-auto object-contain drop-shadow-[0_2px_8px_rgba(148,107,0,0.25)]"
          />
          <span className="font-['Bodoni_Moda'] text-xs font-black tracking-[0.38em] uppercase text-[#946B00] mt-1 text-center ml-[0.38em]">
            LOVE DETAILS
          </span>
        </div>

        {/* ── DESKTOP LEFT NAV LINKS ── */}
        <div className="hidden lg:flex flex-1 justify-end pr-24 lg:pr-40 xl:pr-52 2xl:pr-64 z-20">
          <nav className="flex items-center space-x-8 lg:space-x-12 xl:space-x-14 text-[12.5px] sm:text-[13px] lg:text-[13.5px] uppercase tracking-[0.28em] font-['Montserrat'] font-bold">
            {leftNavItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={`py-1.5 transition-colors duration-200 cursor-pointer ${
                    isActive
                      ? 'text-[#801B34] font-black scale-105'
                      : 'text-[#801B34]/85 hover:text-[#946B00]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* ── DESKTOP ABSOLUTE CENTER LOGO ── */}
        <div
          onClick={() => handleItemClick('home')}
          className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer group flex-col items-center justify-center z-30 py-1 text-center"
        >
          <img
            src="/logo-real-emblem.png"
            alt="Love Details Monogram Emblem"
            className="h-13 md:h-15 lg:h-[68px] w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_3px_12px_rgba(148,107,0,0.28)]"
          />

          <span className="font-['Bodoni_Moda'] text-xs sm:text-[15px] md:text-[16.5px] font-black tracking-[0.38em] uppercase mt-1 ml-[0.38em] text-[#946B00] group-hover:text-[#801B34] transition-colors text-center">
            LOVE DETAILS
          </span>
        </div>

        {/* ── DESKTOP RIGHT NAV LINKS ── */}
        <div className="hidden lg:flex flex-1 justify-start pl-24 lg:pl-40 xl:pl-52 2xl:pl-64 z-20">
          <nav className="flex items-center space-x-8 lg:space-x-12 xl:space-x-14 text-[12.5px] sm:text-[13px] lg:text-[13.5px] uppercase tracking-[0.28em] font-['Montserrat'] font-bold">
            {rightNavItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={`py-1.5 transition-colors duration-200 cursor-pointer ${
                    isActive
                      ? 'text-[#801B34] font-black scale-105'
                      : 'text-[#801B34]/85 hover:text-[#946B00]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>

      </div>

      {/* ── MOBILE MENU DROPDOWN ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            className="lg:hidden absolute top-full left-4 right-4 mt-3 bg-white border border-[#D4AF37]/35 rounded-2xl px-6 py-6 space-y-4 shadow-[0_15px_40px_rgba(0,0,0,0.12)] z-50"
          >
            {[...leftNavItems, ...rightNavItems].map((item) => (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={`block w-full text-left py-2.5 text-xs uppercase tracking-[0.24em] font-['Montserrat'] font-bold border-b border-[#801B34]/10 transition-colors ${
                  currentTab === item.id
                    ? 'text-[#801B34] font-black pl-2 border-l-2 border-l-[#801B34]'
                    : 'text-[#801B34]/90 hover:text-[#946B00]'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => {
                if (onOpenEnquiry) onOpenEnquiry();
                else handleItemClick('contact');
              }}
              className="w-full py-3 rounded-full font-sans text-xs font-bold uppercase tracking-[0.15em] text-white shadow-md mt-2 cursor-pointer transition-transform hover:scale-[1.02]"
              style={{
                background: 'linear-gradient(135deg, #943B50 0%, #7A2338 100%)',
                boxShadow: '0 6px 18px rgba(140,45,66,0.3)',
              }}
            >
              Plan My Wedding
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};


