import type { Metadata } from "next";
import { CTA, PricingCards, SectionIntro } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Premium pricing for AI automation, custom software development, SaaS development, CRM automation, and enterprise systems.",
};

export default function PricingPage() {
  return (
    <main className="bg-ink pt-28">
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Pricing"
            title="Premium technology packages for serious B2B execution"
            text="Clear starting points for automation, software, and enterprise systems. Enterprise is highlighted because larger systems need deeper architecture and governance."
          />
          <PricingCards withComparison />
        </div>
      </section>
      <CTA />
    </main>
  );
}
