import { useState } from "react";
import { toast } from "sonner";
import { Instagram, Youtube, Facebook, Twitter, Send } from "lucide-react";

function Footer() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@") || !nome.trim() || !mensagem.trim()) {
      toast.error("Por favor, preencha todos os campos corretamente.");
      return;
    }
    toast.success("押忍! Mensagem enviada com sucesso. Entraremos em contato!");
    setNome("");
    setEmail("");
    setMensagem("");
  };

  return (
    <footer id="contato" className="bg-jp-ink text-white pt-16 pb-8 relative overflow-hidden">
      <div className="kanji-watermark" style={{ fontSize: 360, right: -40, bottom: -120, color: "rgba(188,0,45,0.08)" }}>道</div>
      <div className="max-w-7xl mx-auto px-5 lg:px-8 grid md:grid-cols-3 gap-12 relative">
        <div>
          <div className="font-jp-serif text-5xl text-jp-red mb-3">空手道</div>
          <div className="text-xs tracking-[0.3em] uppercase text-white/60 mb-4">Karate-Dō · O Caminho</div>
          <p className="text-sm text-white/70 leading-relaxed max-w-xs">
            Um espaço dedicado ao estudo do Karatê Shotokan e da cultura que o nutre. Aprenda, respire, treine.
          </p>
        </div>

        <div>
          <h4 className="font-jp-serif text-jp-gold mb-4 tracking-widest text-sm uppercase">Siga o caminho</h4>
          <div className="flex gap-4">
            {[Instagram, Youtube, Facebook, Twitter].map((Ic, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/20 grid place-items-center hover:border-jp-red hover:text-jp-red transition-colors">
                <Ic size={16} />
              </a>
            ))}
          </div>
          <p className="mt-6 text-xs text-white/40 leading-relaxed">
            Niju Kun #1<br />
            <span className="font-jp-serif text-white/70">礼に始まり、礼に終わる</span><br />
            Tudo começa e termina com o cumprimento.
          </p>
        </div>

        <div>
          <h4 className="font-jp-serif text-jp-gold mb-4 tracking-widest text-sm uppercase">Entre em Contato</h4>
          <p className="text-sm text-white/70 mb-3">Envie sua dúvida ou mensagem para nossa equipe.</p>
          <form onSubmit={submit} className="flex flex-col gap-2.5">
            <input
              type="text"
              required
              placeholder="Seu nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="ink-input px-3 py-2 rounded-sm text-sm focus:outline-none focus:border-jp-red"
            />
            <input
              type="email"
              required
              placeholder="Seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="ink-input px-3 py-2 rounded-sm text-sm focus:outline-none focus:border-jp-red"
            />
            <textarea
              required
              rows={3}
              placeholder="Sua mensagem..."
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              className="ink-input px-3 py-2 rounded-sm text-sm focus:outline-none focus:border-jp-red resize-none"
            />
            <button type="submit" className="bg-jp-red hover:bg-[#9a0024] text-white px-4 py-2.5 rounded-sm text-sm tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer mt-1">
              <Send size={14} /> Enviar Mensagem
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 lg:px-8 mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between gap-3 text-xs text-white/40 relative">
        <span>© {new Date().getFullYear()} Karate-Dō · Projeto educativo, sem fins lucrativos.</span>
        <span className="font-jp-serif">心を磨け — Lapide o coração.</span>
      </div>
    </footer>
  );
}

export default Footer;