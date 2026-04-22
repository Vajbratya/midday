import { PublicFeaturePage } from "@/components/public-feature-page";
import { featurePages } from "@/content/feature-pages";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Zed + Laudos.AI",
  description:
    "Integre a camada técnica da Laudos.AI ao ambiente de desenvolvimento com API e MCP.",
  path: "/mcp/zed",
  og: {
    title: "Zed + Laudos.AI",
    description: "Contexto real do produto para times técnicos.",
  },
});

export default function Page() {
  return <PublicFeaturePage content={featurePages.mcp} />;
}
