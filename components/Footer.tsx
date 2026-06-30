"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/components/i18n/LocaleProvider";

export function Footer() {
  const { t } = useLocale();
  return (
    <footer className="border-t border-white/10 bg-[#02050b] px-5 py-16 text-white lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.25fr_.7fr_.7fr_.8fr_.85fr_1fr]">
        <div>
          <Link href="/" className="relative mb-5 block h-12 w-[220px] overflow-hidden" aria-label="Asman AI home">
            <Image src="/brand/asman-ai-white.png" alt="Asman AI" fill sizes="220px" className="object-contain object-left" />
          </Link>
          <p className="max-w-md text-white/62">
            {t.footer.brandText}
          </p>
          <div className="mt-6 flex flex-wrap gap-2 text-xs font-black text-white/48">
            <span className="rounded-full border border-white/10 px-3 py-1">Global Delivery</span>
            <span className="rounded-full border border-white/10 px-3 py-1">{t.services.ai}</span>
            <span className="rounded-full border border-white/10 px-3 py-1">{t.services.software}</span>
            <span className="rounded-full border border-white/10 px-3 py-1">{t.services.saas}</span>
          </div>
        </div>
        <div className="grid content-start gap-3 text-sm text-white/58">
          <strong className="text-white">{t.footer.services}</strong>
          <Link href="/services">{t.services.ai}</Link>
          <Link href="/services">{t.services.software}</Link>
          <Link href="/services">{t.services.saas}</Link>
          <Link href="/services">{t.services.crm}</Link>
        </div>
        <div className="grid content-start gap-3 text-sm text-white/58">
          <strong className="text-white">{t.footer.company}</strong>
          <Link href="/about">{t.nav.about}</Link>
          <Link href="/pricing">{t.nav.pricing}</Link>
          <Link href="/case-studies">{t.nav.caseStudies}</Link>
          <Link href="/contact">{t.nav.contact}</Link>
        </div>
        <div className="grid content-start gap-3 text-sm text-white/58">
          <strong className="text-white">{t.footer.resources}</strong>
          <Link href="/blog">{t.resources.blog}</Link>
          <Link href="/documentation">{t.resources.docs}</Link>
          <Link href="/faqs">{t.resources.faqs}</Link>
          <Link href="/terms-and-policies">{t.common.termsPolicies}</Link>
        </div>
        <div className="grid content-start gap-3 text-sm text-white/58">
          <strong className="text-white">{t.nav.contact}</strong>
          <a href="mailto:hello@asmanai.com">hello@asmanai.com</a>
          <Link href="/contact">{t.common.requestProposal}</Link>
          <Link href="/contact">{t.common.bookStrategy}</Link>
        </div>
        <div>
          <strong className="text-white">{t.footer.newsletter}</strong>
          <p className="mt-3 text-sm leading-6 text-white/52">{t.footer.newsletterText}</p>
          <form className="mt-5 flex gap-2">
            <input aria-label={t.footer.emailPlaceholder} placeholder={t.footer.emailPlaceholder} className="min-w-0 flex-1 rounded-full border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none placeholder:text-white/28" />
            <button type="button" className="rounded-full bg-white px-4 py-3 text-sm font-black text-ink transition hover:bg-aura">{t.footer.subscribe}</button>
          </form>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/38 md:flex-row md:items-center md:justify-between">
        <span>{t.footer.rights}</span>
        <span>{t.footer.legalNotice}</span>
      </div>
    </footer>
  );
}
