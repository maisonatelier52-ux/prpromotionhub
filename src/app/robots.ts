import type { MetadataRoute } from "next";
import { SITE_URL } from "@/utils/siteConfig";
export const dynamic = "force-static";

/**
 * Deliberately wide open. Do NOT disallow /_next/ — Googlebot needs the JS and
 * CSS chunks to render the page; blocking them breaks rendering and can cost
 * the page its layout evaluation. Duplicate paths are handled with canonicals
 * and 301s, not robots.txt (a blocked URL cannot have its canonical read).
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    // List both sitemaps so Google Search Console discovers all URLs and
    // Google News crawler has its dedicated sitemap for news indexing.
    sitemap: [
      `${SITE_URL}/sitemap.xml`,
      `${SITE_URL}/news-sitemap.xml`,
    ],
  };
}
