"use client";

import { CTA, PricingCards, SectionIntro } from "@/components/Sections";
import { useLocale } from "@/components/i18n/LocaleProvider";

export default function PricingPage() {
  const { t } = useLocale();

  return (
    <main className="bg-ink pt-28">
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionIntro eyebrow={t.pages.pricing.eyebrow} title={t.pages.pricing.title} text={t.pages.pricing.text} />
          <PricingCards withComparison />
        </div>
      </section>
      <CTA />
    </main>
  );
}
