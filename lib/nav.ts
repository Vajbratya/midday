export type NavItem = {
  label: string
  href: string
  description?: string
}

export const productNav: NavItem[] = [
  { label: "Invoicing", href: "/invoicing", description: "Create, send, and track invoices." },
  { label: "Inbox", href: "/inbox", description: "A unified view of every financial document." },
  { label: "Assistant", href: "/assistant", description: "Ask anything about your business." },
  { label: "Insights", href: "/insights", description: "Real-time understanding of revenue and runway." },
  { label: "Agents", href: "/agents", description: "Autonomous workflows for repetitive finance work." },
  { label: "Chat", href: "/chat", description: "Conversational access to every part of your data." },
  { label: "Pre-accounting", href: "/pre-accounting", description: "Categorize, reconcile, and prepare for the books." },
  { label: "Bank coverage", href: "/bank-coverage", description: "Connect 20,000+ banks across 30+ countries." },
  { label: "File storage", href: "/file-storage", description: "Receipts, contracts, and every document, in one place." },
]

export const companyNav: NavItem[] = [
  { label: "Story", href: "/story" },
  { label: "About", href: "/about" },
  { label: "Customers", href: "/customers" },
  { label: "Pricing", href: "/pricing" },
]
