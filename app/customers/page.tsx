import type { Metadata } from "next"
import Link from "next/link"
import { PageHeading, SectionHeading, Eyebrow } from "@/components/section"
import { Cta } from "@/components/cta"

export const metadata: Metadata = {
  title: "Customers",
  description: "Studios, consultants, and small teams running on Midday.",
}

const cases = [
  {
    slug: "north-studio",
    name: "North Studio",
    role: "Design studio, 6 people",
    quote:
      "Midday replaced a patchwork of three tools and a spreadsheet. Our month-end closes in a morning now.",
    metric: "3 tools → 1",
    author: "Iris Hallgren, Founder",
  },
  {
    slug: "helix-labs",
    name: "Helix Labs",
    role: "Software studio, 12 people",
    quote:
      "We stopped doing screenshots of spreadsheets in Slack. Every finance question has a single place to live.",
    metric: "14h/wk saved",
    author: "Daniel Arvidsson, Operations",
  },
  {
    slug: "arcadia-consulting",
    name: "Arcadia",
    role: "Independent consultant",
    quote:
      "The invoicing is quietly the best I&apos;ve used. Reminders happen without me having to feel bad about them.",
    metric: "98% on-time paid",
    author: "Mika Tanaka, Founder",
  },
]

export default function CustomersPage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="container-page py-20 md:py-28">
          <PageHeading
            eyebrow="Customers"
            title="Quiet operators running real businesses."
            description="Studios, consultants, and small teams that chose clarity over complexity. Here&apos;s how they use Midday."
          />
        </div>
      </section>

      <section className="border-b border-border">
        <div className="container-page py-16">
          <div className="grid gap-px border border-border bg-border md:grid-cols-3">
            {cases.map((c) => (
              <article key={c.slug} className="flex flex-col bg-card p-8">
                <Eyebrow>{c.role}</Eyebrow>
                <h2 className="mt-5 text-[18px] font-medium tracking-tight">{c.name}</h2>
                <p className="mt-4 text-[14px] leading-relaxed">&ldquo;{c.quote}&rdquo;</p>
                <div className="mt-6 flex items-center justify-between border-t border-border pt-4 text-[12px] text-muted-foreground">
                  <span>{c.author}</span>
                  <span className="text-mono text-foreground">{c.metric}</span>
                </div>
                <div className="mt-6">
                  <Link
                    href="#"
                    className="text-[13px] underline-offset-4 hover:underline"
                  >
                    Read case study →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="container-page py-20">
          <SectionHeading
            eyebrow="Across industries"
            title="Design studios, software teams, consultants, and indie operators."
          />
          <div className="mt-10 grid grid-cols-2 gap-y-6 md:grid-cols-4 lg:grid-cols-6">
            {[
              "Design", "Software", "Consulting", "Marketing",
              "Legal", "Research", "Photography", "Architecture",
              "Coaching", "Engineering", "Video", "Analytics",
            ].map((n) => (
              <div key={n} className="text-[13px] text-foreground/70">{n}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="container-page py-20">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight">
              Join a quiet community of operators.
            </h2>
            <div className="flex gap-3">
              <Cta href="#" variant="primary" withArrow>Start free</Cta>
              <Cta href="/pricing" variant="secondary">See pricing</Cta>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
