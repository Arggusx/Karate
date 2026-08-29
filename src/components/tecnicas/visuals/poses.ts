/**
 * ═══════════════════════════════════════════════════════════════════════════
 *  BIBLIOTECA DE POSES — Karatê Shotokan
 * ═══════════════════════════════════════════════════════════════════════════
 *
 * Cada técnica é descrita como um conjunto de coordenadas de articulações
 * dentro de um mesmo sistema cartesiano (viewBox 0 0 400 300, solo em y=258).
 *
 * A vantagem de descrever POSE COMO DADO (e não como SVG hardcoded) é dupla:
 *   1. Consistência — todas as figuras compartilham proporção e escala.
 *   2. Animação — interpolar duas poses é interpolar dois objetos. As
 *      sequências em `sequences.ts` são apenas arrays de Pose.
 *
 * Convenção de lados:
 *   A = membro EM PRIMEIRO PLANO (desenhado por cima, recebe o acento)
 *   B = membro AO FUNDO (desenhado com opacidade reduzida — dá profundidade)
 */

export type Pt = [number, number];

/** Qual membro recebe o destaque vermelho (o membro que executa a técnica). */
export type Accent = "armA" | "armB" | "legA" | "legB";

export interface PoseMarker {
  at: Pt;
  /** impact = ponto de contato (kime) · target = alvo · pivot = eixo de rotação */
  kind: "impact" | "target" | "pivot";
  label?: string;
}

export interface PoseArrow {
  /** path `d` da seta (sem cabeça — a cabeça vem do <marker> do renderer) */
  d: string;
  tone?: "accent" | "gold" | "muted";
}

export interface PoseBracket {
  from: number;
  to: number;
  y: number;
  label: string;
}

export interface PoseWeight {
  at: Pt;
  text: string;
}

export interface Pose {
  view: "side" | "front";

  // ─── Eixo central ───
  head: Pt;
  headR?: number;
  neck: Pt;
  /** centro do quadril — a raiz da figura */
  spine: Pt;

  // ─── Membros superiores ───
  shoulderA: Pt;
  elbowA: Pt;
  handA: Pt;
  shoulderB: Pt;
  elbowB: Pt;
  handB: Pt;
  /** mão aberta (shuto/nukite) em vez de punho fechado */
  openHandA?: boolean;
  openHandB?: boolean;

  // ─── Membros inferiores ───
  hipA: Pt;
  kneeA: Pt;
  ankleA: Pt;
  toeA: Pt;
  hipB: Pt;
  kneeB: Pt;
  ankleB: Pt;
  toeB: Pt;

  // ─── Camada didática (opcional) ───
  accent?: Accent[];
  markers?: PoseMarker[];
  arrows?: PoseArrow[];
  brackets?: PoseBracket[];
  weights?: PoseWeight[];
  /** trajetória do movimento — path `d` tracejado */
  trace?: string;
  /** ponto técnico exibido como legenda sob a figura */
  tip?: string;
}

export const GROUND_Y = 258;

/* ═══════════════════════════════════════════════════════════════════════════
 * BLOCOS REUTILIZÁVEIS
 * Compor poses a partir daqui garante que todas as figuras tenham exatamente
 * a mesma altura, largura de ombro e comprimento de membro.
 * ═══════════════════════════════════════════════════════════════════════════ */

type Torso = Pick<Pose, "view" | "head" | "headR" | "neck" | "spine" | "shoulderA" | "shoulderB">;
type Legs = Pick<Pose, "hipA" | "kneeA" | "ankleA" | "toeA" | "hipB" | "kneeB" | "ankleB" | "toeB">;
type Arms = Pick<Pose, "elbowA" | "handA" | "elbowB" | "handB">;

/** Tronco em perfil, praticante voltado para a DIREITA (+x). */
const TORSO_SIDE: Torso = {
  view: "side",
  head: [195, 67],
  headR: 17,
  neck: [201, 89],
  spine: [204, 152],
  shoulderA: [207, 97],
  shoulderB: [196, 99],
};

/** Tronco de frente, simétrico. */
const TORSO_FRONT: Torso = {
  view: "front",
  head: [200, 64],
  headR: 17,
  neck: [200, 86],
  spine: [200, 152],
  shoulderA: [229, 98],
  shoulderB: [171, 98],
};

/** Zenkutsu-dachi: perna A à frente flexionada, perna B atrás estendida. */
const LEGS_ZENKUTSU: Legs = {
  hipA: [211, 152], kneeA: [263, 197], ankleA: [269, 252], toeA: [299, 256],
  hipB: [197, 153], kneeB: [158, 203], ankleB: [119, 252], toeB: [150, 256],
};

/** Kokutsu-dachi: peso recuado, joelho B flexionado para fora. */
const LEGS_KOKUTSU: Legs = {
  hipA: [206, 156], kneeA: [246, 205], ankleA: [268, 252], toeA: [297, 256],
  hipB: [191, 156], kneeB: [154, 202], ankleB: [148, 252], toeB: [121, 256],
};

/** Kiba-dachi: base do cavaleiro, simétrica, joelhos abertos. */
const LEGS_KIBA: Legs = {
  hipA: [222, 152], kneeA: [252, 204], ankleA: [258, 252], toeA: [258, 256],
  hipB: [178, 152], kneeB: [148, 204], ankleB: [142, 252], toeB: [142, 256],
};

/** Shiko-dachi: como kiba, porém mais profunda e com pontas a 45°. */
const LEGS_SHIKO: Legs = {
  hipA: [224, 160], kneeA: [258, 208], ankleA: [266, 252], toeA: [288, 256],
  hipB: [176, 160], kneeB: [142, 208], ankleB: [134, 252], toeB: [112, 256],
};

/** Postura natural (shizentai / heiko-dachi) — pés paralelos, pernas retas. */
const LEGS_NATURAL: Legs = {
  hipA: [212, 152], kneeA: [216, 203], ankleA: [220, 252], toeA: [238, 256],
  hipB: [190, 152], kneeB: [186, 203], ankleB: [182, 252], toeB: [200, 256],
};

/** Neko-ashi-dachi: quase todo o peso atrás, pé da frente na ponta. */
const LEGS_NEKO: Legs = {
  hipA: [204, 158], kneeA: [232, 200], ankleA: [244, 246], toeA: [262, 256],
  hipB: [192, 158], kneeB: [166, 204], ankleB: [172, 252], toeB: [148, 256],
};

/** Guarda neutra em perfil (kamae). */
const ARMS_GUARD: Arms = {
  elbowA: [241, 131], handA: [271, 117],
  elbowB: [180, 128], handB: [191, 150],
};

/** Ambos os punhos recolhidos ao quadril (posição de partida). */
const ARMS_CHAMBER_FRONT: Arms = {
  elbowA: [246, 136], handA: [224, 152],
  elbowB: [154, 136], handB: [176, 152],
};

/* ═══════════════════════════════════════════════════════════════════════════
 * BASES (DACHI)
 * ═══════════════════════════════════════════════════════════════════════════ */

export const ZENKUTSU_DACHI: Pose = {
  ...TORSO_SIDE, ...LEGS_ZENKUTSU, ...ARMS_GUARD,
  accent: ["legA"],
  weights: [
    { at: [278, 236], text: "60%" },
    { at: [120, 236], text: "40%" },
  ],
  brackets: [{ from: 119, to: 299, y: 274, label: "≈ 2 larguras de ombro" }],
  arrows: [{ d: "M 150 226 L 128 246", tone: "gold" }],
  tip: "Joelho da frente sobre a ponta do pé; perna de trás totalmente estendida com o calcanhar fixo no solo.",
};

export const KOKUTSU_DACHI: Pose = {
  ...TORSO_SIDE, ...LEGS_KOKUTSU,
  elbowA: [244, 127], handA: [269, 106], openHandA: true,
  elbowB: [189, 131], handB: [207, 141], openHandB: true,
  accent: ["legB"],
  weights: [
    { at: [292, 236], text: "30%" },
    { at: [140, 232], text: "70%" },
  ],
  arrows: [{ d: "M 132 196 L 108 188", tone: "gold" }],
  tip: "Joelho de trás aberto na direção do pé; os dois calcanhares alinhados na mesma linha reta.",
};

export const KIBA_DACHI: Pose = {
  ...TORSO_FRONT, ...LEGS_KIBA, ...ARMS_CHAMBER_FRONT,
  accent: ["legA", "legB"],
  weights: [
    { at: [278, 232], text: "50%" },
    { at: [122, 232], text: "50%" },
  ],
  brackets: [{ from: 132, to: 268, y: 274, label: "≈ 2 larguras de ombro" }],
  arrows: [
    { d: "M 244 206 L 268 210", tone: "gold" },
    { d: "M 156 206 L 132 210", tone: "gold" },
  ],
  tip: "Pés rigorosamente paralelos, joelhos empurrados para fora e quadril encaixado sob o tronco.",
};

export const SHIKO_DACHI: Pose = {
  ...TORSO_FRONT, ...LEGS_SHIKO, ...ARMS_CHAMBER_FRONT,
  accent: ["legA", "legB"],
  weights: [
    { at: [286, 232], text: "50%" },
    { at: [114, 232], text: "50%" },
  ],
  tip: "Idêntica à Kiba-dachi, porém mais baixa e com as pontas dos pés abertas a 45°.",
};

export const NEKO_ASHI_DACHI: Pose = {
  ...TORSO_SIDE, ...LEGS_NEKO, ...ARMS_GUARD,
  accent: ["legB"],
  weights: [
    { at: [268, 230], text: "10%" },
    { at: [162, 232], text: "90%" },
  ],
  tip: "Calcanhar da frente erguido — apenas a planta toca o solo, pronta para chutar sem transferir peso.",
};

export const HEIKO_DACHI: Pose = {
  ...TORSO_FRONT, ...LEGS_NATURAL, ...ARMS_CHAMBER_FRONT,
  brackets: [{ from: 182, to: 238, y: 274, label: "largura dos ombros" }],
  tip: "Postura natural de prontidão: pés paralelos na largura dos ombros, peso igualmente distribuído.",
};

/* ═══════════════════════════════════════════════════════════════════════════
 * SOCOS (TSUKI) E GOLPES (UCHI)
 * ═══════════════════════════════════════════════════════════════════════════ */

export const OI_ZUKI: Pose = {
  ...TORSO_SIDE, ...LEGS_ZENKUTSU,
  elbowA: [258, 110], handA: [320, 122],
  elbowB: [176, 124], handB: [190, 150],
  accent: ["armA"],
  markers: [{ at: [320, 122], kind: "impact" }, { at: [346, 122], kind: "target", label: "Chūdan" }],
  trace: "M 190 150 Q 250 150 320 122",
  arrows: [{ d: "M 196 146 L 176 152", tone: "gold" }],
  tip: "O soco e a perna que avança são do MESMO lado. A mão contrária puxa ao quadril (hikite) na mesma velocidade.",
};

export const GYAKU_ZUKI: Pose = {
  ...TORSO_SIDE, ...LEGS_ZENKUTSU,
  elbowA: [186, 126], handA: [200, 150],
  elbowB: [252, 112], handB: [318, 124],
  accent: ["armB"],
  markers: [{ at: [318, 124], kind: "impact" }, { at: [204, 152], kind: "pivot", label: "Koshi" }],
  trace: "M 188 152 Q 250 152 318 124",
  arrows: [{ d: "M 182 168 Q 210 182 238 168", tone: "accent" }],
  tip: "Soco do lado OPOSTO à perna da frente. A potência nasce da rotação completa do quadril (hanmi → shomen).",
};

export const CHOKU_ZUKI: Pose = {
  ...TORSO_FRONT, ...LEGS_NATURAL,
  elbowA: [222, 118], handA: [205, 126],
  elbowB: [154, 136], handB: [176, 152],
  accent: ["armA"],
  markers: [{ at: [205, 126], kind: "impact" }],
  tip: "Soco reto sem deslocamento. O punho gira 180° nos últimos centímetros — a rotação é o que gera o kime.",
};

export const KIZAMI_ZUKI: Pose = {
  ...TORSO_SIDE, ...LEGS_ZENKUTSU,
  elbowA: [252, 114], handA: [304, 104],
  elbowB: [180, 126], handB: [194, 150],
  accent: ["armA"],
  markers: [{ at: [304, 104], kind: "impact" }, { at: [328, 100], kind: "target", label: "Jōdan" }],
  trace: "M 240 122 Q 274 106 304 104",
  tip: "Soco curto da mão da frente. Vale pela velocidade e pela tomada de iniciativa (sen), não pela força bruta.",
};

export const URAKEN_UCHI: Pose = {
  ...TORSO_SIDE, ...LEGS_KIBA,
  elbowA: [250, 104], handA: [302, 86],
  elbowB: [178, 128], handB: [192, 150],
  accent: ["armA"],
  markers: [{ at: [302, 86], kind: "impact", label: "Uraken" }],
  trace: "M 224 118 Q 268 88 302 86",
  tip: "Chicote com o dorso do punho: o cotovelo abre como dobradiça e o punho retorna imediatamente.",
};

export const SHUTO_UCHI: Pose = {
  ...TORSO_SIDE, ...LEGS_ZENKUTSU,
  elbowA: [246, 100], handA: [300, 116], openHandA: true,
  elbowB: [178, 126], handB: [192, 150],
  accent: ["armA"],
  markers: [{ at: [300, 116], kind: "impact", label: "Shutō" }],
  trace: "M 208 74 Q 268 78 300 116",
  tip: "Golpe com a borda externa da mão aberta, em trajetória circular vinda de cima do ombro oposto.",
};

export const EMPI_UCHI: Pose = {
  ...TORSO_SIDE, ...LEGS_ZENKUTSU,
  elbowA: [272, 110], handA: [240, 84],
  elbowB: [178, 128], handB: [192, 150],
  accent: ["armA"],
  markers: [{ at: [272, 110], kind: "impact", label: "Empi" }],
  tip: "A arma é a PONTA DO COTOVELO. Distância curta: quem entrega o golpe é o quadril, não o braço.",
};

export const HIZA_GERI: Pose = {
  ...TORSO_SIDE,
  hipA: [210, 150], kneeA: [252, 130], ankleA: [230, 178], toeA: [252, 190],
  hipB: [196, 152], kneeB: [192, 203], ankleB: [188, 252], toeB: [214, 256],
  elbowA: [244, 118], handA: [268, 138],
  elbowB: [180, 126], handB: [194, 150],
  accent: ["legA"],
  markers: [{ at: [252, 130], kind: "impact", label: "Hiza" }],
  arrows: [{ d: "M 236 176 L 250 138", tone: "accent" }],
  tip: "Joelhada ascendente: puxe o adversário para baixo com as mãos enquanto o joelho sobe.",
};

/* ═══════════════════════════════════════════════════════════════════════════
 * DEFESAS (UKE)
 * ═══════════════════════════════════════════════════════════════════════════ */

export const AGE_UKE: Pose = {
  ...TORSO_SIDE, ...LEGS_ZENKUTSU,
  elbowA: [246, 110], handA: [222, 56],
  elbowB: [176, 124], handB: [190, 150],
  accent: ["armA"],
  markers: [{ at: [236, 78], kind: "impact", label: "Antebraço" }],
  trace: "M 190 150 Q 196 96 222 56",
  arrows: [{ d: "M 258 62 L 236 48", tone: "gold" }],
  tip: "O antebraço sobe em diagonal e para um punho acima da testa. O cotovelo fica à frente do corpo, nunca colado.",
};

export const GEDAN_BARAI: Pose = {
  ...TORSO_SIDE, ...LEGS_ZENKUTSU,
  elbowA: [246, 134], handA: [288, 182],
  elbowB: [176, 124], handB: [190, 150],
  accent: ["armA"],
  markers: [{ at: [288, 182], kind: "impact" }],
  trace: "M 196 78 Q 232 118 288 182",
  arrows: [{ d: "M 258 196 L 292 210", tone: "gold" }],
  tip: "Varredura descendente: a mão parte do ombro oposto e termina um punho acima do joelho da frente.",
};

export const SOTO_UKE: Pose = {
  ...TORSO_SIDE, ...LEGS_ZENKUTSU,
  elbowA: [242, 140], handA: [260, 86],
  elbowB: [176, 124], handB: [190, 150],
  accent: ["armA"],
  markers: [{ at: [252, 112], kind: "impact", label: "Antebraço" }],
  trace: "M 312 74 Q 286 78 260 86",
  arrows: [{ d: "M 288 92 L 262 100", tone: "gold" }],
  tip: "O antebraço varre de FORA para DENTRO, cruzando a linha central. Cotovelo a um punho das costelas.",
};

export const UCHI_UKE: Pose = {
  ...TORSO_SIDE, ...LEGS_ZENKUTSU,
  elbowA: [238, 142], handA: [264, 92],
  elbowB: [176, 124], handB: [190, 150],
  accent: ["armA"],
  markers: [{ at: [252, 116], kind: "impact", label: "Antebraço" }],
  trace: "M 186 128 Q 214 100 264 92",
  arrows: [{ d: "M 232 96 L 262 88", tone: "gold" }],
  tip: "O antebraço varre de DENTRO para FORA, abrindo a guarda do oponente para o contra-ataque imediato.",
};

export const SHUTO_UKE: Pose = {
  ...TORSO_SIDE, ...LEGS_KOKUTSU,
  elbowA: [246, 126], handA: [278, 100], openHandA: true,
  elbowB: [189, 131], handB: [207, 141], openHandB: true,
  accent: ["armA"],
  markers: [{ at: [278, 100], kind: "impact", label: "Shutō" }],
  trace: "M 206 70 Q 252 78 278 100",
  tip: "Executado em Kokutsu-dachi. A mão de apoio protege o plexo — as duas mãos param no mesmo instante.",
};

export const JUJI_UKE: Pose = {
  ...TORSO_SIDE, ...LEGS_ZENKUTSU,
  elbowA: [232, 122], handA: [268, 74],
  elbowB: [224, 130], handB: [260, 82],
  accent: ["armA", "armB"],
  markers: [{ at: [264, 78], kind: "impact", label: "Cruz" }],
  tip: "Antebraços cruzados em X. O ponto de cruzamento é o que trava o ataque — os punhos ficam fechados.",
};

/* ═══════════════════════════════════════════════════════════════════════════
 * CHUTES (KERI)
 * ═══════════════════════════════════════════════════════════════════════════ */

export const MAE_GERI: Pose = {
  ...TORSO_SIDE,
  hipA: [210, 150], kneeA: [266, 142], ankleA: [322, 136], toeA: [330, 122],
  hipB: [198, 152], kneeB: [194, 203], ankleB: [190, 252], toeB: [216, 256],
  ...ARMS_GUARD,
  accent: ["legA"],
  markers: [{ at: [330, 140], kind: "impact", label: "Koshi" }],
  trace: "M 232 190 Q 286 150 322 136",
  tip: "Dedos do pé puxados para trás: o impacto é na BASE dos dedos (koshi). Joelho sobe antes da perna estender.",
};

export const MAWASHI_GERI: Pose = {
  ...TORSO_SIDE,
  hipA: [208, 150], kneeA: [272, 150], ankleA: [316, 116], toeA: [332, 106],
  hipB: [196, 152], kneeB: [190, 204], ankleB: [186, 252], toeB: [158, 256],
  elbowA: [236, 126], handA: [262, 108],
  elbowB: [180, 128], handB: [194, 150],
  accent: ["legA"],
  markers: [{ at: [332, 108], kind: "impact", label: "Haisoku" }, { at: [186, 252], kind: "pivot" }],
  trace: "M 250 210 Q 300 190 316 116",
  arrows: [{ d: "M 170 244 Q 156 254 172 264", tone: "gold" }],
  tip: "O pé de apoio PIVOTA quase 180°. Sem esse giro o quadril trava e o chute perde toda a potência.",
};

export const YOKO_GERI: Pose = {
  view: "side",
  head: [166, 86], headR: 17,
  neck: [176, 106],
  spine: [196, 158],
  shoulderA: [182, 114], elbowA: [166, 146], handA: [190, 158],
  shoulderB: [172, 112], elbowB: [188, 138], handB: [214, 130],
  hipA: [206, 158], kneeA: [258, 150], ankleA: [312, 142], toeA: [318, 128],
  hipB: [190, 162], kneeB: [186, 208], ankleB: [182, 252], toeB: [156, 256],
  accent: ["legA"],
  markers: [{ at: [316, 154], kind: "impact", label: "Sokutō" }],
  trace: "M 226 198 Q 276 176 312 142",
  tip: "O impacto é na BORDA EXTERNA do pé (sokutō). O tronco inclina no sentido contrário para equilibrar.",
};

export const USHIRO_GERI: Pose = {
  view: "side",
  head: [176, 74], headR: 17,
  neck: [184, 94],
  spine: [200, 154],
  shoulderA: [178, 102], elbowA: [154, 128], handA: [180, 142],
  shoulderB: [190, 104], elbowB: [172, 134], handB: [196, 146],
  hipA: [208, 152], kneeA: [264, 148], ankleA: [320, 144], toeA: [326, 130],
  hipB: [192, 156], kneeB: [186, 206], ankleB: [180, 252], toeB: [152, 256],
  accent: ["legA"],
  markers: [{ at: [328, 148], kind: "impact", label: "Kakato" }],
  trace: "M 230 196 Q 284 172 320 144",
  tip: "Olhe o alvo por cima do ombro ANTES de estender. O impacto é com o calcanhar (kakato), em linha reta.",
};

export const ASHI_BARAI: Pose = {
  ...TORSO_SIDE,
  hipA: [210, 154], kneeA: [258, 196], ankleA: [306, 236], toeA: [326, 244],
  hipB: [196, 154], kneeB: [192, 204], ankleB: [188, 252], toeB: [214, 256],
  ...ARMS_GUARD,
  accent: ["legA"],
  markers: [{ at: [312, 240], kind: "impact" }],
  trace: "M 232 250 Q 276 246 306 236",
  arrows: [{ d: "M 286 254 L 322 254", tone: "gold" }],
  tip: "Varredura rasante ao solo, no tempo em que o oponente transfere peso — desequilibra sem exigir força.",
};

/* ═══════════════════════════════════════════════════════════════════════════
 * REGISTRO — resolução por nome, com fallback por categoria
 * ═══════════════════════════════════════════════════════════════════════════ */

/** Normaliza "Mae-Geri Keage" → "maegerikeage" para casar chaves com segurança. */
export function normalizeKey(nome: string): string {
  return nome
    .toLowerCase()
    .normalize("NFD")
    // remove marcas diacríticas combinantes (U+0300–U+036F)
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z]/g, "");
}

/**
 * Mapa nome-da-técnica → pose. As chaves já vêm normalizadas.
 * Técnicas sem entrada própria caem no fallback por categoria.
 */
const POSE_BY_NAME: Record<string, Pose> = {
  // Bases
  zenkutsudachi: ZENKUTSU_DACHI,
  kokutsudachi: KOKUTSU_DACHI,
  kibadachi: KIBA_DACHI,
  shikodachi: SHIKO_DACHI,
  nekoashidachi: NEKO_ASHI_DACHI,
  heikodachi: HEIKO_DACHI,
  hachijidachi: HEIKO_DACHI,
  heisokudachi: HEIKO_DACHI,
  musubidachi: HEIKO_DACHI,
  fudodachi: ZENKUTSU_DACHI,
  sanchindachi: HEIKO_DACHI,
  tsuruashidachi: NEKO_ASHI_DACHI,

  // Socos e golpes
  chokuzuki: CHOKU_ZUKI,
  oizuki: OI_ZUKI,
  gyakuzuki: GYAKU_ZUKI,
  kizamizuki: KIZAMI_ZUKI,
  kagezuki: GYAKU_ZUKI,
  urazuki: CHOKU_ZUKI,
  tatezuki: CHOKU_ZUKI,
  agezuki: KIZAMI_ZUKI,
  yamazuki: JUJI_UKE,
  awasezuki: CHOKU_ZUKI,
  morotezuki: CHOKU_ZUKI,
  nukite: SHUTO_UCHI,
  urakenuchi: URAKEN_UCHI,
  tettsuiuchi: URAKEN_UCHI,
  shutouchi: SHUTO_UCHI,
  haitouchi: SHUTO_UCHI,
  empiuchi: EMPI_UCHI,
  hizageri: HIZA_GERI,

  // Defesas
  ageuke: AGE_UKE,
  sotouke: SOTO_UKE,
  uchiuke: UCHI_UKE,
  gedanbarai: GEDAN_BARAI,
  shutouke: SHUTO_UKE,
  moroteuke: UCHI_UKE,
  jujiuke: JUJI_UKE,
  kakiwakeuke: JUJI_UKE,
  sukuiuke: GEDAN_BARAI,
  osaeuke: GEDAN_BARAI,
  nagashiuke: SOTO_UKE,
  haishuuke: UCHI_UKE,

  // Chutes
  maegerikeage: MAE_GERI,
  maegerikekomi: MAE_GERI,
  mawashigeri: MAWASHI_GERI,
  yokogerikeage: YOKO_GERI,
  yokogerikekomi: YOKO_GERI,
  ushirogeri: USHIRO_GERI,
  uramawashigeri: MAWASHI_GERI,
  mikazukigeri: MAWASHI_GERI,
  gyakumawashigeri: MAWASHI_GERI,
  kingeri: MAE_GERI,
  fumikomi: ASHI_BARAI,
  tobigeri: MAE_GERI,
  nidangeri: MAE_GERI,
  ashibarai: ASHI_BARAI,
};

/** Fallback por categoria — garante que NENHUMA técnica fique sem ilustração. */
const POSE_BY_CATEGORY: Record<string, Pose> = {
  Bases: HEIKO_DACHI,
  Socos: CHOKU_ZUKI,
  Defesas: UCHI_UKE,
  Chutes: MAE_GERI,
};

/** Fallback por tipo (Tsuki, Uchi, Keri, Uke, Dachi). */
const POSE_BY_TYPE: Record<string, Pose> = {
  Tsuki: CHOKU_ZUKI,
  Uchi: URAKEN_UCHI,
  Keri: MAE_GERI,
  Uke: UCHI_UKE,
  Dachi: HEIKO_DACHI,
};

/**
 * Resolve a pose de uma técnica.
 * Ordem: nome exato → tipo → categoria → guarda neutra.
 */
export function resolvePose(nome: string, tipo?: string, cat?: string): Pose {
  return (
    POSE_BY_NAME[normalizeKey(nome)] ??
    (tipo ? POSE_BY_TYPE[tipo] : undefined) ??
    (cat ? POSE_BY_CATEGORY[cat] : undefined) ??
    ZENKUTSU_DACHI
  );
}

/** Indica se a técnica tem ilustração dedicada (e não apenas o fallback). */
export function hasDedicatedPose(nome: string): boolean {
  return normalizeKey(nome) in POSE_BY_NAME;
}
