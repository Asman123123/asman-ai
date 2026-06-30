import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-ink px-5 text-white">
      <div className="max-w-xl text-center">
        <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-aura">404</p>
        <h1 className="text-5xl font-black tracking-tight md:text-7xl">Page not found</h1>
        <p className="mt-6 text-white/58">The page you are looking for does not exist or has moved.</p>
        <Link href="/" className="mt-8 inline-flex rounded-full bg-white px-6 py-4 text-sm font-black text-ink transition hover:bg-aura">Back to Home</Link>
      </div>
    </main>
  );
}
