import { useMemo } from "react";
import { useSearchParams } from "react-router";
import { Search } from "lucide-react";
import PageHeader from "../components/PageHeader";
import PostCard from "../components/PostCard";
import { allPosts } from "../data/posts";
import FeaturedPost from "../sections/blog/FeaturedPost";
import NewsletterSection from "../sections/blog/NewsletterSection";

const normalize = (s: string) =>
  s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

const CATEGORIES = ["Tous", ...Array.from(new Set(allPosts.map((p) => p.cat)))];

export default function Blog() {
  const [params, setParams] = useSearchParams();
  const requested = params.get("categorie") ?? "Tous";
  const activeCat = CATEGORIES.includes(requested) ? requested : "Tous";
  const query = params.get("q") ?? "";

  const setParam = (key: "categorie" | "q", value: string) => {
    const next = new URLSearchParams(params);
    if (value && !(key === "categorie" && value === "Tous")) next.set(key, value);
    else next.delete(key);
    setParams(next, { replace: true });
  };

  const filtered = useMemo(() => {
    const q = normalize(query.trim());
    return allPosts.filter(
      (p) =>
        (activeCat === "Tous" || p.cat === activeCat) &&
        (!q || normalize(`${p.title} ${p.excerpt}`).includes(q))
    );
  }, [activeCat, query]);

  const isFiltering = activeCat !== "Tous" || query.trim() !== "";
  const featured = allPosts.find((p) => p.featured);
  const list = isFiltering ? filtered : filtered.filter((p) => !p.featured);

  return (
    <main>
      <PageHeader
        crumb="Blog"
        eyebrow="Blog"
        title="Ressources & Insights."
        subtitle="Analyses, formations et actualités pour renforcer votre culture financière et affiner votre stratégie d'investissement."
      />

      {!isFiltering && featured && <FeaturedPost {...featured} />}

      <section className={`bg-background pb-16 ${isFiltering ? "pt-16" : ""}`}>
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-8 flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-center">
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrer par catégorie">
              {CATEGORIES.map((cat) => {
                const active = activeCat === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setParam("categorie", cat)}
                    className={`rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                      active ? "bg-navy text-primary-foreground" : "bg-navy/[0.07] text-muted-foreground hover:bg-navy/10"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            <div className="relative w-full lg:w-72">
              <label htmlFor="blog-search" className="sr-only">Rechercher un article</label>
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
              <input
                id="blog-search"
                type="search"
                placeholder="Rechercher un article..."
                value={query}
                onChange={(e) => setParam("q", e.target.value)}
                className="w-full rounded-lg border border-border bg-card py-2.5 pl-9 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-gold"
              />
            </div>
          </div>

          <p className="sr-only" aria-live="polite">
            {filtered.length} article{filtered.length > 1 ? "s" : ""} trouvé{filtered.length > 1 ? "s" : ""}
          </p>

          {list.length === 0 ? (
            <div className="py-20 text-center text-muted-foreground">Aucun article trouvé.</div>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {list.map((post) => (
                <PostCard key={post.id} {...post} />
              ))}
            </div>
          )}
        </div>
      </section>

      <NewsletterSection />
    </main>
  );
}