import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import {
  X,
  BookOpen,
  Video,
  Target,
  Shield,
  Compass,
  Footprints,
  Zap,
  ImagePlus,
  CheckCircle2,
} from "lucide-react";
import {
  getTecnicaBiomecanica,
  getTecnicaGlossario,
  type TecnicaItem,
} from "@/data/data";

interface TecnicaModalProps {
  tecnica: TecnicaItem;
  onClose: () => void;
}

type TabType = "execucao" | "biomecanica" | "glossario";

export function TecnicaModal({ tecnica, onClose }: TecnicaModalProps) {
  const [activeTab, setActiveTab] = useState<TabType>("execucao");

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    const prevOverflow = document.body.style.overflow;
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  const biomecanica = getTecnicaBiomecanica(tecnica);
  const glossarioTerms = getTecnicaGlossario(tecnica);

  return createPortal(
    <div
      aria-labelledby="tecnica-modal-title"
      aria-modal="true"
      className="modal-overlay-anim fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto bg-black/80 p-3 backdrop-blur-sm sm:p-4 md:p-6"
      onClick={onClose}
      role="dialog"
    >
      <div
        className="modal-content-anim relative my-auto flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-sm border border-black/15 bg-jp-paper shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Botão Fechar */}
        <button
          aria-label="Fechar modal"
          className="absolute right-4 top-4 z-20 cursor-pointer rounded-full bg-jp-ink/85 p-2.5 text-white shadow-md transition-all hover:scale-105 hover:bg-jp-red focus:outline-none focus:ring-2 focus:ring-jp-gold"
          onClick={onClose}
          type="button"
        >
          <X size={20} />
        </button>

        {/* Cabeçalho */}
        <header className="relative border-b-2 border-jp-red bg-jp-ink px-6 py-6 pr-16 text-white md:px-10">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-jp-red">
              {tecnica.cat} · {tecnica.tipo}
            </span>
            <div className="flex items-baseline gap-3 mt-1">
              <h2
                className="font-jp-serif text-3xl font-bold tracking-wide text-white md:text-4xl"
                id="tecnica-modal-title"
              >
                {tecnica.nome}
              </h2>
              <span className="font-jp-serif text-2xl font-bold text-jp-gold">
                {tecnica.kanji}
              </span>
            </div>
            <p className="mt-1 text-sm text-white/70">
              {tecnica.pt}
            </p>
          </div>
        </header>

        {/* Barra de Abas do Modal */}
        <div
          className="flex items-center gap-1 border-b border-black/10 bg-white px-4 sm:px-8 overflow-x-auto scrollbar-none"
          role="tablist"
          aria-label="Navegação por seções da técnica"
        >
          <button
            role="tab"
            aria-selected={activeTab === "execucao"}
            onClick={() => setActiveTab("execucao")}
            className={`flex items-center gap-2 border-b-2 px-4 py-3 text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
              activeTab === "execucao"
                ? "border-jp-red text-jp-red font-bold bg-jp-red/5"
                : "border-transparent text-black/60 hover:text-jp-ink hover:border-black/20"
            }`}
          >
            <Video size={16} className={activeTab === "execucao" ? "text-jp-red" : "text-black/40"} />
            <span>1. Demonstração & Execução</span>
          </button>

          <button
            role="tab"
            aria-selected={activeTab === "biomecanica"}
            onClick={() => setActiveTab("biomecanica")}
            className={`flex items-center gap-2 border-b-2 px-4 py-3 text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
              activeTab === "biomecanica"
                ? "border-jp-red text-jp-red font-bold bg-jp-red/5"
                : "border-transparent text-black/60 hover:text-jp-ink hover:border-black/20"
            }`}
          >
            <Compass size={16} className={activeTab === "biomecanica" ? "text-jp-red" : "text-black/40"} />
            <span>2. Biomecânica & Conceitos</span>
          </button>

          <button
            role="tab"
            aria-selected={activeTab === "glossario"}
            onClick={() => setActiveTab("glossario")}
            className={`flex items-center gap-2 border-b-2 px-4 py-3 text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
              activeTab === "glossario"
                ? "border-jp-red text-jp-red font-bold bg-jp-red/5"
                : "border-transparent text-black/60 hover:text-jp-ink hover:border-black/20"
            }`}
          >
            <BookOpen size={16} className={activeTab === "glossario" ? "text-jp-red" : "text-black/40"} />
            <span>3. Glossário Relacionado</span>
          </button>
        </div>

        {/* Conteúdo com Rolagem por Aba */}
        <div className="space-y-6 overflow-y-auto p-6 text-jp-ink md:p-8 min-h-[380px]">

          {/* ────────────────── ABA 1: DEMONSTRAÇÃO & EXECUÇÃO ────────────────── */}
          {activeTab === "execucao" && (
            <div className="space-y-6 animate-fade-in">
              {/* Cards de Informações Principais */}
              <section className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="border-l-4 border-jp-red bg-white p-4 shadow-2xs">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-black/50">
                    Tipo de Movimento
                  </div>
                  <div className="mt-1 font-jp-serif text-xl font-bold text-jp-ink">
                    {tecnica.tipo}
                  </div>
                  <p className="mt-0.5 text-[11px] text-black/50">
                    Família de movimentos
                  </p>
                </div>

                <div className="border-l-4 border-jp-gold bg-white p-4 shadow-2xs">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-black/50">
                    Categoria
                  </div>
                  <div className="mt-1 font-jp-serif text-xl font-bold text-jp-ink">
                    {tecnica.cat}
                  </div>
                  <p className="mt-0.5 text-[11px] text-black/50">
                    Grupo de estudo fundamental
                  </p>
                </div>

                <div className="border-l-4 border-black/40 bg-white p-4 shadow-2xs">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-black/50">
                    Aplicação Prática
                  </div>
                  <div className="mt-1 font-jp-serif text-xl font-bold text-jp-ink">
                    Kihon / Kumite / Kata
                  </div>
                  <p className="mt-0.5 text-[11px] text-black/50">
                    Fundamento e combate
                  </p>
                </div>
              </section>

              {/* Significado e Execução */}
              <section className="relative overflow-hidden border border-black/10 bg-white p-5 shadow-2xs rounded-sm">
                <div className="absolute left-0 top-0 h-full w-1.5 bg-jp-red" />
                <div className="mb-3 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 font-jp-serif text-base font-bold text-jp-red">
                    <BookOpen className="shrink-0 text-jp-red" size={18} />
                    <h3>Significado & Execução Técnica</h3>
                  </div>
                  <span className="rounded bg-jp-red/10 px-2.5 py-0.5 text-xs font-semibold text-jp-red">
                    Tradução: {tecnica.pt}
                  </span>
                </div>

                <div className="space-y-3">
                  <p className="text-sm leading-relaxed text-black/80">
                    {tecnica.desc}
                  </p>
                </div>
              </section>

              {/* Vídeo e Imagem */}
              <section className="space-y-4">
                <div className="flex items-center gap-2 font-jp-serif text-base font-bold text-jp-ink">
                  <Video size={18} className="text-jp-red" />
                  <h3>Demonstração Visual (Vídeo & Imagem)</h3>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  {/* Card Imagem */}
                  <div className="flex flex-col justify-between border border-black/10 bg-white p-4 shadow-2xs rounded-sm">
                    <div>
                      <div className="flex items-center justify-between border-b border-black/5 pb-2 text-xs font-semibold text-black/70">
                        <span className="flex items-center gap-1.5">
                          <Target className="text-jp-red" size={15} />
                          Postura e Alinhamento
                        </span>
                      </div>

                      {tecnica.url_imagem ? (
                        <div className="mt-3 flex aspect-[4/3] items-center justify-center overflow-hidden border border-black/10 bg-jp-paper rounded-xs">
                          <img
                            alt={`Postura de ${tecnica.nome}`}
                            className="h-full w-full object-contain"
                            src={tecnica.url_imagem}
                          />
                        </div>
                      ) : (
                        <div className="mt-3 flex aspect-[4/3] flex-col items-center justify-center border-2 border-dashed border-black/15 bg-jp-paper/40 p-4 text-center">
                          <ImagePlus className="mb-2 text-black/30" size={32} />
                          <span className="text-xs font-bold text-black/70">
                            Espaço para Foto da Postura
                          </span>
                          <p className="mt-1 text-[11px] text-black/50">
                            Alinhamento e execução gráfica de <strong>{tecnica.nome}</strong>.
                          </p>
                        </div>
                      )}
                    </div>
                    <p className="mt-3 text-center text-[11px] italic text-black/50">
                      Alinhamento biomecânico e postura de combate.
                    </p>
                  </div>

                  {/* Card Vídeo */}
                  <div className="flex flex-col justify-between border border-black/10 bg-white p-4 shadow-2xs rounded-sm">
                    <div>
                      <div className="flex items-center justify-between border-b border-black/5 pb-2 text-xs font-semibold text-black/70">
                        <span className="flex items-center gap-1.5">
                          <Video className="text-jp-red" size={15} />
                          Execução em Vídeo
                        </span>
                      </div>

                      <div className="mt-3 aspect-video overflow-hidden border border-black/10 bg-jp-ink shadow-inner rounded-xs flex items-center justify-center">
                        {tecnica.url_video ? (
                          <iframe
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            className="h-full w-full"
                            referrerPolicy="strict-origin-when-cross-origin"
                            src={tecnica.url_video}
                            title={`Vídeo de ${tecnica.nome}`}
                          />
                        ) : (
                          <div className="text-center p-4">
                            <Video className="mb-2 mx-auto text-white/30" size={32} />
                            <p className="text-xs text-white/80 font-semibold">
                              Registro em vídeo em breve
                            </p>
                            <p className="mt-1 text-[11px] text-white/50 max-w-xs">
                              O vídeo oficial de demonstração de <strong>{tecnica.nome}</strong> será adicionado.
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                    <p className="mt-3 text-center text-[11px] italic text-black/50">
                      Dinâmica de movimento e aplicação prática.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          )}

          {/* ────────────────── ABA 2: CONCEITOS & BIOMECÂNICA ────────────────── */}
          {activeTab === "biomecanica" && (
            <div className="space-y-5 animate-fade-in">
              <div className="bg-jp-red/5 border border-jp-red/20 rounded-sm p-4 flex items-start gap-3">
                <Compass className="text-jp-red shrink-0 mt-0.5" size={20} />
                <div>
                  <h3 className="font-jp-serif font-bold text-jp-ink text-base">
                    Análise Biomecânica & Física da Posição
                  </h3>
                  <p className="text-xs text-black/70 mt-0.5 leading-relaxed">
                    A eficiência do Karatê Shotokan se baseia na física de transferência de massa, alinhamento ósseo e basculamento do quadril.
                  </p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {/* 1. Centro de Gravidade */}
                <div className="bg-white border border-black/10 p-4 rounded-sm shadow-2xs">
                  <div className="flex items-center gap-2 border-b border-black/5 pb-2">
                    <Target className="text-jp-red" size={16} />
                    <span className="font-jp-serif font-bold text-sm text-jp-ink">
                      Centro de Gravidade
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-black/80 leading-relaxed font-medium">
                    {biomecanica.centroGravidade}
                  </p>
                </div>

                {/* 2. Distribuição de Peso */}
                <div className="bg-white border border-black/10 p-4 rounded-sm shadow-2xs">
                  <div className="flex items-center gap-2 border-b border-black/5 pb-2">
                    <Footprints className="text-jp-gold" size={16} />
                    <span className="font-jp-serif font-bold text-sm text-jp-ink">
                      Distribuição de Peso
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-black/80 leading-relaxed font-medium">
                    {biomecanica.distribuicaoPeso}
                  </p>
                </div>

                {/* 3. Uso do Quadril (Koshi) */}
                <div className="bg-white border border-black/10 p-4 rounded-sm shadow-2xs">
                  <div className="flex items-center gap-2 border-b border-black/5 pb-2">
                    <Zap className="text-jp-red" size={16} />
                    <span className="font-jp-serif font-bold text-sm text-jp-ink">
                      Uso do Quadril (Koshi)
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-black/80 leading-relaxed font-medium">
                    {biomecanica.usoQuadril}
                  </p>
                </div>

                {/* 4. Enraizamento e Alinhamento de Pés */}
                <div className="bg-white border border-black/10 p-4 rounded-sm shadow-2xs">
                  <div className="flex items-center gap-2 border-b border-black/5 pb-2">
                    <Shield className="text-black/60" size={16} />
                    <span className="font-jp-serif font-bold text-sm text-jp-ink">
                      Enraizamento & Alinhamento
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-black/80 leading-relaxed font-medium">
                    {biomecanica.enraizamentoAlinhamento}
                  </p>
                </div>
              </div>

              {/* 5. Ponto de Impacto & Kime */}
              {biomecanica.pontoImpactoKime && (
                <div className="bg-jp-paper border border-black/10 p-4 rounded-sm shadow-2xs">
                  <div className="flex items-center gap-2 border-b border-black/5 pb-2 text-jp-red font-bold text-xs uppercase tracking-wider">
                    <CheckCircle2 size={16} />
                    <span>Princípio de Impacto & Kime</span>
                  </div>
                  <p className="mt-2 text-xs text-black/80 leading-relaxed font-medium">
                    {biomecanica.pontoImpactoKime}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* ────────────────── ABA 3: GLOSSÁRIO RELACIONADO ────────────────── */}
          {activeTab === "glossario" && (
            <div className="space-y-6 animate-fade-in">
              <div className="bg-white border border-black/10 rounded-sm p-4">
                <h3 className="font-jp-serif font-bold text-base text-jp-ink mb-1">
                  Terminologia Relacionada a {tecnica.nome}
                </h3>
                <p className="text-xs text-black/60">
                  Palavras-chave em japonês, kanji e conceitos anatômicos indispensáveis para esta técnica.
                </p>
              </div>

              {/* Lista de Termos Relacionados */}
              <div className="grid gap-4 sm:grid-cols-2">
                {glossarioTerms.map((termo, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-black/10 p-4 rounded-sm shadow-2xs flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-baseline justify-between border-b border-black/5 pb-2">
                        <span className="font-jp-serif text-base font-bold text-jp-ink">
                          {termo.termo}
                        </span>
                        <span className="font-jp-serif text-lg font-bold text-jp-red">
                          {termo.kanji}
                        </span>
                      </div>
                      <div className="text-xs font-semibold text-jp-gold mt-1 mb-1.5">
                        {termo.traducao}
                      </div>
                      <p className="text-xs text-black/75 leading-relaxed">
                        {termo.descricao}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Guia Rápido de Alturas Corporais */}
              <div className="border border-black/10 bg-jp-paper p-4 rounded-sm space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-black/60 block">
                  Referência Anatômica de Alvos no Karatê
                </span>
                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="bg-white p-2.5 rounded border border-black/5">
                    <span className="font-jp-serif font-bold text-jp-red block">Jōdan (上段)</span>
                    <span className="text-[10px] text-black/60">Rosto & Cabeça</span>
                  </div>
                  <div className="bg-white p-2.5 rounded border border-black/5">
                    <span className="font-jp-serif font-bold text-jp-gold block">Chūdan (中段)</span>
                    <span className="text-[10px] text-black/60">Tronco & Peito</span>
                  </div>
                  <div className="bg-white p-2.5 rounded border border-black/5">
                    <span className="font-jp-serif font-bold text-black/70 block">Gedan (下段)</span>
                    <span className="text-[10px] text-black/60">Cintura & Pernas</span>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Rodapé do Modal */}
        <footer className="flex items-center justify-between border-t border-black/10 bg-jp-paper px-6 py-4 text-xs text-black/60">
          <span className="font-medium">
            {tecnica.nome} · {tecnica.pt} ({tecnica.cat})
          </span>
          <button
            className="cursor-pointer rounded-sm bg-jp-ink px-5 py-2 font-medium text-white transition-colors hover:bg-jp-red"
            onClick={onClose}
            type="button"
          >
            Fechar
          </button>
        </footer>
      </div>
    </div>,
    document.body
  );
}

export default TecnicaModal;
