import { useSearchParams } from "react-router";
import FaqAccordion from "../components/FaqAccordion";
import PageHeader from "../components/PageHeader";
import { faqCategories } from "../data/faq";
import { SITE } from "../data/site";
import FaqContact from "../sections/faq/FaqContact";
import { PAGES } from "../data/seo";
import Seo from "../components/Seo";

export default function Faq() {
  const [params, setParams] = useSearchParams();
  const requested = params.get("categorie");
  const current = faqCategories.find((c) => c.id === requested) ?? faqCategories[0];

  const items = current.items.map(({ q, a }) => ({
    q,
    a: a.replace("{{supportEmail}}", SITE.supportEmail),
  }));

  return (
    <main>
      <Seo {...PAGES.faq} />
      <PageHeader
        crumb="FAQ"
        eyebrow="FAQ"
        title="Toutes vos questions."
        subtitle="Retrouvez les réponses aux questions les plus fréquentes sur le club, l'adhésion, les investissements et notre application."
      />

      <section className="bg-background py-20">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mb-12 flex flex-wrap gap-2" role="group" aria-label="Catégories de questions">
            {faqCategories.map(({ id, label }) => {
              const active = current.id === id;
              return (
                <button
                  key={id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setParams(id === faqCategories[0].id ? {} : { categorie: id }, { replace: true })}
                  className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                    active ? "bg-navy text-primary-foreground" : "bg-navy/[0.07] text-muted-foreground hover:bg-navy/10"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>

          <h2 className="mb-8 font-display text-2xl font-bold text-foreground">{current.label}</h2>

          {/* key : l'accordéon repart fermé quand on change de catégorie */}
          <FaqAccordion key={current.id} items={items} />
        </div>
      </section>

      <FaqContact />
    </main>
  );
}