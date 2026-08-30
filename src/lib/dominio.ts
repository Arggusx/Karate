/** Espelho no front dos valores aceitos pela API (api/_lib/dominio.ts). */
export const FAIXAS = [
  "10º Kyu - Faixa Branca",
  "9º Kyu - Faixa Cinza",
  "8º Kyu - Faixa Azul",
  "7º Kyu - Faixa Amarela",
  "6º Kyu - Faixa Vermelha",
  "5º Kyu - Faixa Laranja",
  "4º Kyu - Faixa Verde",
  "3º Kyu - Faixa Roxa",
  "2º Kyu - Faixa Marrom",
  "1º Kyu - Faixa Marrom",
  "1º Dan - Faixa Preta",
  "2º Dan - Faixa Preta",
  "3º Dan - Faixa Preta",
] as const;

export const STATUS_LABEL: Record<string, string> = {
  em_dia: "Em dia",
  pendente: "Pendente",
  atrasado: "Atrasado",
};

export const STATUS_CLASSE: Record<string, string> = {
  em_dia: "bg-emerald-50 text-emerald-700 border-emerald-200",
  pendente: "bg-amber-50 text-amber-700 border-amber-200",
  atrasado: "bg-red-50 text-red-700 border-red-200",
};

/** Cor aproximada da faixa, para o traço visual da carteirinha. */
export function corDaFaixa(faixa: string): string {
  const f = faixa.toLowerCase();
  if (f.includes("branca")) return "#E8E4DA";
  if (f.includes("cinza")) return "#9CA3AF";
  if (f.includes("azul")) return "#2563EB";
  if (f.includes("amarela")) return "#EAB308";
  if (f.includes("vermelha")) return "#DC2626";
  if (f.includes("laranja")) return "#EA580C";
  if (f.includes("verde")) return "#16A34A";
  if (f.includes("roxa")) return "#7C3AED";
  if (f.includes("marrom")) return "#78350F";
  if (f.includes("preta")) return "#111111";
  return "#9CA3AF";
}

/** "2026-03-14" -> "14/03/2026" sem depender de fuso horário. */
export function dataBR(iso: string | null | undefined): string {
  if (!iso) return "—";
  const [a, m, d] = iso.split("-");
  return d && m && a ? `${d}/${m}/${a}` : iso;
}

/** Dia da semana por extenso a partir de AAAA-MM-DD (meio-dia evita virada de fuso). */
export function diaSemana(iso: string): string {
  const [a, m, d] = iso.split("-").map(Number);
  if (!a || !m || !d) return "";
  return new Date(a, m - 1, d, 12).toLocaleDateString("pt-BR", { weekday: "long" });
}
