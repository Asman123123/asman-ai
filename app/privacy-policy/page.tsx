import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/legal/LegalPage";

export const metadata: Metadata = { title: "Privacy Policy", description: "Privacy policy for Asman AI." };

export default function Page() {
  return (
    <LegalPage title="Privacy Policy">
      <p>Asman AI collects business contact information submitted through forms, emails, booking links, or project communication channels to respond to inquiries, prepare proposals, deliver services, and maintain business records.</p>
      <LegalSection title="Information We Collect"><ul className="list-disc pl-6"><li>Name, company name, business email, phone number, service interest, estimated budget, and message content.</li><li>Project information, access details, files, approvals, and feedback provided during delivery.</li><li>Basic analytics and website interaction data when analytics tools are enabled.</li></ul></LegalSection>
      <LegalSection title="How We Use Information"><p>We use information to communicate with clients, assess project fit, provide proposals, deliver services, improve operations, and comply with legal or payment-processing requirements.</p></LegalSection>
      <LegalSection title="Third-Party Tools"><p>We may use service providers such as form processors, email providers, CRM systems, analytics tools, hosting providers, and payment processors. These tools are used to operate the business and deliver services.</p></LegalSection>
      <LegalSection title="Contact"><p>Email privacy questions to asman.usa88@gmail.com.</p></LegalSection>
    </LegalPage>
  );
}
