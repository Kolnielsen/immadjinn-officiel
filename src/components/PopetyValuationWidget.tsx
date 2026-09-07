import React, { useEffect, useRef, useState } from 'react';
import { Calculator, ShieldCheck, CheckCircle2, RotateCw, Sparkles, MapPin, Search } from 'lucide-react';

interface PopetyValuationWidgetProps {
  token?: string;
  lang?: 'fr' | 'en' | 'de' | 'it';
  height?: string;
  className?: string;
}

export const PopetyValuationWidget: React.FC<PopetyValuationWidgetProps> = ({
  token = 'VFqX_ryLrk6xhgJoeqVHDmm7anmxNzyI',
  lang = 'fr',
  height = '840px',
  className = '',
}) => {
  const [iframeSrc, setIframeSrc] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Configuré avec les paramètres officiels Popety.io pour un contraste maximal et une ergonomie optimale
    // primary_color (main_color) = Or ImmaDjinn c5a059
    // secondary_color = 1e293b (Slate clair/contraste)
    // text_color = 0f172a (Texte sombre lisible à 100% sur le fond blanc des formulaires Popety)
    const baseUrl = 'https://widget.popety.io/property-valuation-form/';
    const params = new URLSearchParams({
      token: token,
      lang: lang,
      main_color: 'c5a059',
      secondary_color: 'e2e8f0',
      text_color: '0f172a', // Texte bien noir et lisible dans les champs et cartes de sélection
      border_radius: '8',
      font_family: 'Plus Jakarta Sans, sans-serif',
      privacy_policy_url: 'https://www.immadjinn.ch',
      display_value: 'true',
      display_agent: 'true'
    });

    setIframeSrc(`${baseUrl}?${params.toString()}`);
  }, [token, lang]);

  return (
    <div className={`w-full bg-[#0e1624] border-2 border-[#c5a059]/60 rounded-sm shadow-2xl overflow-hidden ${className}`}>
      {/* Widget Header Bar */}
      <div className="bg-[#0b121c] border-b border-[#c5a059]/30 px-5 sm:px-8 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3.5">
          <div className="p-2.5 bg-[#c5a059]/20 border border-[#c5a059]/30 rounded text-[#dfba73]">
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] uppercase tracking-widest text-[#dfba73] font-bold">
                Moteur Popety.io Officiel
              </span>
              <span className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 font-medium">
                <CheckCircle2 className="w-2.5 h-2.5" />
                Certifié Suisse
              </span>
            </div>
            <h3 className="font-serif text-lg sm:text-xl text-white font-normal">
              Simulateur d'Estimation Immobilière Directe
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-3 text-xs text-slate-400">
          <div className="flex items-center gap-1.5 text-slate-300 bg-[#0e1624] px-3 py-1.5 rounded border border-slate-800">
            <ShieldCheck className="w-4 h-4 text-[#dfba73]" />
            <span>Genève & Canton de Vaud &bull; Gratuit</span>
          </div>
        </div>
      </div>

      {/* Guide utilisateur express pour ne pas bloquer */}
      <div className="bg-[#131c2a] border-b border-slate-800 px-5 sm:px-8 py-2.5 text-xs text-slate-300 flex items-center gap-2.5">
        <Search className="w-4 h-4 text-[#dfba73] shrink-0" />
        <p className="leading-snug">
          <strong className="text-white">Étape 1 :</strong> Tapez l'adresse de votre bien (ex: <em>Rue du Rhône 1, Genève</em>), 
          <span className="text-[#dfba73] font-semibold"> cliquez sur l'adresse suggérée dans la liste</span>, puis cliquez sur <strong>Continuer</strong>.
        </p>
      </div>

      {/* White Backdrop Container so Popety's native form has perfect 100% WCAG AAA contrast */}
      <div className="relative w-full bg-white" style={{ minHeight: height }}>
        {isLoading && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-white text-slate-700 space-y-3">
            <RotateCw className="w-8 h-8 text-[#c5a059] animate-spin" />
            <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
              Chargement du simulateur d'évaluation Popety.io...
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
              minHeight: '800px',
              backgroundColor: '#ffffff',
            }}
          />
        )}
      </div>

      {/* Footer reassurance */}
      <div className="bg-[#0b121c] border-t border-slate-800 px-5 sm:px-8 py-3.5 text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-[11px]">
          Modèle hédoniste basé sur les données cadastrales officielles et les transactions réelles (GE & VD).
        </p>
        <p className="text-[11px] text-slate-400">
          Propulsé par Popety.io pour <strong>ImmaDjinn SA</strong>
        </p>
      </div>
    </div>
  );
};
