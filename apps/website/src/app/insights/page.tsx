import { PublicFeaturePage } from "@/components/public-feature-page";
import { featurePages } from "@/content/feature-pages";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Analises e auditoria para radiologia",
  description:
    "Acompanhe produtividade, uso e consistencia dos laudos com indicadores prontos para profissionais, equipes e operacoes enterprise.",
  path: "/insights",
  og: {
    title: "Analises Laudos.AI",
    description: "Volume, qualidade e auditoria em uma vista so.",
  },
  keywords: [
    "analytics radiologia",
    "auditoria laudos",
    "dashboard radiologico",
    "metricas enterprise",
  ],
});

export default function Page() {
  return <PublicFeaturePage content={featurePages.insights} />;
}
