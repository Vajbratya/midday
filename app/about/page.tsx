import type { Metadata } from "next"
import Link from "next/link"
import { PageHeading, SectionHeading } from "@/components/section"

export const metadata: Metadata = {
  title: "About",
  description: "The team, the values, and how to work with us.",
}

const team = [
  { name: "Pontus Abrahamsson", role: "Co-founder, design", location: "Stockholm" },
  { name: "Viktor Hofte", role: "Co-founder, engineering", location: "Copenhagen" },
  { name: "Elena Park", role: "Engineering", location: "Lisbon" },
  { name: "Marco Feretti", role: "Engineering", location: "Milan" },
  { name: "Astrid Lind", role: "Support", location: "Gothenburg" },
  { name: "James Okonkwo", role: "Growth", location: "London" },
]

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="container-page py-20 md:py-28">
          <PageHeading
            eyebrow="About"
            title="A small, senior team in the open."
            description="We&apos;re a distributed team of engineers, designers, and operators who care about craft and calm software. We ship in public and take quiet pride in the boring parts that nobody sees."
          />
        </div>
      </section>

      <section className="border-b border-border">
        <div className="container-page py-20">
          <SectionHeading eyebrow="Team" title="The people behind Midday." />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-border">
            {team.map((m) => (
              <div key={m.name} className="border-b border-r border-border p-6">
                <div className="h-10 w-10 border border-border bg-accent" aria-hidden />
                <div className="mt-4 text-[14px] font-medium tracking-tight">{m.name}</div>
                <div className="mt-1 text-[12px] text-muted-foreground">{m.role}</div>
                <div className="mt-1 text-[12px] text-muted-foreground">{m.location}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="container-page py-20">
          <div className="grid gap-12 md:grid-cols-2">
            <SectionHeading
              eyebrow="Working with us"
              title="How we work — and how to work with us."
            />
            <div className="space-y-6 text-[14px] leading-relaxed">
              <Row label="Hiring">
                We&apos;re small, senior, and fully distributed. When we open a role, we post it on our{" "}
                <Link href="#" className="underline underline-offset-4">careers page</Link>.
              </Row>
              <Row label="Press">
                For press inquiries, reach{" "}
                <Link href="mailto:press@midday.ai" className="underline underline-offset-4">press@midday.ai</Link>.
              </Row>
              <Row label="Partnerships">
                Integrations and partnerships:{" "}
                <Link href="mailto:partners@midday.ai" className="underline underline-offset-4">partners@midday.ai</Link>.
              </Row>
              <Row label="Security">
                Responsible disclosure:{" "}
                <Link href="mailto:security@midday.ai" className="underline underline-offset-4">security@midday.ai</Link>.
              </Row>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-2 border-b border-border pb-6 last:border-b-0 last:pb-0 md:grid-cols-[120px_1fr] md:gap-6">
      <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{label}</div>
      <div className="text-muted-foreground">{children}</div>
    </div>
  )
}
