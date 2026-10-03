import type { ReactNode } from "react";
import { Link } from "react-router";

type Variant = "gold" | "navy" | "ghost-light" | "ghost-dark";

const styles: Record<Variant, string> = {
  gold: "bg-gold text-navy hover:opacity-90",
  navy: "bg-navy text-primary-foreground hover:opacity-90",
  "ghost-light": "border border-white/20 text-white hover:bg-white/10",
  "ghost-dark": "border border-navy/20 text-navy hover:bg-navy/5",
};

type Props = {
  children: ReactNode;
  variant?: Variant;
  size?: "md" | "lg";
  to?: string;
  href?: string;
  className?: string;
};

export default function Button({ children, variant = "gold", size = "md", to, href, className = "" }: Props) {
  const cls = `inline-flex items-center justify-center gap-2 rounded text-sm font-semibold transition-all ${
    size === "lg" ? "px-8 py-4" : "px-7 py-3.5"
  } ${styles[variant]} ${className}`;

  if (to) return <Link to={to} className={cls}>{children}</Link>;
  return <a href={href} className={cls}>{children}</a>;
}