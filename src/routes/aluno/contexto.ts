import { createContext, useContext } from "react";

export interface FichaAluno {
  id: number;
  nome: string;
  email: string;
  foto_url: string | null;
  telefone: string | null;
  data_nascimento: string | null;
  membro_desde: string | null;
  faixa_atual: string;
  apto_exame: boolean;
  status_mensalidade: "em_dia" | "pendente" | "atrasado";
  atualizado_em: string | null;
  turma_id: number | null;
  turma_nome: string | null;
  dias_semana: string | null;
  horario: string | null;
  professor_nome: string | null;
}

export interface ItemAgenda {
  id: number;
  data_aula: string;
  conteudo: string;
  usando_fallback: boolean;
}

export interface DadosAluno {
  ficha: FichaAluno;
  agenda: ItemAgenda[];
}

export const CtxAluno = createContext<DadosAluno | null>(null);

export function useDadosAluno(): DadosAluno {
  const ctx = useContext(CtxAluno);
  if (!ctx) throw new Error("useDadosAluno precisa estar dentro de <PainelAluno>.");
  return ctx;
}
