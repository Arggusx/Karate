import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { UserPlus, Loader2, ShieldCheck, RefreshCw } from "lucide-react";
import { api } from "@/lib/api";
import { useRecurso } from "@/lib/useRecurso";
import { FAIXAS } from "@/lib/dominio";
import type { Turma } from "@/auth/tipos";
import { Cartao, Carregando } from "../PortalLayout";

const VAZIO = {
  nome: "",
  email: "",
  senha: "",
  telefone: "",
  data_nascimento: "",
  turma_id: "",
  faixa_atual: FAIXAS[0] as string,
};

/** Senha inicial legível, gerada no navegador com CSPRNG. */
function gerarSenha(): string {
  const alfabeto = "abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  const bytes = new Uint32Array(12);
  crypto.getRandomValues(bytes);
  return Array.from(bytes, (b) => alfabeto[b % alfabeto.length]).join("");
}

export function CadastroAluno() {
  const turmasReq = useRecurso<{ turmas: Turma[] }>("/admin/turmas");
  const [form, setForm] = useState(VAZIO);
  const [enviando, setEnviando] = useState(false);
  const [ultimo, setUltimo] = useState<{ nome: string; email: string; senha: string } | null>(null);

  const turmas = turmasReq.dados?.turmas ?? [];
  const set = (campo: keyof typeof VAZIO, valor: string) =>
    setForm((f) => ({ ...f, [campo]: valor }));

  async function aoEnviar(e: FormEvent) {
    e.preventDefault();
    setEnviando(true);
    try {
      await api.post("/admin/alunos", {
        nome: form.nome,
        email: form.email,
        senha: form.senha,
        telefone: form.telefone || null,
        data_nascimento: form.data_nascimento || null,
        turma_id: form.turma_id ? Number(form.turma_id) : null,
        faixa_atual: form.faixa_atual,
      });
      // Guarda as credenciais para o professor repassar ao aluno — depois desta
      // tela a senha nao existe mais em lugar nenhum (o banco so tem o hash).
      setUltimo({ nome: form.nome, email: form.email, senha: form.senha });
      setForm(VAZIO);
      toast.success("Aluno cadastrado.");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Não foi possível cadastrar.");
    } finally {
      setEnviando(false);
    }
  }

  if (turmasReq.carregando) return <Carregando />;

  return (
    <div className="max-w-2xl space-y-5">
      <div className="flex items-start gap-3 border-l-4 border-jp-red bg-jp-red/5 px-4 py-3 rounded-sm">
        <ShieldCheck size={18} className="text-jp-red shrink-0 mt-0.5" />
        <p className="text-xs text-black/75 leading-relaxed">
          Não existe cadastro público neste sistema: contas de aluno só nascem aqui.
          A senha definida é inicial — oriente o aluno a trocá-la no primeiro acesso.
        </p>
      </div>

      {ultimo && (
        <div className="border border-emerald-200 bg-emerald-50 rounded-sm p-4">
          <p className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
            Credenciais de {ultimo.nome}
          </p>
          <p className="text-[11px] text-emerald-700 mt-1 mb-2">
            Anote agora e entregue ao aluno. Esta senha não poderá ser consultada
            depois — o banco guarda apenas o hash.
          </p>
          <dl className="text-sm font-mono bg-white border border-emerald-200 rounded-sm p-3 space-y-1">
            <div className="flex gap-2">
              <dt className="text-black/45">e-mail:</dt>
              <dd className="text-jp-ink break-all">{ultimo.email}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="text-black/45">senha:</dt>
              <dd className="text-jp-ink">{ultimo.senha}</dd>
            </div>
          </dl>
          <button
            type="button"
            onClick={() => setUltimo(null)}
            className="mt-2 text-[11px] text-emerald-800 underline cursor-pointer"
          >
            Já anotei, ocultar
          </button>
        </div>
      )}

      <Cartao titulo="Novo aluno">
        <form onSubmit={aoEnviar} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <Campo rotulo="Nome completo" obrigatorio>
              <input
                required
                value={form.nome}
                onChange={(e) => set("nome", e.target.value)}
                className={ENTRADA}
                placeholder="Ana Souza"
              />
            </Campo>

            <Campo rotulo="E-mail" obrigatorio>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => set("email", e.target.value)}
                className={ENTRADA}
                placeholder="ana@exemplo.com"
              />
            </Campo>

            <Campo rotulo="Senha inicial" obrigatorio dica="mínimo 8 caracteres">
              <div className="flex gap-2">
                <input
                  required
                  minLength={8}
                  value={form.senha}
                  onChange={(e) => set("senha", e.target.value)}
                  className={ENTRADA}
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => set("senha", gerarSenha())}
                  title="Gerar senha"
                  className="shrink-0 px-2.5 border border-black/15 rounded-sm text-black/60 hover:text-jp-red hover:border-jp-red transition-colors cursor-pointer"
                >
                  <RefreshCw size={15} />
                </button>
              </div>
            </Campo>

            <Campo rotulo="Telefone">
              <input
                value={form.telefone}
                onChange={(e) => set("telefone", e.target.value)}
                className={ENTRADA}
                placeholder="(11) 90000-0000"
              />
            </Campo>

            <Campo rotulo="Data de nascimento">
              <input
                type="date"
                value={form.data_nascimento}
                onChange={(e) => set("data_nascimento", e.target.value)}
                className={ENTRADA}
              />
            </Campo>

            <Campo rotulo="Turma">
              <select
                value={form.turma_id}
                onChange={(e) => set("turma_id", e.target.value)}
                className={ENTRADA}
              >
                <option value="">Definir depois</option>
                {turmas.map((t) => (
                  <option key={t.id} value={String(t.id)}>
                    {t.nome} — {t.dias_semana} {t.horario}
                  </option>
                ))}
              </select>
            </Campo>

            <Campo rotulo="Faixa inicial">
              <select
                value={form.faixa_atual}
                onChange={(e) => set("faixa_atual", e.target.value)}
                className={ENTRADA}
              >
                {FAIXAS.map((f) => (
                  <option key={f} value={f}>
                    {f}
                  </option>
                ))}
              </select>
            </Campo>
          </div>

          {turmas.length === 0 && (
            <p className="text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-sm px-3 py-2">
              Nenhuma turma cadastrada. Você pode criar o aluno sem turma e
              vinculá-lo depois, ou criar a turma na aba Alunos &amp; Turmas.
            </p>
          )}

          <button
            type="submit"
            disabled={enviando}
            className="flex items-center gap-2 bg-jp-red text-white font-semibold text-sm px-5 py-2.5 rounded-sm hover:bg-[#9a0024] transition-colors disabled:opacity-60 cursor-pointer"
          >
            {enviando ? <Loader2 size={16} className="animate-spin" /> : <UserPlus size={16} />}
            {enviando ? "Cadastrando..." : "Cadastrar aluno"}
          </button>
        </form>
      </Cartao>
    </div>
  );
}

const ENTRADA =
  "w-full px-3 py-2 border border-black/15 rounded-sm text-sm bg-white focus:outline-none focus:border-jp-red transition-colors";

function Campo({
  rotulo,
  obrigatorio,
  dica,
  children,
}: {
  rotulo: string;
  obrigatorio?: boolean;
  dica?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block text-xs font-semibold text-black/70 mb-1.5">
        {rotulo}
        {obrigatorio && <span className="text-jp-red"> *</span>}
        {dica && <span className="font-normal text-black/40"> — {dica}</span>}
      </span>
      {children}
    </label>
  );
}

export default CadastroAluno;
