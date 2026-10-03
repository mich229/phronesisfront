import { lazy, Suspense } from "react";
import SectionHeading from "../../components/SectionHeading";

const PerformanceChart = lazy(() => import("../../components/PerformanceChart"));

export default function Performance() {
  return (
    <section className="bg-navy py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 grid items-end gap-8 lg:grid-cols-[1fr_auto]">
          <SectionHeading
            align="left"
            dark
            eyebrow="Performance"
            title="Des résultats qui parlent d'eux-mêmes."
            subtitle="Notre portefeuille collectif surperforme régulièrement les indices de référence depuis le lancement du club."
          />
          <div className="flex gap-6">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-gold" />
              <span className="text-xs text-white/60">Portefeuille Club</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-0 w-8 border-t-2 border-dashed border-white/35" />
              <span className="text-xs text-white/60">Indice de référence</span>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-8">
          <Suspense fallback={<div className="h-[300px]" />}>
            <PerformanceChart />
          </Suspense>
        </div>
        <p className="mt-4 text-xs text-white/25">
          Les performances passées ne préjugent pas des performances futures. Base 100 = janvier 2024.
        </p>
      </div>
    </section>
  );
}