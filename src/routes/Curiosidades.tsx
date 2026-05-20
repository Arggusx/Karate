import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Shuffle } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { CURIOSIDADES } from "@/components/data";

export function Curiosidades() {
  const [random, setRandom] = useState<number | null>(null);
  const [flipKey, setFlipKey] = useState(0);

  const pickRandom = () => {
    const i = Math.floor(Math.random() * CURIOSIDADES.length);
    setRandom(i);
    setFlipKey((k) => k + 1);
  };

  return (
    <div className="page-anim">
      <section className="relative bg-jp-paper py-24 overflow-hidden">
        <div className="kanji-watermark" style={{ fontSize: 520, right: -60, top: -100 }}>雑学</div>
        <div className="max-w-5xl mx-auto px-5 lg:px-8 relative">
          <div className="text-jp-red tracking-widest uppercase text-xs">Zatsugaku</div>
          <h1 className="font-jp-serif text-5xl md:text-6xl mt-2">Curiosidades</h1>
          <p className="text-black/70 mt-4 max-w-2xl leading-relaxed">
            Pequenos fragmentos de saber. Cada caixa, uma porta para a profundidade
            cultural por trás de cada gesto, cada termo, cada cor.
          </p>
          <button
            onClick={pickRandom}
            className="mt-8 inline-flex items-center gap-3 bg-jp-red text-white px-6 py-3 tracking-widest text-xs uppercase hover:bg-[#9a0024] cursor-pointer transition-colors"
          >
            <Shuffle size={16} /> Gerar curiosidade aleatória
          </button>

          <AnimatePresence mode="wait">
            {random !== null && (
              <motion.div
                key={flipKey}
                initial={{ rotateY: 90, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                exit={{ rotateY: -90, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-6 max-w-xl bg-jp-ink text-white p-6 border-l-4 border-jp-red"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="font-jp-serif text-jp-gold tracking-widest text-xs uppercase">雑学 #{random + 1}</div>
                <div className="font-jp-serif text-xl mt-1">{CURIOSIDADES[random].titulo}</div>
                <p className="text-white/80 mt-2 text-sm leading-relaxed">{CURIOSIDADES[random].text}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <section className="py-16 bg-asanoha">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
            {CURIOSIDADES.map((c, i) => (
              <div key={c.titulo} className="mb-6 break-inside-avoid">
                <Reveal delay={Math.min(i * 40, 320)}>
                  <div className="card-elev bg-white border border-black/5 p-6 relative overflow-hidden">
                    <div className="absolute -top-1 right-2 font-jp-serif text-7xl text-jp-red/10 select-none">{i + 1}</div>
                    <div className="font-jp-serif text-jp-red text-xs tracking-widest uppercase"></div>
                    <h3 className="font-jp-serif text-lg mt-1">{c.titulo}</h3>
                    <p className="text-sm text-black/70 mt-3 leading-relaxed">{c.text}</p>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Curiosidades;
