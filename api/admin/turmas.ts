import type { VercelRequest, VercelResponse } from "@vercel/node";
import { sql } from "../_lib/db";
import { exigirAdmin } from "../_lib/auth";
import { corpo, erro, json, metodoPermitido } from "../_lib/http";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (!metodoPermitido(req, res, ["GET", "POST"])) return;
  const sessao = await exigirAdmin(req, res);
  if (!sessao) return;

  if (req.method === "GET") {
    const turmas = await sql`
      SELECT t.id, t.nome, t.dias_semana,
             to_char(t.horario, 'HH24:MI') AS horario,
             t.professor_id, prof.nome AS professor_nome,
             count(p.id) FILTER (WHERE u.ativo)::int AS total_alunos
      FROM turmas t
      LEFT JOIN users prof ON prof.id = t.professor_id
      LEFT JOIN alunos_perfil p ON p.turma_id = t.id
      LEFT JOIN users u ON u.id = p.user_id
      GROUP BY t.id, t.nome, t.dias_semana, t.horario, t.professor_id, prof.nome
      ORDER BY t.nome
    `;
    return json(res, 200, { turmas });
  }

  const { nome, dias_semana, horario } = corpo<{
    nome?: string; dias_semana?: string; horario?: string;
  }>(req);

  if (!nome?.trim()) return erro(res, 400, "Informe o nome da turma.");
  if (!dias_semana?.trim()) return erro(res, 400, "Informe os dias da semana.");
  if (!/^\d{2}:\d{2}$/.test(horario ?? "")) {
    return erro(res, 400, "Horário deve estar no formato HH:MM.");
  }

  const [turma] = (await sql`
    INSERT INTO turmas (nome, dias_semana, horario, professor_id)
    VALUES (${nome.trim()}, ${dias_semana.trim()}, ${horario}::time, ${sessao.userId})
    RETURNING id, nome, dias_semana, to_char(horario, 'HH24:MI') AS horario
  `) as Array<Record<string, unknown>>;

  return json(res, 201, { turma });
}
