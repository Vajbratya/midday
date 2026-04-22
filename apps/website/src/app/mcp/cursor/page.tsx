import { PublicFeaturePage } from "@/components/public-feature-page";
import { featurePages } from "@/content/feature-pages";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Cursor + Laudos.AI via MCP",
  description:
    "Aproxime a stack técnica da Laudos.AI do ambiente de desenvolvimento da sua equipe.",
  path: "/mcp/cursor",
  og: {
    title: "Cursor + Laudos.AI",
    description: "API, MCP e contexto real do produto para times técnicos.",
  },
});

export default function Page() {
  return <PublicFeaturePage content={featurePages.mcp} />;
}
