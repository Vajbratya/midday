import { PublicFeaturePage } from "@/components/public-feature-page";
import { featurePages } from "@/content/feature-pages";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "CRIT e comunicação segura no mobile",
  description:
    "Veja como a camada mobile e os fluxos assistidos da Laudos.AI levam comunicação crítica e operação clínica para telas menores.",
  path: "/chat/imessage",
  og: {
    title: "Comunicação segura",
    description: "CRIT, mobilidade e rastreabilidade no mesmo fluxo.",
  },
});

export default function Page() {
  return <PublicFeaturePage content={featurePages.chat} />;
}
