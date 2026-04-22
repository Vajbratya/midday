import { PublicFeaturePage } from "@/components/public-feature-page";
import { featurePages } from "@/content/feature-pages";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Editor de laudos com IA",
  description:
    "Abra o editor, dite ou digite o exame e veja a IA estruturar, complementar e ajustar o texto sem quebrar o seu fluxo.",
  path: "/invoicing",
  og: {
    title: "Editor Laudos.AI",
    description: "IA, voz e refinamento no mesmo editor.",
  },
  keywords: [
    "editor de laudos",
    "laudo estruturado",
    "radiologia ia",
    "autocomplete medico",
  ],
});

export default function Page() {
  return <PublicFeaturePage content={featurePages.invoicing} />;
}
