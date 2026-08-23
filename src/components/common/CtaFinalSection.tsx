import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Shield, Sparkles } from "lucide-react";

export function CtaFinalSection() {
  return (
    <div className="bg-jp-ink text-white border-4 border-jp-red/40 rounded-sm p-8 lg:p-12 shadow-xl relative overflow-hidden text-center">
      {/* Background Kanji Watermarks */}
      <div
        className="kanji-watermark"
        style={{ fontSize: 400, left: -40, top: -80, color: "rgba(188,0,45,0.06)" }}
        aria-hidden="true"
      >
        道
      </div>

      <div
        className="kanji-watermark"
        style={{ fontSize: 400, right: -40, bottom: -80, color: "rgba(212,175,55,0.04)" }}
        aria-hidden="true"
      >
        空
      </div>

      <div className="relative z-10 max-w-3xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-jp-red/20 border border-jp-red/40 text-jp-gold text-xs font-bold uppercase tracking-widest">
          <Sparkles size={14} /> Karate-Dō: Caminho de Vida
        </div>

        <h2 className="font-jp-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wide text-white">
          Aprofunde seu Conhecimento no Shotokan
        </h2>

        <p className="text-white/80 text-sm sm:text-base leading-relaxed font-normal max-w-2xl mx-auto">
          O estudo do Karatê vai além do treino físico. Explore a história dos grandes mestres, a etiqueta sagrada do Dōjō (Reishiki) e os preceitos filosóficos do Niju Kun.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            to="/historia"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-jp-red text-white font-bold text-sm rounded-sm hover:bg-jp-red-bright transition-all shadow-md hover:shadow-lg hover:scale-102 active:scale-98"
          >
            <BookOpen size={18} />
            <span>Conheça a História & Mestres</span>
            <ArrowRight size={16} />
          </Link>

          <Link
            to="/fundamentos"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm rounded-sm transition-all shadow-sm hover:scale-102 active:scale-98"
          >
            <Shield size={18} className="text-jp-gold" />
            <span>Fundamentos & Etiqueta (Rei)</span>
          </Link>
        </div>

        <div className="pt-6 border-t border-white/10 flex items-center justify-center gap-6 text-xs text-white/50 font-mono tracking-wider uppercase">
          <span>• 26 Katas</span>
          <span>• Niju Kun</span>
          <span>• Dōjō Kun</span>
        </div>
      </div>
    </div>
  );
}
