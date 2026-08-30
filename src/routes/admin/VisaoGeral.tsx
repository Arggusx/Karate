import { Users, GraduationCap, Wallet, Award, AlertTriangle } from "lucide-react";
import { useRecurso } from "@/lib/useRecurso";
import { Cartao, Carregando, ErroBox, Vazio } from "../PortalLayout";

interface Overview {
  alunosAtivos: number;
  alunosInativos: number;
  aptosExame: number;
  totalTurmas: number;
  mensalidades: { em_dia: number; pendente: number; atrasado: number };
  turmas: { id: number; nome: string; dias_semana: string; horario: string; alunos: number }[];
}

function Metrica({
  icone: Icone, rotulo, valor, cor, detalhe,
}: {
  icone: typeof Users; rotulo: string; valor: number | string; cor: string; detalhe?: string;
}) {
  return (
    <div className="bg-white border border-black/10 rounded-sm p-5 shadow-2xs flex items-start gap-4">
      <div className={`w-11 h-11 rounded-full grid place-items-center shrink-0 ${cor}`}>
        <Icone size={20} />
      </div>
      <div className="min-w-0">
        <div className="font-jp-serif text-3xl font-bold text-jp-ink leading-none">{valor}</div>
        <div className="text-xs font-semibold text-black/70 mt-1.5">{rotulo}</div>
        {detalhe && <div className="text-[11px] text-black/45 mt-0.5">{detalhe}</div>}
      </div>
    </div>
  );
}

export function VisaoGeral() {
  const { dados, carregando, erro } = useRecurso<Overview>("/admin/overview");

  if (carregando) return <Carregando />;
  if (erro) return <ErroBox mensagem={erro} />;
  if (!dados) return null;

  const inadimplentes = dados.mensalidades.pendente + dados.mensalidades.atrasado;

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Metrica
          icone={Users} rotulo="Alunos ativos" valor={dados.alunosAtivos}
          cor="bg-jp-red/10 text-jp-red"
          detalhe={dados.alunosInativos ? `${dados.alunosInativos} inativo(s)` : undefined}
        />
        <Metrica
          icone={GraduationCap} rotulo="Turmas" valor={dados.totalTurmas}
          cor="bg-sky-500/10 text-sky-600"
        />
        <Metrica
          icone={Award} rotulo="Aptos a exame" valor={dados.aptosExame}
          cor="bg-jp-gold/15 text-[#8A6D14]"
        />
        <Metrica
          icone={Wallet} rotulo="Mensalidades em dia" valor={dados.mensalidades.em_dia}
          cor="bg-emerald-500/10 text-emerald-600"
          detalhe={inadimplentes ? `${inadimplentes} em aberto` : "nenhuma pendência"}
        />
      </div>

      {inadimplentes > 0 && (
        <div className="flex items-start gap-3 border-l-4 border-amber-500 bg-amber-50 px-4 py-3 rounded-sm">
          <AlertTriangle size={18} className="text-amber-600 shrink-0 mt-0.5" />
          <p className="text-sm text-amber-900">
            <strong>{inadimplentes}</strong> aluno(s) com mensalidade em aberto —{" "}
            {dados.mensalidades.pendente} pendente(s) e {dados.mensalidades.atrasado} atrasada(s).
          </p>
        </div>
      )}

      <Cartao titulo="Alunos por turma">
        {dados.turmas.length === 0 ? (
          <Vazio mensagem="Nenhuma turma cadastrada ainda. Crie a primeira na aba Alunos & Turmas." />
        ) : (
          <ul className="divide-y divide-black/8">
            {dados.turmas.map((t) => (
              <li key={t.id} className="flex items-center justify-between gap-4 py-3">
                <div className="min-w-0">
                  <div className="font-semibold text-sm text-jp-ink truncate">{t.nome}</div>
                  <div className="text-xs text-black/50">
                    {t.dias_semana} · {t.horario}
                  </div>
                </div>
                <span className="shrink-0 text-xs font-bold text-jp-red bg-jp-red/10 px-2.5 py-1 rounded-full">
                  {t.alunos} aluno{t.alunos === 1 ? "" : "s"}
                </span>
              </li>
            ))}
          </ul>
        )}
      </Cartao>
    </div>
  );
}

export default VisaoGeral;
