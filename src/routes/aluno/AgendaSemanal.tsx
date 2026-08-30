import { CalendarDays, Clock } from "lucide-react";
import { dataBR, diaSemana } from "@/lib/dominio";
import { useDadosAluno } from "./contexto";
import { Cartao, Vazio } from "../PortalLayout";

/** AAAA-MM-DD de hoje no fuso local (evita o deslocamento do toISOString em UTC). */
function hojeISO(): string {
  const d = new Date();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${d.getFullYear()}-${mm}-${dd}`;
}

export function AgendaSemanal() {
  const { ficha, agenda } = useDadosAluno();
  const hoje = hojeISO();

  return (
    <div className="space-y-6">
      <Cartao titulo="Sua turma">
        {ficha.turma_id ? (
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <div>
              <div className="text-[10px] uppercase tracking-wider text-black/45">Turma</div>
              <div className="font-jp-serif text-lg font-bold text-jp-ink">
                {ficha.turma_nome}
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-black/70">
              <CalendarDays size={15} className="text-jp-red" />
              {ficha.dias_semana}
            </div>
            <div className="flex items-center gap-2 text-sm text-black/70">
              <Clock size={15} className="text-jp-red" />
              {ficha.horario}
            </div>
          </div>
        ) : (
          <Vazio mensagem="Você ainda não foi vinculado a uma turma." />
        )}
      </Cartao>

      <Cartao titulo="Próximas aulas e conteúdos">
        {agenda.length === 0 ? (
          <Vazio
            mensagem={
              ficha.turma_id
                ? "Nenhuma aula programada no momento. Seu professor ainda não publicou a agenda."
                : "A agenda aparece assim que você for vinculado a uma turma."
            }
          />
        ) : (
          <ol className="space-y-3">
            {agenda.map((a) => {
              const eHoje = a.data_aula === hoje;
              return (
                <li
                  key={a.id}
                  className={`flex gap-4 border rounded-sm p-4 transition-colors ${
                    eHoje
                      ? "border-jp-red bg-jp-red/5"
                      : "border-black/10 bg-white hover:border-black/20"
                  }`}
                >
                  <div className="text-center shrink-0 w-14">
                    <div className="font-jp-serif text-2xl font-bold text-jp-ink leading-none">
                      {a.data_aula.slice(8, 10)}
                    </div>
                    <div className="text-[10px] uppercase tracking-wider text-black/45 mt-1">
                      {a.data_aula.slice(5, 7)}/{a.data_aula.slice(2, 4)}
                    </div>
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs font-semibold text-black/60 capitalize">
                        {diaSemana(a.data_aula)}
                      </span>
                      {eHoje && (
                        <span className="text-[10px] font-bold uppercase tracking-wider text-white bg-jp-red rounded-full px-2 py-0.5">
                          hoje
                        </span>
                      )}
                      {a.usando_fallback && (
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-black/50 bg-black/5 border border-black/10 rounded-full px-2 py-0.5">
                          conteúdo padrão
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-jp-ink font-medium mt-1">{a.conteudo}</p>
                    <p className="text-[11px] text-black/40 mt-1">
                      {dataBR(a.data_aula)} · {ficha.horario ?? "horário a confirmar"}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        )}
      </Cartao>
    </div>
  );
}

export default AgendaSemanal;
