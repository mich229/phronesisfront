import { SITE } from "./site";

const todo = (hint: string) => `[À COMPLÉTER : ${hint}]`;
export const isTodo = (v: string) => v.includes("À COMPLÉTER");

export const LEGAL = {
  // À mettre à jour à chaque modification des textes
  updatedAt: "12 octobre 2026",

  entityName: todo("dénomination officielle de l'organisme éditeur"),
  legalForm: todo("forme juridique, ex. association loi 1901"),
  registration: todo("n° d'immatriculation : SIREN/SIRET, RNA…"),
  publisher: todo("nom et fonction du directeur de la publication"),

  host: {
    name: todo("nom de l'hébergeur, ex. Cloudflare ou Netlify"),
    address: todo("adresse postale de l'hébergeur"),
    website: todo("site web de l'hébergeur"),
  },

  imageCredits: todo("sources et licences des photographies et illustrations"),
  statutes: todo("intitulé exact des statuts et du règlement intérieur"),
  governingLaw: todo("droit applicable, ex. droit français"),
  court: todo("juridiction compétente, ex. tribunaux de Paris"),
  mediator: todo("médiateur compétent, ou supprimer cette mention si non applicable"),

  authority: todo("autorité de protection des données, ex. CNIL"),
  formProvider: {
    name: todo("prestataire d'envoi des formulaires, ex. Formspree"),
    transfer: todo("garantie encadrant le transfert hors UE, si applicable"),
  },

  retention: {
    applications: todo("ex. 12 mois après la décision pour les candidatures non retenues"),
    members: todo("durée de l'adhésion + délai légal de conservation"),
    newsletter: todo("jusqu'au désabonnement, ex. suppression après 3 ans d'inactivité"),
    contact: todo("ex. 12 mois après le dernier échange"),
  },

  dataContact: SITE.email,
};