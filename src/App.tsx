import React, { useState, useEffect } from 'react';
import { Page } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ContactPage } from './pages/ContactPage';
import { Phone, MessageSquare, ArrowUp, X } from 'lucide-react';
import { COMPANY_INFO } from './data/content';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (page: Page, serviceId?: string) => {
    setCurrentPage(page);
    setSelectedServiceId(serviceId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0a0f16] text-slate-100 flex flex-col selection:bg-[#c5a059] selection:text-[#0a0f16]">
      {/* Navigation Header */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Page Content with smooth fade */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <HomePage onNavigate={handleNavigate} />
        )}
        {currentPage === 'about' && (
          <AboutPage onNavigate={handleNavigate} />
        )}
        {currentPage === 'services' && (
          <ServicesPage onNavigate={handleNavigate} selectedServiceId={selectedServiceId} />
        )}
        {currentPage === 'contact' && (
          <ContactPage initialServiceId={selectedServiceId} />
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Floating Action Triggers for Higher Conversion */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        {/* Quick Phone Call Action */}
        <a
          id="floating-call-btn"
          href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
          className="w-12 h-12 rounded-full bg-[#0e1624] border border-[#c5a059] text-[#dfba73] hover:bg-[#c5a059] hover:text-[#0b121c] flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-105 group"
          title="Appeler ImmaDjinn Genève"
          aria-label="Appeler ImmaDjinn Genève"
        >
          <Phone className="w-5 h-5 transition-transform group-hover:rotate-12" />
        </a>

        {/* Quick Message / Contact Page Trigger */}
        <button
          id="floating-contact-btn"
          onClick={() => handleNavigate('contact')}
          className="w-12 h-12 rounded-full bg-gradient-to-br from-[#dfba73] to-[#c5a059] text-[#0b121c] flex items-center justify-center shadow-2xl shadow-[#c5a059]/30 hover:scale-105 active:scale-95 transition-all duration-300 group"
          title="Demander une étude"
          aria-label="Demander une étude"
        >
          <MessageSquare className="w-5 h-5" />
        </button>

        {/* Scroll To Top */}
        {showScrollTop && (
          <button
            id="scroll-to-top-btn"
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-slate-900/90 border border-slate-700 text-slate-400 hover:text-white hover:border-[#c5a059] flex items-center justify-center transition-all mx-auto backdrop-blur-sm"
            aria-label="Haut de page"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}
