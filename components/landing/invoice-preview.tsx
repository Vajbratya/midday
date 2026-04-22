import { SectionHeading } from "@/components/section"
import { Cta } from "@/components/cta"

export function InvoicePreview() {
  return (
    <section className="border-b border-border">
      <div className="container-page py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <SectionHeading
              eyebrow="Invoicing"
              title="Invoices that feel as considered as your work."
              description="Draft, send, and track invoices in seconds. Automatic reminders, multi-currency, tax-aware, and wired to your accounting so nothing slips."
            />
            <ul className="mt-8 space-y-3 text-[14px]">
              {[
                "Reusable templates and saved clients",
                "Scheduled sending and gentle reminders",
                "Multi-currency with live FX rates",
                "PDF, link, and email delivery",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-foreground/80">
                  <span className="mt-[7px] h-1 w-3 bg-foreground" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Cta href="/invoicing" variant="secondary" withArrow>Explore invoicing</Cta>
            </div>
          </div>

          <div className="relative border border-border bg-card p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-mono text-[12px] uppercase tracking-[0.18em] text-muted-foreground">Invoice</div>
                <div className="mt-1 text-[20px] font-medium tracking-tight">#2026-0412</div>
              </div>
              <div className="text-right">
                <div className="text-mono text-[12px] uppercase tracking-[0.18em] text-muted-foreground">Due</div>
                <div className="mt-1 text-[14px]">May 06, 2026</div>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-6 text-[13px]">
              <div>
                <div className="text-muted-foreground">From</div>
                <div className="mt-1">Acme Studio AB</div>
                <div className="text-muted-foreground">Stockholm, Sweden</div>
              </div>
              <div>
                <div className="text-muted-foreground">To</div>
                <div className="mt-1">Northwind Labs</div>
                <div className="text-muted-foreground">Berlin, Germany</div>
              </div>
            </div>

            <div className="mt-8 border-t border-border">
              <Row label="Brand strategy" value="€ 4,800.00" />
              <Row label="Design system" value="€ 6,200.00" />
              <Row label="Implementation" value="€ 3,400.00" />
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
              <div className="text-[12px] uppercase tracking-[0.18em] text-muted-foreground">Total</div>
              <div className="text-mono text-[18px]">€ 14,400.00</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between border-b border-border py-3 text-[13px]">
      <span>{label}</span>
      <span className="text-mono">{value}</span>
    </div>
  )
}
