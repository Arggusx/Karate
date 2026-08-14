import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { CURIOSIDADES } from "@/Data/data";

export function Curiosidades() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const toggle = (index: number) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
    <div className="page-anim">
      <section className="relative bg-jp-ink text-white py-28 overflow-hidden">
        <div className="kanji-watermark" style={{ fontSize: 520, right: -60, top: -100, color: "rgba(188,0,45,0.1)" }}>雑学</div>
        <div className="max-w-5xl mx-auto px-5 lg:px-8 relative">
          <div className="text-jp-red tracking-widest uppercase text-xs">Zatsugaku</div>
          <h1 className="font-jp-serif text-5xl md:text-6xl mt-2">Curiosidades</h1>
          <p className="text-white/70 mt-4 max-w-2xl leading-relaxed">
            Pequenos fragmentos de saber. Cada caixa, uma porta para a profundidade
            cultural por trás de cada gesto, cada termo, cada cor.
          </p>
        </div>
      </section>

      <section className="py-16 bg-jp-paper">
        <div className="max-w-4xl mx-auto px-5 lg:px-8">
          <Reveal>
            <div className="text-center mb-12">
              <div className="text-jp-red text-xs tracking-widest uppercase">雑学 · {CURIOSIDADES.length} itens</div>
              <h2 className="font-jp-serif text-3xl mt-2">Explore cada fato</h2>
              <div className="sumi-divider max-w-xs mx-auto mt-3" />
            </div>
          </Reveal>

          <div className="space-y-3">
            {CURIOSIDADES.map((c, i) => {
              const isOpen = openItems.has(i);
              return (
                <Reveal key={c.titulo} delay={Math.min(i * 30, 300)}>
                  <div className={`bg-white border overflow-hidden transition-colors ${isOpen ? "border-jp-red" : "border-black/10"}`}>
                    <button
                      onClick={() => toggle(i)}
                      className="w-full flex items-center gap-4 p-5 text-left cursor-pointer group"
                    >
                      <div className="font-jp-serif text-3xl text-jp-red/30 w-10 shrink-0 text-center group-hover:text-jp-red transition-colors">
                        {i + 1}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-jp-serif text-lg">{c.titulo}</h3>
                      </div>
                      <ChevronDown
                        size={20}
                        className={`text-jp-red shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    <div
                      className="overflow-hidden transition-[max-height,opacity] duration-500 ease-out"
                      style={{ maxHeight: isOpen ? 300 : 0, opacity: isOpen ? 1 : 0 }}
                    >
                      <div className="px-5 pb-5 pl-[4.5rem]">
                        <div className="border-t border-black/5 pt-4">
                          <p className="text-sm text-black/75 leading-relaxed">{c.text}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Curiosidades;
