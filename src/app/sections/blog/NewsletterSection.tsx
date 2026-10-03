import NewsletterForm from "../../components/NewsletterForm";

export default function NewsletterSection() {
  return (
    <section className="bg-secondary py-20">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-gold">Newsletter</span>
        <h2 className="mt-3 text-balance font-display text-3xl font-bold text-foreground">
          Restez informé(e) chaque semaine.
        </h2>
        <p className="mt-4 text-muted-foreground">
          Recevez nos meilleures analyses et les actualités des marchés directement dans votre boîte mail.
        </p>
        <NewsletterForm />
      </div>
    </section>
  );
}