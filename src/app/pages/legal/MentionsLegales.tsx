import { Link } from "react-router";
import Fill from "../../components/Fill";
import LegalLayout from "../../components/LegalLayout";
import LegalSection, { LegalRow } from "../../components/LegalSection";
import { LEGAL } from "../../data/legal";
import { SITE } from "../../data/site";

export default function MentionsLegales() {
  return (
    <LegalLayout
      crumb="Mentions légales"
      title="Mentions légales"
      intro={
        <>
          Conformément à la loi n°&nbsp;2004-575 du 21 juin 2004 pour la confiance dans l'économie
          numérique (LCEN), voici les informations légales relatives au site {SITE.name}.
        </>
      }
    >
      <LegalSection title="1. Éditeur du site">
        <dl className="flex flex-col gap-3">
          <LegalRow label="Dénomination"><Fill v={LEGAL.entityName} /> (nom d'usage&nbsp;: {SITE.name})</LegalRow>
          <LegalRow label="Forme juridique"><Fill v={LEGAL.legalForm} /></LegalRow>
          <LegalRow label="Immatriculation"><Fill v={LEGAL.registration} /></LegalRow>
          <LegalRow label="Siège">{SITE.address.join(", ")}</LegalRow>
          <LegalRow label="E-mail"><a href={`mailto:${SITE.email}`}>{SITE.email}</a></LegalRow>
          <LegalRow label="Téléphone">{SITE.phone}</LegalRow>
          <LegalRow label="Directeur de la publication"><Fill v={LEGAL.publisher} /></LegalRow>
        </dl>
      </LegalSection>

      <LegalSection title="2. Hébergement">
        <dl className="flex flex-col gap-3">
          <LegalRow label="Hébergeur"><Fill v={LEGAL.host.name} /></LegalRow>
          <LegalRow label="Adresse"><Fill v={LEGAL.host.address} /></LegalRow>
          <LegalRow label="Site web"><Fill v={LEGAL.host.website} /></LegalRow>
        </dl>
      </LegalSection>

      <LegalSection title="3. Nature des informations publiées">
        <p>
          Les contenus de ce site sont fournis à titre <strong>informatif et pédagogique</strong>. Ils ne
          constituent ni un conseil en investissement, ni une recommandation personnalisée, ni une offre
          ou une sollicitation d'achat ou de vente d'instruments financiers.
        </p>
        <p>
          Tout investissement comporte un <strong>risque de perte en capital</strong>. Les performances
          passées ne préjugent pas des performances futures. Les chiffres présentés sont donnés à titre
          indicatif. Avant toute décision, consultez un conseiller financier indépendant.
        </p>
      </LegalSection>

      <LegalSection title="4. Propriété intellectuelle">
        <p>
          La structure du site, ses textes, son identité visuelle, son logo et ses éléments graphiques sont
          la propriété de l'éditeur, sauf mention contraire. Toute reproduction, représentation ou
          adaptation, totale ou partielle, sans autorisation écrite préalable est interdite.
        </p>
        <p>Crédits des images&nbsp;: <Fill v={LEGAL.imageCredits} /></p>
      </LegalSection>

      <LegalSection title="5. Responsabilité et liens externes">
        <p>
          L'éditeur s'efforce de fournir des informations exactes et à jour, mais ne garantit ni leur
          exhaustivité ni leur absence d'erreur. Le site peut être interrompu pour maintenance ou pour
          toute raison technique.
        </p>
        <p>
          Le site peut contenir des liens vers des sites tiers (notamment l'Espace Membre). L'éditeur
          n'exerce aucun contrôle sur leur contenu et décline toute responsabilité à leur égard.
        </p>
      </LegalSection>

      <LegalSection title="6. Données personnelles">
        <p>
          Le traitement des données personnelles collectées via le site est décrit dans notre{" "}
          <Link to="/confidentialite">politique de confidentialité</Link>.
        </p>
      </LegalSection>

      <LegalSection title="7. Droit applicable">
        <p>
          Le présent site est soumis au <Fill v={LEGAL.governingLaw} />. En cas de litige, et à défaut
          de résolution amiable, les juridictions compétentes sont&nbsp;: <Fill v={LEGAL.court} />.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}