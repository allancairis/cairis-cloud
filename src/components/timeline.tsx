import { timeline } from "@/data/site";
import { Reveal } from "./motion";

export function Timeline() {
  return (
    <section className="section-shell py-24 md:py-32" aria-labelledby="timeline-title">
      <Reveal className="max-w-3xl">
        <p className="section-kicker">Timeline</p>
        <h2 id="timeline-title" className="heading-lg text-balance">
          Minha trajetória é orientada por responsabilidade, construção e evolução.
        </h2>
      </Reveal>
      <div className="mt-14">
        {timeline.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.04}>
            <article className="grid gap-5 border-t border-white/10 py-7 md:grid-cols-[220px_1fr]">
              <p className="font-mono text-sm text-cyan">{item.period}</p>
              <div>
                <h3 className="font-display text-2xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 max-w-3xl leading-7 text-muted">{item.text}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
