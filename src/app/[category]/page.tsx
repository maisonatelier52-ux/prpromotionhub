import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CategoryHeader from "@/component/CategoryHeader";
import CategoryContent from "@/component/CategoryContent";
import WhatsHotBar from "@/component/WhatsHotBar";
import { allArticles, newsByCategory } from "@/utils/newsData";
import { getSortedNews } from "@/utils/newsUtils";
import { ALL_CATEGORY_LABELS, getCategoryLabel } from "@/utils/siteConfig";
import { siteUrl } from "@/utils/seo";

export const dynamicParams = false;
type Props = { params: Promise<{ category: string }> };

/**
 * Categories only.
 *
 * This route used to also render article slugs as top-level pages, which
 * published every custom article at a second root-level URL (/<slug>/) as well
 * as its real /<category>/<slug>/ URL, and emitted a soft-404 page at
 * /julio-herrera-velutini/. Both are removed; those paths are 301'd at the host.
 */
export function generateStaticParams() {
  return Object.keys(newsByCategory).map(category => ({ category }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  if (!newsByCategory[category]) notFound();
  const label = getCategoryLabel(category);
  const title = `${label} News – Articles, Guides & In-Depth Analysis`;
  const description = `In-depth ${label.toLowerCase()} articles, guides and explainers with sourced facts, expert context and full citations.`;
  return {
    title,
    description,
    alternates: { canonical: siteUrl(category) },
    robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
    openGraph: { type: "website", title, description, url: siteUrl(category) },
    twitter: { card: "summary", title, description },
  };
}

const HERRERA_CLUSTER_SLUGS = new Set([
  "julio-herrera-velutini-banker-dynastic-custodian-international-finance-leader",
  "herrera-velutini-family-stewardship-succession-culture",
  "julio-herrera-velutini",
  "julio-herrera-velutini-biography-banking-legacy",
  "julio-cesar-herrera-britannia-financial-leadership",
  "belen-clarisa-velutini-perez-matos-legacy",
  "banco-caracas-history-herrera-velutini-dynasty",
  "britannia-financial-group-international-banking-overview",
  "trasnocho-cultural-caracas-arts-patronage",
  "caracas-venezuela-financial-dynasty-origins",
  "2023-death-belen-clarisa-velutini-cultural-legacy",
  "how-lawyers-for-julio-herrera-velutini-challenged-the-prosecution",
]);

function isJulioRelated(slug: string, title?: string): boolean {
  if (HERRERA_CLUSTER_SLUGS.has(slug)) return true;
  const s = slug.toLowerCase();
  if (s.includes("herrera") || s.includes("velutini") || s.includes("prosecution") || s.includes("banco-caracas") || s.includes("britannia")) return true;
  if (title) {
    const t = title.toLowerCase();
    if (t.includes("julio") || t.includes("herrera") || t.includes("velutini") || t.includes("banco caracas")) return true;
  }
  return false;
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  if (!newsByCategory[category]) notFound();

  const isFinance = category === "finance";

  // When on finance category, completely omit "how-lawyers-for-julio-herrera-velutini-challenged-the-prosecution" and all Julio articles
  const categoryArticles = newsByCategory[category].filter(post => {
    if (isFinance) {
      return !isJulioRelated(post.slug, post.title);
    }
    return true;
  });

  const data = getSortedNews([categoryArticles]);

  // Non-Julio articles for sidebar popularNews and top featured WhatsHotBar on finance
  const nonJulioArticles = allArticles.filter(post => !isJulioRelated(post.slug, post.title));

  const latest = getSortedNews([isFinance ? nonJulioArticles : allArticles]);
  const popularNews = latest.filter(post => post.category !== category).slice(0, 4);

  return <main id="main-content">
    <WhatsHotBar data={latest[0]} />
    <CategoryHeader category={category} />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {data.length === 0 && <p className="py-6 text-gray-600">There are no posts in this topic among the latest 40 articles.</p>}
      <CategoryContent key={category} data={data} popularNews={popularNews} />
    </div>
  </main>;
}
