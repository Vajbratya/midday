import { AboutPage as AboutPageContent } from "@/components/about-page";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "História da Laudos.AI",
  description:
    "Por que construímos software para o momento mais crítico da radiologia: quando a imagem precisa virar laudo, decisão e comunicação segura.",
  path: "/story",
  og: {
    title: "História da Laudos.AI",
    description: "Para tudo o que vem depois da imagem.",
  },
});

export default function StoryPage() {
  return <AboutPageContent />;
}
