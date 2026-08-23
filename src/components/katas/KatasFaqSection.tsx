import { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";

export interface FaqItem {
  id: number;
  pergunta: string;
  resposta: string;
  categoria?: string;
}

const FAQ_DATA: FaqItem[] = [
  {
    id: 1,
    pergunta: "Qual a diferença entre as variações Dai e Sho nos Katas?",
    resposta:
      "'Dai' (大) significa maior ou longo, apresentando uma estrutura de movimentos mais ampla, expansiva e focada em potência bruta (ex: Bassai Dai e Kanku Dai). Já 'Sho' (小) significa menor ou curto, enfatizando técnicas mais rápidas, fechadas, esquivas sutis e combate em distância aproximada (ex: Bassai Sho e Kanku Sho).",
    categoria: "Nomenclatura",
  },
  {
    id: 2,
    pergunta: "O que significam as posições de Kiai em um Kata?",
    resposta:
      "O Kiai (気合) representa o ponto máximo de liberação de energia vital, concentração e união da respiração com a musculatura no instante exato do impacto (Kime). Todo Kata possui posições oficiais pré-determinadas para o Kiai (geralmente duas), assinalando os momentos decisivos de neutralização do oponente no combate simulado.",
    categoria: "Execução Técnica",
  },
  {
    id: 3,
    pergunta: "O que é o Bunkai de um Kata?",
    resposta:
      "O Bunkai (分解) é a desconstrução e aplicação real de combate de cada movimento, postura e defesa presentes no Kata. Ele revela como a sequência coreografada se traduz em chaves articulares, projeções, bloqueios de golpes e contragolpes de defesa pessoal na vida real.",
    categoria: "Aplicação Prática",
  },
  {
    id: 4,
    pergunta: "Em qual sequência os 26 Katas do Shotokan são tradicionalmente estudados?",
    resposta:
      "A progressão clássica inicia nos 5 Katas da série Heian (Shodan a Godan), avança para a série Tekki (1 a 3) em base Kiba-dachi, evolui para os Katas Sentei obrigatoriamente exigidos para exames de Faixa Preta (Bassai Dai, Kanku Dai, Jion e Empi), e se expande nos Katas Kaishin superiores como Unsu, Sochin, Nijushiho, Gankaku e Gojushiho.",
    categoria: "Trilha de Estudos",
  },
];

export function KatasFaqSection() {
  const [openId, setOpenId] = useState<number | null>(1); // Primeiro item aberto por padrão

  const toggleFaq = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="bg-white border border-black/10 rounded-sm p-6 lg:p-8 shadow-sm">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-black/10">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-jp-red/10 border border-jp-red/20 flex items-center justify-center text-jp-red shrink-0">
            <HelpCircle size={24} />
          </div>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-jp-red">
              Perguntas Frequentes
            </span>
            <h2 className="font-jp-serif text-2xl lg:text-3xl font-bold text-jp-ink mt-0.5">
              Dúvidas Comuns sobre os Katas & Kihon
            </h2>
          </div>
        </div>

        <span className="text-xs text-black/50 bg-jp-paper border border-black/5 px-3 py-1.5 rounded-sm font-medium self-start md:self-auto">
          Respostas dos Mestres
        </span>
      </div>

      {/* Accordion List */}
      <div className="mt-6 divide-y divide-black/10 border-b border-black/10">
        {FAQ_DATA.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div key={item.id} className="py-4">
              <button
                type="button"
                onClick={() => toggleFaq(item.id)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${item.id}`}
                className="w-full flex items-center justify-between text-left gap-4 cursor-pointer group focus:outline-none"
              >
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-jp-paper text-jp-red font-jp-serif font-bold text-xs flex items-center justify-center border border-black/5 shrink-0 group-hover:bg-jp-red group-hover:text-white transition-colors">
                    {item.id}
                  </span>
                  <span className="font-jp-serif text-base lg:text-lg font-bold text-jp-ink group-hover:text-jp-red transition-colors">
                    {item.pergunta}
                  </span>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  {item.categoria && (
                    <span className="text-[10px] uppercase font-semibold text-black/50 bg-black/5 px-2 py-0.5 rounded-full hidden sm:inline-block">
                      {item.categoria}
                    </span>
                  )}
                  <div
                    className={`w-7 h-7 rounded-full bg-black/5 flex items-center justify-center text-black/60 group-hover:bg-jp-red/10 group-hover:text-jp-red transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-jp-red/10 text-jp-red" : ""
                    }`}
                  >
                    <ChevronDown size={16} />
                  </div>
                </div>
              </button>

              {/* Resposta Expansível */}
              {isOpen && (
                <div
                  id={`faq-answer-${item.id}`}
                  className="mt-3 pl-9 pr-4 text-xs sm:text-sm text-black/80 leading-relaxed font-medium bg-jp-paper/60 p-4 rounded-sm border border-black/5 animate-fade-in"
                >
                  {item.resposta}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
