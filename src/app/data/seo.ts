import type { Post } from "./posts";
import { publishedISO } from "./posts";
import { KEY_FIGURES, SITE } from "./site";
import { absoluteUrl } from "../lib/absoluteUrl";
import { imageUrl } from "../lib/images";

export type PageSeo = { path?: string; title: string; description: string };
type PageKey =
  | "home" | "club" | "services" | "blog" | "faq" | "adhesion"
  | "mentions" | "privacy" | "cgu" | "notFound";

export const PAGES: Record<PageKey, PageSeo> = {
  home: {
    path: "/",
    title: `${SITE.name} — Club d'investissement collectif`,
    description: `${SITE.name}, club d'investissement collectif : analyses, décisions partagées et pédagogie pour investir ensemble. Candidatez en ligne.`,
  },
  club: {
    path: "/le-club",
    title: `Le Club : histoire, vision et équipe | ${SITE.name}`,
    description: `Histoire, vision, stratégie, valeurs et équipe d'${SITE.name}, club d'investissement fondé sur la transparence et l'intelligence collective.`,
  },
  services: {
    path: "/services",
    title: `Services : Phronesis Capital et FlagShip | ${SITE.name}`,
    description: "Phronesis Capital (recherche et analyse) et FlagShip (portefeuille collectif) : découvrez les services du club pour investir mieux, ensemble.",
  },
  blog: {
    path: "/blog",
    title: `Blog : analyses et formation | ${SITE.name}`,
    description: "Analyses de marché, guides de formation et actualités du club : des ressources pour renforcer votre culture financière.",
  },
  faq: {
    path: "/faq",
    title: `FAQ : vos questions sur le club | ${SITE.name}`,
    description: `Réponses aux questions fréquentes sur le club, l'adhésion, les décisions d'investissement et l'application membre d'${SITE.name}.`,
  },
  adhesion: {
    path: "/adhesion",
    title: `Adhésion : candidatez au club | ${SITE.name}`,
    description: `Candidatez à ${SITE.name} en quelques minutes : formulaire en ligne et réponse de l'équipe sous 48 heures ouvrées.`,
  },
  mentions: {
    path: "/mentions-legales",
    title: `Mentions légales | ${SITE.name}`,
    description: `Mentions légales du site ${SITE.name} : éditeur, hébergeur et informations légales.`,
  },
  privacy: {
    path: "/confidentialite",
    title: `Politique de confidentialité | ${SITE.name}`,
    description: `Comment ${SITE.name} collecte, utilise et protège vos données personnelles, et comment exercer vos droits.`,
  },
  cgu: {
    path: "/cgu",
    title: `Conditions générales d'utilisation | ${SITE.name}`,
    description: `Conditions générales d'utilisation du site ${SITE.name}.`,
  },
  // Pas de "path" : une page d'erreur n'a pas d'adresse canonique.
  notFound: {
    title: `Page introuvable | ${SITE.name}`,
    description: "La page demandée n'existe pas ou a été déplacée.",
  },
};

const plain = (s: string) => s.replace(/\u00A0/g, " ");

// Organisation générique : on évite volontairement les types « FinancialService »
// ou « InvestmentFund », qui suggèrent un statut réglementé.
export const organizationLd = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.name,
  url: absoluteUrl("/"),
  logo: absoluteUrl("/favicon.svg"),
  email: SITE.email,
  foundingDate: KEY_FIGURES.founded,
  sameAs: Object.values(SITE.socials).filter((u) => u.startsWith("http")),
});

export const blogPostingLd = (post: Post) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: plain(post.title),
  description: plain(post.excerpt),
  image: absoluteUrl(imageUrl(post.img, 1200)),
  datePublished: publishedISO(post),
  inLanguage: "fr",
  mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
  author: { "@type": "Organization", name: SITE.name, url: absoluteUrl("/") },
  publisher: {
    "@type": "Organization",
    name: SITE.name,
    logo: { "@type": "ImageObject", url: absoluteUrl("/favicon.svg") },
  },
});