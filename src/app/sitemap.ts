import type { MetadataRoute } from "next";
import { allArticles, newsByCategory } from "@/utils/newsData";
import { SITE_URL, REVIEW_DATE } from "@/utils/siteConfig";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "about", "contact", "editorial", "source-methodology", "ownership-and-funding", "faq", "legal", "right-of-reply-policy", "advertising-and-sponsored-content-policy", "privacy-policy", "terms-and-conditions", ...Object.keys(newsByCategory)];
  return [...pages.map(path => ({ url: `${SITE_URL}/${path}`, lastModified: REVIEW_DATE })),
    ...allArticles.map(article => ({ url: `${SITE_URL}/${article.category}/${article.slug}`, lastModified: article.updatedAt || REVIEW_DATE }))];
}

