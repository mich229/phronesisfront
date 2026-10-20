import { ArrowRight, ExternalLink } from "lucide-react";
import Button from "../../components/Button";
import { KEY_FIGURES, SITE } from "../../data/site";

export default function ClubCta() {
  return (
    <section className="bg-secondary py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-balance font-display text-4xl font-bold text-foreground">
          Prêt à rejoindre l'aventure&nbsp;?
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-muted-foreground">
          Rejoignez {KEY_FIGURES.members} membres qui partagent la même vision d'un investissement
          intelligent, collectif et accessible à tous.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button to="/adhesion" variant="ghost-dark" size="lg">
            Candidater maintenant <ArrowRight size={16} />
          </Button>
          <Button href={SITE.memberAreaUrl} variant="ghost-dark" size="lg">
            <ExternalLink size={16} /> Espace Membre
          </Button>
        </div>
      </div>
    </section>
  );
}