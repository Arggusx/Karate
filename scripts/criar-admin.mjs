/**
 * Cria o primeiro professor (admin) do sistema.
 *
 * Existe porque o cadastro é restrito a admins — sem este passo inicial não
 * haveria como criar o primeiro. A senha é digitada por você e nunca é gravada
 * em arquivo nem exibida; só o hash bcrypt vai para o banco.
 *
 * Uso:
 *   node scripts/criar-admin.mjs
 *
 * Requer DATABASE_URL no ambiente (ou em .env.local).
 */
import { createInterface } from "node:readline/promises";
import { stdin, stdout } from "node:process";
import { readFileSync, existsSync } from "node:fs";
import { neon } from "@neondatabase/serverless";
import bcrypt from "bcryptjs";

// Carrega .env.local sem depender de dotenv.
if (!process.env.DATABASE_URL && existsSync(".env.local")) {
  for (const linha of readFileSync(".env.local", "utf8").split("\n")) {
    const m = linha.match(/^\s*([A-Z_]+)\s*=\s*(.*)\s*$/);
    if (m) process.env[m[1]] ??= m[2].replace(/^["']|["']$/g, "");
  }
}

if (!process.env.DATABASE_URL) {
  console.error("DATABASE_URL não definida. Configure .env.local antes de rodar.");
  process.exit(1);
}

const sql = neon(process.env.DATABASE_URL);
const rl = createInterface({ input: stdin, output: stdout });

const nome = (await rl.question("Nome do professor: ")).trim();
const email = (await rl.question("E-mail: ")).trim().toLowerCase();
const senha = await rl.question("Senha (mín. 8 caracteres): ");
rl.close();

if (!nome || !email || senha.length < 8) {
  console.error("\nDados inválidos: nome e e-mail obrigatórios, senha com 8+ caracteres.");
  process.exit(1);
}

const [existe] = await sql`SELECT 1 FROM users WHERE lower(email) = ${email} LIMIT 1`;
if (existe) {
  console.error("\nJá existe um usuário com este e-mail.");
  process.exit(1);
}

const hash = await bcrypt.hash(senha, 12);
const [u] = await sql`
  INSERT INTO users (nome, email, senha_hash, role)
  VALUES (${nome}, ${email}, ${hash}, 'admin')
  RETURNING id, nome, email, role
`;

console.log(`\nProfessor criado: ${u.nome} <${u.email}> (id ${u.id}, papel ${u.role})`);
console.log("Acesse /login para entrar.");
