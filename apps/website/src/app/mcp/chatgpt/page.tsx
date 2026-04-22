import { PublicFeaturePage } from "@/components/public-feature-page";
import { featurePages } from "@/content/feature-pages";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "ChatGPT + Laudos.AI via MCP",
  description:
    "Conecte copilotos e agentes ao contexto operacional da Laudos.AI com MCP e API.",
  path: "/mcp/chatgpt",
  og: {
    title: "ChatGPT + Laudos.AI",
    description: "Copilotos com contexto real do fluxo radiológico.",
  },
});

export default function Page() {
  return <PublicFeaturePage content={featurePages.mcp} />;
}
