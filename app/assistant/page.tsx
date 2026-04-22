import type { Metadata } from "next"
import { ProductPage } from "@/components/product-page"
import { Mockup } from "@/components/mockup"

export const metadata: Metadata = {
  title: "Assistant",
  description: "Ask anything about your business. Your numbers, your runway, your clients.",
}

export default function AssistantPage() {
  return (
    <ProductPage
      eyebrow="Assistant"
      title="Ask your business anything."
      description="Revenue last quarter. Top clients by margin. What you spent on software in March. The assistant knows your data, your categories, and your context."
      visual={
        <Mockup title="Assistant">
          <div className="space-y-4 text-[14px]">
            <div className="flex justify-end">
              <div className="max-w-[80%] border border-border bg-accent px-4 py-2">
                What was our burn rate last quarter?
              </div>
            </div>
            <div className="max-w-[80%] border border-border px-4 py-3 space-y-3">
              <p>Your average monthly burn in Q1 was <span className="text-mono">€ 42,180</span>.</p>
              <div className="grid grid-cols-3 gap-2 text-[12px] text-muted-foreground">
                <Cell label="Jan" value="€ 39,220" />
                <Cell label="Feb" value="€ 44,020" />
                <Cell label="Mar" value="€ 43,300" />
              </div>
              <p className="text-muted-foreground text-[12px]">
                Sources: 214 transactions, 3 bank accounts, 1 payroll provider.
              </p>
            </div>
            <div className="flex justify-end">
              <div className="max-w-[80%] border border-border bg-accent px-4 py-2">
                What&apos;s our runway at this pace?
              </div>
            </div>
            <div className="max-w-[80%] border border-border px-4 py-3">
              Based on current balance and 3-month average burn: <span className="text-mono">11.4 months</span>.
            </div>
          </div>
        </Mockup>
      }
      features={[
        { title: "Grounded in your data", description: "Every answer cites the transactions and documents it used." },
        { title: "Natural language", description: "Ask the way you&apos;d ask a CFO. No formulas, no filters." },
        { title: "Saved questions", description: "Pin the answers you check every Monday morning." },
        { title: "Thread history", description: "Every conversation is archived and searchable." },
        { title: "Shareable", description: "Send an answer to a teammate or accountant in a click." },
        { title: "Private by default", description: "Your prompts are never used to train shared models." },
      ]}
      bullets={[
        "Ask in English, Swedish, German, French, Spanish, or Portuguese",
        "Context window covers transactions, invoices, documents, and clients",
        "Explainable — every answer shows its sources",
      ]}
    />
  )
}

function Cell({ label, value }: { label: string; value: string }) {
  return (
    <div className="border border-border p-2">
      <div className="uppercase tracking-[0.14em] text-[10px]">{label}</div>
      <div className="mt-1 text-mono text-foreground">{value}</div>
    </div>
  )
}
