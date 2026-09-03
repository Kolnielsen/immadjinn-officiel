import React from 'react';
import { Page } from '../types';
import { COMPANY_INFO, PILLARS_ORCHESTRATION, STATS } from '../data/content';
import { Logo } from '../components/Logo';
import {
  Building2,
  Shield,
  Award,
  Users,
  Compass,
  ArrowRight,
  CheckCircle2,
  MapPin,
  Clock,
  Sparkles,
  Layers
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: Page) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-28 pb-20 px-4 sm:px-8 space-y-20 text-slate-200">
      {/* Header Banner */}
      <section className="max-w-5xl mx-auto text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0e1624] border border-[#c5a059]/30 text-[#dfba73] text-xs uppercase tracking-[0.2em]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Qui Sommes-Nous</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-6xl text-white font-normal uppercase tracking-tight">
          L'Excellence du Développement <br />
          <span className="gold-gradient-text">Immobilier Suisse</span>
        </h1>
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
          ImmaDjinn SA intervient comme chef d'orchestre sur l'ensemble du cycle de développement pour créer une valeur durable et pérenne.
        </p>
      </section>

      {/* Main Narrative Section */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="border-l-2 border-[#c5a059] pl-4">
            <span className="text-xs uppercase tracking-widest text-[#dfba73] font-semibold">Notre Rôle</span>
            <h2 className="font-serif text-2xl sm:text-3xl text-white font-normal">
              Le Chef d'Orchestre de Chaque Projet
            </h2>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed">
            Dans un environnement immobilier suisse hautement réglementé et exigeant, le succès d'une opération dépend d'une coordination sans faille. ImmaDjinn SA est née de cette conviction : un projet immobilier nécessite un véritable chef d'orchestre capable d'harmoniser les intérêts de tous les intervenants.
          </p>

          <p className="text-sm text-slate-300 leading-relaxed">
            Nous faisons le lien stratégique et opérationnel entre :
          </p>

          <div className="space-y-3">
            {[
              { label: 'Propriétaires Fonciers', desc: 'Désireux de valoriser au mieux leur terrain ou bâtiment sans risque.' },
              { label: 'Investisseurs', desc: 'En quête d’opportunités rentables, sécurisées et conformes aux exigences ESG.' },
              { label: 'Cabinets d’Architecture', desc: 'Porteurs de créativité et de rigueur spatiale.' },
              { label: 'Entreprises de Construction', desc: 'Garantissant la qualité d’exécution et le respect des plannings.' }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-3 bg-[#0e1624] rounded border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-[#dfba73] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-semibold text-white">{item.label} : </span>
                  <span className="text-slate-300">{item.desc}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4">
            <button
              id="about-cta-contact"
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#0b121c] bg-gradient-to-r from-[#dfba73] to-[#c5a059] rounded-sm hover:brightness-110 transition-all cursor-pointer font-bold"
            >
              <span>Échanger avec notre direction</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Visual Right Column */}
        <div className="relative">
          <div className="relative rounded-sm overflow-hidden border border-[#c5a059]/40 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
              alt="ImmaDjinn SA Genève architecture"
              referrerPolicy="no-referrer"
              className="w-full h-[460px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090e15] via-transparent to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#0b121c]/95 backdrop-blur-md rounded border border-[#c5a059]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <Logo size="sm" className="h-8 w-auto mb-1.5" />
                <p className="text-xs text-slate-300">Siège social : Cours des Bastions 13 &bull; 1205 Genève</p>
                <p className="text-[11px] text-[#dfba73] mt-0.5">Interventions directes sur parcelles à Genève et dans le canton de Vaud</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: Swiss Values */}
      <section className="bg-[#080d14] py-16 -mx-4 sm:-mx-8 px-4 sm:px-8 border-y border-slate-800">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-[0.25em] text-[#dfba73] font-semibold">Nos Engagements</span>
            <h2 className="font-serif text-3xl text-white font-normal uppercase">L'ADN ImmaDjinn</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#0e1622] p-8 rounded-sm border border-slate-800 space-y-4">
              <div className="w-12 h-12 rounded-sm bg-[#c5a059]/10 flex items-center justify-center text-[#dfba73]">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl text-white">Rigueur & Déontologie Suisse</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Respect scrupuleux des normes de l'aménagement du territoire (LAT), des règlements d'urbanisme cantonaux (Genève & Vaud) et des standards de construction SIA.
              </p>
            </div>

            <div className="bg-[#0e1622] p-8 rounded-sm border border-slate-800 space-y-4">
              <div className="w-12 h-12 rounded-sm bg-[#c5a059]/10 flex items-center justify-center text-[#dfba73]">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl text-white">Vision Architecturale Intemporelle</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Nous concevons des bâtiments à haute valeur ajoutée, alliant pureté des lignes, optimisation des surfaces habitables et durabilité énergétique.
              </p>
            </div>

            <div className="bg-[#0e1622] p-8 rounded-sm border border-slate-800 space-y-4">
              <div className="w-12 h-12 rounded-sm bg-[#c5a059]/10 flex items-center justify-center text-[#dfba73]">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl text-white">Transparence & Rentabilité</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Chaque étape financière fait l'objet d'un reporting clair. Nous sécurisons les coûts de construction et maximisons la valorisation finale de l'actif.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-4xl mx-auto text-center bg-[#0e1624] p-10 sm:p-12 rounded-sm border border-[#c5a059]/30 space-y-6">
        <h2 className="font-serif text-2xl sm:text-3xl text-white">
          Vous avez un terrain ou un projet immobilier à développer ?
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
          Organisons un échange confidentiel ou une visite directe de nos directeurs de projet sur votre terrain ou bien immobilier à Genève ou dans le canton de Vaud.
        </p>
        <button
          id="about-bottom-cta"
          onClick={() => onNavigate('contact')}
          className="px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#0b121c] bg-gradient-to-r from-[#dfba73] to-[#c5a059] rounded-sm hover:brightness-110 transition-all font-bold cursor-pointer"
        >
          Demander une étude de projet
        </button>
      </section>
    </div>
  );
};
