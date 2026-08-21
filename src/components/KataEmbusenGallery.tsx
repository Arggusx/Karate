import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import {
  Compass,
  Maximize2,
  X,
  Layers,
  ChevronRight,
  ZoomIn,
  ZoomOut,
} from "lucide-react";

interface KataEmbusenGalleryProps {
  embusenOficialImg: string;
  embusenCompletoImg: string;
  kataNome: string;
}

type EmbusenTab = "oficial" | "completo";

const PLACEHOLDER_SVG = "/images/placeholders/embusen-placeholder.svg";

export function KataEmbusenGallery({
  embusenOficialImg,
  embusenCompletoImg,
  kataNome,
}: KataEmbusenGalleryProps) {
  // Estados do Lightbox Modal
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<EmbusenTab>("oficial");
  const [isZoomed, setIsZoomed] = useState(false);

  // Estados de erro/fallback de imagem
  const [oficialError, setOficialError] = useState(false);
  const [completoError, setCompletoError] = useState(false);

  // Reset erros ao mudar os props (navegação entre katas)
  useEffect(() => {
    setOficialError(false);
    setCompletoError(false);
  }, [embusenOficialImg, embusenCompletoImg]);

  // Handler para Tecla 'Escape' fechar o Lightbox Modal
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const openLightbox = (tab: EmbusenTab) => {
    setActiveTab(tab);
    setIsZoomed(false);
    setIsOpen(true);
  };

  const getSrc = (tab: EmbusenTab) => {
    if (tab === "oficial") {
      return oficialError ? PLACEHOLDER_SVG : embusenOficialImg;
    }
    return completoError ? PLACEHOLDER_SVG : embusenCompletoImg;
  };

  const getTitle = (tab: EmbusenTab) => {
    return tab === "oficial" ? "Embusen Oficial" : "Embusen Completo";
  };

  return (
    <div className="space-y-4">
      {/* Cabeçalho da Galeria */}
      <div className="flex items-center justify-between border-b border-black/10 pb-3">
        <div className="flex items-center gap-2 font-jp-serif text-2xl font-bold text-jp-ink">
          <Compass className="text-jp-red" size={24} />
          <h2>Diagramas do Embusen (Linha de Passos)</h2>
        </div>
        <span className="text-xs text-black/50 font-medium hidden sm:inline-block">
          Clique no diagrama para expandir em tela cheia
        </span>
      </div>

      {/* Grid com os 2 Cards de Embusen */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1: Embusen Oficial */}
        <div className="bg-white border border-black/10 p-5 rounded-sm shadow-sm flex flex-col justify-between group">
          <div>
            <div className="flex items-center justify-between border-b border-black/5 pb-3 mb-3">
              <span className="flex items-center gap-2 font-jp-serif text-base font-bold text-jp-ink">
                <Compass className="text-jp-red" size={18} />
                Embusen Oficial
              </span>
              <span className="text-[10px] uppercase tracking-wider text-jp-red bg-jp-red/10 px-2.5 py-0.5 font-semibold rounded-xs">
                Diagrama Padrão
              </span>
            </div>

            <div
              onClick={() => openLightbox("oficial")}
              className="relative aspect-[4/3] w-full overflow-hidden border border-black/10 bg-jp-paper rounded-xs cursor-pointer group-hover:border-jp-red/40 transition-all flex items-center justify-center"
            >
              <img
                src={oficialError ? PLACEHOLDER_SVG : embusenOficialImg}
                alt={`Embusen Oficial de ${kataNome}`}
                onError={() => setOficialError(true)}
                className="h-full w-full object-contain p-2 transition-transform duration-300 group-hover:scale-105"
              />

              {/* Overlay com ícone de expansão ao passar o mouse */}
              <div className="absolute inset-0 bg-jp-ink/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-2xs">
                <span className="inline-flex items-center gap-2 px-3.5 py-2 bg-jp-ink text-white text-xs font-semibold rounded-sm shadow-lg">
                  <Maximize2 size={14} /> Ampliar em Tela Cheia
                </span>
              </div>
            </div>
          </div>

          <div className="mt-3 flex items-center justify-between text-[11px] text-black/50 italic">
            <span>Orientação geométrica espacial</span>
            <button
              type="button"
              onClick={() => openLightbox("oficial")}
              className="font-medium text-jp-red hover:underline not-italic flex items-center gap-1 cursor-pointer"
            >
              <Maximize2 size={12} /> Expansão
            </button>
          </div>
        </div>

        {/* Card 2: Embusen Completo */}
        <div className="bg-white border border-black/10 p-5 rounded-sm shadow-sm flex flex-col justify-between group">
          <div>
            <div className="flex items-center justify-between border-b border-black/5 pb-3 mb-3">
              <span className="flex items-center gap-2 font-jp-serif text-base font-bold text-jp-ink">
                <Layers className="text-jp-red" size={18} />
                Embusen Completo
              </span>
              <span className="text-[10px] uppercase tracking-wider text-black/70 bg-black/5 px-2.5 py-0.5 font-semibold rounded-xs">
                Visão Detalhada
              </span>
            </div>

            <div
              onClick={() => openLightbox("completo")}
              className="relative aspect-[4/3] w-full overflow-hidden border border-black/10 bg-jp-paper rounded-xs cursor-pointer group-hover:border-jp-red/40 transition-all flex items-center justify-center"
            >
              <img
                src={completoError ? PLACEHOLDER_SVG : embusenCompletoImg}
                alt={`Embusen Completo de ${kataNome}`}
                onError={() => setCompletoError(true)}
                className="h-full w-full object-contain p-2 transition-transform duration-300 group-hover:scale-105"
              />

              {/* Overlay de expansão */}
              <div className="absolute inset-0 bg-jp-ink/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-2xs">
                <span className="inline-flex items-center gap-2 px-3.5 py-2 bg-jp-ink text-white text-xs font-semibold rounded-sm shadow-lg">
                  <Maximize2 size={14} /> Ampliar em Tela Cheia
                </span>
              </div>
            </div>
          </div>

          <div className="mt-3 flex items-center justify-between text-[11px] text-black/50 italic">
            <span>Passos numerados e ângulos de ataque</span>
            <button
              type="button"
              onClick={() => openLightbox("completo")}
              className="font-medium text-jp-red hover:underline not-italic flex items-center gap-1 cursor-pointer"
            >
              <Maximize2 size={12} /> Expansão
            </button>
          </div>
        </div>
      </div>

      {/* ─── MODAL / LIGHTBOX DE TELA CHEIA ─────────────────────────────── */}
      {isOpen &&
        createPortal(
          <div
            className="fixed inset-0 z-[99999] flex flex-col bg-black/90 backdrop-blur-md modal-overlay-anim"
            onClick={() => setIsOpen(false)}
          >
            {/* Barra de Ferramentas / Cabeçalho do Modal */}
            <div
              className="flex items-center justify-between px-6 py-4 bg-jp-ink/90 border-b border-white/10 text-white shrink-0"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Informações do Kata */}
              <div className="flex items-center gap-3">
                <span className="font-jp-serif text-lg font-bold text-jp-gold">
                  {kataNome}
                </span>
                <span className="text-white/40">•</span>
                <span className="text-xs text-white/70 uppercase tracking-wider font-semibold">
                  {getTitle(activeTab)}
                </span>
              </div>

              {/* Alternância de Abas dentro do Lightbox */}
              <div className="flex items-center bg-white/10 p-1 rounded-full border border-white/15">
                <button
                  type="button"
                  onClick={() => {
                    setActiveTab("oficial");
                    setIsZoomed(false);
                  }}
                  className={`px-3 py-1 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                    activeTab === "oficial"
                      ? "bg-jp-red text-white shadow-xs"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  Embusen Oficial
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setActiveTab("completo");
                    setIsZoomed(false);
                  }}
                  className={`px-3 py-1 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                    activeTab === "completo"
                      ? "bg-jp-red text-white shadow-xs"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  Embusen Completo
                </button>
              </div>

              {/* Botões de Ação: Zoom & Fechar */}
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setIsZoomed((prev) => !prev)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-white/10 hover:bg-white/20 text-xs font-medium text-white transition-colors cursor-pointer border border-white/10"
                  title={isZoomed ? "Reduzir tamanho" : "Maximizar zoom"}
                >
                  {isZoomed ? <ZoomOut size={16} /> : <ZoomIn size={16} />}
                  <span className="hidden sm:inline">
                    {isZoomed ? "Zoom 100%" : "Zoom Max"}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full bg-white/10 hover:bg-jp-red text-white transition-colors cursor-pointer"
                  title="Fechar modal (ESC)"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Visualizador Principal de Imagem no Modal */}
            <div
              className="flex-1 overflow-auto p-4 sm:p-8 flex items-center justify-center relative cursor-zoom-out"
              onClick={() => setIsOpen(false)}
            >
              <div
                className={`transition-all duration-300 relative flex items-center justify-center ${
                  isZoomed ? "w-auto h-auto min-w-[80vw]" : "max-w-full max-h-[82vh]"
                }`}
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={getSrc(activeTab)}
                  alt={`Diagrama de ${getTitle(activeTab)} de ${kataNome}`}
                  className={`rounded-sm object-contain shadow-2xl transition-transform duration-300 ${
                    isZoomed ? "scale-125 cursor-zoom-out" : "max-h-[80vh] w-auto cursor-zoom-in"
                  }`}
                  onClick={() => setIsZoomed((prev) => !prev)}
                />
              </div>
            </div>

            {/* Rodapé Informativo do Lightbox */}
            <div
              className="px-6 py-3 bg-jp-ink/95 border-t border-white/10 text-white/60 text-xs flex items-center justify-between shrink-0"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="flex items-center gap-2">
                <span className="font-semibold text-jp-gold">Dica:</span> Pressione a tecla <kbd className="px-1.5 py-0.5 bg-white/10 text-white rounded font-mono text-[10px]">ESC</kbd> para fechar a qualquer momento.
              </span>

              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={() =>
                    setActiveTab((prev) => (prev === "oficial" ? "completo" : "oficial"))
                  }
                  className="hover:text-white flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <span>Alternar Visualização</span>
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}
