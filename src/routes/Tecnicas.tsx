import { useState, useMemo } from "react";
import { Search, X, Play } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { TECNICAS } from "@/components/data";

interface TecnicaItem {
  nome: string;
  kanji: string;
  pt: string;
  cat: string;
  tipo: string;
  desc: string;
  url_video?: string;
  url_imagem?: string;
  enbusen_imagem?: string;
}

const CATEGORIAS = [
  { id: "Socos", label: "Socos e Golpes (Tsuki / Uchi)", kanji: "突 · 打" },
  { id: "Chutes", label: "Chutes (Keri)", kanji: "蹴" },
  { id: "Defesas", label: "Defesas (Uke)", kanji: "受" },
  { id: "Bases", label: "Bases e Posturas (Dachi)", kanji: "立" },
  { id: "Katas", label: "Katas (型)", kanji: "型" },
];

function CategoryBlock({ catId, title, kanji }: { catId: string; title: string; kanji: string }) {
  const [query, setQuery] = useState("");
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  // Lista de técnicas da categoria
  const categoryItems = useMemo(() => {
    return TECNICAS.filter((t) => {
      if (catId === "Katas") return t.cat === "Katas" || t.tipo === "Kata";
      return t.cat === catId;
    });
  }, [catId]);

  // Filtragem local
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return categoryItems;
    return categoryItems.filter(
      (t) =>
        t.nome.toLowerCase().includes(q) ||
        t.kanji.includes(q) ||
        t.pt.toLowerCase().includes(q) ||
        t.desc.toLowerCase().includes(q)
    );
  }, [categoryItems, query]);

  return (
    <div className="bg-white border border-black/10 rounded-sm p-6 mb-12 shadow-sm">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-black/5">
        <div className="flex items-center gap-3">
          <span className="font-jp-serif text-3xl text-jp-red bg-jp-paper px-3 py-1 border border-black/5">{kanji}</span>
          <div>
            <h2 className="font-jp-serif text-2xl text-jp-ink">{title}</h2>
            <span className="text-xs text-black/50 tracking-wider uppercase">{filtered.length} técnica(s)</span>
          </div>
        </div>

        {/* Filtro/Busca Exclusivo da Categoria */}
        <div className="relative max-w-xs w-full">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-black/40" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={`Buscar em ${catId}...`}
            className="w-full pl-9 pr-8 py-2 bg-jp-paper border border-black/10 text-xs rounded-sm focus:outline-none focus:border-jp-red"
          />
          {query && (
            <button onClick={() => setQuery("")} className="absolute right-2 top-1/2 -translate-y-1/2 text-black/40 hover:text-jp-red">
              <X size={14} />
            </button>
          )}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-8 text-black/40 text-xs">Nenhuma técnica encontrada para "{query}".</div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((t: TecnicaItem) => (
            <div key={t.nome} className="card-elev bg-jp-paper border border-black/5 p-4 flex flex-col justify-between">
              <div>
                <div className="flex items-baseline justify-between mb-1">
                  <span className="font-jp-serif text-lg font-bold text-jp-ink">{t.nome}</span>
                  <span className="font-jp-serif text-jp-red text-xl">{t.kanji}</span>
                </div>
                <div className="text-xs text-jp-red tracking-wider mb-2 font-medium">{t.pt}</div>
                <p className="text-xs text-black/70 leading-relaxed mb-3">{t.desc}</p>
              </div>

              {/* Renderização condicional do Enbusen para Katas */}
              {catId === "Katas" && (
                <div className="mt-2 pt-2 border-t border-black/5 flex items-center justify-between">
                  <span className="text-[10px] text-black/50 uppercase tracking-widest">Enbusen (Diagrama)</span>
                  <div className="w-12 h-12 bg-white border border-black/10 p-1 rounded-sm grid place-items-center">
                    {t.enbusen_imagem ? (
                      <img src={t.enbusen_imagem} alt={`Enbusen ${t.nome}`} className="w-full h-full object-contain" />
                    ) : (
                      <span className="text-[9px] text-jp-red font-jp-serif">演武線</span>
                    )}
                  </div>
                </div>
              )}

              {/* Player do YouTube em Tempo Real ou Embed Modal */}
              {t.url_video && (
                <button
                  onClick={() => setSelectedVideo(t.url_video || null)}
                  className="mt-3 w-full bg-jp-ink hover:bg-jp-red text-white py-1.5 px-3 text-[11px] uppercase tracking-wider rounded-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <Play size={12} /> Ver Vídeo Demonstrativo
                </button>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Modal de Vídeo */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4" onClick={() => setSelectedVideo(null)}>
          <div className="bg-black max-w-3xl w-full aspect-video relative rounded-md overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-2 right-2 text-white bg-black/60 hover:bg-jp-red p-1.5 rounded-full z-10"
            >
              <X size={18} />
            </button>
            <iframe
              src={selectedVideo}
              title="Demonstração da Técnica"
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
}

export function Tecnicas() {
  return (
    <div className="page-anim">
      <section className="relative bg-jp-ink text-white py-24 overflow-hidden">
        <div className="kanji-watermark" style={{ fontSize: 520, right: -60, top: -100, color: "rgba(188,0,45,0.1)" }}>技術</div>
        <div className="max-w-5xl mx-auto px-5 lg:px-8 relative">
          <div className="text-jp-red tracking-widest uppercase text-xs">Waza</div>
          <h1 className="font-jp-serif text-5xl md:text-6xl mt-2">Técnicas do Shotokan</h1>
          <p className="text-white/70 mt-4 max-w-2xl leading-relaxed">
            Catálogo essencial das <em>waza</em> divididas por categorias. Cada seção possui seu próprio sistema de busca individual.
          </p>
        </div>
      </section>

      <section className="py-16 bg-jp-paper">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          {CATEGORIAS.map((cat) => (
            <Reveal key={cat.id}>
              <CategoryBlock catId={cat.id} title={cat.label} kanji={cat.kanji} />
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Tecnicas;
