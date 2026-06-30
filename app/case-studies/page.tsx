"use client";

import { CaseStudies, CTA, SectionIntro } from "@/components/Sections";
import { useLocale } from "@/components/i18n/LocaleProvider";

export default function CaseStudiesPage() {
  const { t } = useLocale();

  return (
    <main className="bg-ink pt-28">
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionIntro eyebrow={t.pages.caseStudies.eyebrow} title={t.pages.caseStudies.title} text={t.pages.caseStudies.text} />
          <CaseStudies />
        </div>
      </section>
      <CTA />
    </main>
  );
}
