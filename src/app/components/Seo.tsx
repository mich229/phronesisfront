import { useEffect } from "react";
import { SITE } from "../data/site";
import { absoluteUrl } from "../lib/absoluteUrl";

type JsonLd = Record<string, unknown>;

type Props = {
  title: string;
  description: string;
  path?: string; // sans "path" : pas d'adresse canonique (page 404)
  image?: string;
  type?: "website" | "article";
  noindex?: boolean;
  jsonLd?: JsonLd | JsonLd[];
};

const clean = (s: string) => s.replace(/\u00A0/g, " ");

function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function removeMeta(attr: "name" | "property", key: string) {
  document.head.querySelector(`meta[${attr}="${key}"]`)?.remove();
}

function setCanonical(href: string | null) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!href) {
    el?.remove();
    return;
  }
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export default function Seo({
  title, description, path, image, type = "website", noindex = false, jsonLd,
}: Props) {
  const ld = jsonLd ? JSON.stringify(jsonLd) : "";

  useEffect(() => {
    const t = clean(title);
    const d = clean(description);
    const url = path ? absoluteUrl(path) : null;
    const img = absoluteUrl(image ?? SITE.ogImage);

    document.title = t;
    setMeta("name", "description", d);
    setMeta("name", "robots", noindex ? "noindex, follow" : "index, follow");
    setCanonical(url);

    setMeta("property", "og:type", type);
    setMeta("property", "og:site_name", SITE.name);
    setMeta("property", "og:locale", SITE.locale);
    setMeta("property", "og:title", t);
    setMeta("property", "og:description", d);
    setMeta("property", "og:image", img);
    if (url) setMeta("property", "og:url", url);
    else removeMeta("property", "og:url");

    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", t);
    setMeta("name", "twitter:description", d);
    setMeta("name", "twitter:image", img);
  }, [title, description, path, image, type, noindex]);

  useEffect(() => {
    if (!ld) return;
    const parsed = JSON.parse(ld) as JsonLd | JsonLd[];
    const nodes = (Array.isArray(parsed) ? parsed : [parsed]).map((item) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(item).replace(/</g, "\\u003c");
      document.head.appendChild(script);
      return script;
    });
    return () => nodes.forEach((n) => n.remove());
  }, [ld]);

  return null;
}