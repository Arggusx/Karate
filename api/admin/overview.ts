import type { VercelRequest, VercelResponse } from "@vercel/node";
import { sql } from "../_lib/db";
import { exigirAdmin } from "../_lib/auth";
import { json, metodoPermitido } from "../_lib/http";

/** Métricas da Visão Geral do professor. */
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (!metodoPermitido(req, res, ["GET"])) return;
  if (!(await exigirAdmin(req, res))) return;

  const [totais] = (await sql`
    SELECT
      count(*) FILTER (WHERE u.ativo)                                    AS alunos_ativos,
      count(*) FILTER (WHERE NOT u.ativo)                                AS alunos_inativos,
      count(*) FILTER (WHERE p.apto_exame AND u.ativo)                   AS aptos_exame,
      count(*) FILTER (WHERE p.status_mensalidade = 'em_dia'  AND u.ativo) AS em_dia,
      count(*) FILTER (WHERE p.status_mensalidade = 'pendente' AND u.ativo) AS pendente,
      count(*) FILTER (WHERE p.status_mensalidade = 'atrasado' AND u.ativo) AS atrasado
    FROM users u
    JOIN alunos_perfil p ON p.user_id = u.id
    WHERE u.role = 'aluno'
  `) as Array<Record<string, string>>;

  const [{ total_turmas }] = (await sql`
    SELECT count(*)::int AS total_turmas FROM turmas
  `) as Array<{ total_turmas: number }>;

  const porTurma = (await sql`
    SELECT t.id, t.nome, t.dias_semana, to_char(t.horario, 'HH24:MI') AS horario,
           count(p.id) FILTER (WHERE u.ativo)::int AS alunos
    FROM turmas t
    LEFT JOIN alunos_perfil p ON p.turma_id = t.id
    LEFT JOIN users u ON u.id = p.user_id
    GROUP BY t.id, t.nome, t.dias_semana, t.horario
    ORDER BY t.nome
  `) as Array<Record<string, unknown>>;

  const n = (v: unknown) => Number(v ?? 0);

  return json(res, 200, {
    alunosAtivos: n(totais?.alunos_ativos),
    alunosInativos: n(totais?.alunos_inativos),
    aptosExame: n(totais?.aptos_exame),
    totalTurmas: total_turmas,
    mensalidades: {
      em_dia: n(totais?.em_dia),
      pendente: n(totais?.pendente),
      atrasado: n(totais?.atrasado),
    },
    turmas: porTurma,
  });
}
