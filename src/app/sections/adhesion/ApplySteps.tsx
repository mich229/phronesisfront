import { applySteps } from "../../data/adhesion";
import { SITE } from "../../data/site";

export default function ApplySteps() {
  return (
    <section className="bg-background py-28">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-16 text-balance text-center font-display text-4xl font-bold leading-tight text-foreground lg:text-5xl">
          Comment rejoindre <span className="text-gold">{SITE.name}</span> en 4 étapes&nbsp;?
        </h2>

        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {applySteps.map(({ n, title, desc }) => (
            <li
              key={n}
              className="relative rounded-2xl border border-border bg-card px-6 pb-8 pt-12 text-center shadow-sm"
            >
              <div
                className="absolute -top-5 left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border-[3px] border-white bg-navy text-sm font-bold text-gold shadow-lg"
                aria-hidden="true"
              >
                {n}
              </div>
              <h3 className="mb-3 font-display text-lg font-bold text-foreground">{title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}