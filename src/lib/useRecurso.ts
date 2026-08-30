import { useCallback, useEffect, useState } from "react";
import { api } from "./api";

/**
 * Busca um recurso da API com estados de carga/erro e função de recarga.
 * Centraliza o padrão para que as telas não repitam try/catch/loading.
 */
export function useRecurso<T>(caminho: string | null) {
  const [dados, setDados] = useState<T | null>(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState<string | null>(null);

  const buscar = useCallback(async () => {
    if (caminho === null) {
      setCarregando(false);
      return;
    }
    setCarregando(true);
    setErro(null);
    try {
      setDados(await api.get<T>(caminho));
    } catch (e) {
      setErro(e instanceof Error ? e.message : "Falha ao carregar.");
    } finally {
      setCarregando(false);
    }
  }, [caminho]);

  useEffect(() => {
    void buscar();
  }, [buscar]);

  return { dados, carregando, erro, recarregar: buscar };
}
