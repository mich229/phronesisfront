import markGold from "../../assets/logo/logo-mark-gold.svg";
import markNavy from "../../assets/logo/logo-mark-navy.svg";
import fullGold from "../../assets/logo/logo-full-gold.svg";
import fullNavy from "../../assets/logo/logo-full-navy.svg";
import { SITE } from "../data/site";

type Tone = "gold" | "navy"; // gold = fonds sombres, navy = fonds clairs

type Props = {
  variant?: "horizontal" | "mark" | "full";
  tone?: Tone;
  size?: number; // hauteur de l'emblème (ou du logo complet) en px
  className?: string;
};

const MARK = { gold: markGold, navy: markNavy };
const FULL = { gold: fullGold, navy: fullNavy };
const MARK_RATIO = 128 / 174;
const FULL_RATIO = 294 / 258;

export default function Logo({ variant = "horizontal", tone = "gold", size = 36, className = "" }: Props) {
  if (variant === "full") {
    return (
      <img
        src={FULL[tone]}
        alt={SITE.name}
        height={size}
        width={Math.round(size * FULL_RATIO)}
        className={className}
      />
    );
  }

  const mark = (
    <img
      src={MARK[tone]}
      alt={variant === "mark" ? SITE.name : ""}
      height={size}
      width={Math.round(size * MARK_RATIO)}
      className={variant === "mark" ? className : "shrink-0"}
    />
  );
  if (variant === "mark") return mark;

  const [first, ...rest] = SITE.name.split(" ");
  const color = tone === "gold" ? "text-logo-gold" : "text-navy";

  return (
    <span className={`inline-flex items-center gap-3 ${color} ${className}`}>
      {mark}
      <span className="flex flex-col items-center leading-none" style={{ fontSize: size * 0.42 }}>
        <span className="pl-[0.2em] font-medium uppercase tracking-[0.2em]">{first}</span>
        <span className="mt-[0.5em] pl-[0.55em] text-[0.55em] uppercase tracking-[0.55em] opacity-90">
          {rest.join(" ")}
        </span>
      </span>
    </span>
  );
}