import type { Metadata } from "next";
import { CTA, DeliveryProcess, OperatingSystem, SectionIntro, ServicesGrid } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Services",
  description: "AI automation, software development, SaaS development, AI voice agents, CRM automation, and enterprise solutions.",
};

export default function ServicesPage() {
  return (
    <main className="bg-ink pt-28">
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Services"
            title="AI automation, custom software, and SaaS systems built for growth"
            text="Premium technical execution for organizations ready to replace manual work with intelligent systems."
          />
          <ServicesGrid />
        </div>
      </section>
      <OperatingSystem />
      <DeliveryProcess />
      <CTA />
    </main>
  );
}
