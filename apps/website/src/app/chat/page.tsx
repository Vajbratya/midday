import { PublicFeaturePage } from "@/components/public-feature-page";
import { featurePages } from "@/content/feature-pages";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "CRIT para achados criticos com SLA e prova juridica",
  description:
    "O CRIT fecha o ciclo de comunicacao de achados criticos com notificacao segura, registro de ciencia, auditoria completa e rastreabilidade institucional.",
  path: "/chat",
  og: {
    title: "CRIT",
    description: "Achado critico comunicado. Vida salva.",
  },
  keywords: [
    "achados criticos",
    "crit radiologia",
    "comunicacao segura",
    "sla radiologia",
  ],
});

export default function Page() {
  return <PublicFeaturePage content={featurePages.chat} />;
}
