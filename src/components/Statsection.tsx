import { Container } from "@/components/site/ui";

const stats = [
  { value: "50+", label: "Projets réalisés" },
  { value: "9", label: "Membres dans l’équipe" },
  { value: "6+", label: "Années d’expérience" },
  { value: "6", label: "Pays d’intervention" },
];

export default function StatsSection() {
  return (
    <section aria-label="Gikora Architects en chiffres" className="pt-3">
      <Container>
        <div className="grid grid-cols-2 rounded-[2rem] bg-white px-4 py-8 sm:px-8 lg:grid-cols-4 lg:py-10">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={
                "px-4 py-4 sm:px-6 " +
                (index % 2 === 1 ? "border-l border-line " : "") +
                (index >= 2 ? "lg:border-l lg:border-line " : "") +
                (index === 2 ? "border-t border-line pt-6 lg:border-t-0 lg:pt-4 " : "") +
                (index === 3 ? "border-t border-line pt-6 lg:border-t-0 lg:pt-4" : "")
              }
            >
              <p className="text-4xl tracking-[-0.04em] text-ink sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-[14px] text-taupe">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
