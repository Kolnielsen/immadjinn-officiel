import React from 'react';
import { Page } from '../types';
import { COMPANY_INFO, CORE_SERVICES } from '../data/content';
import { Phone, Mail, MapPin, Shield, ArrowUpRight, Award, CheckCircle2 } from 'lucide-react';
import { Logo } from './Logo';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (page: Page) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070b10] border-t border-[#c5a059]/20 text-slate-400 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#c5a059]/5 blur-[120px] pointer-events-none" />

      {/* Top Banner with Direct Contact Actions */}
      <div className="border-b border-slate-800/80 py-10 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#0e1622] p-6 border border-[#c5a059]/15 rounded-sm hover:border-[#c5a059]/40 transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#c5a059]/10 rounded-sm flex items-center justify-center text-[#dfba73]">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-400">Ligne Directe Genève</p>
                <a
                  id="footer-call-btn"
                  href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
                  className="text-lg font-medium text-white hover:text-[#dfba73] transition-colors"
                >
                  {COMPANY_INFO.phone}
                </a>
              </div>
            </div>
          </div>

          <div className="bg-[#0e1622] p-6 border border-[#c5a059]/15 rounded-sm hover:border-[#c5a059]/40 transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#c5a059]/10 rounded-sm flex items-center justify-center text-[#dfba73]">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-400">Correspondance Dédiée</p>
                <a
                  id="footer-mail-btn"
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-lg font-medium text-white hover:text-[#dfba73] transition-colors"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>
          </div>

          <div className="bg-[#0e1622] p-6 border border-[#c5a059]/15 rounded-sm hover:border-[#c5a059]/40 transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#c5a059]/10 rounded-sm flex items-center justify-center text-[#dfba73]">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-400">Siège Social & Domiciliation</p>
                <p className="text-sm font-medium text-white">
                  {COMPANY_INFO.address}
                </p>
                <p className="text-[11px] text-slate-400 italic">Adresse postale &bull; Interventions sur site (Genève & Vaud)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-4">
              <button
                onClick={() => handleLinkClick('home')}
                className="text-left focus:outline-none cursor-pointer group"
                aria-label="Retour à l'accueil"
              >
                <Logo size="lg" className="h-12 sm:h-14 w-auto transition-transform duration-300 group-hover:scale-105" />
              </button>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed max-w-md">
              Développeur de projets immobiliers de référence sur les cantons de Genève et Vaud. Chef d'orchestre global, ImmaDjinn SA valorise le foncier et pilote chaque phase du projet, du terrain brut jusqu'à la commercialisation.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs text-slate-300">
              <div className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded border border-slate-800">
                <Shield className="w-4 h-4 text-[#c5a059]" />
                <span>Standards Suisses SIA</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded border border-slate-800">
                <Award className="w-4 h-4 text-[#c5a059]" />
                <span>Rigueur & Confidentialité</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-base uppercase tracking-wider text-white mb-5 border-l-2 border-[#c5a059] pl-3">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <button
                  onClick={() => handleLinkClick('home')}
                  className="hover:text-[#dfba73] transition-colors flex items-center gap-1 group"
                >
                  <span>Accueil</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('about')}
                  className="hover:text-[#dfba73] transition-colors flex items-center gap-1 group"
                >
                  <span>À propos d'ImmaDjinn</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('services')}
                  className="hover:text-[#dfba73] transition-colors flex items-center gap-1 group"
                >
                  <span>Nos Services de Développement</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('contact')}
                  className="hover:text-[#dfba73] transition-colors flex items-center gap-1 group"
                >
                  <span>Contact & Étude de projet</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-serif text-base uppercase tracking-wider text-white mb-5 border-l-2 border-[#c5a059] pl-3">
              Expertises
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {CORE_SERVICES.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => handleLinkClick('services')}
                    className="hover:text-slate-200 transition-colors text-left flex items-start gap-1.5"
                  >
                    <CheckCircle2 className="w-3 h-3 text-[#c5a059] shrink-0 mt-0.5" />
                    <span>{s.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Location & Presence */}
          <div>
            <h4 className="font-serif text-base uppercase tracking-wider text-white mb-5 border-l-2 border-[#c5a059] pl-3">
              Genève & Vaud
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              <p className="font-medium text-white">Siège Social & Rayonnement</p>
              <p className="leading-relaxed text-slate-400">
                {COMPANY_INFO.address}<br />
                Cantons de Genève & Vaud, Suisse
              </p>
              <div className="pt-2">
                <p className="text-slate-400">{COMPANY_INFO.openingHours}</p>
                <p className="text-[#dfba73] font-medium mt-1">Visites & expertises sur parcelles (GE & VD)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800/80 bg-[#05080c] py-6 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} {COMPANY_INFO.name}. Tous droits réservés. Développeur immobilier &bull; Cantons de Genève et Vaud.</p>
          <div className="flex items-center gap-6">
            <span>Développement de projet immobilier</span>
            <span>&bull;</span>
            <span>Confidentialité & Rigueur Suisse</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
