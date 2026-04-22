import type { Metadata } from "next"
import { ProductPage } from "@/components/product-page"
import { Mockup } from "@/components/mockup"

export const metadata: Metadata = {
  title: "Insights",
  description: "A clear, quiet view of revenue, expenses, and runway. Without the spreadsheet.",
}

export default function InsightsPage() {
  return (
    <ProductPage
      eyebrow="Insights"
      title="Know where you stand. Not where you stood."
      description="Revenue, burn, runway, top clients, and categories — updated continuously as transactions arrive. No dashboards to maintain."
      visual={
        <Mockup title="Insights · Last 6 months">
          <div className="grid gap-6 md:grid-cols-4">
            <Kpi label="MRR" value="€ 48,200" delta="+ 6.4%" />
            <Kpi label="Burn (avg)" value="€ 41,900" delta="- 2.1%" />
            <Kpi label="Runway" value="11.4 mo" delta="+ 0.7 mo" />
            <Kpi label="Top client" value="Northwind" delta="€ 14,400" />
          </div>
          <div className="mt-6 border border-border">
            <div className="flex items-end gap-1 h-40 p-4">
              {[34, 40, 38, 48, 46, 52, 58, 54, 62, 60, 68, 72].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 bg-foreground/80"
                  style={{ height: `${h}%` }}
                  aria-hidden
                />
              ))}
            </div>
            <div className="border-t border-border px-4 py-2 text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              Monthly revenue — trailing 12 months
            </div>
          </div>
        </Mockup>
      }
      features={[
        { title: "Revenue by client", description: "See who actually drives the business, not just who invoices most." },
        { title: "Category breakdown", description: "Where money goes, at a glance, without tagging manually." },
        { title: "Runway", description: "Forward-looking burn based on your real cadence, not averages." },
        { title: "Cohorts & retention", description: "Recurring revenue, expansion, and churn for subscription work." },
        { title: "Custom periods", description: "Compare any range — fiscal year, quarter, month, or sprint." },
        { title: "Exports", description: "CSV, Numbers, Excel, and accountant-friendly PDFs." },
      ]}
      bullets={[
        "Real-time updates as transactions clear",
        "Multi-currency with automatic base conversion",
        "Filter by project, client, or tag",
      ]}
    />
  )
}

function Kpi({ label, value, delta }: { label: string; value: string; delta: string }) {
  return (
    <div className="border border-border p-4">
      <div className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground">{label}</div>
      <div className="mt-2 text-mono text-xl">{value}</div>
      <div className="mt-1 text-[12px] text-muted-foreground">{delta}</div>
    </div>
  )
}
