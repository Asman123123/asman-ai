import type { ReactNode } from "react";

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <main className="bg-ink pt-28">
      <section className="px-5 py-20 lg:px-8">
        <article className="mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-white/[0.045] p-8 text-white/64 shadow-card backdrop-blur-xl md:p-12">
          <p className="mb-4 text-xs font-black uppercase tracking-[0.24em] text-aura">Legal</p>
          <h1 className="text-4xl font-black tracking-tight text-white md:text-6xl">{title}</h1>
          <div className="mt-8 space-y-6 leading-8">{children}</div>
        </article>
      </section>
    </main>
  );
}

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="space-y-3">
      <h2 className="text-2xl font-black text-white">{title}</h2>
      <div className="space-y-3">{children}</div>
    </section>
  );
}
