import React from 'react';
import { COMPANY_INFO } from '../data/content';
import { ContactForm } from '../components/ContactForm';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Building2,
  CheckCircle2,
  Sparkles,
  Users,
  Compass,
  FileText
} from 'lucide-react';

interface ContactPageProps {
  initialServiceId?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({ initialServiceId }) => {
  return (
    <div className="pt-28 pb-20 px-4 sm:px-8 space-y-20 text-slate-200">
      {/* Header Banner */}
      <section className="max-w-5xl mx-auto text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0e1624] border border-[#c5a059]/30 text-[#dfba73] text-xs uppercase tracking-[0.2em]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Contact & Interventions &bull; Genève & Vaud</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-6xl text-white font-normal uppercase tracking-tight">
          Échangeons sur Votre <br />
          <span className="gold-gradient-text">Projet Immobilier</span>
        </h1>
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
          Nos directeurs de projets interviennent directement sur site (sur votre parcelle ou bien immobilier à Genève et dans le canton de Vaud) pour analyser votre opportunité.
        </p>
      </section>

      {/* Main Grid: Details + Contact Form */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Direct Coordinates & Trust */}
        <div className="lg:col-span-5 space-y-8">
          {/* Coordinates Card */}
          <div className="bg-[#0e1624] p-8 rounded-sm border border-slate-800 space-y-6">
            <h2 className="font-serif text-2xl text-white uppercase tracking-wide border-l-2 border-[#c5a059] pl-3">
              Coordonnées Officielles
            </h2>

            <div className="space-y-5 text-sm">
              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-[#c5a059]/10 rounded text-[#dfba73] shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-xs uppercase tracking-wider text-slate-400">Siège Social & Domiciliation</p>
                    <span className="text-[10px] px-2 py-0.5 bg-amber-500/10 text-amber-300 border border-amber-500/20 rounded font-medium">
                      Adresse Postale
                    </span>
                  </div>
                  <p className="font-medium text-white text-base">ImmaDjinn SA</p>
                  <p className="text-slate-300">{COMPANY_INFO.address}</p>
                  <p className="text-xs text-slate-400 mt-1 italic">
                    Adresse postale et administrative &bull; Déplacements sur site (Genève & Vaud)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-[#c5a059]/10 rounded text-[#dfba73] shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-400">Téléphone Direct</p>
                  <a
                    id="contact-page-phone-btn"
                    href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
                    className="font-medium text-white hover:text-[#dfba73] text-lg transition-colors block"
                  >
                    {COMPANY_INFO.phone}
                  </a>
                  <p className="text-xs text-slate-400">Ligne dédiée propriétaires fonciers et investisseurs</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-[#c5a059]/10 rounded text-[#dfba73] shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-400">Courriel</p>
                  <a
                    id="contact-page-email-btn"
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="font-medium text-white hover:text-[#dfba73] text-base transition-colors block"
                  >
                    {COMPANY_INFO.email}
                  </a>
                  <p className="text-xs text-slate-400">Traitement sécurisé et confidentiel des dossiers</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-[#c5a059]/10 rounded text-[#dfba73] shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-400">Permanence & Échanges</p>
                  <p className="text-slate-200">{COMPANY_INFO.openingHours}</p>
                  <p className="text-xs text-[#dfba73] mt-0.5">Rendez-vous et visites sur site (parcelle GE / VD)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Confidentiality & Swiss Standard */}
          <div className="bg-[#090e15] p-6 rounded-sm border border-slate-800/80 space-y-3 text-xs text-slate-300">
            <div className="flex items-center gap-2 text-white font-semibold">
              <ShieldCheck className="w-4 h-4 text-[#dfba73]" />
              <span>Engagement de Discrétion & Confidentialité Suisse</span>
            </div>
            <p className="leading-relaxed text-slate-400">
              Toutes les données cadastrales, parcellaires et financières partagées avec ImmaDjinn SA sont traitées selon les normes de discrétion suisses les plus strictes.
            </p>
          </div>
        </div>

        {/* Right Column: High-Conversion Form */}
        <div className="lg:col-span-7">
          <ContactForm initialService={initialServiceId} />
        </div>
      </section>

      {/* Meeting Modalities & Geographic Scope */}
      <section className="max-w-7xl mx-auto space-y-8">
        <div className="border-b border-slate-800 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="font-serif text-2xl text-white uppercase">Modalités de Rencontre & d'Intervention</h2>
            <p className="text-xs text-slate-400">Cantons de Genève et Vaud &bull; Arc Lémanique</p>
          </div>
          <div className="flex items-center gap-2 text-xs text-[#dfba73]">
            <Compass className="w-4 h-4" />
            <span>Déplacements directs sur le lieu de vos parcelles (GE & VD)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: On-Site */}
          <div className="bg-[#0e1624] p-6 rounded-sm border border-[#c5a059]/30 space-y-4 hover:border-[#c5a059] transition-all">
            <div className="w-10 h-10 rounded-sm bg-[#c5a059]/10 flex items-center justify-center text-[#dfba73]">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="space-y-2">
              <h3 className="font-serif text-lg text-white">Rendez-vous sur Site</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Nos experts se déplacent directement sur votre terrain ou bâtiment à Genève et dans le canton de Vaud pour appréhender la topographie, l'environnement et le potentiel constructible.
              </p>
            </div>
            <div className="pt-2 text-[11px] text-[#dfba73]">
              Genève, Cologny, Champel &bull; Nyon, Morges, Lausanne, Riviera
            </div>
          </div>

          {/* Card 2: Dedicated Project Director */}
          <div className="bg-[#0e1624] p-6 rounded-sm border border-slate-800 space-y-4 hover:border-[#c5a059]/60 transition-all">
            <div className="w-10 h-10 rounded-sm bg-[#c5a059]/10 flex items-center justify-center text-[#dfba73]">
              <Users className="w-5 h-5" />
            </div>
            <div className="space-y-2">
              <h3 className="font-serif text-lg text-white">Directeur de Projet Dédié</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Un interlocuteur unique et expérimenté dédié à votre dossier pour orchestrer l'ensemble des études préalables en toute discrétion.
              </p>
            </div>
            <div className="pt-2 text-[11px] text-[#dfba73]">
              Accompagnement sur-mesure &bull; Réactivité
            </div>
          </div>

          {/* Card 3: Postal Seat */}
          <div className="bg-[#0e1624] p-6 rounded-sm border border-slate-800 space-y-4 hover:border-[#c5a059]/60 transition-all">
            <div className="w-10 h-10 rounded-sm bg-[#c5a059]/10 flex items-center justify-center text-[#dfba73]">
              <FileText className="w-5 h-5" />
            </div>
            <div className="space-y-2">
              <h3 className="font-serif text-lg text-white">Siège Administratif & Courrier</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Adresse postale officielle pour la transmission de dossiers cadastraux, actes notariés et correspondances administratives formelles.
              </p>
            </div>
            <div className="pt-2 text-[11px] text-slate-400">
              Cours des Bastions 13 &bull; 1205 Genève (Boîte postale)
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
