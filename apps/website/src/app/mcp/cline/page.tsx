import { PublicFeaturePage } from "@/components/public-feature-page";
import { featurePages } from "@/content/feature-pages";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Cline + Laudos.AI via MCP",
  description:
    "Use a camada técnica da Laudos.AI em fluxos assistidos, automações e cenários de desenvolvimento.",
  path: "/mcp/cline",
  og: {
    title: "Cline + Laudos.AI",
    description: "Fluxos técnicos conectados ao workflow radiológico.",
  },
});

export default function Page() {
  return <PublicFeaturePage content={featurePages.mcp} />;
}
