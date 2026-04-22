import type { Metadata } from "next"
import { PageHeading, SectionHeading } from "@/components/section"
import { Cta } from "@/components/cta"

export const metadata: Metadata = {
  title: "Story",
  description: "Why we&apos;re building Midday.",
}

const milestones = [
  { date: "2023-01", title: "A frustrated spreadsheet", body: "Two founders, one shared spreadsheet, too many tabs." },
  { date: "2023-08", title: "Open-sourced early", body: "Published the first version of Midday in the open. People started using it." },
  { date: "2024-04", title: "Bank coverage", body: "First serious bank integrations across EU and the US." },
  { date: "2024-11", title: "Assistant", body: "Shipped a grounded, no-hallucination assistant for real business data." },
  { date: "2025-06", title: "Agents", body: "Autonomous workflows that replace ten recurring calendar reminders." },
  { date: "2026-04", title: "Today", body: "Used by thousands of operators across 30+ countries." },
]

export default function StoryPage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="container-page py-20 md:py-28">
          <PageHeading
            eyebrow="Story"
            title="Built in the open, for people who run things."
            description="Midday started with a familiar problem: a finance stack that was noisy, expensive, and designed for enterprise — by people who didn&apos;t run a small business. We&apos;re building the calm alternative."
          />
        </div>
      </section>

      <section className="border-b border-border">
        <div className="container-page py-20">
          <div className="grid gap-12 md:grid-cols-2">
            <SectionHeading
              eyebrow="Principles"
              title="Quiet, honest, open."
              description="We make tools that feel considered, stay out of the way, and never charge you a percentage of your revenue."
            />
            <ul className="space-y-5 text-[15px] leading-relaxed">
              <Principle title="Calm software">
                No badges, no streaks, no manipulative nudges. Software should respect your attention.
              </Principle>
              <Principle title="Open by default">
                Our code is open-source. Our pricing is public. Our direction is shared openly.
              </Principle>
              <Principle title="Honest pricing">
                Flat rate, no per-transaction fees, no percentage-of-revenue tricks.
              </Principle>
              <Principle title="Portability">
                Your data belongs to you. It&apos;s exportable at any time, in clean formats.
              </Principle>
            </ul>
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="container-page py-20">
          <SectionHeading eyebrow="Timeline" title="How we got here." />
          <ol className="mt-10 border-t border-border">
            {milestones.map((m) => (
              <li key={m.date} className="grid gap-4 border-b border-border py-6 md:grid-cols-[160px_1fr]">
                <div className="text-mono text-[12px] uppercase tracking-[0.18em] text-muted-foreground">
                  {m.date}
                </div>
                <div>
                  <div className="text-[15px] font-medium tracking-tight">{m.title}</div>
                  <p className="mt-2 text-[14px] text-muted-foreground leading-relaxed">{m.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="container-page py-20">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight">Run it quietly with us.</h2>
            <div className="flex gap-3">
              <Cta href="#" variant="primary" withArrow>Start free</Cta>
              <Cta href="/about" variant="secondary">Meet the team</Cta>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function Principle({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <li>
      <div className="text-foreground">{title}</div>
      <p className="mt-1 text-muted-foreground text-[14px]">{children}</p>
    </li>
  )
}
