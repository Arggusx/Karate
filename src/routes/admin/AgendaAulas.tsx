import { useEffect, useMemo, useState, type FormEvent } from "react";
import { toast } from "sonner";
import { CalendarPlus, Loader2, Trash2, Info } from "lucide-react";
import { api } from "@/lib/api";
import { useRecurso } from "@/lib/useRecurso";
import { dataBR, diaSemana } from "@/lib/dominio";
import type { Aula, Turma } from "@/auth/tipos";
import { Cartao, Carregando, ErroBox, Vazio } from "../PortalLayout";

export function AgendaAulas() {
  const turmasReq = useRecurso<{ turmas: Turma[] }>("/admin/turmas");
  const [turmaId, setTurmaId] = useState<string>("");
  const [data, setData] = useState("");
  const [conteudo, setConteudo] = useState("");
  const [enviando, setEnviando] = useState(false);

  // Sem o useMemo, `?? []` cria um array novo a cada render; como ele entra
  // nas dependencias do efeito abaixo, o efeito dispararia continuamente.
  const turmas = useMemo(() => turmasReq.dados?.turmas ?? [], [turmasReq.dados]);
  const aulasReq = useRecurso<{ aulas: Aula[] }>(
    turmaId ? `/admin/aulas?turma_id=${turmaId}` : "/admin/aulas"
  );

  // Assim que as turmas chegam, seleciona a primeira: abrir a tela num estado
  // sem turma escolhida obrigaria um clique extra antes de qualquer coisa util.
  useEffect(() => {
    if (!turmaId && turmas.length) setTurmaId(String(turmas[0].id));
  }, [turmas, turmaId]);

  async function agendar(e: FormEvent) {
    e.preventDefault();
    if (!turmaId) return toast.error("Selecione uma turma.");
    if (!data) return toast.error("Escolha a data da aula.");

    setEnviando(true);
    try {
      await api.post("/admin/aulas", {
        turma_id: Number(turmaId),
        data_aula: data,
        conteudo_programado: conteudo,
      });
      setConteudo("");
      setData("");
      await aulasReq.recarregar();
      toast.success(
        conteudo.trim() ? "Aula agendada." : "Aula agendada com o conteúdo padrão."
      );
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Não foi possível agendar.");
    } finally {
      setEnviando(false);
    }
  }

  async function remover(id: number) {
    try {
      await api.del(`/admin/aulas?id=${id}`);
      await aulasReq.recarregar();
      toast.success("Aula removida.");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Não foi possível remover.");
    }
  }

  if (turmasReq.carregando) return <Carregando />;
  if (turmas.length === 0) {
    return <Vazio mensagem="Crie uma turma antes de montar a agenda de aulas." />;
  }

  return (
    <div className="space-y-6">
      <Cartao titulo="Agendar aula">
        <form onSubmit={agendar} className="grid gap-3 sm:grid-cols-[1fr_auto_2fr_auto] sm:items-end">
          <label className="block">
            <span className="block text-xs font-semibold text-black/70 mb-1.5">Turma</span>
            <select
              value={turmaId}
              onChange={(e) => setTurmaId(e.target.value)}
              className={ENTRADA}
            >
              {turmas.map((t) => (
                <option key={t.id} value={String(t.id)}>
                  {t.nome}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="block text-xs font-semibold text-black/70 mb-1.5">Data</span>
            <input
              type="date"
              value={data}
              onChange={(e) => setData(e.target.value)}
              className={ENTRADA}
            />
          </label>

          <label className="block">
            <span className="block text-xs font-semibold text-black/70 mb-1.5">
              Conteúdo programado
              <span className="font-normal text-black/40"> — opcional</span>
            </span>
            <input
              value={conteudo}
              onChange={(e) => setConteudo(e.target.value)}
              placeholder="Ex: Heian Nidan + Kumite ippon"
              className={ENTRADA}
            />
          </label>

          <button
            type="submit"
            disabled={enviando}
            className="flex items-center justify-center gap-1.5 bg-jp-ink text-white text-sm font-semibold rounded-sm px-4 py-2 hover:bg-jp-red transition-colors disabled:opacity-60 cursor-pointer"
          >
            {enviando ? <Loader2 size={15} className="animate-spin" /> : <CalendarPlus size={15} />}
            Agendar
          </button>
        </form>

        <div className="flex items-start gap-2 mt-4 text-[11px] text-black/55 bg-jp-paper border border-black/8 rounded-sm px-3 py-2">
          <Info size={13} className="shrink-0 mt-0.5 text-jp-red" />
          <p>
            Deixar o conteúdo em branco aplica automaticamente{" "}
            <strong className="text-jp-ink">Kihon Padronizado - Fundamentos Básicos</strong>.
            Reagendar a mesma data para a mesma turma atualiza a aula existente.
          </p>
        </div>
      </Cartao>

      <Cartao titulo="Aulas programadas">
        {aulasReq.carregando ? (
          <Carregando />
        ) : aulasReq.erro ? (
          <ErroBox mensagem={aulasReq.erro} />
        ) : !aulasReq.dados?.aulas.length ? (
          <Vazio mensagem="Nenhuma aula agendada para esta turma." />
        ) : (
          <ul className="divide-y divide-black/8">
            {aulasReq.dados.aulas.map((a) => (
              <li key={a.id} className="flex items-start justify-between gap-4 py-3">
                <div className="min-w-0">
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <span className="font-semibold text-sm text-jp-ink">
                      {dataBR(a.data_aula)}
                    </span>
                    <span className="text-[11px] text-black/45 capitalize">
                      {diaSemana(a.data_aula)}
                    </span>
                    {a.usando_fallback && (
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-amber-700 bg-amber-50 border border-amber-200 rounded-full px-2 py-0.5">
                        conteúdo padrão
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-black/70 mt-0.5">{a.conteudo_exibido}</p>
                </div>

                <button
                  type="button"
                  onClick={() => remover(a.id)}
                  aria-label={`Remover aula de ${dataBR(a.data_aula)}`}
                  className="shrink-0 text-black/30 hover:text-jp-red transition-colors cursor-pointer p-1"
                >
                  <Trash2 size={15} />
                </button>
              </li>
            ))}
          </ul>
        )}
      </Cartao>
    </div>
  );
}

const ENTRADA =
  "w-full px-3 py-2 border border-black/15 rounded-sm text-sm bg-white focus:outline-none focus:border-jp-red transition-colors";

export default AgendaAulas;
