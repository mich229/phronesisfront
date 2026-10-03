import SectionHeading from "../../components/SectionHeading";
import { testimonials } from "../../data/home";

export default function Testimonials() {
  return (
    <section className="bg-background py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading className="mb-16" eyebrow="Témoignages" title="Ce que disent nos membres." />
        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map(({ name, role, text, initials }) => (
            <figure
              key={name}
              className="flex flex-col gap-6 rounded-xl border border-border bg-card p-8 transition-shadow duration-300 hover:shadow-lg"
            >
              <div className="font-display text-5xl leading-none text-gold/40" aria-hidden="true">“</div>
              <blockquote className="flex-1 text-sm leading-relaxed text-foreground">{text}</blockquote>
              <figcaption className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/20 text-sm font-bold text-gold">
                  {initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{name}</p>
                  <p className="text-xs text-muted-foreground">{role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}