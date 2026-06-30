"use client";

import { SectionIntro } from "@/components/Sections";
import { useLocale } from "@/components/i18n/LocaleProvider";

export default function Page() {
  const { t } = useLocale();
  const title = t.resourcePages.faqsTitle;
  const text = t.resourcePages.faqsText;
  return (
    <main className="bg-ink pt-28">
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionIntro eyebrow={t.nav.resources} title={title} text={text} align="center" />
          <div className="grid gap-4 text-left">
            {[
              ["How do projects begin?", "Projects begin with a clear scope, proposal, payment, onboarding materials, and access to required systems."],
              ["Can ASMAN TECH work with our existing tools?", "Yes. We can plan integrations with CRM, cloud, payment, communication, analytics, and internal business systems."],
              ["Is pricing fixed?", "Pricing depends on scope, complexity, integrations, timeline, and support requirements. The Pricing page provides starting ranges."],
              ["What happens after launch?", "Support can include monitoring, improvements, bug fixes, documentation, handoff, and future feature development."],
            ].map(([question, answer]) => (
              <article key={question} className="rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-6 text-white/58 shadow-card backdrop-blur-xl">
                <h2 className="text-xl font-black text-white">{question}</h2>
                <p className="mt-3 leading-7">{answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
