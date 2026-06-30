import type { Metadata } from "next";
import { CaseStudies, CTA, SectionIntro } from "@/components/Sections";

export const metadata: Metadata = { title: "Case Studies", description: "Enterprise-style AI automation and custom software case studies with KPI outcomes and ROI metrics." };

export default function CaseStudiesPage() {
  return <main className="bg-ink pt-28"><section className="px-5 py-20 lg:px-8"><div className="mx-auto max-w-7xl"><SectionIntro eyebrow="Case Studies" title="Enterprise case studies with measurable operating leverage" text="Representative client industry examples with challenge, solution, outcome, and ROI metrics." /><CaseStudies /></div></section><CTA /></main>;
}
