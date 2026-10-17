import SectionHeading from "../../components/SectionHeading";
import { aboutStats } from "../../data/home";
import { KEY_FIGURES, SITE } from "../../data/site";
import Img from "../../components/Img";

export default function About() {
  return (
    <section id="apropos" className="bg-background py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">
        <Img
          name="about"
          sizes="(min-width: 1024px) 576px, 100vw"
          alt={`L'équipe ${SITE.name}`}
          className="w-full rounded-xl object-cover shadow-2xl"
        />
        <div>
          <SectionHeading
            align="left"
            large
            eyebrow="À propos"
            title="Une vision à long terme pour un impact durable."
          />
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Fondé en {KEY_FIGURES.founded}, {SITE.name} est né d'une conviction : rendre
            l'investissement accessible à tous, indépendamment du capital de départ ou de
            l'expérience préalable.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Notre ambition à long terme est d'évoluer vers un fonds d'investissement agréé,
            permettant à nos membres d'accéder à un éventail encore plus large d'instruments
            financiers et de stratégies patrimoniales.
          </p>
          <dl className="mt-10 grid grid-cols-2 gap-6">
            {aboutStats.map(({ label, value }) => (
              <div key={label} className="border-l-2 border-gold pl-4">
                <dd className="font-display text-2xl font-bold text-foreground">{value}</dd>
                <dt className="text-sm text-muted-foreground">{label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}