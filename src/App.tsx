import React, { useState, useEffect } from 'react';
import { Page } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ContactPage } from './pages/ContactPage';
import { ArrowUp } from 'lucide-react';
import { FloatingContactDrawer } from './components/FloatingContactDrawer';
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

      {/* Floating Action Triggers for Higher Conversion (Discreet contact drawer without exposing personal mobile) */}
      <FloatingContactDrawer onNavigateToContact={() => handleNavigate('contact')} />

      {/* Scroll To Top */}
      {showScrollTop && (
        <button
          id="scroll-to-top-btn"
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 z-30 w-10 h-10 rounded-full bg-slate-900/90 border border-slate-700 text-slate-400 hover:text-white hover:border-[#c5a059] flex items-center justify-center transition-all backdrop-blur-sm shadow-lg"
          aria-label="Haut de page"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
