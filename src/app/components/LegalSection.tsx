import type { ReactNode } from "react";

export default function LegalSection({
  id, title, children,
}: { id?: string; title: string; children: ReactNode }) {
  return (
    <section id={id}>
      <h2 className="mb-4 font-display text-2xl font-bold text-foreground">{title}</h2>
      <div className="flex flex-col gap-4 leading-relaxed text-muted-foreground [&_a]:text-foreground [&_a]:underline [&_strong]:text-foreground [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6">
        {children}
      </div>
    </section>
  );
}

export function LegalRow({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="grid gap-1 sm:grid-cols-[210px_1fr]">
      <dt className="font-semibold text-foreground">{label}</dt>
      <dd>{children}</dd>
    </div>
  );
}