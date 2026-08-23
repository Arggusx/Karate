import { useState } from "react";
import {
  Layers,
  Shield,
  Zap,
  HelpCircle,
  CheckCircle2,
  Compass
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import {
  DICIONARIO,
  DOJO_KUN,
  GRADUACOES,
  PILARES,
  ETIQUETA_DOJO,
  PRINCIPIOS_TECNICOS,
  type PilarItem,
  type PrincipioTecnicoItem,
} from "@/data/data";

type TabId = "todos" | "pilares" | "etiqueta" | "principios";

export function Fundaments() {
  const [activeTab, setActiveTab] = useState<TabId>("todos");

  const tabOptions = [
    { id: "todos" as TabId, label: "Visão Completa", icon: Compass, count: "Todos" },
    { id: "pilares" as TabId, label: "1. Os 3 Pilares", icon: Layers, count: PILARES.length },
    { id: "etiqueta" as TabId, label: "2. Etiqueta do Dōjō", icon: Shield, count: ETIQUETA_DOJO.length },
    { id: "principios" as TabId, label: "3. Princípios Técnicos", icon: Zap, count: PRINCIPIOS_TECNICOS.length },
  ];

  return (
    <div className="page-anim">
      {/* Hero Banner */}
      <section className="relative bg-jp-paper py-24 overflow-hidden border-b border-black/10">
        <div className="kanji-watermark" style={{ fontSize: 520, right: -60, top: -100 }}>
          基本
        </div>
        <div className="max-w-5xl mx-auto px-5 lg:px-8 relative">
          <div className="text-jp-red tracking-widest uppercase text-xs font-semibold">
            Kihon & Dō · 基本と道
          </div>
          <h1 className="font-jp-serif text-5xl md:text-6xl mt-2 text-jp-ink font-bold">
            Fundamentos do Karatê
          </h1>
          <p className="text-black/75 mt-4 max-w-2xl text-base md:text-lg leading-relaxed font-normal">
            <em>"Kihon é a base de tudo."</em> Sem repetição não há técnica; sem técnica não há karatê.
            Descubra a estrutura que une os pilares de treino, a conduta ética no tatame e os princípios biomecânicos e mentais indispensáveis.
          </p>
        </div>
      </section>

      {/* SEÇÃO MESTRE UNIFICADA: PILARES, ETIQUETA E PRINCÍPIOS */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          
          {/* Cabeçalho da Seção Unificada */}
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="rounded-full bg-jp-red/10 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-jp-red">
                Estrutura & Filosofia
              </span>
              <h2 className="font-jp-serif text-3xl md:text-4xl text-jp-ink mt-3">
                Pilares, Conduta e Princípios Fundamentais
              </h2>
              <p className="text-black/60 text-sm md:text-base mt-3 leading-relaxed">
                A prática completa do Karatê-Dō é sustentada por três dimensões inseparáveis:
                a <strong>tríade técnica</strong> de treino, a <strong>etiqueta moral</strong> do dojo e os <strong>princípios biomecânicos e mentais</strong>.
              </p>
              <div className="sumi-divider max-w-xs mx-auto mt-4" />
            </div>
          </Reveal>

          {/* Seletor de Abas / Filtro Rápido */}
          <div className="mb-12 flex items-center justify-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-1.5 rounded-full border border-black/10 bg-jp-paper p-1.5 shadow-2xs">
              {tabOptions.map((tab) => {
                const IconComponent = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-all cursor-pointer ${
                      isActive
                        ? "bg-jp-ink text-white shadow-sm"
                        : "text-black/70 hover:text-jp-red hover:bg-white/60"
                    }`}
                    type="button"
                  >
                    <IconComponent size={14} className={isActive ? "text-jp-red" : "text-black/50"} />
                    <span>{tab.label}</span>
                    <span
                      className={`rounded-full px-1.5 py-0.2 text-[10px] font-mono ${
                        isActive ? "bg-white/20 text-white" : "bg-black/5 text-black/50"
                      }`}
                    >
                      {tab.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 1. BLOCO: OS TRÊS PILARES (KIHON, KATA, KUMITE) */}
          {(activeTab === "todos" || activeTab === "pilares") && (
            <div className="mb-16">
              <Reveal>
                <div className="mb-6 flex items-center gap-3 border-b border-black/10 pb-3">
                  <span className="font-jp-serif text-2xl text-jp-red bg-jp-paper px-3 py-1 border border-black/5 font-bold">
                    三柱
                  </span>
                  <div>
                    <h3 className="font-jp-serif text-2xl text-jp-ink font-bold">
                      1. Os Três Pilares da Prática (Sanbon)
                    </h3>
                    <p className="text-xs text-black/60">
                      As três formas essenciais de treinamento que compõem o estudo técnico contínuo.
                    </p>
                  </div>
                </div>
              </Reveal>

              <div className="grid gap-6 md:grid-cols-3">
                {PILARES.map((pilar: PilarItem, idx: number) => (
                  <Reveal key={pilar.nome} delay={idx * 80}>
                    <div className="card-elev flex h-full flex-col justify-between border border-black/10 bg-jp-paper p-6 shadow-sm">
                      <div>
                        {/* Topo do Card */}
                        <div className="flex items-center justify-between border-b border-black/5 pb-3">
                          <span className="font-jp-serif text-4xl text-jp-red font-bold">
                            {pilar.kanji}
                          </span>
                          <span className="rounded bg-black/5 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-black/60">
                            Pilar {idx + 1}
                          </span>
                        </div>

                        <div className="mt-3">
                          <h4 className="font-jp-serif text-2xl font-bold text-jp-ink">
                            {pilar.nome}
                          </h4>
                          <span className="text-xs font-semibold text-jp-red tracking-wide block mt-0.5">
                            {pilar.pt}
                          </span>
                          <p className="text-xs italic text-black/50 mt-1 mb-4">
                            "{pilar.tagline}"
                          </p>
                        </div>

                        {/* O que é */}
                        <div className="mt-4 rounded-sm border border-black/5 bg-white p-3.5">
                          <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-black/60 mb-1">
                            <HelpCircle size={13} className="text-black/50" />
                            <span>O que é:</span>
                          </div>
                          <p className="text-xs leading-relaxed text-black/80">
                            {pilar.oque_e}
                          </p>
                        </div>

                        {/* Para que serve */}
                        <div className="mt-3 rounded-sm border border-jp-red/15 bg-jp-red/5 p-3.5">
                          <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-jp-red mb-1">
                            <CheckCircle2 size={13} className="text-jp-red" />
                            <span>Para o que serve:</span>
                          </div>
                          <p className="text-xs leading-relaxed text-black/80">
                            {pilar.para_que_serve}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          )}

          {/* 2. BLOCO: ETIQUETA E CONDUTA DO DŌJŌ */}
          {(activeTab === "todos" || activeTab === "etiqueta") && (
            <div className="mb-16">
              <Reveal>
                <div className="mb-6 flex items-center gap-3 border-b border-black/10 pb-3">
                  <span className="font-jp-serif text-2xl text-jp-red bg-jp-paper px-3 py-1 border border-black/5 font-bold">
                    礼節
                  </span>
                  <div>
                    <h3 className="font-jp-serif text-2xl text-jp-ink font-bold">
                      2. Etiqueta e Conduta do Dōjō (Rei-shiki)
                    </h3>
                    <p className="text-xs text-black/60">
                      O respeito, a resiliência e os princípios éticos que antecedem qualquer técnica.
                    </p>
                  </div>
                </div>
              </Reveal>

              <div className="grid gap-6 lg:grid-cols-3">
                {/* Card 1: Rei (Cumprimento) */}
                <Reveal delay={0}>
                  <div className="card-elev flex h-full flex-col justify-between border border-black/10 bg-white p-6 shadow-sm">
                    <div>
                      <div className="flex items-center justify-between border-b border-black/5 pb-3">
                        <span className="font-jp-serif text-4xl text-jp-red font-bold">
                          礼
                        </span>
                        <span className="rounded bg-jp-red/10 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-jp-red">
                          Respeito Mútuo
                        </span>
                      </div>

                      <div className="mt-3">
                        <h4 className="font-jp-serif text-2xl font-bold text-jp-ink">
                          Rei · O Cumprimento
                        </h4>
                        <span className="text-xs font-semibold text-black/50 block mt-0.5">
                          A saudação sagrada do Karatê
                        </span>
                      </div>

                      {/* O que é */}
                      <div className="mt-4 rounded-sm border border-black/5 bg-jp-paper p-3.5">
                        <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-black/60 mb-1">
                          <HelpCircle size={13} className="text-black/50" />
                          <span>O que é:</span>
                        </div>
                        <p className="text-xs leading-relaxed text-black/80">
                          {ETIQUETA_DOJO[0].oque_e}
                        </p>
                      </div>

                      {/* Para que serve */}
                      <div className="mt-3 rounded-sm border border-jp-red/15 bg-jp-red/5 p-3.5">
                        <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-jp-red mb-1">
                          <CheckCircle2 size={13} className="text-jp-red" />
                          <span>Para o que serve:</span>
                        </div>
                        <p className="text-xs leading-relaxed text-black/80">
                          {ETIQUETA_DOJO[0].para_que_serve}
                        </p>
                      </div>

                      {/* Variações Ritsurei e Zarei */}
                      <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                        <div className="rounded border border-black/5 bg-jp-paper p-2.5">
                          <span className="font-bold text-jp-red block">立礼 Ritsurei</span>
                          <span className="text-[11px] text-black/60">Cumprimento em pé com inclinação respeitosa.</span>
                        </div>
                        <div className="rounded border border-black/5 bg-jp-paper p-2.5">
                          <span className="font-bold text-jp-red block">座礼 Zarei</span>
                          <span className="text-[11px] text-black/60">Cumprimento ajoelhado formalmente em Seiza.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>

                {/* Card 2: Oss (Perseverança) */}
                <Reveal delay={80}>
                  <div className="card-elev flex h-full flex-col justify-between border border-black/10 bg-white p-6 shadow-sm">
                    <div>
                      <div className="flex items-center justify-between border-b border-black/5 pb-3">
                        <span className="font-jp-serif text-4xl text-jp-red font-bold">
                          押忍
                        </span>
                        <span className="rounded bg-jp-gold/15 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-jp-gold">
                          Resiliência
                        </span>
                      </div>

                      <div className="mt-3">
                        <h4 className="font-jp-serif text-2xl font-bold text-jp-ink">
                          Oss · O Espírito de Suportar
                        </h4>
                        <span className="text-xs font-semibold text-black/50 block mt-0.5">
                          Oshi Shinobu (Empurrar e Resistir)
                        </span>
                      </div>

                      {/* O que é */}
                      <div className="mt-4 rounded-sm border border-black/5 bg-jp-paper p-3.5">
                        <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-black/60 mb-1">
                          <HelpCircle size={13} className="text-black/50" />
                          <span>O que é:</span>
                        </div>
                        <p className="text-xs leading-relaxed text-black/80">
                          {ETIQUETA_DOJO[1].oque_e}
                        </p>
                      </div>

                      {/* Para que serve */}
                      <div className="mt-3 rounded-sm border border-jp-red/15 bg-jp-red/5 p-3.5">
                        <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-jp-red mb-1">
                          <CheckCircle2 size={13} className="text-jp-red" />
                          <span>Para o que serve:</span>
                        </div>
                        <p className="text-xs leading-relaxed text-black/80">
                          {ETIQUETA_DOJO[1].para_que_serve}
                        </p>
                      </div>

                      <div className="mt-4 rounded border border-black/5 bg-jp-paper p-3 text-xs text-black/70">
                        <span className="font-bold text-jp-ink block mb-0.5">Atitude do Karateca:</span>
                        Pronunciar <em>Oss</em> é assumir o compromisso de nunca desistir perante a dificuldade técnica ou o cansaço.
                      </div>
                    </div>
                  </div>
                </Reveal>

                {/* Card 3: Dōjō Kun (5 Lemas) */}
                <Reveal delay={160}>
                  <div className="card-elev flex h-full flex-col justify-between border border-black/10 bg-white p-6 shadow-sm">
                    <div>
                      <div className="flex items-center justify-between border-b border-black/5 pb-3">
                        <span className="font-jp-serif text-4xl text-jp-red font-bold">
                          道場訓
                        </span>
                        <span className="rounded bg-black/5 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-black/60">
                          5 Lemas Éticos
                        </span>
                      </div>

                      <div className="mt-3">
                        <h4 className="font-jp-serif text-2xl font-bold text-jp-ink">
                          Dōjō Kun · Código Moral
                        </h4>
                        <span className="text-xs font-semibold text-black/50 block mt-0.5">
                          A bússola ética do praticante
                        </span>
                      </div>

                      {/* O que é */}
                      <div className="mt-4 rounded-sm border border-black/5 bg-jp-paper p-3.5">
                        <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-black/60 mb-1">
                          <HelpCircle size={13} className="text-black/50" />
                          <span>O que é:</span>
                        </div>
                        <p className="text-xs leading-relaxed text-black/80">
                          {ETIQUETA_DOJO[2].oque_e}
                        </p>
                      </div>

                      {/* Para que serve */}
                      <div className="mt-3 rounded-sm border border-jp-red/15 bg-jp-red/5 p-3.5">
                        <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-jp-red mb-1">
                          <CheckCircle2 size={13} className="text-jp-red" />
                          <span>Para o que serve:</span>
                        </div>
                        <p className="text-xs leading-relaxed text-black/80">
                          {ETIQUETA_DOJO[2].para_que_serve}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>

              {/* Tabela dos 5 Lemas do Dojo Kun Expandida */}
              <Reveal delay={200}>
                <div className="mt-6 rounded-sm border border-black/10 bg-jp-paper p-6 shadow-sm">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="font-jp-serif text-lg font-bold text-jp-ink">
                      Os 5 Preceitos do Dōjō Kun (Recitados em Seiza)
                    </span>
                    <span className="text-xs text-black/50 italic">
                      Todos iniciam com "Hitotsu" (Primeiro), pois possuem igual prioridade.
                    </span>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {DOJO_KUN.map((d, i) => (
                      <div key={i} className="rounded-sm border border-black/5 bg-white p-3.5 shadow-2xs">
                        <div className="flex items-center gap-2 text-xs font-bold text-jp-red">
                          <span className="font-jp-serif text-sm">一、</span>
                          <span>{d.pt}</span>
                        </div>
                        <p className="mt-1.5 text-[11px] text-black/70 leading-relaxed">
                          {d.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          )}

          {/* 3. BLOCO: PRINCÍPIOS TÉCNICOS E MENTAIS (GENSOKU) */}
          {(activeTab === "todos" || activeTab === "principios") && (
            <div>
              <Reveal>
                <div className="mb-6 flex items-center gap-3 border-b border-black/10 pb-3">
                  <span className="font-jp-serif text-2xl text-jp-red bg-jp-paper px-3 py-1 border border-black/5 font-bold">
                    原則
                  </span>
                  <div>
                    <h3 className="font-jp-serif text-2xl text-jp-ink font-bold">
                      3. Princípios Técnicos e Mentais (Gensoku)
                    </h3>
                    <p className="text-xs text-black/60">
                      Os 9 conceitos biomecânicos e mentais que transformam movimentos em técnica marcial eficiente.
                    </p>
                  </div>
                </div>
              </Reveal>

              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {PRINCIPIOS_TECNICOS.map((p: PrincipioTecnicoItem, i: number) => (
                  <Reveal key={p.n} delay={i * 40}>
                    <div className="card-elev flex h-full flex-col justify-between rounded-sm border border-black/10 bg-jp-paper p-5 shadow-sm">
                      <div>
                        {/* Header do Princípio */}
                        <div className="flex items-baseline justify-between border-b border-black/5 pb-2.5">
                          <div className="flex items-baseline gap-2">
                            <span className="font-jp-serif text-3xl font-bold text-jp-red">
                              {p.k}
                            </span>
                            <span className="font-jp-serif text-lg font-bold text-jp-ink">
                              {p.n}
                            </span>
                          </div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-black/50">
                            Gensoku
                          </span>
                        </div>

                        <span className="text-xs font-semibold text-jp-gold tracking-wide block mt-1.5 mb-3">
                          {p.traducao}
                        </span>

                        {/* O que é */}
                        <div className="rounded border border-black/5 bg-white p-3">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-black/50 block mb-0.5">
                            O que é:
                          </span>
                          <p className="text-xs leading-relaxed text-black/80">
                            {p.oque_e}
                          </p>
                        </div>

                        {/* Para que serve */}
                        <div className="mt-2.5 rounded border border-jp-red/15 bg-jp-red/5 p-3">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-jp-red block mb-0.5">
                            Para o que serve:
                          </span>
                          <p className="text-xs leading-relaxed text-black/80">
                            {p.para_que_serve}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

      {/* SEÇÃO DE GRADUAÇÕES / FAIXAS */}
      <section className="py-20 bg-jp-paper border-t border-black/10">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <Reveal>
            <div className="text-center mb-10">
              <div className="text-jp-red text-xs tracking-widest uppercase font-semibold">
                Kyu · Dan · 級 段
              </div>
              <h2 className="font-jp-serif text-3xl md:text-4xl text-jp-ink mt-2">
                A Jornada das Faixas
              </h2>
              <p className="text-black/60 mt-3 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
                Antes da preta vêm os <em>kyu</em> (graus de aprendizagem). Depois,
                os <em>dan</em> (graus de maturidade técnica e espiritual). O progresso é forjado na constância.
              </p>
              <div className="sumi-divider max-w-xs mx-auto mt-3" />
            </div>
          </Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {GRADUACOES.map((g, i) => (
              <Reveal key={g.faixa} delay={i * 50}>
                <div className="card-elev bg-white border border-black/5 p-4 rounded-sm shadow-2xs">
                  <div
                    className="h-3 w-full mb-3 rounded-2xs"
                    style={{
                      background: {
                        Branca: "#F5F1E8",
                        Amarela: "#E8C547",
                        Vermelha: "#C41E3A",
                        Laranja: "#E07B00",
                        Verde: "#2D7A3F",
                        Roxa: "#5E2B82",
                        Marrom: "#6B3F1D",
                        Preta: "#0D0D0D",
                      }[g.faixa],
                      border: g.faixa === "Branca" ? "1px solid #0002" : "none",
                    }}
                  />
                  <div className="font-jp-serif text-jp-red font-bold text-lg">{g.jp}</div>
                  <div className="font-jp-serif text-base font-semibold text-jp-ink">{g.faixa}</div>
                  <p className="text-xs text-black/60 mt-1 leading-relaxed">{g.txt}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO DICIONÁRIO RÁPIDO */}
      <section className="py-20 bg-white border-t border-black/10">
        <div className="max-w-5xl mx-auto px-5 lg:px-8">
          <Reveal>
            <div className="text-center mb-10">
              <div className="text-jp-red text-xs tracking-widest uppercase font-semibold">
                Yōgo-shū · 用語集
              </div>
              <h2 className="font-jp-serif text-3xl md:text-4xl text-jp-ink mt-2">
                Dicionário Rápido do Dōjō
              </h2>
              <p className="text-black/60 mt-2 text-sm">
                Vocabulário essencial para a compreensão dos comandos e rituais no tatame.
              </p>
              <div className="sumi-divider max-w-xs mx-auto mt-3" />
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {DICIONARIO.map((d, i) => (
              <Reveal key={d.romaji} delay={i * 50}>
                <div className="card-elev bg-jp-paper border border-black/5 p-5 rounded-sm shadow-2xs">
                  <div className="flex items-baseline gap-3">
                    <div className="font-jp-serif text-4xl text-jp-red font-bold">{d.jp}</div>
                    <div className="text-jp-ink font-semibold tracking-wider">{d.romaji}</div>
                  </div>
                  <p className="text-sm text-black/70 mt-2 leading-relaxed">{d.pt}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Fundaments;
