import type { Metadata } from "next"
import { ProductPage } from "@/components/product-page"
import { Mockup } from "@/components/mockup"

export const metadata: Metadata = {
  title: "Pre-accounting",
  description: "Categorize, reconcile, and prepare your books for your accountant.",
}

export default function PreAccountingPage() {
  return (
    <ProductPage
      eyebrow="Pre-accounting"
      title="Hand your accountant a clean month."
      description="Midday categorizes, reconciles, and attaches documents — so what your accountant receives is a clean, self-explanatory set of books, not a mystery."
      visual={
        <Mockup title="March 2026 · Close">
          <div className="grid gap-3 md:grid-cols-3">
            <Stat label="Transactions" value="312" note="all categorized" />
            <Stat label="Receipts attached" value="287" note="92%" />
            <Stat label="Unreconciled" value="4" note="flagged for review" />
          </div>
          <div className="mt-6 border border-border">
            {[
              { cat: "Software", n: 48, amount: "€ 3,842.00" },
              { cat: "Payroll", n: 6, amount: "€ 28,400.00" },
              { cat: "Travel", n: 12, amount: "€ 2,220.50" },
              { cat: "Meals", n: 18, amount: "€ 641.40" },
              { cat: "Office", n: 9, amount: "€ 1,205.00" },
            ].map((r) => (
              <div
                key={r.cat}
                className="grid grid-cols-[1fr_auto_auto] items-center gap-6 border-b border-border px-4 py-3 text-[13px] last:border-b-0"
              >
                <div>{r.cat}</div>
                <div className="text-muted-foreground text-[12px]">{r.n} items</div>
                <div className="text-mono">{r.amount}</div>
              </div>
            ))}
          </div>
        </Mockup>
      }
      features={[
        { title: "Smart categories", description: "Rules plus inference — adapts to how your business actually spends." },
        { title: "Reconciliation", description: "Match bank lines to documents with confidence scores." },
        { title: "Accountant exports", description: "Accountant-ready packages with originals attached." },
        { title: "Multi-entity", description: "Keep multiple companies clean and separate." },
        { title: "Locked periods", description: "Lock a month once it&apos;s closed. Changes require review." },
        { title: "Audit trail", description: "Every edit logged with who, when, and why." },
      ]}
      bullets={[
        "Works with most accounting software via export",
        "Your accountant can be invited as a read-only collaborator",
        "Month-end becomes a review, not a reconstruction",
      ]}
    />
  )
}

function Stat({ label, value, note }: { label: string; value: string; note: string }) {
  return (
    <div className="border border-border p-4">
      <div className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground">{label}</div>
      <div className="mt-2 text-mono text-2xl">{value}</div>
      <div className="mt-1 text-[12px] text-muted-foreground">{note}</div>
    </div>
  )
}
