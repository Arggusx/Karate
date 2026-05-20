import { Reveal } from "../Reveal";
import { BENEFICIOS } from "../data";

const DEPOIMENTOS = [
  { nome: "Ana, 34", antes: "Sedentária, ansiosa.", depois: "Faixa azul, 3x/semana. Dorme melhor, foca mais." },
  { nome: "Hiroshi, 58", antes: "Estresse no trabalho.", depois: "Encontrou o silêncio no kata. Voltou a sorrir." },
  { nome: "Lucas, 9", antes: "Tímido na escola.", depois: "Mais confiante e respeitoso com colegas." },
];

export function BeneficiosPage() {
  return (
    <div className="page-anim">
      <section className="relative bg-jp-ink text-white py-28 overflow-hidden">
        <div className="kanji-watermark" style={{ fontSize: 520, left: -60, top: -100, color: "rgba(212,175,55,0.08)" }}>利益</div>
        <div className="max-w-5xl mx-auto px-5 lg:px-8 relative">
          <div className="text-jp-red tracking-widest uppercase text-xs">Rieki · Kōyō</div>
          <h1 className="font-jp-serif text-5xl md:text-6xl mt-2">Benefícios</h1>
          <p className="text-white/70 mt-4 max-w-2xl leading-relaxed">
            O karatê forma muito mais que lutadores. Forma pessoas mais inteiras —
            no corpo, na mente e nas relações.
          </p>
        </div>
      </section>

      <section className="py-20 bg-jp-paper">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {BENEFICIOS.map((b, i) => (
              <Reveal key={b.titulo} delay={i * 70}>
                <div className="card-elev bg-white border border-black/5 p-6 h-full">
                  <div className="font-jp-serif text-5xl text-jp-red leading-none">{b.kanji}</div>
                  <h3 className="font-jp-serif text-xl mt-4">{b.titulo}</h3>
                  <p className="text-sm text-black/70 mt-2 leading-relaxed">{b.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-asanoha">
        <div className="max-w-5xl mx-auto px-5 lg:px-8">
          <Reveal>
            <div className="text-center mb-12">
              <div className="text-jp-red text-xs tracking-widest uppercase">Antes & Depois</div>
              <h2 className="font-jp-serif text-3xl mt-2">Histórias do tatame</h2>
              <div className="sumi-divider max-w-xs mx-auto mt-3" />
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5">
            {DEPOIMENTOS.map((d, i) => (
              <Reveal key={d.nome} delay={i * 100}>
                <div className="card-elev bg-white border border-black/5 p-6">
                  <div className="text-xs uppercase tracking-widest text-black/40">Antes</div>
                  <p className="text-sm text-black/70 mt-1">{d.antes}</p>
                  <div className="my-4 sumi-divider" />
                  <div className="text-xs uppercase tracking-widest text-jp-red">Depois</div>
                  <p className="text-sm text-black/80 mt-1 italic">{d.depois}</p>
                  <div className="mt-5 font-jp-serif text-jp-red text-sm">— {d.nome}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-5 lg:px-8 text-center">
          <Reveal>
            <div className="text-jp-red tracking-widest text-xs uppercase">Para todas as idades</div>
            <h2 className="font-jp-serif text-3xl md:text-4xl mt-2">Dos 4 aos 80 anos</h2>
            <p className="text-black/70 mt-4 max-w-2xl mx-auto leading-relaxed">
              O Shotokan é uma arte para a vida inteira. Crianças desenvolvem coordenação
              e disciplina; adultos encontram condicionamento e foco; idosos preservam
              equilíbrio, postura e clareza mental.
            </p>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { k: "童", l: "Crianças (4-12)", t: "Coordenação, respeito, foco." },
              { k: "青", l: "Jovens (13-25)", t: "Performance, atletismo, kumite." },
              { k: "壮", l: "Adultos", t: "Saúde, defesa pessoal, equilíbrio." },
              { k: "老", l: "Sêniores", t: "Mobilidade, mente lúcida, comunidade." },
            ].map((g, i) => (
              <Reveal key={g.l} delay={i * 80}>
                <div className="bg-jp-paper p-5 border-t-2 border-jp-red">
                  <div className="font-jp-serif text-4xl text-jp-red">{g.k}</div>
                  <div className="font-jp-serif tracking-wider mt-2">{g.l}</div>
                  <p className="text-xs text-black/60 mt-1">{g.t}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
