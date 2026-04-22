import { MCP } from "@/components/mcp";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "MCP para Claude, ChatGPT, Cursor e Mais",
  description:
    "Leve casos, laudos, CRIT e contexto clinico para qualquer agente via MCP a partir de Cursor, Claude, ChatGPT, Raycast ou Zapier.",
  path: "/mcp",
  og: {
    title: "MCP",
    description: "Laudos.AI em qualquer agente",
  },
  keywords: [
    "MCP",
    "Model Context Protocol",
    "integracao ai",
    "Claude MCP",
    "Cursor MCP",
    "automacao radiologica",
  ],
});

export default function Page() {
  return <MCP />;
}
