import { PieChart } from "lucide-react";
import FeatureCard from "../../components/FeatureCard";
import { flagshipFeatures, flagshipStats } from "../../data/services";
import { KEY_FIGURES } from "../../data/site";
import Img from "../../components/Img";

export default function FlagshipSection() {
  return (
    <section id="flagship" className="bg-background py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 grid items-center gap-16 lg:grid-cols-2">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 rounded-2xl bg-gold/[0.03]" />
            <Img
              name="flagship"
              sizes="(min-width: 1024px) 576px, 100vw"
              alt="Portefeuille d'investissement"
              className="relative w-full rounded-xl object-cover shadow-2xl"
            />
            <div className="absolute -bottom-5 -right-5 hidden rounded-xl bg-gold px-6 py-4 text-navy shadow-xl lg:block">
              <p className="font-display text-2xl font-bold">{KEY_FIGURES.performance}</p>
              <p className="mt-0.5 text-xs font-semibold">Performance cumulée</p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gold/15">
                <PieChart size={20} className="text-gold" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gold">
                  Portefeuille à fort variation
                </p>
                <h2 className="font-display text-3xl font-bold text-foreground">FlagShip</h2>
              </div>
            </div>
            <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
              Basé sur une gestion active, c'est le portefeuille à fort rendement. FlagShip est le portefeuille
              qui recherche une performance alpha et stable.  — diversifié, transparent, gouverné par une approche algorithmique.
            </p>
            <p className="mb-8 leading-relaxed text-muted-foreground">
              La stratégie d'allocation et de trading sur le portefeuille Flagship sont gérées de bout en bout par des algorithmes.
              Ce portefeuille est structurée pour créer de la valeur dynamique et régulière.
            </p>
            <dl className="grid grid-cols-3 gap-4">
              {flagshipStats.map(({ label, value }) => (
                <div key={label} className="rounded-lg bg-secondary p-4 text-center">
                  <dd className="font-display text-2xl font-bold text-foreground">{value}</dd>
                  <dt className="mt-1 text-xs text-muted-foreground">{label}</dt>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {flagshipFeatures.map((f) => (
            <FeatureCard key={f.title} {...f} variant="light" />
          ))}
        </div>
      </div>
    </section>
  );
}