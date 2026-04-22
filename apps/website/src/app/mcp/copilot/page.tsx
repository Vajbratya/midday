import { PublicFeaturePage } from "@/components/public-feature-page";
import { featurePages } from "@/content/feature-pages";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Copilot Studio + Laudos.AI",
  description:
    "Conecte a operação radiológica da Laudos.AI a copilotos institucionais com API e MCP.",
  path: "/mcp/copilot",
  og: {
    title: "Copilot Studio + Laudos.AI",
    description: "Integração programática com governança institucional.",
  },
});

export default function Page() {
  return <PublicFeaturePage content={featurePages.mcp} />;
}
