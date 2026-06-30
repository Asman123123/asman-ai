"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { CalendarClock, Send } from "lucide-react";
import Link from "next/link";
import { useLocale } from "@/components/i18n/LocaleProvider";

type State = "idle" | "loading" | "success" | "error";

const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || "mailto:hello@asmanai.com?subject=Strategy%20Call%20Request%20-%20Asman%20AI";

export function ContactForm() {
  const { t } = useLocale();
  const [state, setState] = useState<State>("idle");
  const [message, setMessage] = useState("");
  const isMailLink = useMemo(() => calendlyUrl.startsWith("mailto:"), []);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("loading");
    setMessage("");

    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || t.contact.form.failed);
      setState("success");
      setMessage(data.message || t.contact.form.success);
      form.reset();
    } catch (error) {
      setState("error");
      setMessage(error instanceof Error ? error.message : t.contact.form.error);
    }
  }

  return (
    <motion.form
      onSubmit={onSubmit}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="grid gap-4 rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,.07),rgba(255,255,255,.03))] p-6 shadow-card backdrop-blur-2xl md:grid-cols-2 md:p-8"
    >
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <Field label={t.contact.form.fullName} name="fullName" required />
      <Field label={t.contact.form.companyName} name="companyName" required />
      <Field label={t.contact.form.businessEmail} name="email" type="email" required />
      <Field label={t.contact.form.phoneNumber} name="phone" />
      <Select label={t.contact.form.serviceNeeded} name="service" placeholder={t.common.select} options={[t.services.ai, t.services.software, t.services.saas, t.services.voice, t.services.crm, t.services.enterprise]} />
      <Select label={t.contact.form.estimatedBudget} name="budget" placeholder={t.common.select} options={["$5,000 - $10,000", "$10,000 - $25,000", "$25,000 - $50,000", "$50,000 - $100,000", "$100,000+"]} />
      <label className="grid gap-2 text-sm font-bold text-white md:col-span-2">
        {t.contact.form.projectDescription}
        <textarea
          name="message"
          required
          rows={6}
          minLength={20}
          placeholder={t.contact.form.placeholder}
          className="rounded-2xl border border-white/10 bg-ink/70 px-4 py-3 text-white outline-none transition placeholder:text-white/28 focus:border-aura"
        />
      </label>
      <button
        disabled={state === "loading"}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-black text-ink transition hover:bg-aura disabled:opacity-60"
      >
        <Send size={16} />
        {state === "loading" ? t.common.sending : t.contact.submit}
      </button>
      <a
        href={calendlyUrl}
        target={isMailLink ? undefined : "_blank"}
        rel={isMailLink ? undefined : "noopener"}
        className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-6 py-4 text-sm font-black text-white transition hover:border-cobalt/70"
      >
        <CalendarClock size={16} />
        {t.contact.book}
      </a>
      <label className="flex gap-3 text-xs leading-5 text-white/48 md:col-span-2">
        <input type="checkbox" name="consent" required className="mt-1 h-4 w-4 rounded border-white/20 bg-ink accent-white" />
        <span>
          {t.contact.form.consentPrefix}{" "}
          <Link href="/terms" className="text-aura hover:text-white">{t.legal.terms}</Link>
          {" "}{t.contact.form.and}{" "}
          <Link href="/privacy-policy" className="text-aura hover:text-white">{t.legal.privacy}</Link>.
        </span>
      </label>
      {message && <p className={state === "success" ? "text-aura md:col-span-2" : "text-red-300 md:col-span-2"}>{message}</p>}
    </motion.form>
  );
}

function Field({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <label className="grid gap-2 text-sm font-bold text-white">
      {label}
      <input
        name={name}
        type={type}
        required={required}
        className="rounded-2xl border border-white/10 bg-ink/70 px-4 py-3 text-white outline-none transition placeholder:text-white/28 focus:border-aura"
      />
    </label>
  );
}

function Select({ label, name, options, placeholder }: { label: string; name: string; options: string[]; placeholder: string }) {
  return (
    <label className="grid gap-2 text-sm font-bold text-white">
      {label}
      <select name={name} required className="rounded-2xl border border-white/10 bg-ink/70 px-4 py-3 text-white outline-none transition focus:border-aura">
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  );
}
