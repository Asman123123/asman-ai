"use client";

import en from "@/locales/en.json";
import ru from "@/locales/ru.json";
import tr from "@/locales/tr.json";
import tk from "@/locales/tk.json";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

export const languages = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "ru", label: "Русский", flag: "🇷🇺" },
  { code: "tr", label: "Türkçe", flag: "🇹🇷" },
  { code: "tk", label: "Türkmen", flag: "🇹🇲" },
] as const;

type Language = (typeof languages)[number]["code"];
type Dictionary = typeof en;

const dictionaries: Record<Language, Dictionary> = { en, ru, tr, tk };

const LocaleContext = createContext<{
  lang: Language;
  setLang: (lang: Language) => void;
  t: Dictionary;
} | null>(null);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("en");

  useEffect(() => {
    const saved = window.localStorage.getItem("asman-language") as Language | null;
    if (saved && saved in dictionaries) setLangState(saved);
  }, []);

  const setLang = (next: Language) => {
    setLangState(next);
    window.localStorage.setItem("asman-language", next);
    document.documentElement.lang = next;
  };

  const value = useMemo(() => ({ lang, setLang, t: dictionaries[lang] }), [lang]);
  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) throw new Error("useLocale must be used inside LocaleProvider");
  return context;
}
