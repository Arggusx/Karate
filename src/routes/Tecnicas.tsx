import { useState, useMemo } from "react";
import { Search, X, Play, Eye, Compass, Shield, Target, Award, Footprints } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { KataModal } from "@/components/KataModal";
import { TecnicaModal, type TecnicaItem } from "@/components/TecnicaModal";
import { CATEGORIAS_TECNICAS, TECNICAS, KATAS_SHOTOKAN, type KataItem } from "@/Data/data";

interface CategoryBlockProps {
  catId: string;
  title: string;
  kanji: string;
  onSelectTecnica: (t: TecnicaItem) => void;
}

function CategoryBlock({ catId, title, kanji, onSelectTecnica }: CategoryBlockProps) {
  const [query, setQuery] = useState("");

  const categoryItems = useMemo(() => {
    return TECNICAS.filter((t) => t.cat === catId);
  }, [catId]);

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
    <div
      id={`secao-${catId.toLowerCase()}`}
      className="scroll-mt-36 bg-white border border-black/10 rounded-sm p-6 mb-12 shadow-sm"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-black/5">
        <div className="flex items-center gap-3">
          <span className="font-jp-serif text-3xl text-jp-red bg-jp-paper px-3 py-1 border border-black/5">{kanji}</span>
          <div>
            <h2 className="font-jp-serif text-2xl text-jp-ink">{title}</h2>
            <span className="text-xs text-black/50 tracking-wider uppercase">{filtered.length} técnica(s)</span>
          </div>
        </div>

        {/* Filtro / Busca */}
        <div className="relative max-w-xs w-full">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-black/40" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={`Buscar em ${title}...`}
            className="w-full pl-9 pr-8 py-2 bg-jp-paper border border-black/10 text-xs rounded-sm focus:outline-none focus:border-jp-red"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-black/40 hover:text-jp-red"
            >
              <X size={14} />
            </button>
          )}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-8 text-black/40 text-xs">Nenhuma técnica encontrada para "{query}".</div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((t) => (
            <div
              key={t.nome}
              onClick={() => onSelectTecnica(t)}
              className="card-elev bg-jp-paper border border-black/5 p-5 flex flex-col justify-between cursor-pointer hover:border-jp-red/40 transition-colors"
            >
              <div>
                <div className="flex items-baseline justify-between mb-1">
                  <span className="font-jp-serif text-lg font-bold text-jp-ink">{t.nome}</span>
                  <span className="text-[10px] uppercase tracking-wider text-jp-red bg-jp-red/10 px-2 py-0.5 font-semibold">
                    {t.tipo}
                  </span>
                </div>
                <div className="text-xs text-jp-red tracking-wider mb-2 font-medium">{t.pt}</div>
                <p className="text-xs text-black/70 leading-relaxed mb-3 line-clamp-3">{t.desc}</p>
              </div>

              <div className="mt-3 pt-3 border-t border-black/5 flex items-center justify-between">
                <span className="text-[11px] font-medium text-jp-gold flex items-center gap-1">
                  <Eye size={13} /> Ver detalhes da técnica
                </span>
                {t.url_video && (
                  <span className="text-[10px] bg-jp-ink text-white px-2 py-0.5 rounded-xs flex items-center gap-1">
                    <Play size={10} /> Vídeo
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function KatasBlock({ onSelectKata }: { onSelectKata: (k: KataItem) => void }) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return KATAS_SHOTOKAN;
    return KATAS_SHOTOKAN.filter(
      (k) =>
        k.nome.toLowerCase().includes(q) ||
        k.significado.toLowerCase().includes(q) ||
        k.nivel.toLowerCase().includes(q) ||
        k.categoria.toLowerCase().includes(q) ||
        k.text.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div
      id="secao-katas"
      className="scroll-mt-36 bg-white border border-black/10 rounded-sm p-6 mb-12 shadow-sm"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-black/5">
        <div className="flex items-center gap-3">
          <span className="font-jp-serif text-3xl text-jp-red bg-jp-paper px-3 py-1 border border-black/5">型</span>
          <div>
            <h2 className="font-jp-serif text-2xl text-jp-ink">Katas do Shotokan</h2>
            <span className="text-xs text-black/50 tracking-wider uppercase">{filtered.length} kata(s) oficiais</span>
          </div>
        </div>

        {/* Filtro / Busca de Katas */}
        <div className="relative max-w-xs w-full">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-black/40" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar kata por nome, nível ou categoria..."
            className="w-full pl-9 pr-8 py-2 bg-jp-paper border border-black/10 text-xs rounded-sm focus:outline-none focus:border-jp-red"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-black/40 hover:text-jp-red"
            >
              <X size={14} />
            </button>
          )}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-8 text-black/40 text-xs">Nenhum kata encontrado para "{query}".</div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((k) => (
            <div
              key={k.nome}
              onClick={() => onSelectKata(k)}
              className="card-elev bg-jp-paper border border-black/5 p-5 flex flex-col justify-between cursor-pointer hover:border-jp-red/40 transition-colors"
            >
              <div>
                <div className="flex items-baseline justify-between mb-1">
                  <span className="font-jp-serif text-lg font-bold text-jp-ink">{k.nome}</span>
                  <span className="text-[10px] uppercase tracking-wider text-jp-red bg-jp-red/10 px-2 py-0.5 font-semibold">
                    {k.nivel}
                  </span>
                </div>
                <div className="text-xs text-jp-gold tracking-wider mb-2 font-medium">
                  {k.mov} movimentos · {k.categoria}
                </div>
                <div className="text-xs font-semibold text-jp-red mb-1">
                  "{k.significado}"
                </div>
                <p className="text-xs text-black/70 leading-relaxed mb-3 line-clamp-3">{k.text}</p>
              </div>

              <div className="mt-3 pt-3 border-t border-black/5 flex items-center justify-between">
                <span className="text-[11px] font-medium text-jp-gold flex items-center gap-1">
                  <Eye size={13} /> Ver detalhes do kata
                </span>
                {k.videoUrl ? (
                  <span className="text-[10px] bg-jp-ink text-white px-2 py-0.5 rounded-xs flex items-center gap-1">
                    <Play size={10} /> Vídeo
                  </span>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function Tecnicas() {
  const [selectedKata, setSelectedKata] = useState<KataItem | null>(null);
  const [selectedTecnica, setSelectedTecnica] = useState<TecnicaItem | null>(null);

  const scrollToCategory = (id: string) => {
    const targetElement = document.getElementById(`secao-${id.toLowerCase()}`);
    if (targetElement) {
      const headerOffset = 130; // Offset considerando o Header fixo + Barra de Filtros
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const navCategories = [
    { id: "Katas", label: "Katas", count: KATAS_SHOTOKAN.length, icon: Compass },
    { id: "Socos", label: "Socos e Golpes", count: TECNICAS.filter((t) => t.cat === "Socos").length, icon: Target },
    { id: "Chutes", label: "Chutes", count: TECNICAS.filter((t) => t.cat === "Chutes").length, icon: Footprints },
    { id: "Defesas", label: "Defesas", count: TECNICAS.filter((t) => t.cat === "Defesas").length, icon: Shield },
    { id: "Bases", label: "Bases e Posturas", count: TECNICAS.filter((t) => t.cat === "Bases").length, icon: Award },
  ];

  return (
    <div className="page-anim">
      {/* Banner Principal */}
      <section className="relative bg-jp-ink text-white py-24 overflow-hidden">
        <div className="kanji-watermark" style={{ fontSize: 520, right: -60, top: -100, color: "rgba(188,0,45,0.1)" }}>技術</div>
        <div className="max-w-5xl mx-auto px-5 lg:px-8 relative">
          <div className="text-jp-red tracking-widest uppercase text-xs">Waza & Kata</div>
          <h1 className="font-jp-serif text-5xl md:text-6xl mt-2">Técnicas e Katas do Shotokan</h1>
          <p className="text-white/70 mt-4 max-w-2xl leading-relaxed">
            Catálogo completo das <em>waza</em> (socos, chutes, defesas e bases) e dos <strong>26 katas oficiais</strong> do estilo Shotokan. Cada seção possui seu próprio sistema de busca individual e modal de detalhes técnicos.
          </p>
        </div>
      </section>

      {/* Barra Fixa de Filtro Rápido por Categoria */}
      <nav
        aria-label="Navegação por categorias de técnicas"
        className="sticky top-16 z-30 bg-jp-paper/95 backdrop-blur-md border-b border-black/10 py-3.5 px-4 shadow-xs"
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-3 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
          <span className="text-[11px] font-bold uppercase tracking-wider text-black/40 hidden md:inline-block shrink-0">
            Categorias:
          </span>
          <div className="flex items-center gap-2 overflow-x-auto">
            {navCategories.map((cat) => {
              const IconComponent = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => scrollToCategory(cat.id)}
                  className="group flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-black/10 bg-white text-xs font-semibold text-jp-ink hover:border-jp-red hover:text-jp-red hover:bg-jp-paper transition-all cursor-pointer shadow-2xs hover:shadow-xs active:scale-95 whitespace-nowrap"
                  type="button"
                >
                  <IconComponent size={14} className="text-jp-red group-hover:scale-110 transition-transform" />
                  <span>{cat.label}</span>
                  <span className="bg-black/5 text-black/60 group-hover:bg-jp-red/10 group-hover:text-jp-red px-1.5 py-0.2 rounded-full text-[10px] font-mono">
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Conteúdo com os Blocos de Categorias */}
      <section className="py-16 bg-jp-paper">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          {/* 1. Seção de Katas */}
          <Reveal>
            <KatasBlock onSelectKata={(k) => setSelectedKata(k)} />
          </Reveal>

          {/* 2. Categorias de Técnicas (Socos, Chutes, Defesas, Bases) */}
          {CATEGORIAS_TECNICAS.filter((cat) => cat.id !== "Katas").map((cat) => (
            <Reveal key={cat.id}>
              <CategoryBlock
                catId={cat.id}
                title={cat.label}
                kanji={cat.kanji}
                onSelectTecnica={(t) => setSelectedTecnica(t)}
              />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Modal de Kata */}
      {selectedKata && <KataModal kata={selectedKata} onClose={() => setSelectedKata(null)} />}

      {/* Modal de Técnica */}
      {selectedTecnica && <TecnicaModal tecnica={selectedTecnica} onClose={() => setSelectedTecnica(null)} />}
    </div>
  );
}

export default Tecnicas;
