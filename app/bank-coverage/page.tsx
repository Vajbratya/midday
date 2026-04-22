import type { Metadata } from "next"
import { ProductPage } from "@/components/product-page"
import { Mockup } from "@/components/mockup"

export const metadata: Metadata = {
  title: "Bank coverage",
  description: "Connect 20,000+ banks across 30+ countries. Reliably.",
}

const banks = [
  "JPMorgan Chase", "Bank of America", "Wells Fargo", "HSBC", "Barclays",
  "BNP Paribas", "Deutsche Bank", "ING", "Santander", "Nordea",
  "Handelsbanken", "SEB", "Swedbank", "Revolut", "Wise",
  "N26", "Mercury", "Brex", "Monzo", "Starling",
]

export default function BankCoveragePage() {
  return (
    <ProductPage
      eyebrow="Bank coverage"
      title="Coverage you can actually rely on."
      description="We connect to 20,000+ banks across 30+ countries — with multiple redundant providers so your data keeps flowing even when a single provider has a bad day."
      visual={
        <Mockup title="Banks · 20,000+ supported">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-px border border-border bg-border">
            {banks.map((b) => (
              <div
                key={b}
                className="flex items-center justify-center bg-card p-4 text-[13px] text-foreground/80 text-center"
              >
                {b}
              </div>
            ))}
          </div>
        </Mockup>
      }
      features={[
        { title: "Redundant providers", description: "Multiple upstream providers per region for reliability." },
        { title: "30+ countries", description: "Strong coverage across EU, UK, US, Nordics, and Canada." },
        { title: "Credit cards", description: "Business and corporate card data, not just bank accounts." },
        { title: "Multi-account", description: "Connect as many accounts and entities as you need." },
        { title: "Live webhooks", description: "Transactions appear in seconds, not hours." },
        { title: "Data portability", description: "Raw transaction history is yours to export, always." },
      ]}
      bullets={[
        "Secure read-only access — we can&apos;t move your money",
        "Connections monitored and automatically healed where possible",
        "Status page when an upstream provider is slow or down",
      ]}
    />
  )
}
