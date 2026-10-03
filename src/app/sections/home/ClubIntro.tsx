import { ArrowRight, CheckCircle } from "lucide-react";
import Button from "../../components/Button";
import SectionHeading from "../../components/SectionHeading";
import { clubChecklist } from "../../data/home";
import { KEY_FIGURES, SITE } from "../../data/site";

export default function ClubIntro() {
  return (
    <section id="club" className="bg-background py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">
        <div>
          <SectionHeading
            align="left"
            large
            eyebrow="Le Club"
            title="L'investissement n'est plus réservé à quelques-uns."
          />
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            {SITE.name} est fondé sur une conviction simple : l'intelligence collective surpasse
            l'expertise individuelle. Nous réunissons des professionnels, des étudiants et des
            passionnés de finance autour d'une même ambition.
          </p>
          <ul className="mt-8 flex flex-col gap-3">
            {clubChecklist.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle size={17} className="mt-0.5 shrink-0 text-gold" />
                <span className="text-sm text-foreground">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button to="/adhesion" variant="navy">
              Nous rejoindre <ArrowRight size={15} />
            </Button>
            <Button to="/le-club" variant="ghost-dark">
              En savoir plus <ArrowRight size={15} />
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-2xl bg-gold/[0.03]" />
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=700&h=500&fit=crop&auto=format"
            alt="Réunion du club"
            loading="lazy"
            className="relative w-full rounded-xl object-cover shadow-2xl"
          />
          <div className="absolute -bottom-5 -left-5 rounded-xl bg-gold px-6 py-4 text-navy shadow-xl">
            <p className="font-display text-3xl font-bold">{KEY_FIGURES.performanceShort}</p>
            <p className="mt-0.5 text-xs font-semibold">Performance depuis le lancement</p>
          </div>
        </div>
      </div>
    </section>
  );
}