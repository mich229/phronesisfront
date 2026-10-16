import type { ReactNode } from "react";
import { Link, useLocation } from "react-router";
import Breadcrumb from "./Breadcrumb";
import { LEGAL } from "../data/legal";
import Seo from "./Seo";
import type { PageSeo } from "../data/seo";


const DOCS = [
  { label: "Mentions légales", to: "/mentions-legales" },
  { label: "Politique de confidentialité", to: "/confidentialite" },
  { label: "Conditions générales d'utilisation", to: "/cgu" },
];

type Props = { seo: PageSeo; title: string; crumb: string; intro?: ReactNode; children: ReactNode };

export default function LegalLayout({ seo, title, crumb, intro, children }: Props) {
  const { pathname } = useLocation();

  return (
    <main>
      <Seo {...seo} />
      <header className="bg-navy pt-[68px]">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <Breadcrumb current={crumb} />
          <h1 className="text-balance font-display text-4xl font-bold text-white lg:text-5xl">{title}</h1>
          <p className="mt-4 text-sm text-white/50">Dernière mise à jour : {LEGAL.updatedAt}</p>
        </div>
      </header>

      <div className="bg-background py-16">
        <div className="mx-auto max-w-3xl px-6">
          {intro && <p className="mb-12 text-lg leading-relaxed text-muted-foreground">{intro}</p>}
          <div className="flex flex-col gap-12">{children}</div>

          <nav
            aria-label="Autres documents légaux"
            className="mt-16 flex flex-wrap gap-x-6 gap-y-2 border-t border-border pt-8 text-sm"
          >
            {DOCS.filter((d) => d.to !== pathname).map(({ label, to }) => (
              <Link key={to} to={to} className="font-medium text-navy underline">
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </main>
  );
}