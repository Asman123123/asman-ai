"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronDown, Globe2 } from "lucide-react";
import { useState } from "react";
import { languages, useLocale } from "@/components/i18n/LocaleProvider";

export function LanguageSwitcher() {
  const { lang, setLang } = useLocale();
  const [open, setOpen] = useState(false);
  const current = languages.find((item) => item.code === lang) ?? languages[0];

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="inline-flex h-10 items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 text-sm font-black uppercase text-white/78 transition hover:border-cobalt/50 hover:text-white"
        aria-label="Select language"
      >
        <Globe2 size={16} />
        {current.code}
        <ChevronDown size={14} className={open ? "rotate-180 transition" : "transition"} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.18 }}
            className="absolute right-0 top-12 z-50 w-56 overflow-hidden rounded-2xl border border-white/10 bg-ink/95 p-2 shadow-card backdrop-blur-2xl"
          >
            {languages.map((item) => (
              <button
                key={item.code}
                type="button"
                onClick={() => {
                  setLang(item.code);
                  setOpen(false);
                }}
                className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm font-semibold text-white/72 transition hover:bg-white/10 hover:text-white"
              >
                <span>{item.flag} {item.label}</span>
                {item.code === lang && <Check size={15} className="text-aura" />}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
