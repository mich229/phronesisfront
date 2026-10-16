import { Link } from "react-router";
import Button from "../components/Button";
import Seo from "../components/Seo";
import { PAGES } from "../data/seo";
import { SITE } from "../data/site";

const links = [
  { label: "Le Club", to: "/le-club", desc: "Notre histoire, notre vision et notre équipe." },
  { label: "Nos services", to: "/services", desc: "Phronesis Capital, FlagShip et nos services complémentaires." },
  { label: "Blog", to: "/blog", desc: "Analyses, formations et actualités du club." },
  { label: "FAQ", to: "/faq", desc: "Les réponses aux questions les plus fréquentes." },
];

export default function NotFound() {
  return (
    <main className="bg-navy pt-[68px]">
      <Seo {...PAGES.notFound} noindex />
      <div className="mx-auto max-w-3xl px-6 py-28 text-center">
        <p className="font-display text-8xl font-bold text-gold" aria-hidden="true">404</p>
        <h1 className="mt-4 text-balance font-display text-4xl font-bold text-white">
          Cette page est introuvable.
        </h1>
        <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-white/60">
          L'adresse saisie n'existe pas ou la page a été déplacée. Voici où poursuivre votre visite.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button to="/">Retour à l'accueil</Button>
          <Button href={`mailto:${SITE.email}`} variant="ghost-light">Nous écrire</Button>
        </div>

        <ul className="mt-16 grid gap-4 text-left sm:grid-cols-2">
          {links.map(({ label, to, desc }) => (
            <li key={to}>
              <Link
                to={to}
                className="block rounded-xl border border-white/10 bg-white/[0.04] p-5 transition-colors hover:border-gold/50 hover:bg-white/[0.07]"
              >
                <span className="font-semibold text-white">{label}</span>
                <span className="mt-1 block text-sm text-white/50">{desc}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}