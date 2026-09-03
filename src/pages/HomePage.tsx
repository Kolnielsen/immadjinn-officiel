import React from 'react';
import { Page } from '../types';
import { COMPANY_INFO, CORE_SERVICES, ADVISORY_SERVICES, STATS, PILLARS_ORCHESTRATION } from '../data/content';
import { ContactForm } from '../components/ContactForm';
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Shield,
  Layers,
  Sparkles,
  TrendingUp,
  Landmark,
  Compass,
  LineChart,
  HardHat,
  KeyRound,
  Calculator,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: Page, serviceId?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Landmark': return <Landmark className="w-5 h-5 text-[#dfba73]" />;
      case 'Compass': return <Compass className="w-5 h-5 text-[#dfba73]" />;
      case 'LineChart': return <LineChart className="w-5 h-5 text-[#dfba73]" />;
      case 'HardHat': return <HardHat className="w-5 h-5 text-[#dfba73]" />;
      case 'KeyRound': return <KeyRound className="w-5 h-5 text-[#dfba73]" />;
      case 'Calculator': return <Calculator className="w-5 h-5 text-[#dfba73]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-[#dfba73]" />;
      default: return <Building2 className="w-5 h-5 text-[#dfba73]" />;
    }
  };

  return (
    <div className="space-y-0 text-slate-200">
      {/* HERO SECTION - Architectural Grandeur */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-28 pb-20 px-4 sm:px-8">
        {/* Background visual with rich dark overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85"
            alt="Architecture contemporaine de prestige à Genève"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center scale-105 transform motion-safe:animate-pulse duration-10000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b121c] via-[#0b121c]/80 to-[#070b10]/70" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0b121c_90%)]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0b121c]/90 border border-[#c5a059]/40 text-[#dfba73] text-xs font-medium uppercase tracking-[0.2em] shadow-lg backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#dfba73]" />
            <span>Développement Immobilier de Prestige &bull; Genève & Vaud</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal text-white uppercase tracking-tight leading-[1.1] max-w-4xl mx-auto">
            Chef d'orchestre de vos projets <span className="gold-gradient-text italic font-normal">immobiliers</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
            De la valorisation d'un terrain vierge à la livraison d'actifs d'exception : ImmaDjinn SA unifie propriétaires fonciers, investisseurs, architectes et bâtisseurs.
          </p>

          {/* Direct CTA Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              id="hero-cta-contact"
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto px-8 py-4 text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#0b121c] bg-gradient-to-r from-[#dfba73] via-[#c5a059] to-[#b38d45] hover:brightness-110 active:scale-[0.98] transition-all shadow-xl shadow-[#c5a059]/20 rounded-sm flex items-center justify-center gap-3 cursor-pointer"
            >
              <span>Demander une étude de faisabilité</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              id="hero-cta-services"
              onClick={() => onNavigate('services')}
              className="w-full sm:w-auto px-8 py-4 text-xs sm:text-sm font-semibold uppercase tracking-widest text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700 hover:border-[#c5a059]/60 transition-all rounded-sm backdrop-blur-sm cursor-pointer"
            >
              Découvrir nos services
            </button>
          </div>

          {/* Quick Pillars Badges */}
          <div className="pt-10 grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-slate-800/80 max-w-4xl mx-auto text-xs text-slate-300">
            <div className="flex items-center justify-center gap-2 p-2">
              <Shield className="w-4 h-4 text-[#c5a059]" />
              <span>Standards Suisses SIA</span>
            </div>
            <div className="flex items-center justify-center gap-2 p-2">
              <MapPin className="w-4 h-4 text-[#c5a059]" />
              <span>Cantons de Genève & Vaud</span>
            </div>
            <div className="flex items-center justify-center gap-2 p-2">
              <Layers className="w-4 h-4 text-[#c5a059]" />
              <span>Maîtrise Complète du Cycle</span>
            </div>
            <div className="flex items-center justify-center gap-2 p-2">
              <TrendingUp className="w-4 h-4 text-[#c5a059]" />
              <span>Montage & Financement</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: ARCHITECTURAL GALLERY & KNOW MORE (Inspired by Reference Design) */}
      <section className="py-24 bg-[#0a0f16] px-4 sm:px-8 border-t border-slate-800/60">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <span className="text-xs uppercase tracking-[0.25em] text-[#dfba73] font-semibold">
              Notre Rayonnement &bull; Genève & Vaud
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-white font-normal uppercase tracking-wide">
              L'Art du Développement Immobilier Intégré
            </h2>
            <div className="w-16 h-0.5 bg-[#c5a059] mx-auto my-4" />
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
              {COMPANY_INFO.orchestrationSummary}
            </p>
          </div>

          {/* 4-Image Mosaic Gallery inspired by the mockup layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="group relative h-80 overflow-hidden rounded-sm border border-slate-800 hover:border-[#c5a059]/50 transition-all">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
                alt="Architecture résidentielle d'exception"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b121c] via-[#0b121c]/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[10px] uppercase tracking-widest text-[#dfba73] font-semibold">Conception</span>
                <h3 className="font-serif text-lg text-white font-normal">Design & Architecture SIA</h3>
              </div>
            </div>

            <div className="group relative h-80 overflow-hidden rounded-sm border border-slate-800 hover:border-[#c5a059]/50 transition-all">
              <img
                src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80"
                alt="Aménagement intérieur raffiné"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b121c] via-[#0b121c]/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[10px] uppercase tracking-widest text-[#dfba73] font-semibold">Intérieurs</span>
                <h3 className="font-serif text-lg text-white font-normal">Matériaux Nobles & Espaces</h3>
              </div>
            </div>

            <div className="group relative h-80 overflow-hidden rounded-sm border border-slate-800 hover:border-[#c5a059]/50 transition-all">
              <img
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80"
                alt="Valorisation et requalification foncière"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b121c] via-[#0b121c]/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[10px] uppercase tracking-widest text-[#dfba73] font-semibold">Foncier</span>
                <h3 className="font-serif text-lg text-white font-normal">Optimisation des Parcelles</h3>
              </div>
            </div>

            <div className="group relative h-80 overflow-hidden rounded-sm border border-slate-800 hover:border-[#c5a059]/50 transition-all">
              <img
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80"
                alt="Promotion et réalisation"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b121c] via-[#0b121c]/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[10px] uppercase tracking-widest text-[#dfba73] font-semibold">Exécution</span>
                <h3 className="font-serif text-lg text-white font-normal">Chantier & Maîtrise d'Œuvre</h3>
              </div>
            </div>
          </div>

          {/* 4 Pillars of the Orchestration Model */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
            {PILLARS_ORCHESTRATION.map((p, idx) => (
              <div
                key={idx}
                className="bg-[#0e1622] p-6 rounded-sm border border-slate-800 hover:border-[#c5a059]/40 transition-all space-y-3"
              >
                <div className="inline-block px-2.5 py-1 bg-[#c5a059]/10 text-[#dfba73] text-[10px] font-semibold uppercase tracking-wider rounded-sm">
                  {p.badge}
                </div>
                <h3 className="font-serif text-xl text-white font-normal">{p.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: 5 CORE SERVICES (Showcase with Detailed Cards) */}
      <section className="py-24 bg-[#0b121c] px-4 sm:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800 pb-8">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs uppercase tracking-[0.25em] text-[#dfba73] font-semibold">
                Expertises Intégrales
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-white font-normal uppercase tracking-wide">
                Les 5 Piliers de Votre Développement
              </h2>
              <p className="text-sm text-slate-300 font-light">
                Une prise en charge chirurgicale de chaque étape du projet, garantie par la rigueur suisse.
              </p>
            </div>
            <button
              id="view-all-services-btn"
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#dfba73] hover:text-white transition-colors"
            >
              <span>Voir le détail des 5 services</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CORE_SERVICES.map((service) => (
              <div
                key={service.id}
                className="group bg-[#0e1624] border border-slate-800 hover:border-[#c5a059]/60 rounded-sm overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-black/50"
              >
                <div>
                  {/* Service Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0e1624] via-transparent to-transparent" />
                    <span className="absolute top-3 left-3 bg-[#0b121c]/90 text-[#dfba73] border border-[#c5a059]/30 font-serif text-xs px-2.5 py-1 rounded-sm">
                      {service.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-[#c5a059]/10 rounded-sm">
                        {getIcon(service.iconName)}
                      </div>
                      <h3 className="font-serif text-xl text-white font-normal group-hover:text-[#dfba73] transition-colors">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {service.shortDesc}
                    </p>

                    <ul className="space-y-2 pt-2 border-t border-slate-800/80">
                      {service.benefits.slice(0, 2).map((b, i) => (
                        <li key={i} className="text-[11px] text-slate-400 flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#c5a059] shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    id={`service-card-btn-${service.id}`}
                    onClick={() => onNavigate('services', service.id)}
                    className="w-full py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-white bg-[#141f2e] hover:bg-[#c5a059] hover:text-[#0b121c] rounded-sm transition-all flex items-center justify-center gap-2 border border-slate-700 hover:border-[#c5a059]"
                  >
                    <span>Consulter ce pôle</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}

            {/* Complementary Advisory Card 1: Estimation */}
            <div className="group bg-[#0e1624] border-2 border-[#c5a059]/40 hover:border-[#c5a059] rounded-sm overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-black/50">
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80"
                    alt="Estimation et valorisation de bien immobilier à Genève"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e1624] via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 bg-[#c5a059] text-[#0b121c] font-bold font-serif text-xs px-2.5 py-1 rounded-sm shadow-md">
                    OFFERT &bull; 06
                  </span>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-[#c5a059]/10 rounded-sm">
                      <Calculator className="w-5 h-5 text-[#dfba73]" />
                    </div>
                    <h3 className="font-serif text-xl text-white font-normal group-hover:text-[#dfba73] transition-colors">
                      Estimation de votre bien immobilier
                    </h3>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    Vous possédez un terrain vierge, une villa ou un immeuble sur le canton de Genève ou de Vaud ? Bénéficiez d'une analyse de valeur vénale et de potentiel constructible confidentielle.
                  </p>

                  <ul className="space-y-2 pt-2 border-t border-slate-800/80">
                    <li className="text-[11px] text-slate-400 flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#dfba73] shrink-0 mt-0.5" />
                      <span>Analyse du potentiel de densification & droit à bâtir</span>
                    </li>
                    <li className="text-[11px] text-slate-400 flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#dfba73] shrink-0 mt-0.5" />
                      <span>Rapport d'expertise de valeur sous 48h ouvrées</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  id="home-cta-estimation"
                  onClick={() => onNavigate('contact', 'estimation-immobiliere')}
                  className="w-full py-2.5 px-4 text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-[#dfba73] to-[#c5a059] text-[#0b121c] rounded-sm hover:brightness-110 transition-all flex items-center justify-center gap-2 font-bold cursor-pointer"
                >
                  <span>Demander une estimation</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: INTERACTIVE TIMELINE / METHODOLOGY */}
      <section className="py-24 bg-[#080d14] px-4 sm:px-8 border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <span className="text-xs uppercase tracking-[0.25em] text-[#dfba73] font-semibold">
              Rigueur & Méthodologie Suisse
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-white font-normal uppercase tracking-wide">
              Le Parcours de Réalisation ImmaDjinn
            </h2>
            <p className="text-sm text-slate-300 font-light">
              De l'idée initiale à la concrétisation financière et architecturale de l'actif.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {[
              {
                step: '01',
                title: 'Audit & Foncier',
                desc: 'Analyse du droit à bâtir, faisabilité urbanistique et potentiel de requalification.'
              },
              {
                step: '02',
                title: 'Architecture & Plans',
                desc: 'Conception des concepts avec nos architectes partenaires et modélisation BIM.'
              },
              {
                step: '03',
                title: 'Montage Financier',
                desc: 'Structuration du crédit de construction et obtention des autorisations (DD/APA).'
              },
              {
                step: '04',
                title: 'Pilotage Chantier',
                desc: 'Sélection des entreprises générales et suivi rigoureux des délais et coûts.'
              },
              {
                step: '05',
                title: 'Commercialisation',
                desc: 'Mise en valeur et vente/location pour matérialiser la valeur de l’actif.'
              }
            ].map((st, i) => (
              <div
                key={i}
                className="bg-[#0e1622] p-6 rounded-sm border border-slate-800 hover:border-[#c5a059]/50 transition-all flex flex-col justify-between space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="font-serif text-2xl font-bold text-[#dfba73]">{st.step}</span>
                  <div className="w-2 h-2 rounded-full bg-[#c5a059]" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-white font-normal mb-2">{st.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{st.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: CONVERSION FORM (Matching the Gold-Framed Contact Mockup in the Image) */}
      <section id="conversion-form-section" className="py-24 bg-[#0a0f16] px-4 sm:px-8 relative overflow-hidden">
        {/* Background Architectural Illustration */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#c5a059]/15 text-[#dfba73] text-xs uppercase tracking-wider rounded-sm">
              <MapPin className="w-3.5 h-3.5" />
              <span>Cours des Bastions 13, Genève</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl text-white font-normal uppercase leading-tight">
              Concrétisez votre projet avec un chef d'orchestre dédié
            </h2>

            <p className="text-sm text-slate-300 leading-relaxed">
              Que vous soyez propriétaire d'un terrain vierge, détenteur d'un immeuble à restructurer, ou investisseur en quête d'opportunités sur les cantons de Genève et Vaud : confiez votre vision à ImmaDjinn SA.
            </p>

            <div className="space-y-4 pt-4 text-xs text-slate-300">
              <div className="flex items-center gap-3 bg-[#0e1624] p-3.5 rounded border border-slate-800">
                <Phone className="w-4 h-4 text-[#dfba73]" />
                <div>
                  <p className="text-slate-400">Échange téléphonique direct :</p>
                  <p className="font-medium text-white text-sm">{COMPANY_INFO.phone}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-[#0e1624] p-3.5 rounded border border-slate-800">
                <Mail className="w-4 h-4 text-[#dfba73]" />
                <div>
                  <p className="text-slate-400">Email professionnel :</p>
                  <p className="font-medium text-white text-sm">{COMPANY_INFO.email}</p>
                </div>
              </div>
            </div>

            {/* Trust highlights */}
            <div className="pt-4 grid grid-cols-2 gap-4 text-xs text-slate-400 border-t border-slate-800">
              <div>
                <p className="text-white font-serif text-lg">48h</p>
                <p>Premier retour d'évaluation</p>
              </div>
              <div>
                <p className="text-white font-serif text-lg">100%</p>
                <p>Confidentialité suisse</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* SECTION: GENEVA & VAUD LOCATION & REGIONAL REACH */}
      <section className="py-20 bg-[#070b10] px-4 sm:px-8 border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-[0.25em] text-[#dfba73] font-semibold">
              Rayonnement & Déplacements
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal uppercase">
              Actif sur les Cantons de Genève et Vaud
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              ImmaDjinn SA est domiciliée au Cours des Bastions à Genève (siège social) et déploie ses interventions directement sur le site de vos parcelles et projets dans toute la région lémanique.
            </p>
          </div>

          {/* Dark Stylized Architectural Map Card */}
          <div className="relative rounded-sm overflow-hidden border border-[#c5a059]/30 bg-[#0e1624] p-6 sm:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2 relative min-h-[280px] bg-[#090e15] rounded-sm p-6 flex flex-col justify-between overflow-hidden border border-slate-800">
                {/* Visual grid / road abstraction for Geneva & Vaud */}
                <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#c5a059_1px,transparent_1px)] [background-size:16px_16px]" />
                
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
                    <span className="text-xs uppercase tracking-wider text-slate-300 font-semibold">Cantons de Genève & Vaud &bull; Arc Lémanique</span>
                  </div>
                  <span className="text-xs text-[#dfba73] font-mono">46.2000° N, 6.1450° E</span>
                </div>

                <div className="relative z-10 my-8 text-center sm:text-left space-y-2">
                  <div className="inline-flex items-center gap-2 bg-[#0b121c]/90 px-4 py-2 rounded border border-[#c5a059]/50 shadow-xl">
                    <MapPin className="w-4 h-4 text-[#dfba73]" />
                    <span className="text-sm font-medium text-white">ImmaDjinn SA &bull; Cours des Bastions 13, 1205 Genève</span>
                  </div>
                  <p className="text-xs text-slate-400">Siège social & adresse postale &bull; Déplacements sur parcelles à Genève et dans le canton de Vaud</p>
                </div>

                <div className="relative z-10 flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-4 border-t border-slate-800">
                  <span>Secteurs d'intervention : <strong>Genève</strong> (Centre, Cologny, Champel, Rive Gauche, Rive Droite) &bull; <strong>Vaud</strong> (La Côte, Nyon, Rolle, Morges, Lausanne, Riviera)</span>
                </div>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="font-serif text-2xl text-white">Étude de Votre Foncier</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Nos directeurs de projet se déplacent directement sur votre parcelle ou bâti (canton de Genève ou canton de Vaud) pour analyser le potentiel de votre bien.
                  </p>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="p-3 bg-[#090e15] rounded border border-slate-800">
                    <span className="text-slate-400 block">Permanence téléphonique :</span>
                    <span className="text-white font-medium">{COMPANY_INFO.openingHours}</span>
                  </div>
                  <div className="p-3 bg-[#090e15] rounded border border-slate-800">
                    <span className="text-slate-400 block">Modalités de rendez-vous :</span>
                    <span className="text-[#dfba73] font-medium">Déplacement direct sur site (terrain / bâti GE & VD)</span>
                  </div>
                </div>

                <button
                  id="location-cta-contact"
                  onClick={() => onNavigate('contact')}
                  className="w-full py-3 text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-[#dfba73] to-[#c5a059] text-[#0b121c] font-bold rounded-sm hover:brightness-110 transition-all text-center cursor-pointer shadow-lg shadow-[#c5a059]/10"
                >
                  Demander une visite sur site (GE / VD)
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
