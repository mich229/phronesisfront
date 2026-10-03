import { ArrowRight, ExternalLink } from "lucide-react";
import Button from "./Button";
import { SITE } from "../data/site";

export default function CtaBanner({ title, text }: { title: string; text: string }) {
  return (
    <section className="bg-navy py-28">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-balance font-display text-4xl font-bold text-white lg:text-5xl">{title}</h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-white/55">{text}</p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button to="/adhesion" size="lg">
            Rejoindre le club <ArrowRight size={16} />
          </Button>
          <Button href={SITE.memberAreaUrl} variant="ghost-light" size="lg">
            <ExternalLink size={16} /> Espace Membre
          </Button>
        </div>
      </div>
    </section>
  );
}