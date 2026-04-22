import { Cta } from "@/components/cta"
import { Eyebrow } from "@/components/section"

export function Hero() {
  return (
    <section className="relative border-b border-border overflow-hidden">
      <div aria-hidden className="absolute inset-0 grid-bg mask-fade-b opacity-60" />
      <div className="container-page relative py-24 md:py-36">
        <Eyebrow>Financial OS · v2</Eyebrow>
        <h1 className="mt-6 max-w-4xl text-balance text-5xl md:text-7xl font-medium tracking-tight leading-[0.98]">
          Run your business with clarity.
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-[15px] md:text-[17px] text-muted-foreground leading-relaxed">
          Midday brings invoicing, your financial inbox, insights, and an AI assistant into one
          quiet, focused workspace. Built for founders, freelancers, and small teams who want
          their numbers to make sense.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Cta href="#" variant="primary" withArrow>Start free</Cta>
          <Cta href="/pricing" variant="secondary">View pricing</Cta>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8 max-w-3xl">
          <Stat value="30+" label="countries" />
          <Stat value="20,000+" label="banks connected" />
          <Stat value="8" label="minutes saved per invoice" />
          <Stat value="99.99%" label="uptime" />
        </div>
      </div>
    </section>
  )
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="border-l border-border pl-4">
      <div className="text-mono text-2xl tracking-tight">{value}</div>
      <div className="mt-1 text-[12px] uppercase tracking-[0.14em] text-muted-foreground">
        {label}
      </div>
    </div>
  )
}
