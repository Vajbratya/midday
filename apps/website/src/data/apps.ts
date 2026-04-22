export interface WebsiteApp {
  id: string;
  name: string;
  slug: string;
  category: string;
  active: boolean;
  beta?: boolean;
  short_description: string;
  description: string | null;
  features: string[];
  installUrl?: string;
  logoUrl?: string;
}

export const apps: WebsiteApp[] = [
  {
    id: "connector-pacs",
    name: "PACS / RIS",
    slug: "pacs-ris",
    category: "clinical",
    active: true,
    short_description:
      "Integração nativa com a infraestrutura existente da clínica ou hospital.",
    description:
      "Leve o editor, a estruturação por IA e o fluxo de laudo para dentro da operação existente. A proposta é reduzir retrabalho, não criar mais uma ilha de software.",
    features: [
      "Integração com sistemas PACS e RIS",
      "Entrega de laudo sem quebrar o fluxo atual",
      "Base para implantações enterprise",
      "Menos cópia e cola entre sistemas",
    ],
  },
  {
    id: "connector-crit",
    name: "CRIT Mobile",
    slug: "crit-mobile",
    category: "communication",
    active: true,
    beta: true,
    short_description:
      "Notificações seguras, registro de ciência e SLA para achados críticos.",
    description:
      "O CRIT fecha o ciclo de comunicação de achados críticos com fila priorizada, rastreabilidade e prova jurídica para a instituição.",
    features: [
      "Registro de ciência com carimbo de tempo",
      "Escalação e auditoria institucional",
      "Priorização por criticidade e setor",
      "Base segura para comunicação sensível",
    ],
  },
  {
    id: "gmail",
    name: "Gmail",
    slug: "gmail",
    category: "communication",
    active: true,
    short_description:
      "Centralize anexos e referências enviados por email no mesmo fluxo.",
    description:
      "Use email como ponto de entrada para anexos, pedidos e documentos de apoio sem perder organização no editor e na operação.",
    features: [
      "Entrada de anexos e referências por email",
      "Organização no fluxo da operação",
      "Menos dispersão entre caixas de entrada",
      "Melhor contexto para o laudo",
    ],
  },
  {
    id: "outlook",
    name: "Outlook",
    slug: "outlook",
    category: "communication",
    active: true,
    short_description:
      "Mesma lógica de captura para ambientes corporativos baseados em Microsoft.",
    description:
      "Leve a entrada por email para o contexto institucional sem depender de processos manuais ou anexos espalhados.",
    features: [
      "Captura de anexos por email",
      "Fluxo compatível com operação corporativa",
      "Contexto unificado para o editor",
      "Menos dependência de repasse manual",
    ],
  },
  {
    id: "slack",
    name: "Slack",
    slug: "slack",
    category: "communication",
    active: true,
    short_description:
      "Acompanhe operação, alertas e sinais da plataforma dentro do Slack.",
    description:
      "Leve alertas operacionais, comunicações relevantes e sinais da plataforma para o workspace da equipe.",
    features: [
      "Alertas operacionais em canais definidos",
      "Apoio a fluxos internos de equipe",
      "Visibilidade mais rápida para gestão",
      "Menos dependência de checagem manual",
    ],
  },
  {
    id: "whatsapp",
    name: "WhatsApp",
    slug: "whatsapp",
    category: "communication",
    active: true,
    short_description:
      "Canal auxiliar para onboarding e fluxos de contato, sem substituir conformidade clínica.",
    description:
      "Use o canal onde sua operação já conversa para acelerar contato e suporte, enquanto o CRIT cobre o fluxo sensível com rastreabilidade e prova.",
    features: [
      "Suporte e onboarding mais próximos da equipe",
      "Canal familiar para adesão ao produto",
      "Complementa o fluxo clínico sem substituí-lo",
      "Mais capilaridade em implantações",
    ],
  },
  {
    id: "google-drive",
    name: "Google Drive",
    slug: "google-drive",
    category: "storage",
    active: true,
    short_description:
      "Organize ativos institucionais, modelos e documentos de apoio.",
    description:
      "Conecte a base documental da operação ao ecossistema da Laudos.AI para ter mais consistência entre templates, referenciais e materiais internos.",
    features: [
      "Organização de materiais institucionais",
      "Base mais acessível para equipes",
      "Menos arquivos soltos na operação",
      "Apoio ao rollout de templates e padrões",
    ],
  },
  {
    id: "dropbox",
    name: "Dropbox",
    slug: "dropbox",
    category: "storage",
    active: true,
    short_description:
      "Sincronize documentos de apoio e ativos usados pela equipe.",
    description:
      "Para operações que já usam Dropbox como repositório, a integração facilita manter referências e materiais mais próximos do fluxo real.",
    features: [
      "Sincronização de ativos relevantes ao fluxo",
      "Base documental mais padronizada",
      "Menos dependência de compartilhamento manual",
      "Melhor apoio a equipes distribuídas",
    ],
  },
  {
    id: "chatgpt-mcp",
    name: "ChatGPT",
    slug: "chatgpt-mcp",
    category: "developer",
    active: true,
    short_description:
      "Conecte dados, templates e fluxos da Laudos.AI a copilotos e agentes.",
    description:
      "Use MCP para levar partes do workflow radiológico a agentes e copilotos com contexto real do produto.",
    features: [
      "Acesso via MCP",
      "Base para copilotos internos",
      "Fluxos automatizados com contexto real",
      "Melhor encaixe com stack técnico",
    ],
    installUrl: "https://www.laudos.ai/mcp",
  },
  {
    id: "claude-mcp",
    name: "Claude",
    slug: "claude-mcp",
    category: "developer",
    active: true,
    short_description:
      "Conecte agentes e assistentes ao contexto operacional da plataforma.",
    description:
      "Leve contexto de editor, templates e operação institucional para agentes que precisam consultar ou acionar partes do workflow.",
    features: [
      "Acesso seguro ao contexto do produto",
      "Uso em copilotos e automações",
      "Permissões e governança",
      "Integração com o stack técnico da equipe",
    ],
    installUrl: "https://www.laudos.ai/mcp",
  },
  {
    id: "cursor-mcp",
    name: "Cursor",
    slug: "cursor-mcp",
    category: "developer",
    active: true,
    short_description:
      "Integre a camada técnica da Laudos.AI ao ambiente de desenvolvimento da sua equipe.",
    description:
      "Ideal para times que estão construindo conectores, automações ou fluxos internos em cima da infraestrutura da plataforma.",
    features: [
      "MCP para fluxo de desenvolvimento",
      "Mais velocidade para integrações internas",
      "Conexão com API e stack técnico",
      "Base para automações customizadas",
    ],
    installUrl: "https://www.laudos.ai/mcp",
  },
  {
    id: "connector-api",
    name: "API",
    slug: "api",
    category: "developer",
    active: true,
    short_description:
      "Acesso programático para cenários enterprise e integrações customizadas.",
    description:
      "Quando o hospital ou parceiro precisa integrar em profundidade, a API abre caminho para levar a plataforma ao fluxo local com mais controle.",
    features: [
      "Integrações customizadas",
      "Base para cenários enterprise",
      "Conexão com sistemas internos",
      "Governança para operações sensíveis",
    ],
    installUrl: "https://www.laudos.ai/mcp",
  },
];

export const categories = [
  { id: "all", name: "Todas" },
  { id: "clinical", name: "Clínicas" },
  { id: "communication", name: "Comunicação" },
  { id: "storage", name: "Arquivos" },
  { id: "developer", name: "API e MCP" },
];

export function getAppBySlug(slug: string): WebsiteApp | undefined {
  return apps.find((app) => app.slug === slug);
}

export function getAppsByCategory(category: string): WebsiteApp[] {
  if (category === "all") return apps;
  return apps.filter((app) => app.category === category);
}

export function getCategoryName(categoryId: string): string {
  const category = categories.find((c) => c.id === categoryId);
  return category?.name || categoryId;
}

export function getAllSlugs(): string[] {
  return apps.map((app) => app.slug);
}
