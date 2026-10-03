import type { ReactNode } from "react";
import Breadcrumb from "./Breadcrumb";

type Props = {
  crumb: string;
  eyebrow: string;
  title: ReactNode;
  subtitle: ReactNode;
};

export default function PageHeader({ crumb, eyebrow, title, subtitle }: Props) {
  return (
    <header className="bg-navy pt-[68px]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <Breadcrumb current={crumb} />
        <span className="text-xs font-semibold uppercase tracking-widest text-gold">{eyebrow}</span>
        <h1 className="mt-3 max-w-2xl text-balance font-display text-5xl font-bold leading-tight text-white">
          {title}
        </h1>
        <p className="mt-5 max-w-xl text-lg text-white/60">{subtitle}</p>
      </div>
    </header>
  );
}