import { initiatives } from "@/data/site";
import { Reveal } from "./motion";

export function Projects() {
  return (
    <section id="iniciativas" className="section-shell py-24 md:py-32" aria-labelledby="iniciativas-title">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal><p className="section-kicker">Iniciativas</p><h2 id="iniciativas-title" className="heading-lg text-balance">Projetos conceituais inspirados em problemas reais de escala.</h2></Reveal>
        <div className="grid gap-4">
          {initiatives.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.04}>
              <article className="glass grid gap-4 rounded-lg p-5 md:grid-cols-[1fr_auto] md:items-center"><div><p className="text-xs font-bold uppercase tracking-[0.16em] text-cyan">{project.signal}</p><h3 className="mt-3 font-display text-2xl font-semibold text-white">{project.title}</h3><p className="mt-3 max-w-2xl leading-7 text-muted">{project.description}</p></div><span className="hidden h-px w-24 bg-gradient-to-r from-cyan to-transparent md:block" aria-hidden="true" /></article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
