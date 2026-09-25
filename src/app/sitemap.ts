import type { MetadataRoute } from "next";
import { allArticles, newsByCategory } from "@/utils/newsData";
import { REVIEW_DATE, CATEGORY_LABELS } from "@/utils/siteConfig";
import { articleUrl, siteUrl } from "@/utils/seo";
export const dynamic = "force-static";

/**
 * Every URL is emitted with a trailing slash to match `trailingSlash: true`,
 * and articles are emitted at their canonical URL only — a sitemap listing
 * non-canonical or redirecting URLs weakens the canonical signal it is meant
 * to reinforce.
 *
 * Entity pseudo-categories (people, organisation, place, event) are intentionally
 * excluded from the category listing entries — they are thin index pages with no
 * standalone editorial value. Their individual article URLs are still emitted below.
 */
import { AUTHORS_DATA } from "@/utils/authorsData";
import { RESEARCH_REPORTS } from "@/utils/researchData";

/** Only the real editorial category listing pages — not entity pseudo-categories. */
const EDITORIAL_CATEGORIES = Object.keys(CATEGORY_LABELS).filter(
  (cat) => newsByCategory[cat] && newsByCategory[cat].length > 0
);

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
    ...EDITORIAL_CATEGORIES,
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

