import React, { useState } from 'react';
import { Mail, Clock, Send, X, CheckCircle2, Lock, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface FloatingContactDrawerProps {
  onNavigateToContact: () => void;
}

export const FloatingContactDrawer: React.FC<FloatingContactDrawerProps> = ({
  onNavigateToContact
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    project: 'Projet immobilier général',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.contact.trim()) return;

    setStatus('submitting');
    try {
      await fetch('https://formsubmit.co/ajax/hello@immadjinn.ch', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          _subject: `📩 MESSAGE DISCRET : ${formData.name}`,
          Nom: formData.name,
          Coordonnees: formData.contact,
          Sujet: formData.project,
          Message: formData.message || 'Demande de rappel rapide',
          _template: 'table'
        })
      });
      setStatus('success');
      setTimeout(() => {
        setStatus('idle');
        setIsOpen(false);
        setFormData({ name: '', contact: '', project: 'Projet immobilier général', message: '' });
      }, 3000);
    } catch {
      window.location.href = `mailto:hello@immadjinn.ch?subject=Contact%20ImmaDjinn&body=Nom:%20${encodeURIComponent(formData.name)}%0D%0ACoordonnees:%20${encodeURIComponent(formData.contact)}`;
      setStatus('success');
    }
  };

  return (
    <>
      {/* Floating Action Button with text badge */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0c1420]/95 border border-[#c5a059]/40 text-slate-200 text-xs shadow-xl hover:border-[#c5a059] transition-all cursor-pointer backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-[11px] font-medium text-[#dfba73]">Demande discrète &bull; Réponse sous 24h</span>
          </button>
        )}

        <button
          id="floating-contact-trigger-btn"
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-14 h-14 rounded-full bg-gradient-to-br from-[#dfba73] via-[#c5a059] to-[#9a7b38] text-[#0b121c] flex items-center justify-center shadow-2xl shadow-[#c5a059]/40 hover:scale-105 active:scale-95 transition-all duration-300 group cursor-pointer"
          title={isOpen ? 'Fermer' : 'Écrire à la direction d\'ImmaDjinn'}
          aria-label="Contacter la direction"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-[#0b121c]" />
          ) : (
            <>
              <Mail className="w-6 h-6 text-[#0b121c] transition-transform group-hover:scale-110" />
              <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-500 border-2 border-[#0f1722] rounded-full" />
            </>
          )}
        </button>
      </div>

      {/* Floating Popup Card */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-96 bg-[#0c1320] border border-[#c5a059]/50 rounded-sm shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="bg-[#080d14] border-b border-[#c5a059]/30 p-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded bg-[#c5a059]/20 border border-[#c5a059]/40 flex items-center justify-center text-[#dfba73]">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-serif text-sm text-white font-normal">Contacter la Direction</h4>
                <p className="text-[10px] text-slate-400 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[#dfba73]" />
                  <span>Réponse sous 24h &bull; 100% Confidentiel</span>
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white p-1 rounded transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-[#0d1624]">
            {status === 'success' ? (
              <div className="py-6 text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                <h5 className="font-serif text-base text-white">Message bien envoyé</h5>
                <p className="text-xs text-slate-300">
                  Notre équipe prendra contact avec vous dans les plus brefs délais avec la discrétion requise.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-slate-400 mb-1">
                    Votre Nom & Prénom *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ex: Jean Dupont"
                    className="w-full px-3 py-2 bg-[#090e16] border border-slate-700 rounded text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-[#c5a059]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-slate-400 mb-1">
                    Votre E-mail ou Téléphone *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.contact}
                    onChange={e => setFormData({ ...formData, contact: e.target.value })}
                    placeholder="Ex: jean.dupont@email.ch ou 079..."
                    className="w-full px-3 py-2 bg-[#090e16] border border-slate-700 rounded text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-[#c5a059]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-slate-400 mb-1">
                    Votre Sujet
                  </label>
                  <select
                    value={formData.project}
                    onChange={e => setFormData({ ...formData, project: e.target.value })}
                    className="w-full px-2.5 py-1.5 bg-[#090e16] border border-slate-700 rounded text-xs text-white focus:outline-none focus:border-[#c5a059]"
                  >
                    <option value="Estimation / Vente d'un bien">Estimation / Vente d'un bien</option>
                    <option value="Terrain ou Droit à bâtir">Terrain / Parcelle à bâtir</option>
                    <option value="Requalification d'immeuble">Requalification d'immeuble</option>
                    <option value="Conseil en investissement">Conseil en investissement</option>
                    <option value="Autre demande">Autre demande</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-slate-400 mb-1">
                    Message rapide (optionnel)
                  </label>
                  <textarea
                    rows={2}
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Commune du bien, caractéristiques ou question..."
                    className="w-full px-3 py-2 bg-[#090e16] border border-slate-700 rounded text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-[#c5a059] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-2.5 px-4 text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-[#dfba73] to-[#c5a059] text-[#0b121c] font-bold rounded hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-lg shadow-[#c5a059]/20"
                >
                  <Send className="w-3 h-3" />
                  <span>{status === 'submitting' ? 'Envoi en cours...' : 'Envoyer discrètement'}</span>
                </button>

                <div className="flex items-center justify-between pt-1 text-[10px] text-slate-400">
                  <span className="flex items-center gap-1">
                    <Lock className="w-3 h-3 text-[#dfba73]" />
                    <span>Données chiffrées</span>
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      setIsOpen(false);
                      onNavigateToContact();
                    }}
                    className="text-[#dfba73] hover:underline"
                  >
                    Formulaire complet &rarr;
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
};
