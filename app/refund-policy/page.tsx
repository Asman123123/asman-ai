import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/legal/LegalPage";

export const metadata: Metadata = { title: "Refund Policy", description: "Refund policy for Asman AI custom services." };

export default function Page() {
  return (
    <LegalPage title="Refund Policy">
      <p>Due to the custom nature of software development, AI automation, consulting, SaaS development, and digital services, payments are generally non-refundable once project work has commenced.</p>
      <LegalSection title="Custom Service Work"><p>Project work may include planning, onboarding, consulting, resource allocation, technical preparation, architecture, design, development, configuration, integrations, scheduling, and communication. These activities begin after payment and create service value even before final delivery.</p></LegalSection>
      <LegalSection title="Refund Review"><p>Refund requests may be reviewed on a case-by-case basis when work has not started or when a written agreement provides specific refund terms. Approved refunds, if any, may exclude completed work, third-party costs, consulting time, processing fees, and administrative costs.</p></LegalSection>
      <LegalSection title="Chargeback Protection"><p>Clients agree not to initiate chargebacks for approved services that have been purchased, started, partially delivered, delivered, or made available. Any payment dispute should first be addressed directly with Asman AI at hello@asmanai.com.</p></LegalSection>
    </LegalPage>
  );
}
