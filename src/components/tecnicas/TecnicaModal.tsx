import { useEffect } from "react";
import { createPortal } from "react-dom";
import {
  X,
  Image as ImageIcon,
  ImagePlus,
  Info,
  BookOpen,
  Video,
  Target,
  Shield,
  Layers
} from "lucide-react";
import type { TecnicaItem } from "@/data/data";

interface TecnicaModalProps {
  tecnica: TecnicaItem;
  onClose: () => void;
}

export function TecnicaModal({ tecnica, onClose }: TecnicaModalProps) {
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
        <header className="relative border-b-2 border-jp-red bg-jp-ink px-6 py-7 pr-16 text-white md:px-10">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-jp-red">
              {tecnica.cat} · Waza
            </span>
            <h2
              className="font-jp-serif text-3xl font-bold tracking-wide text-white md:text-4xl mt-1"
              id="tecnica-modal-title"
            >
              {tecnica.nome}
            </h2>
            <p className="mt-1 text-sm text-white/70">
              {tecnica.pt}
            </p>
          </div>
        </header>

        {/* Conteúdo com Rolagem */}
        <div className="space-y-6 overflow-y-auto p-6 text-jp-ink md:p-8">
          
          {/* 1. Cards de Informações Principais */}
          <section className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {/* Card 1: Tipo */}
            <div className="border-l-4 border-jp-red bg-white p-5 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-black/50">
                <Target className="text-jp-red" size={16} />
                <span>Tipo de Técnica</span>
              </div>
              <div className="mt-2">
                <span className="font-jp-serif text-2xl font-bold text-jp-ink">
                  {tecnica.tipo}
                </span>
              </div>
              <p className="mt-1 text-xs text-black/50">
                Família de movimentos
              </p>
            </div>

            {/* Card 2: Categoria */}
            <div className="border-l-4 border-jp-gold bg-white p-5 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-black/50">
                <Shield className="text-jp-gold" size={16} />
                <span>Categoria</span>
              </div>
              <div className="mt-2">
                <span className="font-jp-serif text-2xl font-bold text-jp-ink">
                  {tecnica.cat}
                </span>
              </div>
              <p className="mt-1 text-xs text-black/50">
                Grupo técnico fundamental
              </p>
            </div>

            {/* Card 3: Classificação */}
            <div className="border-l-4 border-black/40 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-black/50">
                <Layers className="text-black/60" size={16} />
                <span>Aplicação</span>
              </div>
              <div className="mt-2">
                <span className="font-jp-serif text-2xl font-bold text-jp-ink">
                  Kihon / Kumite
                </span>
              </div>
              <p className="mt-1 text-xs text-black/50">
                Fundamento e combate
              </p>
            </div>
          </section>

          {/* 2. Significado e Execução */}
          <section className="relative overflow-hidden border border-black/10 bg-white p-6 shadow-sm">
            <div className="absolute left-0 top-0 h-full w-1.5 bg-jp-red" />
            <div className="mb-4 flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 font-jp-serif text-lg font-semibold text-jp-red">
                <BookOpen className="shrink-0 text-jp-red" size={20} />
                <h3>Significado e Execução Técnica</h3>
              </div>
              <span className="rounded bg-jp-red/10 px-2.5 py-0.5 text-xs font-semibold text-jp-red">
                Tradução: {tecnica.pt}
              </span>
            </div>

            <div className="space-y-3">
              <div className="rounded-sm border border-black/5 bg-black/5 p-4">
                <span className="mb-1 block text-[11px] font-bold uppercase tracking-wider text-black/50">
                  Nome em Português:
                </span>
                <p className="font-jp-serif text-lg font-bold text-jp-ink">
                  {tecnica.pt}
                </p>
              </div>

              <p className="text-sm leading-relaxed text-black/75 md:text-base pt-1">
                {tecnica.desc}
              </p>
            </div>
          </section>

          {/* 3. Vídeo Demonstrativo */}
          <section className="border border-black/10 bg-white p-6 shadow-sm">
            <div className="mb-3 flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 font-jp-serif text-lg font-semibold text-jp-red">
                <Video className="shrink-0 text-jp-red" size={20} />
                <h3>Vídeo de Demonstração</h3>
              </div>
              {tecnica.url_video ? (
                <span className="rounded bg-black/5 px-2.5 py-1 text-xs font-medium text-black/60">
                  Execução Técnica
                </span>
              ) : null}
            </div>

            {tecnica.url_video ? (
              <div className="mt-3 aspect-video overflow-hidden border border-black/10 bg-black shadow-inner">
                <iframe
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="h-full w-full"
                  referrerPolicy="strict-origin-when-cross-origin"
                  src={tecnica.url_video}
                  title={`Vídeo de ${tecnica.nome}`}
                />
              </div>
            ) : (
              <div className="mt-3 flex flex-col items-center justify-center border-2 border-dashed border-black/15 bg-jp-paper/60 p-8 text-center">
                <Info className="mb-2 text-black/40" size={28} />
                <p className="text-sm font-medium text-black/70">
                  Vídeo demonstrativo em breve
                </p>
                <p className="mt-1 max-w-sm text-xs text-black/50">
                  O registro em vídeo desta técnica será adicionado ao catálogo oficial.
                </p>
              </div>
            )}
          </section>

          {/* 4. Espaço Reservado para Imagens Manuais */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 font-jp-serif text-lg font-semibold text-jp-red">
              <ImageIcon className="shrink-0 text-jp-red" size={20} />
              <h3>Imagens e Detalhes da Postura</h3>
            </div>

            <p className="text-xs leading-relaxed text-black/60">
              Espaço reservado para visualização gráfica das posições, pontos de contato e ângulos corretos de execução.
            </p>

            <div className="grid gap-5 md:grid-cols-2">
              {/* Espaço 1: Posição / Ponto de Impacto */}
              <div className="flex flex-col justify-between border border-black/10 bg-white p-5 shadow-sm">
                <div>
                  <div className="flex items-center justify-between border-b border-black/5 pb-2 text-xs font-semibold text-black/70">
                    <span className="flex items-center gap-1.5">
                      <Target className="text-jp-red" size={16} />
                      Postura e Alinhamento
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-black/40">
                      Execução
                    </span>
                  </div>

                  {tecnica.url_imagem ? (
                    <div className="mt-3 flex aspect-[4/3] items-center justify-center overflow-hidden border border-black/10 bg-jp-paper">
                      <img
                        alt={`Postura de ${tecnica.nome}`}
                        className="h-full w-full object-contain"
                        src={tecnica.url_imagem}
                      />
                    </div>
                  ) : (
                    <div className="mt-3 flex aspect-[4/3] flex-col items-center justify-center border-2 border-dashed border-black/20 bg-jp-paper/40 p-5 text-center transition-colors hover:bg-jp-paper/70">
                      <ImagePlus className="mb-2 text-black/35" size={32} />
                      <span className="text-xs font-bold text-black/70">
                        Espaço para Foto da Postura
                      </span>
                      <p className="mt-1 text-[11px] leading-snug text-black/50">
                        Espaço reservado para colar a foto de execução de <strong>{tecnica.nome}</strong>.
                      </p>
                      <span className="mt-2 inline-block rounded bg-black/5 px-2 py-0.5 font-mono text-[10px] text-black/45">
                        url_imagem: "foto.png"
                      </span>
                    </div>
                  )}
                </div>
                <p className="mt-3 text-center text-[11px] italic text-black/50">
                  Alinhamento biomecânico e traçado do golpe.
                </p>
              </div>

              {/* Espaço 2: Ponto de Contato e Aplicação */}
              <div className="flex flex-col justify-between border border-black/10 bg-white p-5 shadow-sm">
                <div>
                  <div className="flex items-center justify-between border-b border-black/5 pb-2 text-xs font-semibold text-black/70">
                    <span className="flex items-center gap-1.5">
                      <Layers className="text-jp-red" size={16} />
                      Aplicação Prática
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-black/40">
                      Combate / Bunkai
                    </span>
                  </div>

                  <div className="mt-3 flex aspect-[4/3] flex-col items-center justify-center border-2 border-dashed border-black/20 bg-jp-paper/40 p-5 text-center transition-colors hover:bg-jp-paper/70">
                    <ImagePlus className="mb-2 text-black/35" size={32} />
                    <span className="text-xs font-bold text-black/70">
                      Espaço para Aplicação
                    </span>
                    <p className="mt-1 text-[11px] leading-snug text-black/50">
                      Espaço reservado para imagem de aplicação prática em dupla ou alvo de impacto.
                    </p>
                    <span className="mt-2 inline-block rounded bg-black/5 px-2 py-0.5 font-mono text-[10px] text-black/45">
                      Espaço para inserção manual
                    </span>
                  </div>
                </div>
                <p className="mt-3 text-center text-[11px] italic text-black/50">
                  Ponto de contato (Kime) e aplicação em situação real.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Rodapé */}
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
