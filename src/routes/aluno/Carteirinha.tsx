import { Award, Clock, User, CalendarDays, ShieldCheck, ShieldAlert } from "lucide-react";
import { corDaFaixa, dataBR } from "@/lib/dominio";
import { useDadosAluno } from "./contexto";
import { Cartao } from "../PortalLayout";

export function Carteirinha() {
  const { ficha } = useDadosAluno();
  const cor = corDaFaixa(ficha.faixa_atual);

  const iniciais = ficha.nome
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join("");

  return (
    <div className="space-y-6">
      {/* Carteirinha */}
      <article className="relative overflow-hidden rounded-sm bg-jp-ink text-white shadow-lg max-w-2xl">
        <div
          className="kanji-watermark"
          style={{ fontSize: 260, right: -30, top: -70, color: "rgba(188,0,45,0.12)" }}
          aria-hidden="true"
        >
          空手
        </div>

        {/* Faixa colorida: leitura imediata da graduacao */}
        <div className="h-2" style={{ background: cor }} aria-hidden="true" />

        <div className="relative p-6 sm:p-7">
          <div className="flex items-start justify-between gap-4">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-jp-red">
              Carteirinha do Karateca
            </span>
            <span className="font-jp-serif text-jp-gold text-lg">道場</span>
          </div>

          <div className="flex items-center gap-5 mt-5">
            {ficha.foto_url ? (
              <img
                src={ficha.foto_url}
                alt={`Foto de ${ficha.nome}`}
                className="w-20 h-20 rounded-full object-cover border-2 shrink-0"
                style={{ borderColor: cor }}
              />
            ) : (
              <div
                className="w-20 h-20 rounded-full grid place-items-center bg-white/10 border-2 shrink-0 font-jp-serif text-2xl text-white/80"
                style={{ borderColor: cor }}
                aria-hidden="true"
              >
                {iniciais || "?"}
              </div>
            )}

            <div className="min-w-0">
              <h1 className="font-jp-serif text-2xl font-bold leading-tight truncate">
                {ficha.nome}
              </h1>
              <p className="text-sm text-white/55 truncate">{ficha.email}</p>
              <p className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold">
                <span
                  className="w-3 h-3 rounded-full border border-white/30"
                  style={{ background: cor }}
                  aria-hidden="true"
                />
                {ficha.faixa_atual}
              </p>
            </div>
          </div>

          <dl className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6 pt-5 border-t border-white/10">
            <Info rotulo="Turma" valor={ficha.turma_nome ?? "Não definida"} />
            <Info
              rotulo="Treinos"
              valor={
                ficha.dias_semana ? `${ficha.dias_semana} · ${ficha.horario}` : "A definir"
              }
            />
            <Info rotulo="Professor" valor={ficha.professor_nome ?? "—"} />
            <Info rotulo="Membro desde" valor={dataBR(ficha.membro_desde)} />
            <Info rotulo="Nascimento" valor={dataBR(ficha.data_nascimento)} />
            <Info rotulo="Matrícula" valor={`#${String(ficha.id).padStart(4, "0")}`} />
          </dl>
        </div>

        {/* Tag de aptidao — a informacao que o aluno mais procura aqui */}
        <div
          className={`flex items-center gap-2.5 px-6 py-3.5 ${
            ficha.apto_exame ? "bg-emerald-600" : "bg-white/5 border-t border-white/10"
          }`}
        >
          {ficha.apto_exame ? (
            <>
              <ShieldCheck size={18} className="shrink-0" />
              <p className="text-sm font-semibold">
                Apto para o exame de faixa
                <span className="block text-[11px] font-normal text-white/80">
                  Seu professor liberou sua participação na próxima graduação.
                </span>
              </p>
            </>
          ) : (
            <>
              <ShieldAlert size={18} className="shrink-0 text-white/40" />
              <p className="text-sm font-semibold text-white/70">
                Ainda não liberado para exame
                <span className="block text-[11px] font-normal text-white/40">
                  A liberação é feita pelo professor conforme frequência e evolução.
                </span>
              </p>
            </>
          )}
        </div>
      </article>

      <div className="grid gap-4 sm:grid-cols-3 max-w-2xl">
        <Atalho icone={Award} rotulo="Graduação atual" valor={ficha.faixa_atual} />
        <Atalho
          icone={Clock}
          rotulo="Horário de treino"
          valor={ficha.horario ? `${ficha.horario}` : "—"}
        />
        <Atalho
          icone={CalendarDays}
          rotulo="Dias"
          valor={ficha.dias_semana ?? "—"}
        />
      </div>

      {!ficha.turma_id && (
        <Cartao>
          <div className="flex items-start gap-3">
            <User size={18} className="text-amber-600 shrink-0 mt-0.5" />
            <p className="text-sm text-black/70">
              Você ainda não está vinculado a uma turma. Procure seu professor para
              definir os dias e horários de treino — a agenda aparecerá aqui em seguida.
            </p>
          </div>
        </Cartao>
      )}
    </div>
  );
}

function Info({ rotulo, valor }: { rotulo: string; valor: string }) {
  return (
    <div className="min-w-0">
      <dt className="text-[10px] uppercase tracking-wider text-white/40">{rotulo}</dt>
      <dd className="text-sm font-medium text-white/90 truncate">{valor}</dd>
    </div>
  );
}

function Atalho({
  icone: Icone,
  rotulo,
  valor,
}: {
  icone: typeof Award;
  rotulo: string;
  valor: string;
}) {
  return (
    <div className="bg-white border border-black/10 rounded-sm p-4 flex items-center gap-3">
      <Icone size={18} className="text-jp-red shrink-0" />
      <div className="min-w-0">
        <div className="text-[10px] uppercase tracking-wider text-black/45">{rotulo}</div>
        <div className="text-sm font-semibold text-jp-ink truncate">{valor}</div>
      </div>
    </div>
  );
}

export default Carteirinha;
