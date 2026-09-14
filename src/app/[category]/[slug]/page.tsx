import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Article from "@/component/Article";
import RelatedNewsSection from "@/component/RelatedNewsSection";
import WhatsHotBar from "@/component/WhatsHotBar";
import { newsByCategory, allArticles, archiveRoutes, findArticle } from "@/utils/newsData";
import { getSortedNews, toISODate } from "@/utils/newsUtils";
import { SITE_URL } from "@/utils/siteConfig";

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
  const url = `${SITE_URL}/${article.category}/${slug}`;
  const image = new URL(article.image, SITE_URL).href;
  const description = article.metaDescription || article.shortdescription;
  return {
    title: article.title,
    description,
    keywords: article.primaryKeyword ? [article.primaryKeyword] : undefined,
    authors: [{ name: article.author.name }], alternates: { canonical: url },
    openGraph: {
      title: article.title, description, url,
      siteName: "PR Promotion Hub Blog", type: "article",
      publishedTime: toISODate(article.date), modifiedTime: article.updatedAt,
      images: [{ url: image, alt: article.imageAlt ?? "AI-generated illustration" }],
    },
    twitter: { card: "summary_large_image", title: article.title, description, images: [image] },
  };
}
export default async function DetailPage({ params }: Props) {
  const { category, slug } = await params;
  const article = findArticle(category, slug);
  if (!article) notFound();
  const sameCategory = getSortedNews([newsByCategory[article.category]]).filter(item => item.slug !== slug);
  const relatedNews = sameCategory.slice(0, 3);
  const otherPosts = getSortedNews([allArticles]).filter(item => item.slug !== slug);
  const description = article.metaDescription || article.shortdescription;
  const schema = {
    "@context": "https://schema.org", "@type": "BlogPosting",
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/${article.category}/${slug}` },
    headline: article.title, description,
    keywords: article.primaryKeyword,
    articleSection: article.category, genre: article.contentType, inLanguage: "en",
    image: new URL(article.image, SITE_URL).href,
    author: { "@type": "Organization", name: article.author.name, url: `${SITE_URL}/source-methodology` },
    publisher: { "@type": "Organization", name: "PR Promotion Hub", url: SITE_URL,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/images/pr-logo.webp` } },
    datePublished: toISODate(article.date), dateModified: article.updatedAt,
    citation: article.sources?.map(source => source.url),
    isPartOf: { "@type": "Blog", "@id": SITE_URL + "/#blog", name: "PR Promotion Hub Blog", url: SITE_URL },
  };
  return <main id="main-content">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    <WhatsHotBar data={otherPosts[0]} />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5 mb-10">
      <Article article={article} popularNews={otherPosts.slice(1,5)} />
      <RelatedNewsSection data={relatedNews} article={article} />
    </div>
  </main>;
}
