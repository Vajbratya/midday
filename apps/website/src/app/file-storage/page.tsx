import { PublicFeaturePage } from "@/components/public-feature-page";
import { featurePages } from "@/content/feature-pages";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Templates, mascaras e vocabulario",
  description:
    "Use templates pessoais ou institucionais para acelerar o laudo, reduzir repeticao e manter consistencia entre profissionais e equipes.",
  path: "/file-storage",
  og: {
    title: "Templates Laudos.AI",
    description: "Mascaras e descritores organizados dentro do produto.",
  },
  keywords: [
    "templates de laudo",
    "mascaras radiologia",
    "descritores institucionais",
    "vocabulario medico",
  ],
});

export default function Page() {
  return <PublicFeaturePage content={featurePages["file-storage"]} />;
}
