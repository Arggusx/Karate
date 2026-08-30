import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { LogOut, type LucideIcon } from "lucide-react";
import { useAuth } from "@/auth/useAuth";

export interface AbaPortal {
  para: string;
  rotulo: string;
  icone: LucideIcon;
  fim?: boolean;
}

/**
 * Casca comum aos dois portais: cabeçalho, abas e sair.
 * O conteúdo de cada aba entra pelo <Outlet /> das rotas aninhadas.
 */
export function PortalLayout({ titulo, abas }: { titulo: string; abas: AbaPortal[] }) {
  const { usuario, sair } = useAuth();
  const navegar = useNavigate();

  async function aoSair() {
    await sair();
    navegar("/login", { replace: true });
  }

  const iniciais = (usuario?.nome ?? "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join("");

  return (
    <div className="min-h-screen bg-jp-paper flex flex-col">
      <header className="bg-jp-ink border-b-2 border-jp-red">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3 min-w-0">
              <Link
                to="/"
                className="font-jp-serif text-lg text-white bg-jp-red rounded-full px-2.5 py-1 hover:bg-[#9a0024] transition-colors shrink-0"
                title="Ir para o site"
              >
                道
              </Link>
              <div className="min-w-0">
                <div className="text-white font-jp-serif text-base leading-tight truncate">
                  {titulo}
                </div>
                <div className="text-[11px] text-white/45 truncate">{usuario?.email}</div>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <span className="hidden sm:flex h-9 w-9 rounded-full bg-jp-gold/20 border border-jp-gold/40 items-center justify-center text-jp-gold text-xs font-bold">
                {iniciais || "?"}
              </span>
              <button
                onClick={aoSair}
                type="button"
                className="flex items-center gap-1.5 text-xs font-semibold text-white/70 hover:text-white border border-white/15 hover:border-white/40 rounded-sm px-3 py-2 transition-colors cursor-pointer"
              >
                <LogOut size={14} /> Sair
              </button>
            </div>
          </div>

          <nav className="flex items-center gap-1 overflow-x-auto scrollbar-none" aria-label={titulo}>
            {abas.map((a) => {
              const Icone = a.icone;
              return (
                <NavLink
                  key={a.para}
                  to={a.para}
                  end={a.fim}
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-4 py-3 text-xs sm:text-sm font-semibold border-b-2 whitespace-nowrap transition-colors ${
                      isActive
                        ? "border-jp-red text-white"
                        : "border-transparent text-white/55 hover:text-white/90"
                    }`
                  }
                >
                  <Icone size={15} />
                  {a.rotulo}
                </NavLink>
              );
            })}
          </nav>
        </div>
      </header>

      <main className="flex-1 max-w-7xl w-full mx-auto px-5 lg:px-8 py-8">
        <Outlet />
      </main>
    </div>
  );
}

/* ─── Peças reutilizadas pelas telas dos portais ─────────────────────────── */

export function Cartao({
  titulo,
  children,
  acao,
}: {
  titulo?: string;
  children: React.ReactNode;
  acao?: React.ReactNode;
}) {
  return (
    <section className="bg-white border border-black/10 rounded-sm shadow-2xs">
      {(titulo || acao) && (
        <div className="flex items-center justify-between gap-3 border-b border-black/8 px-5 py-3.5">
          {titulo && (
            <h2 className="font-jp-serif text-base font-bold text-jp-ink">{titulo}</h2>
          )}
          {acao}
        </div>
      )}
      <div className="p-5">{children}</div>
    </section>
  );
}

export function Vazio({ mensagem }: { mensagem: string }) {
  return (
    <div className="text-center py-10 border border-dashed border-black/15 rounded-sm bg-jp-paper/50">
      <div className="font-jp-serif text-3xl text-black/25 mb-2">無</div>
      <p className="text-sm text-black/55">{mensagem}</p>
    </div>
  );
}

export function Carregando({ texto = "Carregando…" }: { texto?: string }) {
  return (
    <div className="py-10 text-center">
      <div className="font-jp-serif text-3xl text-jp-red animate-pulse">道</div>
      <p className="mt-2 text-sm text-black/50">{texto}</p>
    </div>
  );
}

export function ErroBox({ mensagem }: { mensagem: string }) {
  return (
    <div role="alert" className="border-l-4 border-jp-red bg-jp-red/5 px-4 py-3 rounded-sm">
      <p className="text-sm text-jp-ink font-medium">{mensagem}</p>
    </div>
  );
}
