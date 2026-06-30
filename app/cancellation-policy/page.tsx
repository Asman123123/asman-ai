import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/legal/LegalPage";

export const metadata: Metadata = { title: "Cancellation Policy", description: "Cancellation policy for Asman AI projects." };

export default function Page() {
  return (
    <LegalPage title="Cancellation Policy">
      <p>Because Asman AI provides custom digital services, cancellation requests are reviewed based on project status, work completed, resources allocated, and written agreements.</p>
      <LegalSection title="Before Work Begins"><p>If a cancellation request is received before work begins, Asman AI may review whether any refundable amount is available after payment processing fees, administrative costs, scheduled resource allocation, and onboarding preparation.</p></LegalSection>
      <LegalSection title="After Work Begins"><p>Once work has commenced, payments are generally non-refundable because planning, consulting, scheduling, technical preparation, design, development, and resource allocation may already be underway.</p></LegalSection>
      <LegalSection title="Client Delays"><p>If a project is delayed due to missing client materials, access, approvals, or feedback, the project may be paused or rescheduled. Such delays do not automatically create a cancellation or refund right.</p></LegalSection>
      <LegalSection title="How to Request Cancellation"><p>Cancellation requests must be sent in writing to asman.usa88@gmail.com and should include the project name, invoice reference, and reason for cancellation.</p></LegalSection>
    </LegalPage>
  );
}
