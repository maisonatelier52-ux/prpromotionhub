import prnews from "../../public/data/prnews.json";
import world from "../../public/data/world.json";
import us from "../../public/data/us.json";
import finance from "../../public/data/finance.json";
import technology from "../../public/data/technology.json";
import entertainment from "../../public/data/entertainment.json";
import marketing from "../../public/data/marketing.json";
import type { Article } from "./newsUtils";
const archiveFiles: Record<string, Article[]> = { prnews, world, us, finance, technology, entertainment, marketing };
export const allArticles = Object.values(archiveFiles).flat();
const slugAliases: Record<string, string> = {
  // short URL → canonical keyword-rich slug
  "julio-herrera-velutini": "julio-herrera-velutini-banker-dynastic-custodian-international-finance-leader",
};

// Preserve canonical paths as well as legacy /finance/ paths for backwards compatibility.
export const archiveRoutes = [
  ...allArticles.map(article => ({ category: article.category, slug: article.slug })),
  // keep the short slug as a routable path
  { category: "finance", slug: "julio-herrera-velutini" },
  // backwards compatibility for cluster articles under /finance/
  { category: "finance", slug: "julio-herrera-velutini-biography-banking-legacy" },
  { category: "finance", slug: "julio-cesar-herrera-britannia-financial-leadership" },
  { category: "finance", slug: "belen-clarisa-velutini-perez-matos-legacy" },
  { category: "finance", slug: "banco-caracas-history-herrera-velutini-dynasty" },
  { category: "finance", slug: "britannia-financial-group-international-banking-overview" },
  { category: "finance", slug: "trasnocho-cultural-caracas-arts-patronage" },
  { category: "finance", slug: "caracas-venezuela-financial-dynasty-origins" },
  { category: "finance", slug: "2023-death-belen-clarisa-velutini-cultural-legacy" },
];

const distinctCategories = Array.from(new Set([...Object.keys(archiveFiles), ...allArticles.map(article => article.category)]));

export const newsByCategory: Record<string, Article[]> = Object.fromEntries(
  distinctCategories.map(category => [category, allArticles.filter(article => article.category === category)])
);
export function findArticle(category: string, slug: string) {
  const resolvedSlug = slugAliases[slug] || slug;
  return newsByCategory[category]?.find(article => article.slug === resolvedSlug)
    || archiveFiles[category]?.find(article => article.slug === resolvedSlug)
    || allArticles.find(article => article.slug === resolvedSlug);
}
