import { useState } from "react";
import { ChevronRight, Sparkles } from "lucide-react";

export interface FaixaItem {
  cor: string;
  nome: string;
  kyu: string;
  hex: string;
  textHex?: string;
  borderHex?: string;
  katasRequisito: string[];
  focoTreino: string;
}

const FAIXAS_DATA: FaixaItem[] = [
  {
    cor: "Branca",
    nome: "Branca",
    kyu: "9º Kyu",
    hex: "#FFFFFF",
    textHex: "#1A1A1A",
    borderHex: "#D1D5DB",
    katasRequisito: ["Heian Shodan"],
    focoTreino: "Postura inicial, alinhamento de Zenkutsu-dachi e bloqueios básicos (Gedan Barai, Age Uke).",
  },
  {
    cor: "Amarela",
    nome: "Amarela",
    kyu: "8º / 7º Kyu",
    hex: "#EAB308",
    textHex: "#713F12",
    katasRequisito: ["Heian Nidan"],
    focoTreino: "Introdução de chutes laterais (Yoko Geri), golpes de mão aberta e troca fluida de bases.",
  },
  {
    cor: "Vermelha",
    nome: "Vermelha",
    kyu: "6º Kyu",
    hex: "#DC2626",
    textHex: "#FFFFFF",
    katasRequisito: ["Heian Sandan"],
    focoTreino: "Defesas em Kiba-dachi, contra-ataques em rotação e técnicas de cotovelo e bloqueios duplos.",
  },
  {
    cor: "Laranja",
    nome: "Laranja",
    kyu: "5º Kyu",
    hex: "#EA580C",
    textHex: "#FFFFFF",
    katasRequisito: ["Heian Yondan"],
    focoTreino: "Combinação de chutes frontais e laterais saltados, coordenação de braços e ritmo dinâmico.",
  },
  {
    cor: "Verde",
    nome: "Verde",
    kyu: "4º Kyu",
    hex: "#16A34A",
    textHex: "#FFFFFF",
    katasRequisito: ["Heian Godan"],
    focoTreino: "Salto (Tobi-komi), mudança de nível corporal, esquivas e consolidação da série Heian.",
  },
  {
    cor: "Roxa",
    nome: "Roxa",
    kyu: "3º Kyu",
    hex: "#9333EA",
    textHex: "#FFFFFF",
    katasRequisito: ["Tekki Shodan"],
    focoTreino: "Postura Kiba-dachi contínua, potência de quadril sem movimento de pés e combate aproximado.",
  },
  {
    cor: "Marrom",
    nome: "Marrom",
    kyu: "2º / 1º Kyu",
    hex: "#78350F",
    textHex: "#FFFFFF",
    katasRequisito: ["Bassai Dai", "Kanku Dai", "Jion", "Empi"],
    focoTreino: "Domínio dos Katas Sentei para exame de Shodan, forte Kime, velocidade explosiva e Bunkai.",
  },
  {
    cor: "Preta",
    nome: "Preta (Shodan+)",
    kyu: "1º Dan +",
    hex: "#0D0D0D",
    textHex: "#D4AF37",
    borderHex: "#D4AF37",
    katasRequisito: ["Hangetsu", "Gankaku", "Jitte", "Sochin", "Nijushiho", "Unsu", "Gojushiho"],
    focoTreino: "Aperfeiçoamento filosófico e técnico de todos os 26 Katas, variações Tokui e maestria do Bunkai.",
  },
];

export function ProgressaoFaixasTimeline() {
  const [selectedFaixaIndex, setSelectedFaixaIndex] = useState<number>(0);
  const faixaSelecionada = FAIXAS_DATA[selectedFaixaIndex];

  return (
    <div className="bg-white border border-black/10 rounded-sm p-6 lg:p-8 shadow-sm">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-black/10">
        <div>
          <h2 className="font-jp-serif text-2xl lg:text-3xl font-bold text-jp-ink mt-1">
            Progressão de Katas por Faixa (Kyu & Dan)
          </h2>
          <p className="text-xs sm:text-sm text-black/60 mt-1">
            Veja a evolução recomendada dos Katas ao longo do caminho de graduações no Shotokan.
          </p>
        </div>

        <span className="text-xs text-black/50 bg-jp-paper border border-black/5 px-3 py-1.5 rounded-sm font-medium self-start md:self-auto">
          Sistema Kyu/Dan Oficial
        </span>
      </div>

      {/* Trilha de Faixas Interativa */}
      <div className="mt-6">
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none" role="tablist" aria-label="Linha do tempo de faixas">
          {FAIXAS_DATA.map((faixa, idx) => {
            const isSelected = selectedFaixaIndex === idx;
            return (
              <button
                key={faixa.nome}
                role="tab"
                aria-selected={isSelected}
                onClick={() => setSelectedFaixaIndex(idx)}
                className={`flex items-center gap-2 px-3.5 py-2.5 rounded-sm transition-all cursor-pointer shrink-0 border ${
                  isSelected
                    ? "ring-2 ring-jp-red scale-105 shadow-md font-bold"
                    : "hover:scale-102 border-black/10 shadow-2xs opacity-80 hover:opacity-100"
                }`}
                style={{
                  backgroundColor: faixa.hex,
                  color: faixa.textHex || "#FFFFFF",
                  borderColor: faixa.borderHex || faixa.hex,
                }}
              >
                <div
                  className="w-3 h-3 rounded-full border border-black/20 shrink-0"
                  style={{ backgroundColor: faixa.hex === "#FFFFFF" ? "#E5E7EB" : "#FFFFFF" }}
                />
                <div className="text-left leading-tight">
                  <div className="text-xs font-bold">{faixa.nome}</div>
                  <div className="text-[10px] opacity-90 font-mono">{faixa.kyu}</div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Card Detalhado da Faixa Selecionada */}
        <div className="mt-6 bg-jp-paper border border-black/10 rounded-sm p-6 shadow-2xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-black/10">
            <div className="flex items-center gap-3">
              <div
                className="w-8 h-8 rounded-full border-2 border-black/20 flex items-center justify-center shadow-xs shrink-0"
                style={{
                  backgroundColor: faixaSelecionada.hex,
                  borderColor: faixaSelecionada.borderHex || "#00000020",
                }}
              />
              <div>
                <span className="text-xs text-black/50 font-mono uppercase tracking-wider font-semibold">
                  Graduação: {faixaSelecionada.kyu}
                </span>
                <h3 className="font-jp-serif text-xl font-bold text-jp-ink">
                  Faixa {faixaSelecionada.nome}
                </h3>
              </div>
            </div>

            <span className="text-xs font-semibold text-jp-red bg-jp-red/10 border border-jp-red/20 px-3 py-1 rounded-full self-start md:self-auto">
              {faixaSelecionada.katasRequisito.length} Kata(s) Requisito(s)
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
            {/* Katas Exigidos */}
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-jp-red flex items-center gap-1 mb-2">
                <Sparkles size={13} /> Katas de Estudo & Exame:
              </span>
              <div className="flex flex-wrap gap-2">
                {faixaSelecionada.katasRequisito.map((kataName) => (
                  <span
                    key={kataName}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-black/10 text-xs font-bold text-jp-ink rounded-sm shadow-2xs"
                  >
                    <ChevronRight size={14} className="text-jp-red" />
                    {kataName}
                  </span>
                ))}
              </div>
            </div>

            {/* Foco de Treino */}
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-black/50 block mb-1">
                Foco Técnico & Biomecânico:
              </span>
              <p className="text-xs sm:text-sm text-black/80 leading-relaxed font-medium">
                {faixaSelecionada.focoTreino}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
