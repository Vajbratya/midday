import { PublicFeaturePage } from "@/components/public-feature-page";
import { featurePages } from "@/content/feature-pages";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "WhatsApp não é conformidade para achados críticos",
  description:
    "Entenda por que a Laudos.AI separa comunicação crítica, rastreabilidade e prova jurídica do improviso em aplicativos de mensagem.",
  path: "/chat/whatsapp",
  og: {
    title: "WhatsApp vs CRIT",
    description: "Achado crítico precisa de SLA, registro de ciência e auditoria.",
  },
});

export default function Page() {
  return <PublicFeaturePage content={featurePages.chat} />;
}
