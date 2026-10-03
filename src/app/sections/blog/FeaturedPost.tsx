import { ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router";
import type { Post } from "../../data/posts";

export default function FeaturedPost({ slug, cat, title, date, readTime, img, excerpt }: Post) {
  return (
    <section className="bg-background py-16">
      <div className="mx-auto max-w-7xl px-6">
        <Link
          to={`/blog/${slug}`}
          className="group grid items-center gap-10 overflow-hidden rounded-2xl border border-border bg-card transition-shadow duration-300 hover:shadow-2xl lg:grid-cols-2"
        >
          <div className="aspect-video overflow-hidden bg-muted lg:aspect-auto lg:h-80">
            <img
              src={img}
              alt=""
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="p-8 lg:pr-10">
            <div className="mb-4 flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-gold">{cat}</span>
              <span className="text-xs text-muted-foreground" aria-hidden="true">•</span>
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock size={11} /> {readTime}
              </span>
            </div>
            <h2 className="mb-4 text-balance font-display text-2xl font-bold leading-snug text-foreground">{title}</h2>
            <p className="mb-6 text-sm leading-relaxed text-muted-foreground">{excerpt}</p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">{date}</span>
              <span className="flex items-center gap-1.5 text-sm font-semibold text-gold">
                Lire l'article <ArrowRight size={14} />
              </span>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}