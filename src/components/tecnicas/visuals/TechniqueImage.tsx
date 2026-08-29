/**
 * ═══════════════════════════════════════════════════════════════════════════
 *  TechniqueImage — imagem da técnica com fallback vetorial
 * ═══════════════════════════════════════════════════════════════════════════
 *
 * Regra de renderização:
 *   1. `src` informado  → <img /> com a foto/ilustração externa
 *   2. `src` ausente    → ilustração SVG gerada a partir da pose da técnica
 *   3. `src` com erro   → cai para a ilustração SVG (fallback de resiliência)
 *
 * O passo 3 é o que evita a "imagem quebrada" clássica: se a URL externa sair
 * do ar, o usuário continua vendo um diagrama correto em vez de um ícone cinza.
 */

import { useEffect, useState } from "react";
import { PenTool } from "lucide-react";
import { KarateFigure, type Tone } from "./KarateFigure";
import { resolvePose } from "./poses";

export interface TechniqueImageProps {
  /** nome da técnica — usado para resolver a pose (ex.: "Zenkutsu-Dachi") */
  nome: string;
  tipo?: string;
  cat?: string;
  /** URL externa opcional; quando ausente, renderiza o SVG nativo */
  src?: string | null;
  alt?: string;
  tone?: Tone;
  /** cotas, setas, distribuição de peso e trajetória */
  showGuides?: boolean;
  /** legenda com o ponto técnico da pose */
  showTip?: boolean;
  /** selo "ilustração vetorial" no canto */
  showBadge?: boolean;
  /** enquadramento fechado — para miniaturas em cards */
  compact?: boolean;
  className?: string;
}

export function TechniqueImage({
  nome,
  tipo,
  cat,
  src,
  alt,
  tone = "light",
  showGuides = true,
  showTip = false,
  showBadge = false,
  compact = false,
  className = "",
}: TechniqueImageProps) {
  const [failed, setFailed] = useState(false);

  // uma nova URL merece uma nova tentativa
  useEffect(() => setFailed(false), [src]);

  const useExternal = Boolean(src) && !failed;

  if (useExternal) {
    return (
      <img
        alt={alt ?? `Postura de ${nome}`}
        className={`h-full w-full object-contain ${className}`}
        loading="lazy"
        onError={() => setFailed(true)}
        src={src as string}
      />
    );
  }

  const pose = resolvePose(nome, tipo, cat);

  return (
    <figure className={`relative flex h-full w-full flex-col ${className}`}>
      <KarateFigure
        className="min-h-0 w-full flex-1"
        compact={compact}
        pose={pose}
        showGuides={showGuides}
        title={`Ilustração técnica de ${nome}`}
        tone={tone}
      />

      {showBadge && (
        <span
          className={`pointer-events-none absolute right-2 top-2 flex items-center gap-1 rounded-xs px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider ${
            tone === "dark" ? "bg-white/10 text-white/60" : "bg-black/5 text-black/45"
          }`}
        >
          <PenTool size={9} aria-hidden="true" />
          Vetor
        </span>
      )}

      {showTip && pose.tip && (
        <figcaption
          className={`mt-2 shrink-0 border-t px-1 pt-2 text-[11px] leading-relaxed ${
            tone === "dark" ? "border-white/10 text-white/65" : "border-black/5 text-black/60"
          }`}
        >
          <strong className="text-jp-red">Ponto-chave:</strong> {pose.tip}
        </figcaption>
      )}
    </figure>
  );
}

export default TechniqueImage;
