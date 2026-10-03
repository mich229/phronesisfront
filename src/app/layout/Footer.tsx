import { Link } from "react-router";
import { ExternalLink, Linkedin, Mail, MapPin, Phone, TrendingUp, Twitter } from "lucide-react";
import { SITE } from "../data/site";

const colNavigation = [
  { label: "Le Club", to: "/le-club" },
  { label: "Notre histoire", to: "/le-club#histoire" },
  { label: "Équipe", to: "/le-club#equipe" },
  { label: "Nos Services", to: "/services" },
  { label: "Adhésion", to: "/adhesion" },
];

const colProduits = [
  { label: "Phronesis Capital", to: "/services#phronesis" },
  { label: "FlagShip", to: "/services#flagship" },
  { label: "Blog", to: "/blog" },
  { label: "FAQ", to: "/faq" },
];

const legal = [
  { label: "Mentions légales", to: "/mentions-legales" },
  { label: "Politique de confidentialité", to: "/confidentialite" },
  { label: "CGU", to: "/cgu" },
];

const RISK =
  "L'investissement en bourse et dans des sociétés non cotées comporte des risques de perte en capital, partiels ou totaux. Les performances passées ne préjugent pas des performances futures. La valeur des investissements peut fluctuer à la hausse comme à la baisse en fonction des conditions de marché, de la conjoncture économique, des taux d'intérêt et d'autres facteurs imprévisibles. Les investissements dans des sociétés non cotées sont par nature illiquides et comportent des risques supplémentaires liés à l'absence de marché secondaire organisé, à la difficulté d'évaluation et à la dépendance aux décisions de gestion de l'émetteur. Avant tout investissement, nous vous recommandons de consulter un conseiller financier indépendant et de vous assurer que l'investissement est adapté à votre situation personnelle, vos objectifs et votre tolérance au risque. Horizons Capital ne fournit pas de conseil en investissement au sens réglementaire du terme.";

function Column({ title, links }: { title: string; links: { label: string; to: string }[] }) {
  return (
    <div>
      <h4 className="mb-5 text-sm font-semibold text-white">{title}</h4>
      <div className="flex flex-col gap-3 text-sm">
        {links.map(({ label, to }) => (
          <Link key={label} to={to} className="transition-colors hover:text-white">
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-navy-footer text-white/50">
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16">
        <div className="mb-12 grid gap-12 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2.5">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded bg-gold">
                <TrendingUp size={13} className="text-navy" />
              </div>
              <span className="font-display font-semibold text-white">{SITE.name}</span>
            </div>
            <p className="text-sm leading-relaxed">
              Investir ensemble, croître ensemble. Le club d'investissement qui démocratise la
              finance pour tous.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={SITE.socials.linkedin}
                aria-label="LinkedIn"
                className="flex h-8 w-8 items-center justify-center rounded border border-white/15 transition-colors hover:text-white"
              >
                <Linkedin size={14} />
              </a>
              <a
                href={SITE.socials.twitter}
                aria-label="Twitter"
                className="flex h-8 w-8 items-center justify-center rounded border border-white/15 transition-colors hover:text-white"
              >
                <Twitter size={14} />
              </a>
            </div>
          </div>

          <Column title="Navigation" links={colNavigation} />
          <Column title="Nos produits" links={colProduits} />

          <div>
            <h4 className="mb-5 text-sm font-semibold text-white">Contact</h4>
            <div className="flex flex-col gap-3 text-sm">
              <div className="flex items-center gap-2">
                <Mail size={13} className="shrink-0 text-gold" />
                <a href={`mailto:${SITE.email}`} className="hover:text-white">{SITE.email}</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={13} className="shrink-0 text-gold" />
                <span>{SITE.phone}</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={13} className="mt-0.5 shrink-0 text-gold" />
                <span>
                  {SITE.address[0]}
                  <br />
                  {SITE.address[1]}
                </span>
              </div>
            </div>
            <a
              href={SITE.memberAreaUrl}
              className="mt-6 inline-flex items-center gap-2 rounded bg-gold px-5 py-2.5 text-sm font-semibold text-navy transition-opacity hover:opacity-90"
            >
              <ExternalLink size={13} /> Espace Membre
            </a>
          </div>
        </div>

        <div className="mb-8 rounded-lg border-l-[3px] border-gold/25 bg-white/[0.04] p-5 text-xs leading-relaxed text-white/40">
          <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-widest text-gold/50">
            Avertissement sur les risques — Information importante
          </p>
          <p>{RISK}</p>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs lg:flex-row">
          <p>© {new Date().getFullYear()} {SITE.name}. Tous droits réservés.</p>
          <div className="flex flex-wrap justify-center gap-5">
            {legal.map(({ label, to }) => (
              <Link key={to} to={to} className="transition-colors hover:text-white">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}