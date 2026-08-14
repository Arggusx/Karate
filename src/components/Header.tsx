import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { NAV, type PageId } from "@/Data/data";

function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const getPageIdFromPath = (path: string): PageId => {
    if (path === "/") return "home";
    const cleaned = path.replace("/", "");
    if (cleaned === "fundamentos") return "fundamentos";
    if (cleaned === "historia") return "historia";
    if (cleaned === "beneficios") return "beneficios";
    if (cleaned === "tecnicas") return "tecnicas";
    if (cleaned === "curiosidades") return "curiosidades";
    return "home";
  };

  const current = getPageIdFromPath(location.pathname);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const getPathFromPageId = (id: PageId) => {
    return id === "home" ? "/" : `/${id}`;
  };

  return (
    <>
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#0D0D0D]/90 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3 group">
            <span className="font-jp-serif text-xl text-white bg-jp-red rounded-full px-2.5 py-1.5 group-hover:bg-[#9a0024] transition-colors">道</span>
            <span className="sm:block text-white tracking-widest text-xs uppercase">Shotokan-Ryū</span>
          </Link>

          <ul className="hidden lg:flex items-center gap-1">
            {NAV.map((n) => (
              <li key={n.id}>
                <Link
                  to={getPathFromPageId(n.id)}
                  className={`px-3 py-2 flex items-center gap-2 text-sm transition-colors relative ${
                    current === n.id ? "text-jp-gold" : "text-white/80 hover:text-white"
                  }`}
                >
                  <span>{n.label}</span>
                  {current === n.id && (
                    <span className="absolute -bottom-1 left-3 right-3 h-[2px] bg-jp-red" />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-sm border border-white/15 text-white/90 transition-colors hover:border-[#BC002D] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#BC002D]/70"
            aria-label={open ? "Fechar menu de navegacao" : "Abrir menu de navegacao"}
            aria-controls="mobile-navigation"
            aria-expanded={open}
          >
            {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>

        <div
          id="mobile-navigation"
          className={`lg:hidden overflow-hidden bg-[#0D0D0D] transition-[max-height,opacity] duration-300 ease-out ${
            open ? "max-h-[28rem] border-t border-white/10 opacity-100" : "max-h-0 border-t-0 opacity-0 pointer-events-none"
          }`}
          aria-hidden={!open}
        >
          <ul>
            {NAV.map((n) => (
              <li key={n.id}>
                <Link
                  to={getPathFromPageId(n.id)}
                  onClick={() => setOpen(false)}
                  tabIndex={open ? 0 : -1}
                  className={`w-full px-6 py-4 flex items-center gap-4 text-left border-b border-white/5 ${
                    current === n.id ? "text-jp-gold bg-white/5" : "text-white/80"
                  }`}
                >
                  <span>{n.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;
