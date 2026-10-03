import type { ReactNode } from "react";

type Props = {
  eyebrow: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
  dark?: boolean;
  large?: boolean;
  as?: "h1" | "h2";
  className?: string;
};

export default function SectionHeading({
  eyebrow, title, subtitle, align = "center", dark = false, large = false, as: Tag = "h2", className = "",
}: Props) {
  const center = align === "center";
  return (
    <div className={`${center ? "text-center" : ""} ${className}`}>
      <span className="text-xs font-semibold uppercase tracking-widest text-gold">{eyebrow}</span>
      <Tag
        className={`mt-3 text-balance font-display font-bold ${
          large ? "text-4xl leading-snug lg:text-5xl" : "text-4xl"
        } ${dark ? "text-white" : "text-foreground"}`}
      >
        {title}
      </Tag>
      {subtitle && (
        <p className={`mt-4 max-w-xl ${center ? "mx-auto" : ""} ${dark ? "text-white/50" : "text-muted-foreground"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}