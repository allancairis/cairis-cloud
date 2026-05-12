"use client";

import { ArrowUpRight, Github, Linkedin, Mail, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { AmbientPulse } from "./motion";
import { stats, systemSignals, terminalLines } from "@/data/site";

export function Hero() {
  return (
    <section id="topo" className="relative isolate min-h-screen overflow-hidden pt-28" aria-labelledby="hero-title">
      <div className="absolute inset-0 -z-10 bg-radial-grid bg-[length:100%_100%,44px_44px,44px_44px] opacity-80" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#05070b_0%,rgba(5,7,11,.9)_46%,rgba(5,7,11,.62)_100%),linear-gradient(180deg,rgba(5,7,11,.2)_0%,#05070b_92%)]" aria-hidden="true" />
      <AmbientPulse />
      <div className="section-shell grid min-h-[calc(100vh-7rem)] items-center gap-12 pb-14 lg:grid-cols-[minmax(0,1.08fr)_minmax(360px,.74fr)]">
        <div className="max-w-4xl">
          <motion.p className="section-kicker" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>Arquitetura executiva | DevSecOps | IA aplicada</motion.p>
          <motion.h1 id="hero-title" className="heading-xl max-w-5xl text-balance" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.08 }}>Arquitetura, Segurança e IA para ambientes que não podem falhar.</motion.h1>
          <motion.p className="body-lg mt-8 max-w-2xl" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.16 }}>Allan Cairis conecta liderança técnica, engenharia hands-on e visão de negócio para transformar complexidade tecnológica em vantagem estratégica.</motion.p>
          <motion.div className="mt-9 flex flex-wrap gap-3" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.24 }} aria-label="Acoes principais">
            <a href="#contato" className="focus-ring inline-flex min-h-12 items-center gap-2 rounded-md bg-mercury px-5 py-3 text-sm font-bold text-carbon transition hover:bg-cyan">Iniciar conversa <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></a>
            <a href="https://www.linkedin.com/in/allancairis/" className="focus-ring inline-flex min-h-12 items-center gap-2 rounded-md border border-white/12 bg-white/8 px-5 py-3 text-sm font-bold text-white transition hover:border-cyan/50 hover:bg-cyan/10"><Linkedin className="h-4 w-4" aria-hidden="true" />LinkedIn</a>
            <a href="https://github.com/allancairis" className="focus-ring inline-flex min-h-12 items-center gap-2 rounded-md border border-white/12 bg-white/8 px-5 py-3 text-sm font-bold text-white transition hover:border-cyan/50 hover:bg-cyan/10"><Github className="h-4 w-4" aria-hidden="true" />GitHub</a>
          </motion.div>
          <motion.dl className="mt-12 grid max-w-3xl gap-3 sm:grid-cols-3" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.32 }}>
            {stats.map((stat) => <div key={stat.label} className="glass rounded-lg p-4"><dt className="text-xs uppercase text-muted">{stat.label}</dt><dd className="mt-3 font-display text-3xl font-bold text-white">{stat.value}</dd></div>)}
          </motion.dl>
        </div>
        <motion.aside className="glass relative overflow-hidden rounded-lg p-5" initial={{ opacity: 0, x: 34 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.18 }} aria-label="Painel executivo">
          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-electric/20 blur-3xl" aria-hidden="true" />
          <div className="relative flex items-start justify-between gap-5 border-b border-white/10 pb-5"><div><p className="text-sm text-muted">Executive technology profile</p><h2 className="mt-2 font-display text-3xl font-semibold text-white">Allan Cairis</h2><p className="mt-2 text-sm text-cyan">Associate Director | BTG Pactual</p></div><div className="grid h-14 w-14 shrink-0 place-items-center rounded-md border border-cyan/30 bg-cyan/10"><ShieldCheck className="h-7 w-7 text-cyan" aria-hidden="true" /></div></div>
          <div className="relative mt-5 grid grid-cols-2 gap-3">{systemSignals.map((item) => <div key={item.label} className="rounded-lg border border-white/10 bg-black/24 p-4"><item.icon className="h-5 w-5 text-cyan" aria-hidden="true" /><p className="mt-4 text-sm font-semibold text-white">{item.label}</p></div>)}</div>
          <div className="relative mt-5 rounded-lg border border-white/10 bg-[#05080d]/86 p-4 font-mono text-xs text-cyan/90">{terminalLines.map((line) => <p key={line} className="mb-2 last:mb-0">{line}</p>)}</div>
          <a href="mailto:allan@cairis.cloud" className="focus-ring relative mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md border border-white/12 bg-white/8 px-4 py-3 text-sm font-bold text-white transition hover:border-cyan/50 hover:bg-cyan/10"><Mail className="h-4 w-4" aria-hidden="true" />allan@cairis.cloud</a>
        </motion.aside>
      </div>
    </section>
  );
}
