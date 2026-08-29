import { useState, useMemo } from "react";
import {
  Search,
  X,
  Play,
  Eye,
  Target,
  Layers,
  Compass,
  Zap,
  Filter,
  Award,
  HelpCircle,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { KatasTableSection } from "@/components/katas/KatasTableSection";
import { TecnicaModal } from "@/components/tecnicas/TecnicaModal";
import { TechniqueImage } from "@/components/tecnicas/visuals/TechniqueImage";
import { ProgressaoFaixasTimeline } from "@/components/katas/ProgressaoFaixasTimeline";
import { ComoEstudarKatasBanner } from "@/components/katas/ComoEstudarKatasBanner";
import { KatasFaqSection } from "@/components/katas/KatasFaqSection";
import { CtaFinalSection } from "@/components/common/CtaFinalSection";
import { TECNICAS, type TecnicaItem } from "@/data/data";
import { KATAS_HEIAN, KATAS_TEKKI, KATAS_AVANCADOS } from "@/data/katasData";

type TagFiltro = "Todas" | "Defesas" | "Socos" | "Chutes" | "Bases";

export function Tecnicas() {
  const [selectedTecnica, setSelectedTecnica] = useState<TecnicaItem | null>(null);

  // Estado para os Filtros Rápidos de Kihon/Técnicas Gerais
  const [activeKihonTag, setActiveKihonTag] = useState<TagFiltro>("Todas");
  const [kihonSearchQuery, setKihonSearchQuery] = useState("");

  // Filtragem unificada de técnicas de Kihon por tag e por busca
  const kihonTecnicasFiltradas = useMemo(() => {
    let result = TECNICAS;

    // Filtrar por Categoria / Tag
    if (activeKihonTag !== "Todas") {
      result = result.filter((t) => t.cat === activeKihonTag);
    }

    // Filtrar por termo de busca
    const q = kihonSearchQuery.trim().toLowerCase();
    if (q) {
      result = result.filter(
        (t) =>
          t.nome.toLowerCase().includes(q) ||
          t.kanji.includes(q) ||
          t.pt.toLowerCase().includes(q) ||
          t.desc.toLowerCase().includes(q)
      );
    }

    return result;
  }, [activeKihonTag, kihonSearchQuery]);

  // Função para navegação suave por âncora
  const scrollToAnchor = (id: string) => {
    const targetElement = document.getElementById(id);
    if (targetElement) {
      const headerOffset = 100;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const tagCounts = useMemo(() => {
    return {
      Todas: TECNICAS.length,
      Defesas: TECNICAS.filter((t) => t.cat === "Defesas").length,
      Socos: TECNICAS.filter((t) => t.cat === "Socos").length,
      Chutes: TECNICAS.filter((t) => t.cat === "Chutes").length,
      Bases: TECNICAS.filter((t) => t.cat === "Bases").length,
    };
  }, []);

  return (
    <div className="page-anim min-h-screen bg-jp-paper">

      {/* ─── SEÇÃO 1: HERO & ESTATÍSTICAS DA BIBLIOTECA ───────────────── */}
      <section
        className="relative bg-jp-ink text-white py-20 lg:py-24 overflow-hidden border-b-4 border-jp-red"
        role="region"
        aria-label="Introdução à biblioteca de técnicas e katas"
      >
        <div
          className="kanji-watermark"
          style={{ fontSize: 520, right: -60, top: -100, color: "rgba(188,0,45,0.08)" }}
          aria-hidden="true"
        >
          技術
        </div>

        <div className="max-w-7xl mx-auto px-5 lg:px-8 relative">
          <h1 className="font-jp-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-wide mt-2 text-white">
            Biblioteca de Técnicas & Katas Shotokan
          </h1>

          <p className="text-white/80 mt-4 max-w-3xl leading-relaxed text-sm sm:text-base font-normal">
            No Karate Dō, a maestria se desenvolve na harmonia dos três pilares clássicos:{" "}
            <strong className="text-jp-gold">Kihon</strong> (a repetição dos fundamentos de bases, golpes e bloqueios),{" "}
            <strong className="text-jp-gold">Kata</strong> (a sequência codificada de combate contra múltiplos oponentes virtuais) e{" "}
            <strong className="text-jp-gold">Kumite</strong> (a aplicação prática do ritmo, distância e controle).
          </p>

          {/* Cards de Estatísticas em Destaque */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 mt-10 pt-8 border-t border-white/10">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-sm shadow-md hover:border-jp-red/50 transition-all flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-jp-red/20 border border-jp-red/40 flex items-center justify-center text-jp-gold shrink-0">
                <Target size={24} aria-hidden="true" />
              </div>
              <div>
                <div className="text-2xl lg:text-3xl font-jp-serif font-bold text-white">
                  26 Katas Oficiais
                </div>
                <div className="text-xs text-white/60 font-medium mt-1">
                  Do Heian Shodan ao Unsu e Gojushiho
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-sm shadow-md hover:border-jp-red/50 transition-all flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-jp-red/20 border border-jp-red/40 flex items-center justify-center text-sky-400 shrink-0">
                <Layers size={24} aria-hidden="true" />
              </div>
              <div>
                <div className="text-2xl lg:text-3xl font-jp-serif font-bold text-white">
                  3 Grupos de Estudo
                </div>
                <div className="text-xs text-white/60 font-medium mt-1">
                  Séries Heian (Básico), Tekki e Avançados
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-sm shadow-md hover:border-jp-red/50 transition-all flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-jp-red/20 border border-jp-red/40 flex items-center justify-center text-amber-400 shrink-0">
                <Compass size={24} aria-hidden="true" />
              </div>
              <div>
                <div className="text-2xl lg:text-3xl font-jp-serif font-bold text-white">
                  Análise de Bunkai & Embusen
                </div>
                <div className="text-xs text-white/60 font-medium mt-1">
                  Vídeos HD e diagramas espaciais completos
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Barra de Atalhos Rápidos da Página */}
      <nav
        aria-label="Atalhos rápidos para as seções da página"
        className="sticky top-16 z-30 bg-jp-paper/95 backdrop-blur-md border-b border-black/10 py-3.5 px-4 shadow-2xs"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 overflow-x-auto scrollbar-none">
          <span className="text-[11px] font-bold uppercase tracking-wider text-black/50 hidden md:inline-block shrink-0">
            Navegação Rápida:
          </span>
          <div className="flex items-center gap-2 overflow-x-auto">
            <button
              onClick={() => scrollToAnchor("secao-trilha-faixas")}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-black/10 bg-white text-xs font-semibold text-jp-ink hover:border-jp-red hover:text-jp-red transition-all cursor-pointer whitespace-nowrap shadow-2xs"
            >
              <Award size={14} className="text-jp-red" />
              <span>Evolução por Faixas</span>
            </button>

            <button
              onClick={() => scrollToAnchor("secao-metodologia")}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-black/10 bg-white text-xs font-semibold text-jp-ink hover:border-jp-red hover:text-jp-red transition-all cursor-pointer whitespace-nowrap shadow-2xs"
            >
              <Compass size={14} className="text-jp-red" />
              <span>Embusen vs Bunkai</span>
            </button>

            <button
              onClick={() => scrollToAnchor("secao-katas")}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-black/10 bg-white text-xs font-semibold text-jp-ink hover:border-jp-red hover:text-jp-red transition-all cursor-pointer whitespace-nowrap shadow-2xs"
            >
              <Target size={14} className="text-jp-red" />
              <span>Tabelas de Katas (26)</span>
            </button>

            <button
              onClick={() => scrollToAnchor("secao-kihon")}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-black/10 bg-white text-xs font-semibold text-jp-ink hover:border-jp-red hover:text-jp-red transition-all cursor-pointer whitespace-nowrap shadow-2xs"
            >
              <Zap size={14} className="text-jp-red" />
              <span>Catálogo Geral de Kihon</span>
            </button>

            <button
              onClick={() => scrollToAnchor("secao-faq")}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-black/10 bg-white text-xs font-semibold text-jp-ink hover:border-jp-red hover:text-jp-red transition-all cursor-pointer whitespace-nowrap shadow-2xs"
            >
              <HelpCircle size={14} className="text-jp-red" />
              <span>FAQ & Dúvidas</span>
            </button>
          </div>
        </div>
      </nav>

      {/* CONTEÚDO DA PÁGINA */}
      <main className="py-12 lg:py-16 space-y-16">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 space-y-16">

          {/* ─── MEIO DA PÁGINA: LINHA DO TEMPO DE FAIXAS & METODOLOGIA ─── */}
          <section id="secao-trilha-faixas" className="scroll-mt-32 space-y-12">
            <Reveal>
              <ProgressaoFaixasTimeline />
            </Reveal>

            <div id="secao-metodologia" className="scroll-mt-32">
              <Reveal>
                <ComoEstudarKatasBanner />
              </Reveal>
            </div>
          </section>

          <hr className="border-t border-black/10" />

          {/* ─── SEÇÃO 3: TABELAS CATEGORIZADAS DE KATAS ───────────────── */}
          <section id="secao-katas" className="scroll-mt-32 space-y-12">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-black/10 pb-4">
              <div>
                <h2 className="font-jp-serif text-3xl lg:text-4xl font-bold text-jp-ink mt-1">
                  Catálogo dos 26 Katas do Shotokan
                </h2>
              </div>
              <span className="text-xs text-black/50 bg-white border border-black/10 px-3 py-1.5 rounded-sm font-medium self-start sm:self-auto">
                Clique no kata para ver a análise completa em página dedicada
              </span>
            </div>

            {/* Tabela 1: Heian */}
            <Reveal>
              <KatasTableSection
                titulo="Série Heian"
                subtitulo="Nível Básico & Kyu (Paz Mental 1 a 5)"
                kanji="平安"
                katas={KATAS_HEIAN}
              />
            </Reveal>

            {/* Tabela 2: Tekki */}
            <Reveal>
              <KatasTableSection
                titulo="Série Tekki"
                subtitulo="Nível Intermediário (Cavaleiro de Ferro 1 a 3)"
                kanji="鉄騎"
                katas={KATAS_TEKKI}
              />
            </Reveal>

            {/* Tabela 3: Avançados */}
            <Reveal>
              <KatasTableSection
                titulo="Série Avançada"
                subtitulo="Sentei & Kaishin Katas (Exames de Dan & Competição)"
                kanji="型"
                katas={KATAS_AVANCADOS}
              />
            </Reveal>
          </section>

          <hr className="border-t border-black/10" />

          {/* ─── SEÇÃO 4: TÉCNICAS GERAIS / KIHON ─────────────────────── */}
          <section id="secao-kihon" className="scroll-mt-32 space-y-8">
            <div className="bg-white border border-black/10 rounded-sm p-6 lg:p-8 shadow-sm space-y-6">
              {/* Header da Seção Kihon */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-black/10">
                <div>
                  <h2 className="font-jp-serif text-2xl lg:text-3xl font-bold text-jp-ink mt-1">
                    Bases, Socos, Chutes e Defesas
                  </h2>
                  <p className="text-xs sm:text-sm text-black/60 mt-1">
                    Explore o acervo de técnicas individuais com busca em tempo real e visualização de detalhes.
                  </p>
                </div>

                {/* Campo de Busca Geral do Kihon */}
                <div className="relative max-w-sm w-full">
                  <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-black/40" />
                  <input
                    type="text"
                    value={kihonSearchQuery}
                    onChange={(e) => setKihonSearchQuery(e.target.value)}
                    placeholder="Buscar técnica (ex: Gyaku-zuki, Age-uke)..."
                    className="w-full pl-10 pr-9 py-2.5 bg-jp-paper border border-black/10 text-xs sm:text-sm rounded-sm focus:outline-none focus:border-jp-red transition-colors"
                    aria-label="Buscar técnica no acervo de Kihon"
                  />
                  {kihonSearchQuery && (
                    <button
                      onClick={() => setKihonSearchQuery("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-black/40 hover:text-jp-red p-1"
                      aria-label="Limpar campo de busca"
                    >
                      <X size={14} />
                    </button>
                  )}
                </div>
              </div>

              {/* Tags de Filtro Rápido */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none" role="group" aria-label="Filtros rápidos de Kihon">
                <span className="text-xs font-bold uppercase tracking-wider text-black/40 mr-1 flex items-center gap-1 shrink-0">
                  <Filter size={13} /> Filtrar por:
                </span>

                {(["Todas", "Defesas", "Socos", "Chutes", "Bases"] as TagFiltro[]).map((tag) => {
                  const isActive = activeKihonTag === tag;
                  const count = tagCounts[tag];

                  return (
                    <button
                      key={tag}
                      onClick={() => setActiveKihonTag(tag)}
                      className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer shrink-0 shadow-2xs ${
                        isActive
                          ? "bg-jp-red text-white shadow-xs font-bold"
                          : "bg-jp-paper border border-black/10 text-black/70 hover:border-jp-red hover:text-jp-red"
                      }`}
                      type="button"
                    >
                      <span>{tag}</span>
                      <span
                        className={`px-2 py-0.2 text-[10px] font-mono rounded-full ${
                          isActive ? "bg-white/20 text-white" : "bg-black/5 text-black/60"
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Grid de Cards de Técnicas */}
              {kihonTecnicasFiltradas.length === 0 ? (
                <div className="text-center py-12 bg-jp-paper border border-dashed border-black/15 rounded-sm">
                  <div className="font-jp-serif text-4xl text-black/30 mb-2">無</div>
                  <p className="text-sm font-semibold text-black/60">
                    Nenhuma técnica encontrada para "{kihonSearchQuery}" {activeKihonTag !== "Todas" ? `na categoria ${activeKihonTag}` : ""}.
                  </p>
                  <button
                    onClick={() => {
                      setKihonSearchQuery("");
                      setActiveKihonTag("Todas");
                    }}
                    className="mt-3 text-xs text-jp-red font-bold hover:underline cursor-pointer"
                  >
                    Limpar filtros de busca
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {kihonTecnicasFiltradas.map((t) => (
                    <div
                      key={t.nome}
                      onClick={() => setSelectedTecnica(t)}
                      className="card-elev bg-jp-paper border border-black/10 p-5 rounded-sm flex flex-col justify-between cursor-pointer hover:border-jp-red/50 transition-all group"
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setSelectedTecnica(t);
                        }
                      }}
                      aria-label={`Ver detalhes da técnica ${t.nome}`}
                    >
                      <div>
                        {/* Miniatura: foto externa quando houver, senão a ilustração vetorial */}
                        <div className="mb-3 flex h-32 items-center justify-center overflow-hidden rounded-xs border border-black/5 bg-white">
                          <TechniqueImage
                            cat={t.cat}
                            compact
                            nome={t.nome}
                            showGuides={false}
                            src={t.url_imagem}
                            tipo={t.tipo}
                          />
                        </div>

                        <div className="flex items-baseline justify-between mb-1.5">
                          <span className="font-jp-serif text-lg font-bold text-jp-ink group-hover:text-jp-red transition-colors">
                            {t.nome}
                          </span>
                          <span className="font-jp-serif text-lg font-bold text-jp-red shrink-0 ml-2">
                            {t.kanji}
                          </span>
                        </div>

                        <div className="flex items-center justify-between gap-2 mb-3">
                          <span className="text-xs text-jp-red tracking-wider font-semibold">
                            {t.pt}
                          </span>
                          <span className="text-[10px] uppercase tracking-wider text-black/70 bg-black/5 px-2 py-0.5 font-semibold rounded-xs border border-black/5">
                            {t.tipo}
                          </span>
                        </div>

                        <p className="text-xs text-black/75 leading-relaxed font-medium line-clamp-3 mb-3">
                          {t.desc}
                        </p>
                      </div>

                      <div className="mt-3 pt-3 border-t border-black/5 flex items-center justify-between">
                        <span className="text-[11px] font-semibold text-jp-gold flex items-center gap-1 group-hover:underline">
                          <Eye size={13} aria-hidden="true" /> Detalhes & Pontos-chave
                        </span>
                        {t.url_video && (
                          <span className="text-[10px] bg-jp-ink text-white px-2 py-0.5 rounded-xs flex items-center gap-1 font-mono">
                            <Play size={10} aria-hidden="true" /> Vídeo
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>

          <hr className="border-t border-black/10" />

          {/* ─── FINAL DA PÁGINA: FAQ & CALL TO ACTION ──────────────────── */}
          <section id="secao-faq" className="scroll-mt-32 space-y-12">
            <Reveal>
              <KatasFaqSection />
            </Reveal>

            <Reveal>
              <CtaFinalSection />
            </Reveal>
          </section>

        </div>
      </main>

      {/* Modal de Detalhes da Técnica */}
      {selectedTecnica && (
        <TecnicaModal tecnica={selectedTecnica} onClose={() => setSelectedTecnica(null)} />
      )}
    </div>
  );
}

export default Tecnicas;
