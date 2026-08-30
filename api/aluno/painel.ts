import type { VercelRequest, VercelResponse } from "@vercel/node";
import { sql } from "../_lib/db";
import { exigirSessao } from "../_lib/auth";
import { erro, json, metodoPermitido } from "../_lib/http";

/**
 * Tudo que o portal do aluno precisa: carteirinha, turma, financeiro e agenda.
 *
 * O aluno so enxerga os proprios dados — o id vem da SESSAO, nunca da query
 * string. Aceitar um ?user_id= permitiria a qualquer aluno ler a ficha de
 * outro apenas trocando o numero na URL.
 */
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (!metodoPermitido(req, res, ["GET"])) return;

  const sessao = await exigirSessao(req, res);
  if (!sessao) return;
  if (sessao.role !== "aluno") return erro(res, 403, "Rota exclusiva de alunos.");

  const [ficha] = (await sql`
    SELECT u.id, u.nome, u.email, u.foto_url, u.telefone,
           to_char(u.data_nascimento, 'YYYY-MM-DD') AS data_nascimento,
           to_char(u.criado_em, 'YYYY-MM-DD') AS membro_desde,
           p.faixa_atual, p.apto_exame, p.status_mensalidade,
           to_char(p.atualizado_em, 'YYYY-MM-DD') AS atualizado_em,
           t.id AS turma_id, t.nome AS turma_nome, t.dias_semana,
           to_char(t.horario, 'HH24:MI') AS horario,
           prof.nome AS professor_nome
    FROM users u
    JOIN alunos_perfil p ON p.user_id = u.id
    LEFT JOIN turmas t ON t.id = p.turma_id
    LEFT JOIN users prof ON prof.id = t.professor_id
    WHERE u.id = ${sessao.userId}
    LIMIT 1
  `) as Array<Record<string, unknown>>;

  if (!ficha) return erro(res, 404, "Perfil de aluno não encontrado.");

  // Agenda: proximas aulas da turma do aluno, ja com o fallback resolvido.
  const agenda = ficha.turma_id
    ? await sql`
        SELECT a.id, to_char(a.data_aula, 'YYYY-MM-DD') AS data_aula,
               COALESCE(NULLIF(btrim(a.conteudo_programado), ''), a.fallback_conteudo)
                 AS conteudo,
               (NULLIF(btrim(a.conteudo_programado), '') IS NULL) AS usando_fallback
        FROM aulas a
        WHERE a.turma_id = ${ficha.turma_id as number}
          AND a.data_aula >= CURRENT_DATE - INTERVAL '1 day'
        ORDER BY a.data_aula
        LIMIT 12
      `
    : [];

  return json(res, 200, { ficha, agenda });
}
