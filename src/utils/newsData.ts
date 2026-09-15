import prnews from "../../public/data/prnews.json";
import world from "../../public/data/world.json";
import us from "../../public/data/us.json";
import finance from "../../public/data/finance.json";
import technology from "../../public/data/technology.json";
import entertainment from "../../public/data/entertainment.json";
import type { Article } from "./newsUtils";
const archiveFiles: Record<string, Article[]> = { prnews, world, us, finance, technology, entertainment };
export const allArticles = Object.values(archiveFiles).flat();
const slugAliases: Record<string, string> = {
  "julio-herrera-velutini": "herrera-velutini-family-stewardship-succession-culture",
};

// Preserve old paths for entries stored in a different category's archive file or legacy slugs.
export const archiveRoutes = [
  ...Object.entries(archiveFiles).flatMap(([category, articles]) =>
    articles.map(article => ({ category, slug: article.slug }))
  ),
  { category: "finance", slug: "julio-herrera-velutini" }
];
export const newsByCategory: Record<string, Article[]> = Object.fromEntries(
  Object.keys(archiveFiles).map(category => [category, allArticles.filter(article => article.category === category)])
);
export function findArticle(category: string, slug: string) {
  const resolvedSlug = slugAliases[slug] || slug;
  return newsByCategory[category]?.find(article => article.slug === resolvedSlug)
    || archiveFiles[category]?.find(article => article.slug === resolvedSlug)
    || allArticles.find(article => article.slug === resolvedSlug);
}
