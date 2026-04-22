import type { Metadata } from "next"
import Link from "next/link"
import { Check } from "lucide-react"
import { PageHeading, Eyebrow, SectionHeading } from "@/components/section"
import { Cta } from "@/components/cta"

export const metadata: Metadata = {
  title: "Pricing",
  description: "Simple, honest pricing. Free while you&apos;re small. Flat rate as you grow.",
}

const tiers = [
  {
    name: "Starter",
    price: "€ 0",
    cadence: "/forever",
    description: "For solo founders and freelancers testing the waters.",
    cta: "Start free",
    features: [
      "Up to 2 bank connections",
      "Invoicing and inbox",
      "30 days of history",
      "Email support",
    ],
  },
  {
    name: "Pro",
    price: "€ 29",
    cadence: "/mo",
    description: "For established operators who live inside their finances.",
    cta: "Start free trial",
    featured: true,
    features: [
      "Unlimited bank connections",
      "Insights and assistant",
      "Unlimited history",
      "Agents and automations",
      "Priority support",
    ],
  },
  {
    name: "Team",
    price: "€ 79",
    cadence: "/mo",
    description: "For small teams that need shared threads and roles.",
    cta: "Talk to sales",
    features: [
      "Everything in Pro",
      "Up to 10 seats",
      "Shared chat threads",
      "Role-based permissions",
      "SAML SSO",
    ],
  },
]

export default function PricingPage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="container-page py-20 md:py-28">
          <PageHeading
            eyebrow="Pricing"
            title="Simple pricing. Boring on purpose."
            description="Free while you&apos;re small. Flat rate as you grow. No per-transaction fees, no percentage-of-revenue surprises."
          />
        </div>
      </section>

      <section className="border-b border-border">
        <div className="container-page py-16">
          <div className="grid gap-px border border-border bg-border md:grid-cols-3">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={
                  "flex flex-col bg-card p-8 " +
                  (tier.featured ? "bg-accent" : "")
                }
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-[15px] font-medium tracking-tight">{tier.name}</h3>
                  {tier.featured && (
                    <Eyebrow>Most popular</Eyebrow>
                  )}
                </div>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-mono text-4xl tracking-tight">{tier.price}</span>
                  <span className="text-[13px] text-muted-foreground">{tier.cadence}</span>
                </div>
                <p className="mt-3 text-[13px] text-muted-foreground leading-relaxed">
                  {tier.description}
                </p>
                <ul className="mt-6 space-y-3 text-[13px]">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-3.5 w-3.5 text-foreground/70" aria-hidden />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-border">
                  <Cta
                    href="#"
                    variant={tier.featured ? "primary" : "secondary"}
                    className="w-full justify-center"
                    withArrow
                  >
                    {tier.cta}
                  </Cta>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="container-page py-20 md:py-28">
          <SectionHeading eyebrow="FAQ" title="Small print, honestly stated." />
          <dl className="mt-10 divide-y divide-border border-y border-border">
            {[
              { q: "Is Starter actually free forever?", a: "Yes — no time limit, no credit card. It covers real, if simple, use cases." },
              { q: "Do you charge per transaction?", a: "No. Pricing is a flat monthly rate regardless of volume." },
              { q: "Can I cancel anytime?", a: "Yes. Cancel anytime, keep full access to your data, and export it whenever you like." },
              { q: "Do you offer annual billing?", a: "Yes. Annual billing comes with a 15% discount on all paid plans." },
              { q: "Is there a non-profit discount?", a: "Yes — email us and we&apos;ll sort it." },
            ].map((f) => (
              <div key={f.q} className="grid gap-4 py-6 md:grid-cols-[1fr_2fr]">
                <dt className="text-[14px] font-medium tracking-tight">{f.q}</dt>
                <dd className="text-[14px] text-muted-foreground leading-relaxed">{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="container-page py-20">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-medium tracking-tight">Not sure which plan fits?</h2>
              <p className="mt-2 text-[14px] text-muted-foreground">
                Talk to us. We&apos;ll help you pick in under ten minutes.
              </p>
            </div>
            <Link
              href="#"
              className="text-[13px] underline-offset-4 hover:underline"
            >
              Contact sales →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
