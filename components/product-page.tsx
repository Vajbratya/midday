import type { ReactNode } from "react"
import { PageHeading, SectionHeading } from "@/components/section"
import { Cta } from "@/components/cta"

export type Feature = {
  title: string
  description: string
}

export type ProductPageProps = {
  eyebrow: string
  title: ReactNode
  description: ReactNode
  features: Feature[]
  bullets?: string[]
  visual?: ReactNode
  faqs?: { q: string; a: string }[]
}

export function ProductPage({
  eyebrow,
  title,
  description,
  features,
  bullets,
  visual,
  faqs,
}: ProductPageProps) {
  return (
    <>
      <section className="relative border-b border-border overflow-hidden">
        <div aria-hidden className="absolute inset-0 grid-bg mask-fade-b opacity-50" />
        <div className="container-page relative py-24 md:py-32">
          <PageHeading eyebrow={eyebrow} title={title} description={description} />
          <div className="mt-10 flex flex-wrap gap-3">
            <Cta href="#" variant="primary" withArrow>Start free</Cta>
            <Cta href="/pricing" variant="secondary">See pricing</Cta>
          </div>
        </div>
      </section>

      {visual && (
        <section className="border-b border-border">
          <div className="container-page py-16">{visual}</div>
        </section>
      )}

      <section className="border-b border-border">
        <div className="container-page py-20 md:py-28">
          <SectionHeading eyebrow="Capabilities" title="Built for quiet, focused work." />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-border">
            {features.map((f) => (
              <div key={f.title} className="border-b border-r border-border p-6 md:p-8">
                <h3 className="text-[15px] font-medium tracking-tight">{f.title}</h3>
                <p className="mt-2 text-[13px] text-muted-foreground leading-relaxed">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {bullets && bullets.length > 0 && (
        <section className="border-b border-border">
          <div className="container-page py-20 md:py-28">
            <div className="grid gap-12 md:grid-cols-2 md:items-start">
              <SectionHeading
                eyebrow="Why it matters"
                title="Fewer tabs. Fewer exports. More clarity."
                description="Every feature is designed to remove a step that used to require a spreadsheet, a screenshot, or an email."
              />
              <ul className="space-y-3 text-[14px]">
                {bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-foreground/80">
                    <span className="mt-[7px] h-1 w-3 bg-foreground" aria-hidden />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {faqs && faqs.length > 0 && (
        <section className="border-b border-border">
          <div className="container-page py-20 md:py-28">
            <SectionHeading eyebrow="FAQ" title="Things people ask." />
            <dl className="mt-10 divide-y divide-border border-y border-border">
              {faqs.map((f) => (
                <div key={f.q} className="grid gap-4 py-6 md:grid-cols-[1fr_2fr]">
                  <dt className="text-[14px] font-medium tracking-tight">{f.q}</dt>
                  <dd className="text-[14px] text-muted-foreground leading-relaxed">{f.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      )}

      <section className="border-b border-border">
        <div className="container-page py-20">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-medium tracking-tight">
                Ready to put this on quiet mode?
              </h2>
              <p className="mt-2 text-[14px] text-muted-foreground">
                Create an account in under a minute. No credit card required.
              </p>
            </div>
            <div className="flex gap-3">
              <Cta href="#" variant="primary" withArrow>Start free</Cta>
              <Cta href="/pricing" variant="secondary">Pricing</Cta>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
