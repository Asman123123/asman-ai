"use client";

import { CTA, DeliveryProcess, OperatingSystem, SectionIntro, ServicesGrid } from "@/components/Sections";
import { useLocale } from "@/components/i18n/LocaleProvider";

export default function ServicesPage() {
  const { t } = useLocale();

  return (
    <main className="bg-ink pt-28">
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionIntro eyebrow={t.pages.services.eyebrow} title={t.pages.services.title} text={t.pages.services.text} />
          <ServicesGrid />
        </div>
      </section>
      <OperatingSystem />
      <DeliveryProcess />
      <CTA />
    </main>
  );
}
