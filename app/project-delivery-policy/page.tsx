import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/legal/LegalPage";

export const metadata: Metadata = { title: "Project Delivery Policy", description: "Project delivery policy for ASMAN TECH projects." };

export default function Page() {
  return (
    <LegalPage title="Project Delivery Policy">
      <p>This Project Delivery Policy explains how ASMAN TECH manages scope, timelines, client responsibilities, delivery, revisions, and project delays.</p>
      <LegalSection title="Scope Approval"><p>Work is based on the approved proposal, service package, statement of work, or written project description. Requests outside the approved scope may require a separate quote or timeline adjustment.</p></LegalSection>
      <LegalSection title="Delivery Timelines"><p>Delivery timelines are estimates unless a written agreement states otherwise. Timelines depend on scope, technical complexity, third-party services, client feedback, and access to required materials.</p></LegalSection>
      <LegalSection title="Client Responsibilities"><p>The client is responsible for providing required materials, access, approvals, credentials, content, technical information, and timely feedback. Project timelines may be extended if the client fails to provide required materials, access, approvals, or feedback.</p></LegalSection>
      <LegalSection title="Project Suspension"><p>ASMAN TECH may pause or reschedule work if required information is missing, approvals are delayed, payment issues arise, or scope changes materially affect delivery.</p></LegalSection>
      <LegalSection title="Revisions"><p>Revisions are handled according to the approved scope. Additional revisions, major direction changes, or new requirements may require additional fees and timeline adjustments.</p></LegalSection>
    </LegalPage>
  );
}
