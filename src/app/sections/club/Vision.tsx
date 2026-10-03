import SectionHeading from "../../components/SectionHeading";
import { ambitions } from "../../data/club";
import { SITE } from "../../data/site";

export default function Vision() {
  return (
    <section id="vision" className="bg-secondary py-28">
      <div className="mx-auto grid max-w-7xl items-start gap-16 px-6 lg:grid-cols-2">
        <div>
          <SectionHeading
            align="left"
            large
            eyebrow="Vision & Ambitions"
            title="Vers un fonds d'investissement de référence."
          />
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Notre ambition transcende le cadre d'un simple club. À horizon 3 à 5 ans, {SITE.name}{" "}
            évoluera vers un fonds d'investissement agréé, offrant à nos membres l'accès à des
            instruments et stratégies habituellement réservés aux institutionnels.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Cette évolution permettra d'attirer des investisseurs externes, d'amplifier notre
            capacité d'action et de démultiplier l'impact de notre communauté sur les marchés
            financiers mondiaux.
          </p>
        </div>

        <ol className="flex flex-col gap-5">
          {ambitions.map(({ n, title, desc }) => (
            <li key={n} className="flex gap-5 rounded-xl border border-border bg-card p-6">
              <div className="mt-0.5 shrink-0 font-display text-2xl font-bold text-gold/50" aria-hidden="true">
                {n}
              </div>
              <div>
                <h3 className="mb-1 font-semibold text-foreground">{title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}