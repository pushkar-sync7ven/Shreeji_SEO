import type { Head } from "@tanstack/react-router";

export const SITE_DOMAIN = "https://shreejienterprisessatna.com";
export const SITE_NAME = "ShreeJi Enterprises";
export const SITE_THEME_COLOR = "#D97A16";
export const DEFAULT_OG_IMAGE = `${SITE_DOMAIN}/og-default.jpg`;

type RouteMetaInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  ogType?: "website" | "article";
};

function absoluteUrl(path: string): string {
  if (path.startsWith("http")) return path;
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_DOMAIN}${clean}`;
}

export function buildSeoHead({
  title,
  description,
  path,
  image,
  ogType = "website",
}: RouteMetaInput): Head {
  const canonical = absoluteUrl(path);
  const ogImage = image ? absoluteUrl(image) : DEFAULT_OG_IMAGE;

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: ogType },
      { property: "og:url", content: canonical },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:image", content: ogImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: ogImage },
    ],
    links: [
      { rel: "canonical", href: canonical },
    ],
  };
}

export function buildRootHead(): Head {
  return {
    meta: [
      { name: "theme-color", content: SITE_THEME_COLOR },
    ],
  };
}
