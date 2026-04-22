import { PublicFeaturePage } from "@/components/public-feature-page";
import { featurePages } from "@/content/feature-pages";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Editor mobile e acesso em qualquer tela",
  description:
    "A experiencia da Laudos.AI acompanha o radiologista no desktop, tablet e celular, sem instalacao obrigatoria.",
  path: "/download",
  og: {
    title: "Editor mobile",
    description: "No navegador, no tablet e agora tambem no celular.",
  },
});

export default function Page() {
  return <PublicFeaturePage content={featurePages.download} />;
}
