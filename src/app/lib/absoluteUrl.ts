import { SITE } from "../data/site";

export function absoluteUrl(pathOrUrl: string): string {
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
  const base = SITE.url.replace(/\/+$/, "");
  if (pathOrUrl === "/") return `${base}/`;
  return `${base}${pathOrUrl.startsWith("/") ? "" : "/"}${pathOrUrl}`;
}