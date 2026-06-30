"use client";

import Link from "next/link";
import { Ban, Cookie, CreditCard, FileCheck2, FileText, LockKeyhole, RefreshCcw, Scale, ShieldCheck } from "lucide-react";
import { useLocale } from "@/components/i18n/LocaleProvider";

const policyCards = [
  {
    href: "/terms",
    icon: Scale,
  },
  {
    href: "/privacy-policy",
    icon: LockKeyhole,
  },
  {
    href: "/refund-policy",
    icon: RefreshCcw,
  },
  {
    href: "/cookie-policy",
    icon: Cookie,
  },
  {
    href: "/acceptable-use-policy",
    icon: ShieldCheck,
  },
  {
    href: "/payment-terms",
    icon: CreditCard,
  },
  {
    href: "/project-delivery-policy",
    icon: FileCheck2,
  },
  {
    href: "/cancellation-policy",
    icon: Ban,
  },
  {
    href: "/intellectual-property-policy",
    icon: FileText,
  },
];

export default function TermsAndPoliciesPage() {
  const { t } = useLocale();

  return (
    <main className="bg-ink pt-28 text-white">
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="mb-5 text-xs font-black uppercase tracking-[0.24em] text-aura">{t.legalHub.eyebrow}</p>
            <h1 className="text-balance text-5xl font-black leading-[1.02] tracking-tight md:text-7xl">{t.legalHub.title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/58">
              {t.legalHub.text}
            </p>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {policyCards.map((item, index) => {
              const Icon = item.icon;
              const [title, text] = t.legalHub.cards[index];
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
                    <span className="text-sm font-black text-white/30 transition group-hover:text-aura">{t.common.view}</span>
                  </div>
                  <h2 className="mt-8 text-2xl font-black text-white">{title}</h2>
                  <p className="mt-4 leading-7 text-white/54">{text}</p>
                </Link>
              );
            })}
          </div>

          <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-6 text-sm leading-7 text-white/52">
            {t.legalHub.notice}
          </div>
        </div>
      </section>
    </main>
  );
}
