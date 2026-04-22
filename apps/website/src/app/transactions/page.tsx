import { Transactions } from "@/components/transactions";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Fluxo Operacional da Radiologia",
  description:
    "Centralize casos, etapas, anexos e integrações em um fluxo unico com contexto completo e menos retrabalho.",
  path: "/transactions",
  og: {
    title: "Fluxo",
    description: "Tudo o que entra e sai da operacao, em uma fila so",
  },
  keywords: [
    "fluxo radiologia",
    "fila de casos",
    "orquestracao clinica",
    "workflow radiologico",
    "operacao de laudos",
  ],
});

export default function Page() {
  return <Transactions />;
}
