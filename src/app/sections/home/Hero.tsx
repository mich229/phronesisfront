import { ArrowRight, ChevronDown, ExternalLink } from "lucide-react";
import Button from "../../components/Button";
import { heroHighlights } from "../../data/home";
import { KEY_FIGURES, SITE } from "../../data/site";

const card = "rounded-xl border border-white/10 bg-white/[0.04]";
const label = "text-xs uppercase tracking-widest text-white/40";

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden bg-navy">
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&h=900&fit=crop&auto=format"
          alt=""
          className="h-full w-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-linear-to-br from-navy via-navy/90 to-[#162A45]" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(200,168,75,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(200,168,75,0.04) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 px-6 pb-16 pt-24 lg:grid-cols-[1fr_420px]">
        <div>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold">
            Club d'Investissement
          </div>
          <h1 className="mb-6 font-display text-5xl font-bold leading-[1.1] text-white lg:text-6xl xl:text-[4.5rem]">
            Investir <span className="text-gold">ensemble</span>,<br />
            croître
            <br />
            ensemble.
          </h1>
          <p className="mb-10 max-w-lg text-lg leading-relaxed text-white/60">
            {SITE.name} démocratise l'accès aux marchés financiers. Rejoignez une communauté
            d'investisseurs engagés et faites fructifier votre patrimoine collectivement.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button to="/adhesion">
              Rejoindre le club <ArrowRight size={15} />
            </Button>
            <Button href={SITE.memberAreaUrl} variant="ghost-light">
              <ExternalLink size={15} /> Espace Membre
            </Button>
          </div>
        </div>

        <div className="hidden flex-col gap-4 lg:flex">
          <div className={`${card} p-6`}>
            <p className={`${label} mb-1`}>Performance depuis le lancement</p>
            <p className="font-display text-5xl font-bold text-gold">{KEY_FIGURES.performance}</p>
            <p className="mt-1.5 text-xs text-white/35">
              vs. {KEY_FIGURES.benchmark} pour l'indice de référence
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {heroHighlights.map(({ label: l, value }) => (
              <div key={l} className={`${card} p-5`}>
                <p className={`${label} mb-2`}>{l}</p>
                <p className="font-display text-3xl font-bold text-white">{value}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4 rounded-xl border border-gold/25 bg-gold/10 p-5">
            <ExternalLink size={18} className="shrink-0 text-gold" />
            <div>
              <p className="text-sm font-semibold text-white">Espace Membre</p>
              <p className="text-xs text-white/45">Accédez à votre portefeuille en temps réel</p>
            </div>
            <a
              href={SITE.memberAreaUrl}
              className="ml-auto whitespace-nowrap rounded bg-gold px-3 py-1.5 text-xs font-semibold text-navy transition-opacity hover:opacity-80"
            >
              Se connecter
            </a>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 animate-bounce flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-xs uppercase tracking-widest text-white/25">Découvrir</span>
        <ChevronDown size={16} className="text-white/25" />
      </div>
    </section>
  );
}