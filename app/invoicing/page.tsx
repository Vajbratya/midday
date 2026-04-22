import type { Metadata } from "next"
import { ProductPage } from "@/components/product-page"
import { Mockup } from "@/components/mockup"

export const metadata: Metadata = {
  title: "Invoicing",
  description: "Send professional invoices, get paid faster, and track everything automatically.",
}

export default function InvoicingPage() {
  return (
    <ProductPage
      eyebrow="Invoicing"
      title="Invoices that look like you made them on purpose."
      description="Draft, send, and track invoices in seconds. Reminders go out on your behalf, payments reconcile themselves, and your books stay tidy."
      visual={
        <Mockup title="Invoice · INV-2026-0412">
          <div className="grid gap-4 md:grid-cols-[2fr_1fr]">
            <div className="space-y-3">
              <Row label="Brand strategy" value="€ 4,800.00" />
              <Row label="Design system" value="€ 6,200.00" />
              <Row label="Implementation" value="€ 3,400.00" />
              <Row label="VAT (25%)" value="€ 3,600.00" muted />
              <div className="flex items-center justify-between border-t border-border pt-3">
                <span className="text-[13px] font-medium">Total</span>
                <span className="text-mono text-[15px]">€ 18,000.00</span>
              </div>
            </div>
            <div className="border-l border-border pl-4 text-[12px] text-muted-foreground space-y-3">
              <Meta label="Status" value="Sent" />
              <Meta label="Client" value="Northwind Labs" />
              <Meta label="Issued" value="Apr 22, 2026" />
              <Meta label="Due" value="May 06, 2026" />
              <Meta label="Currency" value="EUR" />
            </div>
          </div>
        </Mockup>
      }
      features={[
        { title: "Reusable templates", description: "Brand colors, logos, and defaults that persist across every invoice." },
        { title: "Auto reminders", description: "Polite, scheduled nudges — sent in your voice, not a generic tone." },
        { title: "Multi-currency", description: "Live FX rates, native currencies, clean reporting in your base." },
        { title: "Share as link", description: "Send a link instead of a PDF. Clients pay in one click." },
        { title: "Tax-aware", description: "VAT, GST, and sales tax presets for 30+ countries." },
        { title: "Recurring", description: "Retainers and subscriptions on autopilot, with receipts and summaries." },
      ]}
      bullets={[
        "Reconcile automatically against matched bank transactions",
        "Export clean PDFs for accounting or legal requirements",
        "Overdue detection with customizable follow-up cadence",
        "Full audit trail of every change and send",
      ]}
      faqs={[
        { q: "Can I use my own domain to send?", a: "Yes. Connect your sending domain so invoices arrive from you, not from us." },
        { q: "Do you support partial payments?", a: "Yes. Invoices track partial payments and automatically reconcile them." },
        { q: "Is there a limit on clients?", a: "No. Add as many clients as you want on any plan." },
      ]}
    />
  )
}

function Row({ label, value, muted }: { label: string; value: string; muted?: boolean }) {
  return (
    <div className="flex items-center justify-between border-b border-border py-2 text-[13px]">
      <span className={muted ? "text-muted-foreground" : ""}>{label}</span>
      <span className="text-mono">{value}</span>
    </div>
  )
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="uppercase tracking-[0.14em] text-[10px]">{label}</span>
      <span className="text-foreground">{value}</span>
    </div>
  )
}
