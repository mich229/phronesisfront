import SectionHeading from "../../components/SectionHeading";
import { team } from "../../data/club";
import { SITE } from "../../data/site";
import Img from "../../components/Img";

export default function Team() {
  return (
    <section id="equipe" className="bg-background py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          className="mb-16"
          eyebrow="L'équipe dirigeante"
          title={`Le Bureau de ${SITE.name}.`}
          subtitle="Des professionnels passionnés, élus démocratiquement par les membres, engagés au service de la communauté et de sa performance."
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map(({ name, role, bio, img }) => (
            <article
              key={name}
              className="group overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:shadow-xl"
            >
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <Img
                  name={img}
                  sizes="(min-width: 1024px) 384px, (min-width: 640px) 50vw, 100vw"
                  alt={`Portrait de ${name}`}
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-gold">{role}</p>
                <h3 className="mb-3 font-display text-lg font-bold text-foreground">{name}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{bio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}