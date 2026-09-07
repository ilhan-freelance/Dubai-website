import React from 'react';

interface FooterProps {
  onNavigate: (tab: string) => void;
  onOpenEnquiry: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenEnquiry }) => {
  const handleNav = (tab: string) => {
    onNavigate(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FAF8F6] text-[#2A2226] pt-16 pb-10 border-t border-[#EBD3D7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
        
        {/* Main 4 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#EBD3D7]/60">
          
          {/* Col 1: Brand & Logo */}
          <div className="space-y-4">
            <div className="flex flex-col items-start cursor-pointer" onClick={() => handleNav('home')}>
              <img
                src="/logo-transparent.png"
                alt="Love Details Dubai"
                className="h-12 w-auto object-contain transition-all hover:scale-105"
                style={{ filter: 'drop-shadow(0 2px 6px rgba(148,76,94,0.3))' }}
              />
            </div>

            <p className="text-xs text-[#2A2226]/80 font-sans leading-relaxed">
              Dubai’s premier luxury wedding & event atelier. Crafting timeless, romantic celebrations across the UAE.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-[#F7ECEE] border border-[#EBD3D7] text-[#944C5E] flex items-center justify-center hover:bg-[#944C5E] hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-[#F7ECEE] border border-[#EBD3D7] text-[#944C5E] flex items-center justify-center hover:bg-[#944C5E] hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z"/>
                </svg>
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-[#F7ECEE] border border-[#EBD3D7] text-[#944C5E] flex items-center justify-center hover:bg-[#944C5E] hover:text-white transition-colors"
                aria-label="Pinterest"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-sans font-semibold text-[#944C5E]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs font-sans text-[#2A2226]/80">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-[#944C5E] transition-colors cursor-pointer">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-[#944C5E] transition-colors cursor-pointer">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-[#944C5E] transition-colors cursor-pointer">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('portfolio')} className="hover:text-[#944C5E] transition-colors cursor-pointer">
                  Portfolio
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-[#944C5E] transition-colors cursor-pointer">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-sans font-semibold text-[#944C5E]">
              Services
            </h4>
            <ul className="space-y-2 text-xs font-sans text-[#2A2226]/80">
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-[#944C5E] transition-colors cursor-pointer">
                  Full Wedding Planning
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-[#944C5E] transition-colors cursor-pointer">
                  Partial Coordination
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-[#944C5E] transition-colors cursor-pointer">
                  Day-of Management
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-[#944C5E] transition-colors cursor-pointer">
                  Destination Weddings
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Us */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-sans font-semibold text-[#944C5E]">
              Contact Us
            </h4>
            <div className="space-y-2 text-xs font-sans text-[#2A2226]/80">
              <p>Jumeirah Bay & Downtown Atelier</p>
              <p>Dubai, United Arab Emirates</p>
              <p className="pt-1 font-semibold text-[#944C5E]">+971 4 000 0000</p>
              <p>enquiries@lovedetails.ae</p>
              <div className="pt-2">
                <button
                  onClick={onOpenEnquiry}
                  className="px-4 py-2 bg-[#944C5E] hover:bg-[#7A3D4D] text-white rounded-full text-[10px] font-sans font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Book Consultation
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="text-center text-xs text-[#2A2226]/60 font-sans">
          <p>© {new Date().getFullYear()} Love Details Atelier. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};
