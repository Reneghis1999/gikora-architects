import Reveal from "@/components/site/Reveal";
import { Badge, Container } from "@/components/site/ui";

function Mark({ children }: { children: React.ReactNode }) {
  return (
    <mark className="rounded-lg bg-sand px-1.5 text-ink [box-decoration-break:clone] [-webkit-box-decoration-break:clone]">
      {children}
    </mark>
  );
}

export default function Philosophy() {
  return (
    <section id="philosophy" className="pb-20 sm:pb-28">
      <Container>
        <Reveal className="rounded-[2rem] bg-white px-6 py-14 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
          <Badge>Notre philosophie</Badge>

          <p className="mt-8 max-w-5xl text-3xl leading-[1.18] tracking-[-0.03em] text-ink sm:text-4xl lg:text-[3.2rem]">
            L’architecture n’est pas seulement une forme. C’est une manière de
            penser, de vivre et de ressentir l’espace : trouver{" "}
            <Mark>l’équilibre entre fonctionnalité, esthétique et identité</Mark>{" "}
            pour donner naissance à une architecture qui traverse le temps.
          </p>

          <div className="mt-12 flex flex-col gap-6 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
            <blockquote className="max-w-2xl text-base leading-7 text-taupe sm:text-lg">
              « Chaque ligne tracée doit avoir un sens. Chaque lumière doit
              raconter quelque chose. Chaque espace doit respirer. »
            </blockquote>
            <p className="shrink-0 text-[14px] text-ink">— Gikora Architects</p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
