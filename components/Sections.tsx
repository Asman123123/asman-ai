"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check, CircleDollarSign, CornerDownRight } from "lucide-react";
import {
  cases,
  comparisonRows,
  deliverySteps,
  operatingPrinciples,
  plans,
  proofBadges,
  resourceArticles,
  services,
  stack,
  stackIcons,
  successStories,
  trustIndicators,
  trustReasons,
} from "@/lib/data";
import { Counter, Reveal } from "@/components/Motion";
import { cn } from "@/lib/utils";
import { useLocale } from "@/components/i18n/LocaleProvider";

export function SectionIntro({ eyebrow, title, text, align = "split" }: { eyebrow: string; title: string; text?: string; align?: "split" | "center" }) {
  return (
    <Reveal className={cn("mb-16 gap-8", align === "center" ? "mx-auto max-w-4xl text-center" : "grid items-end lg:grid-cols-[1.05fr_.75fr]") }>
      <div>
        <p className="mb-5 text-[11px] font-black uppercase tracking-[0.18em] text-aura/80">{eyebrow}</p>
        <h2 className="text-balance text-4xl font-black leading-[1.02] tracking-tight text-white md:text-6xl">{title}</h2>
      </div>
      {text && <p className="max-w-xl text-base leading-8 text-white/56 lg:justify-self-end">{text}</p>}
    </Reveal>
  );
}

export function ProofStrip() {
  return (
    <section className="border-y border-white/8 bg-[#05070d] px-5 py-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-sm font-semibold text-white/44">Premium AI automation, software development, and SaaS delivery.</p>
        <div className="grid gap-3 sm:grid-cols-2 md:flex">
          {proofBadges.map((badge, index) => (
            <Reveal key={badge.label} delay={index * 0.03}>
              <div className="rounded-full border border-white/10 bg-white/[0.025] px-4 py-2 text-sm">
                <span className="text-white/34">{badge.label}: </span><span className="font-black text-white/82">{badge.value}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function StatsBand() {
  return (
    <section className="bg-[#080d15] px-5 py-16 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 md:grid-cols-4">
        {trustIndicators.map(([value, label]) => <Counter key={value} value={value} label={label} />)}
      </div>
    </section>
  );
}

export function WhyChoose() {
  return (
    <section className="bg-[#05070d] px-5 py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Trust"
          title="Why Businesses Choose Asman AI"
          text="Enterprise buyers need more than polished screens. They need technical ownership, secure delivery, and systems that can keep evolving."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {trustReasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={index * 0.04}>
                <div className="h-full rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-7 transition hover:border-white/20 hover:bg-white/[0.055]">
                  <Icon className="mb-6 h-6 w-6 text-aura/80" />
                  <h3 className="text-xl font-black text-white">{item.title}</h3>
                  <p className="mt-3 leading-7 text-white/54">{item.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function ServicesGrid({ compact = false }: { compact?: boolean }) {
  const { t } = useLocale();
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => {
        const Icon = service.icon;
        return (
          <Reveal key={service.title} delay={index * 0.04}>
            <motion.article
              whileHover={{ y: -6 }}
              className="group relative h-full overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-7 transition duration-300 hover:border-white/20 hover:bg-white/[0.055]"
            >
              <div className="mb-9 flex items-start justify-between gap-6">
                <div className="grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-aura"><Icon size={22} /></div>
                <span className="text-xs font-black text-white/28">0{index + 1}</span>
              </div>
              <h3 className="text-2xl font-black text-white">{service.title}</h3>
              <p className="mt-4 leading-7 text-white/56">{service.text}</p>
              <p className="mt-6 border-l border-aura/40 pl-4 text-sm font-semibold leading-6 text-white/62">{service.proof}</p>
              {!compact && (
                <ul className="mt-7 grid gap-3 text-sm text-white/58">
                  {service.features.map((feature) => <li key={feature} className="flex items-center gap-3"><Check className="h-4 w-4 text-aura/80" />{feature}</li>)}
                </ul>
              )}
              <Link href="/services" className="mt-8 inline-flex items-center gap-2 text-sm font-black text-white transition group-hover:text-aura">{t.common.learnMore} <ArrowRight size={15} /></Link>
            </motion.article>
          </Reveal>
        );
      })}
    </div>
  );
}

export function OperatingSystem() {
  return (
    <section className="relative overflow-hidden bg-[#05070d] px-5 py-28 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_10%,rgba(77,141,255,.11),transparent_30%)]" />
      <div className="relative mx-auto max-w-7xl">
        <SectionIntro eyebrow="Operating System" title="From scattered tools to one intelligent business system" text="A serious AI company should show systems thinking. This section frames automation, data, software, and reporting as one durable operating layer." />
        <div className="grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
          <Reveal>
            <div className="rounded-[2rem] border border-white/10 bg-[#0a101a] p-4 shadow-card md:p-6">
              <div className="rounded-[1.5rem] border border-white/10 bg-[#05070d] p-5 md:p-8">
                <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-5">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-aura/70">System Architecture</p>
                    <h3 className="mt-2 text-2xl font-black text-white">AI workflow layer</h3>
                  </div>
                  <div className="rounded-full border border-white/10 px-3 py-1 text-xs font-black text-white/52">Live model</div>
                </div>
                <div className="grid gap-3">
                  {[["01", "Capture", "Forms, calls, inboxes, CRM"], ["02", "Qualify", "AI agents, scoring, routing"], ["03", "Execute", "Dashboards, workflows, SaaS"], ["04", "Measure", "KPIs, reporting, iteration"]].map(([n, title, text]) => (
                    <motion.div key={n} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-4 md:grid-cols-[52px_1fr]">
                      <div className="text-sm font-black text-aura/80">{n}</div>
                      <div><div className="font-black text-white">{title}</div><div className="mt-1 text-sm text-white/48">{text}</div></div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
          <div className="grid gap-4">
            {operatingPrinciples.map((item, index) => {
              const Icon = item.icon;
              return <Reveal key={item.title} delay={index * 0.04}><div className="rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-6"><Icon className="mb-5 h-6 w-6 text-aura/80" /><h3 className="text-xl font-black text-white">{item.title}</h3><p className="mt-3 leading-7 text-white/54">{item.text}</p></div></Reveal>;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export function DeliveryProcess() {
  const { t } = useLocale();
  return (
    <section className="bg-[#080d15] px-5 py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionIntro eyebrow={t.sections.processEyebrow} title={t.sections.processTitle} text={t.sections.processText} />
        <div className="grid gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 lg:grid-cols-4">
          {deliverySteps.map(([number, title, text], index) => <Reveal key={number} delay={index * 0.04}><div className="group h-full bg-[#080d15] p-8 transition hover:bg-[#0c1420]"><div className="mb-16 flex items-center justify-between"><span className="font-metric text-sm font-black text-aura/80">{number}</span><CornerDownRight className="h-5 w-5 text-white/22 transition group-hover:text-aura" /></div><h3 className="text-2xl font-black text-white">{title}</h3><p className="mt-4 leading-7 text-white/54">{text}</p></div></Reveal>)}
        </div>
      </div>
    </section>
  );
}

export function ClientSuccessStories() {
  return (
    <section className="bg-[#05070d] px-5 py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Client Success Stories"
          title="Practical results across operations, sales, and SaaS systems"
          text="No logos, no invented names. Just realistic examples of how better systems improve business operations."
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {successStories.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.industry} delay={index * 0.05}>
                <motion.article whileHover={{ y: -6 }} className="h-full rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-7 transition hover:bg-white/[0.05]">
                  <div className="mb-7 flex items-center justify-between">
                    <div className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 text-aura"><Icon size={21} /></div>
                    <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-white/46">{item.roi}</span>
                  </div>
                  <h3 className="text-2xl font-black text-white">{item.industry}</h3>
                  <div className="mt-7 grid gap-5 text-sm leading-6 text-white/60">
                    <p><strong className="text-white">Challenge:</strong> {item.challenge}</p>
                    <p><strong className="text-white">Solution:</strong> {item.solution}</p>
                    <p><strong className="text-white">Outcome:</strong> {item.outcome}</p>
                  </div>
                  <div className="mt-8 flex h-24 items-end gap-2 rounded-2xl border border-white/10 bg-ink/40 p-4">
                    {item.metrics.map((m, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ height: 12 }}
                        whileInView={{ height: `${m}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: idx * 0.08 }}
                        className="flex-1 rounded-t-md bg-gradient-to-t from-cobalt/70 to-aura"
                      />
                    ))}
                  </div>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function ResourcesCenter() {
  const { t } = useLocale();
  return (
    <section className="bg-[#080d15] px-5 py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Resources Center"
          title="Ideas for smarter systems and cleaner operations"
          text="Articles, guides, and insights for teams evaluating AI automation, software development, SaaS strategy, CRM systems, and digital transformation."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {resourceArticles.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04}>
              <Link href="/blog" className="group block h-full rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-7 transition hover:border-white/20 hover:bg-white/[0.055]">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-aura/70">{item.category}</p>
                <h3 className="mt-6 text-2xl font-black leading-tight text-white">{item.title}</h3>
                <p className="mt-4 leading-7 text-white/54">{item.text}</p>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-black text-white transition group-hover:text-aura">
                  {t.common.readArticle} <ArrowRight size={15} />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PricingCards({ withComparison = false }: { withComparison?: boolean }) {
  const { t } = useLocale();
  return (
    <>
      <div className="grid gap-5 lg:grid-cols-3">
        {plans.map((plan, index) => <Reveal key={plan.name} delay={index * 0.05}><motion.article whileHover={{ y: -6 }} className={cn("relative flex min-h-[34rem] flex-col overflow-hidden rounded-[1.75rem] border p-8 transition", plan.highlighted ? "border-white/20 bg-pearl text-ink shadow-card" : "border-white/10 bg-white/[0.035] text-white")}>
          {plan.highlighted && <span className="mb-5 w-fit rounded-full bg-ink px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-white">{t.common.recommended}</span>}
          <h3 className={cn("text-3xl font-black", plan.highlighted ? "text-ink" : "text-white")}>{plan.name}</h3>
          <p className={cn("mt-4 min-h-14", plan.highlighted ? "text-ink/62" : "text-white/56")}>{plan.description}</p>
          <div className={cn("mt-7 font-metric text-5xl font-black", plan.highlighted ? "text-ink" : "text-white")}>{plan.price}</div>
          <div className="mt-7 grid grid-cols-2 gap-3 text-sm">
            <div className={cn("rounded-2xl border p-4", plan.highlighted ? "border-ink/10 bg-ink/[0.035]" : "border-white/10 bg-ink/35")}><div className={plan.highlighted ? "text-ink/40" : "text-white/34"}>{t.common.bestFor}</div><div className="mt-1 font-black">{plan.idealFor}</div></div>
            <div className={cn("rounded-2xl border p-4", plan.highlighted ? "border-ink/10 bg-ink/[0.035]" : "border-white/10 bg-ink/35")}><div className={plan.highlighted ? "text-ink/40" : "text-white/34"}>{t.common.timeline}</div><div className="mt-1 font-black">{plan.timeline}</div></div>
          </div>
          <ul className={cn("mt-8 grid gap-3 text-sm", plan.highlighted ? "text-ink/70" : "text-white/62")}>{plan.features.map((feature) => <li key={feature} className="flex items-center gap-3"><Check className={cn("h-4 w-4", plan.highlighted ? "text-ink" : "text-aura/80")} />{feature}</li>)}</ul>
          <Link href="/contact" className={cn("mt-auto rounded-full px-5 py-3 text-center text-sm font-black transition", plan.highlighted ? "bg-ink text-white hover:bg-ink/85" : "border border-white/12 bg-white/[0.04] text-white hover:border-white/28")}>{t.common.requestProposal}</Link>
        </motion.article></Reveal>)}
      </div>
      {withComparison && <Reveal className="mt-10 overflow-x-auto rounded-[1.75rem] border border-white/10 bg-white/[0.03]"><div className="grid min-w-[760px] grid-cols-4 border-b border-white/10 p-5 text-sm font-black text-white"><span>{t.common.capability}</span><span>Starter</span><span>Growth</span><span>Enterprise</span></div>{comparisonRows.map((row) => <div key={row[0]} className="grid min-w-[760px] grid-cols-4 border-b border-white/5 p-5 text-sm text-white/58 last:border-0">{row.map((cell, index) => <span key={cell} className={index === 0 ? "font-black text-white" : ""}>{cell}</span>)}</div>)}</Reveal>}
    </>
  );
}

export function TechStack() {
  return (
    <section className="bg-[#080d15] px-5 py-28 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Technology"
          title="Technologies We Work With"
          text="We build with proven AI, cloud, CRM, communications, and payments technologies."
        />
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8">
          {stack.map((name, i) => { const Icon = stackIcons[i]; return <Reveal key={name} delay={i * 0.03}><div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center transition hover:border-white/20 hover:bg-white/[0.05]"><Icon className="mx-auto mb-4 h-5 w-5 text-aura/75" /><div className="text-sm font-black text-white/72">{name}</div></div></Reveal>; })}
        </div>
      </div>
    </section>
  );
}

export function CaseStudies() {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {cases.map((item, i) => { const Icon = item.icon; return <Reveal key={item.industry} delay={i * 0.05}><motion.article whileHover={{ y: -6 }} className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-7 transition hover:bg-white/[0.05]"><div className="mb-7 flex items-center justify-between"><div className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 text-aura"><Icon size={21} /></div><span className="font-metric rounded-full border border-white/10 px-3 py-1 text-sm font-black text-aura">{item.roi}</span></div><p className="text-xs font-black uppercase tracking-[0.16em] text-white/38">{item.industry}</p><div className="mt-7 grid gap-5 text-sm leading-6 text-white/60"><p><strong className="text-white">Problem:</strong> {item.challenge}</p><p><strong className="text-white">Solution:</strong> {item.solution}</p><p><strong className="text-white">Metrics:</strong> {item.outcome}</p></div><div className="mt-7 rounded-2xl border border-white/10 bg-ink/40 p-4 text-sm font-semibold text-white/58">{item.secondary}</div><div className="mt-8 flex h-24 items-end gap-2 rounded-2xl border border-white/10 bg-ink/40 p-4">{item.metrics.map((m, idx) => <motion.span key={idx} initial={{ height: 12 }} whileInView={{ height: `${m}%` }} viewport={{ once: true }} transition={{ duration: 0.8, delay: idx * 0.08 }} className="flex-1 rounded-t-md bg-gradient-to-t from-cobalt/70 to-aura" />)}</div></motion.article></Reveal>; })}
    </div>
  );
}

export function CTA() {
  return <EnterpriseCTA />;
}

export function EnterpriseCTA() {
  const { t } = useLocale();
  return (
    <section className="bg-[#05070d] px-5 py-28 lg:px-8">
      <Reveal className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,.08),rgba(255,255,255,.025))] p-10 md:p-16">
        <CircleDollarSign className="mb-8 h-9 w-9 text-aura/80" />
        <h2 className="max-w-3xl text-balance text-4xl font-black tracking-tight text-white md:text-6xl">
          {t.sections.ctaTitle}
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">
          {t.sections.ctaText}
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Link href="/contact" className="inline-flex rounded-full bg-white px-6 py-4 text-sm font-black text-ink transition hover:bg-aura">{t.common.requestProposal}</Link>
          <Link href="/contact" className="inline-flex rounded-full border border-white/12 bg-white/[0.04] px-6 py-4 text-sm font-black text-white transition hover:border-white/28">{t.common.bookStrategy}</Link>
        </div>
      </Reveal>
    </section>
  );
}
