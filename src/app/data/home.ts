import type { LucideIcon } from "lucide-react";
import { Database, PieChart } from "lucide-react";
import { KEY_FIGURES } from "./site";

export const heroHighlights = [
  { label: "Membres actifs", value: KEY_FIGURES.members },
  { label: "Actifs gérés", value: KEY_FIGURES.aum },
];

export const statsBar = [
  { label: "Membres actifs", value: KEY_FIGURES.members },
  {
    label: "Années d'existence",
    value: String(new Date().getFullYear() - Number(KEY_FIGURES.founded)),
  },
  { label: "Rendement moyen annuel", value: "+31\u00A0%" },
  { label: "Actifs sous gestion", value: KEY_FIGURES.aum },
];

export const clubChecklist = [
  "Décisions transparentes et collectives",
  "Accompagnement pédagogique continu",
  "Évolution planifiée vers un fonds d'investissement agréé",
];

export type Product = {
  id: string;
  icon: LucideIcon;
  name: string;
  tagline: string;
  desc: string;
};

export const products: Product[] = [
  {
    id: "phronesis",
    icon: Database,
    name: "Phronesis Capital",
    tagline: "Intelligence & Analyse",
    desc: "Notre division recherche. Analyses fondamentales, rapports sectoriels, veille macroéconomique et due diligence pour des décisions éclairées.",
  },
  {
    id: "flagship",
    icon: PieChart,
    name: "FlagShip",
    tagline: "Portefeuille collectif phare",
    desc: "Le véhicule d'investissement principal du club. Portefeuille diversifié mondialement, gouvernance démocratique et reporting mensuel transparent.",
  },
];

export const steps = [
  { n: "01", title: "Candidature en ligne", desc: "Complétez votre demande d'adhésion. Notre équipe examine votre profil et vous répond sous 48 heures." },
  { n: "02", title: "Entretien personnalisé", desc: "Définissons ensemble votre profil d'investisseur et alignons la stratégie avec vos objectifs de vie." },
  { n: "03", title: "Investissez collectivement", desc: "Participez aux réunions mensuelles, votez sur les décisions et contribuez à la stratégie commune." },
  { n: "04", title: "Suivez votre croissance", desc: "Consultez votre tableau de bord à tout moment pour mesurer en temps réel la performance de votre portefeuille." },
];

export const perfData = [
  { m: "Jan 24", club: 100, ref: 100 },
  { m: "Avr 24", club: 108, ref: 102 },
  { m: "Jul 24", club: 119, ref: 105 },
  { m: "Oct 24", club: 129, ref: 108 },
  { m: "Jan 25", club: 141, ref: 110 },
  { m: "Avr 25", club: 155, ref: 113 },
  { m: "Jul 25", club: 163, ref: 115 },
];

export const testimonials = [
  { name: "Marianne Kouassi", role: "Membre depuis 2022", initials: "MK", text: "Rejoindre ce club a transformé ma vision de l'investissement. Mon portefeuille a progressé de 34 % en deux ans grâce à l'intelligence collective du groupe." },
  { name: "Théo Beaumont", role: "Membre depuis 2021", initials: "TB", text: "La qualité des analyses et la rigueur des décisions collectives m'ont permis d'accéder à des opportunités que je n'aurais jamais pu identifier seul." },
  { name: "Sandra Diallo", role: "Membre depuis 2023", initials: "SD", text: "Débutante en finance, le club m'a donné les outils, le savoir et la confiance pour investir sereinement. La pédagogie est au cœur de tout." },
];

export const homeFaqs = [
  { q: "Qui peut rejoindre le club\u00A0?", a: "Toute personne majeure souhaitant investir collectivement et développer sa culture financière. Aucune expérience préalable n'est nécessaire." },
  { q: "Quel est le montant minimum pour investir\u00A0?", a: "Le montant minimum de participation aux investissements collectifs est de 500\u00A0€." },
  { q: "Comment accéder à mon portefeuille\u00A0?", a: "Via notre application dédiée, accessible sur web, iOS et Android après validation de votre adhésion." },
  { q: "Le club est-il encadré réglementairement\u00A0?", a: "Oui, le club opère dans le cadre légal des clubs d'investissement. L'évolution vers un fonds agréé est planifiée." },
  { q: "Comment sont prises les décisions d'investissement\u00A0?", a: "Collectivement, lors de réunions mensuelles. Chaque membre dispose d'un droit de vote proportionnel à sa participation." },
];

export const aboutStats = [
  { label: "Fondé en", value: KEY_FIGURES.founded },
  { label: "Pays représentés", value: "12" },
  { label: "Réunions tenues", value: "48+" },
  { label: "Taux de satisfaction", value: "97\u00A0%" },
];