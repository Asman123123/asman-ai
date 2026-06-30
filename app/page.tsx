"use client";

import {
  CTA,
  CaseStudies,
  DeliveryProcess,
  OperatingSystem,
  PricingCards,
  ProofStrip,
  ResourcesCenter,
  SectionIntro,
  ServicesGrid,
  StatsBand,
  TechStack,
  WhyChoose,
} from "@/components/Sections";
import { Hero } from "@/components/Hero";
import { industries } from "@/lib/data";
import { Reveal } from "@/components/Motion";
import { useLocale } from "@/components/i18n/LocaleProvider";

export default function HomePage() {
  const { t } = useLocale();
  return (
    <main className="bg-ink">
      <Hero />
      <ProofStrip />
      <StatsBand />
      <section className="bg-[#050b14] px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionIntro eyebrow={t.sections.whatEyebrow} title={t.sections.whatTitle} text={t.sections.whatText} />
          <ServicesGrid compact />
        </div>
      </section>
      <OperatingSystem />
      <WhyChoose />
      <TechStack />
      <DeliveryProcess />
      <CaseStudies />
      <ResourcesCenter />
      <section className="bg-ink px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionIntro eyebrow={t.sections.pricingEyebrow} title={t.sections.pricingTitle} />
          <PricingCards />
        </div>
      </section>
      <section className="bg-[#050b14] px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionIntro eyebrow={t.sections.industriesEyebrow} title={t.sections.industriesTitle} />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {industries.map(([name, text], i) => (
              <Reveal key={name} delay={i * 0.04}>
                <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 shadow-card backdrop-blur-xl transition hover:-translate-y-2 hover:border-cobalt/50">
                  <h3 className="text-2xl font-black text-white">{name}</h3>
                  <p className="mt-4 leading-7 text-white/58">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </main>
  );
}
