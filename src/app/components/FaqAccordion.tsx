import { useId, useState } from "react";
import { Minus, Plus } from "lucide-react";

export default function FaqAccordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const uid = useId();

  return (
    <div className="flex flex-col">
      {items.map(({ q, a }, i) => {
        const isOpen = open === i;
        return (
          <div key={q} className="border-b border-navy/10">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              aria-controls={`${uid}-${i}`}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
            >
              <span className="font-medium text-foreground">{q}</span>
              {isOpen ? (
                <Minus size={16} className="shrink-0 text-gold" />
              ) : (
                <Plus size={16} className="shrink-0 text-muted-foreground" />
              )}
            </button>
            {isOpen && (
              <p id={`${uid}-${i}`} className="pb-5 text-sm leading-relaxed text-muted-foreground">
                {a}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}