import { Reveal } from "@/components/ui/Reveal";

interface MestreNode {
  nome: string;
  papel: string;
  org?: string;
  foco?: string;
  descricao: string;
  subNodes?: MestreNode[];
}

const ARVORE_DATA: MestreNode = {
  nome: 'Sokon "Bushi" Matsumura',
  papel: "Pai do Shuri-te",
  descricao: "Grande mestre de Okinawa do século XIX e guarda-costas real da dinastia Ryukyu.",
  subNodes: [
    {
      nome: "Anko Asato",
      papel: "Mestre de Shuri-te",
      descricao: "Especialista em combate real e esgrima Jigen-ryu.",
      subNodes: [
        {
          nome: "Gichin Funakoshi",
          papel: "Criador do Karate Shotokan",
          descricao: "Pai do karatê moderno; levou a arte de Okinawa ao Japão em 1922.",
          subNodes: [
            { nome: "Yoshitaka Funakoshi", papel: "Inovação técnica", descricao: "Desenvolveu o kumite moderno, bases longas e chutes altos.", subNodes: [{ nome: "Taiji Kase", papel: "Kase Ha / WKSA", org: "WKSA", foco: "Aplicação prática e combate real", descricao: "Pioneiro na Europa, defensor de um karatê marcial e explosivo." }] },
            { nome: "Isao Obata", papel: "1º presidente da JKA", descricao: "Organizou a estrutura inicial da Japan Karate Association.", subNodes: [{ nome: "Tsutomu Ohshima", papel: "Fundador da SKA", org: "SKA", foco: "Preservação fiel do Karate pré-JKA", descricao: "Introduziu o Shotokan nos Estados Unidos na década de 1950." }] },
            {
              nome: "Masatoshi Nakayama", papel: "Mestre-chefe da JKA", descricao: "Criou o curso de instrutores da JKA e expandiu o estilo mundialmente.", subNodes: [
                { nome: "Hirokazu Kanazawa", papel: "Mestre da SKIF", org: "SKIF", foco: "Fluidez, Tai Chi, kata e saúde", descricao: "Lendário campeão e difusor global da SKIF." },
                { nome: "Keinosuke Enoeda", papel: "O Tigre da JKA", org: "KUGB", foco: "Kumite feroz e expansão na Europa", descricao: "Pioneiro do Shotokan no Reino Unido." },
                { nome: "Tetsuhiko Asai", papel: "Mestre da JKS", org: "JKS", foco: "Movimentos circulares e katas flexíveis", descricao: "Conhecido pela fluidez e pelos movimentos de chicote." },
                { nome: "Teruyuki Okazaki", papel: "Fundador da ISKF", org: "ISKF", foco: "Padronização técnica nas Américas", descricao: "Liderou a expansão da ISKF.", subNodes: [{ nome: "Juichi Sagara / Y. Tanaka", papel: "Pioneiros da JKA no Brasil", org: "JKA Brasil", foco: "Introdução do Shotokan no Brasil", descricao: "Trouxeram a instrução oficial da JKA para a América do Sul.", subNodes: [{ nome: "Sensei Edson Nakama", papel: "7º/8º Dan FPK/CBK", org: "Dojo Nakama", foco: "Tradição Budo + formação de elite", descricao: "Referência nacional em budô e karatê competitivo." }] }] },
              ],
            },
            { nome: "Hidetaka Nishiyama", papel: "Cofundador da ITKF", org: "ITKF", foco: "Karate tradicional como budô", descricao: "Líder mundial do karatê tradicional." },
          ],
        },
      ],
    },
    { nome: "Anko Itosu", papel: "Sistematizador das escolas", descricao: "Criador dos katas Heian/Pinan para a educação escolar em Okinawa." },
  ],
};

const TABELA_GENEALOGICA = [
  { mestre: "Tsutomu Ohshima", linhagem: "Isao Obata / Funakoshi", org: "SKA (Shotokan Karate of America)", foco: "Preservação fiel do Karate pré-JKA" },
  { mestre: "Hidetaka Nishiyama", linhagem: "Funakoshi / JKA", org: "ITKF", foco: "Karate tradicional como budô (Ikken Hissatsu)" },
  { mestre: "Hirokazu Kanazawa", linhagem: "Nakayama / Nishiyama", org: "SKIF", foco: "Fluidez, Tai Chi, kata e saúde" },
  { mestre: "Taiji Kase", linhagem: "Yoshitaka / Nakayama", org: "Kase Ha (WKSA)", foco: "Aplicação prática, força e combate real" },
  { mestre: "Teruyuki Okazaki", linhagem: "Nakayama / JKA", org: "ISKF", foco: "Padronização técnica e expansão pan-americana" },
  { mestre: "Tetsuhiko Asai", linhagem: "Nakayama / JKA", org: "JKS", foco: "Movimentos circulares e katas flexíveis" },
  { mestre: "Mikio Yahara", linhagem: "Nakayama / JKA", org: "KWF", foco: '"One Hit Kill" / biomecânica extrema' },
  { mestre: "Sagara / Tanaka", linhagem: "Nakayama / JKA", org: "JKA Brasil / ASK", foco: "Introdução e consolidação do Shotokan no Brasil" },
  { mestre: "Edson Nakama", linhagem: "Sagara / Tanaka / CBK", org: "Dojo Nakama / FPK", foco: "Tradição budô + formação de atletas de elite" },
];

function MestreNodeView({ node, isLast = true, isRoot = false }: { node: MestreNode; isLast?: boolean; isRoot?: boolean }) {
  return (
    <li className={`relative ${isRoot ? "" : "pl-7 md:pl-9"}`}>
      {!isRoot && <span className="absolute left-0 top-0 h-8 w-5 md:w-7 border-b-2 border-l-2 border-jp-red/35" />}
      {!isRoot && !isLast && <span className="absolute left-0 top-0 bottom-0 border-l-2 border-jp-red/35" />}
      <article className="max-w-2xl rounded-sm border border-jp-red/20 bg-white p-4 shadow-sm">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <div>
            <h3 className="font-jp-serif text-lg text-jp-ink">{node.nome}</h3>
            <p className="text-[11px] uppercase tracking-wider text-jp-red">{node.papel}</p>
          </div>
          {node.org && <span className="rounded bg-jp-ink px-2 py-1 text-[10px] font-medium text-jp-gold">{node.org}</span>}
        </div>
        <p className="mt-2 text-sm leading-relaxed text-black/65">{node.descricao}</p>
        {node.foco && <p className="mt-2 border-t border-black/5 pt-2 text-xs text-black/55"><strong className="text-jp-ink">Foco:</strong> {node.foco}</p>}
      </article>
      {node.subNodes && (
        <ul className="mt-4 space-y-4">
          {node.subNodes.map((sub, index) => <MestreNodeView key={sub.nome} node={sub} isLast={index === node.subNodes!.length - 1} />)}
        </ul>
      )}
    </li>
  );
}

export function LinhagemContent() {
  return (
    <>
      <section className="bg-jp-paper py-24">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <Reveal>
            <div className="mb-12 text-center">
              <span className="text-xs uppercase tracking-widest text-jp-red">Keifu · 系譜</span>
              <h2 className="mt-1 font-jp-serif text-3xl">Árvore de transmissão</h2>
              <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-black/60">A transmissão do Shotokan, de Okinawa aos mestres que ajudaram a difundir a arte no Brasil e no mundo.</p>
              <div className="sumi-divider mx-auto mt-4 max-w-xs" />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="overflow-x-auto pb-2">
              <div className="min-w-[340px] rounded-sm border border-black/5 bg-white/50 p-5 md:p-7">
                <ul><MestreNodeView node={ARVORE_DATA} isRoot /></ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <Reveal>
            <div className="mb-8">
              <span className="text-xs uppercase tracking-widest text-jp-red">Resumo técnico</span>
              <h2 className="mt-1 font-jp-serif text-3xl">Tabela de linhagem direta</h2>
              <div className="sumi-divider mt-3 max-w-xs" />
            </div>
          </Reveal>
          <div className="overflow-x-auto rounded-sm border border-black/10">
            <table className="min-w-[760px] w-full text-left text-xs">
              <thead className="bg-jp-ink font-jp-serif text-white"><tr><th className="p-3.5">Mestre líder</th><th className="p-3.5">Linhagem direta</th><th className="p-3.5">Organização criada</th><th className="p-3.5">Foco principal</th></tr></thead>
              <tbody className="divide-y divide-black/5">{TABELA_GENEALOGICA.map((row) => <tr key={row.mestre} className="transition-colors hover:bg-jp-paper"><td className="p-3.5 font-jp-serif font-bold text-jp-ink">{row.mestre}</td><td className="p-3.5 text-black/70">{row.linhagem}</td><td className="p-3.5 font-medium text-jp-red">{row.org}</td><td className="p-3.5 text-black/80">{row.foco}</td></tr>)}</tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
