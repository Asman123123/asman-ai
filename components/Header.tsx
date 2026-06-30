"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LanguageSwitcher } from "@/components/i18n/LanguageSwitcher";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { cn } from "@/lib/utils";

function Dropdown({ label, items }: { label: string; items: Array<[string, string]> }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button className="inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold text-white/62 transition hover:bg-white/8 hover:text-white">
        {label} <ChevronDown size={14} className={open ? "rotate-180 transition" : "transition"} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.16 }}
            className="absolute left-0 top-11 z-50 w-72 rounded-2xl border border-white/10 bg-ink/95 p-2 shadow-card backdrop-blur-2xl"
          >
            {items.map(([itemLabel, href]) => (
              <Link key={itemLabel} href={href} className="block rounded-xl px-4 py-3 text-sm font-semibold text-white/66 transition hover:bg-white/10 hover:text-white">
                {itemLabel}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLocale();

  const serviceItems: Array<[string, string]> = [
    [t.services.ai, "/services"],
    [t.services.software, "/services"],
    [t.services.saas, "/services"],
    [t.services.voice, "/services"],
    [t.services.crm, "/services"],
    [t.services.enterprise, "/services"],
  ];
  const solutionItems: Array<[string, string]> = [
    [t.solutions.logistics, "/industries"],
    [t.solutions.realEstate, "/industries"],
    [t.solutions.healthcare, "/industries"],
    [t.solutions.finance, "/industries"],
    [t.solutions.ecommerce, "/industries"],
    [t.solutions.professional, "/industries"],
  ];
  const resourceItems: Array<[string, string]> = [
    [t.resources.blog, "/blog"],
    [t.resources.docs, "/documentation"],
    [t.resources.faqs, "/faqs"],
    ["Terms & Policies", "/terms-and-policies"],
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const simpleLinks: Array<[string, string]> = [
    [t.nav.home, "/"],
    [t.nav.caseStudies, "/case-studies"],
    [t.nav.about, "/about"],
  ];

  return (
    <header className={cn(
      "fixed inset-x-0 top-0 z-50 transition-all duration-300",
      scrolled ? "border-b border-white/10 bg-ink/82 shadow-[0_16px_70px_rgba(0,0,0,.35)] backdrop-blur-2xl" : "bg-ink/35 backdrop-blur-xl",
    )}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link href="/" className="relative block h-10 w-[168px] shrink-0 overflow-hidden md:w-[190px]" aria-label="ASMAN TECH home">
          <Image src="/brand/asman-ai-white.png" alt="ASMAN TECH" fill sizes="190px" priority className="object-contain object-left" />
        </Link>
        <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.035] p-1 xl:flex">
          <Link href="/" className={cn("rounded-full px-4 py-2 text-sm font-semibold text-white/62 transition hover:bg-white/8 hover:text-white", pathname === "/" && "bg-white/10 text-white")}>{t.nav.home}</Link>
          <Dropdown label={t.nav.services} items={serviceItems} />
          <Dropdown label={t.nav.solutions} items={solutionItems} />
          <Link href="/case-studies" className={cn("rounded-full px-4 py-2 text-sm font-semibold text-white/62 transition hover:bg-white/8 hover:text-white", pathname === "/case-studies" && "bg-white/10 text-white")}>{t.nav.caseStudies}</Link>
          <Link href="/about" className={cn("rounded-full px-4 py-2 text-sm font-semibold text-white/62 transition hover:bg-white/8 hover:text-white", pathname === "/about" && "bg-white/10 text-white")}>{t.nav.about}</Link>
          <Dropdown label={t.nav.resources} items={resourceItems} />
        </div>
        <div className="hidden items-center gap-3 xl:flex">
          <LanguageSwitcher />
          <Link href="/contact" className="rounded-full bg-white px-5 py-2.5 text-sm font-bold text-ink transition hover:bg-aura">Request Proposal</Link>
        </div>
        <div className="flex items-center gap-2 xl:hidden">
          <LanguageSwitcher />
          <button className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </nav>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-h-[calc(100dvh-4.75rem)] overflow-y-auto overscroll-contain border-t border-white/10 bg-ink/95 px-5 py-5 shadow-[0_24px_80px_rgba(0,0,0,.45)] backdrop-blur-2xl xl:hidden"
        >
          <div className="grid gap-2 pb-[max(1rem,env(safe-area-inset-bottom))]">
            {simpleLinks.map(([label, href]) => (
              <Link key={href} href={href} onClick={() => setOpen(false)} className={cn("rounded-2xl px-4 py-3 text-lg font-semibold text-white/78", pathname === href && "bg-white/10 text-white")}>{label}</Link>
            ))}
            {[ [t.nav.services, serviceItems], [t.nav.solutions, solutionItems], [t.nav.resources, resourceItems] ].map(([groupLabel, items]) => (
              <div key={groupLabel as string} className="rounded-2xl border border-white/10 bg-white/[0.035] p-3">
                <div className="px-2 pb-2 text-xs font-black uppercase tracking-[0.2em] text-aura">{groupLabel as string}</div>
                {(items as Array<[string, string]>).map(([label, href]) => (
                  <Link key={label} href={href} onClick={() => setOpen(false)} className="block rounded-xl px-3 py-2 text-sm font-semibold text-white/64 hover:bg-white/10 hover:text-white">{label}</Link>
                ))}
              </div>
            ))}
            <Link href="/contact" onClick={() => setOpen(false)} className="rounded-full bg-cobalt px-5 py-3 text-center font-bold text-white">Request Proposal</Link>
          </div>
        </motion.div>
      )}
    </header>
  );
}
