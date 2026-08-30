export type Papel = "admin" | "aluno";

export interface Usuario {
  id: number;
  nome: string;
  email: string;
  role: Papel;
  foto_url?: string | null;
}

export interface Turma {
  id: number;
  nome: string;
  dias_semana: string;
  horario: string;
  professor_id?: number | null;
  professor_nome?: string | null;
  total_alunos?: number;
}

export interface Aluno {
  id: number;
  nome: string;
  email: string;
  ativo: boolean;
  foto_url: string | null;
  telefone: string | null;
  data_nascimento: string | null;
  faixa_atual: string;
  apto_exame: boolean;
  status_mensalidade: "em_dia" | "pendente" | "atrasado";
  turma_id: number | null;
  turma_nome: string | null;
  dias_semana: string | null;
  horario: string | null;
}

export interface Aula {
  id: number;
  turma_id: number;
  turma_nome?: string;
  data_aula: string;
  conteudo_programado: string | null;
  conteudo_exibido: string;
  usando_fallback: boolean;
}
