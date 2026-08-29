/**
 * ═══════════════════════════════════════════════════════════════════════════
 *  GEOMETRIA FLAT — transforma uma Pose num corpo desenhado
 * ═══════════════════════════════════════════════════════════════════════════
 *
 * Por que polígono e não traço espesso:
 * um `stroke` tem espessura constante, e é isso que faz um desenho parecer
 * boneco de palito engordado. Uma manga de karategi ABRE do ombro para o
 * cotovelo; a calça ABRE do quadril para o joelho. Só um polígono afunilado
 * (larguras diferentes nas duas pontas) reproduz isso.
 *
 * Cada osso vira um trapézio + um círculo em cada extremidade. O círculo
 * arredonda a ponta e, como ossos vizinhos compartilham a articulação, ele
 * também costura a junta sem emenda visível — sem precisar de arcos na path,
 * cujos flags de varredura são fáceis de errar.
 *
 * Tudo aqui é função pura de `Pose` → strings de path. É isso que permite
 * recalcular o corpo inteiro a cada frame da animação.
 */

import type { Pose, Pt } from "./poses";
import { GROUND_Y } from "./poses";

/* ─── Vetores ─────────────────────────────────────────────────────────────── */

const sub = (a: Pt, b: Pt): Pt => [a[0] - b[0], a[1] - b[1]];
const add = (a: Pt, b: Pt): Pt => [a[0] + b[0], a[1] + b[1]];
const mul = (a: Pt, k: number): Pt => [a[0] * k, a[1] * k];

function norm(v: Pt): Pt {
  const len = Math.hypot(v[0], v[1]) || 1;
  return [v[0] / len, v[1] / len];
}

/** Perpendicular unitária ao segmento a→b. */
function perp(a: Pt, b: Pt): Pt {
  const d = norm(sub(b, a));
  return [-d[1], d[0]];
}

export const lerp = (a: number, b: number, u: number) => a + (b - a) * u;
export const lerpPt = (a: Pt, b: Pt, u: number): Pt => [lerp(a[0], b[0], u), lerp(a[1], b[1], u)];

/* ─── Primitivas de desenho ───────────────────────────────────────────────── */

/**
 * Trapézio entre duas articulações: largura `wA` na origem, `wB` no destino.
 * É a peça que dá volume e afunilamento ao membro.
 */
export function limb(a: Pt, b: Pt, wA: number, wB: number): string {
  const n = perp(a, b);
  const p1 = add(a, mul(n, wA / 2));
  const p2 = add(b, mul(n, wB / 2));
  const p3 = sub(b, mul(n, wB / 2));
  const p4 = sub(a, mul(n, wA / 2));
  return `M${p1[0].toFixed(1)},${p1[1].toFixed(1)}L${p2[0].toFixed(1)},${p2[1].toFixed(1)}L${p3[0].toFixed(1)},${p3[1].toFixed(1)}L${p4[0].toFixed(1)},${p4[1].toFixed(1)}Z`;
}

/** Polígono fechado a partir de uma lista de pontos. */
function poly(pts: Pt[]): string {
  return pts.map((p, i) => `${i ? "L" : "M"}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join("") + "Z";
}

/* ─── Medidas do corpo ────────────────────────────────────────────────────── */
/* Karategi é folgado: as larguras abrem em direção à extremidade. */

const W = {
  upperArmTop: 19, // ombro
  upperArmEnd: 22, // cotovelo — a manga abre
  forearmTop: 13,
  forearmEnd: 11, // punho
  thighTop: 34, // quadril
  thighEnd: 30, // joelho
  shinTop: 29,
  shinEnd: 25, // calça continua larga até o tornozelo
  footW: 13,
  fistR: 8,
  headR: 18,
};

function torsoHalf(pose: Pose) {
  return pose.view === "front"
    ? { chest: 25, waist: 20 }
    : { chest: 21, waist: 17 };
}

/* ─── Peças ───────────────────────────────────────────────────────────────── */

/** Jaqueta do gi: ombros → cintura, levemente afunilada. */
export function torso(pose: Pose): string {
  const h = torsoHalf(pose);
  const n = perp(pose.neck, pose.spine);
  return poly([
    add(pose.neck, mul(n, h.chest)),
    add(pose.spine, mul(n, h.waist)),
    sub(pose.spine, mul(n, h.waist)),
    sub(pose.neck, mul(n, h.chest)),
  ]);
}

/** Lapela cruzada (o "V" do karategi). */
export function lapel(pose: Pose): string {
  const h = torsoHalf(pose);
  const d = norm(sub(pose.spine, pose.neck));
  const n = perp(pose.neck, pose.spine);
  const top = add(pose.neck, mul(d, 4));
  const mid = add(pose.neck, mul(d, 34));
  return poly([
    add(top, mul(n, h.chest * 0.72)),
    add(mid, mul(n, h.waist * 0.3)),
    sub(mid, mul(n, h.waist * 0.3)),
    sub(top, mul(n, h.chest * 0.72)),
  ]);
}

/** Faixa (obi) + as duas pontas caídas — detalhe que "veste" a figura. */
export function belt(pose: Pose): { band: string; knot: string; tails: string } {
  const h = torsoHalf(pose);
  const d = norm(sub(pose.spine, pose.neck));
  const n = perp(pose.neck, pose.spine);
  const top = sub(pose.spine, mul(d, 13));
  const bot = sub(pose.spine, mul(d, 1));

  const band = poly([
    add(top, mul(n, h.waist + 1)),
    add(bot, mul(n, h.waist + 1)),
    sub(bot, mul(n, h.waist + 1)),
    sub(top, mul(n, h.waist + 1)),
  ]);

  // nó levemente deslocado para a frente do corpo
  const knotC = add(sub(pose.spine, mul(d, 7)), mul(n, h.waist * 0.15));
  const knot = poly([
    add(add(knotC, mul(n, 7)), mul(d, -6)),
    add(add(knotC, mul(n, 7)), mul(d, 6)),
    add(sub(knotC, mul(n, 7)), mul(d, 6)),
    add(sub(knotC, mul(n, 7)), mul(d, -6)),
  ]);

  // pontas pendendo do nó
  const tailTop = add(knotC, mul(d, 5));
  const tailEnd = add(knotC, mul(d, 38));
  const tails =
    limb(add(tailTop, mul(n, 4)), add(tailEnd, mul(n, 7)), 8, 6) +
    limb(sub(tailTop, mul(n, 3)), sub(tailEnd, mul(n, 1)), 8, 6);

  return { band, knot, tails };
}

/** Pé descalço: do tornozelo à ponta, com o calcanhar atrás. */
export function foot(ankle: Pt, toe: Pt): string {
  const d = norm(sub(toe, ankle));
  const heel = [
    ankle[0] - d[0] * 9,
    Math.min(ankle[1] - d[1] * 9, GROUND_Y),
  ] as Pt;
  return limb(heel, toe, W.footW, W.footW * 0.75);
}

export interface HeadParts {
  skull: { cx: number; cy: number; r: number };
  hair: string;
  bun: { cx: number; cy: number; r: number };
  eye: { cx: number; cy: number; r: number };
  brow: string;
}

/**
 * Cabeça: crânio + cabelo cobrindo topo e nuca + coque + um olho.
 * O rosto é o que separa "pessoa" de "bola em cima de um corpo".
 */
export function head(pose: Pose): HeadParts {
  const [cx, cy] = pose.head;
  const r = W.headR;
  const f = pose.view === "front" ? 0 : 1; // poses de perfil olham para +x

  // calota de cabelo: cobre do topo até a nuca
  const hair = poly([
    [cx - r * 0.95, cy + r * 0.15],
    [cx - r * 1.02, cy - r * 0.55],
    [cx - r * 0.5, cy - r * 1.05],
    [cx + r * 0.35 * (1 - f * 0.35), cy - r * 1.02],
    [cx + r * 0.86 * (1 - f * 0.3), cy - r * 0.5],
    [cx + r * 0.5, cy - r * 0.62],
    [cx - r * 0.1, cy - r * 0.75],
    [cx - r * 0.62, cy - r * 0.35],
    [cx - r * 0.7, cy + r * 0.18],
  ]);

  return {
    skull: { cx, cy, r },
    hair,
    bun: { cx: cx - r * (0.95 + f * 0.15), cy: cy - r * 0.42, r: r * 0.42 },
    eye: { cx: cx + r * (0.3 + f * 0.22), cy: cy - r * 0.05, r: 1.9 },
    brow: `M${(cx + r * (0.12 + f * 0.15)).toFixed(1)},${(cy - r * 0.34).toFixed(1)}L${(cx + r * (0.52 + f * 0.2)).toFixed(1)},${(cy - r * 0.3).toFixed(1)}`,
  };
}

/* ─── Montagem completa ───────────────────────────────────────────────────── */

export type ShapeRole =
  | "giFar" | "skinFar"      // membros ao fundo
  | "gi" | "skin"            // membros à frente e tronco
  | "giShade"                // dobras / lapela
  | "hair" | "belt";

export interface Shape {
  /** identidade estável — a animação atualiza a MESMA lista todo frame */
  id: string;
  role: ShapeRole;
  d?: string;
  circle?: { cx: number; cy: number; r: number };
  /** membro que executa a técnica (recebe realce) */
  accent?: "armA" | "armB" | "legA" | "legB";
}

/**
 * Devolve as peças na ordem de pintura (fundo → frente).
 * A ordem e os ids são SEMPRE os mesmos, independentemente da pose — é o que
 * permite à animação apenas reescrever o `d` de cada peça.
 */
export function buildShapes(pose: Pose): Shape[] {
  const b = belt(pose);
  const h = head(pose);
  const out: Shape[] = [];

  // ── perna do fundo ──
  out.push(
    { id: "legB-thigh", role: "giFar", d: limb(pose.hipB, pose.kneeB, W.thighTop, W.thighEnd), accent: "legB" },
    { id: "legB-knee", role: "giFar", circle: { cx: pose.kneeB[0], cy: pose.kneeB[1], r: W.thighEnd / 2 }, accent: "legB" },
    { id: "legB-shin", role: "giFar", d: limb(pose.kneeB, pose.ankleB, W.shinTop, W.shinEnd), accent: "legB" },
    { id: "legB-ankle", role: "giFar", circle: { cx: pose.ankleB[0], cy: pose.ankleB[1], r: W.shinEnd / 2 }, accent: "legB" },
    { id: "legB-foot", role: "skinFar", d: foot(pose.ankleB, pose.toeB), accent: "legB" },
  );

  // ── braço do fundo ──
  out.push(
    { id: "armB-upper", role: "giFar", d: limb(pose.shoulderB, pose.elbowB, W.upperArmTop, W.upperArmEnd), accent: "armB" },
    { id: "armB-elbow", role: "giFar", circle: { cx: pose.elbowB[0], cy: pose.elbowB[1], r: W.upperArmEnd / 2 }, accent: "armB" },
    { id: "armB-fore", role: "skinFar", d: limb(pose.elbowB, pose.handB, W.forearmTop, W.forearmEnd), accent: "armB" },
    { id: "armB-fist", role: "skinFar", circle: { cx: pose.handB[0], cy: pose.handB[1], r: W.fistR }, accent: "armB" },
  );

  // ── tronco ──
  out.push(
    { id: "torso", role: "gi", d: torso(pose) },
    { id: "shoulder", role: "gi", circle: { cx: (pose.shoulderA[0] + pose.shoulderB[0]) / 2, cy: (pose.shoulderA[1] + pose.shoulderB[1]) / 2, r: torsoHalf(pose).chest } },
    { id: "hips", role: "gi", circle: { cx: pose.spine[0], cy: pose.spine[1], r: torsoHalf(pose).waist } },
    { id: "lapel", role: "giShade", d: lapel(pose) },
    { id: "belt-tails", role: "belt", d: b.tails },
    { id: "belt-band", role: "belt", d: b.band },
    { id: "belt-knot", role: "belt", d: b.knot },
  );

  // ── cabeça ──
  out.push(
    { id: "bun", role: "hair", circle: h.bun },
    { id: "neck", role: "skin", d: limb(pose.neck, pose.head, 13, 15) },
    { id: "skull", role: "skin", circle: h.skull },
    { id: "hair", role: "hair", d: h.hair },
    { id: "brow", role: "hair", d: h.brow },
    { id: "eye", role: "hair", circle: h.eye },
  );

  // ── perna da frente ──
  out.push(
    { id: "legA-thigh", role: "gi", d: limb(pose.hipA, pose.kneeA, W.thighTop, W.thighEnd), accent: "legA" },
    { id: "legA-knee", role: "gi", circle: { cx: pose.kneeA[0], cy: pose.kneeA[1], r: W.thighEnd / 2 }, accent: "legA" },
    { id: "legA-shin", role: "gi", d: limb(pose.kneeA, pose.ankleA, W.shinTop, W.shinEnd), accent: "legA" },
    { id: "legA-ankle", role: "gi", circle: { cx: pose.ankleA[0], cy: pose.ankleA[1], r: W.shinEnd / 2 }, accent: "legA" },
    { id: "legA-foot", role: "skin", d: foot(pose.ankleA, pose.toeA), accent: "legA" },
  );

  // ── braço da frente ──
  out.push(
    { id: "armA-upper", role: "gi", d: limb(pose.shoulderA, pose.elbowA, W.upperArmTop, W.upperArmEnd), accent: "armA" },
    { id: "armA-elbow", role: "gi", circle: { cx: pose.elbowA[0], cy: pose.elbowA[1], r: W.upperArmEnd / 2 }, accent: "armA" },
    { id: "armA-fore", role: "skin", d: limb(pose.elbowA, pose.handA, W.forearmTop, W.forearmEnd), accent: "armA" },
    { id: "armA-fist", role: "skin", circle: { cx: pose.handA[0], cy: pose.handA[1], r: W.fistR }, accent: "armA" },
  );

  return out;
}

/* ─── Interpolação de poses (para a animação) ─────────────────────────────── */

const JOINTS = [
  "head", "neck", "spine",
  "shoulderA", "elbowA", "handA",
  "shoulderB", "elbowB", "handB",
  "hipA", "kneeA", "ankleA", "toeA",
  "hipB", "kneeB", "ankleB", "toeB",
] as const;

/** Mistura duas poses. Campos não geométricos vêm de `a`. */
export function lerpPose(a: Pose, b: Pose, u: number): Pose {
  const out = { ...a } as Pose;
  for (const j of JOINTS) out[j] = lerpPt(a[j], b[j], u);
  return out;
}

const easeInOut = (t: number) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);

/**
 * Pose correspondente a um progresso normalizado do ciclo.
 * `times` marca em que instante cada keyframe acontece.
 */
export function poseAtProgress(frames: Pose[], times: number[], progress: number): Pose {
  const t = Math.min(Math.max(progress, 0), 1);
  let i = 0;
  while (i < times.length - 2 && t > times[i + 1]) i++;

  const span = times[i + 1] - times[i] || 1;
  const local = easeInOut(Math.min(Math.max((t - times[i]) / span, 0), 1));
  return lerpPose(frames[i], frames[i + 1], local);
}
