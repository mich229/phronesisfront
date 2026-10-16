import { ArrowLeft, Clock } from "lucide-react";
import { Link, useParams } from "react-router";
import Breadcrumb from "../components/Breadcrumb";
import CtaBanner from "../components/CtaBanner";
import PostCard from "../components/PostCard";
import { allPosts, getPost } from "../data/posts";
import { KEY_FIGURES, SITE } from "../data/site";
import NotFound from "./NotFound";
import { blogPostingLd } from "../data/seo";
import Seo from "../components/Seo";

export default function BlogPost() {
  const { slug = "" } = useParams();
  const post = getPost(slug);
  if (!post) return <NotFound />;

  const related = allPosts.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <main>
      <Seo
        title={`${post.title} | Blog ${SITE.name}`}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
        image={post.img}
        type="article"
        jsonLd={blogPostingLd(post)}
      />
      <header className="bg-navy pt-[68px]">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <Breadcrumb current="Article" parent={{ label: "Blog", to: "/blog" }} />
          <div className="mb-4 flex items-center gap-3 text-xs">
            <span className="font-semibold uppercase tracking-widest text-gold">{post.cat}</span>
            <span className="flex items-center gap-1 text-white/50"><Clock size={11} /> {post.readTime}</span>
            <span className="text-white/50">{post.date}</span>
          </div>
          <h1 className="text-balance font-display text-4xl font-bold leading-tight text-white lg:text-5xl">
            {post.title}
          </h1>
        </div>
      </header>

      <article className="bg-background py-16">
        <div className="mx-auto max-w-3xl px-6">
          <img src={post.img} alt="" className="mb-10 aspect-video w-full rounded-xl object-cover shadow-xl" />

          <p className="mb-8 text-xl leading-relaxed text-foreground">{post.excerpt}</p>

          {post.content?.length ? (
            <div className="flex flex-col gap-5 leading-relaxed text-muted-foreground">
              {post.content.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          ) : (
            <p className="rounded-lg border border-border bg-secondary px-5 py-4 text-sm text-muted-foreground">
              Le texte complet de cet article sera publié prochainement.
            </p>
          )}

          <p className="mt-12 border-t border-border pt-6 text-xs leading-relaxed text-muted-foreground">
            Cet article est fourni à titre informatif et pédagogique. Il ne constitue pas un conseil en
            investissement. Les performances passées ne préjugent pas des performances futures.
          </p>

          <Link to="/blog" className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-navy">
            <ArrowLeft size={14} /> Retour au blog
          </Link>
        </div>
      </article>

      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-10 font-display text-3xl font-bold text-foreground">À lire aussi.</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <PostCard key={p.id} {...p} />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title={"Prêt à faire fructifier votre patrimoine\u00A0?"}
        text={`Rejoignez les ${KEY_FIGURES.members} membres qui investissent intelligemment avec ${SITE.name}.`}
      />
    </main>
  );
  if (!post) return <NotFound />
}