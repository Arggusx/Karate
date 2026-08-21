import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { KATAS_26 } from "@/Data/katasData";

export function KataPage() {
  const { slug } = useParams<{ slug: string }>();
  const kata = KATAS_26.find((k) => k.id === slug);

  if (!kata) {
    return (
      <div className="page-anim">
        <section className="relative bg-jp-ink text-white py-24 overflow-hidden">
          <div className="kanji-watermark" style={{ fontSize: 520, right: -60, top: -100, color: "rgba(188,0,45,0.1)" }}>型</div>
          <div className="max-w-5xl mx-auto px-5 lg:px-8 relative text-center">
            <h1 className="font-jp-serif text-5xl mt-2">Kata não encontrado</h1>
            <p className="text-white/70 mt-4">
              O kata com identificador <strong>"{slug}"</strong> não foi localizado nos registros.
            </p>
            <Link
              to="/tecnicas"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-jp-red text-white font-medium text-sm rounded-sm hover:bg-jp-red-bright transition-colors"
            >
              <ArrowLeft size={16} />
              Voltar para Técnicas e Katas
            </Link>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="page-anim">
      {/* Banner */}
      <section className="relative bg-jp-ink text-white py-24 overflow-hidden">
        <div className="kanji-watermark" style={{ fontSize: 520, right: -60, top: -100, color: "rgba(188,0,45,0.1)" }}>型</div>
        <div className="max-w-5xl mx-auto px-5 lg:px-8 relative">
          <div className="text-jp-red tracking-widest uppercase text-xs">Kata Shotokan</div>
          <h1 className="font-jp-serif text-5xl md:text-6xl mt-2">{kata.nome}</h1>
          <p className="text-white/70 mt-4 max-w-2xl leading-relaxed">
            "{kata.significadoNome}" — {kata.quantidadeMovimentos} movimentos · {kata.faixaRecomendada}
          </p>
        </div>
      </section>

      {/* Conteúdo Placeholder */}
      <section className="py-16 bg-jp-paper">
        <div className="max-w-5xl mx-auto px-5 lg:px-8">
          {/* Informações rápidas */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            <div className="border-l-4 border-jp-red bg-white p-5 shadow-sm">
              <div className="text-xs font-bold uppercase tracking-wider text-black/50 mb-2">Movimentos</div>
              <span className="font-jp-serif text-3xl font-bold text-jp-ink">{kata.quantidadeMovimentos}</span>
            </div>
            <div className="border-l-4 border-jp-gold bg-white p-5 shadow-sm">
              <div className="text-xs font-bold uppercase tracking-wider text-black/50 mb-2">Nível</div>
              <span className="font-jp-serif text-xl font-bold text-jp-ink">{kata.nivelDificuldade}</span>
            </div>
            <div className="border-l-4 border-black/40 bg-white p-5 shadow-sm">
              <div className="text-xs font-bold uppercase tracking-wider text-black/50 mb-2">Kiai</div>
              <span className="font-jp-serif text-base font-bold text-jp-ink">{kata.posicoesKiai}</span>
            </div>
          </div>

          {/* Aviso em construção */}
          <div className="bg-white border border-black/10 rounded-sm p-8 text-center shadow-sm">
            <span className="font-jp-serif text-4xl text-jp-red block mb-4">🏗️</span>
            <h2 className="font-jp-serif text-2xl text-jp-ink mb-2">Página em Construção</h2>
            <p className="text-sm text-black/60 max-w-lg mx-auto leading-relaxed">
              O conteúdo detalhado deste kata — incluindo vídeo de demonstração, diagrama Enbusen,
              descrição técnica completa e decomposição do nome — será adicionado em breve.
            </p>
            <div className="mt-4 text-xs text-black/40">
              Técnicas destaque: <span className="font-medium text-black/60">{kata.tecnicasDestaque}</span>
            </div>
          </div>

          {/* Botão voltar */}
          <div className="mt-8">
            <Link
              to="/tecnicas"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-jp-ink text-white font-medium text-sm rounded-sm hover:bg-jp-red transition-colors"
            >
              <ArrowLeft size={16} />
              Voltar para Técnicas e Katas
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default KataPage;
