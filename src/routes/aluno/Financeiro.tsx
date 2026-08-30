import { CheckCircle2, AlertTriangle, XCircle, MessageCircle, Info } from "lucide-react";
import { dataBR } from "@/lib/dominio";
import { useDadosAluno } from "./contexto";
import { Cartao } from "../PortalLayout";

const APRESENTACAO = {
  em_dia: {
    icone: CheckCircle2,
    titulo: "Mensalidade em dia",
    texto: "Não há pendências no seu cadastro. Bom treino!",
    caixa: "border-emerald-200 bg-emerald-50",
    cor: "text-emerald-700",
  },
  pendente: {
    icone: AlertTriangle,
    titulo: "Mensalidade pendente",
    texto: "Há uma parcela aguardando pagamento. Regularize para manter o acesso às aulas.",
    caixa: "border-amber-200 bg-amber-50",
    cor: "text-amber-700",
  },
  atrasado: {
    icone: XCircle,
    titulo: "Mensalidade atrasada",
    texto: "Sua parcela está vencida. Procure a secretaria do dojo para regularizar.",
    caixa: "border-red-200 bg-red-50",
    cor: "text-red-700",
  },
} as const;

export function Financeiro() {
  const { ficha } = useDadosAluno();
  const info = APRESENTACAO[ficha.status_mensalidade];
  const Icone = info.icone;

  return (
    <div className="space-y-6 max-w-2xl">
      <div className={`border rounded-sm p-5 flex items-start gap-4 ${info.caixa}`}>
        <Icone size={26} className={`shrink-0 ${info.cor}`} />
        <div>
          <h2 className={`font-jp-serif text-lg font-bold ${info.cor}`}>{info.titulo}</h2>
          <p className="text-sm text-black/70 mt-1">{info.texto}</p>
          {ficha.atualizado_em && (
            <p className="text-[11px] text-black/45 mt-2">
              Situação atualizada pelo professor em {dataBR(ficha.atualizado_em)}.
            </p>
          )}
        </div>
      </div>

      <Cartao titulo="Como pagar">
        <p className="text-sm text-black/70">
          O pagamento é feito diretamente com a secretaria do dojo. Combine a forma
          (PIX, dinheiro ou cartão) e envie o comprovante para que o professor
          atualize sua situação aqui no portal.
        </p>

        <a
          href="https://wa.me/?text=Ol%C3%A1%2C%20gostaria%20de%20regularizar%20minha%20mensalidade%20do%20dojo."
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex items-center gap-2 bg-jp-ink text-white text-sm font-semibold px-4 py-2.5 rounded-sm hover:bg-jp-red transition-colors"
        >
          <MessageCircle size={16} />
          Falar com a secretaria
        </a>

        {/*
          Deliberadamente sem checkout automatico: integrar um gateway de
          pagamento (Pix/cartao) envolve credenciais, webhook de confirmacao e
          conciliacao — nada disso existe ainda no banco. Prometer um botao
          "pagar agora" que nao baixa a parcela seria pior que nao ter.
        */}
        <div className="flex items-start gap-2 mt-4 text-[11px] text-black/55 bg-jp-paper border border-black/8 rounded-sm px-3 py-2">
          <Info size={13} className="shrink-0 mt-0.5 text-jp-red" />
          <p>
            Pagamento online ainda não está integrado. Quando um gateway for
            contratado, o botão de checkout e a baixa automática da parcela entram
            aqui — hoje a baixa é registrada manualmente pelo professor.
          </p>
        </div>
      </Cartao>

      <Cartao titulo="Seus dados">
        <dl className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <dt className="text-[10px] uppercase tracking-wider text-black/45">Aluno</dt>
            <dd className="text-jp-ink font-medium">{ficha.nome}</dd>
          </div>
          <div>
            <dt className="text-[10px] uppercase tracking-wider text-black/45">Matrícula</dt>
            <dd className="text-jp-ink font-medium">#{String(ficha.id).padStart(4, "0")}</dd>
          </div>
          <div>
            <dt className="text-[10px] uppercase tracking-wider text-black/45">Turma</dt>
            <dd className="text-jp-ink font-medium">{ficha.turma_nome ?? "—"}</dd>
          </div>
          <div>
            <dt className="text-[10px] uppercase tracking-wider text-black/45">Contato</dt>
            <dd className="text-jp-ink font-medium">{ficha.telefone ?? ficha.email}</dd>
          </div>
        </dl>
      </Cartao>
    </div>
  );
}

export default Financeiro;
