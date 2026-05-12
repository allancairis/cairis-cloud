import { Reveal } from "./motion";

export function About() {
  return (
    <section id="sobre" className="section-shell py-24 md:py-32" aria-labelledby="sobre-title">
      <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr]">
        <Reveal><p className="section-kicker">Sobre</p><h2 id="sobre-title" className="heading-lg text-balance">Visão executiva com profundidade real de engenharia.</h2></Reveal>
        <Reveal delay={0.08} className="space-y-6">
          <p className="body-lg">Allan atua onde arquitetura, segurança, entrega e negócio precisam conversar sem ruído. Como Associate Director no BTG Pactual, lidera iniciativas técnicas estratégicas, define diretrizes de qualidade e boas práticas, e ajuda times a operar em ambientes de alta responsabilidade.</p>
          <p className="body-lg">Seu diferencial está na combinação rara entre maturidade executiva e proximidade com a construção. Ele entende o impacto de uma decisão técnica no risco, na velocidade, na experiência dos times e na capacidade da empresa de evoluir.</p>
          <p className="body-lg">A mesma lógica aparece fora do trabalho: estrada, motocicletas touring, tecnologia, comportamento humano e evolução pessoal. Sistemas complexos exigem leitura fria, preparo, ritmo e respeito pelo contexto.</p>
        </Reveal>
      </div>
    </section>
  );
}
