"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { navItems } from "@/data/site";

export function Header() {
  return (
    <motion.header initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="fixed left-0 right-0 top-0 z-40 border-b border-white/10 bg-carbon/72 backdrop-blur-2xl" aria-label="Navegacao principal">
      <div className="section-shell flex min-h-20 items-center justify-between gap-5">
        <a href="#topo" className="focus-ring flex items-center gap-3 rounded-md">
          <span className="grid h-9 w-9 place-items-center rounded-md border border-white/15 bg-white/8 font-display text-sm font-bold text-cyan shadow-glow">AC</span>
          <span className="hidden text-sm font-semibold text-mercury sm:inline">Allan Cairis</span>
        </a>
        <nav className="hidden items-center gap-7 text-sm text-muted md:flex" aria-label="Secoes">
          {navItems.map((item) => <a key={item.href} className="focus-ring rounded-md transition hover:text-white" href={item.href}>{item.label}</a>)}
        </nav>
        <a href="#contato" className="focus-ring inline-flex items-center gap-2 rounded-md border border-white/12 bg-white/8 px-4 py-2 text-sm font-semibold text-white transition hover:border-cyan/50 hover:bg-cyan/10">
          Conversar <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </motion.header>
  );
}
