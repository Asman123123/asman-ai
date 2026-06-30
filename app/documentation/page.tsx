"use client";

import { SectionIntro } from "@/components/Sections";
import { useLocale } from "@/components/i18n/LocaleProvider";

export default function Page() {
  const { t } = useLocale();
  const title = t.resourcePages.docsTitle;
  const text = t.resourcePages.docsText;
  return (
    <main className="bg-ink pt-28">
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionIntro eyebrow={t.nav.resources} title={title} text={text} align="center" />
          <div className="grid gap-4 md:grid-cols-3">
            {[
              ["AI Automation Scope", "How we define workflows, inputs, outputs, escalation paths, and success metrics before implementation."],
              ["Software Delivery Notes", "How projects move from discovery to architecture, development, review, launch, and support."],
              ["Integration Planning", "What teams should prepare before connecting CRM, payments, cloud, communications, and analytics systems."],
            ].map(([itemTitle, itemText]) => (
              <div key={itemTitle} className="rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-6 text-white/58 shadow-card backdrop-blur-xl">
                <h2 className="text-xl font-black text-white">{itemTitle}</h2>
                <p className="mt-4 leading-7">{itemText}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
