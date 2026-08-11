import { useState } from "react";
import { Reveal } from "@/components/Reveal";

interface MestreNode {
  nome: string;
  papel: string;
  org?: string;
  foco?: string;
  linhagem?: string;
  hover: string;
  subNodes?: MestreNode[];
}

const ARVORE_DATA: MestreNode = {
  nome: 'Sokon "Bushi" Matsumura',
  papel: 'Pai do Shuri-te',
  hover: 'Grande mestre de Okinawa (séc. XIX). Guarda-costas real da dinastia Ryukyu.',
  subNodes: [
    {
      nome: "Anko Asato",
      papel: "Mestre de Shuri-te",
      hover: "Especialista em combate real e esgrima Jigen-ryu.",
      subNodes: [
        {
          nome: "Gichin Funakoshi",
          papel: "Criador do Karate Shotokan",
          hover: "Pai do Karatê moderno. Levou o karatê de Okinawa para o Japão em 1922.",
          subNodes: [
            {
              nome: "Yoshitaka Funakoshi",
              papel: "Inovação Técnica",
              hover: "Desenvolveu o kumite moderno, bases longas e chutes altos.",
              subNodes: [
                {
                  nome: "Taiji Kase",
                  papel: "Kase Ha / WKSA",
                  org: "WKSA",
                  foco: "Aplicação prática e combate real",
                  hover: "Pioneiro na Europa. Defendia um karatê marcial e explosivo.",
                },
              ],
            },
            {
              nome: "Isao Obata",
              papel: "1º Pres. JKA",
              hover: "Organizou a estrutura inicial da Japan Karate Association.",
              subNodes: [
                {
                  nome: "Tsutomu Ohshima",
                  papel: "Fundador SKA",
                  org: "SKA",
                  foco: "Preservação fiel do Karate pré-JKA",
                  hover: "Introduziu o Shotokan nos EUA na década de 1950.",
                },
              ],
            },
            {
              nome: "Masatoshi Nakayama",
              papel: "Mestre-Chefe JKA",
              hover: "Criou o curso de instrutores da JKA e expandiu o estilo mundialmente.",
              subNodes: [
                {
                  nome: "Hirokazu Kanazawa",
                  papel: "Mestre SKIF",
                  org: "SKIF",
                  foco: "Fluidez, Tai Chi, Kata e saúde",
                  hover: "Lendário campeão e difusor global da SKIF.",
                },
                {
                  nome: "Keinosuke Enoeda",
                  papel: "O Tigre JKA",
                  org: "KUGB",
                  foco: "Kumite feroz e expansão na Europa",
                  hover: "Pioneiro absoluto do Shotokan no Reino Unido.",
                },
                {
                  nome: "Tetsuhiko Asai",
                  papel: "Mestre JKS",
                  org: "JKS",
                  foco: "Movimentos circulares e katas flexíveis",
                  hover: "Famoso pela extrema fluidez e movimentos de chicote.",
                },
                {
                  nome: "Teruyuki Okazaki",
                  papel: "Fundador ISKF",
                  org: "ISKF",
                  foco: "Padronização técnica nas Américas",
                  hover: "Liderou a expansão da ISKF.",
                  subNodes: [
                    {
                      nome: "Juichi Sagara / Y. Tanaka",
                      papel: "Pioneiros JKA no Brasil",
                      org: "JKA Brasil",
                      foco: "Introdução do Shotokan no Brasil",
                      hover: "Troxeram a instrução oficial da JKA para a América do Sul.",
                      subNodes: [
                        {
                          nome: "Sensei Edson Nakama",
                          papel: "7º/8º Dan FPK/CBK",
                          org: "Dojo Nakama",
                          foco: "Tradição Budo + Formação de Elite",
                          hover: "Referência nacional em Budo e karatê competitivo.",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              nome: "Hidetaka Nishiyama",
              papel: "Co-fundador ITKF",
              org: "ITKF",
              foco: "Karate Tradicional como Budo",
              hover: "Líder mundial do Karatê Tradicional (ITKF).",
            },
          ],
        },
      ],
    },
    {
      nome: "Anko Itosu",
      papel: "Sistematizador das Escolas",
      hover: "Criador dos katas Heian/Pinan para a educação escolar em Okinawa.",
    },
  ],
};

const TABELA_GENEALOGICA = [
  { mestre: "Tsutomu Ohshima", linhagem: "Isao Obata / Funakoshi", org: "SKA (Shotokan Karate of America)", foco: "Preservação fiel do Karate pré-JKA" },
  { mestre: "Hidetaka Nishiyama", linhagem: "Funakoshi / JKA", org: "ITKF", foco: "Karate Tradicional como Budo (Ikken Hissatsu)" },
  { mestre: "Hirokazu Kanazawa", linhagem: "Nakayama / Nishiyama", org: "SKIF", foco: "Fluidez, Tai Chi, Kata e saúde" },
  { mestre: "Taiji Kase", linhagem: "Yoshitaka / Nakayama", org: "Kase Ha (WKSA)", foco: "Aplicação prática, força e combate real" },
  { mestre: "Teruyuki Okazaki", linhagem: "Nakayama / JKA", org: "ISKF", foco: "Padronização técnica e expansão pan-americana" },
  { mestre: "Tetsuhiko Asai", linhagem: "Nakayama / JKA", org: "JKS", foco: "Movimentos circulares e Katas flexíveis" },
  { mestre: "Mikio Yahara", linhagem: "Nakayama / JKA", org: "KWF", foco: '"One Hit Kill" / Biomecânica extrema' },
  { mestre: "Sagara / Tanaka", linhagem: "Nakayama / JKA", org: "JKA Brasil / ASK", foco: "Introdução e consolidação do Shotokan no Brasil" },
  { mestre: "Edson Nakama", linhagem: "Sagara / Tanaka / CBK", org: "Dojo Nakama / FPK", foco: "Tradição Budo + Formação de atletas de elite" },
];

function MestreCard({ node }: { node: MestreNode }) {
  const [showHover, setShowHover] = useState(false);

  return (
    <div className="flex flex-col items-center">
      <div
        className="relative bg-white border border-jp-red/30 hover:border-jp-red p-3 rounded-sm shadow-sm cursor-pointer min-w-[160px] text-center transition-all hover:-translate-y-1"
        onMouseEnter={() => setShowHover(true)}
        onMouseLeave={() => setShowHover(false)}
      >
        <div className="font-jp-serif font-bold text-sm text-jp-ink">{node.nome}</div>
        <div className="text-[10px] text-jp-red uppercase tracking-wider">{node.papel}</div>
        {node.org && <div className="text-[9px] bg-jp-ink text-jp-gold px-1.5 py-0.5 rounded mt-1 inline-block">{node.org}</div>}

        {/* Hover Tooltip */}
        {showHover && (
          <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-48 p-2.5 bg-jp-ink text-white text-xs rounded shadow-xl z-30 pointer-events-none">
            <div className="font-bold text-jp-gold text-[11px] mb-1">{node.nome}</div>
            <div className="text-[10px] text-white/80 leading-tight">{node.hover}</div>
            {node.foco && <div className="text-[9px] text-jp-red mt-1 border-t border-white/10 pt-1">Foco: {node.foco}</div>}
          </div>
        )}
      </div>

      {node.subNodes && node.subNodes.length > 0 && (
        <div className="flex flex-col items-center mt-3">
          <div className="w-px h-4 bg-jp-red/40" />
          <div className="flex flex-wrap justify-center gap-4 pt-2 border-t border-jp-red/30">
            {node.subNodes.map((sub, idx) => (
              <MestreCard key={idx} node={sub} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function Linhagem() {
  return (
    <div className="page-anim">
      <section className="relative bg-jp-ink text-white py-24 overflow-hidden">
        <div className="kanji-watermark" style={{ fontSize: 520, right: -60, top: -100, color: "rgba(188,0,45,0.1)" }}>系譜</div>
        <div className="max-w-5xl mx-auto px-5 lg:px-8 relative">
          <div className="text-jp-red tracking-widest uppercase text-xs">Keifu</div>
          <h1 className="font-jp-serif text-5xl md:text-6xl mt-2">Árvore Genealógica dos Mestres</h1>
          <p className="text-white/70 mt-4 max-w-2xl leading-relaxed">
            A linhagem direta do Karatê Shotokan — de Sokon Matsumura em Okinawa aos mestres que difundiram a arte no Brasil e no mundo.
          </p>
        </div>
      </section>

      {/* Árvore Visual */}
      <section className="py-16 bg-jp-paper overflow-x-auto">
        <div className="max-w-7xl mx-auto px-5 min-w-[700px]">
          <Reveal>
            <div className="text-center mb-10">
              <span className="text-jp-red text-xs uppercase tracking-widest">Hierarquia Histórica</span>
              <h2 className="font-jp-serif text-3xl mt-1">Árvore de Transmissão</h2>
              <p className="text-xs text-black/50 mt-1">Passe o mouse sobre qualquer mestre para ver seus detalhes.</p>
              <div className="sumi-divider max-w-xs mx-auto mt-3" />
            </div>
          </Reveal>

          <div className="flex justify-center py-6">
            <MestreCard node={ARVORE_DATA} />
          </div>
        </div>
      </section>

      {/* Tabela Responsiva */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <Reveal>
            <div className="mb-8">
              <span className="text-jp-red text-xs uppercase tracking-widest">Resumo Técnico</span>
              <h2 className="font-jp-serif text-3xl mt-1">Tabela de Linhagem Direta</h2>
              <div className="sumi-divider max-w-xs mt-3" />
            </div>
          </Reveal>

          <div className="overflow-x-auto border border-black/10 rounded-sm">
            <table className="w-full text-left text-xs">
              <thead className="bg-jp-ink text-white font-jp-serif">
                <tr>
                  <th className="p-3.5 border-b border-white/10">Mestre Líder</th>
                  <th className="p-3.5 border-b border-white/10">Linhagem Direta</th>
                  <th className="p-3.5 border-b border-white/10">Organização Criada</th>
                  <th className="p-3.5 border-b border-white/10">Foco Principal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/5">
                {TABELA_GENEALOGICA.map((row, i) => (
                  <tr key={i} className="hover:bg-jp-paper transition-colors">
                    <td className="p-3.5 font-bold font-jp-serif text-jp-ink">{row.mestre}</td>
                    <td className="p-3.5 text-black/70">{row.linhagem}</td>
                    <td className="p-3.5 text-jp-red font-medium">{row.org}</td>
                    <td className="p-3.5 text-black/80">{row.foco}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Linhagem;
