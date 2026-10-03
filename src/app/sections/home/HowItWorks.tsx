import SectionHeading from "../../components/SectionHeading";
import { steps } from "../../data/home";

export default function HowItWorks() {
  return (
    <section className="bg-background py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          className="mb-16"
          eyebrow="Comment ça marche"
          title="Quatre étapes vers votre liberté financière."
        />
        <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ n, title, desc }, i) => (
            <li key={n} className="relative">
              {i < steps.length - 1 && (
                <div
                  className="absolute left-full top-8 hidden h-px w-full bg-linear-to-r from-gold/40 to-transparent lg:block"
                  aria-hidden="true"
                />
              )}
              <div className="mb-4 select-none font-display text-7xl font-bold leading-none text-gold/25" aria-hidden="true">
                {n}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">{title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}