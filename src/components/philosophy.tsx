import { philosophy } from "@/data/site";
import { Reveal } from "./motion";

export function Philosophy() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-[#070b11] py-24 md:py-32" aria-labelledby="filosofia-title">
      <div className="absolute inset-0 bg-radial-grid bg-[length:100%_100%,38px_38px,38px_38px] opacity-40" aria-hidden="true" />
      <div className="section-shell relative">
        <Reveal className="max-w-4xl"><p className="section-kicker">Filosofia profissional</p><h2 id="filosofia-title" className="heading-lg text-balance">Engenharia excelente é a que torna o complexo operável.</h2></Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-5">
          {philosophy.map((item, index) => <Reveal key={item.title} delay={index * 0.04}><article className="h-full rounded-lg border border-white/10 bg-black/24 p-5"><span className="font-mono text-sm text-cyan">0{index + 1}</span><h3 className="mt-7 font-display text-xl font-semibold text-white">{item.title}</h3><p className="mt-4 text-sm leading-7 text-muted">{item.text}</p></article></Reveal>)}
        </div>
      </div>
    </section>
  );
}
