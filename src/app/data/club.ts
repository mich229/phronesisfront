import type { LucideIcon } from "lucide-react";
import { BarChart2, BookOpen, Globe, Shield, TrendingUp, Users } from "lucide-react";
import { KEY_FIGURES } from "./site";

export const clubHeroStats = [
  { label: "Fondé en", value: KEY_FIGURES.founded },
  { label: "Membres actifs", value: KEY_FIGURES.members },
  { label: "Actifs gérés", value: KEY_FIGURES.aum },
  { label: "Performance cumulée", value: KEY_FIGURES.performanceShort },
];

export const timeline = [
  { year: "2021", title: "Fondation", desc: "12 membres fondateurs créent Horizons Capital avec une conviction commune : l'investissement collectif peut transformer le rapport à l'argent." },
  { year: "2022", title: "Premiers succès", desc: "Premier exercice complet avec une performance de +18,4\u00A0%, validant la robustesse de l'approche collective face à l'indice de référence." },
  { year: "2023", title: "Cap des 100 membres", desc: "La communauté franchit les 100 membres. Lancement officiel de Phronesis Capital, notre division de recherche et d'analyse." },
  { year: "2024", title: "Lancement FlagShip", desc: `Le portefeuille FlagShip est lancé avec ${KEY_FIGURES.aum} d'actifs sous gestion. Performance cumulée depuis l'origine\u00A0: ${KEY_FIGURES.performance}.` },
  { year: "2025", title: "Vers un fonds agréé", desc: `${KEY_FIGURES.members} membres actifs. L'évolution vers un fonds d'investissement agréé est planifiée à horizon 2027–2028.` },
];

export const ambitions = [
  { n: "01", title: "Court terme (2025–2026)", desc: "Atteindre 500 membres. Structurer les processus internes. Renforcer les performances du portefeuille FlagShip." },
  { n: "02", title: "Moyen terme (2027–2028)", desc: "Obtenir l'agrément réglementaire. Diversifier les véhicules d'investissement. Ouvrir progressivement aux actifs non cotés." },
  { n: "03", title: "Long terme (2029+)", desc: "Devenir un fonds de référence avec plus de 50\u00A0M€ d'actifs. Élargir la communauté à des dizaines de milliers de membres." },
];

export const allocation = [
  { label: "Actions européennes", pct: 35, color: "#C8A84B" },
  { label: "Actions américaines", pct: 28, color: "#2E6DA4" },
  { label: "Marchés émergents", pct: 22, color: "#27AE60" },
  { label: "Obligations & Revenu fixe", pct: 10, color: "#8E44AD" },
  { label: "Liquidités", pct: 5, color: "#95A5A6" },
];

export const sectors = [
  { label: "Technologie", pct: 28 },
  { label: "Santé & Biotech", pct: 20 },
  { label: "Finance", pct: 18 },
  { label: "Transition énergétique", pct: 15 },
  { label: "Consommation", pct: 12 },
  { label: "Autres", pct: 7 },
];

export const principles = [
  { title: "Horizon long terme", desc: "Toutes nos positions sont construites avec un horizon minimum de 18 mois. Nous n'essayons pas de battre le marché par le timing." },
  { title: "Analyse fondamentale", desc: "Chaque investissement repose sur une analyse des fondamentaux : business model, valorisation, management, bilan, perspectives sectorielles." },
  { title: "Vote démocratique", desc: "Aucune position ne peut être ouverte ou fermée sans l'approbation d'une majorité qualifiée lors de nos réunions mensuelles." },
];

export type Value = { icon: LucideIcon; title: string; desc: string };

export const values: Value[] = [
  { icon: Shield, title: "Transparence", desc: "Chaque décision, chaque investissement, chaque résultat est partagé avec l'ensemble des membres en temps réel. Aucune zone d'ombre." },
  { icon: Users, title: "Intelligence collective", desc: "Nous croyons que la sagesse du groupe surpasse l'expertise individuelle. Toute décision d'allocation est soumise au vote des membres." },
  { icon: BarChart2, title: "Rigueur analytique", desc: "Nos décisions reposent sur une analyse fondamentale approfondie, jamais sur des intuitions ou des mouvements de court terme." },
  { icon: BookOpen, title: "Pédagogie", desc: "Former nos membres est une mission centrale. L'investissement ne doit plus être perçu comme réservé à une élite financière." },
  { icon: Globe, title: "Éthique & ESG", desc: "Nous intégrons des critères environnementaux, sociaux et de gouvernance dans notre processus d'investissement à tous les niveaux." },
  { icon: TrendingUp, title: "Performance durable", desc: "Notre objectif n'est pas le gain rapide mais la création de valeur sur le long terme, dans l'intérêt de chaque membre du club." },
];

export const team = [
  { name: "Jean-Marc Essomba", role: "Président du Club", bio: "Passionné de finance depuis 15 ans, Jean-Marc a fondé Horizons Capital avec la conviction que l'investissement collectif est le levier le plus puissant pour construire un patrimoine.", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&auto=format" },
  { name: "Aminata Traoré", role: "Vice-Présidente & Responsable Recherche", bio: "Analyste financière certifiée CFA, Aminata dirige l'ensemble de la production analytique de Phronesis Capital avec rigueur et pédagogie.", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&auto=format" },
  { name: "Thomas Nguyen", role: "Trésorier & Analyste Portefeuille", bio: "Dix ans d'expérience en salle de marché. Thomas pilote la stratégie FlagShip et assure la conformité réglementaire des opérations du club.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&auto=format" },
  { name: "Fatoumata Koné", role: "Responsable Relations Membres", bio: "Fatoumata assure l'accueil des nouveaux membres, coordonne les réunions mensuelles et anime la communauté avec enthousiasme.", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&auto=format" },
  { name: "Bastien Moreau", role: "Analyste Senior, Phronesis Capital", bio: "Spécialiste des marchés émergents et de l'ESG, Bastien produit les rapports sectoriels qui guident les décisions d'investissement du club.", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&auto=format" },
  { name: "Clarisse Abena", role: "Chargée de Communication & Formation", bio: "Clarisse conçoit les supports pédagogiques, organise les webinaires mensuels et veille à la diffusion du savoir financier au sein du club.", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&auto=format" },
];