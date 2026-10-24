import type { LucideIcon } from "lucide-react";
import { BarChart2, BookOpen, Database, HelpCircle, PieChart } from "lucide-react";

export type NavChild = { label: string; to: string; icon: LucideIcon };
export type NavItem = { label: string; to?: string; children?: NavChild[] };

export const NAV: NavItem[] = [
  { label: "Le Club", to: "/le-club" },
  {
    label: "Nos Services",
    children: [
      { label: "Tous les services", to: "/services", icon: BarChart2 },
      { label: "Phronesis Research", to: "/services#phronesis", icon: Database },
      { label: "FlagShip", to: "/services#flagship", icon: PieChart },
    ],
  },
  { label: "Adhésion", to: "/adhesion" },
  { label: "À propos", to: "/le-club#histoire" },
  {
    label: "Ressources",
    children: [
      { label: "Blog", to: "/blog", icon: BookOpen },
      { label: "FAQ", to: "/faq", icon: HelpCircle },
    ],
  },
];