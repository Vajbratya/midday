import { PublicFeaturePage } from "@/components/public-feature-page";
import { featurePages } from "@/content/feature-pages";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Copilot radiologico com IA e voz",
  description:
    "Descreva os achados com naturalidade. A Laudos.AI organiza o conteudo em um laudo estruturado, pronto para revisar e assinar.",
  path: "/assistant",
  og: {
    title: "Copilot Laudos.AI",
    description: "Fale como voce pensa. Receba o laudo estruturado.",
  },
  keywords: [
    "laudos com IA",
    "ditado radiologico",
    "laudo estruturado",
    "copilot radiologia",
    "voz natural",
  ],
});

export default function Page() {
  return <PublicFeaturePage content={featurePages.assistant} />;
}
