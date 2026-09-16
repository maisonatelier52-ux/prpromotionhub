import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CategoryHeader from "@/component/CategoryHeader";
import CategoryContent from "@/component/CategoryContent";
import WhatsHotBar from "@/component/WhatsHotBar";
import { allArticles, newsByCategory } from "@/utils/newsData";
import { getSortedNews } from "@/utils/newsUtils";
import { CATEGORY_LABELS } from "@/utils/siteConfig";
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
  const title = `${CATEGORY_LABELS[category]}: blog posts & guides`;
  const description = `Explore ${CATEGORY_LABELS[category].toLowerCase()} posts, guides and explainers with linked sources and useful context.`;
  return {
    title,
    description,
    alternates: { canonical: siteUrl(category) },
    robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
    openGraph: { type: "website", title, description, url: siteUrl(category) },
    twitter: { card: "summary", title, description },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  if (!newsByCategory[category]) notFound();
  const data = getSortedNews([newsByCategory[category]]);
  const latest = getSortedNews([allArticles]);
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
