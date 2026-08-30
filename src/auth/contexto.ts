import { createContext } from "react";
import type { Usuario } from "./tipos";

export interface AuthCtx {
  usuario: Usuario | null;
  carregando: boolean;
  entrar: (email: string, senha: string) => Promise<Usuario>;
  sair: () => Promise<void>;
  recarregar: () => Promise<void>;
}

/**
 * Contexto e hook moram fora do arquivo do Provider porque a regra
 * `react-refresh/only-export-components` exige que um módulo de componente
 * exporte apenas componentes — caso contrário o Fast Refresh deixa de funcionar
 * durante o desenvolvimento.
 */
export const Ctx = createContext<AuthCtx | null>(null);
