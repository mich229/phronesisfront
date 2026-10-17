import { Clock } from "lucide-react";
import { Link } from "react-router";
import type { Post } from "../data/posts";
import Img from "../components/Img";

export default function PostCard({ slug, cat, title, date, readTime, img, excerpt }: Post) {
  return (
    <article className="group">
      <Link to={`/blog/${slug}`} className="block">
        <div className="mb-5 aspect-video overflow-hidden rounded-xl bg-muted">
          <Img
            name={img}
            sizes="(min-width: 1024px) 384px, (min-width: 640px) 50vw, 100vw"
            alt=""
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="mb-2 flex items-center gap-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold">{cat}</span>
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <Clock size={10} /> {readTime}
          </span>
        </div>
        <h3 className="mb-2 font-display font-semibold leading-snug text-foreground group-hover:underline">{title}</h3>
        <p className="mb-3 text-xs leading-relaxed text-muted-foreground">{excerpt}</p>
        <p className="text-xs text-muted-foreground">{date}</p>
      </Link>
    </article>
  );
}