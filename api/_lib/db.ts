/**
 * Conexão com o Neon (Postgres).
 *
 * SEGURANÇA: `DATABASE_URL` é lida sem o prefixo VITE_ de propósito. O Vite só
 * expõe ao navegador variáveis prefixadas com VITE_ — usar esse prefixo aqui
 * embutiria a credencial do banco no bundle do cliente, dando acesso total ao
 * banco a qualquer visitante do site. Este módulo só roda no servidor.
 */
import { neon } from "@neondatabase/serverless";

const url = process.env.DATABASE_URL;

if (!url) {
  throw new Error(
    "DATABASE_URL não configurada. Defina-a nas variáveis de ambiente da Vercel " +
      "(ou em .env.local para desenvolvimento com `vercel dev`)."
  );
}

/**
 * Cliente SQL. Usar SEMPRE como template tag — `sql\`... ${valor}\`` —, nunca
 * concatenando strings: o template gera consulta parametrizada e é o que nos
 * protege de SQL injection.
 */
export const sql = neon(url);
