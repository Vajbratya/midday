import { Icons } from "@midday/ui/icons";
import { ChatPlatformPage } from "@/components/chat-platform-page";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "CRIT no Slack",
  description:
    "Receba achados criticos, confirme ciencia e acompanhe escalonamentos do CRIT sem sair do Slack.",
  path: "/chat/slack",
  og: {
    title: "CRIT no Slack",
    description: "Comunicacao critica no Slack",
  },
  keywords: [
    "slack crit",
    "achado critico",
    "radiologia slack",
    "comunicacao critica",
    "sla radiologia",
  ],
});

const config = {
  name: "Slack",
  slug: "slack",
  appId: "slack",
  icon: <Icons.Slack size={40} className="h-10 w-10" />,
  description:
    "Conecte o CRIT da Laudos.AI ao Slack e acompanhe comunicacoes criticas no canal ou em mensagens diretas com contexto do caso.",
  steps: [
    {
      title: "Abrir Apps na Laudos.AI",
      description: "Entre em Apps e escolha Slack.",
      href: "https://copilot.laudos.ai",
    },
    {
      title: "Instalar no workspace",
      description:
        "Autorize o Slack, escolha o canal ou use mensagens diretas para receber os alertas.",
    },
    {
      title: "Enviar a primeira mensagem",
      description:
        'Experimente responder "ciente" em um alerta ou pedir o historico do caso.',
    },
  ],
  notifications: [
    "Novo achado critico com SLA",
    "Leitura e confirmacao de ciencia",
    "Escalonamentos pendentes",
    "Mudanca de status do caso",
  ],
  capabilities: [
    "Receber alertas criticos no canal",
    "Confirmar ciencia com rastreabilidade",
    "Consultar historico e contexto do caso",
    "Compartilhar observacoes e anexos",
    "Acompanhar status em tempo real",
  ],
  settingsPath: "Apps \u2192 Slack \u2192 Configuracoes",
};

export default function Page() {
  return <ChatPlatformPage config={config} />;
}
