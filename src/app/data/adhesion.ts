import { CheckCircle, ExternalLink, TrendingUp } from "lucide-react";

export const applySteps = [
  { n: 1, title: "Candidature", desc: "Remplissez le formulaire en ligne avec vos informations et votre motivation à rejoindre le club." },
  { n: 2, title: "Analyse du profil", desc: "Notre équipe de gestion examine votre candidature et évalue votre profil d'investisseur sous 48 heures." },
  { n: 3, title: "Entretien", desc: "Vous êtes invité(e) à un échange avec un membre de l'équipe pour affiner votre profil et vos objectifs." },
  { n: 4, title: "Bienvenue\u00A0!", desc: "Adhésion validée. Vous recevez vos accès à l'application membre et rejoignez la communauté d'investisseurs." },
];

export const freeModel = [
  { icon: CheckCircle, title: "Aucun frais d'entrée", desc: "L'adhésion au club est totalement gratuite. Votre candidature est examinée sans frais et sans aucun engagement financier préalable." },
  { icon: TrendingUp, title: "Participation flexible", desc: "Investissez collectivement selon vos capacités, dès 500\u00A0€. Vous ajustez votre mise au fil du temps, en fonction de votre situation." },
  { icon: ExternalLink, title: "Accès immédiat à l'application", desc: "Dès validation de votre adhésion, accédez à notre application de suivi de portefeuille, aux analyses de Phronesis Capital et au forum." },
];

export const situations = ["Salarié(e)", "Entrepreneur / Indépendant", "Étudiant(e)", "Cadre supérieur", "Retraité(e)", "Autre"];
export const experiences = ["Débutant (moins d'1 an)", "Intermédiaire (1–5 ans)", "Confirmé (5–10 ans)", "Expert (+ de 10 ans)"];
export const amounts = ["500\u00A0–\u00A02\u00A0000\u00A0€", "2\u00A0000\u00A0–\u00A05\u00A0000\u00A0€", "5\u00A0000\u00A0–\u00A020\u00A0000\u00A0€", "Plus de 20\u00A0000\u00A0€"];