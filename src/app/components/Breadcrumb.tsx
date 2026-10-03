import { Link } from "react-router";

type Props = { current: string; parent?: { label: string; to: string } };

export default function Breadcrumb({ current, parent }: Props) {
  return (
    <nav aria-label="Fil d'Ariane" className="mb-6 flex flex-wrap items-center gap-2 text-xs text-white/40">
      <Link to="/" className="transition-colors hover:text-white">Accueil</Link>
      <span aria-hidden="true">/</span>
      {parent && (
        <>
          <Link to={parent.to} className="transition-colors hover:text-white">{parent.label}</Link>
          <span aria-hidden="true">/</span>
        </>
      )}
      <span className="text-gold" aria-current="page">{current}</span>
    </nav>
  );
}