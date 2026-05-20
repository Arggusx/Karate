import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { NAV, type PageId } from "./data";

function Header() {
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const location = useLocation();

  // Determina qual é o PageId com base na rota atual do react-router-dom
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

  // Calcula o progresso do scroll de forma autônoma
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const scrolled = (window.scrollY / totalHeight) * 100;
        setProgress(scrolled);
      } else {
        setProgress(0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getPathFromPageId = (id: PageId) => {
    return id === "home" ? "/" : `/${id}`;
  };

  return (
    <>
      <div className="scroll-progress" style={{ width: `${progress}%` }} />
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#0D0D0D]/90 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3 group">
            <span className="font-jp-serif text-2xl text-jp-red group-hover:text-jp-gold transition-colors">空手</span>
            <span className="hidden sm:block text-white tracking-widest text-xs uppercase">Shotokan-Ryū</span>
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
                  <span className="font-jp-serif text-base">{n.kanji}</span>
                  <span>{n.label}</span>
                  {current === n.id && (
                    <span className="absolute -bottom-1 left-3 right-3 h-[2px] bg-jp-red" />
                  )}
                </Link>
              </li>
            ))}
          </ul>

        </div>

        {open && (
          <ul className="lg:hidden bg-[#0D0D0D] border-t border-white/10">
            {NAV.map((n) => (
              <li key={n.id}>
                <Link
                  to={getPathFromPageId(n.id)}
                  onClick={() => setOpen(false)}
                  className={`w-full px-6 py-4 flex items-center gap-4 text-left border-b border-white/5 ${
                    current === n.id ? "text-jp-gold bg-white/5" : "text-white/80"
                  }`}
                >
                  <span className="font-jp-serif text-xl w-8">{n.kanji}</span>
                  <span>{n.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </>
  );
}

export default Header;