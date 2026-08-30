/**
 * Cliente HTTP do portal.
 *
 * Toda chamada usa `credentials: "include"` porque a sessão vive num cookie
 * httpOnly — o token não é (e não deve ser) acessível ao JavaScript.
 */

export class ApiErro extends Error {
  // Campo declarado no corpo da classe: o tsconfig usa `erasableSyntaxOnly`,
  // que proibe parameter properties (`constructor(public status)`).
  status: number;

  constructor(status: number, mensagem: string) {
    super(mensagem);
    this.name = "ApiErro";
    this.status = status;
  }
}

async function pedir<T>(caminho: string, init?: RequestInit): Promise<T> {
  let resposta: Response;
  try {
    resposta = await fetch(`/api${caminho}`, {
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      ...init,
    });
  } catch {
    throw new ApiErro(0, "Não foi possível falar com o servidor. Verifique sua conexão.");
  }

  // 204 e respostas vazias não têm corpo para desserializar.
  const texto = await resposta.text();
  const dados = texto ? (JSON.parse(texto) as unknown) : null;

  if (!resposta.ok) {
    const msg =
      (dados as { erro?: string } | null)?.erro ?? `Falha na requisição (${resposta.status}).`;
    throw new ApiErro(resposta.status, msg);
  }
  return dados as T;
}

export const api = {
  get: <T>(caminho: string) => pedir<T>(caminho),
  post: <T>(caminho: string, corpo?: unknown) =>
    pedir<T>(caminho, { method: "POST", body: JSON.stringify(corpo ?? {}) }),
  patch: <T>(caminho: string, corpo?: unknown) =>
    pedir<T>(caminho, { method: "PATCH", body: JSON.stringify(corpo ?? {}) }),
  del: <T>(caminho: string) => pedir<T>(caminho, { method: "DELETE" }),
};
