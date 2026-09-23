import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Article from "@/component/Article";
import WhatsHotBar from "@/component/WhatsHotBar";
import { newsByCategory, allArticles, archiveRoutes, findArticle } from "@/utils/newsData";
import { getSortedNews, toISODate } from "@/utils/newsUtils";
import { SITE_URL } from "@/utils/siteConfig";
import { articleUrl, buildArticleSchema, imageDimensions } from "@/utils/seo";
import { getCustomArticleComponent } from "@/component/customArticleRegistry";

export const dynamicParams = false;
export function generateStaticParams() {
  const routes = [...archiveRoutes, ...allArticles.map(({ category, slug }) => ({ category, slug }))];
  return [...new Map(routes.map(route => [`${route.category}/${route.slug}`, route])).values()];
}
type Props = { params: Promise<{ category: string; slug: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, slug } = await params;
  const article = findArticle(category, slug);
  if (!article) notFound();
  // Always the single canonical URL, whichever alias path was requested.
  const canonicalUrl = articleUrl(article);
  const image = new URL(article.image.trim(), SITE_URL).href;
  const { width, height } = imageDimensions(article.image);
  const description = article.metaDescription || article.shortdescription;
  // seoTitle is keyword-optimised for Google (browser tab / SERP); article.title is the visible H1/headline
  const seoTitle = article.seoTitle ?? article.title;
  const keywordList = article.keywords ?? (article.primaryKeyword ? [article.primaryKeyword] : undefined);
  return {
    title: seoTitle,
    description,
    keywords: keywordList,
    authors: [{ name: article.author.name }],
    alternates: { canonical: canonicalUrl },
    robots: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 },
    openGraph: {
      title: seoTitle,
      description,
      url: canonicalUrl,
      siteName: "PR Promotion Hub Blog",
      locale: "en_US",
      type: "article",
      publishedTime: toISODate(article.date),
      modifiedTime: article.updatedAt,
      images: [{ url: image, width, height, alt: article.imageAlt ?? article.title }],
    },
    twitter: { card: "summary_large_image", title: seoTitle, description, images: [image] },
  };
}
export default async function DetailPage({ params }: Props) {
  const { category, slug } = await params;
  const article = findArticle(category, slug);
  if (!article) notFound();
  const isCustom = !!getCustomArticleComponent(article.slug);
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
    "2023-death-belen-clarisa-velutini-cultural-legacy"
  ]);
  const isHerreraCluster = HERRERA_CLUSTER_SLUGS.has(article.slug);
  
  let clusterArticles: typeof allArticles = [];
  if (isHerreraCluster) {
    clusterArticles = allArticles.filter(
      item => item.slug !== article.slug && HERRERA_CLUSTER_SLUGS.has(item.slug)
    ).slice(0, 5);
  } else if (!isCustom) {
    const sameCategory = getSortedNews([newsByCategory[article.category]]).filter(item => item.slug !== article.slug);
    clusterArticles = sameCategory.slice(0, 5);
  }

  // Ensure sidebar "MORE TO READ" articles are completely distinct from the cluster articles
  const clusterSlugs = new Set(clusterArticles.map(c => c.slug));
  const otherPosts = getSortedNews([allArticles]).filter(
    item => item.slug !== article.slug && !clusterSlugs.has(item.slug)
  );
  const sidebarArticles = otherPosts.slice(0, 4);
  const schema = buildArticleSchema(article);

  return <main id="main-content">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    <WhatsHotBar data={otherPosts[0]} />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5 mb-10">
      <Article article={article} popularNews={sidebarArticles} clusterArticles={clusterArticles} />
    </div>
  </main>;

}
