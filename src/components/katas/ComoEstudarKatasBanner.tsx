import { BookOpen } from "lucide-react";

export function ComoEstudarKatasBanner() {
  return (
    <div className="bg-jp-ink text-white border-2 border-jp-red/30 rounded-sm p-6 lg:p-8 shadow-md relative overflow-hidden">
      {/* Background Kanji Watermark */}
      <div
        className="kanji-watermark"
        style={{ fontSize: 320, right: -20, bottom: -60, color: "rgba(188,0,45,0.06)" }}
        aria-hidden="true"
      >
        型
      </div>

      <div className="relative z-10 space-y-6">
        {/* Header do Banner */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-jp-red/20 border border-jp-red/40 flex items-center justify-center text-jp-gold shrink-0">
              <BookOpen size={20} />
            </div>
            <div>
              <h2 className="font-jp-serif text-2xl lg:text-3xl font-bold text-white mt-0.5">
                Como Estudar os Katas: Embusen vs. Bunkai
              </h2>
            </div>
          </div>

          <span className="text-xs bg-white/10 text-white/80 border border-white/15 px-3 py-1 rounded-full self-start sm:self-auto font-medium">
            Forma & Aplicação
          </span>
        </div>

        {/* Grid de 2 Colunas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Coluna 1: Embusen */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-5 rounded-sm flex flex-col justify-between hover:border-jp-red/40 transition-all">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3 pb-2 border-b border-white/10">
                <div className="flex items-center gap-2">       
                  <h3 className="font-jp-serif text-xl font-bold text-white">
                    Embusen
                  </h3>
                </div>
                <span className="text-xs font-jp-serif font-bold text-jp-gold">
                  Linha de Atuação
                </span>
              </div>

              <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-normal mb-4">
                O <strong>Embusen</strong> é o diagrama geométrico traçado pelos pés no chão durante a execução do Kata. Cada Kata possui uma linha espacial rigorosa (em forma de I, T, + ou reta) onde o praticante deve obrigatoriamente iniciar e finalizar o Kata exatamente no mesmo ponto focal.
              </p>
            </div>

            <div className="bg-black/30 p-3 rounded-xs border border-white/5 text-[11px] text-white/70 space-y-1">
              <div className="flex items-center gap-1.5 text-jp-gold font-bold uppercase tracking-wider">
                Ponto-chave:
              </div>
              <p>
                Desenvolve consciência espacial, controle de centro de gravidade e precisão absoluta nos giros e pivôs corporais.
              </p>
            </div>
          </div>

          {/* Coluna 2: Bunkai */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-5 rounded-sm flex flex-col justify-between hover:border-jp-red/40 transition-all">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3 pb-2 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <h3 className="font-jp-serif text-xl font-bold text-white">
                    Bunkai
                  </h3>
                </div>
                <span className="text-xs font-jp-serif font-bold text-jp-gold">
                  Aplicação Prática
                </span>
              </div>

              <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-normal mb-4">
                O <strong>Bunkai</strong> (literalmente "desconstrução" ou "análise") revela a aplicação real de defesa pessoal de cada movimento da forma. Por trás de um bloqueio simples visualizado no Kata, o Bunkai oculta torções articulares (Kansetsu-waza), projeções (Nage-waza) ou estrangulamentos.
              </p>
            </div>

            <div className="bg-black/30 p-3 rounded-xs border border-white/5 text-[11px] text-white/70 space-y-1">
              <div className="flex items-center gap-1.5 text-sky-400 font-bold uppercase tracking-wider">
                Ponto-chave:
              </div>
              <p>
                Transforma o Kata em uma enciclopédia viva de combate real contra um ou mais oponentes imaginários.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
