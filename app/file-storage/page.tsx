import type { Metadata } from "next"
import { ProductPage } from "@/components/product-page"
import { Mockup } from "@/components/mockup"

export const metadata: Metadata = {
  title: "File storage",
  description: "Receipts, contracts, and every document — linked to the right transaction.",
}

const files = [
  { name: "Contract — Northwind Labs.pdf", size: "482 KB", type: "Contract" },
  { name: "Receipt — AWS Mar.pdf", size: "68 KB", type: "Receipt" },
  { name: "Invoice — 2026-0412.pdf", size: "112 KB", type: "Invoice" },
  { name: "Payroll — Mar.csv", size: "9 KB", type: "Payroll" },
  { name: "Agreement — Helix.pdf", size: "540 KB", type: "Contract" },
]

export default function FileStoragePage() {
  return (
    <ProductPage
      eyebrow="File storage"
      title="Every document, in one place — and tied to the right line."
      description="Drop in contracts, receipts, and statements. Midday attaches them to the right transactions, keeps versions, and makes search actually work."
      visual={
        <Mockup title="Vault · 1,204 files">
          <div className="border border-border">
            <div className="grid grid-cols-[1fr_auto_auto] gap-4 border-b border-border bg-muted px-4 py-2 text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              <div>File</div>
              <div>Type</div>
              <div className="text-right">Size</div>
            </div>
            {files.map((f) => (
              <div
                key={f.name}
                className="grid grid-cols-[1fr_auto_auto] items-center gap-4 border-b border-border px-4 py-3 text-[13px] last:border-b-0"
              >
                <div>{f.name}</div>
                <div className="text-muted-foreground text-[12px]">{f.type}</div>
                <div className="text-mono text-right text-[12px]">{f.size}</div>
              </div>
            ))}
          </div>
        </Mockup>
      }
      features={[
        { title: "Auto-linking", description: "New receipts attach to the matching bank transaction." },
        { title: "Full-text search", description: "Search inside PDFs, images, and attachments." },
        { title: "Versioning", description: "Every edit and replacement is preserved." },
        { title: "Permissions", description: "Per-folder access for collaborators and accountants." },
        { title: "Retention", description: "Keep records for as long as your jurisdiction requires." },
        { title: "Bulk import", description: "Drag in a year&apos;s worth of receipts — we&apos;ll file them." },
      ]}
      bullets={[
        "Encrypted at rest and in transit",
        "Exports keep folder and metadata structure",
        "Accountant-ready download of any period",
      ]}
    />
  )
}
