import { useState } from "react";
import { BookOpen, Footprints, Target, Zap } from "lucide-react";

export interface TermoItem {
  nome: string;
  kanji: string;
  traducao: string;
  descricao: string;
  destaque?: string;
}

export interface CategoriaGlossario {
  id: "bases" | "alturas" | "golpes";
  titulo: string;
  subtitulo: string;
  icon: typeof Footprints;
  termos: TermoItem[];
}

const GLOSSARIO_DATA: CategoriaGlossario[] = [
  {
    id: "bases",
    titulo: "Bases & Posturas (Dachi)",
    subtitulo: "Fundamentos de estabilidade, equilíbrio e transferência de potência",
    icon: Footprints,
    termos: [
      {
        nome: "Zenkutsu-dachi",
        kanji: "前屈立ち",
        traducao: "Base Frontal Longa",
        descricao: "Postura ofensiva clássica do Shotokan. 60% do peso repousa sobre a perna da frente flexionada, enquanto a perna de trás permanece estendida e o quadril direcionado à frente.",
        destaque: "60% frente / 40% trás",
      },
      {
        nome: "Kokutsu-dachi",
        kanji: "後屈立ち",
        traducao: "Base Recuada",
        descricao: "Postura defensiva por excelência. 70% do peso mantido na perna de trás com o joelho flexionado para fora. Permite esquivar rapidamente e contra-atacar com a perna da frente.",
        destaque: "70% trás / 30% frente",
      },
      {
        nome: "Kiba-dachi",
        kanji: "騎馬立ち",
        traducao: "Base do Cavaleiro",
        descricao: "Postura lateral profunda com pés paralelos e joelhos apontando para fora. Distribuição equilibrada (50/50), forjando força extrema nas coxas e estabilidade lateral.",
        destaque: "50% frente / 50% trás",
      },
    ],
  },
  {
    id: "alturas",
    titulo: "Alturas de Ataque & Alvos",
    subtitulo: "Divisão corporal anatômica para aplicação técnica precisa",
    icon: Target,
    termos: [
      {
        nome: "Jōdan (Alto)",
        kanji: "上段",
        traducao: "Nível do Rosto & Cabeça",
        descricao: "Compreende toda a região acima do pescoço (queixo, têmporas, nariz e olhos). Exige precisão e controle milimétrico do impacto.",
        destaque: "Cabeça & Pescoço",
      },
      {
        nome: "Chūdan (Médio)",
        kanji: "中段",
        traducao: "Nível do Tronco & Peito",
        descricao: "Zona intermediária compreendida entre o pescoço e a cintura (plexo solar, costelas e abdômen). Alvo primário para socos profundos e contra-ataques.",
        destaque: "Tórax & Abdômen",
      },
      {
        nome: "Gedan (Baixo)",
        kanji: "下段",
        traducao: "Nível Baixo / Abaixo da Cintura",
        descricao: "Região inferior do corpo (virilha, coxas, joelhos e canelas). Usada fundamentalmente para defesas descendentes (Gedan Barai) e varreduras.",
        destaque: "Cintura & Pernas",
      },
    ],
  },
  {
    id: "golpes",
    titulo: "Tipos de Golpe (Waza)",
    subtitulo: "Classificação fundamental dos ataques e defesas do Karatê",
    icon: Zap,
    termos: [
      {
        nome: "Tsuki / Zuki",
        kanji: "突き",
        traducao: "Soco Direto",
        descricao: "Ataque linear executado com rotação explosiva do punho no momento final do impacto (Kime). Exemplos: Oi-zuki (com avanço) e Gyaku-zuki (inverso).",
        destaque: "Impacto Linear",
      },
      {
        nome: "Uke",
        kanji: "受け",
        traducao: "Defesa / Bloqueio",
        descricao: "Movimento de desvio ou interceptação do ataque inimigo usando antebraços ou mãos abertas. Uma boa defesa constrói a abertura imediata do contra-ataque.",
        destaque: "Proteção & Desvio",
      },
      {
        nome: "Geri",
        kanji: "蹴り",
        traducao: "Chute / Golpe de Perna",
        descricao: "Técnica de perna utilizando diferentes áreas do pé (koshi/bola do pé, sokuto/borda externa, kakato/calcanhar). Ex: Mae-geri, Mawashi-geri e Yoko-geri.",
        destaque: "Alcance Longo",
      },
      {
        nome: "Uchi",
        kanji: "打ち",
        traducao: "Golpe de Impacto / Chicote",
        descricao: "Ataques circulares ou em formato de chicote usando o cutelo da mão (Shuto-uchi), dorso do punho (Uraken) ou cotovelos (Empi-uchi).",
        destaque: "Trajetória Curva",
      },
    ],
  },
];

export function GlossarioTerminologia() {
  const [activeTabId, setActiveTabId] = useState<"bases" | "alturas" | "golpes">("bases");

  const categoriaAtiva = GLOSSARIO_DATA.find((c) => c.id === activeTabId) || GLOSSARIO_DATA[0];

  return (
    <div className="bg-white border border-black/10 rounded-sm p-6 lg:p-8 shadow-sm">
      {/* Cabeçalho do Glossário */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-black/10">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-jp-red/10 border border-jp-red/20 flex items-center justify-center text-jp-red shrink-0">
            <BookOpen size={24} />
          </div>
          <div>
            <h2 className="font-jp-serif text-2xl lg:text-3xl font-bold text-jp-ink mt-0.5">
              Conceitos Fundamentais do Shotokan
            </h2>
          </div>
        </div>

        <span className="text-xs text-black/50 bg-jp-paper border border-black/5 px-3 py-1.5 rounded-sm font-medium self-start md:self-auto">
          Nomenclatura Técnica Oficial em Japonês
        </span>
      </div>

      {/* Tabs de Seleção de Categoria */}
      <div
        className="flex items-center gap-2 border-b border-black/10 mt-6 overflow-x-auto scrollbar-none pb-px"
        role="tablist"
        aria-label="Categorias da terminologia do Karatê"
      >
        {GLOSSARIO_DATA.map((cat) => {
          const IconComponent = cat.icon;
          const isActive = cat.id === activeTabId;
          return (
            <button
              key={cat.id}
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${cat.id}`}
              onClick={() => setActiveTabId(cat.id)}
              className={`flex items-center gap-2 px-4 py-3 text-xs sm:text-sm font-semibold transition-all border-b-2 cursor-pointer whitespace-nowrap ${
                isActive
                  ? "border-jp-red text-jp-red bg-jp-red/5 font-bold"
                  : "border-transparent text-black/60 hover:text-black hover:border-black/20"
              }`}
            >
              <IconComponent size={16} className={isActive ? "text-jp-red" : "text-black/40"} />
              <span>{cat.titulo}</span>
            </button>
          );
        })}
      </div>

      {/* Painel do Glossário Selecionado */}
      <div
        id={`panel-${categoriaAtiva.id}`}
        role="tabpanel"
        className="mt-6 space-y-4 animate-fade-in"
      >
        <p className="text-xs sm:text-sm text-black/60 italic mb-4">
          {categoriaAtiva.subtitulo}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {categoriaAtiva.termos.map((termo) => (
            <div
              key={termo.nome}
              className="bg-jp-paper border border-black/5 p-5 rounded-sm flex flex-col justify-between hover:border-jp-red/30 transition-all hover:shadow-xs group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2 pb-2 border-b border-black/5">
                  <span className="font-jp-serif text-lg font-bold text-jp-ink group-hover:text-jp-red transition-colors">
                    {termo.nome}
                  </span>
                  <span className="font-jp-serif text-xl font-bold text-jp-red shrink-0">
                    {termo.kanji}
                  </span>
                </div>

                <div className="text-xs font-semibold text-jp-gold mb-2">
                  {termo.traducao}
                </div>

                <p className="text-xs text-black/75 leading-relaxed font-medium">
                  {termo.descricao}
                </p>
              </div>

              {termo.destaque && (
                <div className="mt-4 pt-3 border-t border-black/5 flex items-center justify-between text-[11px]">
                  <span className="font-mono text-black/50">Recurso-chave:</span>
                  <span className="font-bold text-jp-red bg-white px-2 py-0.5 rounded-xs border border-black/10 shadow-2xs">
                    {termo.destaque}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
