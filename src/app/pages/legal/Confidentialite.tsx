import { Link } from "react-router";
import Fill from "../../components/Fill";
import LegalLayout from "../../components/LegalLayout";
import LegalSection from "../../components/LegalSection";
import { LEGAL } from "../../data/legal";
import { SITE } from "../../data/site";
import { PAGES } from "../../data/seo";

const processing = [
  {
    what: "Candidature d'adhésion",
    data: "Nom, prénom, e-mail, téléphone (facultatif), situation professionnelle, expérience, montant envisagé, motivation",
    purpose: "Examiner votre candidature et vous contacter",
    basis: "Mesures précontractuelles prises à votre demande (art. 6.1.b RGPD)",
    keep: LEGAL.retention.applications,
  },
  {
    what: "Newsletter",
    data: "Adresse e-mail",
    purpose: "Vous envoyer nos analyses et actualités",
    basis: "Votre consentement (art. 6.1.a RGPD)",
    keep: LEGAL.retention.newsletter,
  },
  {
    what: "Contact par e-mail",
    data: "Adresse e-mail et contenu de votre message",
    purpose: "Répondre à votre demande",
    basis: "Intérêt légitime à répondre aux sollicitations (art. 6.1.f RGPD)",
    keep: LEGAL.retention.contact,
  },
  {
    what: "Membres du club",
    data: "Données d'identification et de suivi de l'adhésion",
    purpose: "Gérer l'adhésion et la vie du club",
    basis: "Exécution du contrat d'adhésion (art. 6.1.b RGPD)",
    keep: LEGAL.retention.members,
  },
];

const th = "border-b border-border px-3 py-2 font-semibold text-foreground";
const td = "border-b border-border px-3 py-3 align-top";

export default function Confidentialite() {
  return (
    <LegalLayout
      seo={PAGES.privacy}
      crumb="Confidentialité"
      title="Politique de confidentialité"
      intro={
        <>
          {SITE.name} accorde de l'importance à la protection de vos données personnelles. Cette page
          explique quelles données nous collectons, pourquoi, combien de temps nous les conservons et
          comment exercer vos droits, conformément au Règlement général sur la protection des données
          (RGPD).
        </>
      }
    >
      <LegalSection title="1. Responsable du traitement">
        <p>
          Le responsable du traitement est <Fill v={LEGAL.entityName} />, dont le siège est situé{" "}
          {SITE.address.join(", ")}. Contact pour toute question relative aux données&nbsp;:{" "}
          <a href={`mailto:${LEGAL.dataContact}`}>{LEGAL.dataContact}</a>.
        </p>
      </LegalSection>

      <LegalSection title="2. Données collectées, finalités et durées">
        <p>
          Nous ne collectons que les données nécessaires à chaque usage. Les champs facultatifs sont
          signalés comme tels dans les formulaires. Le site est réservé aux personnes majeures.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] text-left text-sm">
            <thead>
              <tr>
                <th className={th}>Traitement</th>
                <th className={th}>Données</th>
                <th className={th}>Finalité</th>
                <th className={th}>Base légale</th>
                <th className={th}>Conservation</th>
              </tr>
            </thead>
            <tbody>
              {processing.map((p) => (
                <tr key={p.what}>
                  <td className={`${td} font-medium text-foreground`}>{p.what}</td>
                  <td className={td}>{p.data}</td>
                  <td className={td}>{p.purpose}</td>
                  <td className={td}>{p.basis}</td>
                  <td className={td}><Fill v={p.keep} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>Nous ne vendons pas vos données et ne les utilisons pas à des fins publicitaires.</p>
      </LegalSection>

      <LegalSection title="3. Destinataires et sous-traitants">
        <p>Vos données sont accessibles uniquement aux membres du bureau habilités à les traiter, ainsi qu'à nos prestataires techniques&nbsp;:</p>
        <ul>
          <li>l'hébergeur du site&nbsp;: <Fill v={LEGAL.host.name} />&nbsp;;</li>
          <li>le service d'envoi des formulaires&nbsp;: <Fill v={LEGAL.formProvider.name} />.</li>
        </ul>
        <p>Ces prestataires n'agissent que sur nos instructions. Nous pouvons enfin devoir communiquer des données à une autorité sur réquisition légale.</p>
      </LegalSection>

      <LegalSection title="4. Transferts hors Union européenne">
        <p>
          Certains prestataires peuvent traiter des données hors de l'Union européenne. Le cas échéant,
          ces transferts sont encadrés par&nbsp;: <Fill v={LEGAL.formProvider.transfer} />.
        </p>
      </LegalSection>

      <LegalSection title="5. Vos droits">
        <p>Vous disposez des droits suivants sur vos données&nbsp;:</p>
        <ul>
          <li>accès, rectification et effacement&nbsp;;</li>
          <li>limitation du traitement et opposition&nbsp;;</li>
          <li>portabilité de vos données&nbsp;;</li>
          <li>retrait de votre consentement à tout moment (par exemple, désinscription de la newsletter).</li>
        </ul>
        <p>
          Pour les exercer, écrivez à <a href={`mailto:${LEGAL.dataContact}`}>{LEGAL.dataContact}</a>. Nous
          pouvons vous demander un justificatif d'identité et nous répondons dans un délai d'un mois. Si
          vous estimez que vos droits ne sont pas respectés, vous pouvez saisir l'autorité de contrôle&nbsp;:{" "}
          <Fill v={LEGAL.authority} />.
        </p>
      </LegalSection>

      <LegalSection title="6. Cookies et traceurs">
        <p>
          Ce site ne dépose <strong>aucun cookie publicitaire, aucun traceur de suivi et aucun outil de
          mesure d'audience</strong>. Si cela devait changer, nous recueillerions votre consentement
          avant tout dépôt et mettrions cette page à jour.
        </p>
      </LegalSection>

      <LegalSection title="7. Sécurité">
        <p>
          Les échanges avec le site sont chiffrés (HTTPS). Nous limitons l'accès aux données aux seules
          personnes qui en ont besoin et choisissons des prestataires présentant des garanties
          appropriées. Aucun système n'étant infaillible, nous vous invitons à ne pas transmettre
          d'informations bancaires ou confidentielles via les formulaires.
        </p>
      </LegalSection>

      <LegalSection title="8. Modification de cette politique">
        <p>
          Nous pouvons mettre à jour cette page, notamment en cas d'évolution légale ou de nos services.
          La date de dernière mise à jour figure en haut de page. Voir aussi nos{" "}
          <Link to="/mentions-legales">mentions légales</Link> et nos <Link to="/cgu">CGU</Link>.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}