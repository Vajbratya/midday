import { PublicFeaturePage } from "@/components/public-feature-page";
import { featurePages } from "@/content/feature-pages";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Claude + Laudos.AI via MCP",
  description:
    "Leve o contexto da operação radiológica da Laudos.AI para copilotos e agentes com governança.",
  path: "/mcp/claude",
  og: {
    title: "Claude + Laudos.AI",
    description: "MCP para copilotos com contexto clínico e operacional.",
  },
});

export default function Page() {
  return <PublicFeaturePage content={featurePages.mcp} />;
}
