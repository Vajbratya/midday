import { PublicFeaturePage } from "@/components/public-feature-page";
import { featurePages } from "@/content/feature-pages";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Windsurf + Laudos.AI",
  description:
    "Conecte o stack técnico da Laudos.AI a agentes, copilotos e fluxos de desenvolvimento.",
  path: "/mcp/windsurf",
  og: {
    title: "Windsurf + Laudos.AI",
    description: "Infraestrutura radiológica acessível para times técnicos.",
  },
});

export default function Page() {
  return <PublicFeaturePage content={featurePages.mcp} />;
}
