import { ArrowUpRight, Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { contactLinks } from "@/data/site";
import { Reveal } from "./motion";

const iconMap = { LinkedIn: Linkedin, GitHub: Github, Email: Mail, WhatsApp: MessageCircle };

export function Contact() {
  return (
    <section id="contato" className="section-shell pb-24 md:pb-32" aria-labelledby="contato-title">
      <div className="glass grid gap-10 rounded-lg p-6 md:p-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <p className="section-kicker">Contato</p>
          <h2 id="contato-title" className="heading-lg text-balance">Conversas boas começam com contexto.</h2>
          <p className="body-lg mt-6">Consultoria, arquitetura, automação com IA, governança técnica, integração de fornecedores ou uma conversa estratégica sobre tecnologia aplicada ao negócio.</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {contactLinks.map((link) => { const Icon = iconMap[link.label as keyof typeof iconMap]; return <a key={link.label} href={link.href} className="focus-ring inline-flex items-center justify-between gap-3 rounded-md border border-white/10 bg-black/24 px-4 py-3 text-sm font-semibold text-white transition hover:border-cyan/50 hover:bg-cyan/10"><span className="inline-flex items-center gap-2"><Icon className="h-4 w-4 text-cyan" aria-hidden="true" />{link.label}</span><ArrowUpRight className="h-4 w-4" aria-hidden="true" /></a>; })}
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <form className="grid gap-4" action="mailto:allan@cairis.cloud" method="post" encType="text/plain">
            <div className="grid gap-4 sm:grid-cols-2"><label className="grid gap-2 text-sm font-semibold text-white">Nome<input name="nome" className="focus-ring min-h-12 rounded-md border border-white/10 bg-black/28 px-4 text-white placeholder:text-muted" placeholder="Seu nome" /></label><label className="grid gap-2 text-sm font-semibold text-white">Email<input name="email" type="email" className="focus-ring min-h-12 rounded-md border border-white/10 bg-black/28 px-4 text-white placeholder:text-muted" placeholder="voce@empresa.com" /></label></div>
            <label className="grid gap-2 text-sm font-semibold text-white">Tema<select name="tema" className="focus-ring min-h-12 rounded-md border border-white/10 bg-black/28 px-4 text-white" defaultValue="Arquitetura e estrategia"><option>Arquitetura e estrategia</option><option>DevSecOps e governanca</option><option>IA, RAG e automacao</option><option>Networking executivo</option></select></label>
            <label className="grid gap-2 text-sm font-semibold text-white">Mensagem<textarea name="mensagem" rows={6} className="focus-ring resize-y rounded-md border border-white/10 bg-black/28 px-4 py-3 text-white placeholder:text-muted" placeholder="Contexto, desafio, urgencia e objetivo." /></label>
            <button type="submit" className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-mercury px-5 py-3 text-sm font-bold text-carbon transition hover:bg-cyan">Enviar mensagem <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
