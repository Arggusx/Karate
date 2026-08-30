import { Navigate, useLocation } from "react-router-dom";
import type { ReactNode } from "react";
import { useAuth } from "./useAuth";
import type { Papel } from "./tipos";

/**
 * Guarda de rota por papel.
 *
 * IMPORTANTE: isto é conveniência de navegação, NÃO segurança. Qualquer pessoa
 * pode editar o estado no navegador. A proteção real está em cada endpoint da
 * API (`exigirAdmin` / `exigirSessao`), que é quem de fato barra o acesso aos
 * dados. Aqui só evitamos exibir telas que o usuário não poderia usar.
 */
export function RotaProtegida({
  papel,
  children,
}: {
  papel?: Papel;
  children: ReactNode;
}) {
  const { usuario, carregando } = useAuth();
  const local = useLocation();

  if (carregando) {
    return (
      <div className="min-h-[60vh] grid place-items-center bg-jp-paper">
        <div className="text-center">
          <div className="font-jp-serif text-4xl text-jp-red animate-pulse">道</div>
          <p className="mt-3 text-sm text-black/50">Verificando sessão…</p>
        </div>
      </div>
    );
  }

  // Guarda o destino para voltar a ele depois do login.
  if (!usuario) return <Navigate to="/login" replace state={{ de: local.pathname }} />;

  // Papel errado: manda para o portal correto em vez de dar "acesso negado",
  // que seria um beco sem saída para quem só errou a URL.
  if (papel && usuario.role !== papel) {
    return <Navigate to={usuario.role === "admin" ? "/app/admin" : "/app/aluno"} replace />;
  }

  return <>{children}</>;
}
