import { KEY_FIGURES } from "./site";

export type FaqItem = { q: string; a: string };
export type FaqCategory = { id: string; label: string; items: FaqItem[] };

export const faqCategories: FaqCategory[] = [
  {
    id: "general",
    label: "Général",
    items: [
      { q: "Qu'est-ce qu'un club d'investissement\u00A0?", a: "Un club d'investissement est une association de personnes qui mettent en commun leurs épargnes pour investir collectivement sur les marchés financiers. Chaque membre participe aux décisions et bénéficie des gains proportionnellement à sa mise." },
      { q: "Qui peut rejoindre Phronesis Capital\u00A0?", a: "Toute personne majeure souhaitant investir collectivement et développer sa culture financière. Aucune expérience préalable n'est nécessaire — nous accueillons autant les débutants que les investisseurs chevronnés." },
      { q: "Comment fonctionne le club au quotidien\u00A0?", a: "Le club organise des réunions mensuelles pour analyser les marchés et voter sur les décisions d'investissement. Entre les réunions, les membres accèdent aux analyses, au forum communautaire et à leur tableau de bord via notre application." },
      { q: "Quelle est la vision à long terme du club\u00A0?", a: "Notre ambition est d'évoluer progressivement vers un fonds d'investissement agréé par les autorités compétentes. Cette évolution permettra à nos membres d'accéder à un spectre encore plus large d'instruments et de stratégies patrimoniales." },
    ],
  },
  {
    id: "adhesion",
    label: "Adhésion",
    items: [
      { q: "Comment rejoindre le club\u00A0?", a: "Complétez le formulaire d'adhésion en ligne. Notre équipe examine votre candidature et vous contacte sous 48 heures pour un entretien de présentation. Une fois validé, vous recevez vos accès et pouvez participer dès la prochaine réunion mensuelle." },
      { q: "Quel est le montant minimum pour investir\u00A0?", a: "Le montant minimum de participation aux investissements collectifs est de 500\u00A0€. Vous adaptez librement votre contribution à vos capacités et objectifs, sans plafond maximum." },
      { q: "Peut-on quitter le club à tout moment\u00A0?", a: "Oui, vous pouvez soumettre une demande de retrait à tout moment. Le remboursement de votre part du portefeuille collectif est effectué selon les modalités définies dans le règlement intérieur, généralement dans un délai de 30 jours." },
      { q: "Les cotisations mensuelles sont-elles remboursables\u00A0?", a: "Les cotisations couvrent l'accès aux services du club (analyses, webinaires, application). Elles ne sont pas remboursables une fois le mois entamé, mais vous pouvez résilier votre abonnement à tout moment pour les mois suivants." },
    ],
  },
  {
    id: "investissement",
    label: "Investissement",
    items: [
      { q: "Comment sont prises les décisions d'investissement\u00A0?", a: "Collectivement, lors de réunions mensuelles. Chaque membre dispose d'un droit de vote proportionnel à sa participation au capital collectif. Les propositions sont préparées par notre équipe d'analyse (Phronesis Research) et présentées en réunion pour délibération." },
      { q: "Quels types d'actifs le club investit-il\u00A0?", a: "Le club investit principalement en actions cotées (grandes et moyennes capitalisations mondiales), ETF sectoriels et obligations. Notre portefeuille FlagShip maintient une diversification géographique et sectorielle stricte." },
      { q: "Comment sont gérés les risques\u00A0?", a: "La diversification est au cœur de notre stratégie\u00A0: pas plus de 10\u00A0% du portefeuille sur un seul titre, exposition équilibrée entre secteurs et zones géographiques. Notre équipe Phronesis Research assure une veille continue des risques macroéconomiques." },
      { q: "Quelle est la performance historique du club\u00A0?", a: `Depuis le lancement en ${KEY_FIGURES.founded}, le portefeuille collectif affiche une performance cumulée de ${KEY_FIGURES.performance}, contre ${KEY_FIGURES.benchmark} pour l'indice de référence sur la même période. Ces chiffres sont communiqués à chaque rapport trimestriel. Les performances passées ne préjugent pas des performances futures.` },
    ],
  },
  {
    id: "application",
    label: "Application",
    items: [
      { q: "Comment accéder à mon portefeuille\u00A0?", a: "Via notre application dédiée aux membres, accessible sur web, iOS et Android. Vous recevez vos identifiants par e-mail après validation de votre adhésion. L'application permet de suivre votre portefeuille, consulter les rapports et participer aux votes." },
      { q: "L'application est-elle disponible hors connexion\u00A0?", a: "Les données de portefeuille nécessitent une connexion pour être actualisées. Cependant, les rapports PDF téléchargés restent accessibles hors ligne sur votre appareil." },
      { q: "Comment contacter le support\u00A0?", a: "Par e-mail à {{supportEmail}} (réponse sous 24\u00A0h en jours ouvrés), via le chat intégré à l'application ou par téléphone du lundi au vendredi, 9h–18h." },
      { q: "Mes données financières sont-elles sécurisées\u00A0?", a: "Oui. Toutes les communications sont chiffrées (TLS 1.3), les données sont hébergées en France (RGPD), et nous appliquons une authentification à deux facteurs obligatoire." },
    ],
  },
];