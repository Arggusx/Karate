import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV, type PageId } from "./data";

export function Navbar({ current, onNavigate, progress }: { current: PageId; onNavigate: (id: PageId) => void; progress: number }) {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<"pt" | "en">("pt");

  const go = (id: PageId) => {
    onNavigate(id);
    setOpen(false);
  };

  return (
    <>
      <div className="scroll-progress" style={{ width: `${progress}%` }} />
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#0D0D0D]/90 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 flex items-center justify-between h-16">
          <button onClick={() => go("home")} className="flex items-center gap-3 group">
            <span className="font-jp-serif text-2xl text-jp-red group-hover:text-jp-gold transition-colors">空手</span>
            <span className="hidden sm:block text-white tracking-widest text-xs uppercase">Shotokan-Ryū</span>
          </button>

          <ul className="hidden lg:flex items-center gap-1">
            {NAV.map((n) => (
              <li key={n.id}>
                <button
                  onClick={() => go(n.id)}
                  className={`px-3 py-2 flex items-center gap-2 text-sm transition-colors relative ${
                    current === n.id ? "text-jp-gold" : "text-white/80 hover:text-white"
                  }`}
                >
                  <span className="font-jp-serif text-base">{n.kanji}</span>
                  <span>{n.label}</span>
                  {current === n.id && (
                    <span className="absolute -bottom-1 left-3 right-3 h-[2px] bg-jp-red" />
                  )}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-1 text-xs text-white/70">
              <button
                onClick={() => setLang("pt")}
                className={`px-1.5 ${lang === "pt" ? "text-jp-gold" : "hover:text-white"}`}
                aria-label="Português"
              >🇧🇷</button>
              <span className="opacity-30">|</span>
              <button
                onClick={() => setLang("en")}
                className={`px-1.5 ${lang === "en" ? "text-jp-gold" : "hover:text-white"}`}
                aria-label="English"
              >🇯🇵</button>
            </div>
            <button
              className="lg:hidden text-white p-2"
              onClick={() => setOpen(!open)}
              aria-label="Menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {open && (
          <ul className="lg:hidden bg-[#0D0D0D] border-t border-white/10">
            {NAV.map((n) => (
              <li key={n.id}>
                <button
                  onClick={() => go(n.id)}
                  className={`w-full px-6 py-4 flex items-center gap-4 text-left border-b border-white/5 ${
                    current === n.id ? "text-jp-gold bg-white/5" : "text-white/80"
                  }`}
                >
                  <span className="font-jp-serif text-xl w-8">{n.kanji}</span>
                  <span>{n.label}</span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </>
  );
}
