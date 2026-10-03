type Props = { label: string; pct: number; color?: string };

export default function ProgressBar({ label, pct, color = "#C8A84B" }: Props) {
  return (
    <div>
      <div className="mb-1.5 flex justify-between">
        <span className="text-sm text-foreground">{label}</span>
        <span className="text-sm font-semibold text-foreground">{pct}&nbsp;%</span>
      </div>
      <div
        role="progressbar"
        aria-label={label}
        aria-valuenow={pct}
        aria-valuemin={0}
        aria-valuemax={100}
        className="h-2 overflow-hidden rounded-full bg-muted"
      >
        <div className="h-full rounded-full" style={{ width: `${pct}%`, background: color }} />
      </div>
    </div>
  );
}