import type { Metadata } from "next"
import { ProductPage } from "@/components/product-page"
import { Mockup } from "@/components/mockup"

export const metadata: Metadata = {
  title: "Inbox",
  description: "A unified inbox for every receipt, invoice, and financial document.",
}

const rows = [
  { vendor: "Figma", amount: "$ 15.00", status: "Matched", date: "Apr 21" },
  { vendor: "Linear", amount: "$ 29.00", status: "Matched", date: "Apr 20" },
  { vendor: "Vercel", amount: "$ 80.00", status: "Pending", date: "Apr 20" },
  { vendor: "Notion", amount: "$ 18.00", status: "Matched", date: "Apr 19" },
  { vendor: "Google Workspace", amount: "$ 12.00", status: "Matched", date: "Apr 18" },
  { vendor: "Cursor", amount: "$ 20.00", status: "Unmatched", date: "Apr 16" },
]

export default function InboxPage() {
  return (
    <ProductPage
      eyebrow="Inbox"
      title="One inbox for every receipt, invoice, and statement."
      description="Forward, scan, or connect. Midday extracts details, matches them to transactions, and files the originals — so month-end stops being an archaeology expedition."
      visual={
        <Mockup title="Inbox · 128 items">
          <div className="overflow-hidden border border-border">
            <div className="grid grid-cols-[1fr_auto_auto_auto] gap-4 border-b border-border bg-muted px-4 py-2 text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              <div>Vendor</div>
              <div className="text-right">Amount</div>
              <div>Status</div>
              <div>Date</div>
            </div>
            {rows.map((r) => (
              <div
                key={r.vendor}
                className="grid grid-cols-[1fr_auto_auto_auto] items-center gap-4 border-b border-border px-4 py-3 text-[13px] last:border-b-0"
              >
                <div>{r.vendor}</div>
                <div className="text-mono text-right">{r.amount}</div>
                <div>
                  <span
                    className={
                      "inline-flex border border-border px-2 py-0.5 text-[11px] " +
                      (r.status === "Matched"
                        ? "text-foreground"
                        : r.status === "Pending"
                          ? "text-muted-foreground"
                          : "bg-foreground text-background border-foreground")
                    }
                  >
                    {r.status}
                  </span>
                </div>
                <div className="text-muted-foreground text-mono text-[12px]">{r.date}</div>
              </div>
            ))}
          </div>
        </Mockup>
      }
      features={[
        { title: "Forward-to-inbox", description: "A unique address for your receipts — no more screenshot workflows." },
        { title: "OCR & extraction", description: "Vendor, amount, tax, and date pulled from any receipt or PDF." },
        { title: "Auto-match", description: "Documents matched to the right bank transaction, every time." },
        { title: "Gmail & Outlook", description: "Connect your mailbox to pull in subscriptions automatically." },
        { title: "Drag-and-drop", description: "Drop anything in — PDFs, images, EML files — and we&apos;ll sort it." },
        { title: "Accountant-ready", description: "Exports keep the original document attached to every line." },
      ]}
      bullets={[
        "Attachments stay linked to transactions forever",
        "Duplicate detection catches the same receipt twice",
        "Flag items for review with a one-line note",
      ]}
    />
  )
}
