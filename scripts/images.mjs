import { access, mkdir, readdir, readFile, rm, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const OUT = "src/assets/images";
const CACHE = "scripts/.cache";
const SOURCE = "scripts/source"; // vos propres photos : voir plus bas
const QUALITY = 78;

const LARGE = [480, 800, 1200];
const TEAM = [400, 640, 800];

// name = nom utilisé dans le code, ratio = format de recadrage [largeur, hauteur]
const IMAGES = [
  { name: "hero", id: "photo-1486406146926-c627a92ad1ab", ratio: [16, 9], widths: [640, 1024, 1600] },
  { name: "club-intro", id: "photo-1454165804606-c3d57bc86b40", ratio: [7, 5], widths: LARGE },
  { name: "about", id: "photo-1600880292203-757bb62b4baf", ratio: [7, 5], widths: LARGE },
  { name: "phronesis", id: "photo-1551288049-bebda4e38f71", ratio: [700, 460], widths: LARGE },
  { name: "flagship", id: "photo-1460925895917-afdab827c52f", ratio: [700, 460], widths: LARGE },
  { name: "post-diversifier", id: "photo-1611974789855-9c2a0a7236a3", ratio: [16, 9], widths: LARGE },
  { name: "post-etf", id: "photo-1579532537598-459ecdaf39cc", ratio: [16, 9], widths: LARGE },
  { name: "post-emergents", id: "photo-1486406146926-c627a92ad1ab", ratio: [16, 9], widths: LARGE },
  { name: "post-assemblee", id: "photo-1553877522-43269d4ea984", ratio: [16, 9], widths: LARGE },
  { name: "post-esg", id: "photo-1507679799987-c73779587ccf", ratio: [16, 9], widths: LARGE },
  { name: "post-ratios", id: "photo-1454165804606-c3d57bc86b40", ratio: [16, 9], widths: LARGE },
  ...[
    "photo-1560250097-0b93528c311a",
    "photo-1573496359142-b8d87734a5a2",
    "photo-1507003211169-0a1dd7228f2d",
    "photo-1580489944761-15a19d654956",
    "photo-1519085360753-af0119f7cbe7",
    "photo-1534528741775-53994a69daeb",
  ].map((id, i) => ({
    name: `team-${i + 1}`,
    id,
    ratio: [4, 3],
    widths: TEAM,
    position: sharp.strategy.attention, // recadrage centré sur le visage
  })),
];

const exists = (p) => access(p).then(() => true, () => false);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function loadSource({ name, id }) {
  // 1. une photo à vous, déposée dans scripts/source/<name>.jpg, prime sur tout
  for (const ext of ["jpg", "jpeg", "png", "webp"]) {
    const p = path.join(SOURCE, `${name}.${ext}`);
    if (await exists(p)) return { buf: await readFile(p), from: "locale" };
  }
  // 2. déjà téléchargée
  const cached = path.join(CACHE, `${id}.jpg`);
  if (await exists(cached)) return { buf: await readFile(cached), from: "cache" };
  // 3. téléchargement
  const url = `https://images.unsplash.com/${id}?w=2400&q=90&fm=jpg&fit=max`;
  let lastError;
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const buf = Buffer.from(await res.arrayBuffer());
      await writeFile(cached, buf);
      return { buf, from: "Unsplash" };
    } catch (e) {
      lastError = e;
      await sleep(1500 * attempt);
    }
  }
  throw lastError;
}

await mkdir(OUT, { recursive: true });
await mkdir(CACHE, { recursive: true });
await mkdir(SOURCE, { recursive: true });

const manifest = {};
const failures = [];
const rows = [];

for (const img of IMAGES) {
  const { name, ratio: [rw, rh], widths, position } = img;
  try {
    const { buf, from } = await loadSource(img);
    const { width: srcW = 0 } = await sharp(buf).metadata();

    let ws = widths.filter((w) => w <= srcW);
    if (ws.length === 0) ws = [srcW];

    for (const f of await readdir(OUT)) {
      if (f.startsWith(`${name}-`) && f.endsWith(".webp")) await rm(path.join(OUT, f));
    }

    let bytes = 0;
    for (const w of ws) {
      const h = Math.round((w * rh) / rw);
      const file = path.join(OUT, `${name}-${w}.webp`);
      await sharp(buf)
        .rotate()
        .resize(w, h, { fit: "cover", position: position ?? "centre" })
        .webp({ quality: QUALITY })
        .toFile(file);
      bytes += (await stat(file)).size;
    }

    manifest[name] = { widths: ws, ratio: rw / rh };
    rows.push(`${name.padEnd(18)} ${from.padEnd(9)} ${ws.join("/").padEnd(15)} ${(bytes / 1024).toFixed(0)} Ko`);
  } catch (e) {
    failures.push(name);
    rows.push(`${name.padEnd(18)} ÉCHEC : ${e.message}`);
  }
}

await writeFile(path.join(OUT, "manifest.json"), JSON.stringify(manifest, null, 2));
console.log(rows.join("\n"));

if (failures.length) {
  console.error(`\n${failures.length} image(s) en échec : ${failures.join(", ")}`);
  process.exit(1);
}
console.log(`\nOK : ${Object.keys(manifest).length} images générées dans ${OUT}`);