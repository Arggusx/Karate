/**
 * ═══════════════════════════════════════════════════════════════════════════
 *  SEQUÊNCIAS DE MOVIMENTO — os "gifs" gerados por interpolação
 * ═══════════════════════════════════════════════════════════════════════════
 *
 * Uma animação aqui é apenas um array de `Pose` + o instante de cada uma no
 * ciclo. O Framer Motion interpola cada articulação entre os keyframes, o que
 * produz um movimento contínuo a partir de dados puramente declarativos.
 *
 * `phases` alimenta a legenda sincronizada exibida sob a animação — é o que
 * transforma o loop numa explicação didática em vez de um enfeite.
 *
 * Técnicas sem sequência autoral caem em `buildSequence()`, que sintetiza um
 * ciclo "prontidão → técnica → kime sustentado → prontidão" a partir da pose
 * estática. Assim NENHUMA técnica fica sem demonstração.
 */

import type { Pose } from "./poses";
import {
  AGE_UKE,
  ASHI_BARAI,
  CHOKU_ZUKI,
  GEDAN_BARAI,
  GYAKU_ZUKI,
  KIBA_DACHI,
  MAE_GERI,
  MAWASHI_GERI,
  OI_ZUKI,
  SOTO_UKE,
  UCHI_UKE,
  URAKEN_UCHI,
  YOKO_GERI,
  ZENKUTSU_DACHI,
  normalizeKey,
} from "./poses";

export interface MovementPhase {
  /** instante normalizado (0→1) em que a fase começa */
  at: number;
  label: string;
}

export interface Sequence {
  frames: Pose[];
  times: number[];
  duration: number;
  phases: MovementPhase[];
}

/* ─── Poses de prontidão (ponto de partida e de retorno) ──────────────── */

const READY_SIDE: Pose = {
  view: "side",
  head: [197, 66], headR: 17,
  neck: [202, 88],
  spine: [204, 151],
  shoulderA: [209, 96], elbowA: [231, 129], handA: [212, 150],
  shoulderB: [196, 98], elbowB: [178, 129], handB: [196, 150],
  hipA: [211, 151], kneeA: [215, 202], ankleA: [219, 252], toeA: [241, 256],
  hipB: [197, 151], kneeB: [193, 202], ankleB: [189, 252], toeB: [211, 256],
};

const READY_FRONT: Pose = {
  view: "front",
  head: [200, 64], headR: 17,
  neck: [200, 86],
  spine: [200, 152],
  shoulderA: [229, 98], elbowA: [246, 136], handA: [224, 152],
  shoulderB: [171, 98], elbowB: [154, 136], handB: [176, 152],
  hipA: [212, 152], kneeA: [216, 203], ankleA: [220, 252], toeA: [238, 256],
  hipB: [190, 152], kneeB: [186, 203], ankleB: [182, 252], toeB: [200, 256],
};

/**
 * Posição de atenção (musubi/heisoku): pés juntos, braços caídos ao lado.
 * Serve de ponto de partida para as bases naturais — que são tão próximas da
 * pose de prontidão que, sem isto, a "animação" ficaria parada.
 */
const ATTENTION: Pose = {
  view: "front",
  head: [200, 64], headR: 17,
  neck: [200, 86],
  spine: [200, 152],
  shoulderA: [225, 98], elbowA: [231, 127], handA: [234, 157],
  shoulderB: [175, 98], elbowB: [169, 127], handB: [166, 157],
  hipA: [207, 152], kneeA: [205, 203], ankleA: [203, 252], toeA: [221, 256],
  hipB: [193, 152], kneeB: [195, 203], ankleB: [197, 252], toeB: [179, 256],
};

const JOINT_KEYS = [
  "head", "neck", "spine",
  "shoulderA", "elbowA", "handA",
  "shoulderB", "elbowB", "handB",
  "hipA", "kneeA", "ankleA", "toeA",
  "hipB", "kneeB", "ankleB", "toeB",
] as const;

/** Soma dos deslocamentos de todas as articulações entre duas poses. */
function poseDistance(a: Pose, b: Pose): number {
  return JOINT_KEYS.reduce(
    (sum, k) => sum + Math.hypot(a[k][0] - b[k][0], a[k][1] - b[k][1]),
    0
  );
}

/** Copia o destaque/acento da técnica para o frame de prontidão. */
function ready(pose: Pose): Pose {
  const base = pose.view === "front" ? READY_FRONT : READY_SIDE;
  return { ...base, accent: pose.accent };
}

/* ═══════════════════════════════════════════════════════════════════════════
 * SEQUÊNCIAS AUTORAIS
 * ═══════════════════════════════════════════════════════════════════════════ */

/** OI-ZUKI — o soco sai do quadril (hikite) até a extensão total. */
const SEQ_OI_ZUKI: Sequence = {
  duration: 3,
  times: [0, 0.13, 0.32, 0.45, 0.72, 1],
  frames: [
    // 0 · kamae: punho recolhido ao quadril, mão contrária à frente
    { ...OI_ZUKI, elbowA: [174, 124], handA: [188, 150], elbowB: [250, 112], handB: [310, 124] },
    // 1 · carga: quadril recua para hanmi, o punho comprime
    {
      ...OI_ZUKI,
      elbowA: [169, 122], handA: [183, 150], elbowB: [240, 116], handB: [290, 128],
      spine: [201, 153], shoulderA: [204, 98], shoulderB: [194, 100],
    },
    // 2 · trajetória: cotovelo raspa as costelas, punho ainda com a palma p/ cima
    {
      ...OI_ZUKI,
      elbowA: [212, 118], handA: [252, 128], elbowB: [206, 120], handB: [232, 140],
      spine: [206, 151], shoulderA: [209, 96], shoulderB: [197, 99],
      kneeA: [266, 197], ankleA: [270, 252],
    },
    // 3 · kime: extensão total + hikite simultâneo
    {
      ...OI_ZUKI,
      spine: [208, 152], shoulderA: [212, 96], shoulderB: [200, 99],
      hipA: [215, 152], kneeA: [268, 197], ankleA: [272, 252], toeA: [302, 256],
      hipB: [201, 153], kneeB: [162, 203], ankleB: [123, 252], toeB: [154, 256],
    },
    // 4 · zanshin: sustenta o kime
    {
      ...OI_ZUKI,
      spine: [208, 152], shoulderA: [212, 96], shoulderB: [200, 99],
      hipA: [215, 152], kneeA: [268, 197], ankleA: [272, 252], toeA: [302, 256],
      hipB: [201, 153], kneeB: [162, 203], ankleB: [123, 252], toeB: [154, 256],
    },
    // 5 · retorno (fecha o ciclo sem salto visual)
    { ...OI_ZUKI, elbowA: [174, 124], handA: [188, 150], elbowB: [250, 112], handB: [310, 124] },
  ],
  phases: [
    { at: 0, label: "Kamae · punho recolhido ao quadril (hikite)" },
    { at: 0.13, label: "Carga · quadril em hanmi, ombros relaxados" },
    { at: 0.32, label: "Trajetória · cotovelo raspando as costelas" },
    { at: 0.45, label: "Kime · extensão total e rotação do punho" },
    { at: 0.72, label: "Zanshin · atenção mantida no retorno" },
  ],
};

/** GYAKU-ZUKI — a potência vem da rotação do quadril, não do braço. */
const SEQ_GYAKU_ZUKI: Sequence = {
  duration: 3,
  times: [0, 0.3, 0.45, 0.72, 1],
  frames: [
    {
      ...GYAKU_ZUKI,
      elbowA: [244, 124], handA: [278, 116], elbowB: [178, 126], handB: [192, 150],
      hipA: [208, 152], hipB: [200, 153],
    },
    {
      ...GYAKU_ZUKI,
      elbowA: [206, 124], handA: [230, 142], elbowB: [212, 118], handB: [246, 130],
      hipA: [212, 152], hipB: [196, 153], spine: [206, 152],
    },
    { ...GYAKU_ZUKI, hipA: [215, 152], hipB: [194, 153], spine: [208, 152] },
    { ...GYAKU_ZUKI, hipA: [215, 152], hipB: [194, 153], spine: [208, 152] },
    {
      ...GYAKU_ZUKI,
      elbowA: [244, 124], handA: [278, 116], elbowB: [178, 126], handB: [192, 150],
      hipA: [208, 152], hipB: [200, 153],
    },
  ],
  phases: [
    { at: 0, label: "Hanmi · quadril a 45°, mão de trás no quadril" },
    { at: 0.3, label: "Rotação · o quadril inicia, o braço acompanha" },
    { at: 0.45, label: "Shomen · quadril de frente e kime simultâneo" },
    { at: 0.72, label: "Zanshin · base firme, sem recuar o peso" },
  ],
};

/** CHOKU-ZUKI — soco reto sem deslocamento, visto de frente. */
const SEQ_CHOKU_ZUKI: Sequence = {
  duration: 2.6,
  times: [0, 0.28, 0.44, 0.7, 1],
  frames: [
    { ...CHOKU_ZUKI, elbowA: [246, 136], handA: [224, 152] },
    { ...CHOKU_ZUKI, elbowA: [238, 130], handA: [214, 142] },
    { ...CHOKU_ZUKI },
    { ...CHOKU_ZUKI },
    { ...CHOKU_ZUKI, elbowA: [246, 136], handA: [224, 152] },
  ],
  phases: [
    { at: 0, label: "Yoi · ambos os punhos no quadril, palma p/ cima" },
    { at: 0.28, label: "Saída · o punho segue a linha central do corpo" },
    { at: 0.44, label: "Kime · rotação de 180° do punho no impacto" },
    { at: 0.7, label: "Hikite · retorno pelo mesmo caminho" },
  ],
};

/** AGE-UKE — trajetória circular ascendente cruzando o corpo. */
const SEQ_AGE_UKE: Sequence = {
  duration: 3,
  times: [0, 0.15, 0.31, 0.45, 0.72, 1],
  frames: [
    { ...AGE_UKE, elbowA: [176, 126], handA: [192, 152], elbowB: [246, 122], handB: [286, 132] },
    { ...AGE_UKE, elbowA: [206, 146], handA: [214, 110], elbowB: [224, 126], handB: [252, 140] },
    { ...AGE_UKE, elbowA: [232, 128], handA: [216, 74], elbowB: [196, 126], handB: [212, 146] },
    { ...AGE_UKE },
    { ...AGE_UKE },
    { ...AGE_UKE, elbowA: [176, 126], handA: [192, 152], elbowB: [246, 122], handB: [286, 132] },
  ],
  phases: [
    { at: 0, label: "Preparação · punho no quadril, palma p/ cima" },
    { at: 0.15, label: "Subida · o antebraço cruza a linha central" },
    { at: 0.31, label: "Passagem · protege o rosto durante todo o trajeto" },
    { at: 0.45, label: "Kime · um punho acima da testa, cotovelo à frente" },
    { at: 0.72, label: "Retorno · hikite da mão contrária" },
  ],
};

/** GEDAN-BARAI — varredura descendente a partir do ombro oposto. */
const SEQ_GEDAN_BARAI: Sequence = {
  duration: 2.8,
  times: [0, 0.3, 0.45, 0.72, 1],
  frames: [
    { ...GEDAN_BARAI, elbowA: [212, 116], handA: [196, 76], elbowB: [246, 128], handB: [284, 140] },
    { ...GEDAN_BARAI, elbowA: [230, 126], handA: [246, 140], elbowB: [206, 126], handB: [226, 146] },
    { ...GEDAN_BARAI },
    { ...GEDAN_BARAI },
    { ...GEDAN_BARAI, elbowA: [212, 116], handA: [196, 76], elbowB: [246, 128], handB: [284, 140] },
  ],
  phases: [
    { at: 0, label: "Preparação · punho junto à orelha oposta" },
    { at: 0.3, label: "Descida · o antebraço corta a diagonal do corpo" },
    { at: 0.45, label: "Kime · um punho acima do joelho da frente" },
    { at: 0.72, label: "Retorno · guarda reassumida" },
  ],
};

/** SOTO-UKE — varredura de fora para dentro. */
const SEQ_SOTO_UKE: Sequence = {
  duration: 2.8,
  times: [0, 0.3, 0.45, 0.72, 1],
  frames: [
    { ...SOTO_UKE, elbowA: [252, 110], handA: [300, 72], elbowB: [244, 126], handB: [280, 138] },
    { ...SOTO_UKE, elbowA: [248, 126], handA: [280, 80], elbowB: [204, 126], handB: [222, 146] },
    { ...SOTO_UKE },
    { ...SOTO_UKE },
    { ...SOTO_UKE, elbowA: [252, 110], handA: [300, 72], elbowB: [244, 126], handB: [280, 138] },
  ],
  phases: [
    { at: 0, label: "Preparação · punho acima e fora do ombro" },
    { at: 0.3, label: "Varredura · de FORA para DENTRO" },
    { at: 0.45, label: "Kime · cotovelo a um punho das costelas" },
    { at: 0.72, label: "Retorno · abertura para o contra-ataque" },
  ],
};

/** UCHI-UKE — varredura de dentro para fora. */
const SEQ_UCHI_UKE: Sequence = {
  duration: 2.8,
  times: [0, 0.3, 0.45, 0.72, 1],
  frames: [
    { ...UCHI_UKE, elbowA: [186, 132], handA: [174, 118], elbowB: [244, 126], handB: [280, 138] },
    { ...UCHI_UKE, elbowA: [212, 140], handA: [214, 104], elbowB: [204, 126], handB: [222, 146] },
    { ...UCHI_UKE },
    { ...UCHI_UKE },
    { ...UCHI_UKE, elbowA: [186, 132], handA: [174, 118], elbowB: [244, 126], handB: [280, 138] },
  ],
  phases: [
    { at: 0, label: "Preparação · punho cruzado sob o braço oposto" },
    { at: 0.3, label: "Varredura · de DENTRO para FORA" },
    { at: 0.45, label: "Kime · antebraço vertical, punho na altura do ombro" },
    { at: 0.72, label: "Retorno · guarda reassumida" },
  ],
};

/** URAKEN-UCHI — o cotovelo abre como dobradiça e o punho volta. */
const SEQ_URAKEN: Sequence = {
  duration: 2.4,
  times: [0, 0.32, 0.44, 0.62, 1],
  frames: [
    { ...URAKEN_UCHI, elbowA: [232, 112], handA: [206, 96] },
    { ...URAKEN_UCHI, elbowA: [244, 106], handA: [262, 88] },
    { ...URAKEN_UCHI },
    { ...URAKEN_UCHI, elbowA: [240, 108], handA: [244, 92] },
    { ...URAKEN_UCHI, elbowA: [232, 112], handA: [206, 96] },
  ],
  phases: [
    { at: 0, label: "Preparação · punho junto ao ombro oposto" },
    { at: 0.32, label: "Abertura · só o antebraço se move" },
    { at: 0.44, label: "Impacto · dorso do punho (uraken)" },
    { at: 0.62, label: "Recolhimento imediato · o chicote volta" },
  ],
};

/** MAE-GERI — joelho sobe ANTES da perna estender. */
const SEQ_MAE_GERI: Sequence = {
  duration: 2.8,
  times: [0, 0.24, 0.44, 0.62, 1],
  frames: [
    {
      ...MAE_GERI,
      hipA: [211, 152], kneeA: [263, 197], ankleA: [269, 252], toeA: [299, 256],
      hipB: [197, 153], kneeB: [158, 203], ankleB: [119, 252], toeB: [150, 256],
    },
    // hikiashi — joelho alto, canela recolhida
    {
      ...MAE_GERI,
      hipA: [208, 150], kneeA: [258, 146], ankleA: [232, 190], toeA: [256, 198],
      hipB: [197, 152], kneeB: [193, 203], ankleB: [189, 252], toeB: [215, 256],
    },
    { ...MAE_GERI },
    // recolhe pelo mesmo caminho
    {
      ...MAE_GERI,
      hipA: [208, 150], kneeA: [258, 146], ankleA: [232, 190], toeA: [256, 198],
      hipB: [197, 152], kneeB: [193, 203], ankleB: [189, 252], toeB: [215, 256],
    },
    {
      ...MAE_GERI,
      hipA: [211, 152], kneeA: [263, 197], ankleA: [269, 252], toeA: [299, 256],
      hipB: [197, 153], kneeB: [158, 203], ankleB: [119, 252], toeB: [150, 256],
    },
  ],
  phases: [
    { at: 0, label: "Base · Zenkutsu-dachi, peso à frente" },
    { at: 0.24, label: "Hikiashi · joelho sobe alto, canela recolhida" },
    { at: 0.44, label: "Kekomi · extensão e impacto com o koshi" },
    { at: 0.62, label: "Recolhimento · volta ao joelho antes de descer" },
  ],
};

/** MAWASHI-GERI — o pé de apoio pivota, senão o quadril trava. */
const SEQ_MAWASHI_GERI: Sequence = {
  duration: 2.8,
  times: [0, 0.26, 0.45, 0.63, 1],
  frames: [
    {
      ...MAWASHI_GERI,
      hipA: [211, 152], kneeA: [263, 197], ankleA: [269, 252], toeA: [299, 256],
      hipB: [197, 153], kneeB: [193, 203], ankleB: [189, 252], toeB: [215, 256],
    },
    {
      ...MAWASHI_GERI,
      hipA: [206, 150], kneeA: [262, 156], ankleA: [244, 204], toeA: [268, 210],
      hipB: [196, 152], kneeB: [191, 204], ankleB: [187, 252], toeB: [170, 256],
    },
    { ...MAWASHI_GERI },
    {
      ...MAWASHI_GERI,
      hipA: [206, 150], kneeA: [262, 156], ankleA: [244, 204], toeA: [268, 210],
      hipB: [196, 152], kneeB: [191, 204], ankleB: [187, 252], toeB: [170, 256],
    },
    {
      ...MAWASHI_GERI,
      hipA: [211, 152], kneeA: [263, 197], ankleA: [269, 252], toeA: [299, 256],
      hipB: [197, 153], kneeB: [193, 203], ankleB: [189, 252], toeB: [215, 256],
    },
  ],
  phases: [
    { at: 0, label: "Base · peso pronto para transferir" },
    { at: 0.26, label: "Joelho lateral · a perna sobe dobrada, fora da linha" },
    { at: 0.45, label: "Chicote · pé de apoio pivota e o quadril entrega o golpe" },
    { at: 0.63, label: "Recolhimento · dobra antes de baixar" },
  ],
};

/** YOKO-GERI — joelho cruza o corpo, tronco contrabalança. */
const SEQ_YOKO_GERI: Sequence = {
  duration: 3,
  times: [0, 0.27, 0.46, 0.64, 1],
  frames: [
    {
      ...YOKO_GERI,
      head: [190, 70], neck: [196, 90], spine: [200, 152],
      shoulderA: [202, 98], elbowA: [216, 128], handA: [214, 148],
      shoulderB: [192, 100], elbowB: [184, 128], handB: [198, 148],
      hipA: [208, 152], kneeA: [212, 203], ankleA: [216, 252], toeA: [236, 256],
      hipB: [192, 152], kneeB: [188, 203], ankleB: [184, 252], toeB: [204, 256],
    },
    {
      ...YOKO_GERI,
      head: [178, 78], neck: [186, 98], spine: [198, 155],
      shoulderA: [192, 106], elbowA: [178, 140], handA: [200, 152],
      shoulderB: [182, 106], elbowB: [186, 132], handB: [210, 128],
      hipA: [206, 155], kneeA: [252, 148], ankleA: [230, 192], toeA: [250, 200],
      hipB: [190, 158], kneeB: [186, 205], ankleB: [182, 252], toeB: [162, 256],
    },
    { ...YOKO_GERI },
    {
      ...YOKO_GERI,
      head: [178, 78], neck: [186, 98], spine: [198, 155],
      shoulderA: [192, 106], elbowA: [178, 140], handA: [200, 152],
      shoulderB: [182, 106], elbowB: [186, 132], handB: [210, 128],
      hipA: [206, 155], kneeA: [252, 148], ankleA: [230, 192], toeA: [250, 200],
      hipB: [190, 158], kneeB: [186, 205], ankleB: [182, 252], toeB: [162, 256],
    },
    {
      ...YOKO_GERI,
      head: [190, 70], neck: [196, 90], spine: [200, 152],
      shoulderA: [202, 98], elbowA: [216, 128], handA: [214, 148],
      shoulderB: [192, 100], elbowB: [184, 128], handB: [198, 148],
      hipA: [208, 152], kneeA: [212, 203], ankleA: [216, 252], toeA: [236, 256],
      hipB: [192, 152], kneeB: [188, 203], ankleB: [184, 252], toeB: [204, 256],
    },
  ],
  phases: [
    { at: 0, label: "Base · postura natural, olhar no alvo" },
    { at: 0.27, label: "Joelho cruzado · a perna recolhe à frente do corpo" },
    { at: 0.46, label: "Kekomi · borda do pé (sokutō) e tronco contrabalançando" },
    { at: 0.64, label: "Recolhimento · nunca deixe a perna cair solta" },
  ],
};

/** ASHI-BARAI — varredura rasante no tempo da transferência de peso. */
const SEQ_ASHI_BARAI: Sequence = {
  duration: 2.4,
  times: [0, 0.3, 0.46, 0.64, 1],
  frames: [
    {
      ...ASHI_BARAI,
      hipA: [211, 152], kneeA: [263, 197], ankleA: [269, 252], toeA: [299, 256],
    },
    {
      ...ASHI_BARAI,
      hipA: [210, 154], kneeA: [246, 200], ankleA: [252, 248], toeA: [276, 254],
    },
    { ...ASHI_BARAI },
    {
      ...ASHI_BARAI,
      hipA: [210, 154], kneeA: [246, 200], ankleA: [252, 248], toeA: [276, 254],
    },
    {
      ...ASHI_BARAI,
      hipA: [211, 152], kneeA: [263, 197], ankleA: [269, 252], toeA: [299, 256],
    },
  ],
  phases: [
    { at: 0, label: "Base · aguardando o tempo do oponente" },
    { at: 0.3, label: "Aproximação · o pé desliza rente ao solo" },
    { at: 0.46, label: "Varredura · contato no tornozelo, não na canela" },
    { at: 0.64, label: "Retorno · base recuperada de imediato" },
  ],
};

/** ZENKUTSU-DACHI — formação da base a partir da postura natural. */
const SEQ_ZENKUTSU: Sequence = {
  duration: 3.2,
  times: [0, 0.32, 0.52, 0.78, 1],
  frames: [
    { ...ZENKUTSU_DACHI, ...READY_SIDE, accent: ZENKUTSU_DACHI.accent },
    {
      ...ZENKUTSU_DACHI,
      elbowA: [231, 129], handA: [212, 150], elbowB: [178, 129], handB: [196, 150],
      hipA: [211, 151], kneeA: [220, 202], ankleA: [228, 252], toeA: [252, 256],
      hipB: [197, 151], kneeB: [176, 203], ankleB: [154, 252], toeB: [180, 256],
    },
    { ...ZENKUTSU_DACHI },
    { ...ZENKUTSU_DACHI },
    { ...ZENKUTSU_DACHI, ...READY_SIDE, accent: ZENKUTSU_DACHI.accent },
  ],
  phases: [
    { at: 0, label: "Shizentai · postura natural, peso 50/50" },
    { at: 0.32, label: "Deslocamento · a perna de trás desliza, sem subir o quadril" },
    { at: 0.52, label: "Base formada · 60% à frente, perna de trás estendida" },
    { at: 0.78, label: "Estabilização · calcanhar traseiro colado ao solo" },
  ],
};

/** KIBA-DACHI — abertura simétrica para a base do cavaleiro. */
const SEQ_KIBA: Sequence = {
  duration: 3.2,
  times: [0, 0.32, 0.52, 0.78, 1],
  frames: [
    { ...KIBA_DACHI, ...READY_FRONT, accent: KIBA_DACHI.accent },
    {
      ...KIBA_DACHI,
      hipA: [218, 152], kneeA: [236, 202], ankleA: [240, 252], toeA: [240, 256],
      hipB: [182, 152], kneeB: [164, 202], ankleB: [160, 252], toeB: [160, 256],
    },
    { ...KIBA_DACHI, spine: [200, 156], neck: [200, 90], head: [200, 68] },
    { ...KIBA_DACHI, spine: [200, 156], neck: [200, 90], head: [200, 68] },
    { ...KIBA_DACHI, ...READY_FRONT, accent: KIBA_DACHI.accent },
  ],
  phases: [
    { at: 0, label: "Heiko-dachi · pés paralelos na largura dos ombros" },
    { at: 0.32, label: "Abertura · os pés afastam mantendo o paralelismo" },
    { at: 0.52, label: "Descida · o quadril desce na vertical, joelhos p/ fora" },
    { at: 0.78, label: "Base do cavaleiro · 50/50, coluna perpendicular ao solo" },
  ],
};

/* ═══════════════════════════════════════════════════════════════════════════
 * SÍNTESE AUTOMÁTICA + RESOLUÇÃO
 * ═══════════════════════════════════════════════════════════════════════════ */

/**
 * Gera um ciclo genérico para qualquer pose:
 *   prontidão → técnica → kime sustentado → prontidão
 *
 * Não substitui uma sequência autoral, mas garante que toda técnica do acervo
 * tenha uma demonstração de movimento coerente.
 */
export function buildSequence(pose: Pose): Sequence {
  let start = ready(pose);

  // Bases naturais (Heiko, Hachiji, Musubi…) são quase idênticas à pose de
  // prontidão. Interpolar entre duas poses iguais produz uma animação PARADA —
  // barra de progresso correndo e figura imóvel. Nesses casos partimos da
  // posição de atenção, que é como a base é de fato ensinada (yoi).
  const partindoDoMesmoLugar = poseDistance(start, pose) < 100;
  if (partindoDoMesmoLugar) start = { ...ATTENTION, accent: pose.accent };

  return {
    duration: 2.6,
    times: [0, 0.42, 0.68, 1],
    frames: [start, pose, pose, start],
    phases: partindoDoMesmoLugar
      ? [
          { at: 0, label: "Atenção · pés juntos, braços ao lado do corpo" },
          { at: 0.42, label: "Yoi · abertura para a base" },
          { at: 0.68, label: "Base formada · peso equilibrado e quadril encaixado" },
        ]
      : [
          { at: 0, label: "Prontidão · posição de partida" },
          { at: 0.42, label: "Execução · trajetória até o ponto de foco" },
          { at: 0.68, label: "Kime · contração total no instante do impacto" },
        ],
  };
}

const SEQ_BY_NAME: Record<string, Sequence> = {
  // Socos e golpes
  oizuki: SEQ_OI_ZUKI,
  gyakuzuki: SEQ_GYAKU_ZUKI,
  chokuzuki: SEQ_CHOKU_ZUKI,
  kizamizuki: SEQ_OI_ZUKI,
  kagezuki: SEQ_GYAKU_ZUKI,
  urazuki: SEQ_CHOKU_ZUKI,
  tatezuki: SEQ_CHOKU_ZUKI,
  morotezuki: SEQ_CHOKU_ZUKI,
  urakenuchi: SEQ_URAKEN,
  tettsuiuchi: SEQ_URAKEN,

  // Defesas
  ageuke: SEQ_AGE_UKE,
  gedanbarai: SEQ_GEDAN_BARAI,
  sotouke: SEQ_SOTO_UKE,
  uchiuke: SEQ_UCHI_UKE,
  moroteuke: SEQ_UCHI_UKE,
  nagashiuke: SEQ_SOTO_UKE,
  haishuuke: SEQ_UCHI_UKE,
  osaeuke: SEQ_GEDAN_BARAI,
  sukuiuke: SEQ_GEDAN_BARAI,

  // Chutes
  maegerikeage: SEQ_MAE_GERI,
  maegerikekomi: SEQ_MAE_GERI,
  kingeri: SEQ_MAE_GERI,
  mawashigeri: SEQ_MAWASHI_GERI,
  uramawashigeri: SEQ_MAWASHI_GERI,
  gyakumawashigeri: SEQ_MAWASHI_GERI,
  mikazukigeri: SEQ_MAWASHI_GERI,
  yokogerikeage: SEQ_YOKO_GERI,
  yokogerikekomi: SEQ_YOKO_GERI,
  ashibarai: SEQ_ASHI_BARAI,
  fumikomi: SEQ_ASHI_BARAI,

  // Bases
  zenkutsudachi: SEQ_ZENKUTSU,
  fudodachi: SEQ_ZENKUTSU,
  kibadachi: SEQ_KIBA,
  shikodachi: SEQ_KIBA,
};

/** Resolve a sequência de uma técnica; sintetiza uma se não houver autoral. */
export function resolveSequence(nome: string, pose: Pose): Sequence {
  return SEQ_BY_NAME[normalizeKey(nome)] ?? buildSequence(pose);
}

/** Indica se a técnica possui sequência coreografada à mão. */
export function hasAuthoredSequence(nome: string): boolean {
  return normalizeKey(nome) in SEQ_BY_NAME;
}

/** Fase ativa para um progresso normalizado (0→1) do ciclo. */
export function phaseAt(seq: Sequence, progress: number): MovementPhase {
  let current = seq.phases[0];
  for (const ph of seq.phases) {
    if (progress >= ph.at) current = ph;
  }
  return current;
}
