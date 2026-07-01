"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Activity, DatabaseZap, Sparkles, Workflow } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import * as THREE from "three";
import { useLocale } from "@/components/i18n/LocaleProvider";

export function Hero() {
  const { t } = useLocale();
  const ref = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 60, damping: 18 });
  const smoothY = useSpring(mouseY, { stiffness: 60, damping: 18 });
  const panelX = useTransform(smoothX, [-0.5, 0.5], [-18, 18]);
  const panelY = useTransform(smoothY, [-0.5, 0.5], [-12, 12]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 1000);
    camera.position.z = 70;

    const group = new THREE.Group();
    scene.add(group);

    const nodeMaterial = new THREE.PointsMaterial({ color: 0x9cc7ff, size: 0.78, transparent: true, opacity: 0.72 });
    const positions: number[] = [];
    for (let i = 0; i < 190; i++) {
      positions.push((Math.random() - 0.5) * 112, (Math.random() - 0.5) * 64, (Math.random() - 0.5) * 42);
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    group.add(new THREE.Points(geometry, nodeMaterial));

    const linePositions: number[] = [];
    for (let i = 0; i < positions.length; i += 9) {
      linePositions.push(
        positions[i],
        positions[i + 1],
        positions[i + 2],
        positions[(i + 9) % positions.length],
        positions[(i + 10) % positions.length],
        positions[(i + 11) % positions.length],
      );
    }

    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute("position", new THREE.Float32BufferAttribute(linePositions, 3));
    group.add(new THREE.LineSegments(lineGeo, new THREE.LineBasicMaterial({ color: 0x4d8dff, transparent: true, opacity: 0.14 })));

    let frame = 0;
    const resize = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      renderer.setSize(width, height, false);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    const animate = () => {
      frame = requestAnimationFrame(animate);
      group.rotation.y += 0.0015;
      group.rotation.x = Math.sin(Date.now() * 0.00035) * 0.08;
      renderer.render(scene, camera);
    };

    resize();
    animate();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      renderer.dispose();
      geometry.dispose();
      lineGeo.dispose();
    };
  }, []);

  useEffect(() => {
    if (!ref.current) return;
    gsap.fromTo(
      ref.current.querySelectorAll(".hero-stagger"),
      { opacity: 0, y: 28 },
      { opacity: 1, y: 0, duration: 0.95, stagger: 0.11, ease: "power3.out" },
    );
  }, []);

  return (
    <section
      ref={ref}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        mouseX.set((event.clientX - rect.left) / rect.width - 0.5);
        mouseY.set((event.clientY - rect.top) / rect.height - 0.5);
      }}
      className="relative min-h-[92svh] overflow-hidden bg-mesh px-5 pt-28 text-white md:pt-32 lg:px-8"
    >
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full opacity-35 md:opacity-45 lg:opacity-50" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,5,10,.98),rgba(3,5,10,.78)_47%,rgba(3,5,10,.35))]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />

      <div className="relative z-10 mx-auto grid min-h-[calc(92svh-7rem)] max-w-7xl items-center gap-10 pb-12 lg:grid-cols-[1.05fr_.95fr]">
        <div className="max-w-4xl">
          <div className="hero-stagger mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-sm font-semibold text-aura/88 backdrop-blur-xl">
            <Sparkles size={16} /> {t.hero.badge}
          </div>
          <h1 className="hero-stagger max-w-4xl text-balance text-5xl font-black leading-[.96] tracking-tight md:text-7xl xl:text-8xl">
            {t.hero.headline}
          </h1>
          <p className="hero-stagger mt-6 max-w-2xl text-lg leading-8 text-white/68 md:text-xl">
            {t.hero.subheadline}
          </p>
          <div className="hero-stagger mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href="/contact" className="group inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 py-4 text-sm font-black text-ink transition hover:bg-aura">
              {t.hero.primary} <ArrowRight className="ml-2 inline h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
            <Link href="/contact" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/14 bg-white/[0.05] px-6 py-4 text-sm font-black text-white backdrop-blur-xl transition hover:border-cobalt/70 hover:bg-cobalt/10">
              {t.hero.secondary}
            </Link>
          </div>
          <div className="hero-stagger mt-8 grid gap-3 sm:grid-cols-3">
            {t.hero.cards.map(([title, text]) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">
                <div className="text-sm font-black text-white">{title}</div>
                <div className="mt-1 text-xs text-white/45">{text}</div>
              </div>
            ))}
          </div>
        </div>

        <motion.div style={{ x: panelX, y: panelY }} className="hero-stagger hidden lg:block">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-4 shadow-card backdrop-blur-2xl">
            <div className="relative rounded-[1.5rem] border border-white/10 bg-[#05070d]/88 p-6">
              <div className="flex flex-col gap-3 border-b border-white/10 pb-5">
                <div className="min-w-0">
                  <div className="text-xs font-black uppercase tracking-[0.2em] text-aura">{t.hero.panelEyebrow}</div>
                  <div className="mt-1 text-balance text-xl font-black leading-tight sm:text-2xl">{t.hero.panelTitle}</div>
                </div>
                <div className="w-fit shrink-0 rounded-full border border-white/10 bg-white/[0.035] px-3 py-1 text-xs font-black leading-tight text-white/64">{t.common.mapped}</div>
              </div>

              <div className="mt-6 grid gap-4">
                {[Workflow, DatabaseZap, Activity].map((Icon, index) => {
                  const [title, text, value] = t.hero.panelRows[index];
                  const TypedIcon = Icon;
                  return (
                    <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex min-w-0 items-start gap-3">
                          <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 text-aura"><TypedIcon size={19} /></span>
                          <span className="min-w-0">
                            <span className="block text-sm font-black leading-snug text-white">{title}</span>
                            <span className="block text-xs leading-snug text-white/42">{text}</span>
                          </span>
                        </div>
                        <span className="shrink-0 text-right text-sm font-black leading-snug text-aura">{value}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                <div className="mb-4 flex items-center justify-between text-xs font-black uppercase tracking-[0.18em] text-white/42">
                  <span>{t.common.throughput}</span><span>{t.common.last30Days}</span>
                </div>
                <div className="flex h-28 items-end gap-2">
                  {[28, 44, 39, 62, 58, 76, 86, 78, 92].map((height, index) => (
                    <motion.span
                      key={index}
                      initial={{ height: 8 }}
                      animate={{ height: `${height}%` }}
                      transition={{ duration: 0.9, delay: index * 0.06, ease: "easeOut" }}
                      className="flex-1 rounded-t-md bg-gradient-to-t from-cobalt/70 to-aura"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
