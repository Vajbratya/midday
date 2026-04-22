import { Icons } from "@midday/ui/icons";
import { ChatPlatformPage } from "@/components/chat-platform-page";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "CRIT no iMessage",
  description:
    "Receba achados criticos, confirme ciencia e acompanhe escalonamentos do CRIT sem sair do Mensagens.",
  path: "/chat/imessage",
  og: {
    title: "CRIT no iMessage",
    description: "Comunicacao critica no Mensagens",
  },
  keywords: [
    "imessage crit",
    "achado critico",
    "radiologia imessage",
    "comunicacao critica",
    "sla radiologia",
  ],
});

const config = {
  name: "iMessage",
  slug: "imessage",
  appId: "sendblue",
  icon: <Icons.IMessage size={40} className="h-10 w-10" />,
  description:
    "Conecte o CRIT da Laudos.AI ao iMessage e receba comunicacoes criticas sem sair das conversas. Veja o caso, confirme ciencia e acompanhe status.",
  steps: [
    {
      title: "Abrir Apps na Laudos.AI",
      description: "Entre em Apps e escolha iMessage.",
      href: "https://copilot.laudos.ai",
    },
    {
      title: "Conectar o canal",
      description:
        "Siga o fluxo de pareamento do numero para autorizar o canal.",
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
  settingsPath: "Apps \u2192 iMessage \u2192 Configuracoes",
};

export default function Page() {
  return <ChatPlatformPage config={config} />;
}
