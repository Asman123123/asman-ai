"use client";

import { ContactForm } from "@/components/ContactForm";
import { SectionIntro } from "@/components/Sections";
import { useLocale } from "@/components/i18n/LocaleProvider";

export default function ContactPage() {
  const { t } = useLocale();
  return (
    <main className="bg-ink pt-28">
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.85fr_1.15fr]">
          <div>
            <SectionIntro eyebrow={t.nav.contact} title={t.contact.title} text={t.contact.text} />
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 text-white/62 shadow-card">
              <h2 className="text-2xl font-black text-white">{t.contact.business}</h2>
              <p className="mt-5 leading-7">Asman AI<br />{t.contact.brandLine}</p>
              <a className="mt-6 inline-flex text-aura" href="mailto:hello@asmanai.com">hello@asmanai.com</a>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
      <section className="bg-[#05070d] px-5 pb-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow={t.contact.nextEyebrow}
            title={t.contact.nextTitle}
            text={t.contact.nextText}
          />
          <div className="grid gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 lg:grid-cols-5">
            {t.contact.nextSteps.map(([number, title, text]) => (
              <div key={number} className="group bg-[#05070d] p-7 transition hover:bg-[#0a111c]">
                <div className="mb-14 font-metric text-sm font-black text-aura/80">{number}</div>
                <h2 className="text-xl font-black text-white">{title}</h2>
                <p className="mt-4 text-sm leading-7 text-white/54">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
