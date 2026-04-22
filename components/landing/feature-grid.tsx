import Link from "next/link"
import {
  FileText,
  Inbox,
  Sparkles,
  LineChart,
  Bot,
  MessageSquare,
  Calculator,
  Landmark,
  HardDrive,
  ArrowUpRight,
} from "lucide-react"
import { SectionHeading } from "@/components/section"

const features = [
  { href: "/invoicing", title: "Invoicing", desc: "Send professional invoices and get paid, tracked automatically.", Icon: FileText },
  { href: "/inbox", title: "Inbox", desc: "A single place for every receipt, invoice, and financial document.", Icon: Inbox },
  { href: "/assistant", title: "Assistant", desc: "Ask anything — revenue, cashflow, a specific transaction.", Icon: Sparkles },
  { href: "/insights", title: "Insights", desc: "Understand revenue, burn, and runway without a spreadsheet.", Icon: LineChart },
  { href: "/agents", title: "Agents", desc: "Autonomous workflows for categorization and reconciliation.", Icon: Bot },
  { href: "/chat", title: "Chat", desc: "Conversational access to your data, with shared threads.", Icon: MessageSquare },
  { href: "/pre-accounting", title: "Pre-accounting", desc: "Hand clean, categorized books to your accountant.", Icon: Calculator },
  { href: "/bank-coverage", title: "Bank coverage", desc: "Connect to 20,000+ banks across 30+ countries.", Icon: Landmark },
  { href: "/file-storage", title: "File storage", desc: "Keep every document tied to the right transaction.", Icon: HardDrive },
]

export function FeatureGrid() {
  return (
    <section className="border-b border-border">
      <div className="container-page py-20 md:py-28">
        <SectionHeading
          eyebrow="Product"
          title="Everything the business side of your business needs."
          description="Nine tightly integrated modules. One coherent surface. No tab-shuffling, no sync gymnastics."
        />
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-border">
          {features.map(({ href, title, desc, Icon }) => (
            <Link
              key={href}
              href={href}
              className="group relative flex flex-col gap-4 border-b border-r border-border p-6 md:p-8 hover:bg-accent/40 transition-colors"
            >
              <div className="flex items-center justify-between">
                <Icon className="h-4 w-4 text-muted-foreground" aria-hidden />
                <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              <div>
                <h3 className="text-[15px] font-medium tracking-tight">{title}</h3>
                <p className="mt-2 text-[13px] text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
