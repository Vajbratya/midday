import { PublicFeaturePage } from "@/components/public-feature-page";
import { featurePages } from "@/content/feature-pages";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "n8n + Laudos.AI",
  description:
    "Construa automações de operação radiológica com API, MCP e sinais reais do produto.",
  path: "/mcp/n8n",
  og: {
    title: "n8n + Laudos.AI",
    description: "Workflows automatizados sobre a infraestrutura da plataforma.",
  },
});

export default function Page() {
  return <PublicFeaturePage content={featurePages.mcp} />;
}
