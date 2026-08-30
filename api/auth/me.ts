import type { VercelRequest, VercelResponse } from "@vercel/node";
import { sql } from "../_lib/db";
import { lerSessao } from "../_lib/auth";
import { json, metodoPermitido } from "../_lib/http";

/**
 * Sessão atual. Devolve 200 com `usuario: null` (e não 401) quando não há
 * sessão — assim o front distingue "deslogado", que é um estado normal, de
 * "erro de rede", sem poluir o console com 401 a cada carregamento.
 */
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (!metodoPermitido(req, res, ["GET"])) return;

  const s = await lerSessao(req);
  if (!s) return json(res, 200, { usuario: null });

  // Relê do banco: papel ou situação podem ter mudado desde a emissão do token.
  const linhas = (await sql`
    SELECT id, nome, email, role, ativo, foto_url
    FROM users WHERE id = ${s.userId} LIMIT 1
  `) as Array<{
    id: number; nome: string; email: string;
    role: "admin" | "aluno"; ativo: boolean; foto_url: string | null;
  }>;

  const u = linhas[0];
  if (!u || !u.ativo) return json(res, 200, { usuario: null });

  return json(res, 200, {
    usuario: { id: u.id, nome: u.nome, email: u.email, role: u.role, foto_url: u.foto_url },
  });
}
