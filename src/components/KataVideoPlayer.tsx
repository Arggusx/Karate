import { useState, useEffect } from "react";
import { Video, Film, Sparkles } from "lucide-react";

interface KataVideoPlayerProps {
  videoUrl?: string;
  kataNome: string;
}

export function KataVideoPlayer({ videoUrl, kataNome }: KataVideoPlayerProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  // Reset loaded state when videoUrl changes (navigating between katas)
  useEffect(() => {
    setIsLoaded(false);
  }, [videoUrl]);

  const hasValidUrl = Boolean(videoUrl && videoUrl.trim().length > 0);

  return (
    <div className="border border-black/10 bg-white p-5 rounded-sm shadow-sm">
      {/* Header do Player */}
      <div className="mb-4 flex items-center justify-between pb-3 border-b border-black/5">
        <div className="flex items-center gap-2">
          <Video size={18} className="text-jp-red" />
          <h3 className="font-jp-serif text-base font-bold text-jp-ink">
            Execução Técnica Oficial em Vídeo
          </h3>
        </div>
        {hasValidUrl ? (
          <span className="text-[10px] bg-jp-ink text-white px-2.5 py-0.5 rounded-xs font-mono tracking-wider">
            VÍDEO HD
          </span>
        ) : (
          <span className="text-[10px] bg-amber-100 text-amber-800 border border-amber-200 px-2.5 py-0.5 rounded-xs font-semibold">
            EM BREVE
          </span>
        )}
      </div>

      {hasValidUrl ? (
        <div className="relative aspect-video w-full overflow-hidden border border-black/10 bg-black rounded-xs shadow-inner">
          {/* Skeleton Loader enquanto o iframe não carrega */}
          {!isLoaded && (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-jp-ink/90 animate-pulse p-6 text-center">
              <Film size={36} className="text-white/30 mb-3 animate-spin" style={{ animationDuration: "3s" }} />
              <div className="h-4 w-48 bg-white/20 rounded-full mb-2" />
              <div className="h-3 w-32 bg-white/10 rounded-full" />
              <span className="mt-4 text-[11px] text-white/50 font-mono">
                Carregando demonstração de {kataNome}...
              </span>
            </div>
          )}

          {/* Iframe do Vídeo */}
          <iframe
            src={videoUrl}
            title={`Vídeo de demonstração do kata ${kataNome}`}
            onLoad={() => setIsLoaded(true)}
            className={`h-full w-full transition-opacity duration-500 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      ) : (
        /* Fallback Container Amigável */
        <div className="aspect-video w-full flex flex-col items-center justify-center border-2 border-dashed border-black/15 bg-jp-paper/60 p-8 text-center rounded-xs relative overflow-hidden group">
          {/* Símbolo decorativo de fundo */}
          <div className="absolute opacity-[0.03] text-jp-ink font-jp-serif text-[180px] pointer-events-none select-none">
            武
          </div>

          <div className="relative z-10 flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-jp-red/10 border border-jp-red/20 flex items-center justify-center text-jp-red mb-3 group-hover:scale-110 transition-transform">
              <Video size={28} />
            </div>

            <h4 className="font-jp-serif text-lg font-bold text-jp-ink">
              Vídeo demonstrativo em breve nesta seção
            </h4>

            <p className="mt-2 text-xs text-black/60 max-w-sm leading-relaxed">
              O registro audiovisual oficial da execução técnica de <strong>{kataNome}</strong> está sendo gravado e será disponibilizado em breve no acervo.
            </p>

            <div className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-semibold text-jp-gold bg-white px-3 py-1 rounded-full border border-black/10 shadow-2xs">
              <Sparkles size={13} /> Conteúdo exclusivo em produção
            </div>
          </div>
        </div>
      )}

      <p className="mt-3 text-center text-[11px] italic text-black/50">
        Assista aos detalhes de ritmo, kiai e expansão de movimento.
      </p>
    </div>
  );
}
