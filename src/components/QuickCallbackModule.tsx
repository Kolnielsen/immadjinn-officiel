import React, { useState } from 'react';
import { Clock, ShieldCheck, CheckCircle2, ArrowRight, Send, UserCheck, Lock } from 'lucide-react';

interface QuickCallbackModuleProps {
  onSuccessNavigate?: () => void;
  className?: string;
}

export const QuickCallbackModule: React.FC<QuickCallbackModuleProps> = ({
  onSuccessNavigate,
  className = ''
}) => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '', // Phone or Email of the client
    projectType: 'Estimation ou valorisation de bien',
    location: '',
    preferredTime: 'Dès que possible'
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.contact.trim()) {
      setErrorMsg('Veuillez renseigner votre nom et un moyen de contact (téléphone ou email).');
      setStatus('error');
      return;
    }

    setStatus('submitting');
    setErrorMsg('');

    try {
      const response = await fetch('https://formsubmit.co/ajax/hello@immadjinn.ch', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `⚡ DEMANDE DE RAPPEL EXPRESS : ${formData.name} (${formData.projectType})`,
          Nom: formData.name,
          Contact_Client: formData.contact,
          Type_de_Projet: formData.projectType,
          Commune_Localisation: formData.location || 'Non précisée',
          Créneau_souhaité: formData.preferredTime,
          _template: 'table'
        })
      });

      if (response.ok) {
        setStatus('success');
        if (onSuccessNavigate) {
          setTimeout(onSuccessNavigate, 2000);
        }
      } else {
        throw new Error('Erreur lors de l’envoi');
      }
    } catch {
      // Graceful fallback to mailto
      const mailtoLink = `mailto:hello@immadjinn.ch?subject=${encodeURIComponent('Demande de rappel rapide - ' + formData.name)}&body=${encodeURIComponent(
        `Bonjour,\n\nJe souhaite être recontacté pour mon projet.\n\nNom: ${formData.name}\nContact: ${formData.contact}\nType de projet: ${formData.projectType}\nLocalisation: ${formData.location}\nCréneau souhaité: ${formData.preferredTime}\n\nCordialement,`
      )}`;
      window.location.href = mailtoLink;
      setStatus('success');
    }
  };

  return (
    <div className={`relative bg-gradient-to-br from-[#0c1421] via-[#0f1725] to-[#0a1019] border border-[#c5a059]/40 rounded-sm shadow-2xl overflow-hidden p-6 sm:p-10 ${className}`}>
      {/* Decorative top border accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#c5a059] to-transparent" />

      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Reassurance & Headline */}
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#c5a059]/15 border border-[#c5a059]/30 text-[#dfba73] text-[10px] uppercase tracking-widest font-bold">
              <Clock className="w-3.5 h-3.5" />
              <span>Réponse sous 24h ouvrées</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal leading-tight">
              Demandez un <span className="gold-gradient-text">rappel confidentiel</span> par notre direction
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
              Propriétaire, investisseur ou héritier d'une parcelle sur Genève ou Vaud : échangez directement avec notre équipe sur le potentiel de votre bien.
            </p>

            <div className="space-y-2 pt-2 border-t border-slate-800">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <Lock className="w-4 h-4 text-[#dfba73] shrink-0" />
                <span>100% Confidentiel & sans engagement</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <ShieldCheck className="w-4 h-4 text-[#dfba73] shrink-0" />
                <span>Déplacement sur site possible (Genève & Vaud)</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <UserCheck className="w-4 h-4 text-[#dfba73] shrink-0" />
                <span>Interlocuteur unique au niveau de la direction</span>
              </div>
            </div>
          </div>

          {/* Right Column: Express 3-Field Form */}
          <div className="lg:col-span-7 bg-[#090f18] p-5 sm:p-7 rounded border border-slate-800 shadow-xl">
            {status === 'success' ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/30">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-xl text-white">Demande bien reçue</h4>
                <p className="text-xs text-slate-300 max-w-sm mx-auto">
                  Merci. Notre direction immobilière étudie votre demande et vous recontactera avec la plus grande discrétion.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-slate-300 mb-1.5 font-medium">
                      Votre Nom & Prénom *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ex: Marc de Candolle"
                      className="w-full px-3 py-2.5 bg-[#0e1624] border border-slate-700 rounded text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#c5a059]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-slate-300 mb-1.5 font-medium">
                      Votre Téléphone ou Email *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.contact}
                      onChange={e => setFormData({ ...formData, contact: e.target.value })}
                      placeholder="Ex: 079 000 00 00 ou email"
                      className="w-full px-3 py-2.5 bg-[#0e1624] border border-slate-700 rounded text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#c5a059]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-slate-300 mb-1.5 font-medium">
                      Votre Projet
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={e => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-3 py-2.5 bg-[#0e1624] border border-slate-700 rounded text-xs text-white focus:outline-none focus:border-[#c5a059]"
                    >
                      <option value="Estimation ou valorisation de bien">Estimation / Valorisation d'un bien</option>
                      <option value="Terrain vierge ou parcelle à bâtir">Terrain / Droit à bâtir (Genève/Vaud)</option>
                      <option value="Vente de villa ou propriété de prestige">Vente d'une propriété ou villa</option>
                      <option value="Requalification d'immeuble ou bâti">Requalification d'immeuble ou conversion</option>
                      <option value="Recherche de promoteur / Partenariat">Recherche de promoteur / Partenariat</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-slate-300 mb-1.5 font-medium">
                      Commune / Canton
                    </label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={e => setFormData({ ...formData, location: e.target.value })}
                      placeholder="Ex: Cologny, Nyon, Lausanne..."
                      className="w-full px-3 py-2.5 bg-[#0e1624] border border-slate-700 rounded text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#c5a059]"
                    />
                  </div>
                </div>

                {errorMsg && (
                  <p className="text-xs text-rose-400">{errorMsg}</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-3 px-5 text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-[#dfba73] to-[#c5a059] text-[#0b121c] font-bold rounded-sm hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#c5a059]/20"
                >
                  {status === 'submitting' ? (
                    <span>Envoi en cours...</span>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Être rappelé discrètement</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>

                <p className="text-[10px] text-center text-slate-400 pt-1">
                  Vos coordonnées restent strictement confidentielles et ne sont jamais transmises à des tiers.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
