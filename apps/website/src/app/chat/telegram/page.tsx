import { PublicFeaturePage } from "@/components/public-feature-page";
import { featurePages } from "@/content/feature-pages";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Fluxos assistidos e comunicação no Telegram",
  description:
    "Explore como a Laudos.AI pode distribuir sinais de operação e comunicação de forma mais estruturada em canais complementares.",
  path: "/chat/telegram",
  og: {
    title: "Telegram + Laudos.AI",
    description: "Canais complementares para operação e suporte.",
  },
});

export default function Page() {
  return <PublicFeaturePage content={featurePages.chat} />;
}
