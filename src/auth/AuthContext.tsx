import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react";
import { api } from "@/lib/api";
import { Ctx } from "./contexto";
import type { Usuario } from "./tipos";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  // Começa carregando: até sabermos se há sessão, as rotas protegidas não podem
  // decidir nada. Sem isso elas redirecionariam para /login por um instante,
  // expulsando quem já estava logado a cada F5.
  const [carregando, setCarregando] = useState(true);

  const recarregar = useCallback(async () => {
    try {
      const { usuario } = await api.get<{ usuario: Usuario | null }>("/auth/me");
      setUsuario(usuario);
    } catch {
      setUsuario(null);
    } finally {
      setCarregando(false);
    }
  }, []);

  useEffect(() => {
    void recarregar();
  }, [recarregar]);

  const entrar = useCallback(async (email: string, senha: string) => {
    const { usuario } = await api.post<{ usuario: Usuario }>("/auth/login", { email, senha });
    setUsuario(usuario);
    return usuario;
  }, []);

  const sair = useCallback(async () => {
    try {
      await api.post("/auth/logout");
    } finally {
      setUsuario(null);
    }
  }, []);

  const valor = useMemo(
    () => ({ usuario, carregando, entrar, sair, recarregar }),
    [usuario, carregando, entrar, sair, recarregar]
  );

  return <Ctx.Provider value={valor}>{children}</Ctx.Provider>;
}
