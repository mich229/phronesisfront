import SectionHeading from "../../components/SectionHeading";
import { values } from "../../data/club";

export default function Values() {
  return (
    <section id="valeurs" className="bg-navy py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          dark
          className="mb-16"
          eyebrow="Nos valeurs & engagements"
          title="Les principes qui nous définissent."
          subtitle="Six valeurs fondamentales, gravées dans notre charte fondatrice depuis 2021, guident chacune de nos décisions."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {values.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-xl border border-white/10 bg-white/[0.04] p-7 transition-all duration-300 hover:border-gold/50 hover:bg-white/[0.07]"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-gold/[0.18]">
                <Icon size={20} className="text-gold" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">{title}</h3>
              <p className="text-sm leading-relaxed text-white/50">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}