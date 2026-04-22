import { PreAccounting } from "@/components/pre-accounting";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Operacao Auditavel",
  description:
    "Organize o que acontece depois do laudo com trilha, confirmacao, anexos e contexto pronto para revisao e auditoria.",
  path: "/pre-accounting",
  og: {
    title: "Operacao auditavel",
    description: "Fluxo pos-laudo sem planilha nem improviso",
  },
  keywords: [
    "auditoria radiologia",
    "operacao clinica",
    "fluxo pos laudo",
    "rastreabilidade",
    "governanca clinica",
  ],
});

export default function Page() {
  return <PreAccounting />;
}
