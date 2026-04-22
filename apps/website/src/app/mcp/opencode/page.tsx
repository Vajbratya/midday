import { PublicFeaturePage } from "@/components/public-feature-page";
import { featurePages } from "@/content/feature-pages";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "OpenCode + Laudos.AI",
  description:
    "Leve o contexto técnico da Laudos.AI para fluxos assistidos por agentes e conectores.",
  path: "/mcp/opencode",
  og: {
    title: "OpenCode + Laudos.AI",
    description: "API, MCP e integrações para times técnicos.",
  },
});

export default function Page() {
  return <PublicFeaturePage content={featurePages.mcp} />;
}
