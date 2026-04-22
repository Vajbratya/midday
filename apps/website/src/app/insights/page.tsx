import { Insights } from "@/components/insights";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Analises da Operacao",
  description:
    "Acompanhe produtividade, TAT, gargalos e evolucao da operacao com resumos automaticos e explicacoes claras.",
  path: "/insights",
  og: {
    title: "Analises",
    description: "Veja o que mudou na operacao",
  },
  keywords: [
    "analise radiologia",
    "tat radiologia",
    "produtividade radiologia",
    "gargalos operacionais",
    "analytics clinico",
  ],
});

export default function Page() {
  return <Insights />;
}
