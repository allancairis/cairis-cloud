import { expertise } from "@/data/site";
import { Reveal } from "./motion";

export function Expertise() {
  return (
    <section id="expertise" className="border-y border-white/10 bg-white/[0.025] py-24 md:py-32" aria-labelledby="expertise-title">
      <div className="section-shell">
        <Reveal className="max-w-3xl"><p className="section-kicker">Expertise</p><h2 id="expertise-title" className="heading-lg text-balance">Competências que conectam plataforma, segurança, IA e decisão.</h2></Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {expertise.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.035}>
              <article className="group h-full rounded-lg border border-white/10 bg-panel/70 p-5 transition hover:-translate-y-1 hover:border-cyan/40 hover:bg-white/[0.055]"><item.icon className="h-6 w-6 text-cyan" aria-hidden="true" /><h3 className="mt-8 font-display text-xl font-semibold text-white">{item.title}</h3><p className="mt-4 text-sm leading-7 text-muted">{item.description}</p></article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
