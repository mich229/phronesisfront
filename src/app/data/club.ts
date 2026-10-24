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
  { year: "2022", title: "Fondation", desc: "05 membres fondateurs créent Phronesis Capital avec une conviction commune : l'investissement collectif peut transformer le rapport à l'argent." },
  { year: "2024", title: "Premiers succès", desc: "Premier exercice complet avec une performance de +18,4\u00A0%, validant la robustesse de l'approche collective face à l'indice de référence." },
  { year: "2025", title: "Cap des 20 membres", desc: "La communauté franchit les 20 membres. Lancement officiel de Phronesis Research, notre division de recherche et d'analyse." },
  { year: "2026", title: "Lancement FlagShip", desc: `Le portefeuille FlagShip est lancé avec ${KEY_FIGURES.aum} d'actifs sous gestion. Performance cumulée depuis l'origine\u00A0: ${KEY_FIGURES.performance}.` },
  { year: "2027", title: "Vers une SICAV agréé", desc: `${KEY_FIGURES.members} membres actifs. L'évolution vers une Société d’Investissement à Capital Variable agréé est planifiée à horizon 2027–2028.` },
];

export const ambitions = [
  { n: "01", title: "Court terme (2025–2026)", desc: "Atteindre 50 membres 10 partners stratégiques. Structurer les processus internes. Renforcer les performances du portefeuille FlagShip." },
  { n: "02", title: "Moyen terme (2027–2029)", desc: "Obtenir l'agrément réglementaire. Diversifier les véhicules d'investissement. Ouvrir progressivement aux actifs non cotés." },
  { n: "03", title: "Long terme (2030+)", desc: "Devenir une SICAV de référence avec plus de 50\u00A0M€ d'actifs. Élargir la communauté à des dizaines de milliers de membres." },
];

export const allocation = [
  { label: "Actions africaines BRVM", pct: 35, color: "#C8A84B" },
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
  { icon: BookOpen, title: "Co-investissement", desc: "Former nos membres est une mission centrale. L'investissement ne doit plus être perçu comme réservé à une élite financière." },
  { icon: Globe, title: "Éthique & ESG", desc: "Nous intégrons des critères environnementaux, sociaux et de gouvernance dans notre processus d'investissement à tous les niveaux." },
  { icon: TrendingUp, title: "Performance durable", desc: "Notre objectif n'est pas le gain rapide mais la création de valeur sur le long terme, dans l'intérêt de chaque membre du club." },
];

export const team = [
  { name: "Narcisse DAHINKPON", role: "Président du Club", bio: "Passionné de finance depuis 15 ans, narcisse a fondé Phronesis Research avec la conviction que l'investissement collectif est le levier le plus puissant pour construire un patrimoine.", img: "team-1" },
  { name: "Carine YAMONTCHE", role: "Vice-Présidente & Responsable Recherche", bio: "Carine dirige l'ensemble de la production analytique de Phronesis Research avec rigueur et pédagogie.", img: "team-2" },
  { name: "Moufidath YNOUSSA", role: "Trésorier", bio: "Moufidath pilote la stratégie FlagShip et assure la conformité réglementaire des opérations du club.", img: "team-4" },
  { name: "Ambroisine DAHINKPON", role: "Responsable relation & Communication", bio: "Ambroisine assure l'accueil des nouveaux membres, conçoit les supports pédagogiques, organise les webinaires mensuels, veille à la diffusion du savoir financier au sein du club et anime la communauté avec enthousiasme.", img: "team-3" },
  { name: "Flaminus GBEDOLO", role: "Responsable de la digitalisation", bio: " Il pilote la stratégie globale de transformation numérique de l'organisation. Il fait le pont entre les besoins des différents métiers (ressources humaines, marketing, analyste portefeuille) et les outils informatiques.", img: "team-5" },
  { name: "Edgard AGOSSA", role: "Tech Lead", bio: " Il est le référent technique des équipes de développement ou d'un projet logiciel spécifique. Il garantit la qualité, la robustesse et la maintenabilité du code.", img: "team-6" },
];