import ProgressBar from "../../components/ProgressBar";
import SectionHeading from "../../components/SectionHeading";
import { allocation, principles, sectors } from "../../data/club";

export default function Strategy() {
  return (
    <section id="strategie" className="bg-background py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          className="mb-16"
          eyebrow="Objectifs & Stratégie"
          title="Notre philosophie d'investissement."
          subtitle="Une approche rigoureuse, collective et tournée vers le long terme — ancrée dans l'analyse fondamentale et la discipline de marché."
        />

        <div className="mb-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-8">
            <h3 className="mb-6 font-display text-lg font-bold text-foreground">Allocation géographique cible</h3>
            <div className="flex flex-col gap-5">
              {allocation.map((a) => (
                <ProgressBar key={a.label} label={a.label} pct={a.pct} color={a.color} />
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-8">
            <h3 className="mb-6 font-display text-lg font-bold text-foreground">Exposition sectorielle</h3>
            <div className="flex flex-col gap-5">
              {sectors.map((s) => (
                <ProgressBar key={s.label} label={s.label} pct={s.pct} />
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {principles.map(({ title, desc }) => (
            <div key={title} className="rounded-xl border border-border bg-secondary p-6">
              <div className="mb-4 h-8 w-1.5 rounded-full bg-gold" aria-hidden="true" />
              <h3 className="mb-2 font-semibold text-foreground">{title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}