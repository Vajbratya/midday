import type { Metadata } from "next"
import { ProductPage } from "@/components/product-page"
import { Mockup } from "@/components/mockup"

export const metadata: Metadata = {
  title: "Agents",
  description: "Autonomous workflows for the repetitive parts of running a business.",
}

const tasks = [
  { name: "Categorize new transactions", status: "Running", freq: "Hourly" },
  { name: "Match receipts from email", status: "Running", freq: "Every 15 min" },
  { name: "Send overdue reminders", status: "Running", freq: "Daily, 9:00" },
  { name: "Reconcile Stripe payouts", status: "Paused", freq: "Daily" },
  { name: "Tag recurring subscriptions", status: "Running", freq: "Weekly" },
]

export default function AgentsPage() {
  return (
    <ProductPage
      eyebrow="Agents"
      title="Set it once. Let the work happen in the background."
      description="Agents handle the repetitive operations that used to live in your calendar as recurring tasks — quietly, consistently, and with an audit trail."
      visual={
        <Mockup title="Agents">
          <div className="border border-border">
            {tasks.map((t, i) => (
              <div
                key={t.name}
                className="grid grid-cols-[1fr_auto_auto] items-center gap-4 border-b border-border px-4 py-3 text-[13px] last:border-b-0"
              >
                <div className="flex items-center gap-3">
                  <span
                    className={
                      "h-2 w-2 " +
                      (t.status === "Running" ? "bg-foreground" : "bg-muted-foreground/40")
                    }
                    aria-hidden
                  />
                  {t.name}
                </div>
                <div className="text-muted-foreground text-[12px]">{t.freq}</div>
                <div>
                  <span className="inline-flex border border-border px-2 py-0.5 text-[11px]">
                    {t.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Mockup>
      }
      features={[
        { title: "Built-in library", description: "Dozens of common agents ready out-of-the-box." },
        { title: "Custom triggers", description: "Schedules, thresholds, and event-based triggers." },
        { title: "Human in the loop", description: "Ask an agent to surface work instead of acting on it." },
        { title: "Per-agent scopes", description: "Limit what each agent can read and write." },
        { title: "Full history", description: "Every action is logged with the data it used." },
        { title: "Undoable", description: "Any agent action can be reverted with one click." },
      ]}
      bullets={[
        "No low-code canvas — agents are tight, readable, understandable",
        "Pause, resume, or delete anytime",
        "Shared across your team with clear ownership",
      ]}
    />
  )
}
