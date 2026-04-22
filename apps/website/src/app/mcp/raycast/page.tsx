import { PublicFeaturePage } from "@/components/public-feature-page";
import { featurePages } from "@/content/feature-pages";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Raycast + Laudos.AI",
  description:
    "Aproxime sinais operacionais, automações e dados do produto de atalhos e fluxos rápidos da equipe.",
  path: "/mcp/raycast",
  og: {
    title: "Raycast + Laudos.AI",
    description: "Fluxos rápidos em cima da camada técnica da plataforma.",
  },
});

export default function Page() {
  return <PublicFeaturePage content={featurePages.mcp} />;
}
