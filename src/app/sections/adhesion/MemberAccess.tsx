import { ExternalLink } from "lucide-react";
import Button from "../../components/Button";
import { SITE } from "../../data/site";

export default function MemberAccess() {
  return (
    <section className="bg-secondary py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="mb-3 text-muted-foreground">Déjà membre&nbsp;?</p>
        <Button href={SITE.memberAreaUrl} variant="ghost-dark">
          <ExternalLink size={15} /> Accéder à l'Espace Membre
        </Button>
      </div>
    </section>
  );
}