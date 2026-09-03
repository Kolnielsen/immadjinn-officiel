import React, { useState, useEffect } from 'react';
import { Page } from '../types';
import { COMPANY_INFO } from '../data/content';
import { Phone, Mail, MapPin, Menu, X, ArrowRight } from 'lucide-react';
import { Logo } from './Logo';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { id: Page; label: string }[] = [
    { id: 'home', label: 'Accueil' },
    { id: 'about', label: 'À propos' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (page: Page) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top utility bar */}
      <div className={`bg-[#0a0f16]/95 border-b border-[#c5a059]/15 text-xs text-slate-300 py-2 px-4 sm:px-8 transition-all duration-300 ${isScrolled ? 'hidden sm:block opacity-90' : 'block'}`}>
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-6">
            <a
              id="topbar-phone"
              href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-2 hover:text-[#dfba73] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#c5a059]" />
              <span className="font-medium">{COMPANY_INFO.phone}</span>
            </a>
            <a
              id="topbar-email"
              href={`mailto:${COMPANY_INFO.email}`}
              className="hidden md:flex items-center gap-2 hover:text-[#dfba73] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>{COMPANY_INFO.email}</span>
            </a>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>Genève & Vaud, Suisse</span>
            </span>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <span className="text-[#dfba73] font-medium hidden sm:inline">Chef d'orchestre immobilier</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className={`transition-all duration-300 px-4 sm:px-8 ${
        isScrolled
          ? 'bg-[#0b121c]/95 backdrop-blur-md shadow-2xl border-b border-[#c5a059]/20 py-3.5'
          : 'bg-gradient-to-b from-[#0a0f16]/90 to-transparent py-5'
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <button
            id="nav-logo-btn"
            onClick={() => handleNavClick('home')}
            className="group flex items-center gap-3 text-left focus:outline-none cursor-pointer py-1"
          >
            <Logo size="md" className="h-10 sm:h-12 w-auto transition-transform duration-300 group-hover:scale-105" />
            <div className="hidden xl:flex flex-col border-l border-slate-700/80 pl-3">
              <span className="text-[11px] font-semibold tracking-wider text-slate-200 uppercase">
                Suisse
              </span>
              <span className="text-[9px] uppercase tracking-[0.2em] text-[#dfba73]">
                Genève &bull; Vaud
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-sm font-medium tracking-wide transition-all relative py-1 focus:outline-none ${
                    isActive
                      ? 'text-[#dfba73] font-semibold'
                      : 'text-slate-200 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#dfba73] to-[#c5a059] rounded-full" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              id="nav-cta-contact"
              onClick={() => handleNavClick('contact')}
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#0b121c] bg-gradient-to-r from-[#dfba73] via-[#c5a059] to-[#b38d45] hover:brightness-110 active:scale-[0.98] transition-all shadow-md shadow-[#c5a059]/20 rounded-sm"
            >
              <span>Étude de projet</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-white focus:outline-none"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-slate-800 bg-[#0b121c]/95 backdrop-blur-lg rounded-b-lg pb-6 px-4 space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                id={`mobile-nav-link-${link.id}`}
                onClick={() => handleNavClick(link.id)}
                className={`w-full text-left py-2.5 px-3 rounded text-sm font-medium tracking-wide transition-colors ${
                  currentPage === link.id
                    ? 'bg-[#c5a059]/15 text-[#dfba73] font-semibold border-l-2 border-[#dfba73]'
                    : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-3 border-t border-slate-800 flex flex-col gap-3">
              <button
                id="mobile-nav-cta-contact"
                onClick={() => handleNavClick('contact')}
                className="w-full text-center py-3 text-xs font-semibold uppercase tracking-wider text-[#0b121c] bg-gradient-to-r from-[#dfba73] to-[#c5a059] rounded-sm"
              >
                Demander une étude gratuite
              </button>
              <div className="text-center text-xs text-slate-400 space-y-1 pt-2">
                <p>{COMPANY_INFO.phone}</p>
                <p>{COMPANY_INFO.address}</p>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
