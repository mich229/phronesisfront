import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import SectionHeading from "../../components/SectionHeading";
import { allPosts } from "../../data/posts";

export default function BlogPreview() {
  return (
    <section className="bg-background py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <SectionHeading align="left" eyebrow="Blog" title="Derniers articles." />
          <Link to="/blog" className="flex items-center gap-2 text-sm font-medium text-navy">
            Voir tous les articles <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {allPosts.slice(0, 3).map(({ id, slug, cat, title, date, img }) => (
            <Link key={id} to={`/blog/${slug}`} className="group block">
              <div className="mb-5 aspect-video overflow-hidden rounded-xl bg-muted">
                <img
                  src={img}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <span className="text-xs font-semibold uppercase tracking-widest text-gold">{cat}</span>
              <h3 className="mt-2 font-display font-semibold leading-snug text-foreground">{title}</h3>
              <p className="mt-2 text-xs text-muted-foreground">{date}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}