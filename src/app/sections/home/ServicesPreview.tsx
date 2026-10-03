import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import SectionHeading from "../../components/SectionHeading";
import { products } from "../../data/home";

export default function ServicesPreview() {
  return (
    <section className="bg-secondary py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          className="mb-14"
          eyebrow="Nos Services"
          title="Tout ce qu'il vous faut pour investir bien."
          subtitle="Deux produits phares, six services complémentaires — conçus pour chaque étape de votre parcours financier."
        />

        <div className="mb-8 grid gap-6 lg:grid-cols-2">
          {products.map(({ id, icon: Icon, name, tagline, desc }) => (
            <Link
              key={id}
              to={`/services#${id}`}
              className="group block rounded-xl border border-border bg-card p-8 transition-all duration-300 hover:shadow-xl"
            >
              <div className="mb-5 flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gold/10">
                  <Icon size={21} className="text-gold" />
                </div>
                <ArrowRight size={16} className="mt-1 text-muted-foreground transition-colors group-hover:text-foreground" />
              </div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-gold">{tagline}</p>
              <h3 className="mb-3 font-display text-xl font-semibold text-foreground">{name}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link to="/services" className="inline-flex items-center gap-2 text-sm font-medium text-navy">
            Voir tous les services <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}