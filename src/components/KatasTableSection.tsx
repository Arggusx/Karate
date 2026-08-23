import { Link } from "react-router-dom";
import type { KataTabela, NivelDificuldade } from "@/data/katasData";

interface KatasTableSectionProps {
  titulo: string;
  subtitulo: string;
  kanji: string;
  katas: KataTabela[];
}

/** Retorna classes de cor do badge baseado no nível de dificuldade */
function nivelBadgeClasses(nivel: NivelDificuldade): string {
  switch (nivel) {
    case "Iniciante":
      return "bg-emerald-100 text-emerald-800 border-emerald-200";
    case "Intermediário":
      return "bg-amber-100 text-amber-800 border-amber-200";
    case "Intermediário-Avançado":
      return "bg-orange-100 text-orange-800 border-orange-200";
    case "Avançado":
      return "bg-red-100 text-red-800 border-red-200";
    case "Especialista":
      return "bg-purple-100 text-purple-800 border-purple-200";
    default:
      return "bg-black/5 text-black/70 border-black/10";
  }
}

export function KatasTableSection({ titulo, subtitulo, kanji, katas }: KatasTableSectionProps) {
  return (
    <div className="bg-white border border-black/10 rounded-sm shadow-sm mb-12">
      {/* Cabeçalho da Seção */}
      <div className="px-6 py-5 border-b border-black/5">
        <div className="flex items-center gap-3">
          <span className="font-jp-serif text-3xl text-jp-red bg-jp-paper px-3 py-1 border border-black/5">
            {kanji}
          </span>
          <div>
            <h2 className="font-jp-serif text-2xl text-jp-ink">{titulo}</h2>
            <span className="text-xs text-black/50 tracking-wider uppercase">
              {subtitulo} · {katas.length} kata{katas.length !== 1 ? "s" : ""}
            </span>
          </div>
        </div>
      </div>

      {/* Tabela com scroll horizontal no mobile */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm min-w-[900px]">
          <thead>
            <tr className="bg-jp-ink text-white text-xs uppercase tracking-wider">
              <th className="px-4 py-3 font-semibold whitespace-nowrap">Nome do Kata</th>
              <th className="px-4 py-3 font-semibold whitespace-nowrap">Faixa Recomendada</th>
              <th className="px-4 py-3 font-semibold whitespace-nowrap">Nível</th>
              <th className="px-4 py-3 font-semibold whitespace-nowrap">Significado</th>
              <th className="px-4 py-3 font-semibold whitespace-nowrap text-center">Nº Mov.</th>
              <th className="px-4 py-3 font-semibold whitespace-nowrap">Posições de Kiai</th>
              <th className="px-4 py-3 font-semibold whitespace-nowrap">Técnicas Destaque</th>
            </tr>
          </thead>
          <tbody>
            {katas.map((kata, idx) => (
              <tr
                key={kata.id}
                className={`border-b border-black/5 transition-colors hover:bg-jp-red/5 ${
                  idx % 2 === 0 ? "bg-white" : "bg-jp-paper/40"
                }`}
              >
                {/* Nome — link clicável */}
                <td className="px-4 py-3.5">
                  <Link
                    to={`/katas/${kata.id}`}
                    className="font-jp-serif text-base font-bold text-jp-red hover:text-jp-ink transition-colors underline decoration-jp-red/30 underline-offset-2 hover:decoration-jp-ink/50"
                  >
                    {kata.nome}
                  </Link>
                </td>

                {/* Faixa Recomendada */}
                <td className="px-4 py-3.5 text-xs font-medium text-black/70 whitespace-nowrap">
                  {kata.faixaRecomendada}
                </td>

                {/* Nível de Dificuldade — badge colorido */}
                <td className="px-4 py-3.5">
                  <span
                    className={`inline-block px-2 py-0.5 rounded-sm text-[11px] font-semibold border whitespace-nowrap ${nivelBadgeClasses(
                      kata.nivelDificuldade
                    )}`}
                  >
                    {kata.nivelDificuldade}
                  </span>
                </td>

                {/* Significado do Nome */}
                <td className="px-4 py-3.5 text-xs text-black/70 italic max-w-[200px]">
                  {kata.significadoNome}
                </td>

                {/* Nº de Movimentos */}
                <td className="px-4 py-3.5 text-center">
                  <span className="font-jp-serif text-lg font-bold text-jp-ink">
                    {kata.quantidadeMovimentos}
                  </span>
                </td>

                {/* Posições de Kiai */}
                <td className="px-4 py-3.5 text-xs text-black/70 whitespace-nowrap">
                  {kata.posicoesKiai}
                </td>

                {/* Técnicas Destaque */}
                <td className="px-4 py-3.5 text-xs text-black/70 max-w-[280px]">
                  {kata.tecnicasDestaque}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
