/**
 * Valores de domínio validados na API.
 *
 * Espelham os CHECK constraints do banco. Validar aqui devolve 400 com uma
 * mensagem útil, em vez de deixar o Postgres estourar um 500 opaco.
 */
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

export const STATUS_MENSALIDADE = ["em_dia", "pendente", "atrasado"] as const;

export type Faixa = (typeof FAIXAS)[number];
export type StatusMensalidade = (typeof STATUS_MENSALIDADE)[number];

export const FALLBACK_CONTEUDO = "Kihon Padronizado - Fundamentos Básicos";

export function faixaValida(v: unknown): v is Faixa {
  return typeof v === "string" && (FAIXAS as readonly string[]).includes(v);
}

export function statusValido(v: unknown): v is StatusMensalidade {
  return typeof v === "string" && (STATUS_MENSALIDADE as readonly string[]).includes(v);
}
