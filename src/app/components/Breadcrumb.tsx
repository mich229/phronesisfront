import { Link } from "react-router";

export default function Breadcrumb({ current }: { current: string }) {
  return (
    <nav aria-label="Fil d'Ariane" className="mb-6 flex items-center gap-2 text-xs text-white/40">
      <Link to="/" className="transition-colors hover:text-white">
        Accueil
      </Link>
      <span aria-hidden="true">/</span>
      <span className="text-gold" aria-current="page">
        {current}
      </span>
    </nav>
  );
}