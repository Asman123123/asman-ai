import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/legal/LegalPage";

export const metadata: Metadata = { title: "Payment Terms", description: "Payment terms for Asman AI services." };

export default function Page() {
  return (
    <LegalPage title="Payment Terms">
      <p>Unless otherwise agreed in writing, all projects require 100% prepayment before work begins.</p>
      <LegalSection title="Full Advance Payment"><p>Project planning, onboarding, resource allocation, consulting, development preparation, and scheduling begin immediately after payment. Payment confirms the client’s approval to reserve time, allocate resources, and begin work.</p></LegalSection>
      <LegalSection title="Invoices and Scope"><p>Invoices may reference a proposal, scope, service package, retainer, or project description. Any change in scope may require a separate quote, invoice, or written approval.</p></LegalSection>
      <LegalSection title="Third-Party Costs"><p>Third-party subscriptions, hosting, software licenses, APIs, communication tools, payment processing fees, and external services are the client’s responsibility unless explicitly included in writing.</p></LegalSection>
      <LegalSection title="Payment Disputes"><p>Clients should contact Asman AI directly about payment questions or disputes before initiating any payment reversal or chargeback.</p></LegalSection>
    </LegalPage>
  );
}
