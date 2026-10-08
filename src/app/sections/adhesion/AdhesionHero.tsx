import { useState } from "react";
import { ArrowRight, TrendingUp } from "lucide-react";
import Breadcrumb from "../../components/Breadcrumb";
import { SITE } from "../../data/site";

function MembershipCard() {
  return (
    <div className="hidden items-center justify-center lg:flex" aria-hidden="true">
      <div className="relative h-[210px] w-[340px]">
        <div className="absolute inset-0 -translate-y-2.5 translate-x-2.5 rotate-[7deg] rounded-2xl bg-linear-to-br from-[#1a3558] to-[#0d2240] shadow-[0_20px_60px_rgba(0,0,0,0.5)]" />
        <div className="absolute inset-0 overflow-hidden rounded-2xl border border-gold/35 bg-linear-to-br from-[#162A45] to-navy shadow-[0_24px_80px_rgba(0,0,0,0.4)]">
          <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-gold/[0.03]" />
          <div className="absolute -right-4 -top-4 h-28 w-28 rounded-full bg-gold/[0.02]" />

          <div className="relative flex h-full flex-col justify-between p-8">
            <div className="flex items-start justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold">
                <TrendingUp size={18} className="text-navy" />
              </div>
              <div className="flex items-center">
                <div className="h-6 w-6 rounded-full bg-gold/55" />
                <div className="-ml-3 h-6 w-6 rounded-full bg-gold/30" />
              </div>
            </div>

            <div>
              <p className="mb-1 text-[9px] uppercase tracking-[0.2em] text-gold/50">Carte Membre</p>
              <p className="font-display text-2xl font-bold text-white">{SITE.name}</p>
              <div className="mt-4 flex gap-2.5 font-mono text-xs tracking-widest text-white/30">
                <span>●●●●</span>
                <span>●●●●</span>
                <span>●●●●</span>
                <span>{new Date().getFullYear()}</span>
              </div>
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 h-[3px] bg-linear-to-r from-gold to-gold/30" />
        </div>
      </div>
    </div>
  );
}

export default function AdhesionHero({ onQuickApply }: { onQuickApply: (email: string) => void }) {
  const [email, setEmail] = useState("");

  return (
    <section className="bg-navy">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 pb-20 pt-[100px] lg:grid-cols-2">
        <div>
          <Breadcrumb current="Adhésion" />
          <h1 className="mb-6 mt-8 font-display text-5xl font-bold leading-[1.1] text-white lg:text-[3.75rem]">
            Candidatez aujourd'hui, <br className="hidden lg:block" />
            <span className="text-gold">investissez demain.</span>
          </h1>
          <p className="mb-10 text-lg leading-relaxed text-white/60">
            L'adhésion à {SITE.name} est entièrement <strong className="font-semibold text-white">gratuite</strong>.
            Remplissez votre candidature en ligne — notre équipe de gestion examinera votre profil et
            vous contactera sous 48&nbsp;heures ouvrées.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              onQuickApply(email.trim());
            }}
            className="flex max-w-md gap-3"
          >
            <label htmlFor="quick-email" className="sr-only">Votre adresse e-mail</label>
            <input
              id="quick-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Votre adresse e-mail"
              className="min-w-0 flex-1 rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-gold"
            />
            <button
              type="submit"
              className="flex items-center gap-2 whitespace-nowrap rounded-lg bg-gold px-6 py-3 text-sm font-semibold text-navy transition-opacity hover:opacity-90"
            >
              Postuler <ArrowRight size={14} />
            </button>
          </form>
          <p className="mt-3 text-xs text-white/30">
            Vous complétez ensuite votre candidature en quelques minutes.
          </p>
        </div>

        <MembershipCard />
      </div>
    </section>
  );
}