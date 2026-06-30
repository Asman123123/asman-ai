"use client";

import { ArrowUpRight } from "lucide-react";
import { CTA, SectionIntro } from "@/components/Sections";
import { Reveal } from "@/components/Motion";
import { useLocale } from "@/components/i18n/LocaleProvider";

export default function IndustriesPage() {
  const { t } = useLocale();

  return (
    <main className="bg-ink pt-28">
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionIntro eyebrow={t.pages.industries.eyebrow} title={t.pages.industries.title} text={t.pages.industries.text} />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {t.data.industries.map(([name, text], i) => (
              <Reveal key={name} delay={i * 0.04}>
                <article className="group min-h-64 rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 shadow-card backdrop-blur-xl transition hover:-translate-y-2 hover:border-cobalt/50">
                  <ArrowUpRight className="mb-10 h-6 w-6 text-aura transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                  <h2 className="text-3xl font-black text-white">{name}</h2>
                  <p className="mt-5 leading-7 text-white/58">{text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </main>
  );
}
