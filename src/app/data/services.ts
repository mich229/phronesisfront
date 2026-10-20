import type { LucideIcon } from "lucide-react";
import {
  BarChart2, BookOpen, Database, FileText, Globe, Layers,
  Lock, PieChart, Shield, TrendingUp, Users, Zap,
} from "lucide-react";

export type Feature = { icon: LucideIcon; title: string; desc: string };

export const phronesisTags = ["Analyse fondamentale", "Rapports sectoriels", "Due diligence", "Veille macro"];

export const phronesisFeatures: Feature[] = [
  { icon: Database, title: "Analyse fondamentale", desc: "Évaluation rigoureuse des fondamentaux d'entreprise : bilans, ratios, avantages concurrentiels et perspectives de croissance." },
  { icon: BarChart2, title: "Intelligence de marché", desc: "Veille continue des marchés mondiaux, flux de capitaux, indicateurs macroéconomiques et signaux d'alerte en temps réel." },
  { icon: FileText, title: "Rapports sectoriels", desc: "Publications approfondies par secteur (tech, énergie, santé, finance) pour identifier les tendances et opportunités émergentes." },
  { icon: Shield, title: "Due diligence", desc: "Processus structuré d'évaluation des risques avant chaque décision d'investissement collectif du club." },
  { icon: Globe, title: "Veille macroéconomique", desc: "Analyse des politiques monétaires, cycles économiques et géopolitique mondiale pour anticiper les mouvements de marché." },
  { icon: Layers, title: "Formation avancée", desc: "Programmes de formation en analyse financière, valorisation d'entreprises et construction de portefeuille pour les membres." },
];

export const flagshipStats = [
  { label: "Positions actives", value: "15" },
  { label: "Marchés couverts", value: "4" },
  { label: "Diversification", value: "100\u00A0%" },
];

export const flagshipFeatures: Feature[] = [
  { icon: PieChart, title: "Portefeuille diversifié mondial", desc: "Exposition équilibrée sur les grandes et moyennes capitalisations mondiales : Amérique du Nord, Europe, Asie et marchés émergents." },
  { icon: TrendingUp, title: "Stratégie croissance long terme", desc: "Approche axée sur la création de valeur durable, avec un horizon d'investissement de 3 à 10 ans sur chaque position." },
  { icon: Users, title: "Gouvernance démocratique", desc: "Chaque membre vote sur les décisions d'allocation. Transparence totale sur les positions, raisonnements et performances." },
  { icon: Zap, title: "Opportunités exclusives", desc: "Accès à des introductions en bourse, placements privés et co-investissements inaccessibles aux investisseurs individuels." },
  { icon: FileText, title: "Reporting mensuel", desc: "Rapport détaillé chaque mois : performance par position, attribution des gains, analyse des écarts et perspectives.Accès à la plateforme de gestion Atlas" },
  { icon: Lock, title: "Gestion du risque active", desc: "Règles strictes de diversification, stop-loss définis et couvertures sectorielles pour protéger le capital collectif." },
];

export const allServices: Feature[] = [
  { icon: BarChart2, title: "Analyse de marché", desc: "Analyses périodiques rédigées par notre outil pour orienter nos prises de décision avec clarté." },
  { icon: Users, title: "Investissement collectif", desc: "Mutualisez vos ressources pour accéder ensemble à des opportunités réservées aux grands investisseurs." },
  { icon: BookOpen, title: "Formation continue", desc: "Webinaires, ateliers et bibliothèque de ressources pour renforcer votre culture financière." },
  { icon: Shield, title: "Gestion du risque", desc: "Outils de diversification et de suivi pour protéger et faire fructifier votre patrimoine en toute sérénité." },
  { icon: Globe, title: "Marchés internationaux", desc: "Explorez des opportunités sur les marchés émergents et développés aux quatre coins du globe." },
  { icon: TrendingUp, title: "Suivi de portefeuille", desc: "Application dédiée pour visualiser en temps réel l'évolution de vos investissements et performances." },
];