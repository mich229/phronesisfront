import { Database } from "lucide-react";
import FeatureCard from "../../components/FeatureCard";
import { phronesisFeatures, phronesisTags } from "../../data/services";
import Img from "../../components/Img";

export default function PhronesisSection() {
  return (
    <section id="phronesis" className="bg-navy-deep py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 grid items-center gap-16 lg:grid-cols-2">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gold/20">
                <Database size={20} className="text-gold" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gold">Quiétude</p>
                <h2 className="font-display text-3xl font-bold text-white">Portefeuille Hikma</h2>
              </div>
            </div>
            <p className="mb-6 text-lg leading-relaxed text-white/65">
              De l'arabe <em className="text-gold">Hikma</em> — la sagesse pratique. Notre division
              d'analyse et d'intelligence financière fournit l'infrastructure analytique qui guide
              chaque décision d'investissement du club.
            </p>
            <p className="mb-8 leading-relaxed text-white/50">
              Hikma produit des analyses fondamentales approfondies, des rapports
              sectoriels, une veille macroéconomique continue et assure la due diligence avant chaque
              investissement collectif. C'est le cerveau analytique de phronesis Capital.
            </p>
            <ul className="flex flex-wrap gap-3">
              {phronesisTags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-gold/30 bg-gold/10 px-3 py-1.5 text-xs font-medium text-gold"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <Img
              name="phronesis"
              sizes="(min-width: 1024px) 576px, 100vw"
              alt="Analyse de données financières"
              className="w-full rounded-xl object-cover shadow-2xl"
            />
            <div className="absolute inset-0 rounded-xl bg-linear-to-t from-navy-deep/60 to-transparent to-50%" />
            <div className="absolute inset-x-5 bottom-5">
              <div className="rounded-lg border border-white/10 bg-navy-deep/80 p-4 backdrop-blur-sm">
                <p className="mb-1 text-xs uppercase tracking-widest text-gold">Dernière publication</p>
                <p className="text-sm font-medium text-white">Rapport Q2 2026 — Marchés émergents d'Afrique</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {phronesisFeatures.map((f) => (
            <FeatureCard key={f.title} {...f} variant="dark" />
          ))}
        </div>
      </div>
    </section>
  );
}