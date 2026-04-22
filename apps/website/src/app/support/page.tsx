import { SupportForm } from "@/components/support-form";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Suporte Laudos.AI",
  description:
    "Fale com a equipe da Laudos.AI para suporte, implantação institucional, integrações e dúvidas sobre o produto.",
  path: "/support",
  og: { title: "Suporte", description: "Estamos aqui para ajudar" },
});

export default function SupportPage() {
  return <SupportForm />;
}
