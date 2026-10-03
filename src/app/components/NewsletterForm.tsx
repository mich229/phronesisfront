import { useState } from "react";
import { submitForm } from "../lib/submitForm";
import { SITE } from "../data/site";

type Status = "idle" | "loading" | "success" | "error";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const honeypot = (e.currentTarget.elements.namedItem("_gotcha") as HTMLInputElement).value;
    if (honeypot) return; // robot : on ignore silencieusement
    setStatus("loading");
    try {
      await submitForm(SITE.newsletterEndpoint, { email, source: "newsletter-blog" });
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <p role="status" className="mt-8 rounded-lg border border-gold/30 bg-gold/10 px-5 py-4 text-sm text-foreground">
        Merci, votre inscription est bien enregistrée.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="mx-auto mt-8 max-w-md">
      <div className="flex gap-3">
        <label htmlFor="newsletter-email" className="sr-only">Adresse e-mail</label>
        <input
          id="newsletter-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="votre@email.com"
          className="min-w-0 flex-1 rounded-lg border border-border bg-card px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold"
        />
        <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
        <button
          type="submit"
          disabled={status === "loading"}
          className="shrink-0 rounded-lg bg-navy px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
        >
          {status === "loading" ? "Envoi…" : "S'abonner"}
        </button>
      </div>
      {status === "error" && (
        <p role="alert" className="mt-3 text-sm text-destructive">
          L'inscription a échoué. Réessayez dans un instant ou écrivez-nous à {SITE.email}.
        </p>
      )}
      <p className="mt-3 text-xs text-muted-foreground">
        Désinscription possible à tout moment. Vos données ne sont jamais revendues.
      </p>
    </form>
  );
}