import { PublicFeaturePage } from "@/components/public-feature-page";
import { featurePages } from "@/content/feature-pages";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Make + Laudos.AI",
  description:
    "Crie automações visuais em cima da API e dos conectores da Laudos.AI.",
  path: "/mcp/make",
  og: {
    title: "Make + Laudos.AI",
    description: "Automações visuais conectadas ao workflow radiológico.",
  },
});

export default function Page() {
  return <PublicFeaturePage content={featurePages.mcp} />;
}
