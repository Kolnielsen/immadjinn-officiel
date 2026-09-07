import React, { useEffect, useState } from 'react';
import { Calculator, ShieldCheck, CheckCircle2, RotateCw, Search, ArrowRight, ExternalLink } from 'lucide-react';

interface PopetyValuationWidgetProps {
  token?: string;
  lang?: 'fr' | 'en' | 'de' | 'it';
  height?: string;
  className?: string;
}

export const PopetyValuationWidget: React.FC<PopetyValuationWidgetProps> = ({
  token = 'VFqX_ryLrk6xhgJoeqVHDmm7anmxNzyI',
  lang = 'fr',
  height = '860px',
  className = '',
}) => {
  const [iframeSrc, setIframeSrc] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Configuration optimisée pour un contraste élevé et une lisibilité maximale :
    // - main_color: 9a7b38 (Or foncé soutenu pour que le bouton 'Continuer' et les boutons actifs soient bien foncés avec texte blanc lisible)
    // - text_color: 000000 (Noir absolu #000000 : les questions, options, chiffres et labels ressortent avec un contraste net WCAG AAA)
    // - secondary_color: f1f5f9 (Fond clair très lisible pour les options non sélectionnées)
    // - border_radius: 6 (Coins nets et précis)
    const baseUrl = 'https://widget.popety.io/property-valuation-form/';
    const params = new URLSearchParams({
      token: token,
      lang: lang,
      main_color: '9a7b38', // Or foncé à fort contraste pour les boutons & sélections
      secondary_color: 'f1f5f9', // Fond clair et contrasté pour les cases
      text_color: '000000', // Noir intense pour les questions et textes du questionnaire
      border_radius: '6',
      font_family: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      privacy_policy_url: 'https://www.immadjinn.ch',
      display_value: 'true',
      display_agent: 'true'
    });

    setIframeSrc(`${baseUrl}?${params.toString()}`);
  }, [token, lang]);

  return (
    <div className={`w-full bg-[#0c131f] border-2 border-[#c5a059]/70 rounded-md shadow-2xl overflow-hidden ${className}`}>
      {/* Widget Header Bar */}
      <div className="bg-[#080d14] border-b border-[#c5a059]/30 px-5 sm:px-8 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3.5">
          <div className="p-2.5 bg-[#c5a059]/20 border border-[#c5a059]/40 rounded text-[#dfba73]">
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] uppercase tracking-widest text-[#dfba73] font-bold">
                Moteur Officiel Popety.io
              </span>
              <span className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 font-medium">
                <CheckCircle2 className="w-2.5 h-2.5" />
                Certifié Cadastre Suisse
              </span>
            </div>
            <h3 className="font-serif text-lg sm:text-xl text-white font-normal">
              Simulateur d'Estimation Immobilière Directe
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-3 text-xs text-slate-300">
          <div className="flex items-center gap-1.5 bg-[#111a28] px-3 py-1.5 rounded border border-slate-700">
            <ShieldCheck className="w-4 h-4 text-[#dfba73]" />
            <span>Genève & Canton de Vaud &bull; Gratuit & Confidentiel</span>
          </div>
        </div>
      </div>

      {/* Bandeau d'aide & instructions de contraste */}
      <div className="bg-[#142032] border-b border-[#c5a059]/30 px-5 sm:px-8 py-3 text-xs text-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <Search className="w-4 h-4 text-[#dfba73] shrink-0" />
          <p className="leading-snug text-xs">
            <strong className="text-white">Étape 1 :</strong> Saisissez l'adresse de votre bien (ex: <em>Rue du Rhône 1, Genève</em>), 
            puis <span className="text-[#dfba73] font-semibold">sélectionnez l'adresse dans la liste</span> pour débloquer le bouton <strong>Continuer</strong>.
          </p>
        </div>
        {iframeSrc && (
          <a
            href={iframeSrc}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#dfba73] hover:text-white transition-colors shrink-0 bg-[#0c131f] px-2.5 py-1 rounded border border-[#c5a059]/40"
            title="Ouvrir le simulateur en plein écran si besoin"
          >
            <span>Plein écran</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        )}
      </div>

      {/* Zone du formulaire avec fond blanc net et ombre portée pour découper les questions */}
      <div className="relative w-full bg-white" style={{ minHeight: height }}>
        {isLoading && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-white text-slate-700 space-y-3">
            <RotateCw className="w-8 h-8 text-[#9a7b38] animate-spin" />
            <p className="text-xs uppercase tracking-wider text-slate-600 font-semibold">
              Initialisation des données de valorisation...
            </p>
          </div>
        )}

        {iframeSrc && (
          <iframe
            id="popety-valuation-iframe"
            title="Estimation Immobilière ImmaDjinn - Popety.io"
            src={iframeSrc}
            allow="geolocation"
            loading="lazy"
            onLoad={() => setIsLoading(false)}
            className="w-full border-0 block"
            style={{
              height: height,
              minHeight: '820px',
              backgroundColor: '#ffffff',
            }}
          />
        )}
      </div>

      {/* Footer informatif */}
      <div className="bg-[#080d14] border-t border-slate-800 px-5 sm:px-8 py-3.5 text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-[11px]">
          Modèle hédoniste basé sur les transactions notariées récentes des cantons de Genève et Vaud.
        </p>
        <p className="text-[11px] text-slate-400">
          Intégration certifiée Popety.io pour <strong>ImmaDjinn SA</strong>
        </p>
      </div>
    </div>
  );
};
