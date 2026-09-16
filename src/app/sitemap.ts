import type { MetadataRoute } from "next";
import { allArticles, newsByCategory } from "@/utils/newsData";
import { REVIEW_DATE } from "@/utils/siteConfig";
import { articleUrl, siteUrl } from "@/utils/seo";
export const dynamic = "force-static";

/**
 * Every URL is emitted with a trailing slash to match `trailingSlash: true`,
 * and articles are emitted at their canonical URL only — a sitemap listing
 * non-canonical or redirecting URLs weakens the canonical signal it is meant
 * to reinforce.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "about", "contact", "editorial", "source-methodology", "ownership-and-funding", "faq", "legal", "right-of-reply-policy", "advertising-and-sponsored-content-policy", "privacy-policy", "terms-and-conditions", ...Object.keys(newsByCategory)];
  const seen = new Set<string>();
  const articles = allArticles.flatMap(article => {
    const url = articleUrl(article);
    if (seen.has(url)) return [];
    seen.add(url);
    return [{ url, lastModified: article.updatedAt || REVIEW_DATE }];
  });
  return [
    ...pages.map(path => ({ url: siteUrl(path), lastModified: REVIEW_DATE })),
    ...articles,
  ];
}
