import type { VercelRequest, VercelResponse } from "@vercel/node";
import { sql } from "../_lib/db";
import { exigirAdmin, hashSenha } from "../_lib/auth";
import { corpo, erro, json, metodoPermitido, normalizarEmail } from "../_lib/http";
import { faixaValida, statusValido } from "../_lib/dominio";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (!metodoPermitido(req, res, ["GET", "POST", "PATCH"])) return;

  // Toda esta rota exige professor. É AQUI que a regra "somente admin cadastra
  // aluno" é realmente aplicada — esconder o botão no front não é proteção.
  if (!(await exigirAdmin(req, res))) return;

  if (req.method === "GET") return listar(req, res);
  if (req.method === "POST") return criar(req, res);
  return atualizar(req, res);
}

async function listar(req: VercelRequest, res: VercelResponse) {
  const turmaId = Number(req.query.turma_id);

  const alunos = await sql`
    SELECT u.id, u.nome, u.email, u.ativo, u.foto_url, u.telefone,
           to_char(u.data_nascimento, 'YYYY-MM-DD') AS data_nascimento,
           p.id AS perfil_id, p.faixa_atual, p.apto_exame, p.status_mensalidade,
           p.turma_id, t.nome AS turma_nome,
           t.dias_semana, to_char(t.horario, 'HH24:MI') AS horario
    FROM users u
    JOIN alunos_perfil p ON p.user_id = u.id
    LEFT JOIN turmas t ON t.id = p.turma_id
    WHERE u.role = 'aluno'
      AND (${Number.isFinite(turmaId) ? turmaId : null}::int IS NULL
           OR p.turma_id = ${Number.isFinite(turmaId) ? turmaId : null}::int)
    ORDER BY u.nome
  `;
  return json(res, 200, { alunos });
}

async function criar(req: VercelRequest, res: VercelResponse) {
  const b = corpo<{
    nome?: string; email?: string; senha?: string; turma_id?: number | null;
    data_nascimento?: string | null; telefone?: string | null; faixa_atual?: string;
  }>(req);

  const nome = b.nome?.trim();
  const email = normalizarEmail(b.email);
  const senha = String(b.senha ?? "");

  if (!nome) return erro(res, 400, "Informe o nome do aluno.");
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return erro(res, 400, "E-mail inválido.");
  if (senha.length < 8) return erro(res, 400, "A senha inicial deve ter ao menos 8 caracteres.");
  if (b.faixa_atual && !faixaValida(b.faixa_atual)) return erro(res, 400, "Faixa inválida.");

  const [existente] = (await sql`
    SELECT 1 FROM users WHERE lower(email) = ${email} LIMIT 1
  `) as unknown[];
  if (existente) return erro(res, 409, "Já existe um cadastro com este e-mail.");

  const hash = await hashSenha(senha);
  const turmaId = Number.isFinite(Number(b.turma_id)) ? Number(b.turma_id) : null;

  // CTE para que usuário e perfil nasçam na MESMA instrução. Em dois comandos
  // separados, uma falha no segundo deixaria um usuário órfão, sem perfil —
  // que depois não apareceria em nenhuma listagem nem conseguiria usar o portal.
  const [aluno] = (await sql`
    WITH novo AS (
      INSERT INTO users (nome, email, senha_hash, role, data_nascimento, telefone)
      VALUES (${nome}, ${email}, ${hash}, 'aluno',
              ${b.data_nascimento || null}::date, ${b.telefone || null})
      RETURNING id, nome, email
    ), perfil AS (
      INSERT INTO alunos_perfil (user_id, turma_id, faixa_atual)
      SELECT novo.id, ${turmaId}::int,
             COALESCE(${b.faixa_atual || null}, '10º Kyu - Faixa Branca')
      FROM novo
      RETURNING user_id, faixa_atual, turma_id
    )
    SELECT novo.id, novo.nome, novo.email, perfil.faixa_atual, perfil.turma_id
    FROM novo JOIN perfil ON perfil.user_id = novo.id
  `) as Array<Record<string, unknown>>;

  return json(res, 201, { aluno });
}

async function atualizar(req: VercelRequest, res: VercelResponse) {
  const b = corpo<{
    user_id?: number; turma_id?: number | null; faixa_atual?: string;
    apto_exame?: boolean; status_mensalidade?: string; ativo?: boolean;
  }>(req);

  const userId = Number(b.user_id);
  if (!Number.isFinite(userId)) return erro(res, 400, "user_id é obrigatório.");
  if (b.faixa_atual !== undefined && !faixaValida(b.faixa_atual)) {
    return erro(res, 400, "Faixa inválida.");
  }
  if (b.status_mensalidade !== undefined && !statusValido(b.status_mensalidade)) {
    return erro(res, 400, "Status de mensalidade inválido.");
  }

  // A turma precisa distinguir tres casos: campo ausente (manter), null
  // (desvincular) e numero (transferir). Sem isso, salvar apenas a faixa
  // apagaria a turma do aluno — perda silenciosa de dado.
  const mudarTurma = Object.prototype.hasOwnProperty.call(b, "turma_id");

  // COALESCE deixa a atualização parcial: campos não enviados ficam como estão,
  // então a tela pode mandar só o que mudou.
  const [perfil] = (await sql`
    UPDATE alunos_perfil SET
      turma_id           = CASE WHEN ${mudarTurma}
                                THEN ${b.turma_id ?? null}::int
                                ELSE turma_id END,
      faixa_atual        = COALESCE(${b.faixa_atual ?? null}, faixa_atual),
      apto_exame         = COALESCE(${b.apto_exame ?? null}::boolean, apto_exame),
      status_mensalidade = COALESCE(${b.status_mensalidade ?? null}, status_mensalidade)
    WHERE user_id = ${userId}
    RETURNING user_id, turma_id, faixa_atual, apto_exame, status_mensalidade
  `) as Array<Record<string, unknown>>;

  if (!perfil) return erro(res, 404, "Aluno não encontrado.");

  if (b.ativo !== undefined) {
    await sql`UPDATE users SET ativo = ${b.ativo} WHERE id = ${userId} AND role = 'aluno'`;
  }

  return json(res, 200, { perfil });
}
