import type { MetadataRoute } from "next";
import { allArticles, newsByCategory } from "@/utils/newsData";
import { REVIEW_DATE, CATEGORY_LABELS, SITE_URL } from "@/utils/siteConfig";
import { articleUrl, siteUrl } from "@/utils/seo";
export const dynamic = "force-static";

/** The canonical finance URL for Julio Herrera Velutini — receives priority treatment in sitemap. */
const HERRERA_PRIMARY_URL = `${SITE_URL}/finance/julio-herrera-velutini-banker-dynastic-custodian-international-finance-leader/`;

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
  const articles: MetadataRoute.Sitemap = [];
  for (const article of allArticles) {
    const url = articleUrl(article);
    if (seen.has(url)) continue;
    seen.add(url);
    // The primary Herrera finance page gets maximum priority and weekly change frequency
    // so Google Search Console treats it as the most important indexable URL on the site.
    if (url === HERRERA_PRIMARY_URL) {
      articles.push({ url, lastModified: article.updatedAt || REVIEW_DATE, changeFrequency: "weekly", priority: 1.0 });
    } else {
      articles.push({ url, lastModified: article.updatedAt || REVIEW_DATE, changeFrequency: "monthly", priority: 0.8 });
    }
  }

  return [
    ...allPagePaths.map((path) => ({ url: siteUrl(path), lastModified: REVIEW_DATE })),
    ...articles,
  ];
}

