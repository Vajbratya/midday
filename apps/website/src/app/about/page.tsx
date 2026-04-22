import { AboutPage as AboutPageContent } from "@/components/about-page";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Sobre a Laudos.AI",
  description:
    "A Laudos.AI constroi software para o momento mais critico da radiologia: quando a imagem precisa virar decisao, laudo e comunicacao segura.",
  path: "/about",
  og: {
    title: "Sobre a Laudos.AI",
    description: "Para tudo o que vem depois da imagem.",
  },
});

export default function AboutPage() {
  return <AboutPageContent />;
}
