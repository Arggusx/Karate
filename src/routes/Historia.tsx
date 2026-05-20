import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { TIMELINE, MESTRES, PRECEITOS_NIJU_KUN } from "@/components/data";
import { ImageWithFallback } from "@/components/ImageWithFallback";

export function Historia() {
  const [openTl, setOpenTl] = useState<number | null>(null);

  return (
    <div className="page-anim">
      {/* hero */}
      <section className="relative bg-jp-ink text-white py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1730800328179-3fb51d1e0438?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1600&q=80"
            alt="Monte Fuji"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-jp-ink/70 to-jp-ink" />
        <div className="kanji-watermark" style={{ fontSize: 320, right: 30, top: 20, color: "rgba(255,255,255,0.05)" }}>歴史</div>
        <div className="relative max-w-5xl mx-auto px-5 lg:px-8">
          <div className="text-jp-red tracking-widest uppercase text-xs">Rekishi</div>
          <h1 className="font-jp-serif text-5xl md:text-6xl mt-2">A história do Shotokan</h1>
          <p className="text-white/70 mt-4 max-w-2xl leading-relaxed">
            Uma jornada que começa nas ilhas de Okinawa, atravessa o oceano até o Japão continental
            e alcança o mundo inteiro — de templos zen aos tatames olímpicos.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-jp-paper">
        <div className="max-w-5xl mx-auto px-5 lg:px-8">
          <Reveal>
            <h2 className="font-jp-serif text-3xl mb-2">Linha do tempo</h2>
            <div className="sumi-divider max-w-xs mb-12" />
          </Reveal>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-jp-red/30" />
            {TIMELINE.map((t, i) => {
              const open = openTl === i;
              const right = i % 2 !== 0;
              return (
                <Reveal key={i} delay={i * 60}>
                  <div className="relative mb-10">
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-1 w-3 h-3 rounded-full bg-jp-red ring-4 ring-jp-paper" />
                    <div className={`grid md:grid-cols-2 gap-6 ${right ? "md:[direction:rtl]" : ""}`}>
                      <div className={`pl-12 md:pl-0 ${right ? "md:pl-12 [direction:ltr]" : "md:pr-12 md:text-right"}`}>
                        <div className="font-jp-serif text-jp-red text-sm tracking-widest">{t.year}</div>
                        <h3 className="font-jp-serif text-2xl mt-1">{t.title}</h3>
                        <p className="text-black/70 mt-2 leading-relaxed">{t.text}</p>
                        <button
                          onClick={() => setOpenTl(open ? null : i)}
                          className={`mt-3 inline-flex items-center gap-2 cursor-pointer text-xs tracking-widest uppercase text-jp-red hover:text-jp-ink transition-colors ${right ? "" : "md:flex-row-reverse"}`}
                        >
                          <ChevronDown size={14} className={`transition-transform ${open ? "rotate-180" : ""}`} />
                          {open ? "Recolher" : "Saber mais"}
                        </button>
                      </div>
                      <div className={`pl-12 md:pl-0 ${right ? "md:pr-12 md:text-right [direction:ltr]" : "md:pl-12"}`}>
                        <div className="font-jp-serif text-sm uppercase">
                          <div className="text-md text-red-600 font-bold mx-10">{t.kanjiTranslate}</div>
                          <div className="font-jp-serif text-7xl md:text-8xl text-jp-red/20">{t.kanji}</div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="overflow-hidden transition-[max-height,opacity] duration-500 ease-out"
                      style={{ maxHeight: open ? 600 : 0, opacity: open ? 1 : 0 }}
                    >
                      <div className="ml-12 md:ml-[calc(50%+0.75rem)] mt-4 bg-white border-l-4 border-jp-red p-5 text-sm text-black/75 leading-relaxed">
                        {t.detail}
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mestres */}
      <section className="py-24 bg-asanoha">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <Reveal>
            <div className="text-center mb-12">
              <div className="font-jp-serif text-jp-red text-sm tracking-widest uppercase">先生</div>
              <h2 className="font-jp-serif text-3xl mt-2">Mestres do Shotokan</h2>
              <div className="sumi-divider mt-4 max-w-xs mx-auto" />
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6">
            {MESTRES.map((m, i) => (
              <Reveal key={m.nome} delay={i * 80}>
                <div className="card-elev bg-white border border-black/5 p-6 flex gap-5">
                  <div className="font-jp-serif text-5xl text-jp-red shrink-0">先</div>
                  <div>
                    <div className="font-jp-serif text-xl">{m.nome}</div>
                    <div className="text-xs text-black/50 mt-1">{m.anos}</div>
                    <p className="text-sm text-black/70 mt-3 leading-relaxed">{m.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-jp-paper">
        <div className="max-w-5xl mx-auto px-5 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="text-jp-red text-xs tracking-widest uppercase">Okinawa-Te</div>
            <h2 className="font-jp-serif text-3xl mt-2">As raízes em Okinawa</h2>
            <p className="text-black/70 mt-4 leading-relaxed">
              Antes de existir "karatê", existiam três tradições marciais okinawanas, nomeadas
              segundo as cidades que as desenvolveram: <strong>Shuri-te</strong>, <strong>Naha-te</strong>
              {" "}e <strong>Tomari-te</strong>. Eram artes secretas, transmitidas oralmente
              entre membros da nobreza guerreira (pechin).
            </p>
            <p className="text-black/70 mt-3 leading-relaxed">
              Em 1609, o clã Satsuma invade Okinawa e proíbe armas. A população desenvolve em
              segredo um sistema de combate sem armas — o <em>Tī</em> (手, "mão"). Da fusão com o
              <em>Quanfa</em> chinês surge o nome <strong>唐手 (Kara-Te)</strong>, "mão chinesa".
            </p>
          </Reveal>
          <Reveal delay={150}>
            <div className="bg-white border border-black/5 p-6">
              <div className="font-jp-serif text-jp-red text-sm tracking-widest uppercase">As 3 escolas</div>
              <ul className="mt-4 space-y-4">
                <li className="flex gap-4">
                  <div className="font-jp-serif text-4xl text-jp-red w-20">首里</div>
                  <div>
                    <div className="font-jp-serif">Shuri-te</div>
                    <div className="text-sm text-black/60">Linear, atlético — origem do Shotokan e Shorin-ryu.</div>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="font-jp-serif text-4xl text-jp-red w-20">那覇</div>
                  <div>
                    <div className="font-jp-serif">Naha-te</div>
                    <div className="text-sm text-black/60">Circular, com respiração sonora — origem do Goju-ryu.</div>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="font-jp-serif text-4xl text-jp-red w-20">泊</div>
                  <div>
                    <div className="font-jp-serif">Tomari-te</div>
                    <div className="text-sm text-black/60">Híbrida, marcada pela leveza e fluidez.</div>
                  </div>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24 bg-asanoha">
        <div className="max-w-5xl mx-auto px-5 lg:px-8">
          <Reveal>
            <div className="text-center mb-10">
              <div className="text-jp-red text-xs tracking-widest uppercase">Shōtō-kan</div>
              <h2 className="font-jp-serif text-3xl mt-2">A origem do nome</h2>
              <div className="sumi-divider max-w-xs mx-auto mt-3" />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white border border-black/5 p-6 text-center">
                <div className="font-jp-serif text-6xl text-jp-red">松</div>
                <div className="font-jp-serif tracking-wider mt-2">Shō</div>
                <div className="text-xs text-black/60">Pinheiro</div>
              </div>
              <div className="bg-white border border-black/5 p-6 text-center">
                <div className="font-jp-serif text-6xl text-jp-red">濤</div>
                <div className="font-jp-serif tracking-wider mt-2">Tō</div>
                <div className="text-xs text-black/60">Ondas (do som do vento)</div>
              </div>
              <div className="bg-white border border-black/5 p-6 text-center">
                <div className="font-jp-serif text-6xl text-jp-red">館</div>
                <div className="font-jp-serif tracking-wider mt-2">Kan</div>
                <div className="text-xs text-black/60">Salão / casa</div>
              </div>
            </div>
            <p className="text-center text-black/70 mt-8 max-w-2xl mx-auto leading-relaxed">
              <strong>"Salão das ondas de pinheiros"</strong>. <em>Shōtō</em> era o pseudônimo
              poético de Gichin Funakoshi, inspirado no som do vento atravessando os pinheirais
              do Monte Torao, em Okinawa, onde caminhava para meditar e compor poesia.
              Quando seus alunos inauguraram o primeiro dojo permanente em Tóquio (1936), colocaram
              uma placa com o nome do mestre. O estilo recebeu, sem querer, o nome do prédio.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Niju Kun */}
      <section className="py-24 bg-jp-paper">
        <div className="max-w-5xl mx-auto px-5 lg:px-8">
          <Reveal>
            <div className="text-center mb-10">
              <div className="text-jp-red text-xs tracking-widest uppercase">Niju Kun · 二十訓</div>
              <h2 className="font-jp-serif text-3xl mt-2">Os 20 preceitos de Funakoshi</h2>
              <p className="text-black/60 mt-3 max-w-xl mx-auto">
                Funakoshi resumiu em vinte máximas a essência filosófica do karatê. Os 10 primeiros:
              </p>
              <div className="sumi-divider max-w-xs mx-auto mt-3" />
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-3">
            {PRECEITOS_NIJU_KUN.map((p, i) => (
              <Reveal key={i} delay={i * 40}>
                <div className="card-elev bg-white border-l-4 border-jp-red p-4 text-sm text-black/80">
                  {p}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tigre de Funakoshi */}
      <section className="py-24 bg-jp-ink text-white relative overflow-hidden">
        <div className="kanji-watermark" style={{ fontSize: 400, left: -60, bottom: -120, color: "rgba(188,0,45,0.08)" }}>虎</div>
        <div className="max-w-5xl mx-auto px-5 lg:px-8 grid md:grid-cols-2 gap-12 items-center relative">
          <Reveal>
            <div className="text-jp-red tracking-widest uppercase text-xs">Tora no Maki</div>
            <h2 className="font-jp-serif text-3xl md:text-4xl mt-2">O Tigre de Funakoshi</h2>
            <p className="text-white/70 mt-4 leading-relaxed">
              O símbolo oficial do Shotokan é um tigre dentro de um círculo, desenhado pelo
              artista <em>Hoan Kosugi</em>. O tigre representa o estado de alerta sereno:
              força contida, prontidão constante, jamais hesitação.
            </p>
            <p className="text-white/70 mt-3 leading-relaxed">
              Diz-se ainda: <span className="font-jp-serif text-jp-gold">"tora no maki"</span> — o pergaminho secreto do tigre —
              que representa o conhecimento profundo transmitido apenas aos discípulos dedicados.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <div className="relative aspect-square max-w-md mx-auto rounded-full border-[9px] border-red-400 flex items-center justify-center">
              <div className="font-jp-serif text-jp-red text-[12rem] leading-none"><img src="\tigre-karate-red.png" className="w-110 h-110 rounded-full object-cover" alt="" /></div>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-jp-ink px-4 font-jp-serif tracking-widest text-jp-gold text-xs uppercase">Shotokan</div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

export default Historia;
