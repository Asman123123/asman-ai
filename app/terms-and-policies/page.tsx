import type { Metadata } from "next";
import Link from "next/link";
import { Ban, Cookie, CreditCard, FileCheck2, FileText, LockKeyhole, RefreshCcw, Scale, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Policies",
  description: "Important legal information regarding Asman AI services, payments, delivery, privacy, refunds, and acceptable use.",
};

const policyCards = [
  {
    title: "Terms & Conditions",
    href: "/terms",
    icon: Scale,
    text: "Service terms covering requests, proposals, purchases, project agreements, and use of Asman AI services.",
  },
  {
    title: "Privacy Policy",
    href: "/privacy-policy",
    icon: LockKeyhole,
    text: "How submitted business and personal information is collected, used, stored, and protected.",
  },
  {
    title: "Refund Policy",
    href: "/refund-policy",
    icon: RefreshCcw,
    text: "Refund handling for custom digital services, consulting, software work, and project preparation.",
  },
  {
    title: "Cookie Policy",
    href: "/cookie-policy",
    icon: Cookie,
    text: "Information about website cookies, analytics, functionality, and preference technologies.",
  },
  {
    title: "Acceptable Use Policy",
    href: "/acceptable-use-policy",
    icon: ShieldCheck,
    text: "Responsible-use standards for Asman AI systems, software, automation, and AI-enabled services.",
  },
  {
    title: "Payment Terms",
    href: "/payment-terms",
    icon: CreditCard,
    text: "Payment requirements, advance invoicing, project activation, third-party costs, and service fees.",
  },
  {
    title: "Project Delivery Policy",
    href: "/project-delivery-policy",
    icon: FileCheck2,
    text: "Scope approval, delivery timelines, client responsibilities, revisions, delays, and suspension rules.",
  },
  {
    title: "Cancellation Policy",
    href: "/cancellation-policy",
    icon: Ban,
    text: "How cancellations are handled before work begins, after work starts, and during client-caused delays.",
  },
  {
    title: "Intellectual Property Policy",
    href: "/intellectual-property-policy",
    icon: FileText,
    text: "Ownership of final deliverables, reusable frameworks, methods, proprietary tools, and pre-existing assets.",
  },
];

export default function TermsAndPoliciesPage() {
  return (
    <main className="bg-ink pt-28 text-white">
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="mb-5 text-xs font-black uppercase tracking-[0.24em] text-aura">Legal</p>
            <h1 className="text-balance text-5xl font-black leading-[1.02] tracking-tight md:text-7xl">Terms & Policies</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/58">
              Important legal information regarding Asman AI services, payments, delivery, privacy, refunds, and acceptable use.
            </p>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {policyCards.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6 shadow-card backdrop-blur-xl transition hover:-translate-y-1 hover:border-white/24 hover:bg-white/[0.06]"
                >
                  <div className="flex items-start justify-between gap-5">
                    <div className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-aura">
                      <Icon size={21} />
                    </div>
                    <span className="text-sm font-black text-white/30 transition group-hover:text-aura">View</span>
                  </div>
                  <h2 className="mt-8 text-2xl font-black text-white">{item.title}</h2>
                  <p className="mt-4 leading-7 text-white/54">{item.text}</p>
                </Link>
              );
            })}
          </div>

          <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-6 text-sm leading-7 text-white/52">
            Asman AI is a brand operated by ASMAN LLC. These policies should be read together with any accepted proposal, invoice, statement of work, or service agreement.
          </div>
        </div>
      </section>
    </main>
  );
}
