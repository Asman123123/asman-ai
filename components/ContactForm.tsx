"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { CalendarClock, Send } from "lucide-react";
import Link from "next/link";
import { useLocale } from "@/components/i18n/LocaleProvider";

type State = "idle" | "loading" | "success" | "error";

const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || "mailto:asman.usa88@gmail.com?subject=Strategy%20Call%20Request%20-%20ASMAN%20TECH";

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
      if (!response.ok) throw new Error(data.error || "Submission failed");
      setState("success");
      setMessage(data.message || "Request received. Our team will review your request and respond with the next steps.");
      form.reset();
    } catch (error) {
      setState("error");
      setMessage(error instanceof Error ? error.message : "Something went wrong.");
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
      <Field label="Full Name" name="fullName" required />
      <Field label="Company Name" name="companyName" required />
      <Field label="Business Email" name="email" type="email" required />
      <Field label="Phone Number" name="phone" />
      <Select label="Service Needed" name="service" options={["AI Automation", "Software Development", "SaaS Development", "AI Voice Agents", "CRM Automation", "Enterprise Solutions"]} />
      <Select label="Estimated Budget" name="budget" options={["$5,000 - $10,000", "$10,000 - $25,000", "$25,000 - $50,000", "$50,000 - $100,000", "$100,000+"]} />
      <label className="grid gap-2 text-sm font-bold text-white md:col-span-2">
        Project Description
        <textarea
          name="message"
          required
          rows={6}
          minLength={20}
          placeholder="Tell us about your workflow, product, or automation goal."
          className="rounded-2xl border border-white/10 bg-ink/70 px-4 py-3 text-white outline-none transition placeholder:text-white/28 focus:border-aura"
        />
      </label>
      <button
        disabled={state === "loading"}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-black text-ink transition hover:bg-aura disabled:opacity-60"
      >
        <Send size={16} />
        {state === "loading" ? "Sending..." : "Request Proposal"}
      </button>
      <a
        href={calendlyUrl}
        target={isMailLink ? undefined : "_blank"}
        rel={isMailLink ? undefined : "noopener"}
        className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-6 py-4 text-sm font-black text-white transition hover:border-cobalt/70"
      >
        <CalendarClock size={16} />
        Book a Strategy Call
      </a>
      <label className="flex gap-3 text-xs leading-5 text-white/48 md:col-span-2">
        <input type="checkbox" name="consent" required className="mt-1 h-4 w-4 rounded border-white/20 bg-ink accent-white" />
        <span>
          By submitting this form, you agree to our{" "}
          <Link href="/terms" className="text-aura hover:text-white">Terms & Conditions</Link>
          {" "}and{" "}
          <Link href="/privacy-policy" className="text-aura hover:text-white">Privacy Policy</Link>.
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

function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <label className="grid gap-2 text-sm font-bold text-white">
      {label}
      <select name={name} required className="rounded-2xl border border-white/10 bg-ink/70 px-4 py-3 text-white outline-none transition focus:border-aura">
        <option value="">Select option</option>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  );
}
