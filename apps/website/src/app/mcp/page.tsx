import { PublicFeaturePage } from "@/components/public-feature-page";
import { featurePages } from "@/content/feature-pages";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "API e MCP para integrar a Laudos.AI",
  description:
    "Conecte a Laudos.AI ao seu stack tecnico com API e MCP para fluxos clinicos, automacoes, agentes e integracoes institucionais.",
  path: "/mcp",
  og: {
    title: "API e MCP",
    description: "Leve o workflow radiologico para os sistemas e agentes que voce ja usa.",
  },
  keywords: [
    "api laudos",
    "mcp radiologia",
    "integracao hospitalar",
    "agentes com mcp",
  ],
});

export default function Page() {
  return <PublicFeaturePage content={featurePages.mcp} />;
}
