import SectionHeading from "../../components/SectionHeading";
import { freeModel } from "../../data/adhesion";
import { SITE } from "../../data/site";

export default function FreeModel() {
  return (
    <section className="bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Engagement"
          title={
            <>
              Une adhésion <span className="text-gold">entièrement gratuite.</span>
            </>
          }
          subtitle={`Rejoindre ${SITE.name} ne coûte rien. Votre engagement, c'est votre implication et votre participation active à la communauté.`}
        />

        <div className="mt-14 grid gap-8 text-left lg:grid-cols-3">
          {freeModel.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-xl border border-border bg-card p-8 transition-shadow duration-300 hover:shadow-lg"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-gold/15">
                <Icon size={21} className="text-gold" />
              </div>
              <h3 className="mb-3 font-display text-lg font-bold text-foreground">{title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}