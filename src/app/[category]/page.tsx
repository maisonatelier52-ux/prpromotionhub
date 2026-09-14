import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CategoryHeader from "@/component/CategoryHeader";
import CategoryContent from "@/component/CategoryContent";
import WhatsHotBar from "@/component/WhatsHotBar";
import { allArticles, newsByCategory } from "@/utils/newsData";
import { getSortedNews } from "@/utils/newsUtils";
import { CATEGORY_LABELS, SITE_URL } from "@/utils/siteConfig";

import Article from "@/component/Article";
import RelatedNewsSection from "@/component/RelatedNewsSection";
import { customArticleComponents } from "@/component/customArticleRegistry";
import { toISODate } from "@/utils/newsUtils";

export const dynamicParams = false;
type Props = { params: Promise<{ category: string }> };
export function generateStaticParams() {
  const categoryList = Object.keys(newsByCategory).map(category => ({ category }));
  const customSlugs = Object.keys(customArticleComponents).map(slug => ({ category: slug }));
  return [...categoryList, ...customSlugs];
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const directArticle = allArticles.find(a => a.slug === category);
  if (directArticle) {
    const url = `${SITE_URL}/${directArticle.category}/${directArticle.slug}`;
    const image = new URL(directArticle.image, SITE_URL).href;
    const description = directArticle.metaDescription || directArticle.shortdescription;
    return {
      title: directArticle.title,
      description,
      keywords: directArticle.primaryKeyword ? [directArticle.primaryKeyword] : undefined,
      authors: [{ name: directArticle.author.name }],
      alternates: { canonical: url },
      openGraph: {
        title: directArticle.title,
        description,
        url,
        siteName: "PR Promotion Hub Blog",
        type: "article",
        publishedTime: toISODate(directArticle.date),
        modifiedTime: directArticle.updatedAt,
        images: [{ url: image, alt: directArticle.imageAlt ?? "AI-generated illustration" }],
      },
      twitter: { card: "summary_large_image", title: directArticle.title, description, images: [image] },
    };
  }
  if (!newsByCategory[category]) notFound();
  const title = `${CATEGORY_LABELS[category]}: blog posts & guides`;
  const description = `Explore ${CATEGORY_LABELS[category].toLowerCase()} posts, guides and explainers with linked sources and useful context.`;
  return { title, description, alternates: { canonical: `${SITE_URL}/${category}` },
    openGraph: { type: "website", title, description, url: `${SITE_URL}/${category}` },
    twitter: { card: "summary", title, description } };
}
export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const directArticle = allArticles.find(a => a.slug === category);
  if (directArticle) {
    const sameCategory = getSortedNews([newsByCategory[directArticle.category]]).filter(item => item.slug !== directArticle.slug);
    const relatedNews = sameCategory.slice(0, 3);
    const otherPosts = getSortedNews([allArticles]).filter(item => item.slug !== directArticle.slug);
    return <main id="main-content">
      <WhatsHotBar data={otherPosts[0]} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5 mb-10">
        <Article article={directArticle} popularNews={otherPosts.slice(1, 5)} />
        <RelatedNewsSection data={relatedNews} article={directArticle} />
      </div>
    </main>;
  }
  if (!newsByCategory[category]) notFound();
  const data = getSortedNews([newsByCategory[category]]);
  const latest = getSortedNews([allArticles]);
  const popularNews = latest.filter(post => post.category !== category).slice(0,4);
  return <main id="main-content">
    <WhatsHotBar data={latest[0]} />
    <CategoryHeader category={category} />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {data.length === 0 && <p className="py-6 text-gray-600">There are no posts in this topic among the latest 40 articles.</p>}
      <CategoryContent key={category} data={data} popularNews={popularNews} />
    </div>
  </main>;
}

