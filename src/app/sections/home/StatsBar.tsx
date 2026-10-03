import { statsBar } from "../../data/home";

export default function StatsBar() {
  return (
    <div className="border-b border-white/10 bg-navy-deep">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-10 lg:grid-cols-4">
        {statsBar.map(({ label, value }) => (
          <div key={label} className="text-center">
            <p className="font-display text-3xl font-bold text-gold">{value}</p>
            <p className="mt-1.5 text-xs uppercase tracking-widest text-white/45">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}