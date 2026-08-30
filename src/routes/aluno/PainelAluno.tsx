import { Outlet } from "react-router-dom";
import { useRecurso } from "@/lib/useRecurso";
import { CtxAluno, type DadosAluno } from "./contexto";
import { Carregando, ErroBox } from "../PortalLayout";

/**
 * Carrega a ficha uma unica vez e compartilha com as tres abas.
 * Cada aba buscar por conta propria dispararia a mesma consulta tres vezes e
 * faria a carteirinha piscar a cada troca de aba.
 */
export function PainelAluno() {
  const { dados, carregando, erro } = useRecurso<DadosAluno>("/aluno/painel");

  if (carregando) return <Carregando texto="Carregando sua ficha..." />;
  if (erro) return <ErroBox mensagem={erro} />;
  if (!dados) return null;

  return (
    <CtxAluno.Provider value={dados}>
      <Outlet />
    </CtxAluno.Provider>
  );
}

export default PainelAluno;
