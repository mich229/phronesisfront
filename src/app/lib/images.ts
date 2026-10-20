const files = import.meta.glob("../../assets/images/*.webp", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

// Le manifest est facultatif : il ne sert qu'à calculer la hauteur (anti-décalage).
const manifests = import.meta.glob("../../assets/images/manifest.json", {
  eager: true,
  import: "default",
}) as Record<string, Record<string, { ratio: number }>>;
const ratios = Object.values(manifests)[0] ?? {};

type Variant = { w: number; url: string };
const index: Record<string, Variant[]> = {};

for (const [key, url] of Object.entries(files)) {
  const m = key.match(/\/([^/]+)-(\d+)\.webp$/);
  if (!m) continue;
  (index[m[1]] ??= []).push({ w: Number(m[2]), url });
}
for (const list of Object.values(index)) list.sort((a, b) => a.w - b.w);

if (import.meta.env.DEV && Object.keys(index).length === 0) {
  console.error(
    "[images] Aucun fichier .webp trouvé dans src/assets/images. Lancez « pnpm images » et vérifiez son tableau de résultats."
  );
}

export function imageData(name: string) {
  const list = index[name];
  if (!list?.length) {
    console.warn(`[images] « ${name} » absente. Images disponibles : ${Object.keys(index).join(", ") || "aucune"}`);
    return { src: undefined, srcSet: undefined, width: undefined, height: undefined };
  }
  const largest = list[list.length - 1];
  const ratio = ratios[name]?.ratio;
  return {
    src: largest.url,
    srcSet: list.map((v) => `${v.url} ${v.w}w`).join(", "),
    width: largest.w,
    height: ratio ? Math.round(largest.w / ratio) : undefined,
  };
}

// Adresse d'une taille précise, pour les images de partage (SEO)
export function imageUrl(name: string, width = 1200): string {
  const list = index[name];
  if (!list?.length) return "";
  return (list.find((v) => v.w >= width) ?? list[list.length - 1]).url;
}