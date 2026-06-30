import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/legal/LegalPage";

export const metadata: Metadata = { title: "Terms & Conditions", description: "Terms and conditions for Asman AI services." };

export default function Page() {
  return (
    <LegalPage title="Terms & Conditions">
      <p>These Terms & Conditions govern access to and purchase of Asman AI services. Asman AI is a brand operated by ASMAN LLC. By requesting, purchasing, or using our services, the client agrees to these terms and any written proposal, statement of work, invoice, or service agreement accepted by the client.</p>
      <LegalSection title="Services"><p>Services may include AI automation, custom software development, SaaS development, CRM automation, AI voice agents, consulting, implementation, support, and related digital services.</p></LegalSection>
      <LegalSection title="Scope and Approval"><p>Project scope, deliverables, timelines, and responsibilities are defined in a written proposal, statement of work, or invoice. Work begins after payment and required onboarding information are received.</p></LegalSection>
      <LegalSection title="Payment"><p>Unless otherwise agreed in writing, Asman AI requires 100% prepayment before work begins. Project planning, onboarding, resource allocation, consulting, development preparation, and scheduling may begin immediately after payment.</p></LegalSection>
      <LegalSection title="Disputes"><p>Clients agree to contact Asman AI first regarding billing, delivery, or service concerns so the issue can be reviewed and addressed professionally.</p></LegalSection>
      <LegalSection title="Contact"><p>Email: asman.usa88@gmail.com</p></LegalSection>
    </LegalPage>
  );
}
