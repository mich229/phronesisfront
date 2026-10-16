import { Link } from "react-router";
import Fill from "../../components/Fill";
import LegalLayout from "../../components/LegalLayout";
import LegalSection from "../../components/LegalSection";
import { LEGAL } from "../../data/legal";
import { SITE } from "../../data/site";
import { PAGES } from "../../data/seo";

export default function Cgu() {
  return (
    <LegalLayout
      seo={PAGES.cgu}
      crumb="CGU"
      title="Conditions générales d'utilisation"
      intro={
        <>
          Les présentes conditions encadrent l'utilisation du site {SITE.name}. En naviguant sur le
          site ou en envoyant un formulaire, vous les acceptez.
        </>
      }
    >
      <LegalSection title="1. Objet">
        <p>
          Le site présente le club, ses services et ses engagements, et permet de déposer une
          candidature d'adhésion et de s'abonner à une newsletter. L'éditeur est identifié dans les{" "}
          <Link to="/mentions-legales">mentions légales</Link>.
        </p>
      </LegalSection>

      <LegalSection title="2. Accès au site">
        <p>
          Le site est accessible gratuitement à toute personne disposant d'un accès à internet. Les frais
          de connexion restent à votre charge. L'éditeur peut suspendre ou modifier tout ou partie du
          site sans préavis, notamment pour maintenance.
        </p>
      </LegalSection>

      <LegalSection title="3. Contenus informatifs, pas de conseil en investissement">
        <p>
          Les informations publiées sont fournies <strong>à titre informatif et pédagogique</strong>. Elles
          ne constituent ni un conseil en investissement, ni une recommandation personnalisée, ni une
          offre ou sollicitation d'achat ou de vente d'instruments financiers.
        </p>
        <p>
          Tout investissement comporte un risque de perte en capital, partielle ou totale. Les
          performances passées ne préjugent pas des performances futures. Il vous appartient de vérifier
          que tout investissement est adapté à votre situation, et de consulter un conseiller
          indépendant si nécessaire.
        </p>
      </LegalSection>

      <LegalSection title="4. Candidature et adhésion">
        <ul>
          <li>L'envoi du formulaire constitue une <strong>demande de candidature</strong>, et non une adhésion.</li>
          <li>L'adhésion est réservée aux personnes majeures et soumise à l'examen de votre candidature par l'équipe du club.</li>
          <li>
            Les conditions d'adhésion, de participation, de retrait et, le cas échéant, les
            contributions financières sont précisées dans les documents suivants, qui prévalent en cas de
            divergence avec le site&nbsp;: <Fill v={LEGAL.statutes} />.
          </li>
          <li>Vous vous engagez à fournir des informations exactes et à jour.</li>
        </ul>
      </LegalSection>

      <LegalSection title="5. Espace Membre">
        <p>
          L'Espace Membre est un service distinct de ce site. Vos identifiants sont strictement
          personnels et confidentiels&nbsp;: vous êtes responsable de leur usage. Son utilisation est régie
          par les documents mentionnés à l'article 4.
        </p>
      </LegalSection>

      <LegalSection title="6. Comportement de l'utilisateur">
        <p>Vous vous engagez à ne pas&nbsp;:</p>
        <ul>
          <li>utiliser le site à des fins illicites, frauduleuses ou contraires à l'ordre public&nbsp;;</li>
          <li>perturber son fonctionnement ou tenter d'accéder à des données auxquelles vous n'avez pas droit&nbsp;;</li>
          <li>envoyer des formulaires de manière automatisée ou usurper l'identité d'un tiers.</li>
        </ul>
      </LegalSection>

      <LegalSection title="7. Propriété intellectuelle">
        <p>
          Les contenus du site sont protégés. Toute reproduction ou réutilisation sans autorisation
          écrite préalable est interdite, hors courte citation avec mention de la source.
        </p>
      </LegalSection>

      <LegalSection title="8. Responsabilité">
        <p>
          L'éditeur met en œuvre des moyens raisonnables pour assurer l'exactitude des informations et la
          disponibilité du site, sans garantie. Il ne saurait être tenu responsable d'une décision
          d'investissement prise sur la seule base des contenus du site, ni des dommages résultant d'une
          indisponibilité, d'une erreur ou d'un lien vers un site tiers, dans la limite de ce que la loi
          permet.
        </p>
      </LegalSection>

      <LegalSection title="9. Données personnelles">
        <p>
          Le traitement de vos données est décrit dans la{" "}
          <Link to="/confidentialite">politique de confidentialité</Link>.
        </p>
      </LegalSection>

      <LegalSection title="10. Modification des CGU">
        <p>
          L'éditeur peut modifier les présentes conditions à tout moment. La version applicable est celle
          publiée sur le site à la date de votre utilisation.
        </p>
      </LegalSection>

      <LegalSection title="11. Droit applicable et litiges">
        <p>
          Les présentes conditions sont soumises au <Fill v={LEGAL.governingLaw} />. En cas de litige, une
          solution amiable sera recherchée en priorité en écrivant à{" "}
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>. À défaut, les juridictions compétentes
          sont&nbsp;: <Fill v={LEGAL.court} />.
        </p>
        <p>Médiation&nbsp;: <Fill v={LEGAL.mediator} /></p>
      </LegalSection>
    </LegalLayout>
  );
}