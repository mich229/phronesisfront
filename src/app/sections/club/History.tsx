import SectionHeading from "../../components/SectionHeading";
import { timeline } from "../../data/club";
import { KEY_FIGURES } from "../../data/site";

export default function History() {
  return (
    <section id="histoire" className="bg-background py-28">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          align="left"
          className="mb-16"
          eyebrow="Notre histoire"
          title={`De 05 fondateurs à ${KEY_FIGURES.members}\u00A0membres engagés.`}
          subtitle="Chaque grande aventure commence par une conviction. La nôtre : l'investissement collectif et éduqué peut transformer durablement le rapport à l'argent."
        />

        <ol>
          {timeline.map(({ year, title, desc }, i) => {
            const last = i === timeline.length - 1;
            return (
              <li key={year} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-gold text-xs font-bold shadow-[0_0_0_4px_rgba(200,168,75,0.1)] ${
                      last ? "bg-gold text-navy" : "bg-white text-gold"
                    }`}
                    aria-hidden="true"
                  >
                    {year.slice(2)}
                  </div>
                  {!last && <div className="my-1 min-h-8 w-px flex-1 bg-gold/25" aria-hidden="true" />}
                </div>
                <div className="flex-1 pb-10">
                  <span className="text-xs font-bold uppercase tracking-widest text-gold">{year}</span>
                  <h3 className="mb-2 mt-0.5 font-display text-lg font-bold text-foreground">{title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{desc}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}