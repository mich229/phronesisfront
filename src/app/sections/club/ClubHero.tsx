import { ArrowRight } from "lucide-react";
import Breadcrumb from "../../components/Breadcrumb";
import Button from "../../components/Button";
import { clubHeroStats } from "../../data/club";
import { SITE } from "../../data/site";

export default function ClubHero() {
  return (
    <section className="bg-navy pt-[68px]">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="mb-8">
          <Breadcrumb current="Le Club" />
        </div>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-gold">Le Club</span>
            <h1 className="mt-3 font-display text-5xl font-bold leading-[1.1] text-white lg:text-6xl">
              Une communauté,
              <br />
              <span className="text-gold">une ambition.</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/60">
              {SITE.name} est plus qu'un club d'investissement. C'est un espace de partage,
              d'apprentissage et de croissance collective — fondé sur la transparence, la rigueur
              et l'intelligence de groupe.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button to="/le-club#equipe" className="!px-6 !py-3">
                Rencontrer l'équipe <ArrowRight size={14} />
              </Button>
              <Button to="/adhesion" variant="ghost-light" className="!px-6 !py-3">
                Nous rejoindre
              </Button>
            </div>
          </div>

          <dl className="grid grid-cols-2 gap-4">
            {clubHeroStats.map(({ label, value }) => (
              <div key={label} className="rounded-xl border border-white/10 bg-white/[0.04] p-6 text-center">
                <dd className="font-display text-3xl font-bold text-gold">{value}</dd>
                <dt className="mt-1.5 text-xs uppercase tracking-widest text-white/40">{label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}