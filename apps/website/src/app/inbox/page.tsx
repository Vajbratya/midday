import { PublicFeaturePage } from "@/components/public-feature-page";
import { featurePages } from "@/content/feature-pages";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Entrada unificada de voz, texto e anexos",
  description:
    "Voz, texto e documentos entram no mesmo fluxo para manter a producao organizada e reduzir dispersao operacional.",
  path: "/inbox",
  og: {
    title: "Entrada Laudos.AI",
    description: "Voz, texto e anexos organizados no mesmo fluxo.",
  },
  keywords: [
    "entrada de ditado",
    "anexos radiologia",
    "workflow de laudo",
    "organizacao clinica",
  ],
});

export default function Page() {
  return <PublicFeaturePage content={featurePages.inbox} />;
}
