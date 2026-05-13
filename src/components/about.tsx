import { Reveal } from "./motion";

export function About() {
  return (
    <section id="sobre" className="section-shell py-24 md:py-32" aria-labelledby="sobre-title">
      <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr]">
        <Reveal>
          <p className="section-kicker">Sobre</p>
          <h2 id="sobre-title" className="heading-lg text-balance">
            Visão executiva com profundidade real de engenharia.
          </h2>
        </Reveal>
        <Reveal delay={0.08} className="space-y-6">
          <p className="body-lg">
            Eu atuo onde arquitetura, segurança, entrega e negócio precisam conversar sem ruído. Lidero iniciativas técnicas estratégicas, defino diretrizes de qualidade e boas práticas, e ajudo times a operar em ambientes de alta responsabilidade.
          </p>
          <p className="body-lg">
            Meu diferencial está na combinação entre maturidade executiva e proximidade real com a construção. Eu entendo o impacto de uma decisão técnica no risco, na velocidade, na experiência dos times e na capacidade da empresa de evoluir.
          </p>
          <p className="body-lg">
            A mesma lógica aparece fora do trabalho: estrada, motocicletas touring, tecnologia, comportamento humano e evolução pessoal. Para mim, sistemas complexos exigem leitura fria, preparo, ritmo e respeito pelo contexto.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
