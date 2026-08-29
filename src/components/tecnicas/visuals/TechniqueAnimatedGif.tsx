/**
 * ═══════════════════════════════════════════════════════════════════════════
 *  TechniqueAnimatedGif — demonstração do movimento com fallback animado
 * ═══════════════════════════════════════════════════════════════════════════
 *
 * Regra de renderização:
 *   1. `src` de vídeo (.mp4/.webm/…) → <video controls loop muted playsInline>
 *   2. `src` de imagem animada (.gif/.webp) → <img />
 *   3. `src` de embed (YouTube/Vimeo)      → <iframe />
 *   4. `src` ausente → animação SVG gerada, com botão "Reproduzir Movimento"
 *
 * A animação nativa não é um placeholder: ela decompõe o movimento em fases
 * nomeadas (hikite → trajetória → kime → zanshin) e as narra em sincronia com
 * o loop, o que um gif comum não faz.
 */

import { useEffect, useMemo, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";
import { Play, Pause, Gauge, Sparkles } from "lucide-react";
import { AnimatedKarateFigure, type Tone } from "./KarateFigure";
import { resolvePose } from "./poses";
import { hasAuthoredSequence, phaseAt, resolveSequence } from "./sequences";

/** Classifica a mídia externa a partir da extensão / domínio da URL. */
export type MediaKind = "video" | "image" | "embed";

export function detectMediaKind(src: string): MediaKind {
  const clean = src.split("?")[0].toLowerCase();
  if (/\.(mp4|webm|ogv|ogg|mov|m4v)$/.test(clean)) return "video";
  if (/\.(gif|webp|apng|png|jpe?g|avif|svg)$/.test(clean)) return "image";
  return "embed";
}

export interface TechniqueAnimatedGifProps {
  nome: string;
  tipo?: string;
  cat?: string;
  /** URL externa opcional (vídeo, gif ou embed); ausente → animação SVG */
  src?: string | null;
  tone?: Tone;
  /** inicia a animação automaticamente (ignorado sob prefers-reduced-motion) */
  autoPlay?: boolean;
  className?: string;
}

export function TechniqueAnimatedGif({
  nome,
  tipo,
  cat,
  src,
  tone = "dark",
  autoPlay = false,
  className = "",
}: TechniqueAnimatedGifProps) {
  const prefersReduced = useReducedMotion();

  const [playing, setPlaying] = useState(autoPlay && !prefersReduced);
  const [slowMo, setSlowMo] = useState(false);
  const [phaseLabel, setPhaseLabel] = useState<string>("");

  const startRef = useRef<number>(0);
  const lastPhaseRef = useRef<string>("");
  const barRef = useRef<HTMLDivElement | null>(null);

  // `buildSequence` devolve um objeto novo a cada chamada — sem memoizar, o
  // efeito do relógio abaixo re-dispararia a cada render, em laço infinito.
  const sequence = useMemo(
    () => resolveSequence(nome, resolvePose(nome, tipo, cat)),
    [nome, tipo, cat]
  );
  const authored = hasAuthoredSequence(nome);
  const duration = sequence.duration * (slowMo ? 2 : 1);

  /**
   * Relógio do ciclo — dirige a barra de progresso e a legenda de fase.
   *
   * Deliberadamente NÃO usamos `useAnimationFrame` do Motion: ele mantém um
   * loop de rAF vivo enquanto o componente existir, mesmo pausado. Com um
   * card por técnica isso significaria dezenas de loops ociosos consumindo
   * bateria e impedindo a página de ficar idle. Aqui o loop só nasce quando
   * o movimento está de fato tocando, e morre junto com ele.
   */
  useEffect(() => {
    if (!playing || prefersReduced) {
      lastPhaseRef.current = "";
      setPhaseLabel("");
      if (barRef.current) barRef.current.style.transform = "scaleX(0)";
      return;
    }

    startRef.current = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const progress = ((((now - startRef.current) / (duration * 1000)) % 1) + 1) % 1;

      // barra de progresso: mutação direta do DOM, sem re-render por frame
      if (barRef.current) barRef.current.style.transform = `scaleX(${progress})`;

      const label = phaseAt(sequence, progress).label;
      if (label !== lastPhaseRef.current) {
        lastPhaseRef.current = label;
        setPhaseLabel(label);
      }

      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [playing, prefersReduced, duration, sequence]);

  /* ─── 1–3 · mídia externa vence a animação nativa ────────────────────── */
  if (src) {
    const kind = detectMediaKind(src);

    if (kind === "video") {
      return (
        <video
          aria-label={`Demonstração em vídeo de ${nome}`}
          className={`h-full w-full object-cover ${className}`}
          controls
          loop
          muted
          playsInline
          preload="metadata"
          src={src}
        />
      );
    }

    if (kind === "image") {
      return (
        <img
          alt={`Demonstração animada de ${nome}`}
          className={`h-full w-full object-contain ${className}`}
          loading="lazy"
          src={src}
        />
      );
    }

    return (
      <iframe
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className={`h-full w-full ${className}`}
        referrerPolicy="strict-origin-when-cross-origin"
        src={src}
        title={`Vídeo de ${nome}`}
      />
    );
  }

  /* ─── 4 · fallback: animação vetorial gerada ─────────────────────────── */
  const isDark = tone === "dark";

  return (
    <div className={`group relative h-full w-full overflow-hidden ${className}`}>
      <AnimatedKarateFigure
        className="h-full w-full"
        duration={duration}
        frames={sequence.frames}
        playing={playing}
        reduced={Boolean(prefersReduced)}
        times={sequence.times}
        title={`Animação demonstrativa de ${nome}`}
        tone={tone}
      />

      {/* selo de origem — honestidade sobre o que o usuário está vendo */}
      <span
        className={`pointer-events-none absolute left-3 top-3 flex items-center gap-1 rounded-xs px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider ${
          isDark ? "bg-white/10 text-white/55" : "bg-black/5 text-black/45"
        }`}
      >
        <Sparkles size={9} aria-hidden="true" />
        {authored ? "Animação vetorial" : "Movimento sintetizado"}
      </span>

      {/* botão central de partida (só enquanto parado) */}
      {!playing && !prefersReduced && (
        <button
          aria-label={`Reproduzir o movimento de ${nome}`}
          className="absolute inset-0 flex cursor-pointer flex-col items-center justify-center gap-2 bg-black/25 transition-colors hover:bg-black/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-jp-gold"
          onClick={() => setPlaying(true)}
          type="button"
        >
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-jp-red text-white shadow-lg transition-transform group-hover:scale-105">
            <Play className="ml-0.5" fill="currentColor" size={24} />
          </span>
          <span className="text-xs font-bold uppercase tracking-wider text-white drop-shadow">
            Reproduzir Movimento
          </span>
        </button>
      )}

      {prefersReduced && (
        <div className="absolute inset-x-0 bottom-0 bg-black/70 px-3 py-2 text-center text-[11px] text-white/75">
          Animações reduzidas conforme a preferência do seu sistema — exibindo o instante do kime.
        </div>
      )}

      {/* barra de controles, no estilo de um player */}
      {playing && !prefersReduced && (
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/60 to-transparent pb-2 pt-6">
          <div className="h-0.5 w-full bg-white/15">
            <div
              className="h-full origin-left bg-jp-red"
              ref={barRef}
              style={{ transform: "scaleX(0)" }}
            />
          </div>

          <div className="flex items-center gap-2 px-3 pt-2">
            <button
              aria-label="Pausar o movimento"
              className="flex shrink-0 cursor-pointer items-center gap-1.5 rounded-xs bg-white/10 px-2 py-1 text-[11px] font-semibold text-white transition-colors hover:bg-jp-red focus:outline-none focus-visible:ring-2 focus-visible:ring-jp-gold"
              onClick={() => setPlaying(false)}
              type="button"
            >
              <Pause size={12} /> Pausar
            </button>

            <button
              aria-label={slowMo ? "Voltar à velocidade normal" : "Reproduzir em câmera lenta"}
              aria-pressed={slowMo}
              className={`flex shrink-0 cursor-pointer items-center gap-1.5 rounded-xs px-2 py-1 text-[11px] font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-jp-gold ${
                slowMo ? "bg-jp-gold text-jp-ink" : "bg-white/10 text-white hover:bg-white/20"
              }`}
              onClick={() => setSlowMo((v) => !v)}
              type="button"
            >
              <Gauge size={12} /> {slowMo ? "0,5×" : "1×"}
            </button>

            <span
              aria-live="polite"
              className="min-w-0 flex-1 truncate text-right text-[11px] font-medium text-white/85"
            >
              {phaseLabel}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default TechniqueAnimatedGif;
