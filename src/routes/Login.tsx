import { useState, type FormEvent } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { LogIn, Loader2, AlertCircle, ArrowLeft } from "lucide-react";
import { useAuth } from "@/auth/useAuth";

export function Login() {
  const { usuario, carregando, entrar } = useAuth();
  const navegar = useNavigate();
  const local = useLocation() as { state?: { de?: string } };

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState<string | null>(null);
  const [enviando, setEnviando] = useState(false);

  // Já autenticado: não faz sentido ver o formulário.
  if (!carregando && usuario) {
    return <Navigate to={usuario.role === "admin" ? "/app/admin" : "/app/aluno"} replace />;
  }

  async function aoEnviar(e: FormEvent) {
    e.preventDefault();
    setErro(null);
    setEnviando(true);
    try {
      const u = await entrar(email, senha);
      const destino =
        local.state?.de ?? (u.role === "admin" ? "/app/admin" : "/app/aluno");
      navegar(destino, { replace: true });
    } catch (e) {
      setErro(e instanceof Error ? e.message : "Não foi possível entrar.");
    } finally {
      setEnviando(false);
    }
  }

  return (
    <div className="min-h-screen bg-jp-ink grid lg:grid-cols-2">
      {/* Lado institucional */}
      <div className="relative hidden lg:flex flex-col justify-center px-14 overflow-hidden border-r-4 border-jp-red">
        <div
          className="kanji-watermark"
          style={{ fontSize: 460, right: -40, top: -60, color: "rgba(188,0,45,0.10)" }}
          aria-hidden="true"
        >
          道場
        </div>
        <div className="relative">
          <span className="text-xs font-semibold uppercase tracking-widest text-jp-red">
            Shotokan-Ryū
          </span>
          <h1 className="font-jp-serif text-5xl font-bold text-white mt-3 leading-tight">
            Portal do Dojo
          </h1>
          <p className="text-white/70 mt-4 max-w-md leading-relaxed">
            Acompanhe sua evolução de faixa, a agenda de treinos da sua turma e a
            situação da mensalidade. Professores gerenciam alunos, turmas e conteúdos.
          </p>
          <p className="mt-10 font-jp-serif text-jp-gold text-lg">
            空手に先手なし
            <span className="block text-xs text-white/40 mt-1 font-sans tracking-wide">
              No karatê, não existe primeiro ataque.
            </span>
          </p>
        </div>
      </div>

      {/* Formulário */}
      <div className="flex items-center justify-center p-6 sm:p-10">
        <div className="w-full max-w-sm">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs text-white/50 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={14} /> Voltar ao site
          </Link>

          <h2 className="font-jp-serif text-2xl font-bold text-white">Entrar</h2>
          <p className="text-sm text-white/50 mt-1">
            Use as credenciais fornecidas pelo seu professor.
          </p>

          <form onSubmit={aoEnviar} className="mt-8 space-y-4" noValidate>
            <div>
              <label htmlFor="email" className="block text-xs font-semibold text-white/70 mb-1.5">
                E-mail
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-white/5 border border-white/15 rounded-sm text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-jp-red transition-colors"
                placeholder="voce@exemplo.com"
              />
            </div>

            <div>
              <label htmlFor="senha" className="block text-xs font-semibold text-white/70 mb-1.5">
                Senha
              </label>
              <input
                id="senha"
                type="password"
                autoComplete="current-password"
                required
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-white/5 border border-white/15 rounded-sm text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-jp-red transition-colors"
                placeholder="••••••••"
              />
            </div>

            {erro && (
              <div
                role="alert"
                className="flex items-start gap-2 bg-jp-red/15 border border-jp-red/40 rounded-sm px-3 py-2.5 text-xs text-red-200"
              >
                <AlertCircle size={15} className="shrink-0 mt-0.5" />
                <span>{erro}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={enviando}
              className="w-full flex items-center justify-center gap-2 bg-jp-red text-white font-semibold text-sm py-3 rounded-sm hover:bg-[#9a0024] transition-colors disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
            >
              {enviando ? (
                <>
                  <Loader2 size={16} className="animate-spin" /> Entrando…
                </>
              ) : (
                <>
                  <LogIn size={16} /> Entrar
                </>
              )}
            </button>
          </form>

          <p className="text-[11px] text-white/35 mt-6 leading-relaxed">
            Não há cadastro público: apenas o professor cria contas de aluno. Se
            você não tem acesso, procure a secretaria do dojo.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
