import type { Metadata } from "next";
import { CTA, SectionIntro } from "@/components/Sections";
import { Reveal } from "@/components/Motion";
import { industries } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = { title: "Industries", description: "AI automation and software development for real estate, logistics, healthcare, e-commerce, finance, and professional services." };

export default function IndustriesPage() {
  return <main className="bg-ink pt-28"><section className="px-5 py-20 lg:px-8"><div className="mx-auto max-w-7xl"><SectionIntro eyebrow="Industries" title="Automation and software for operationally intense industries" text="We focus on workflows where better systems directly improve speed, conversion, and service quality." /><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{industries.map(([name, text], i) => <Reveal key={name} delay={i * 0.04}><article className="group min-h-64 rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 shadow-card backdrop-blur-xl transition hover:-translate-y-2 hover:border-cobalt/50"><ArrowUpRight className="mb-10 h-6 w-6 text-aura transition group-hover:translate-x-1 group-hover:-translate-y-1" /><h2 className="text-3xl font-black text-white">{name}</h2><p className="mt-5 leading-7 text-white/58">{text}</p></article></Reveal>)}</div></div></section><CTA /></main>;
}
