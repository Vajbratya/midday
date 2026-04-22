import { Hero } from "@/components/landing/hero"
import { LogoCloud } from "@/components/landing/logo-cloud"
import { FeatureGrid } from "@/components/landing/feature-grid"
import { InvoicePreview } from "@/components/landing/invoice-preview"
import { Testimonial } from "@/components/landing/testimonial"
import { FinalCta } from "@/components/landing/final-cta"

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoCloud />
      <FeatureGrid />
      <InvoicePreview />
      <Testimonial />
      <FinalCta />
    </>
  )
}
