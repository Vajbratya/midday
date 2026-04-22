import { PublicFeaturePage } from "@/components/public-feature-page";
import { featurePages } from "@/content/feature-pages";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Perplexity + Laudos.AI",
  description:
    "Conecte copilotos e buscas assistidas ao contexto operacional da Laudos.AI com MCP.",
  path: "/mcp/perplexity",
  og: {
    title: "Perplexity + Laudos.AI",
    description: "Busca assistida com contexto real do workflow radiológico.",
  },
});

export default function Page() {
  return <PublicFeaturePage content={featurePages.mcp} />;
}
