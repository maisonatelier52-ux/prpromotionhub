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
import { AUTHORS_DATA } from "@/utils/authorsData";
import { RESEARCH_REPORTS } from "@/utils/researchData";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "about",
    "contact",
    "editorial",
    "editorial-guidelines",
    "corrections",
    "authors",
    "research",
    "source-methodology",
    "ownership-and-funding",
    "faq",
    "legal",
    "right-of-reply-policy",
    "advertising-and-sponsored-content-policy",
    "privacy-policy",
    "terms-and-conditions",
    ...Object.keys(newsByCategory),
  ];

  const authorPages = Object.keys(AUTHORS_DATA).map((slug) => `authors/${slug}`);
  const researchPages = RESEARCH_REPORTS.map((report) => `research/${report.slug}`);

  const allPagePaths = [...staticPages, ...authorPages, ...researchPages];

  const seen = new Set<string>();
  const articles = allArticles.flatMap((article) => {
    const url = articleUrl(article);
    if (seen.has(url)) return [];
    seen.add(url);
    return [{ url, lastModified: article.updatedAt || REVIEW_DATE }];
  });

  return [
    ...allPagePaths.map((path) => ({ url: siteUrl(path), lastModified: REVIEW_DATE })),
    ...articles,
  ];
}

