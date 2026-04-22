import { notFound } from "next/navigation";
import { IntegrationsGrid } from "@/components/integrations-grid";
import { categories, getAppsByCategory } from "@/data/apps";
import { createPageMetadata } from "@/lib/metadata";

interface Props {
  params: Promise<{ category: string }>;
}

const validCategories = categories
  .filter((c) => c.id !== "all")
  .map((c) => c.id);

export function generateStaticParams() {
  return validCategories.map((category) => ({ category }));
}

export async function generateMetadata({ params }: Props) {
  const { category } = await params;
  const categoryData = categories.find((c) => c.id === category);

  if (!categoryData) {
    return { title: "Categoria não encontrada" };
  }

  return createPageMetadata({
    title: `Integrações ${categoryData.name} | Laudos.AI`,
    description: `Explore as integrações ${categoryData.name.toLowerCase()} da Laudos.AI para conectar editor, comunicação crítica e operação institucional ao stack da sua equipe.`,
    path: `/integrations/category/${category}`,
  });
}

export default async function Page({ params }: Props) {
  const { category } = await params;

  if (!validCategories.includes(category)) {
    notFound();
  }

  const apps = getAppsByCategory(category);

  return <IntegrationsGrid apps={apps} activeCategory={category} />;
}
