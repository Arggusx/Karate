/**
 * Classificacao da midia externa a partir da extensao / dominio da URL.
 *
 * Vive fora do componente porque a regra `react-refresh/only-export-components`
 * exige que um modulo de componente exporte apenas componentes — misturar
 * helpers desliga o Fast Refresh do arquivo inteiro.
 */
export type MediaKind = "video" | "image" | "embed";

export function detectMediaKind(src: string): MediaKind {
  const clean = src.split("?")[0].toLowerCase();
  if (/\.(mp4|webm|ogv|ogg|mov|m4v)$/.test(clean)) return "video";
  if (/\.(gif|webp|apng|png|jpe?g|avif|svg)$/.test(clean)) return "image";
  return "embed";
}
