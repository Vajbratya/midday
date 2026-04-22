import { PublicFeaturePage } from "@/components/public-feature-page";
import { featurePages } from "@/content/feature-pages";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Fluxo de exames e prioridades",
  description:
    "Organize estudos, prioridades e contexto do trabalho com um fluxo mais claro entre aquisicao, redacao, revisao e entrega.",
  path: "/transactions",
  og: {
    title: "Fluxo operacional",
    description: "Exames, prioridade e contexto organizados no mesmo sistema.",
  },
  keywords: [
    "fila de exames",
    "workflow radiologia",
    "priorizacao radiologica",
    "operacao de laudos",
  ],
});

export default function Page() {
  return <PublicFeaturePage content={featurePages.transactions} />;
}
