import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Reveal } from "../Reveal";
import { NAV, PRECEITOS_FUNAKOSHI, type PageId } from "../data";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function HomePage({ onNavigate }: { onNavigate: (id: PageId) => void }) {
  return (
    <div className="page-anim">
      {/* HERO */}
      <section className="relative min-h-[92vh] overflow-hidden bg-jp-ink text-white flex items-center">
        {/* Red sun */}
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] rounded-full"
          style={{ background: "radial-gradient(circle, #BC002D 0%, #7a001d 60%, transparent 75%)" }}
        />
        {/* silhouette */}
        <div className="absolute inset-0 opacity-30 mix-blend-luminosity">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1529651228087-f0f728ea871e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1600&q=80"
            alt="Karateca em silhueta"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D] via-[#0D0D0D]/70 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-5 lg:px-8 py-24 w-full">
          <div className="font-jp-serif text-[22vw] md:text-[14rem] leading-none text-jp-red/90 brush-reveal">
            空手
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.9 }}
            className="font-jp-serif text-xl md:text-3xl text-white/90 mt-4 max-w-2xl"
          >
            O caminho das mãos vazias — <span className="text-jp-gold">松濤館流</span>
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 1 }}
            className="text-white/60 mt-4 max-w-xl leading-relaxed"
          >
            Tradição milenar, técnica precisa, espírito sereno. Bem-vindo ao estudo do Shotokan-ryū e da cultura japonesa que o originou.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <button onClick={() => onNavigate("historia")} className="bg-jp-red hover:bg-[#9a0024] px-7 py-3 tracking-widest text-sm uppercase transition-colors flex items-center gap-2">
              Começar o caminho <ArrowRight size={16} />
            </button>
            <button onClick={() => onNavigate("tecnicas")} className="border border-white/40 hover:border-jp-gold hover:text-jp-gold px-7 py-3 tracking-widest text-sm uppercase transition-colors">
              Ver técnicas
            </button>
          </motion.div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 text-xs tracking-[0.3em] uppercase">
          ↓ Role para descobrir
        </div>
      </section>

      {/* O que você encontrará */}
      <section className="relative py-24 bg-seigaiha">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <Reveal>
            <div className="text-center mb-14">
              <div className="font-jp-serif text-jp-red text-sm tracking-widest uppercase">案内</div>
              <h2 className="font-jp-serif text-3xl md:text-4xl mt-2">O que você encontrará aqui</h2>
              <div className="sumi-divider mt-4 max-w-xs mx-auto" />
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {NAV.filter((n) => n.id !== "home").map((n, i) => (
              <Reveal key={n.id} delay={i * 80}>
                <button
                  onClick={() => onNavigate(n.id)}
                  className="card-elev w-full text-left bg-white border border-black/5 p-6 h-full flex flex-col gap-3 group"
                >
                  <div className="font-jp-serif text-5xl text-jp-red group-hover:scale-110 origin-left transition-transform">{n.kanji}</div>
                  <div className="font-jp-serif tracking-wider">{n.label}</div>
                  <div className="text-xs text-black/50 leading-relaxed">
                    {n.id === "historia" && "Das raízes em Okinawa ao mundo."}
                    {n.id === "fundamentos" && "Kihon, Kata e Kumite."}
                    {n.id === "beneficios" && "Corpo, mente, espírito."}
                    {n.id === "tecnicas" && "Socos, chutes, defesas e bases."}
                    {n.id === "curiosidades" && "Fatos e segredos do estilo."}
                  </div>
                  <span className="mt-auto text-xs text-jp-red tracking-widest uppercase flex items-center gap-1">
                    Explorar <ArrowRight size={12} />
                  </span>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="relative py-28 bg-jp-ink text-white overflow-hidden">
        <div className="kanji-watermark" style={{ fontSize: 380, left: -30, top: -60 }}>道</div>
        <div className="max-w-4xl mx-auto px-5 lg:px-8 text-center relative">
          <Reveal>
            <div className="font-jp-serif text-jp-red text-6xl md:text-8xl mb-6">空手に先手なし</div>
            <p className="text-white/80 text-lg md:text-xl font-jp-serif">
              "No karatê não existe atitude ofensiva."
            </p>
            <div className="mt-6 text-white/50 tracking-widest uppercase text-xs">Gichin Funakoshi · 船越義珍</div>
            <div className="sumi-divider mt-8 max-w-xs mx-auto opacity-60" style={{ filter: "invert(1)" }} />
            <ul className="mt-8 space-y-2 text-white/60 text-sm font-jp-serif">
              {PRECEITOS_FUNAKOSHI.slice(1).map((p, i) => <li key={i}>· {p}</li>)}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Divulgação Academia Tigre de Karatê */}
      <section className="py-24 bg-jp-ink text-white relative overflow-hidden">
        <div className="kanji-watermark" style={{ fontSize: 520, left: -80, top: -100, color: "rgba(188,0,45,0.1)" }}>虎</div>
        <div className="absolute inset-0 opacity-20">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1601878457596-d805acc3626a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1600&q=80"
            alt="Dojo"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-jp-ink via-jp-ink/90 to-jp-ink/40" />

        <div className="relative max-w-6xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 border border-jp-gold/40 px-3 py-1 text-jp-gold tracking-widest text-[10px] uppercase">
              <span className="font-jp-serif">道場</span> Dojo parceiro · Convite especial
            </div>
            <h2 className="font-jp-serif text-4xl md:text-5xl mt-4 leading-tight">
              Visite um dojo.<br />
              <span className="text-jp-red">Comece a treinar no</span><br />
              <span className="text-jp-gold">Tigre de Karatê</span>.
            </h2>
            <p className="text-white/75 mt-5 leading-relaxed max-w-xl">
              Mais do que uma academia, uma família. Sob a orientação do
              <strong className="text-white"> Sensei (faixa-preta 4º Dan)</strong>, o
              <strong className="text-jp-gold"> Tigre de Karatê</strong> ensina o autêntico
              Shotokan-ryū — disciplina, técnica precisa e respeito acima de tudo. Aulas para
              crianças, jovens, adultos e veteranos. Sua primeira aula é por nossa conta.
            </p>

            <div className="mt-6 grid grid-cols-3 gap-3 max-w-md">
              <div className="bg-white/5 border border-white/10 p-3 text-center">
                <div className="font-jp-serif text-jp-red text-2xl">4°</div>
                <div className="text-[10px] tracking-widest uppercase text-white/60">Dan · Sensei</div>
              </div>
              <div className="bg-white/5 border border-white/10 p-3 text-center">
                <div className="font-jp-serif text-jp-red text-2xl">4-80</div>
                <div className="text-[10px] tracking-widest uppercase text-white/60">Anos · Idades</div>
              </div>
              <div className="bg-white/5 border border-white/10 p-3 text-center">
                <div className="font-jp-serif text-jp-red text-2xl">1ª</div>
                <div className="text-[10px] tracking-widest uppercase text-white/60">Aula grátis</div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contato"
                className="bg-jp-red hover:bg-[#9a0024] text-white px-7 py-3 tracking-widest text-sm uppercase transition-colors"
              >
                Agendar aula experimental
              </a>
              <button
                onClick={() => onNavigate("fundamentos")}
                className="border border-white/30 hover:border-jp-gold hover:text-jp-gold px-7 py-3 tracking-widest text-sm uppercase transition-colors"
              >
                Conheça os fundamentos
              </button>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="relative">
              {/* Símbolo do Tigre */}
              <div className="aspect-square max-w-md mx-auto relative">
                <div className="absolute inset-0 rounded-full border-[6px] border-jp-red" />
                <div className="absolute inset-4 rounded-full border border-jp-gold/40" />
                <div className="absolute inset-0 grid place-items-center">
                  <div className="text-center">
                    <div className="font-jp-serif text-[10rem] leading-none text-jp-red">虎</div>
                    <div className="font-jp-serif text-jp-gold tracking-[0.4em] text-xs mt-3 uppercase">Tigre de Karatê</div>
                    <div className="text-white/40 text-[10px] tracking-widest mt-1 uppercase">Shotokan-Ryū · Dōjō</div>
                  </div>
                </div>
              </div>
              <div className="mt-6 text-center text-xs tracking-[0.3em] uppercase text-white/50 font-jp-serif">
                押忍 · Força, disciplina, espírito
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
