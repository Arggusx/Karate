/**
 * Utilitários de requisição/resposta compartilhados pelas funções serverless.
 */
import type { VercelRequest, VercelResponse } from "@vercel/node";

export function json(res: VercelResponse, status: number, body: unknown) {
  return res.status(status).json(body);
}

export function erro(res: VercelResponse, status: number, mensagem: string) {
  return res.status(status).json({ erro: mensagem });
}

/** Restringe o handler aos métodos informados. */
export function metodoPermitido(
  req: VercelRequest,
  res: VercelResponse,
  metodos: string[]
): boolean {
  if (!metodos.includes(req.method ?? "")) {
    res.setHeader("Allow", metodos.join(", "));
    erro(res, 405, `Método ${req.method} não permitido.`);
    return false;
  }
  return true;
}

/** Lê o corpo como objeto, tolerando string JSON. */
export function corpo<T = Record<string, unknown>>(req: VercelRequest): T {
  const b = req.body;
  if (typeof b === "string") {
    try {
      return JSON.parse(b) as T;
    } catch {
      return {} as T;
    }
  }
  return (b ?? {}) as T;
}

/** Normaliza e-mail para comparação (casa com o índice unique em lower(email)). */
export function normalizarEmail(email: unknown): string {
  return String(email ?? "").trim().toLowerCase();
}
