import type { ReactNode } from "react";

export const inputCls = (hasError: boolean) =>
  `w-full rounded-lg border bg-background px-4 py-3 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-gold ${
    hasError ? "border-red-500" : "border-navy/15"
  }`;

type A11y = {
  id: string;
  "aria-invalid": boolean;
  "aria-describedby"?: string;
  "aria-required"?: boolean;
};

type Props = {
  id: string;
  label: string;
  required?: boolean;
  hint?: string;
  error?: string;
  children: (a11y: A11y) => ReactNode;
};

export default function Field({ id, label, required, hint, error, children }: Props) {
  const errorId = `${id}-error`;
  const hintId = `${id}-hint`;
  const describedBy = [error && errorId, hint && hintId].filter(Boolean).join(" ") || undefined;

  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-foreground">
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </label>
      {children({
        id,
        "aria-invalid": !!error,
        "aria-describedby": describedBy,
        "aria-required": required,
      })}
      {hint && !error && (
        <p id={hintId} className="mt-1 text-xs text-muted-foreground">{hint}</p>
      )}
      {error && (
        <p id={errorId} className="mt-1 text-xs text-red-600">{error}</p>
      )}
    </div>
  );
}