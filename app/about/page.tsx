import type { Metadata } from "next";
import { CTA, SectionIntro } from "@/components/Sections";
import { Reveal } from "@/components/Motion";

export const metadata: Metadata = { title: "About", description: "ASMAN TECH helps businesses build AI-powered software and scalable digital platforms." };

const blocks = [["Mission", "Transform manual operations into intelligent, scalable digital systems."], ["Vision", "Become a trusted technology partner for businesses that need durable software infrastructure."], ["Our Approach", "Map bottlenecks, design the architecture, build quickly, and support long-term adoption."], ["Why Clients Choose Us", "Premium execution, clear business thinking, modern software practices, and measurable automation outcomes."]];

export default function AboutPage() {
  return <main className="bg-ink pt-28"><section className="px-5 py-20 lg:px-8"><div className="mx-auto max-w-7xl"><SectionIntro eyebrow="About" title="Technology partner for AI-powered business systems" text="ASMAN TECH helps businesses build AI-powered software, automate operations, and launch scalable digital platforms." /><div className="grid gap-5 lg:grid-cols-[.85fr_1.15fr]"><Reveal><div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-8 shadow-card backdrop-blur-xl"><h2 className="text-4xl font-black text-white">ASMAN TECH</h2><p className="mt-5 leading-7 text-white/62">AI Automation • Software Development • SaaS Solutions</p><a className="mt-8 inline-flex text-aura" href="mailto:asman.usa88@gmail.com">asman.usa88@gmail.com</a></div></Reveal><div className="grid gap-5 md:grid-cols-2">{blocks.map(([title, text], i) => <Reveal key={title} delay={i * 0.04}><div className="h-full rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 shadow-card"><h3 className="text-2xl font-black text-white">{title}</h3><p className="mt-4 leading-7 text-white/58">{text}</p></div></Reveal>)}</div></div></div></section><CTA /></main>;
}
