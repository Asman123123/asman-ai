import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/legal/LegalPage";

export const metadata: Metadata = { title: "Intellectual Property Policy", description: "Intellectual property policy for Asman AI deliverables." };

export default function Page() {
  return (
    <LegalPage title="Intellectual Property Policy">
      <p>This Intellectual Property Policy describes ownership of final deliverables, reusable materials, and proprietary tools used by Asman AI.</p>
      <LegalSection title="Client Deliverables"><p>Upon full payment, ownership of final deliverables transfers to the client unless otherwise agreed in writing. Final deliverables may include custom code, designs, documents, configured workflows, or other project outputs specifically created for the client.</p></LegalSection>
      <LegalSection title="Asman AI Materials"><p>Asman AI retains ownership of internal frameworks, reusable components, methodologies, templates, know-how, processes, libraries, scripts, and proprietary tools developed before, during, or after a project.</p></LegalSection>
      <LegalSection title="Third-Party Materials"><p>Third-party software, APIs, libraries, platforms, stock assets, fonts, hosting services, and integrations remain subject to their own licenses and terms.</p></LegalSection>
      <LegalSection title="Portfolio Use"><p>Unless restricted by written agreement, Asman AI may describe project categories, services performed, and generalized outcomes in a non-confidential manner. Client-sensitive information will not be disclosed without permission.</p></LegalSection>
    </LegalPage>
  );
}
