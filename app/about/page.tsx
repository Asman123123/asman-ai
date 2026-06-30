"use client";

import { CTA, SectionIntro } from "@/components/Sections";
import { Reveal } from "@/components/Motion";
import { useLocale } from "@/components/i18n/LocaleProvider";

export default function AboutPage() {
  const { t } = useLocale();

  return (
    <main className="bg-ink pt-28">
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionIntro eyebrow={t.pages.about.eyebrow} title={t.pages.about.title} text={t.pages.about.text} />
          <div className="grid gap-5 lg:grid-cols-[.85fr_1.15fr]">
            <Reveal>
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-8 shadow-card backdrop-blur-xl">
                <h2 className="text-4xl font-black text-white">Asman AI</h2>
                <p className="mt-5 leading-7 text-white/62">{t.pages.about.brandLine}</p>
                <a className="mt-8 inline-flex text-aura" href="mailto:hello@asmanai.com">hello@asmanai.com</a>
              </div>
            </Reveal>
            <div className="grid gap-5 md:grid-cols-2">
              {t.pages.about.blocks.map(([title, text], i) => (
                <Reveal key={title} delay={i * 0.04}>
                  <div className="h-full rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 shadow-card">
                    <h3 className="text-2xl font-black text-white">{title}</h3>
                    <p className="mt-4 leading-7 text-white/58">{text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
      <CTA />
    </main>
  );
}
