import type { LucideIcon } from "lucide-react";

type Variant = "dark" | "light" | "large";

const box: Record<Variant, string> = {
  dark: "rounded-xl border border-white/10 bg-white/[0.03] p-6",
  light: "rounded-xl border border-border bg-card p-6 transition-shadow duration-300 hover:shadow-lg",
  large: "rounded-xl border border-border bg-card p-7 transition-all duration-300 hover:shadow-lg",
};

type Props = { icon: LucideIcon; title: string; desc: string; variant?: Variant };

export default function FeatureCard({ icon: Icon, title, desc, variant = "light" }: Props) {
  const large = variant === "large";
  const dark = variant === "dark";
  return (
    <div className={box[variant]}>
      <div
        className={`mb-4 flex items-center justify-center rounded-lg ${
          large ? "mb-5 h-12 w-12 bg-gold/10" : "h-10 w-10 bg-gold/15"
        }`}
      >
        <Icon size={large ? 21 : 18} className="text-gold" />
      </div>
      <h3 className={`mb-2 font-semibold ${dark ? "text-white" : "text-foreground"}`}>{title}</h3>
      <p className={`text-sm leading-relaxed ${dark ? "text-white/50" : "text-muted-foreground"}`}>{desc}</p>
    </div>
  );
}