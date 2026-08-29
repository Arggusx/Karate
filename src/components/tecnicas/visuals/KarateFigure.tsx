/**
 * ═══════════════════════════════════════════════════════════════════════════
 *  KarateFigure — praticante de karatê desenhado em SVG flat
 * ═══════════════════════════════════════════════════════════════════════════
 *
 *   <KarateFigure>          → pose única, SVG estático
 *   <AnimatedKarateFigure>  → sequência de poses interpoladas
 *
 * Estilo: flat design — preenchimentos chapados, SEM contorno preto. O corpo
 * vem de `flatFigure.ts`, que converte as articulações da pose em polígonos
 * afunilados (manga e calça do karategi abrem em direção à extremidade).
 *
 * A animação NÃO usa Framer Motion: o corpo é feito de paths, e o atributo `d`
 * não é interpolável por bibliotecas de animação declarativa. Em vez disso,
 * um único laço de requestAnimationFrame recalcula a pose, remonta as peças e
 * escreve os atributos direto no DOM — zero re-render do React por frame, e o
 * laço só existe enquanto o movimento está tocando.
 */

import { useEffect, useMemo, useRef } from "react";
import type { Pose } from "./poses";
import { GROUND_Y } from "./poses";
import { buildShapes, poseAtProgress, type Shape, type ShapeRole } from "./flatFigure";

export type Tone = "light" | "dark";

interface Palette {
  gi: string;
  giShade: string;
  giFar: string;
  giEdge: string;
  giFarEdge: string;
  skin: string;
  skinFar: string;
  skinEdge: string;
  hair: string;
  belt: string;
  accent: string;
  gold: string;
  faint: string;
  ground: string;
  label: string;
}

const PALETTE: Record<Tone, Palette> = {
  light: {
    gi: "#FFFFFF",
    giShade: "#E7E4DE",
    giFar: "#D3CFC7",
    giEdge: "#D8D3C9",
    giFarEdge: "#B9B4AA",
    skin: "#C98B6B",
    skinFar: "#A97256",
    skinEdge: "#AE7150",
    hair: "#241F1B",
    belt: "#16130F",
    accent: "#BC002D",
    gold: "#8A6D14",
    faint: "rgba(20,17,15,0.09)",
    ground: "rgba(20,17,15,0.5)",
    label: "rgba(20,17,15,0.5)",
  },
  dark: {
    gi: "#F4F1EA",
    giShade: "#D6D2C8",
    giFar: "#9E9A90",
    giEdge: "#CFCABF",
    giFarEdge: "#7E7A72",
    skin: "#C98B6B",
    skinFar: "#9E6A50",
    skinEdge: "#A8714F",
    hair: "#16130F",
    belt: "#0D0B09",
    accent: "#FF3E5E",
    gold: "#E8C960",
    faint: "rgba(244,241,234,0.12)",
    ground: "rgba(244,241,234,0.4)",
    label: "rgba(244,241,234,0.55)",
  },
};

function roleColor(p: Palette, role: ShapeRole): string {
  switch (role) {
    case "gi": return p.gi;
    case "giShade": return p.giShade;
    case "giFar": return p.giFar;
    case "skin": return p.skin;
    case "skinFar": return p.skinFar;
    case "hair": return p.hair;
    case "belt": return p.belt;
  }
}

/**
 * Borda sutil das peças.
 *
 * Sem ela o karategi branco some sobre fundo branco e a figura vira um punhado
 * de manchas soltas (faixa, cabelo, pele). Não é contorno preto — é um cinza
 * quente que apenas define a silhueta e as sobreposições, do jeito que as
 * dobras fazem numa ilustração flat.
 */
function roleEdge(p: Palette, role: ShapeRole): { stroke: string; width: number } | null {
  switch (role) {
    case "gi": return { stroke: p.giEdge, width: 1.6 };
    case "giShade": return { stroke: p.giEdge, width: 1.2 };
    case "giFar": return { stroke: p.giFarEdge, width: 1.3 };
    case "skin": return { stroke: p.skinEdge, width: 1.2 };
    case "skinFar": return { stroke: p.skinEdge, width: 1 };
    default: return null;
  }
}

/* Enquadramentos — escala fixa para que duas técnicas sejam comparáveis. */
const VIEWBOX_FULL = "52 36 350 262"; // 4:3
const VIEWBOX_COMPACT = "104 32 240 238";
const VIEWBOX_WIDE = "-8 36 466 262"; // 16:9

/* ─── Camadas de contexto ─────────────────────────────────────────────────── */

function DojoFloor({ p }: { p: Palette }) {
  return (
    <g aria-hidden="true">
      {[0, 1, 2, 3].map((i) => (
        <line
          key={i}
          x1={60 + i * 10} y1={GROUND_Y + 6 + i * 7}
          x2={400 - i * 10} y2={GROUND_Y + 6 + i * 7}
          stroke={p.faint} strokeWidth={1}
        />
      ))}
      <line x1={40} y1={GROUND_Y} x2={420} y2={GROUND_Y} stroke={p.ground} strokeWidth={2} />
    </g>
  );
}

function Guides({ pose, p, arrowId }: { pose: Pose; p: Palette; arrowId: string }) {
  const tone = (t?: string) => (t === "accent" ? p.accent : t === "muted" ? p.label : p.gold);
  return (
    <g aria-hidden="true">
      {pose.trace && (
        <path d={pose.trace} fill="none" stroke={p.gold} strokeWidth={2.5}
          strokeDasharray="7 7" strokeLinecap="round" opacity={0.8} />
      )}
      {pose.arrows?.map((a, i) => (
        <path key={i} d={a.d} fill="none" stroke={tone(a.tone)} strokeWidth={2.4}
          strokeLinecap="round" markerEnd={`url(#${arrowId})`} opacity={0.95} />
      ))}
      {pose.brackets?.map((b, i) => (
        <g key={i}>
          <line x1={b.from} y1={b.y - 5} x2={b.from} y2={b.y + 5} stroke={p.label} strokeWidth={1.5} />
          <line x1={b.to} y1={b.y - 5} x2={b.to} y2={b.y + 5} stroke={p.label} strokeWidth={1.5} />
          <line x1={b.from} y1={b.y} x2={b.to} y2={b.y} stroke={p.label} strokeWidth={1.5} />
          <text x={(b.from + b.to) / 2} y={b.y + 16} textAnchor="middle" fill={p.label}
            fontSize={11} fontFamily="ui-sans-serif, system-ui, sans-serif">{b.label}</text>
        </g>
      ))}
      {pose.weights?.map((w, i) => (
        <g key={i}>
          <rect x={w.at[0] - 19} y={w.at[1] - 12} width={38} height={20} rx={4}
            fill={p.gold} opacity={0.2} />
          <text x={w.at[0]} y={w.at[1] + 3} textAnchor="middle" fill={p.gold}
            fontSize={13} fontWeight={700}
            fontFamily="ui-monospace, SFMono-Regular, monospace">{w.text}</text>
        </g>
      ))}
    </g>
  );
}

function Markers({ pose, p }: { pose: Pose; p: Palette }) {
  return (
    <g aria-hidden="true">
      {pose.markers?.map((m, i) => {
        if (m.kind === "target") {
          return (
            <g key={i}>
              <circle cx={m.at[0]} cy={m.at[1]} r={13} fill="none" stroke={p.accent} strokeWidth={1.6} opacity={0.55} />
              <line x1={m.at[0] - 19} y1={m.at[1]} x2={m.at[0] + 19} y2={m.at[1]} stroke={p.accent} strokeWidth={1} opacity={0.55} />
              <line x1={m.at[0]} y1={m.at[1] - 19} x2={m.at[0]} y2={m.at[1] + 19} stroke={p.accent} strokeWidth={1} opacity={0.55} />
              {m.label && <text x={m.at[0]} y={m.at[1] + 34} textAnchor="middle" fill={p.accent} fontSize={11} fontWeight={600} fontFamily="ui-sans-serif, system-ui, sans-serif">{m.label}</text>}
            </g>
          );
        }
        if (m.kind === "pivot") {
          return (
            <g key={i}>
              <circle cx={m.at[0]} cy={m.at[1]} r={11} fill="none" stroke={p.gold} strokeWidth={1.8} strokeDasharray="3 3" />
              {m.label && <text x={m.at[0]} y={m.at[1] + 26} textAnchor="middle" fill={p.gold} fontSize={10} fontWeight={600} fontFamily="ui-sans-serif, system-ui, sans-serif">{m.label}</text>}
            </g>
          );
        }
        return (
          <g key={i}>
            <circle cx={m.at[0]} cy={m.at[1]} r={17} fill="none" stroke={p.accent} strokeWidth={1.6} opacity={0.4} />
            <circle cx={m.at[0]} cy={m.at[1]} r={25} fill="none" stroke={p.accent} strokeWidth={1} opacity={0.2} />
            {m.label && <text x={m.at[0]} y={m.at[1] - 32} textAnchor="middle" fill={p.accent} fontSize={10.5} fontWeight={700} fontFamily="ui-sans-serif, system-ui, sans-serif">{m.label}</text>}
          </g>
        );
      })}
    </g>
  );
}

function Arrowhead({ id }: { id: string }) {
  return (
    <marker id={id} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
    </marker>
  );
}

/** Uma peça do corpo. */
function ShapeNode({ s, p }: { s: Shape; p: Palette }) {
  const fill = roleColor(p, s.role);
  const edge = roleEdge(p, s.role);
  const stroke = edge ? { stroke: edge.stroke, strokeWidth: edge.width } : {};
  return s.circle ? (
    <circle cx={s.circle.cx} cy={s.circle.cy} r={s.circle.r} fill={fill} {...stroke} />
  ) : (
    <path d={s.d} fill={fill} {...stroke} />
  );
}


/* ═══════════════════════════════════════════════════════════════════════════
 *  ESTÁTICA
 * ═══════════════════════════════════════════════════════════════════════════ */

export interface KarateFigureProps {
  pose: Pose;
  tone?: Tone;
  showGuides?: boolean;
  compact?: boolean;
  className?: string;
  title?: string;
}

export function KarateFigure({
  pose, tone = "light", showGuides = true, compact = false, className, title,
}: KarateFigureProps) {
  const p = PALETTE[tone];
  const arrowId = useMemo(() => `ah-${Math.random().toString(36).slice(2, 9)}`, []);
  const shapes = useMemo(() => buildShapes(pose), [pose]);

  return (
    <svg
      viewBox={compact ? VIEWBOX_COMPACT : VIEWBOX_FULL}
      preserveAspectRatio="xMidYMid meet"
      className={className}
      role="img"
      aria-label={title ?? "Ilustração técnica de karatê"}
    >
      {title && <title>{title}</title>}
      <defs><Arrowhead id={arrowId} /></defs>

      <DojoFloor p={p} />
      {showGuides && <Guides pose={pose} p={p} arrowId={arrowId} />}

      {shapes.map((s) => <ShapeNode key={s.id} s={s} p={p} />)}

      {showGuides && <Markers pose={pose} p={p} />}
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
 *  ANIMADA
 * ═══════════════════════════════════════════════════════════════════════════ */

export interface AnimatedKarateFigureProps {
  frames: Pose[];
  playing: boolean;
  duration?: number;
  times?: number[];
  tone?: Tone;
  className?: string;
  title?: string;
  reduced?: boolean;
}

export function AnimatedKarateFigure({
  frames, playing, duration = 2.6, times, tone = "dark", className, title, reduced = false,
}: AnimatedKarateFigureProps) {
  const p = PALETTE[tone];
  const arrowId = useMemo(() => `ah-${Math.random().toString(36).slice(2, 9)}`, []);

  const t = useMemo(
    () => times ?? frames.map((_, i) => i / (frames.length - 1)),
    [times, frames]
  );

  const rest = frames[0];
  const peak = frames[Math.max(0, Math.floor(frames.length / 2))];
  const shown = reduced ? peak : rest;

  // A lista de peças tem ids e ordem estáveis, então basta reescrever os
  // atributos das MESMAS referências a cada frame.
  const baseShapes = useMemo(() => buildShapes(shown), [shown]);
  const nodeRefs = useRef<(SVGPathElement | SVGCircleElement | null)[]>([]);

  const active = playing && !reduced;

  useEffect(() => {
    const apply = (el: SVGPathElement | SVGCircleElement | null, s: Shape | undefined) => {
      if (!el || !s) return;
      if (s.circle) {
        el.setAttribute("cx", String(s.circle.cx));
        el.setAttribute("cy", String(s.circle.cy));
        el.setAttribute("r", String(s.circle.r));
      } else if (s.d) {
        el.setAttribute("d", s.d);
      }
    };

    const paint = (pose: Pose) => {
      const shapes = buildShapes(pose);
      shapes.forEach((s, i) => apply(nodeRefs.current[i], s));
    };

    if (!active) {
      paint(shown);
      return;
    }

    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = ((((now - start) / (duration * 1000)) % 1) + 1) % 1;
      paint(poseAtProgress(frames, t, progress));
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, duration, frames, t, shown]);

  return (
    <svg
      viewBox={VIEWBOX_WIDE}
      preserveAspectRatio="xMidYMid meet"
      className={className}
      role="img"
      aria-label={title ?? "Animação demonstrativa da técnica"}
    >
      {title && <title>{title}</title>}
      <defs><Arrowhead id={arrowId} /></defs>

      <DojoFloor p={p} />

      {peak.trace && (
        <path d={peak.trace} fill="none" stroke={p.gold} strokeWidth={2.5}
          strokeDasharray="7 7" strokeLinecap="round" opacity={active ? 0.75 : 0.45} />
      )}

      {baseShapes.map((s, i) =>
        s.circle ? (
          <circle
            key={s.id}
            ref={(el) => { nodeRefs.current[i] = el; }}
            cx={s.circle.cx} cy={s.circle.cy} r={s.circle.r}
            fill={roleColor(p, s.role)}
            stroke={roleEdge(p, s.role)?.stroke}
            strokeWidth={roleEdge(p, s.role)?.width}
          />
        ) : (
          <path
            key={s.id}
            ref={(el) => { nodeRefs.current[i] = el; }}
            d={s.d}
            fill={roleColor(p, s.role)}
            stroke={roleEdge(p, s.role)?.stroke}
            strokeWidth={roleEdge(p, s.role)?.width}
          />
        )
      )}

      <Markers pose={peak} p={p} />
    </svg>
  );
}
