import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { baseUrl } from "@/app/sitemap";
import { ComparisonPage } from "@/components/comparison-page";
import { getAllCompetitorSlugs, getCompetitorBySlug } from "@/data/competitors";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllCompetitorSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const competitor = getCompetitorBySlug(slug);

  if (!competitor) {
    return {
      title: "Comparação não encontrada",
    };
  }

  const year = new Date().getFullYear();
  const title = `Laudos.AI vs ${competitor.name} (${year})`;
  const description = `Compare a Laudos.AI com ${competitor.name} e veja por que voz natural, editor estruturado, CRIT e integração institucional resolvem melhor o fluxo radiológico real.`;
  const url = `${baseUrl}/compare/${slug}`;

  return {
    title,
    description,
    keywords: [
      `${competitor.name.toLowerCase()} radiologia`,
      `${competitor.name.toLowerCase()} vs laudos.ai`,
      `alternativa a ${competitor.name.toLowerCase()}`,
      `${competitor.name.toLowerCase()} comparação`,
      "software radiologia",
      "laudo por voz",
      "editor de laudos",
      "achados críticos",
      "fluxo radiológico",
      "ia para radiologia",
    ],
    openGraph: {
      title,
      description,
      type: "website",
      url,
      images: [
        {
          url: `${baseUrl}/api/og/compare?name=${encodeURIComponent(competitor.name)}`,
          width: 1200,
          height: 630,
          alt: `Laudos.AI vs ${competitor.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [
        `${baseUrl}/api/og/compare?name=${encodeURIComponent(competitor.name)}`,
      ],
    },
    alternates: {
      canonical: url,
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const competitor = getCompetitorBySlug(slug);

  if (!competitor) {
    notFound();
  }

  const year = new Date().getFullYear();

  // Main page structured data
  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `Laudos.AI vs ${competitor.name} (${year})`,
    description: `Compare a Laudos.AI com ${competitor.name} no fluxo radiológico real.`,
    url: `${baseUrl}/compare/${slug}`,
    mainEntity: {
      "@type": "SoftwareApplication",
      name: "Laudos.AI",
      applicationCategory: "MedicalBusinessApplication",
      operatingSystem: "Web, mobile browser",
      description:
        "Software radiológico com voz natural, editor estruturado, CRIT e integração institucional.",
      offers: {
        "@type": "Offer",
        price: "49",
        priceCurrency: "BRL",
        description: "Plano inicial para uso individual e residente",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        ratingCount: "100",
      },
    },
    about: {
      "@type": "SoftwareApplication",
      name: competitor.name,
      applicationCategory: "MedicalBusinessApplication",
    },
  };

  // FAQ structured data for rich results
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: competitor.faq.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <ComparisonPage competitor={competitor} />
    </>
  );
}
