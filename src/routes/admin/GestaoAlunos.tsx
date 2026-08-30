import { useMemo, useState } from "react";
import { toast } from "sonner";
import { Search, Plus, Check, X as XIcon } from "lucide-react";
import { api } from "@/lib/api";
import { useRecurso } from "@/lib/useRecurso";
import { FAIXAS, STATUS_CLASSE, STATUS_LABEL, corDaFaixa } from "@/lib/dominio";
import type { Aluno, Turma } from "@/auth/tipos";
import { Cartao, Carregando, ErroBox, Vazio } from "../PortalLayout";

export function GestaoAlunos() {
  const alunosReq = useRecurso<{ alunos: Aluno[] }>("/admin/alunos");
  const turmasReq = useRecurso<{ turmas: Turma[] }>("/admin/turmas");

  const [busca, setBusca] = useState("");
  const [filtroTurma, setFiltroTurma] = useState<string>("todas");
  const [salvando, setSalvando] = useState<number | null>(null);
  const [novaTurma, setNovaTurma] = useState({ nome: "", dias_semana: "", horario: "" });
  const [criandoTurma, setCriandoTurma] = useState(false);

  const turmas = turmasReq.dados?.turmas ?? [];

  const filtrados = useMemo(() => {
    const lista = alunosReq.dados?.alunos ?? [];
    const q = busca.trim().toLowerCase();
    return lista.filter((a) => {
      const casaTurma =
        filtroTurma === "todas" ||
        (filtroTurma === "sem" && a.turma_id === null) ||
        String(a.turma_id) === filtroTurma;
      const casaBusca =
        !q || a.nome.toLowerCase().includes(q) || a.email.toLowerCase().includes(q);
      return casaTurma && casaBusca;
    });
  }, [alunosReq.dados, busca, filtroTurma]);

  /** Envia SOMENTE o campo alterado — a API faz atualizacao parcial. */
  async function alterar(userId: number, mudanca: Partial<Aluno>) {
    setSalvando(userId);
    try {
      await api.patch("/admin/alunos", { user_id: userId, ...mudanca });
      await alunosReq.recarregar();
      toast.success("Alteração salva.");
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Não foi possível salvar.");
    } finally {
      setSalvando(null);
    }
  }

  async function criarTurma() {
    if (!novaTurma.nome.trim() || !novaTurma.dias_semana.trim() || !novaTurma.horario) {
      toast.error("Preencha nome, dias e horário da turma.");
      return;
    }
    setCriandoTurma(true);
    try {
      await api.post("/admin/turmas", novaTurma);
      setNovaTurma({ nome: "", dias_semana: "", horario: "" });
      await turmasReq.recarregar();
      toast.success("Turma criada.");
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Não foi possível criar a turma.");
    } finally {
      setCriandoTurma(false);
    }
  }

  if (alunosReq.carregando || turmasReq.carregando) return <Carregando />;
  if (alunosReq.erro) return <ErroBox mensagem={alunosReq.erro} />;

  return (
    <div className="space-y-6">
      <Cartao titulo="Turmas">
        <div className="grid gap-3 sm:grid-cols-4">
          <input
            value={novaTurma.nome}
            onChange={(e) => setNovaTurma((v) => ({ ...v, nome: e.target.value }))}
            placeholder="Nome (ex: Infantil A)"
            className="px-3 py-2 border border-black/15 rounded-sm text-sm focus:outline-none focus:border-jp-red"
          />
          <input
            value={novaTurma.dias_semana}
            onChange={(e) => setNovaTurma((v) => ({ ...v, dias_semana: e.target.value }))}
            placeholder="Dias (ex: Seg e Qua)"
            className="px-3 py-2 border border-black/15 rounded-sm text-sm focus:outline-none focus:border-jp-red"
          />
          <input
            type="time"
            value={novaTurma.horario}
            onChange={(e) => setNovaTurma((v) => ({ ...v, horario: e.target.value }))}
            className="px-3 py-2 border border-black/15 rounded-sm text-sm focus:outline-none focus:border-jp-red"
          />
          <button
            onClick={criarTurma}
            disabled={criandoTurma}
            type="button"
            className="flex items-center justify-center gap-1.5 bg-jp-ink text-white text-sm font-semibold rounded-sm px-4 py-2 hover:bg-jp-red transition-colors disabled:opacity-60 cursor-pointer"
          >
            <Plus size={15} /> Criar turma
          </button>
        </div>

        {turmas.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {turmas.map((t) => (
              <li
                key={t.id}
                className="text-xs bg-jp-paper border border-black/10 rounded-full px-3 py-1.5"
              >
                <strong className="text-jp-ink">{t.nome}</strong>
                <span className="text-black/50">
                  {" · "}
                  {t.dias_semana} {t.horario} · {t.total_alunos ?? 0} aluno(s)
                </span>
              </li>
            ))}
          </ul>
        )}
      </Cartao>

      <Cartao
        titulo={`Alunos (${filtrados.length})`}
        acao={
          <div className="flex items-center gap-2">
            <select
              value={filtroTurma}
              onChange={(e) => setFiltroTurma(e.target.value)}
              className="text-xs border border-black/15 rounded-sm px-2 py-1.5 bg-white focus:outline-none focus:border-jp-red"
            >
              <option value="todas">Todas as turmas</option>
              {turmas.map((t) => (
                <option key={t.id} value={String(t.id)}>
                  {t.nome}
                </option>
              ))}
              <option value="sem">Sem turma</option>
            </select>
            <div className="relative">
              <Search
                size={13}
                className="absolute left-2.5 top-1/2 -translate-y-1/2 text-black/35"
              />
              <input
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                placeholder="Buscar aluno..."
                className="pl-7 pr-2 py-1.5 text-xs border border-black/15 rounded-sm focus:outline-none focus:border-jp-red w-40"
              />
            </div>
          </div>
        }
      >
        {filtrados.length === 0 ? (
          <Vazio mensagem="Nenhum aluno encontrado. Cadastre na aba Cadastrar Aluno." />
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm min-w-[860px]">
              <thead>
                <tr className="text-left text-[11px] uppercase tracking-wider text-black/45 border-b border-black/10">
                  <th className="pb-2 font-semibold">Aluno</th>
                  <th className="pb-2 font-semibold">Turma</th>
                  <th className="pb-2 font-semibold">Faixa</th>
                  <th className="pb-2 font-semibold text-center">Apto a exame</th>
                  <th className="pb-2 font-semibold">Mensalidade</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/8">
                {filtrados.map((a) => (
                  <tr key={a.id} className={salvando === a.id ? "opacity-50" : ""}>
                    <td className="py-3 pr-3">
                      <div className="flex items-center gap-2">
                        <span
                          className="w-1.5 h-8 rounded-full shrink-0 border border-black/10"
                          style={{ background: corDaFaixa(a.faixa_atual) }}
                          aria-hidden="true"
                        />
                        <div className="min-w-0">
                          <div className="font-semibold text-jp-ink truncate">{a.nome}</div>
                          <div className="text-[11px] text-black/45 truncate">{a.email}</div>
                        </div>
                      </div>
                    </td>

                    <td className="py-3 pr-3">
                      <select
                        value={a.turma_id === null ? "" : String(a.turma_id)}
                        onChange={(e) =>
                          alterar(a.id, {
                            turma_id: e.target.value === "" ? null : Number(e.target.value),
                          })
                        }
                        className="text-xs border border-black/15 rounded-sm px-2 py-1.5 bg-white focus:outline-none focus:border-jp-red w-full"
                      >
                        <option value="">sem turma</option>
                        {turmas.map((t) => (
                          <option key={t.id} value={String(t.id)}>
                            {t.nome}
                          </option>
                        ))}
                      </select>
                    </td>

                    <td className="py-3 pr-3">
                      <select
                        value={a.faixa_atual}
                        onChange={(e) => alterar(a.id, { faixa_atual: e.target.value })}
                        className="text-xs border border-black/15 rounded-sm px-2 py-1.5 bg-white focus:outline-none focus:border-jp-red w-full"
                      >
                        {FAIXAS.map((f) => (
                          <option key={f} value={f}>
                            {f}
                          </option>
                        ))}
                      </select>
                    </td>

                    <td className="py-3 pr-3 text-center">
                      <button
                        type="button"
                        role="switch"
                        aria-checked={a.apto_exame}
                        aria-label={`Aptidão para exame de ${a.nome}`}
                        onClick={() => alterar(a.id, { apto_exame: !a.apto_exame })}
                        className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1.5 rounded-full border transition-colors cursor-pointer ${
                          a.apto_exame
                            ? "bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100"
                            : "bg-black/5 text-black/50 border-black/10 hover:bg-black/10"
                        }`}
                      >
                        {a.apto_exame ? <Check size={13} /> : <XIcon size={13} />}
                        {a.apto_exame ? "Apto" : "Não apto"}
                      </button>
                    </td>

                    <td className="py-3">
                      <select
                        value={a.status_mensalidade}
                        onChange={(e) =>
                          alterar(a.id, {
                            status_mensalidade: e.target.value as Aluno["status_mensalidade"],
                          })
                        }
                        className={`text-xs font-semibold border rounded-sm px-2 py-1.5 focus:outline-none w-full ${
                          STATUS_CLASSE[a.status_mensalidade]
                        }`}
                      >
                        {Object.entries(STATUS_LABEL).map(([v, r]) => (
                          <option key={v} value={v}>
                            {r}
                          </option>
                        ))}
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Cartao>
    </div>
  );
}

export default GestaoAlunos;
