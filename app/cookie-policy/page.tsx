import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/legal/LegalPage";

export const metadata: Metadata = { title: "Cookie Policy", description: "Cookie policy for ASMAN TECH." };

export default function Page() {
  return (
    <LegalPage title="Cookie Policy">
      <p>ASMAN TECH may use cookies and similar technologies to operate the website, understand performance, improve user experience, and measure marketing effectiveness.</p>
      <LegalSection title="Types of Cookies"><ul className="list-disc pl-6"><li>Essential cookies for website functionality.</li><li>Analytics cookies for performance and usage insights.</li><li>Marketing or measurement cookies if advertising tools are enabled.</li></ul></LegalSection>
      <LegalSection title="Managing Cookies"><p>Visitors can control cookies through browser settings. Disabling cookies may affect some website functionality.</p></LegalSection>
    </LegalPage>
  );
}
