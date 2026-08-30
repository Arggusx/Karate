import type { VercelRequest, VercelResponse } from "@vercel/node";
import { sql } from "../_lib/db";
import { conferirSenha, criarToken, definirCookie } from "../_lib/auth";
import { corpo, erro, json, metodoPermitido, normalizarEmail } from "../_lib/http";

/** Hash descartável para igualar o tempo de resposta quando o e-mail não existe. */
const HASH_ISCA = "$2a$12$C6UzMDM.H6dfI/f/IKcEeO1234567890abcdefghijklmnopqrstu";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (!metodoPermitido(req, res, ["POST"])) return;

  const { email, senha } = corpo<{ email?: string; senha?: string }>(req);
  const mail = normalizarEmail(email);

  if (!mail || !senha) return erro(res, 400, "Informe e-mail e senha.");

  const linhas = (await sql`
    SELECT id, nome, email, senha_hash, role, ativo
    FROM users
    WHERE lower(email) = ${mail}
    LIMIT 1
  `) as Array<{
    id: number;
    nome: string;
    email: string;
    senha_hash: string;
    role: "admin" | "aluno";
    ativo: boolean;
  }>;

  const u = linhas[0];

  // Sempre executa um bcrypt, mesmo sem usuário: sem isso o tempo de resposta
  // diferencia "e-mail inexistente" de "senha errada" e permite enumerar contas.
  const senhaOk = await conferirSenha(String(senha), u?.senha_hash ?? HASH_ISCA);

  // Mensagem única e genérica, pelo mesmo motivo.
  if (!u || !senhaOk) return erro(res, 401, "E-mail ou senha inválidos.");
  if (!u.ativo) return erro(res, 403, "Cadastro inativo. Procure o professor.");

  const token = await criarToken({ userId: u.id, role: u.role, nome: u.nome });
  definirCookie(res, token);

  return json(res, 200, {
    usuario: { id: u.id, nome: u.nome, email: u.email, role: u.role },
  });
}
