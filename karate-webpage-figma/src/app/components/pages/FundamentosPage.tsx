import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "../Reveal";
import { PILARES, DICIONARIO, KATAS_SHOTOKAN, DOJO_KUN } from "../data";

const GRADUACOES = [
  { faixa: "Branca", jp: "白帯", txt: "Iniciante. A mente vazia, pronta para receber." },
  { faixa: "Amarela", jp: "黄帯", txt: "Primeiros movimentos firmes — o sol que nasce." },
  { faixa: "Vermelha", jp: "赤帯", txt: "Energia e ímpeto da juventude técnica." },
  { faixa: "Laranja", jp: "橙帯", txt: "Transição. O calor do fogo interno." },
  { faixa: "Verde", jp: "緑帯", txt: "Crescimento — como o broto que vira árvore." },
  { faixa: "Roxa", jp: "紫帯", txt: "Profundidade. Estudo de katas intermediários." },
  { faixa: "Marrom", jp: "茶帯", txt: "Maturidade técnica. Pronto para o Shodan." },
  { faixa: "Preta", jp: "黒帯", txt: "Não é o fim — é o verdadeiro começo. Shodan = 1º dan." },
];

export function FundamentosPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div className="page-anim">
      <section className="relative bg-jp-paper py-24 overflow-hidden">
        <div className="kanji-watermark" style={{ fontSize: 520, right: -60, top: -100 }}>基本</div>
        <div className="max-w-5xl mx-auto px-5 lg:px-8 relative">
          <div className="text-jp-red tracking-widest uppercase text-xs">Kihon</div>
          <h1 className="font-jp-serif text-5xl md:text-6xl mt-2">Fundamentos</h1>
          <p className="text-black/70 mt-4 max-w-2xl leading-relaxed">
            <em>"Kihon é a base de tudo."</em> Sem repetição não há técnica;
            sem técnica não há karatê. Antes do brilho do kata e da tensão do kumite,
            existem milhares de repetições silenciosas.
          </p>
        </div>
      </section>

      {/* 3 pilares */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-5 lg:px-8">
          <Reveal>
            <h2 className="font-jp-serif text-3xl mb-2">Os três pilares</h2>
            <div className="sumi-divider max-w-xs mb-10" />
          </Reveal>

          <div className="space-y-4">
            {PILARES.map((p, i) => {
              const open = openIdx === i;
              return (
                <Reveal key={p.nome} delay={i * 80}>
                  <button
                    onClick={() => setOpenIdx(open ? null : i)}
                    className={`w-full text-left card-elev border ${open ? "border-jp-red" : "border-black/10"} bg-white`}
                  >
                    <div className="flex items-center gap-6 p-6">
                      <div className="font-jp-serif text-5xl text-jp-red w-16 shrink-0">{p.kanji}</div>
                      <div className="flex-1">
                        <div className="font-jp-serif text-2xl">{p.nome}</div>
                        <div className="text-sm text-black/50">{p.pt}</div>
                      </div>
                      <ChevronDown className={`transition-transform ${open ? "rotate-180" : ""}`} />
                    </div>
                    <div
                      className="overflow-hidden transition-[max-height] duration-500 ease-out"
                      style={{ maxHeight: open ? 240 : 0 }}
                    >
                      <p className="px-6 pb-6 text-black/70 leading-relaxed border-t border-black/5 pt-4">
                        {p.text}
                      </p>
                    </div>
                  </button>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Rei */}
      <section className="py-20 bg-seigaiha">
        <div className="max-w-5xl mx-auto px-5 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="font-jp-serif text-jp-red text-sm tracking-widest uppercase">Etiqueta do Dōjō</div>
            <h2 className="font-jp-serif text-3xl md:text-4xl mt-2">Rei — o cumprimento (礼)</h2>
            <p className="text-black/70 mt-4 leading-relaxed">
              Toda aula começa e termina com o <em>rei</em>. Curvar-se não é submissão —
              é o reconhecimento de que estamos diante de algo maior: o caminho, o sensei,
              o colega que confia em nós a integridade de seu corpo.
            </p>
            <p className="text-black/70 mt-3 leading-relaxed">
              A saudação <span className="font-jp-serif text-jp-red">押忍 (Oss)</span> resume
              a postura: empurrar (押), suportar (忍). Continuar mesmo quando dói.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <div className="bg-white border border-black/5 p-8 relative">
              <div className="font-jp-serif text-[8rem] text-jp-red leading-none text-center">礼</div>
              <div className="text-center mt-2 tracking-widest text-xs uppercase text-black/50">Rei · respeito</div>
              <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
                <div className="bg-jp-paper p-3"><div className="font-jp-serif text-jp-red">座礼</div>Zarei (ajoelhado)</div>
                <div className="bg-jp-paper p-3"><div className="font-jp-serif text-jp-red">立礼</div>Ritsurei (em pé)</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Dōjō Kun */}
      <section className="py-24 bg-jp-ink text-white relative overflow-hidden">
        <div className="kanji-watermark" style={{ fontSize: 520, right: -80, top: -80, color: "rgba(188,0,45,0.1)" }}>道場訓</div>
        <div className="max-w-6xl mx-auto px-5 lg:px-8 relative">
          <Reveal>
            <div className="grid md:grid-cols-[1fr_1.4fr] gap-12 items-start">
              <div>
                <div className="text-jp-red text-xs tracking-widest uppercase">Dōjō Kun · 道場訓</div>
                <h2 className="font-jp-serif text-4xl md:text-5xl mt-2 leading-tight">
                  Os cinco<br />lemas do dojo
                </h2>
                <div className="sumi-divider mt-5 max-w-xs opacity-60" style={{ filter: "invert(1)" }} />
                <p className="text-white/70 mt-5 leading-relaxed">
                  No fim de cada aula, alunos e sensei se ajoelham em <em>seiza</em> e
                  recitam juntos os cinco preceitos do dojo. Atribuído ao mestre Sakugawa
                  (séc. XVIII) e adotado por Funakoshi, o <strong className="text-jp-gold">Dōjō Kun</strong>
                  {" "}resume a ética do karateca — antes da técnica, o caráter.
                </p>
                <p className="text-white/50 mt-4 text-sm italic">
                  Cada lema começa com <span className="font-jp-serif text-jp-gold">一 (hitotsu)</span> — "primeiro" —
                  indicando que todos têm a mesma importância: nenhum vem antes do outro.
                </p>
              </div>

              <ol className="space-y-4">
                {DOJO_KUN.map((d, i) => (
                  <Reveal key={i} delay={i * 100}>
                    <li className="card-elev bg-white/5 backdrop-blur border border-white/10 p-5 grid grid-cols-[auto_1fr] gap-5 items-start">
                      <div className="font-jp-serif text-5xl text-jp-red leading-none w-12 text-center">{i + 1}</div>
                      <div>
                        <div className="font-jp-serif text-jp-gold text-lg leading-tight">{d.jp}</div>
                        <div className="font-jp-serif text-sm text-white/50 mt-1 italic">{d.romaji}</div>
                        <div className="font-jp-serif text-lg mt-3">{d.pt}</div>
                        <p className="text-sm text-white/70 mt-2 leading-relaxed">{d.text}</p>
                      </div>
                    </li>
                  </Reveal>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Princípios técnicos */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <Reveal>
            <div className="text-center mb-12">
              <div className="text-jp-red text-xs tracking-widest uppercase">Gensoku · 原則</div>
              <h2 className="font-jp-serif text-3xl mt-2">Princípios que sustentam toda técnica</h2>
              <div className="sumi-divider max-w-xs mx-auto mt-3" />
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { k: "決め", n: "Kime", t: "A contração total e instantânea no impacto. Sem kime, o golpe é vazio." },
              { k: "気合", n: "Kiai", t: "Grito de espírito. Concentra energia, intimida, sincroniza respiração e corpo." },
              { k: "残心", n: "Zanshin", t: "Mente alerta após o ataque. Nunca relaxe antes que o adversário esteja realmente neutralizado." },
              { k: "間合", n: "Maai", t: "Distância de combate. Ler maai é metade do karatê — atacar fora dela é morrer." },
              { k: "拍子", n: "Hyoshi", t: "Ritmo. Quebrar o ritmo do oponente é mais valioso que mil socos." },
              { k: "腰", n: "Koshi", t: "Quadril. Toda potência verdadeira nasce da rotação do quadril, não do braço." },
              { k: "引手", n: "Hikite", t: "A mão que recua. Tão importante quanto o soco — gera contra-rotação e potência." },
              { k: "初心", n: "Shoshin", t: "Mente de iniciante. Mesmo o mestre treina como se aprendesse pela primeira vez." },
              { k: "無心", n: "Mushin", t: "Mente sem mente. Agir sem pensar, fluido como a água." },
            ].map((p, i) => (
              <Reveal key={p.n} delay={i * 60}>
                <div className="card-elev bg-jp-paper border border-black/5 p-6 h-full">
                  <div className="font-jp-serif text-4xl text-jp-red">{p.k}</div>
                  <div className="font-jp-serif text-lg mt-2">{p.n}</div>
                  <p className="text-sm text-black/70 mt-2 leading-relaxed">{p.t}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Katas */}
      <section className="py-20 bg-jp-ink text-white relative overflow-hidden">
        <div className="kanji-watermark" style={{ fontSize: 480, right: -80, top: -80, color: "rgba(212,175,55,0.06)" }}>型</div>
        <div className="max-w-6xl mx-auto px-5 lg:px-8 relative">
          <Reveal>
            <div className="text-jp-red text-xs tracking-widest uppercase">Kata · 型</div>
            <h2 className="font-jp-serif text-3xl mt-2">Os katas do Shotokan</h2>
            <p className="text-white/70 mt-3 max-w-2xl">
              O Shotokan possui <strong>26 katas oficiais</strong>. Cada kata é uma luta imaginária
              contra múltiplos adversários — uma coreografia que esconde aplicações reais (bunkai).
              Estudar kata é estudar a própria história do estilo.
            </p>
            <div className="sumi-divider max-w-xs mt-4 opacity-60" style={{ filter: "invert(1)" }} />
          </Reveal>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {KATAS_SHOTOKAN.map((k, i) => (
              <Reveal key={k.nome} delay={i * 40}>
                <div className="card-elev bg-white/5 border border-white/10 backdrop-blur p-5 h-full">
                  <div className="flex items-baseline justify-between">
                    <div className="font-jp-serif text-jp-gold text-2xl">{k.kanji}</div>
                    <div className="text-[10px] tracking-widest uppercase text-jp-red bg-jp-red/10 px-2 py-0.5">{k.nivel}</div>
                  </div>
                  <div className="font-jp-serif text-xl mt-1">{k.nome}</div>
                  <div className="text-xs text-white/40 mt-1">{k.mov} movimentos</div>
                  <p className="text-sm text-white/70 mt-3 leading-relaxed">{k.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Graduações / faixas */}
      <section className="py-20 bg-jp-paper">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <Reveal>
            <div className="text-center mb-10">
              <div className="text-jp-red text-xs tracking-widest uppercase">Kyu · Dan · 級 段</div>
              <h2 className="font-jp-serif text-3xl mt-2">A jornada das faixas</h2>
              <p className="text-black/60 mt-3 max-w-xl mx-auto">
                Antes da preta vêm os <em>kyu</em> (graus descendentes — 10º, 9º...). Depois,
                os <em>dan</em> (ascendentes — Shodan, Nidan, Sandan...). O praticante avança
                por exames técnicos e tempo de prática.
              </p>
              <div className="sumi-divider max-w-xs mx-auto mt-3" />
            </div>
          </Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {GRADUACOES.map((g, i) => (
              <Reveal key={g.faixa} delay={i * 50}>
                <div className="card-elev bg-white border border-black/5 p-4">
                  <div
                    className="h-3 w-full mb-3"
                    style={{
                      background: {
                        Branca: "#F5F1E8",
                        Amarela: "#E8C547",
                        Vermelha: "#C41E3A",
                        Laranja: "#E07B00",
                        Verde: "#2D7A3F",
                        Roxa: "#5E2B82",
                        Marrom: "#6B3F1D",
                        Preta: "#0D0D0D",
                      }[g.faixa],
                      border: g.faixa === "Branca" ? "1px solid #0001" : "none",
                    }}
                  />
                  <div className="font-jp-serif text-jp-red">{g.jp}</div>
                  <div className="font-jp-serif">{g.faixa}</div>
                  <p className="text-xs text-black/60 mt-1 leading-relaxed">{g.txt}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Dicionário */}
      <section className="py-20 bg-jp-paper">
        <div className="max-w-5xl mx-auto px-5 lg:px-8">
          <Reveal>
            <div className="text-center mb-10">
              <div className="text-jp-red text-xs tracking-widest uppercase">Yōgo-shū</div>
              <h2 className="font-jp-serif text-3xl mt-2">Dicionário rápido</h2>
              <div className="sumi-divider max-w-xs mx-auto mt-3" />
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {DICIONARIO.map((d, i) => (
              <Reveal key={d.romaji} delay={i * 50}>
                <div className="card-elev bg-white border border-black/5 p-5">
                  <div className="flex items-baseline gap-3">
                    <div className="font-jp-serif text-4xl text-jp-red">{d.jp}</div>
                    <div className="text-black/60 tracking-wider">{d.romaji}</div>
                  </div>
                  <p className="text-sm text-black/70 mt-2">{d.pt}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
