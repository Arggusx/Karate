import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Toaster } from "./components/ui/sonner";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { EnsoDraw } from "./components/Reveal";
import { HomePage } from "./components/pages/HomePage";
import { HistoriaPage } from "./components/pages/HistoriaPage";
import { FundamentosPage } from "./components/pages/FundamentosPage";
import { BeneficiosPage } from "./components/pages/BeneficiosPage";
import { TecnicasPage } from "./components/pages/TecnicasPage";
import { CuriosidadesPage } from "./components/pages/CuriosidadesPage";
import type { PageId } from "./components/data";

const HEIAN_SEQ = ["ArrowLeft", "ArrowLeft", "ArrowUp", "ArrowRight", "ArrowRight", "ArrowUp"];

export default function App() {
  const [page, setPage] = useState<PageId>("home");
  const [progress, setProgress] = useState(0);
  const [enso, setEnso] = useState(false);
  const keyBuffer = useRef<string[]>([]);

  const navigate = (id: PageId) => {
    setPage(id);
    requestAnimationFrame(() => window.scrollTo({ top: 0 }));
  };

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? Math.min(100, (scrolled / max) * 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [page]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!e.key.startsWith("Arrow")) return;
      keyBuffer.current = [...keyBuffer.current, e.key].slice(-HEIAN_SEQ.length);
      if (keyBuffer.current.join(",") === HEIAN_SEQ.join(",")) {
        setEnso(true);
        keyBuffer.current = [];
        setTimeout(() => setEnso(false), 2400);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="min-h-screen bg-jp-paper">
      <Navbar current={page} onNavigate={navigate} progress={progress} />
      <AnimatePresence mode="wait">
        <motion.main
          key={page}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          {page === "home" && <HomePage onNavigate={navigate} />}
          {page === "historia" && <HistoriaPage />}
          {page === "fundamentos" && <FundamentosPage />}
          {page === "beneficios" && <BeneficiosPage />}
          {page === "tecnicas" && <TecnicasPage />}
          {page === "curiosidades" && <CuriosidadesPage />}
        </motion.main>
      </AnimatePresence>
      <Footer />

      <AnimatePresence>
        {enso && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] grid place-items-center bg-black/70 pointer-events-none"
          >
            <div className="text-center">
              <EnsoDraw size={360} />
              <div className="font-jp-serif text-jp-gold mt-4 tracking-widest">円相 · Enso</div>
              <div className="text-white/60 text-xs mt-1">Heian Shodan — você encontrou o segredo.</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Toaster position="bottom-right" />
    </div>
  );
}
