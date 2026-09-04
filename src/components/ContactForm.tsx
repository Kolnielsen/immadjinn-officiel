import React, { useState } from 'react';
import { ContactFormData } from '../types';
import { COMPANY_INFO } from '../data/content';
import { Send, CheckCircle2, ShieldCheck, Phone, Mail, Clock, AlertCircle } from 'lucide-react';

interface ContactFormProps {
  initialService?: string;
  className?: string;
  onSuccess?: () => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  initialService = '',
  className = '',
  onSuccess
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    projectType: initialService || 'Valorisation Foncière & Requalification',
    location: '',
    estimatedBudget: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const projectOptions = [
    'Valorisation Foncière & Requalification',
    'Conception & Partenariats d’Architecture',
    'Ingénierie Financière & Montage',
    'Pilotage de la Construction',
    'Mise en Marché & Commercialisation',
    'Estimation de mon bien immobilier',
    'Étude pour mon prêt immobilier',
    'Autre projet de développement'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      setStatus('error');
      setErrorMessage('Veuillez remplir tous les champs obligatoires (Nom, Email, Téléphone).');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('https://formsubmit.co/ajax/hello@immadjinn.ch', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `[ImmaDjinn.ch] Nouveau dossier : ${formData.projectType} - ${formData.name}`,
          _template: 'table',
          _captcha: 'false',
          Nom: formData.name,
          Email: formData.email,
          Telephone: formData.phone,
          Type_de_projet: formData.projectType,
          Localisation: formData.location || 'Non précisée',
          Message: formData.message || 'Aucun message supplémentaire'
        })
      });

      const result = await response.json();
      if (response.ok && (result.success === 'true' || result.success === true || result.message)) {
        setStatus('success');
        if (onSuccess) onSuccess();
      } else {
        throw new Error(result.message || "Erreur lors de l'envoi");
      }
    } catch (err: any) {
      console.error('Erreur transmission formulaire:', err);
      // Fallback: Si un bloqueur bloque le service ou en cas d'erreur réseau,
      // on propose l'envoi direct par mailto
      setStatus('error');
      setErrorMessage(
        "Une erreur est survenue lors de l'envoi direct. Vous pouvez aussi nous contacter directement à hello@immadjinn.ch ou au +41 22 512 01 20."
      );
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      projectType: 'Valorisation Foncière & Requalification',
      location: '',
      estimatedBudget: '',
      message: ''
    });
    setStatus('idle');
  };

  return (
    <div className={`relative bg-[#0d1520] border-2 border-[#c5a059] shadow-2xl p-6 sm:p-10 rounded-sm text-slate-100 ${className}`}>
      {/* Decorative Gold Header Bar */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#dfba73] via-[#c5a059] to-[#9e7a33]" />

      <div className="text-center mb-8">
        <span className="text-[11px] uppercase tracking-[0.25em] text-[#dfba73] font-semibold block mb-2">
          Contactez nos experts &bull; Genève & Vaud
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal uppercase tracking-wider">
          Étude de Projet & Prise de Contact
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 mt-2 max-w-md mx-auto">
          Remplissez le formulaire ci-dessous. Un directeur de projet ImmaDjinn SA vous recontacte sous 24h ouvrées.
        </p>
      </div>

      {status === 'success' ? (
        <div className="py-10 text-center space-y-6 animate-fadeIn">
          <div className="w-16 h-16 bg-[#c5a059]/20 text-[#dfba73] rounded-full flex items-center justify-center mx-auto border border-[#c5a059]/40">
            <CheckCircle2 className="w-9 h-9" />
          </div>
          <div className="space-y-2">
            <h4 className="font-serif text-2xl text-white">Demande transmise avec succès</h4>
            <p className="text-sm text-slate-300 max-w-md mx-auto">
              Merci <span className="text-[#dfba73] font-medium">{formData.name}</span>. Votre dossier a été transmis à notre pôle de développement pour analyse.
            </p>
          </div>

          <div className="bg-[#121c2b] p-4 rounded border border-slate-700 text-left text-xs space-y-2 max-w-md mx-auto">
            <div className="flex justify-between text-slate-300">
              <span className="text-slate-400">Objet :</span>
              <span className="font-medium text-[#dfba73]">{formData.projectType}</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span className="text-slate-400">Rappel sur :</span>
              <span className="font-medium text-white">{formData.phone}</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span className="text-slate-400">Délai moyen de réponse :</span>
              <span className="text-emerald-400 font-medium">Sous 24h ouvrées</span>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
            <button
              id="reset-form-btn"
              onClick={handleReset}
              className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider bg-slate-800 hover:bg-slate-700 text-white rounded-sm transition-colors"
            >
              Envoyer un autre message
            </button>
            <a
              id="direct-call-success-btn"
              href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider bg-[#c5a059] hover:bg-[#dfba73] text-[#0b121c] rounded-sm transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Appeler maintenant</span>
            </a>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {status === 'error' && (
            <div className="p-3 bg-red-950/60 border border-red-800/80 rounded text-red-200 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Nom */}
            <div>
              <label htmlFor="form-name" className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-1">
                Nom complet <span className="text-[#dfba73]">*</span>
              </label>
              <input
                id="form-name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Ex. Jean Dupont"
                className="w-full bg-[#131d2b] border border-slate-700 focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059] rounded-sm px-3.5 py-2.5 text-sm text-white placeholder-slate-500 transition-colors outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="form-email" className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-1">
                Adresse Email <span className="text-[#dfba73]">*</span>
              </label>
              <input
                id="form-email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="nom@domaine.ch"
                className="w-full bg-[#131d2b] border border-slate-700 focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059] rounded-sm px-3.5 py-2.5 text-sm text-white placeholder-slate-500 transition-colors outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Téléphone */}
            <div>
              <label htmlFor="form-phone" className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-1">
                Téléphone de contact <span className="text-[#dfba73]">*</span>
              </label>
              <input
                id="form-phone"
                name="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="+41 79 000 00 00"
                className="w-full bg-[#131d2b] border border-slate-700 focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059] rounded-sm px-3.5 py-2.5 text-sm text-white placeholder-slate-500 transition-colors outline-none"
              />
            </div>

            {/* Type de projet / Objet */}
            <div>
              <label htmlFor="form-projectType" className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-1">
                Type de Projet / Besoin
              </label>
              <select
                id="form-projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="w-full bg-[#131d2b] border border-slate-700 focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059] rounded-sm px-3.5 py-2.5 text-sm text-white transition-colors outline-none"
              >
                {projectOptions.map((opt) => (
                  <option key={opt} value={opt} className="bg-[#131d2b] text-white">
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Localisation / Commune */}
          <div>
            <label htmlFor="form-location" className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-1">
              Localisation du bien / de la parcelle (Optionnel)
            </label>
            <input
              id="form-location"
              name="location"
              type="text"
              value={formData.location}
              onChange={handleChange}
              placeholder="Ex. Genève, Cologny, Nyon, Lausanne, Morges, Champel..."
              className="w-full bg-[#131d2b] border border-slate-700 focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059] rounded-sm px-3.5 py-2.5 text-sm text-white placeholder-slate-500 transition-colors outline-none"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="form-message" className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-1">
              Détails ou description de votre projet
            </label>
            <textarea
              id="form-message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Précisez les caractéristiques du terrain ou du bâti, vos objectifs, ou toute information utile pour l'analyse préliminaire..."
              className="w-full bg-[#131d2b] border border-slate-700 focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059] rounded-sm px-3.5 py-2.5 text-sm text-white placeholder-slate-500 transition-colors outline-none resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              id="form-submit-button"
              type="submit"
              disabled={status === 'submitting'}
              className="w-full py-3.5 px-6 font-serif text-base uppercase tracking-widest text-[#0b121c] font-bold bg-gradient-to-r from-[#dfba73] via-[#c5a059] to-[#b38d45] hover:brightness-110 active:scale-[0.99] transition-all rounded-sm flex items-center justify-center gap-3 shadow-lg shadow-[#c5a059]/20 cursor-pointer disabled:opacity-75"
            >
              {status === 'submitting' ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-[#0b121c] border-t-transparent rounded-full animate-spin" />
                  Traitement de votre dossier...
                </span>
              ) : (
                <>
                  <span>Soumettre ma demande d'étude</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </div>

          {/* Trust Guarantees */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-2 border-t border-slate-800/80">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#c5a059]" />
              Confidentialité suisse absolue
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#c5a059]" />
              Réponse assurée sous 24h
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#c5a059]" />
              Sans aucun engagement
            </span>
          </div>
        </form>
      )}
    </div>
  );
};
