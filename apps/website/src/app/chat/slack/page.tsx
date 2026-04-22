import { PublicFeaturePage } from "@/components/public-feature-page";
import { featurePages } from "@/content/feature-pages";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Alertas operacionais via Slack",
  description:
    "Leve sinais da operação radiológica, alertas e contexto da Laudos.AI para o workspace da equipe.",
  path: "/chat/slack",
  og: {
    title: "Slack + Laudos.AI",
    description: "Alertas operacionais e contexto de equipe.",
  },
});

export default function Page() {
  return <PublicFeaturePage content={featurePages.chat} />;
}
