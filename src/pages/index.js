import React from "react";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["500"],
});

export default function Home() {
  return (
    <main
      className={`${spaceGrotesk.className} relative isolate min-h-screen overflow-hidden bg-slate-950 text-slate-100`}
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.22),transparent_42%),radial-gradient(circle_at_20%_80%,rgba(16,185,129,0.18),transparent_45%)]" />
      <div className="absolute -top-40 left-1/2 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl" />

      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-6 py-20 sm:px-10 lg:px-16">
        <p
          className={`${jetBrainsMono.className} mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-1 text-xs uppercase tracking-[0.2em] text-cyan-200`}
        >
          CI READY
        </p>

        <h1 className="max-w-4xl text-4xl font-semibold leading-tight sm:text-6xl">
          Ship with confidence using
          <span className="block bg-linear-to-r from-cyan-300 via-emerald-300 to-sky-400 bg-clip-text text-transparent">
            Continuous Integration.
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
          Every push runs tests, checks code quality, and keeps your main branch
          stable. This hero section is a clean Tailwind v4 starter for your CI
          page.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <button
            type="button"
            className="rounded-xl bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
          >
            Start Pipeline
          </button>
          <button
            type="button"
            className="rounded-xl border border-slate-700 bg-slate-900/70 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/50 hover:text-cyan-200"
          >
            View Workflow
          </button>
        </div>

        <div className="mt-12 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
            <p className="text-xs uppercase tracking-[0.15em] text-slate-400">
              Auto Test
            </p>
            <p className="mt-2 text-lg font-medium text-slate-100">Unit + Lint</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
            <p className="text-xs uppercase tracking-[0.15em] text-slate-400">
              Fast Feedback
            </p>
            <p className="mt-2 text-lg font-medium text-slate-100">Under 3 min</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
            <p className="text-xs uppercase tracking-[0.15em] text-slate-400">
              Safer Deploys
            </p>
            <p className="mt-2 text-lg font-medium text-slate-100">Green builds</p>
          </div>
        </div>
      </section>
    </main>
  );
}
