import { Computer } from "@/components/computer";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Computer — Agentes Autonomos para a Operacao Clinica",
  description:
    "Descreva o que precisa e a Laudos.AI monta um agente autonomo que roda com agenda, memoria e controle para sua operacao clinica.",
  path: "/computer",
  og: {
    title: "Laudos.AI Computer",
    description: "Sua operacao continua rodando quando voce sai da tela",
  },
  keywords: [
    "autonomous agents",
    "automacao clinica",
    "AI agents",
    "Laudos.AI Computer",
    "workflow radiologico",
    "scheduled agents",
  ],
});

export default function Page() {
  return <Computer />;
}
