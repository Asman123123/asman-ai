import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/legal/LegalPage";

export const metadata: Metadata = { title: "Acceptable Use Policy", description: "Acceptable use policy for Asman AI services." };

export default function Page() {
  return (
    <LegalPage title="Acceptable Use Policy">
      <p>Clients may not use Asman AI services for unlawful, harmful, abusive, deceptive, or prohibited activities.</p>
      <LegalSection title="Prohibited Uses"><ul className="list-disc pl-6"><li>Illegal activity or unauthorized system access.</li><li>Spam, fraud, impersonation, deceptive automation, or harmful workflows.</li><li>Gambling, get-rich-quick schemes, prohibited fundraising, or high-risk activities that violate applicable policies or law.</li></ul></LegalSection>
      <LegalSection title="Enforcement"><p>Asman AI may decline, suspend, or terminate work that violates this policy or creates legal, security, reputational, or operational risk.</p></LegalSection>
    </LegalPage>
  );
}
