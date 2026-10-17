import manifest from "/src/assets/images/manifest.json";

const urls = import.meta.glob("/src/assets/images/*.webp", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

type Entry = { widths: number[]; ratio: number };
const entries = manifest as Record<string, Entry>;

const urlFor = (name: string, w: number): string | undefined =>
  urls[`../../assets/images/${name}-${w}.webp`];

export function imageData(name: string) {
  const entry = entries[name];
  const widths = entry?.widths.filter((w) => urlFor(name, w)) ?? [];
  if (!entry || widths.length === 0) {
    console.warn(`[images] image introuvable : « ${name} » (lancez pnpm images)`);
    return { src: undefined, srcSet: undefined, width: undefined, height: undefined };
  }
  const largest = widths[widths.length - 1];
  return {
    src: urlFor(name, largest),
    srcSet: widths.map((w) => `${urlFor(name, w)} ${w}w`).join(", "),
    width: largest,
    height: Math.round(largest / entry.ratio),
  };
}

// Adresse d'une taille précise, pour les images de partage (SEO)
export function imageUrl(name: string, width = 1200): string {
  const entry = entries[name];
  if (!entry) return "";
  const w = entry.widths.find((x) => x >= width) ?? entry.widths[entry.widths.length - 1];
  return urlFor(name, w) ?? "";
}