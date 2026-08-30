/**
 * Autenticação e controle de acesso por papel (RBAC).
 *
 * Decisões de segurança:
 *  - A sessão vai num cookie httpOnly, portanto inacessível a JavaScript no
 *    navegador. Guardar o token em localStorage o exporia a qualquer XSS.
 *  - SameSite=Lax protege contra CSRF nas requisições cross-site que importam,
 *    sem quebrar a navegação normal do site.
 *  - A senha nunca trafega nem é armazenada em claro: só o hash bcrypt.
 */
import type { VercelRequest, VercelResponse } from "@vercel/node";
import bcrypt from "bcryptjs";
import { SignJWT, jwtVerify } from "jose";
import { erro } from "./http";

export type Papel = "admin" | "aluno";

export interface Sessao {
  userId: number;
  role: Papel;
  nome: string;
}

const COOKIE = "dojo_sessao";
const DURACAO_DIAS = 7;

function segredo(): Uint8Array {
  const s = process.env.JWT_SECRET;
  if (!s || s.length < 32) {
    throw new Error(
      "JWT_SECRET ausente ou curta demais (mínimo 32 caracteres). " +
        "Gere uma com: node -e \"console.log(require('crypto').randomBytes(48).toString('hex'))\""
    );
  }
  return new TextEncoder().encode(s);
}

export async function hashSenha(senha: string): Promise<string> {
  return bcrypt.hash(senha, 12);
}

export async function conferirSenha(senha: string, hash: string): Promise<boolean> {
  return bcrypt.compare(senha, hash);
}

export async function criarToken(s: Sessao): Promise<string> {
  return new SignJWT({ role: s.role, nome: s.nome })
    .setProtectedHeader({ alg: "HS256" })
    .setSubject(String(s.userId))
    .setIssuedAt()
    .setExpirationTime(`${DURACAO_DIAS}d`)
    .sign(segredo());
}

export function definirCookie(res: VercelResponse, token: string) {
  const partes = [
    `${COOKIE}=${token}`,
    "HttpOnly",
    "Path=/",
    "SameSite=Lax",
    `Max-Age=${DURACAO_DIAS * 24 * 60 * 60}`,
  ];
  // Secure exigiria HTTPS; em localhost o cookie seria descartado.
  if (process.env.NODE_ENV === "production") partes.push("Secure");
  res.setHeader("Set-Cookie", partes.join("; "));
}

export function limparCookie(res: VercelResponse) {
  const partes = [`${COOKIE}=`, "HttpOnly", "Path=/", "SameSite=Lax", "Max-Age=0"];
  if (process.env.NODE_ENV === "production") partes.push("Secure");
  res.setHeader("Set-Cookie", partes.join("; "));
}

/** Devolve a sessão do cookie, ou null se ausente/inválida/expirada. */
export async function lerSessao(req: VercelRequest): Promise<Sessao | null> {
  const token = req.cookies?.[COOKIE];
  if (!token) return null;
  try {
    const { payload } = await jwtVerify(token, segredo());
    const userId = Number(payload.sub);
    const role = payload.role as Papel;
    if (!Number.isFinite(userId) || (role !== "admin" && role !== "aluno")) return null;
    return { userId, role, nome: String(payload.nome ?? "") };
  } catch {
    return null;
  }
}

/**
 * Exige sessão válida. Responde 401 e devolve null quando não houver.
 * Uso: `const s = await exigirSessao(req, res); if (!s) return;`
 */
export async function exigirSessao(
  req: VercelRequest,
  res: VercelResponse
): Promise<Sessao | null> {
  const s = await lerSessao(req);
  if (!s) {
    erro(res, 401, "Não autenticado.");
    return null;
  }
  return s;
}

/** Exige sessão de professor/administrador. Responde 401 ou 403. */
export async function exigirAdmin(
  req: VercelRequest,
  res: VercelResponse
): Promise<Sessao | null> {
  const s = await exigirSessao(req, res);
  if (!s) return null;
  if (s.role !== "admin") {
    erro(res, 403, "Acesso restrito ao professor.");
    return null;
  }
  return s;
}
