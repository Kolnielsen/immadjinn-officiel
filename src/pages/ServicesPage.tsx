import React, { useState, useEffect } from 'react';
import { Page } from '../types';
import { CORE_SERVICES, ADVISORY_SERVICES } from '../data/content';
import {
  Landmark,
  Compass,
  LineChart,
  HardHat,
  KeyRound,
  Calculator,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Layers,
  Phone
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: Page, serviceId?: string) => void;
  selectedServiceId?: string;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, selectedServiceId }) => {
  const [activeTab, setActiveTab] = useState<string>(selectedServiceId || 'valorisation-fonciere');

  useEffect(() => {
    if (selectedServiceId) {
      setActiveTab(selectedServiceId);
      const el = document.getElementById(selectedServiceId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [selectedServiceId]);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Landmark': return <Landmark className="w-6 h-6 text-[#dfba73]" />;
      case 'Compass': return <Compass className="w-6 h-6 text-[#dfba73]" />;
      case 'LineChart': return <LineChart className="w-6 h-6 text-[#dfba73]" />;
      case 'HardHat': return <HardHat className="w-6 h-6 text-[#dfba73]" />;
      case 'KeyRound': return <KeyRound className="w-6 h-6 text-[#dfba73]" />;
      case 'Calculator': return <Calculator className="w-6 h-6 text-[#dfba73]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-[#dfba73]" />;
      default: return <Layers className="w-6 h-6 text-[#dfba73]" />;
    }
  };

  const allServices = [...CORE_SERVICES, ...ADVISORY_SERVICES];

  return (
    <div className="pt-28 pb-20 px-4 sm:px-8 space-y-20 text-slate-200">
      {/* Header */}
      <section className="max-w-5xl mx-auto text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0e1624] border border-[#c5a059]/30 text-[#dfba73] text-xs uppercase tracking-[0.2em]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Nos Expertises de Développement</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-6xl text-white font-normal uppercase tracking-tight">
          Services de Développement <br />
          <span className="gold-gradient-text">Immobilier Intégral</span>
        </h1>
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
          Une intervention experte et sur-mesure sur chaque maillon de la chaîne de valeur sur les cantons de Genève et Vaud.
        </p>
      </section>

      {/* Quick Service Anchor Navigation */}
      <section className="max-w-7xl mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-2 bg-[#090e16] p-2 rounded border border-slate-800">
          {allServices.map((s) => (
            <button
              key={s.id}
              onClick={() => {
                setActiveTab(s.id);
                const el = document.getElementById(s.id);
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className={`px-3.5 py-2 text-xs font-medium rounded transition-all flex items-center gap-1.5 ${
                activeTab === s.id
                  ? 'bg-[#c5a059] text-[#0b121c] font-bold shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <span>{s.number}.</span>
              <span className="hidden sm:inline">{s.title.split('&')[0]}</span>
              <span className="sm:hidden">{s.number}</span>
            </button>
          ))}
        </div>
      </section>

      {/* DETAILED SERVICES LIST */}
      <section className="max-w-7xl mx-auto space-y-16">
        {/* Core 5 Services */}
        <div className="space-y-16">
          <div className="border-b border-slate-800 pb-4">
            <h2 className="font-serif text-2xl uppercase tracking-wider text-white">
              Pôles de Développement Principal
            </h2>
            <p className="text-xs text-slate-400">
              Du foncier à la remise des clés
            </p>
          </div>

          {CORE_SERVICES.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-32 bg-[#0e1624] rounded-sm border border-slate-800 hover:border-[#c5a059]/40 transition-all overflow-hidden p-6 sm:p-10"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                  {/* Image Column */}
                  <div className={`lg:col-span-5 relative h-72 lg:h-96 rounded overflow-hidden border border-slate-800 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <img
                      src={service.image}
                      alt={service.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-[#0b121c]/90 text-[#dfba73] border border-[#c5a059]/40 font-serif text-sm px-3 py-1 rounded">
                      Pôle {service.number}
                    </div>
                  </div>

                  {/* Text Column */}
                  <div className={`lg:col-span-7 space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-[#c5a059]/15 rounded text-[#dfba73]">
                        {getIcon(service.iconName)}
                      </div>
                      <div>
                        <span className="text-[11px] uppercase tracking-widest text-[#dfba73] font-semibold">
                          ImmaDjinn SA &bull; Pôle {service.number}
                        </span>
                        <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal">
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
                      {service.shortDesc}
                    </p>

                    <p className="text-xs text-slate-400 leading-relaxed">
                      {service.fullDesc}
                    </p>

                    {/* Key benefits list */}
                    <div className="space-y-2 pt-2">
                      <p className="text-xs uppercase tracking-wider text-slate-300 font-semibold">
                        Livrables & Périmètre d'intervention :
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.benefits.map((b, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-slate-300 bg-[#090e15] p-2.5 rounded border border-slate-800/80">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#dfba73] shrink-0 mt-0.5" />
                            <span>{b}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2">
                      <button
                        id={`service-cta-${service.id}`}
                        onClick={() => onNavigate('contact', service.id)}
                        className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider bg-slate-800 hover:bg-[#c5a059] text-white hover:text-[#0b121c] rounded-sm transition-all border border-slate-700 hover:border-[#c5a059] cursor-pointer"
                      >
                        <span>Initier ce service pour votre projet</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 2 Complimentary Advisory Services */}
        <div className="space-y-8 pt-8">
          <div className="border-b border-slate-800 pb-4">
            <h2 className="font-serif text-2xl uppercase tracking-wider text-white">
              Études & Estimations Stratégiques
            </h2>
            <p className="text-xs text-slate-400">
              Services d'analyse préliminaire pour propriétaires et acquéreurs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ADVISORY_SERVICES.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-32 bg-[#0e1624] rounded-sm border-2 border-[#c5a059]/40 p-8 space-y-6 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-[#c5a059]/15 rounded text-[#dfba73]">
                      {getIcon(service.iconName)}
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-[#dfba73] font-bold">
                        Service Dédié
                      </span>
                      <h3 className="font-serif text-2xl text-white">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed font-medium">
                    {service.shortDesc}
                  </p>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {service.fullDesc}
                  </p>

                  <div className="space-y-2 pt-2">
                    {service.benefits.map((b, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#dfba73]" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    id={`advisory-cta-${service.id}`}
                    onClick={() => onNavigate('contact', service.id)}
                    className="w-full py-3 text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-[#dfba73] to-[#c5a059] text-[#0b121c] rounded-sm hover:brightness-110 transition-all font-bold"
                  >
                    Demander une étude confidentielle
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
