import { useState, useMemo, useEffect } from "react";
import { X, Search } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { TECNICAS } from "@/components/data";

const FILTERS = ["Todas", "Socos", "Chutes", "Defesas", "Bases"] as const;
type Filter = (typeof FILTERS)[number];

function TechAnim({ tipo }: { tipo: string }) {
  const paths: Record<string, string> = {
    Tsuki: "M 20 100 L 180 100",
    Uchi: "M 30 60 C 80 60, 120 140, 180 140",
    Keri: "M 30 130 C 80 130, 110 90, 180 70",
    Uke: "M 100 170 C 60 110, 140 110, 100 30",
    Dachi: "M 20 140 L 80 140 L 100 100 L 120 140 L 180 140",
  };
  const p = paths[tipo] ?? paths.Tsuki;
  return (
    <svg viewBox="0 0 200 200" className="w-full h-48 bg-jp-paper block">
      <circle cx="100" cy="100" r="80" fill="none" stroke="rgba(188,0,45,0.15)" strokeWidth="2" />
      <path
        d={p}
        fill="none"
        stroke="#BC002D"
        strokeWidth="6"
        strokeLinecap="round"
        style={{
          strokeDasharray: 400,
          strokeDashoffset: 400,
          animation: "inkDraw 1.4s cubic-bezier(0.77,0,0.18,1) forwards",
        }}
      />
    </svg>
  );
}

export function Tecnicas() {
  const [filter, setFilter] = useState<Filter>("Todas");
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState<number | null>(null);

  // Count per category
  const counts = useMemo(() => {
    const c: Record<string, number> = { Todas: TECNICAS.length };
    TECNICAS.forEach((t) => (c[t.cat] = (c[t.cat] || 0) + 1));
    return c;
  }, []);

  const list = useMemo(() => {
    const q = query.trim().toLowerCase();
    return TECNICAS.filter((t) => {
      if (filter !== "Todas" && t.cat !== filter) return false;
      if (!q) return true;
      return (
        t.nome.toLowerCase().includes(q) ||
        t.kanji.includes(q) ||
        t.pt.toLowerCase().includes(q) ||
        t.tipo.toLowerCase().includes(q) ||
        t.cat.toLowerCase().includes(q)
      );
    });
  }, [filter, query]);

  // Lock body scroll when modal open
  useEffect(() => {
    if (open !== null) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = prev; };
    }
  }, [open]);

  // Esc to close
  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const tec = open !== null ? TECNICAS[open] : null;

  return (
    <div className="page-anim">
      <section className="relative bg-jp-ink text-white py-28 overflow-hidden">
        <div className="kanji-watermark" style={{ fontSize: 520, right: -60, top: -100, color: "rgba(188,0,45,0.1)" }}>技術</div>
        <div className="max-w-5xl mx-auto px-5 lg:px-8 relative">
          <div className="text-jp-red tracking-widest uppercase text-xs">Waza</div>
          <h1 className="font-jp-serif text-5xl md:text-6xl mt-2">Técnicas</h1>
          <p className="text-white/70 mt-4 max-w-2xl leading-relaxed">
            Catálogo essencial das <em>waza</em> do Shotokan. Clique em uma técnica para ver
            a animação do traço, pontos-chave e descrição detalhada.
          </p>
        </div>
      </section>

      {/* Search + Filters sticky bar */}
      <section className="py-6 bg-jp-paper sticky top-16 z-40 border-b border-black/5 shadow-sm">
        <div className="max-w-6xl mx-auto px-5 lg:px-8 flex flex-col gap-4">
          {/* Search */}
          <div className="relative max-w-xl mx-auto w-full">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-black/40" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar técnica… (ex: gyaku, 蹴り, soco, mawashi)"
              className="w-full pl-11 pr-10 py-3 bg-white border border-black/10 focus:border-jp-red focus:outline-none text-sm tracking-wide rounded-sm"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-black/40 hover:text-jp-red cursor-pointer"
                aria-label="Limpar busca"
              >
                <X size={16} />
              </button>
            )}
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 justify-center">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 tracking-widest text-xs uppercase transition-colors cursor-pointer flex items-center gap-2 ${
                  filter === f ? "bg-jp-red text-white" : "bg-white border border-black/10 hover:border-jp-red"
                }`}
              >
                {f}
                <span className={`text-[10px] px-1.5 py-0.5 rounded-sm ${filter === f ? "bg-white/20" : "bg-black/5"}`}>
                  {counts[f] || 0}
                </span>
              </button>
            ))}
          </div>

          {/* Results counter */}
          <div className="text-center text-xs text-black/50 tracking-widest uppercase">
            {list.length === 0
              ? "Nenhuma técnica encontrada"
              : `${list.length} técnica${list.length === 1 ? "" : "s"} ${filter !== "Todas" ? `· ${filter}` : ""}${query ? ` · "${query}"` : ""}`}
          </div>
        </div>
      </section>

      <section className="py-16 bg-jp-paper min-h-[40vh]">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          {list.length === 0 ? (
            <div className="text-center py-20">
              <div className="font-jp-serif text-7xl text-jp-red/20">無</div>
              <p className="mt-4 text-black/60">Nada encontrado. Tente outro termo ou limpe o filtro.</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {list.map((t, i) => {
                const origIdx = TECNICAS.indexOf(t);
                return (
                  <Reveal key={t.nome} delay={Math.min(i * 40, 320)}>
                    <button
                      onClick={() => setOpen(origIdx)}
                      className="card-elev w-full text-left bg-white border border-black/5 overflow-hidden group cursor-pointer"
                    >
                      <TechAnim tipo={t.tipo} />
                      <div className="p-5">
                        <div className="text-xs tracking-widest text-jp-red uppercase">{t.cat} · {t.tipo}</div>
                        <div className="font-jp-serif text-xl mt-1">{t.nome}</div>
                        <div className="font-jp-serif text-jp-red">{t.kanji}</div>
                        <div className="text-sm text-black/60 mt-1">{t.pt}</div>
                      </div>
                    </button>
                  </Reveal>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      {tec && (
        <div
          className="fixed inset-0 z-[80] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setOpen(null)}
          style={{ animation: "fadeUp 0.25s ease-out" }}
        >
          <div
            className="bg-white text-jp-ink max-w-2xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            style={{ animation: "fadeUp 0.35s cubic-bezier(0.22, 1, 0.36, 1)" }}
          >
            <button
              onClick={() => setOpen(null)}
              className="absolute top-3 right-3 p-2 hover:bg-black/5 z-10 text-jp-ink cursor-pointer"
              aria-label="Fechar"
            >
              <X size={20} />
            </button>

            {/* Animation header */}
            <div className="relative">
              <TechAnim key={tec.nome} tipo={tec.tipo} />
              <div className="absolute top-3 left-4 text-[10px] tracking-widest uppercase bg-jp-red text-white px-2 py-1">
                {tec.cat}
              </div>
            </div>

            <div className="p-8">
              <div className="text-xs tracking-widest text-jp-red uppercase">{tec.cat} · {tec.tipo}</div>
              <h3 className="font-jp-serif text-3xl mt-1 text-jp-ink">{tec.nome}</h3>
              <div className="font-jp-serif text-jp-red text-2xl mt-1">{tec.kanji}</div>
              <div className="text-black/60 mt-1">{tec.pt}</div>
              <div className="sumi-divider my-5 max-w-xs" />
              <p className="text-black/80 leading-relaxed">{tec.desc}</p>

              <div className="mt-6 bg-jp-paper p-5">
                <div className="text-xs tracking-widest text-jp-red uppercase mb-3">Pontos-chave</div>
                <ul className="text-sm text-black/75 space-y-2">
                  <li className="flex gap-2"><span className="text-jp-red">▸</span> Quadril (koshi) gera a potência — não o braço ou a perna.</li>
                  <li className="flex gap-2"><span className="text-jp-red">▸</span> Kime (決め) no impacto: tensão total e instantânea.</li>
                  <li className="flex gap-2"><span className="text-jp-red">▸</span> Retorno tão rápido quanto a saída — hikite (引手).</li>
                  <li className="flex gap-2"><span className="text-jp-red">▸</span> Expira no momento do impacto, mantenha zanshin (残心).</li>
                </ul>
              </div>

              <div className="mt-6 flex flex-wrap gap-2 text-[10px] tracking-widest uppercase text-black/50">
                <span className="px-2 py-1 bg-black/5">Família: {tec.tipo}</span>
                <span className="px-2 py-1 bg-black/5">Categoria: {tec.cat}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Tecnicas;
