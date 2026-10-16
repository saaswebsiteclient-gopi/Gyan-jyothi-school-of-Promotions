import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar, Sparkles, MessageCircle } from 'lucide-react';
import { OWNER_CONTACT } from '../data/store';

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT US' },
    { id: 'services', label: 'SERVICES' },
    { id: 'book-appointment', label: 'BOOK APPOINTMENT', isPrimary: true },
    { id: 'store', label: 'STORE' },
    { id: 'contact', label: 'CONTACT US' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Notification Bar */}
      <div className="bg-gradient-to-r from-[#061a14] via-[#0f382c] to-[#061a14] border-b border-amber-500/20 text-xs py-2 px-4 text-center">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-slate-300">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-amber-300/90 font-medium">Direct Consultations with Founder GOPINATH D S</span>
            <span className="hidden md:inline text-slate-500">|</span>
            <span className="hidden md:inline text-slate-300">Bangalore & Worldwide Remote Consultations</span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <a
              href={`https://wa.me/${OWNER_CONTACT.rawPhone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp: {OWNER_CONTACT.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#07130e]/95 backdrop-blur-md shadow-xl border-b border-amber-500/20 py-3'
            : 'bg-[#07130e]/80 backdrop-blur-sm py-4 border-b border-emerald-900/30'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo & School Branding */}
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-3 text-left group focus:outline-none"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-400/20 via-emerald-800/40 to-amber-600/20 border border-amber-400/40 flex items-center justify-center p-1.5 shadow-md group-hover:border-amber-400 transition-colors">
                {/* Sacred Geometric Sri Yantra / 9-Number Matrix Symbol */}
                <svg viewBox="0 0 100 100" className="w-full h-full text-amber-400">
                  <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="3" opacity="0.4" />
                  <circle cx="50" cy="50" r="38" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" />
                  <polygon points="50,15 80,72 20,72" fill="none" stroke="currentColor" strokeWidth="2.5" />
                  <polygon points="50,85 80,28 20,28" fill="none" stroke="currentColor" strokeWidth="2.5" />
                  <circle cx="50" cy="50" r="7" fill="currentColor" />
                </svg>
              </div>
              <div>
                <span className="font-cinzel text-base sm:text-lg font-bold tracking-wider text-slate-100 flex items-center gap-1.5">
                  GYAN JYOTHI
                  <span className="text-amber-400 text-xs font-normal border border-amber-500/40 px-1.5 py-0.2 rounded bg-amber-500/10 hidden sm:inline">
                    EST. VEDIC
                  </span>
                </span>
                <span className="block text-[11px] sm:text-xs text-amber-300/80 tracking-widest uppercase font-medium">
                  School of Occult Science
                </span>
              </div>
            </button>

            {/* Desktop Navigation Links: HOME | ABOUT US | SERVICES | BOOK APPOINTMENT | STORE | CONTACT US */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                if (item.isPrimary) {
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className="ml-3 px-5 py-2.5 rounded-lg bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-black font-semibold text-xs tracking-wider uppercase shadow-lg shadow-amber-500/20 hover:shadow-amber-400/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 border border-amber-300 flex items-center gap-2 group ring-2 ring-amber-400/40 ring-offset-2 ring-offset-[#07130e]"
                    >
                      <Calendar className="w-3.5 h-3.5 group-hover:rotate-12 transition-transform" />
                      <span>{item.label}</span>
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-900"></span>
                      </span>
                    </button>
                  );
                }

                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`px-3.5 py-2 text-xs font-medium tracking-wider uppercase transition-colors rounded-md ${
                      isActive
                        ? 'text-amber-300 bg-amber-400/10 font-semibold border-b-2 border-amber-400'
                        : 'text-slate-300 hover:text-amber-300 hover:bg-emerald-900/30'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>

            {/* Mobile Actions */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => handleNavClick('book-appointment')}
                className="px-3.5 py-1.5 rounded-md bg-gradient-to-r from-amber-500 to-amber-400 text-black font-bold text-xs tracking-wide uppercase shadow-md flex items-center gap-1.5"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book</span>
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
                className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-emerald-950/60 border border-emerald-800/40"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-amber-500/20 bg-[#07130e]/98 px-4 pt-3 pb-6 space-y-2 mt-3 animate-in fade-in duration-200">
            {navItems.map((item) => {
              if (item.isPrimary) {
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className="w-full text-center py-3 rounded-lg bg-gradient-to-r from-amber-500 to-amber-400 text-black font-bold text-sm tracking-wider uppercase shadow-lg flex items-center justify-center gap-2 my-2 ring-1 ring-amber-300"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>{item.label} (Primary)</span>
                  </button>
                );
              }

              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium tracking-wide transition-colors ${
                    activeSection === item.id
                      ? 'bg-amber-500/15 text-amber-300 font-semibold border-l-4 border-amber-400'
                      : 'text-slate-300 hover:bg-emerald-900/40 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}

            <div className="pt-3 border-t border-emerald-900/40 mt-3 flex flex-col gap-2">
              <a
                href={`https://wa.me/${OWNER_CONTACT.rawPhone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-lg bg-emerald-900/50 hover:bg-emerald-800/50 border border-emerald-600/40 text-emerald-300 text-xs font-medium flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp: {OWNER_CONTACT.phone}</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
