import { ArrowRight, Mail } from "lucide-react";
import Button from "../../components/Button";
import { SITE } from "../../data/site";

export default function FaqContact() {
  return (
    <section className="bg-secondary py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-balance font-display text-3xl font-bold text-foreground">
          Vous n'avez pas trouvé votre réponse&nbsp;?
        </h2>
        <p className="mt-4 text-muted-foreground">
          Notre équipe est disponible pour répondre à toutes vos questions personnalisées.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href={`mailto:${SITE.email}`} variant="navy">
            <Mail size={15} /> Nous écrire
          </Button>
          <Button to="/adhesion">
            Rejoindre le club <ArrowRight size={15} />
          </Button>
        </div>
      </div>
    </section>
  );
}