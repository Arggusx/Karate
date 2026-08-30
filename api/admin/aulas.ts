import type { VercelRequest, VercelResponse } from "@vercel/node";
import { sql } from "../_lib/db";
import { exigirAdmin } from "../_lib/auth";
import { corpo, erro, json, metodoPermitido } from "../_lib/http";
import { FALLBACK_CONTEUDO } from "../_lib/dominio";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (!metodoPermitido(req, res, ["GET", "POST", "DELETE"])) return;
  if (!(await exigirAdmin(req, res))) return;

  if (req.method === "GET") {
    const turmaId = Number(req.query.turma_id);
    const filtro = Number.isFinite(turmaId) ? turmaId : null;

    const aulas = await sql`
      SELECT a.id, a.turma_id, t.nome AS turma_nome,
             to_char(a.data_aula, 'YYYY-MM-DD') AS data_aula,
             a.conteudo_programado,
             -- NULLIF trata "" como ausente: o professor pode salvar o campo em
             -- branco e ainda assim o aluno ve o conteudo padrao.
             COALESCE(NULLIF(btrim(a.conteudo_programado), ''), a.fallback_conteudo)
               AS conteudo_exibido,
             (NULLIF(btrim(a.conteudo_programado), '') IS NULL) AS usando_fallback
      FROM aulas a
      JOIN turmas t ON t.id = a.turma_id
      WHERE (${filtro}::int IS NULL OR a.turma_id = ${filtro}::int)
      ORDER BY a.data_aula DESC
      LIMIT 200
    `;
    return json(res, 200, { aulas });
  }

  if (req.method === "DELETE") {
    const id = Number(req.query.id);
    if (!Number.isFinite(id)) return erro(res, 400, "id é obrigatório.");
    await sql`DELETE FROM aulas WHERE id = ${id}`;
    return json(res, 200, { ok: true });
  }

  const b = corpo<{ turma_id?: number; data_aula?: string; conteudo_programado?: string }>(req);
  const turmaId = Number(b.turma_id);

  if (!Number.isFinite(turmaId)) return erro(res, 400, "Selecione a turma.");
  if (!/^\d{4}-\d{2}-\d{2}$/.test(b.data_aula ?? "")) {
    return erro(res, 400, "Data deve estar no formato AAAA-MM-DD.");
  }

  const conteudo = b.conteudo_programado?.trim() || null;

  // ON CONFLICT porque existe indice unico em (turma_id, data_aula): reagendar
  // a mesma data vira atualizacao, em vez de erro 500 de chave duplicada.
  const [aula] = (await sql`
    INSERT INTO aulas (turma_id, data_aula, conteudo_programado, fallback_conteudo)
    VALUES (${turmaId}, ${b.data_aula}::date, ${conteudo}, ${FALLBACK_CONTEUDO})
    ON CONFLICT (turma_id, data_aula)
    DO UPDATE SET conteudo_programado = EXCLUDED.conteudo_programado
    RETURNING id, turma_id, to_char(data_aula, 'YYYY-MM-DD') AS data_aula,
              COALESCE(NULLIF(btrim(conteudo_programado), ''), fallback_conteudo)
                AS conteudo_exibido
  `) as Array<Record<string, unknown>>;

  return json(res, 201, { aula });
}
