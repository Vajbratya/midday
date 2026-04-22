import type { Metadata } from "next"
import { ProductPage } from "@/components/product-page"
import { Mockup } from "@/components/mockup"

export const metadata: Metadata = {
  title: "Chat",
  description: "Shared, conversational access to your company finances.",
}

export default function ChatPage() {
  return (
    <ProductPage
      eyebrow="Chat"
      title="A finance-native chat for your team."
      description="Threads your accountant, co-founder, or finance lead can join. Context, documents, and answers are all in one place — with full history and no lost screenshots."
      visual={
        <Mockup title="# finance">
          <div className="space-y-4 text-[14px]">
            <Message who="You" ts="10:42">
              Can we afford to bring on another senior designer next quarter?
            </Message>
            <Message who="Midday" ts="10:42" muted>
              At current burn, runway drops from 11.4 to 8.7 months with a senior hire at €8,500/mo.
              If MRR growth holds at 6% MoM, runway stabilizes by month four.
            </Message>
            <Message who="Iris" ts="10:45">
              Let&apos;s revisit after Q2 numbers close.
            </Message>
          </div>
        </Mockup>
      }
      features={[
        { title: "Shared threads", description: "Invite your accountant or co-founder directly into a thread." },
        { title: "Answers with context", description: "Every response ties to transactions, invoices, or documents." },
        { title: "Archives", description: "Thread history is searchable, exportable, and permanent." },
        { title: "Notifications", description: "Get pinged only when something actually changes." },
        { title: "Roles", description: "Read-only, collaborator, and owner permissions." },
        { title: "Export", description: "Export a thread as a document for records." },
      ]}
      bullets={[
        "Keep finance decisions in one reviewable surface",
        "No more DMs with screenshots of spreadsheets",
        "Accountants can drop in without a full seat",
      ]}
    />
  )
}

function Message({
  who,
  ts,
  children,
  muted,
}: {
  who: string
  ts: string
  children: React.ReactNode
  muted?: boolean
}) {
  return (
    <div className="border border-border p-4">
      <div className="flex items-center justify-between text-[12px] text-muted-foreground">
        <span className={muted ? "" : "text-foreground"}>{who}</span>
        <span className="text-mono">{ts}</span>
      </div>
      <div className="mt-2 leading-relaxed">{children}</div>
    </div>
  )
}
