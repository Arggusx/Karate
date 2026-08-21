import { useState, useLayoutEffect } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Video,
  BookOpen,
  Activity,
  Award,
  Shield,
  Compass,
  Image as ImageIcon,
  CheckCircle2,
  Sparkles,
  Layers,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { KATAS_26, type NivelDificuldade } from "@/Data/katasData";

/** Helper para classes de cor do badge de dificuldade */
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

/** Componente de Imagem com Fallback para Embusen */
function EmbusenImageCard({
  src,
  alt,
  titulo,
  subtitulo,
}: {
  src: string;
  alt: string;
  titulo: string;
  subtitulo: string;
}) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="flex flex-col justify-between border border-black/10 bg-white p-5 rounded-sm shadow-sm">
      <div>
        <div className="flex items-center justify-between border-b border-black/5 pb-3 mb-3">
          <span className="flex items-center gap-2 font-jp-serif text-base font-bold text-jp-ink">
            <Compass className="text-jp-red" size={18} />
            {titulo}
          </span>
          <span className="text-[10px] uppercase tracking-wider text-jp-red bg-jp-red/10 px-2 py-0.5 font-semibold rounded-xs">
            {subtitulo}
          </span>
        </div>

        {!hasError ? (
          <div className="relative aspect-[4/3] w-full overflow-hidden border border-black/10 bg-jp-paper rounded-xs flex items-center justify-center">
            <img
              src={src}
              alt={alt}
              onError={() => setHasError(true)}
              className="h-full w-full object-contain"
            />
          </div>
        ) : (
          <div className="aspect-[4/3] w-full flex flex-col items-center justify-center border-2 border-dashed border-black/15 bg-jp-paper/60 p-6 text-center rounded-xs">
            <ImageIcon className="mb-2 text-black/35" size={36} />
            <span className="text-xs font-bold text-black/70">{titulo}</span>
            <p className="mt-1 text-[11px] leading-relaxed text-black/50 max-w-xs">
              Espaço reservado para o diagrama visual do {titulo.toLowerCase()}.
            </p>
            <span className="mt-3 inline-block rounded bg-black/5 px-2.5 py-1 font-mono text-[10px] text-black/50">
              {src}
            </span>
          </div>
        )}
      </div>
      <p className="mt-3 text-center text-[11px] italic text-black/50">
        Representação geométrica dos passos no tatame.
      </p>
    </div>
  );
}

export function KataPage() {
  const { slug } = useParams<{ slug: string }>();
  const { pathname } = useLocation();

  // Scroll ao topo na navegação entre katas
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  const currentIndex = KATAS_26.findIndex((k) => k.id === slug);
  const kata = KATAS_26[currentIndex];

  // Caso slug não seja encontrado (404 amigável)
  if (!kata || currentIndex === -1) {
    return (
      <div className="page-anim">
        <section className="relative bg-jp-ink text-white py-24 overflow-hidden">
          <div
            className="kanji-watermark"
            style={{ fontSize: 520, right: -60, top: -100, color: "rgba(188,0,45,0.1)" }}
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
            >
              <ArrowLeft size={16} />
              Voltar para Tabela de Katas
            </Link>
          </div>
        </section>
      </div>
    );
  }

  // Cálculo da Navegação Circular (Anterior / Próximo)
  const totalKatas = KATAS_26.length;
  const prevIndex = (currentIndex - 1 + totalKatas) % totalKatas;
  const nextIndex = (currentIndex + 1) % totalKatas;
  const prevKata = KATAS_26[prevIndex];
  const nextKata = KATAS_26[nextIndex];

  return (
    <div className="page-anim min-h-screen bg-jp-paper">
      {/* ─── 1. CABEÇALHO / VISÃO GERAL ─────────────────────────────── */}
      <section className="relative bg-jp-ink text-white py-20 overflow-hidden border-b-4 border-jp-red">
        <div
          className="kanji-watermark"
          style={{ fontSize: 480, right: -40, top: -80, color: "rgba(188,0,45,0.08)" }}
        >
          型
        </div>
        <div className="max-w-6xl mx-auto px-5 lg:px-8 relative">
          <div className="flex items-center gap-3 text-jp-red tracking-widest uppercase text-xs font-semibold mb-2">
            <Link to="/tecnicas" className="hover:underline flex items-center gap-1 text-white/60 hover:text-white transition-colors">
              <ArrowLeft size={14} /> Katas
            </Link>
            <span>•</span>
            <span>Série {kata.categoria}</span>
            <span>•</span>
            <span className="text-jp-gold">Kata #{currentIndex + 1} de {totalKatas}</span>
          </div>

          <h1 className="font-jp-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-wide mt-1 text-white">
            {kata.nome}
          </h1>

          <p className="text-jp-gold font-jp-serif text-xl sm:text-2xl mt-2 italic">
            "{kata.significadoNome}"
          </p>

          {/* Cards de Métricas Principais */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-white/10">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-sm">
              <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-white/50">
                <Award size={14} className="text-jp-gold" />
                <span>Faixa Sugerida</span>
              </div>
              <div className="text-sm sm:text-base font-bold text-white mt-1">
                {kata.faixaRecomendada}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-sm">
              <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-white/50">
                <Shield size={14} className="text-jp-red" />
                <span>Dificuldade</span>
              </div>
              <div className="mt-1">
                <span
                  className={`inline-block px-2.5 py-0.5 rounded-xs text-xs font-bold border ${nivelBadgeClasses(
                    kata.nivelDificuldade
                  )}`}
                >
                  {kata.nivelDificuldade}
                </span>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-sm">
              <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-white/50">
                <Activity size={14} className="text-sky-400" />
                <span>Movimentos</span>
              </div>
              <div className="text-2xl font-jp-serif font-bold text-white mt-0.5">
                {kata.quantidadeMovimentos}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-sm">
              <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-white/50">
                <Sparkles size={14} className="text-amber-400" />
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
              <CheckCircle2 size={15} /> Técnicas Destaque:
            </span>
            <span className="text-xs text-white/85 leading-relaxed font-medium">
              {kata.tecnicasDestaque}
            </span>
          </div>
        </div>
      </section>

      {/* Conteúdo Principal da Página */}
      <section className="py-12 bg-jp-paper">
        <div className="max-w-6xl mx-auto px-5 lg:px-8 space-y-12">

          {/* ─── 2. SEÇÃO DE MÍDIA E DIAGRAMA (VÍDEO + EMBUSEN) ────────── */}
          <Reveal>
            <div className="space-y-6">
              <div className="flex items-center gap-2 font-jp-serif text-2xl font-bold text-jp-ink border-b border-black/10 pb-3">
                <Video className="text-jp-red" size={24} />
                <h2>Mídia e Diagrama Espacial (Embusen)</h2>
              </div>

              {/* Vídeo do Kata */}
              <div className="border border-black/10 bg-white p-5 rounded-sm shadow-sm">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-black/60 flex items-center gap-1.5">
                    <Video size={15} className="text-jp-red" />
                    Execução Técnica Oficial em Vídeo
                  </span>
                  <span className="text-[10px] bg-jp-ink text-white px-2 py-0.5 rounded-xs font-mono">
                    Vídeo HD
                  </span>
                </div>

                {kata.videoUrl ? (
                  <div className="aspect-video w-full overflow-hidden border border-black/10 bg-black rounded-xs shadow-inner">
                    <iframe
                      src={kata.videoUrl}
                      title={`Vídeo do kata ${kata.nome}`}
                      className="h-full w-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      referrerPolicy="strict-origin-when-cross-origin"
                    />
                  </div>
                ) : (
                  <div className="aspect-video w-full flex flex-col items-center justify-center border-2 border-dashed border-black/15 bg-jp-paper/60 p-8 text-center rounded-xs">
                    <Video className="mb-3 text-black/30" size={40} />
                    <p className="text-sm font-semibold text-black/70">
                      Vídeo de demonstração em breve
                    </p>
                    <p className="mt-1 max-w-sm text-xs text-black/50">
                      O registro audiovisual da execução oficial deste kata será adicionado no catálogo.
                    </p>
                  </div>
                )}
              </div>

              {/* Grid das 2 Imagens do Embusen */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <EmbusenImageCard
                  src={kata.embusenOficialImg}
                  alt={`Embusen Oficial de ${kata.nome}`}
                  titulo="Embusen Oficial"
                  subtitulo="Diagrama Padrão"
                />
                <EmbusenImageCard
                  src={kata.embusenCompletoImg}
                  alt={`Embusen Completo e Detalhado de ${kata.nome}`}
                  titulo="Embusen Completo"
                  subtitulo="Visão Detalhada"
                />
              </div>
            </div>
          </Reveal>

          {/* ─── 3. SEÇÃO BUNKAI (APLICAÇÃO PRÁTICA) ─────────────────── */}
          <Reveal>
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-black/10 pb-3">
                <div className="flex items-center gap-2 font-jp-serif text-2xl font-bold text-jp-ink">
                  <BookOpen className="text-jp-red" size={24} />
                  <h2>Bunkai (Aplicação Prática em Combate)</h2>
                </div>
                <span className="text-xs bg-jp-red/10 text-jp-red font-semibold px-3 py-1 rounded-full border border-jp-red/20 hidden sm:inline-block">
                  Oyo & Bunkai Kumite
                </span>
              </div>

              {kata.bunkai && kata.bunkai.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {kata.bunkai.map((item, idx) => {
                    // Separar título antes dos dois pontos (se houver)
                    const parts = item.split(":");
                    const titulo = parts.length > 1 ? parts[0].trim() : `Aplicação ${idx + 1}`;
                    const descricao = parts.length > 1 ? parts.slice(1).join(":").trim() : item;

                    return (
                      <div
                        key={idx}
                        className="bg-white border border-black/10 rounded-sm p-5 shadow-sm hover:border-jp-red/30 transition-colors flex flex-col justify-between"
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
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-black/10 pb-3">
                <div className="flex items-center gap-2 font-jp-serif text-2xl font-bold text-jp-ink">
                  <Layers className="text-jp-red" size={24} />
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

                <div className="divide-y divide-black/5">
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
                      >
                        <span
                          className={`shrink-0 font-jp-serif text-xs font-bold px-2.5 py-1 rounded-sm ${
                            isKiai
                              ? "bg-jp-red text-white"
                              : "bg-black/5 text-jp-ink"
                          }`}
                        >
                          {idx + 1}
                        </span>

                        <div className="flex-1 text-xs sm:text-sm text-black/85 leading-relaxed font-medium">
                          {mov}
                        </div>

                        {isKiai && (
                          <span className="shrink-0 bg-jp-red text-white text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-xs animate-pulse">
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
          <div className="pt-8 border-t border-black/10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Botão Anterior */}
              <Link
                to={`/katas/${prevKata.id}`}
                className="group bg-white border border-black/10 p-5 rounded-sm shadow-sm hover:border-jp-red/50 hover:bg-jp-paper/50 transition-all flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center group-hover:bg-jp-red group-hover:text-white transition-colors">
                    <ArrowLeft size={18} />
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
                className="group bg-white border border-black/10 p-5 rounded-sm shadow-sm hover:border-jp-red/50 hover:bg-jp-paper/50 transition-all flex items-center justify-between text-right"
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
                    <ArrowRight size={18} />
                  </div>
                </div>
              </Link>
            </div>

            {/* Link secundário de retorno às tabelas */}
            <div className="text-center mt-6">
              <Link
                to="/tecnicas"
                className="inline-flex items-center gap-2 text-xs font-semibold text-black/60 hover:text-jp-red transition-colors underline decoration-black/20 underline-offset-4"
              >
                <Compass size={14} /> Voltar para a Tabela Completa de Katas
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

export default KataPage;
