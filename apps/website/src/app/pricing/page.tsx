import { Pricing } from "@/components/pricing";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Planos e preços da Laudos.AI",
  description:
    "Escolha o plano ideal para residente, uso individual ou implantação institucional com CRIT, integrações PACS/RIS e governança enterprise.",
  path: "/pricing",
  og: {
    title: "Planos Laudos.AI",
    description: "Do residente ao hospital, com IA aplicada ao fluxo real.",
  },
  keywords: [
    "preços laudos ai",
    "plano residente radiologia",
    "enterprise radiologia",
    "laudos com ia",
  ],
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Laudos.AI",
  applicationCategory: "MedicalBusinessApplication",
  operatingSystem: "Web, mobile browser",
  description:
    "Software de laudo radiológico com voz natural, IA assistiva, templates institucionais, CRIT e integração PACS/RIS.",
  offers: {
    "@type": "Offer",
    price: "49",
    priceCurrency: "BRL",
    description: "Plano RadRes+ disponível",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    ratingCount: "100",
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Pricing />
    </>
  );
}
