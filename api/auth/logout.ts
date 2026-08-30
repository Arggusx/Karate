import type { VercelRequest, VercelResponse } from "@vercel/node";
import { limparCookie } from "../_lib/auth";
import { json, metodoPermitido } from "../_lib/http";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (!metodoPermitido(req, res, ["POST"])) return;
  limparCookie(res);
  return json(res, 200, { ok: true });
}
