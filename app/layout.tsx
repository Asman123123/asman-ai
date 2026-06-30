import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LocaleProvider } from "@/components/i18n/LocaleProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://asmantech.com"),
  title: { default: "ASMAN TECH | AI Automation, Software Development, SaaS Solutions", template: "%s | ASMAN TECH" },
  description: "ASMAN TECH builds AI automation, custom software, SaaS platforms, CRM automation, and enterprise software for modern organizations.",
  keywords: ["AI Automation Company", "SaaS Development Company", "Custom Software Development", "CRM Automation", "Enterprise Software"],
  icons: { icon: "/icon.png", apple: "/apple-icon.png" },
  openGraph: {
    title: "ASMAN TECH",
    description: "AI automation, custom software, and SaaS development for modern businesses.",
    url: "https://asmantech.com",
    siteName: "ASMAN TECH",
    type: "website",
    images: [{ url: "/brand/asman-ai-white.png", width: 4000, height: 802, alt: "ASMAN TECH" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ASMAN TECH",
    description: "AI automation, custom software, and SaaS development for modern businesses.",
    images: ["/brand/asman-ai-white.png"],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ASMAN TECH",
  legalName: "ASMAN LLC",
  url: "https://asmantech.com",
  email: "asman.usa88@gmail.com",
  makesOffer: ["AI Automation", "Custom Software Development", "SaaS Development", "CRM Automation", "Enterprise Software Development"],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What services does ASMAN TECH provide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ASMAN TECH provides AI automation, software development, SaaS development, CRM automation, AI voice agents, and enterprise software solutions.",
      },
    },
    {
      "@type": "Question",
      name: "How can I request a proposal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can request a proposal through the contact page by selecting the service needed, estimated budget, and project details.",
      },
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "ASMAN TECH Resources Center",
  description: "Insights on AI automation, software development, SaaS strategy, CRM systems, and digital transformation.",
  publisher: { "@type": "Organization", name: "ASMAN TECH" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
        <LocaleProvider>
          <Header />
          {children}
          <Footer />
        </LocaleProvider>
      </body>
    </html>
  );
}


