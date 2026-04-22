import { PublicFeaturePage } from "@/components/public-feature-page";
import { featurePages } from "@/content/feature-pages";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Infraestrutura para copilotos, busca e CRIT",
  description:
    "Copilot, Search, CRIT, API e integracoes clinicas em uma base unica para acelerar o que acontece depois da imagem.",
  path: "/agents",
  og: {
    title: "Infraestrutura Laudos.AI",
    description: "Copilotos, busca e comunicacao critica no mesmo produto.",
  },
  keywords: [
    "copilot radiologia",
    "laudai search",
    "crit enterprise",
    "api radiologia",
  ],
});

export default function Page() {
  return <PublicFeaturePage content={featurePages.agents} />;
}
