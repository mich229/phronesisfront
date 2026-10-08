import { useEffect, useRef, useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router";
import Button from "../../components/Button";
import Field, { inputCls } from "../../components/Field";
import SectionHeading from "../../components/SectionHeading";
import { amounts, experiences, situations } from "../../data/adhesion";
import { SITE } from "../../data/site";
import { submitForm } from "../../lib/submitForm";

type Values = {
  prenom: string; nom: string; email: string; tel: string;
  situation: string; experience: string; montant: string; motivation: string;
};
type Errors = Partial<Record<keyof Values | "consent", string>>;
type Status = "idle" | "loading" | "success" | "error";

const EMPTY: Values = {
  prenom: "", nom: "", email: "", tel: "",
  situation: "", experience: "", montant: "", motivation: "",
};

function validate(v: Values, consent: boolean): Errors {
  const e: Errors = {};
  if (!v.prenom.trim()) e.prenom = "Indiquez votre prénom.";
  if (!v.nom.trim()) e.nom = "Indiquez votre nom.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) e.email = "Saisissez une adresse e-mail valide.";
  if (v.tel.trim() && !/^[+()\d\s.-]{6,20}$/.test(v.tel.trim())) e.tel = "Numéro de téléphone invalide.";
  if (!v.motivation.trim()) e.motivation = "Dites-nous pourquoi vous souhaitez rejoindre le club.";
  if (!consent) e.consent = "Cette confirmation est nécessaire pour envoyer votre candidature.";
  return e;
}

export default function ApplicationForm({ prefillEmail = "" }: { prefillEmail?: string }) {
  const [values, setValues] = useState<Values>(EMPTY);
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [sentTo, setSentTo] = useState({ prenom: "", email: "" });
  const doneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefillEmail) setValues((v) => ({ ...v, email: prefillEmail }));
  }, [prefillEmail]);

  useEffect(() => {
    if (status === "success") doneRef.current?.focus();
  }, [status]);

  const set = (field: keyof Values) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setValues((v) => ({ ...v, [field]: e.target.value }));
      if (errors[field]) setErrors((er) => ({ ...er, [field]: undefined }));
    };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    // Piège anti-robot : un humain ne remplit jamais ce champ caché.
    if ((form.elements.namedItem("_gotcha") as HTMLInputElement).value) return;

    const found = validate(values, consent);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      requestAnimationFrame(() =>
        form.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus()
      );
      return;
    }

    setStatus("loading");
    try {
      await submitForm(SITE.formEndpoint, {
        _subject: `Nouvelle candidature — ${values.prenom} ${values.nom}`,
        ...values,
        majeur_et_cgu_acceptees: "oui",
      });
      setSentTo({ prenom: values.prenom.trim(), email: values.email.trim() });
      setValues(EMPTY);
      setConsent(false);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <section id="formulaire" className="bg-background py-28">
        <div
          ref={doneRef}
          tabIndex={-1}
          role="status"
          className="mx-auto max-w-lg px-6 text-center outline-none"
        >
          <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-gold/15">
            <CheckCircle size={36} className="text-gold" />
          </div>
          <h2 className="mb-4 font-display text-4xl font-bold text-foreground">Candidature reçue&nbsp;!</h2>
          <p className="mb-3 leading-relaxed text-muted-foreground">
            Merci <strong className="text-foreground">{sentTo.prenom}</strong>. Notre équipe a bien reçu
            votre candidature.
          </p>
          <p className="mb-10 leading-relaxed text-muted-foreground">
            Nous reviendrons vers vous à <strong className="text-foreground">{sentTo.email}</strong> sous
            48&nbsp;heures ouvrées pour la suite du processus.
          </p>
          <Button to="/" variant="navy">
            Retour à l'accueil <ArrowRight size={15} />
          </Button>
        </div>
      </section>
    );
  }

  const busy = status === "loading";

  return (
    <section id="formulaire" className="bg-background py-28">
      <div className="mx-auto max-w-2xl px-6">
        <SectionHeading
          className="mb-12"
          eyebrow="Formulaire de candidature"
          title="Déposez votre candidature."
          subtitle="Les champs marqués d'une étoile (*) sont obligatoires."
        />

        <form
          onSubmit={onSubmit}
          noValidate
          className="rounded-2xl border border-border bg-card p-8 shadow-sm"
        >
          <div className="mb-5 grid gap-5 sm:grid-cols-2">
            <Field id="prenom" label="Prénom" required error={errors.prenom}>
              {(a) => (
                <input {...a} name="prenom" type="text" autoComplete="given-name" value={values.prenom}
                  onChange={set("prenom")} placeholder="Jean" className={inputCls(!!errors.prenom)} />
              )}
            </Field>
            <Field id="nom" label="Nom" required error={errors.nom}>
              {(a) => (
                <input {...a} name="nom" type="text" autoComplete="family-name" value={values.nom}
                  onChange={set("nom")} placeholder="Dupont" className={inputCls(!!errors.nom)} />
              )}
            </Field>
          </div>

          <div className="mb-5 grid gap-5 sm:grid-cols-2">
            <Field id="email" label="E-mail" required error={errors.email}>
              {(a) => (
                <input {...a} name="email" type="email" autoComplete="email" value={values.email}
                  onChange={set("email")} placeholder="jean.dupont@email.com" className={inputCls(!!errors.email)} />
              )}
            </Field>
            <Field id="tel" label="Téléphone" error={errors.tel}>
              {(a) => (
                <input {...a} name="tel" type="tel" autoComplete="tel" value={values.tel}
                  onChange={set("tel")} placeholder="+33 6 00 00 00 00" className={inputCls(!!errors.tel)} />
              )}
            </Field>
          </div>

          <div className="mb-5 grid gap-5 sm:grid-cols-2">
            <Field id="situation" label="Situation professionnelle">
              {(a) => (
                <select {...a} name="situation" value={values.situation} onChange={set("situation")} className={inputCls(false)}>
                  <option value="">Sélectionner…</option>
                  {situations.map((o) => <option key={o}>{o}</option>)}
                </select>
              )}
            </Field>
            <Field id="experience" label="Expérience en investissement">
              {(a) => (
                <select {...a} name="experience" value={values.experience} onChange={set("experience")} className={inputCls(false)}>
                  <option value="">Sélectionner…</option>
                  {experiences.map((o) => <option key={o}>{o}</option>)}
                </select>
              )}
            </Field>
          </div>

          <div className="mb-5">
            <Field
              id="montant"
              label="Montant d'investissement envisagé"
              hint="Facultatif. Une simple indication pour préparer notre échange, sans aucun engagement."
            >
              {(a) => (
                <select {...a} name="montant" value={values.montant} onChange={set("montant")} className={inputCls(false)}>
                  <option value="">Sélectionner…</option>
                  {amounts.map((o) => <option key={o}>{o}</option>)}
                </select>
              )}
            </Field>
          </div>

          <div className="mb-7">
            <Field id="motivation" label="Votre motivation" required error={errors.motivation}>
              {(a) => (
                <textarea {...a} name="motivation" rows={4} maxLength={1500} value={values.motivation}
                  onChange={set("motivation")}
                  placeholder={`Pourquoi souhaitez-vous rejoindre ${SITE.name} ? Quels sont vos objectifs d'investissement ?`}
                  className={`${inputCls(!!errors.motivation)} resize-none`} />
              )}
            </Field>
          </div>

          <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

          <div className="mb-2 flex items-start gap-3">
            <input
              id="consent"
              type="checkbox"
              checked={consent}
              onChange={(e) => {
                setConsent(e.target.checked);
                if (errors.consent) setErrors((er) => ({ ...er, consent: undefined }));
              }}
              aria-invalid={!!errors.consent}
              aria-describedby={errors.consent ? "consent-error" : undefined}
              className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer accent-navy"
            />
            <label htmlFor="consent" className="cursor-pointer text-sm leading-relaxed text-muted-foreground">
              J'ai lu et j'accepte les{" "}
              <Link to="/cgu" className="text-foreground underline">conditions générales</Link> et la{" "}
              <Link to="/confidentialite" className="text-foreground underline">politique de confidentialité</Link>{" "}
              de {SITE.name}, et je certifie être majeur(e).
            </label>
          </div>
          {errors.consent && (
            <p id="consent-error" className="mb-4 ml-7 text-xs text-red-600">{errors.consent}</p>
          )}

          {status === "error" && (
            <p role="alert" className="mb-4 mt-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              L'envoi a échoué. Vérifiez votre connexion et réessayez, ou écrivez-nous directement à{" "}
              <a href={`mailto:${SITE.email}`} className="font-semibold underline">{SITE.email}</a>.
            </p>
          )}

          <button
            type="submit"
            disabled={busy}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-navy py-4 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {busy ? "Envoi en cours…" : <>Déposer ma candidature <ArrowRight size={16} /></>}
          </button>

          <p className="mt-4 text-center text-xs text-muted-foreground">
            Candidature gratuite · Réponse sous 48&nbsp;h ouvrées · Aucun engagement
          </p>
        </form>
      </div>
    </section>
  );
}