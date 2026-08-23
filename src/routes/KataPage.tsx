import { useLayoutEffect, useEffect, useState, useCallback } from "react";
import { useParams, Link, useLocation, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Activity,
  Award,
  Shield,
  Compass,
  CheckCircle2,
  Sparkles,
  Layers,
  Keyboard,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { KataVideoPlayer } from "@/components/KataVideoPlayer";
import { KataEmbusenGallery } from "@/components/KataEmbusenGallery";
import { KATAS_26, type NivelDificuldade } from "@/data/katasData";

// ─── SEO: Dynamic <head> meta tags ───────────────────────────────────────────
function useDocumentMeta(title: string, description: string, ogTitle?: string) {
  useEffect(() => {
    // Title
    document.title = title;

    // Meta description
    let metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = description;

    // OpenGraph: og:title
    let ogTitleEl = document.querySelector('meta[property="og:title"]') as HTMLMetaElement | null;
    if (!ogTitleEl) {
      ogTitleEl = document.createElement("meta");
      ogTitleEl.setAttribute("property", "og:title");
      document.head.appendChild(ogTitleEl);
    }
    ogTitleEl.content = ogTitle ?? title;

    // OpenGraph: og:description
    let ogDescEl = document.querySelector('meta[property="og:description"]') as HTMLMetaElement | null;
    if (!ogDescEl) {
      ogDescEl = document.createElement("meta");
      ogDescEl.setAttribute("property", "og:description");
      document.head.appendChild(ogDescEl);
    }
    ogDescEl.content = description;

    // OpenGraph: og:type
    let ogTypeEl = document.querySelector('meta[property="og:type"]') as HTMLMetaElement | null;
    if (!ogTypeEl) {
      ogTypeEl = document.createElement("meta");
      ogTypeEl.setAttribute("property", "og:type");
      document.head.appendChild(ogTypeEl);
    }
    ogTypeEl.content = "article";

    return () => {
      document.title = "Karate Shotokan";
    };
  }, [title, description, ogTitle]);
}

// ─── Nivel badge color helper ────────────────────────────────────────────────
function nivelBadgeClasses(nivel: NivelDificuldade): string {
  switch (nivel) {
    case "Iniciante":
      return "bg-emerald-100 text-emerald-800 border-emerald-300";
    case "Intermediário":
      return "bg-amber-100 text-amber-800 border-amber-300";
    case "Intermediário-Avançado":
      return "bg-orange-100 text-orange-800 border-orange-300";
    case "Avançado":
      return "bg-red-100 text-red-800 border-red-300";
    case "Especialista":
      return "bg-purple-100 text-purple-800 border-purple-300";
    default:
      return "bg-black/5 text-black/70 border-black/10";
  }
}

// ─── Main Component ──────────────────────────────────────────────────────────
export function KataPage() {
  const { slug } = useParams<{ slug: string }>();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // Page transition animation state (CSS-driven)
  const [transitionKey, setTransitionKey] = useState(slug);
  const [transitionDirection, setTransitionDirection] = useState<"left" | "right" | "none">("none");

  // Scroll to top on navigation
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  // Trigger transition animation when slug changes
  useEffect(() => {
    if (slug !== transitionKey) {
      // Short delay for animation re-trigger
      const timer = setTimeout(() => {
        setTransitionKey(slug);
        setTransitionDirection("none");
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [slug, transitionKey]);

  const currentIndex = KATAS_26.findIndex((k) => k.id === slug);
  const kata = KATAS_26[currentIndex];

  // Circular navigation
  const totalKatas = KATAS_26.length;
  const prevIndex = (currentIndex - 1 + totalKatas) % totalKatas;
  const nextIndex = (currentIndex + 1) % totalKatas;
  const prevKata = KATAS_26[prevIndex];
  const nextKata = KATAS_26[nextIndex];

  // Keyboard navigation: ArrowLeft / ArrowRight
  const navigatePrev = useCallback(() => {
    if (!prevKata) return;
    setTransitionDirection("right");
    setTimeout(() => navigate(`/katas/${prevKata.id}`), 10);
  }, [prevKata, navigate]);

  const navigateNext = useCallback(() => {
    if (!nextKata) return;
    setTransitionDirection("left");
    setTimeout(() => navigate(`/katas/${nextKata.id}`), 10);
  }, [nextKata, navigate]);

  useEffect(() => {
    if (!kata) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept when user is typing in an input/textarea or modal is open
      const target = e.target as HTMLElement;
      if (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable) return;

      if (e.key === "ArrowLeft") {
        e.preventDefault();
        navigatePrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        navigateNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [kata, navigatePrev, navigateNext]);

  // Dynamic SEO meta tags
  useDocumentMeta(
    kata
      ? `Kata ${kata.nome} - Karate Shotokan | Guia Completo e Bunkai`
      : "Kata não encontrado - Karate Shotokan",
    kata
      ? `Aprenda o Kata ${kata.nome} do Karate Shotokan. Veja o vídeo, diagramas de Embusen, significado do nome, ${kata.quantidadeMovimentos} movimentos, posições de kiai e o Bunkai passo a passo.`
      : "O kata solicitado não foi encontrado nos registros oficiais do Shotokan.",
    kata ? `Kata ${kata.nome} - Shotokan` : undefined
  );

  // ─── 404 amigável ──────────────────────────────────────────────────────────
  if (!kata || currentIndex === -1) {
    return (
      <div className="page-anim">
        <section className="relative bg-jp-ink text-white py-24 overflow-hidden" role="alert" aria-live="polite">
          <div
            className="kanji-watermark"
            style={{ fontSize: 520, right: -60, top: -100, color: "rgba(188,0,45,0.1)" }}
            aria-hidden="true"
          >
            型
          </div>
          <div className="max-w-5xl mx-auto px-5 lg:px-8 relative text-center">
            <h1 className="font-jp-serif text-5xl font-bold mt-2">Kata não encontrado</h1>
            <p className="text-white/70 mt-4 max-w-md mx-auto">
              O kata com identificador <code className="text-jp-gold font-mono">"{slug}"</code> não foi localizado nos registros oficiais.
            </p>
            <Link
              to="/tecnicas"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-jp-red text-white font-semibold text-sm rounded-sm hover:bg-jp-red-bright transition-colors shadow-md"
              aria-label="Voltar para a tabela completa de katas"
            >
              <ArrowLeft size={16} aria-hidden="true" />
              Voltar para Tabela de Katas
            </Link>
          </div>
        </section>
      </div>
    );
  }

  // CSS-based transition class
  const transitionClass =
    transitionDirection === "left"
      ? "kata-slide-left"
      : transitionDirection === "right"
      ? "kata-slide-right"
      : "kata-fade-in";

  return (
    <div className={`${transitionClass} min-h-screen bg-jp-paper`} key={transitionKey}>
      {/* ─── 0. BOTÃO VOLTAR (TOPO) ─────────────────────────────────────── */}
      <div className="bg-jp-paper border-b border-black/5">
        <div className="max-w-6xl mx-auto px-5 lg:px-8 py-3">
          <Link
            to="/tecnicas"
            className="inline-flex items-center gap-2 text-sm font-semibold text-black/60 hover:text-jp-red transition-colors"
            aria-label="Voltar para a tabela completa de katas"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            ← Voltar para a Tabela de Katas
          </Link>
        </div>
      </div>

      {/* ─── 1. CABEÇALHO / VISÃO GERAL ─────────────────────────────── */}
      <section
        className="relative bg-jp-ink text-white py-20 overflow-hidden border-b-4 border-jp-red"
        role="region"
        aria-label={`Visão geral do kata ${kata.nome}`}
      >
        <div
          className="kanji-watermark"
          style={{ fontSize: 480, right: -40, top: -80, color: "rgba(188,0,45,0.08)" }}
          aria-hidden="true"
        >
          型
        </div>
        <div className="max-w-6xl mx-auto px-5 lg:px-8 relative">
          <div className="flex items-center gap-3 text-jp-red tracking-widest uppercase text-xs font-semibold mb-2">
            <Link
              to="/tecnicas"
              className="hover:underline flex items-center gap-1 text-white/60 hover:text-white transition-colors"
              aria-label="Voltar para a lista de katas"
            >
              <ArrowLeft size={14} aria-hidden="true" /> Katas
            </Link>
            <span aria-hidden="true">•</span>
            <span>Série {kata.categoria}</span>
            <span aria-hidden="true">•</span>
            <span className="text-jp-gold">Kata #{currentIndex + 1} de {totalKatas}</span>
          </div>

          <h1 className="font-jp-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-wide mt-1 text-white">
            {kata.nome}
          </h1>

          <p className="text-jp-gold font-jp-serif text-xl sm:text-2xl mt-2 italic">
            "{kata.significadoNome}"
          </p>

          {/* Cards de Métricas Principais */}
          <div
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-white/10"
            role="list"
            aria-label="Métricas do kata"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-sm" role="listitem">
              <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-white/50">
                <Award size={14} className="text-jp-gold" aria-hidden="true" />
                <span>Faixa Sugerida</span>
              </div>
              <div className="text-sm sm:text-base font-bold text-white mt-1">
                {kata.faixaRecomendada}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-sm" role="listitem">
              <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-white/50">
                <Shield size={14} className="text-jp-red" aria-hidden="true" />
                <span>Dificuldade</span>
              </div>
              <div className="mt-1">
                <span
                  className={`inline-block px-2.5 py-0.5 rounded-xs text-xs font-bold border ${nivelBadgeClasses(kata.nivelDificuldade)}`}
                >
                  {kata.nivelDificuldade}
                </span>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-sm" role="listitem">
              <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-white/50">
                <Activity size={14} className="text-sky-400" aria-hidden="true" />
                <span>Movimentos</span>
              </div>
              <div className="text-2xl font-jp-serif font-bold text-white mt-0.5">
                {kata.quantidadeMovimentos}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-sm" role="listitem">
              <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-white/50">
                <Sparkles size={14} className="text-amber-400" aria-hidden="true" />
                <span>Kiai</span>
              </div>
              <div className="text-xs sm:text-sm font-semibold text-white mt-1">
                {kata.posicoesKiai}
              </div>
            </div>
          </div>

          {/* Técnicas em Destaque */}
          <div className="mt-4 bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-sm flex flex-col sm:flex-row sm:items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-jp-gold shrink-0 flex items-center gap-1.5">
              <CheckCircle2 size={15} aria-hidden="true" /> Técnicas Destaque:
            </span>
            <span className="text-xs text-white/85 leading-relaxed font-medium">
              {kata.tecnicasDestaque}
            </span>
          </div>
        </div>
      </section>

      {/* Conteúdo Principal da Página */}
      <section className="py-12 bg-jp-paper" role="main">
        <div className="max-w-6xl mx-auto px-5 lg:px-8 space-y-12">

          {/* ─── 2. SEÇÃO DE MÍDIA E DIAGRAMA (VÍDEO + EMBUSEN) ────────── */}
          <Reveal>
            <div className="space-y-8" role="region" aria-label="Vídeo e diagramas de Embusen">
              <KataVideoPlayer videoUrl={kata.videoUrl} kataNome={kata.nome} />
              <KataEmbusenGallery
                embusenOficialImg={kata.embusenOficialImg}
                embusenCompletoImg={kata.embusenCompletoImg}
                kataNome={kata.nome}
              />
            </div>
          </Reveal>

          {/* ─── 3. SEÇÃO BUNKAI (APLICAÇÃO PRÁTICA) ─────────────────── */}
          <Reveal>
            <div className="space-y-6" role="region" aria-label="Bunkai — Aplicação prática em combate">
              <div className="flex items-center justify-between border-b border-black/10 pb-3">
                <div className="flex items-center gap-2 font-jp-serif text-2xl font-bold text-jp-ink">
                  <BookOpen className="text-jp-red" size={24} aria-hidden="true" />
                  <h2>Bunkai (Aplicação Prática em Combate)</h2>
                </div>
                <span className="text-xs bg-jp-red/10 text-jp-red font-semibold px-3 py-1 rounded-full border border-jp-red/20 hidden sm:inline-block">
                  Oyo & Bunkai Kumite
                </span>
              </div>

              {kata.bunkai && kata.bunkai.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5" role="list" aria-label="Aplicações de bunkai">
                  {kata.bunkai.map((item, idx) => {
                    const parts = item.split(":");
                    const titulo = parts.length > 1 ? parts[0].trim() : `Aplicação ${idx + 1}`;
                    const descricao = parts.length > 1 ? parts.slice(1).join(":").trim() : item;

                    return (
                      <div
                        key={idx}
                        className="bg-white border border-black/10 rounded-sm p-5 shadow-sm hover:border-jp-red/30 transition-colors flex flex-col justify-between"
                        role="listitem"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-2 pb-2 border-b border-black/5">
                            <span className="font-jp-serif text-sm font-bold text-jp-red">
                              {titulo}
                            </span>
                            <span className="text-[10px] font-mono font-bold bg-black/5 text-black/60 px-2 py-0.5 rounded-full">
                              #0{idx + 1}
                            </span>
                          </div>
                          <p className="text-xs text-black/80 leading-relaxed font-medium">
                            {descricao}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="bg-white border border-black/10 p-6 rounded-sm text-center text-xs text-black/50">
                  Explicação de Bunkai em estruturação.
                </div>
              )}
            </div>
          </Reveal>

          {/* ─── 4. SEÇÃO PASSO A PASSO (MOVIMENTO POR MOVIMENTO) ─────── */}
          <Reveal>
            <div className="space-y-6" role="region" aria-label="Sequência completa de movimentos">
              <div className="flex items-center justify-between border-b border-black/10 pb-3">
                <div className="flex items-center gap-2 font-jp-serif text-2xl font-bold text-jp-ink">
                  <Layers className="text-jp-red" size={24} aria-hidden="true" />
                  <h2>Sequência Completa de Movimentos</h2>
                </div>
                <span className="text-xs text-black/50 font-mono">
                  1 a {kata.quantidadeMovimentos} Passos
                </span>
              </div>

              <div className="bg-white border border-black/10 rounded-sm shadow-sm overflow-hidden">
                <div className="bg-jp-ink text-white px-6 py-3 text-xs uppercase tracking-wider font-semibold flex justify-between items-center">
                  <span>Passo a Passo Oficial</span>
                  <span>{kata.posicoesKiai}</span>
                </div>

                <div className="divide-y divide-black/5" role="list" aria-label="Lista de movimentos">
                  {kata.movimentos.map((mov, idx) => {
                    const isKiai = mov.toUpperCase().includes("KIAI");
                    return (
                      <div
                        key={idx}
                        className={`p-4 sm:px-6 flex items-start gap-4 transition-colors ${
                          isKiai
                            ? "bg-amber-50/80 border-l-4 border-jp-red"
                            : idx % 2 === 0
                            ? "bg-white"
                            : "bg-jp-paper/30"
                        }`}
                        role="listitem"
                        aria-label={`Movimento ${idx + 1}${isKiai ? " com Kiai" : ""}`}
                      >
                        <span
                          className={`shrink-0 font-jp-serif text-xs font-bold px-2.5 py-1 rounded-sm ${
                            isKiai
                              ? "bg-jp-red text-white"
                              : "bg-black/5 text-jp-ink"
                          }`}
                          aria-hidden="true"
                        >
                          {idx + 1}
                        </span>

                        <div className="flex-1 text-xs sm:text-sm text-black/85 leading-relaxed font-medium">
                          {mov}
                        </div>

                        {isKiai && (
                          <span
                            className="shrink-0 bg-jp-red text-white text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-xs animate-pulse"
                            aria-label="Momento de Kiai"
                          >
                            KIAI!
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </Reveal>

          {/* ─── 5. NAVEGAÇÃO INFERIOR (ANTERIOR / PRÓXIMO) ─────────────── */}
          <nav className="pt-8 border-t border-black/10" aria-label="Navegação entre katas">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Botão Anterior */}
              <Link
                to={`/katas/${prevKata.id}`}
                onClick={() => setTransitionDirection("right")}
                className="group bg-white border border-black/10 p-5 rounded-sm shadow-sm hover:border-jp-red/50 hover:bg-jp-paper/50 transition-all flex items-center justify-between"
                aria-label={`Kata anterior: ${prevKata.nome}`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center group-hover:bg-jp-red group-hover:text-white transition-colors">
                    <ArrowLeft size={18} aria-hidden="true" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-black/50 block font-semibold">
                      ← Kata Anterior
                    </span>
                    <span className="font-jp-serif text-lg font-bold text-jp-ink group-hover:text-jp-red transition-colors">
                      {prevKata.nome}
                    </span>
                  </div>
                </div>
                <span className="text-xs text-black/40 font-mono hidden md:inline-block">
                  {prevKata.categoria}
                </span>
              </Link>

              {/* Botão Próximo */}
              <Link
                to={`/katas/${nextKata.id}`}
                onClick={() => setTransitionDirection("left")}
                className="group bg-white border border-black/10 p-5 rounded-sm shadow-sm hover:border-jp-red/50 hover:bg-jp-paper/50 transition-all flex items-center justify-between text-right"
                aria-label={`Próximo kata: ${nextKata.nome}`}
              >
                <span className="text-xs text-black/40 font-mono hidden md:inline-block">
                  {nextKata.categoria}
                </span>
                <div className="flex items-center gap-3 justify-end w-full sm:w-auto">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-black/50 block font-semibold">
                      Próximo Kata →
                    </span>
                    <span className="font-jp-serif text-lg font-bold text-jp-ink group-hover:text-jp-red transition-colors">
                      {nextKata.nome}
                    </span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center group-hover:bg-jp-red group-hover:text-white transition-colors">
                    <ArrowRight size={18} aria-hidden="true" />
                  </div>
                </div>
              </Link>
            </div>

            {/* Keyboard shortcut hint */}
            <div
              className="mt-4 flex items-center justify-center gap-2 text-[11px] text-black/40 select-none"
              aria-live="polite"
            >
              <Keyboard size={14} aria-hidden="true" />
              <span>
                Dica: use as setas{" "}
                <kbd className="inline-block px-1.5 py-0.5 bg-black/5 text-black/60 rounded font-mono text-[10px] border border-black/10 mx-0.5">←</kbd>
                {" "}e{" "}
                <kbd className="inline-block px-1.5 py-0.5 bg-black/5 text-black/60 rounded font-mono text-[10px] border border-black/10 mx-0.5">→</kbd>
                {" "}do teclado para navegar entre os Katas
              </span>
            </div>

            {/* Link secundário de retorno às tabelas */}
            <div className="text-center mt-5">
              <Link
                to="/tecnicas"
                className="inline-flex items-center gap-2 text-xs font-semibold text-black/60 hover:text-jp-red transition-colors underline decoration-black/20 underline-offset-4"
                aria-label="Voltar para a tabela completa de katas"
              >
                <Compass size={14} aria-hidden="true" /> ← Voltar para a Tabela Completa de Katas
              </Link>
            </div>
          </nav>

        </div>
      </section>
    </div>
  );
}

export default KataPage;
