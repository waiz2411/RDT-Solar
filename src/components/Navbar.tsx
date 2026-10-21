import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MessageCircle, 
  Menu, 
  X, 
  MapPin, 
  ShieldCheck, 
  Sun,
  Flame,
  Wrench,
  Truck,
  Sparkles
} from 'lucide-react';
import { COMPANY_INFO } from '../data/servicesData';
import { Link, NavLink, useLocation } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: '7 Services', path: '/services' },
    { name: 'Solar Calculator', path: '/solar-calculator' },
    { name: 'COC Standards', path: '/compliance-coc' },
    { name: 'Our Work', path: '/our-work' },
    { name: 'Contact & Base', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top South Africa Announcement Ribbon */}
      <div className="bg-gradient-to-r from-slate-950 via-[#101b38] to-slate-950 text-slate-300 text-[11px] py-1.5 px-4 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="flex items-center space-x-1.5 text-amber-400 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Richards Bay & Zululand Mobile Units On Call</span>
            </span>
            <span className="hidden md:inline text-slate-500">|</span>
            <span className="hidden md:inline text-slate-300">
              SANS 10142-1 Electrical COC • LPGSA Registered Gas Installer • Electric Fence EFC
            </span>
          </div>

          <div className="hidden sm:flex items-center space-x-4 text-xs font-mono font-medium">
            <a 
              href={`tel:${COMPANY_INFO.contacts.rudi.phone}`} 
              className="text-slate-300 hover:text-amber-400 transition-colors flex items-center space-x-1"
            >
              <span>Rudi:</span>
              <span className="text-white font-bold">{COMPANY_INFO.contacts.rudi.phoneDisplay}</span>
            </a>
            <span className="text-slate-600">/</span>
            <a 
              href={`https://wa.me/${COMPANY_INFO.contacts.tania.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer" 
              className="text-slate-300 hover:text-emerald-400 transition-colors flex items-center space-x-1"
            >
              <span>Tania:</span>
              <span className="text-emerald-400 font-bold">{COMPANY_INFO.contacts.tania.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Glassmorphic Navigation Bar */}
      <nav
        className={`px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
          isScrolled
            ? 'py-2.5 bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 shadow-2xl'
            : 'py-3.5 bg-slate-950/75 backdrop-blur-md border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Official Brand Logo & Name */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative w-11 h-11 rounded-xl overflow-hidden border border-white/20 bg-slate-900 shadow-md group-hover:border-amber-400 transition-colors flex items-center justify-center">
              <img
                src="/images/rdt-logo.jpeg"
                alt="RDT We Do It All Logo"
                className="w-full h-full object-contain"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <span className="text-amber-400 font-black text-sm absolute">RDT</span>
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <span className="text-lg sm:text-xl font-black text-white tracking-tight group-hover:text-amber-400 transition-colors">
                  RDT
                </span>
                <span className="text-xs sm:text-sm font-semibold tracking-wide uppercase text-slate-300">
                  We Do It All
                </span>
              </div>
              <p className="text-[10px] text-slate-400 font-mono -mt-0.5">
                Richards Bay • 7 Certified Trades
              </p>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-1 bg-slate-900/80 p-1.5 rounded-full border border-slate-800">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                    isActive
                      ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Direct CTA Buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href={`tel:${COMPANY_INFO.contacts.rudi.phone}`}
              className="py-2 px-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-bold border border-slate-750 flex items-center space-x-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              <span>Call Rudi</span>
            </a>

            <a
              href={`https://wa.me/${COMPANY_INFO.contacts.tania.whatsappNumber}?text=Hi%20Dr.%20Tania,%20I'm%20reaching%20out%20from%20your%20website%20for%20a%20home%20consultation.`}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 text-xs font-black flex items-center space-x-1.5 shadow-lg shadow-amber-500/20 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Tania</span>
            </a>
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-slate-900 text-slate-300 border border-slate-800 focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Slideout Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-5 rounded-2xl glass-panel border border-slate-800 space-y-3">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-3 py-2 rounded-xl text-sm font-semibold transition-colors ${
                      isActive
                        ? 'bg-amber-500 text-slate-950 font-bold'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
              <a
                href={`https://wa.me/${COMPANY_INFO.contacts.tania.whatsappNumber}?text=Hi%20Tania,%20I'm%20interested%20in%20RDT%20services%20in%20Richards%20Bay.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Tania (079 529 5572)</span>
              </a>
              <a
                href={`tel:${COMPANY_INFO.contacts.rudi.phone}`}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-800 text-slate-200 font-semibold text-xs flex items-center justify-center space-x-2 border border-slate-700"
              >
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>Call Rudi (082 418 2687)</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
