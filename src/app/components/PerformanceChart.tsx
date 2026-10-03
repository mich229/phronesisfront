import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { perfData } from "../data/home";

const GOLD = "#C8A84B";
const tick = { fill: "rgba(255,255,255,0.4)", fontSize: 11 };

export default function PerformanceChart() {
  return (
    <div role="img" aria-label="Courbe de performance du portefeuille du club comparée à l'indice de référence, base 100 en janvier 2024">
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={perfData} margin={{ top: 10, right: 24, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="gradClub" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={GOLD} stopOpacity={0.25} />
              <stop offset="95%" stopColor={GOLD} stopOpacity={0} />
            </linearGradient>
            <linearGradient id="gradRef" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ffffff" stopOpacity={0.08} />
              <stop offset="95%" stopColor="#ffffff" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke="rgba(255,255,255,0.05)" />
          <XAxis dataKey="m" stroke="rgba(255,255,255,0.15)" tick={tick} />
          <YAxis stroke="rgba(255,255,255,0.15)" tick={tick} domain={[95, 175]} />
          <Tooltip
            contentStyle={{
              background: "#0D1B2E",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 8,
              color: "#fff",
              fontSize: 12,
            }}
          />
          <Area name="Portefeuille Club" type="monotone" dataKey="club" stroke={GOLD} strokeWidth={2.5} fill="url(#gradClub)" dot={false} />
          <Area name="Indice de référence" type="monotone" dataKey="ref" stroke="rgba(255,255,255,0.35)" strokeWidth={1.5} strokeDasharray="5 4" fill="url(#gradRef)" dot={false} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}