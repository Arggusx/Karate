import { useEffect } from "react";
import { createPortal } from "react-dom";
import {
  X,
  Image as ImageIcon,
  ImagePlus,
  Info,
  BookOpen,
  Layers,
  Compass,
  Video,
  Activity,
  Award,
  Target
} from "lucide-react";
import type { KataItem } from "@/data/data";

interface KataModalProps {
  kata: KataItem;
  onClose: () => void;
}

export function KataModal({ kata, onClose }: KataModalProps) {
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

  // createPortal garante a renderização direta no document.body para centralização absoluta na viewport
  return createPortal(
    <div
      aria-labelledby="kata-modal-title"
      aria-modal="true"
      className="modal-overlay-anim fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto bg-black/80 p-3 backdrop-blur-sm sm:p-4 md:p-6"
      onClick={onClose}
      role="dialog"
    >
      <div
        className="modal-content-anim relative my-auto flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-sm border border-black/15 bg-jp-paper shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Botão Fechar Flutuante */}
        <button
          aria-label="Fechar modal"
          className="absolute right-4 top-4 z-20 cursor-pointer rounded-full bg-jp-ink/85 p-2.5 text-white shadow-md transition-all hover:scale-105 hover:bg-jp-red focus:outline-none focus:ring-2 focus:ring-jp-gold"
          onClick={onClose}
          type="button"
        >
          <X size={20} />
        </button>

        {/* Cabeçalho do Modal */}
        <header className="relative border-b-2 border-jp-red bg-jp-ink px-6 py-7 pr-16 text-white md:px-10">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-jp-red">
              Karatê Shotokan
            </span>
            <h2
              className="font-jp-serif text-3xl font-bold tracking-wide text-white md:text-4xl mt-1"
              id="kata-modal-title"
            >
              {kata.nome}
            </h2>
            <p className="mt-1 text-sm text-white/70">
              Guia Técnico e Filosofia do Kata
            </p>
          </div>
        </header>

        {/* Corpo com Rolagem */}
        <div className="space-y-6 overflow-y-auto p-6 text-jp-ink md:p-8">
          
          {/* 1. INFORMAÇÕES TÉCNICAS EM DESTAQUE (CARDS PRINCIPAIS) */}
          <section className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {/* Card 1: Quantidade de Movimentos */}
            <div className="border-l-4 border-jp-red bg-white p-5 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-black/50">
                <Activity className="text-jp-red" size={16} />
                <span>Movimentos</span>
              </div>
              <div className="mt-2 flex items-baseline gap-1.5">
                <span className="font-jp-serif text-3xl font-bold text-jp-ink md:text-4xl">
                  {kata.mov}
                </span>
                <span className="text-sm font-medium text-black/60">
                  movimentos
                </span>
              </div>
              <p className="mt-1 text-xs text-black/50">
                Total de passos e técnicas oficiais
              </p>
            </div>

            {/* Card 2: Nível / Graduação */}
            <div className="border-l-4 border-jp-gold bg-white p-5 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-black/50">
                <Award className="text-jp-gold" size={16} />
                <span>Graduação</span>
              </div>
              <div className="mt-2">
                <span className="font-jp-serif text-xl font-bold text-jp-ink md:text-2xl">
                  {kata.nivel}
                </span>
              </div>
              <p className="mt-1 text-xs text-black/50">
                Nível sugerido de aprendizado
              </p>
            </div>

            {/* Card 3: Classificação / Categoria */}
            <div className="border-l-4 border-black/40 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-black/50">
                <Target className="text-black/60" size={16} />
                <span>Classificação</span>
              </div>
              <div className="mt-2">
                <span className="font-jp-serif text-xl font-bold text-jp-ink md:text-2xl">
                  {kata.categoria || "Kata Oficial"}
                </span>
              </div>
              <p className="mt-1 text-xs text-black/50">
                Categoria técnica no Shotokan
              </p>
            </div>
          </section>

          {/* 2. SIGNIFICADO E DIVISÃO DO NOME */}
          <section className="relative overflow-hidden border border-black/10 bg-white p-6 shadow-sm">
            <div className="absolute left-0 top-0 h-full w-1.5 bg-jp-red" />
            <div className="mb-4 flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 font-jp-serif text-lg font-semibold text-jp-red">
                <BookOpen className="shrink-0 text-jp-red" size={20} />
                <h3>Significado do Nome</h3>
              </div>
              <span className="rounded bg-jp-red/10 px-2.5 py-0.5 text-xs font-semibold text-jp-red">
                Tradução
              </span>
            </div>

            <div className="space-y-4">
              {kata.decomposicao && kata.decomposicao.length > 0 && (
                <div className="flex flex-wrap items-stretch gap-2.5">
                  {kata.decomposicao.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 rounded-sm border border-black/10 bg-jp-paper px-3.5 py-2 text-sm shadow-2xs"
                    >
                      <span className="font-bold text-jp-red uppercase tracking-wider">
                        {item.termo}
                      </span>
                      <span className="text-black/30 font-bold">—</span>
                      <span className="font-medium text-black/80">
                        {item.significado}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Frase Completa do Significado */}
              <div className="rounded-sm border border-black/5 bg-black/5 p-4">
                <span className="mb-1 block text-[11px] font-bold uppercase tracking-wider text-black/50">
                  Sentido Geral:
                </span>
                <p className="font-jp-serif text-lg font-bold text-jp-ink md:text-xl">
                  "{kata.significado}"
                </p>
              </div>

              {/* Descrição e contexto técnico */}
              <p className="text-sm leading-relaxed text-black/75 md:text-base">
                {kata.text}
              </p>
            </div>
          </section>

          {/* 3. VÍDEO DO KATA */}
          <section className="border border-black/10 bg-white p-6 shadow-sm">
            <div className="mb-3 flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 font-jp-serif text-lg font-semibold text-jp-red">
                <Video className="shrink-0 text-jp-red" size={20} />
                <h3>Vídeo de Demonstração</h3>
              </div>
              {kata.videoUrl ? (
                <span className="rounded bg-black/5 px-2.5 py-1 text-xs font-medium text-black/60">
                  Execução Técnica
                </span>
              ) : null}
            </div>

            {kata.videoUrl ? (
              <div className="mt-3 aspect-video overflow-hidden border border-black/10 bg-black shadow-inner">
                <iframe
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="h-full w-full"
                  referrerPolicy="strict-origin-when-cross-origin"
                  src={kata.videoUrl}
                  title={`Vídeo do kata ${kata.nome}`}
                />
              </div>
            ) : (
              <div className="mt-3 flex flex-col items-center justify-center border-2 border-dashed border-black/15 bg-jp-paper/60 p-8 text-center">
                <Info className="mb-2 text-black/40" size={28} />
                <p className="text-sm font-medium text-black/70">
                  Vídeo de execução em breve
                </p>
                <p className="mt-1 max-w-sm text-xs text-black/50">
                  O registro visual em vídeo deste kata será adicionado em breve ao arquivo técnico.
                </p>
              </div>
            )}
          </section>

          {/* 4. ESPAÇO RESERVADO PARA IMAGENS MANUAIS */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 font-jp-serif text-lg font-semibold text-jp-red">
              <ImageIcon className="shrink-0 text-jp-red" size={20} />
              <h3>Imagens e Diagramas do Kata</h3>
            </div>

            <p className="text-xs leading-relaxed text-black/60">
              Espaço reservado para visualização gráfica do diagrama de movimentação (Enbusen) e ilustrações das técnicas e posturas fundamentais.
            </p>

            <div className="grid gap-5 md:grid-cols-2">
              {/* Espaço 1: Diagrama Enbusen (Passos) */}
              <div className="flex flex-col justify-between border border-black/10 bg-white p-5 shadow-sm">
                <div>
                  <div className="flex items-center justify-between border-b border-black/5 pb-2 text-xs font-semibold text-black/70">
                    <span className="flex items-center gap-1.5">
                      <Compass className="text-jp-red" size={16} />
                      Diagrama Enbusen
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-black/40">
                      Linha de passos
                    </span>
                  </div>

                  {/* 
                    [INSERÇÃO MANUAL DE IMAGEM DO ENBUSEN]:
                    Para colocar uma imagem, você pode:
                    1) Preencher o campo `enbusenUrl: "/caminho/sua-imagem.png"` no arquivo src/Data/data.ts
                    2) Ou substituir esta verificação diretamente pela sua tag <img>:
                       <img src="/caminho/da/sua-imagem.png" alt="Enbusen" className="w-full h-auto object-contain" />
                  */}
                  {kata.enbusenUrl ? (
                    <div className="mt-3 flex aspect-[4/3] items-center justify-center overflow-hidden border border-black/10 bg-jp-paper">
                      <img
                        alt={`Diagrama Enbusen de ${kata.nome}`}
                        className="h-full w-full object-contain"
                        src={kata.enbusenUrl}
                      />
                    </div>
                  ) : (
                    <div className="mt-3 flex aspect-[4/3] flex-col items-center justify-center border-2 border-dashed border-black/20 bg-jp-paper/40 p-5 text-center transition-colors hover:bg-jp-paper/70">
                      <ImagePlus className="mb-2 text-black/35" size={32} />
                      <span className="text-xs font-bold text-black/70">
                        Espaço para Enbusen
                      </span>
                      <p className="mt-1 text-[11px] leading-snug text-black/50">
                        Espaço reservado para colar o diagrama de passos de <strong>{kata.nome}</strong>.
                      </p>
                      <span className="mt-2 inline-block rounded bg-black/5 px-2 py-0.5 font-mono text-[10px] text-black/45">
                        enbusenUrl: "imagem.png"
                      </span>
                    </div>
                  )}
                </div>
                <p className="mt-3 text-center text-[11px] italic text-black/50">
                  Linha geométrica e orientação espacial no tatame.
                </p>
              </div>

              {/* Espaço 2: Sequência Técnica / Posturas */}
              <div className="flex flex-col justify-between border border-black/10 bg-white p-5 shadow-sm">
                <div>
                  <div className="flex items-center justify-between border-b border-black/5 pb-2 text-xs font-semibold text-black/70">
                    <span className="flex items-center gap-1.5">
                      <Layers className="text-jp-red" size={16} />
                      Técnicas e Posturas
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-black/40">
                      Aplicações práticas
                    </span>
                  </div>

                  {/* 
                    [INSERÇÃO MANUAL DE IMAGEM DE TÉCNICAS]:
                    Para colocar uma imagem, você pode:
                    1) Preencher o campo `imagemUrl: "/caminho/sua-imagem.png"` no arquivo src/Data/data.ts
                    2) Ou substituir esta verificação diretamente pela sua tag <img>:
                       <img src="/caminho/da/sua-imagem.png" alt="Técnicas" className="w-full h-auto object-contain" />
                  */}
                  {kata.imagemUrl ? (
                    <div className="mt-3 flex aspect-[4/3] items-center justify-center overflow-hidden border border-black/10 bg-jp-paper">
                      <img
                        alt={`Técnicas e posturas de ${kata.nome}`}
                        className="h-full w-full object-contain"
                        src={kata.imagemUrl}
                      />
                    </div>
                  ) : (
                    <div className="mt-3 flex aspect-[4/3] flex-col items-center justify-center border-2 border-dashed border-black/20 bg-jp-paper/40 p-5 text-center transition-colors hover:bg-jp-paper/70">
                      <ImagePlus className="mb-2 text-black/35" size={32} />
                      <span className="text-xs font-bold text-black/70">
                        Espaço para Fotos / Posturas
                      </span>
                      <p className="mt-1 text-[11px] leading-snug text-black/50">
                        Espaço reservado para colar fotos das posições e aplicações reais de <strong>{kata.nome}</strong>.
                      </p>
                      <span className="mt-2 inline-block rounded bg-black/5 px-2 py-0.5 font-mono text-[10px] text-black/45">
                        imagemUrl: "imagem.png"
                      </span>
                    </div>
                  )}
                </div>
                <p className="mt-3 text-center text-[11px] italic text-black/50">
                  Sequência fotográfica e pontos fundamentais de foco.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Rodapé do Modal */}
        <footer className="flex items-center justify-between border-t border-black/10 bg-jp-paper px-6 py-4 text-xs text-black/60">
          <span className="font-medium">
            {kata.nome} · {kata.mov} movimentos · {kata.nivel}
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
