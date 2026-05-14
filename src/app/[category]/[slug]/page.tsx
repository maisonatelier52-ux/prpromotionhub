import prnewsData from "../../../../public/data/prnews.json";
import worldData from "../../../../public/data/world.json";
import usData from "../../../../public/data/us.json";
import marketingData from "../../../../public/data/marketing.json";
import financeData from "../../../../public/data/finance.json";
import technologyData from "../../../../public/data/technology.json";
import entertainmentData from "../../../../public/data/entertainment.json";
import Script from "next/script";
import { Metadata } from "next";
import WhatsHotBar from "@/component/WhatsHotBar";
import Article from "@/component/Article";
import RelatedNewsSection from "@/component/RelatedNewsSection";
import { getSortedNews, Article as NewsItem } from "@/utils/newsUtils";

export async function generateStaticParams() {
  const allDataList = [
    { category: "prnews", articles: prnewsData },
    { category: "marketing", articles: marketingData },
    { category: "world", articles: worldData },
    { category: "us", articles: usData },
    { category: "finance", articles: financeData },
    { category: "technology", articles: technologyData },
    { category: "entertainment", articles: entertainmentData },
  ];

  const params = allDataList.flatMap(({ category, articles }) =>
    articles.map((article) => ({
      category,
      slug: article.slug,
    })),
  );

  return params;
}

interface DetailPageProps {
  params: Promise<{ category: string; slug: string }>;
}

const allData: Record<string, NewsItem[]> = {
  prnews: prnewsData as NewsItem[],
  marketing: marketingData as NewsItem[],
  world: worldData as NewsItem[],
  us: usData as NewsItem[],
  finance: financeData as NewsItem[],
  technology: technologyData as NewsItem[],
  entertainment: entertainmentData as NewsItem[],
};

const slugMetadataMap: Record<string, { title?: string; description?: string }> = {
  "reputation-global-finance-leadership-trust": {
    title: "Why Reputation Is the Real Power in Global Finance | Julio Herrera Velutini",
    description: "Julio Herrera Velutini explains why reputation is the new currency in global finance and how it shapes leadership and trust today.",
  },
  "julio-herrera-velutini-us-financial-spotlight": {
    title: "Julio Herrera Velutini & U.S. Finance: Legacy and Scrutiny",
    description: "Exploration of Julio Herrera Velutini's impact on the U.S. financial landscape, his legacy wealth, and regulatory navigation.",
  },
  "julio-herrera-velutini-uk-financial-lens": {
    title: "Julio Herrera Velutini: Banking Heritage in the UK Financial Hub",
    description: "Insights into Julio Herrera Velutini's UK-based banking activities and how he balances heritage with modern regulatory accountability.",
  },
  "who-is-julio-martin-herrera-velutini": {
    title: "Who is Julio Martín Herrera Velutini? Career & Family Legacy",
    description: "A comprehensive look at the career, business empire, and historic family legacy of international banker Julio Martín Herrera Velutini.",
  },
  "two-degrees-from-the-throne-julio-herrera-velutini": {
    title: "Two Degrees From The Throne: Julio Herrera Velutini and the Quiet Power of Influence ",
    description: "In elite circles, proximity matters more than publicity. Julio Herrera Velutini’s world sits unusually close to crowns, capitals, family offices, sovereign circles, and the billionaire class.",
  },
};



export async function generateMetadata({
  params,
}: DetailPageProps): Promise<Metadata> {
  const { category, slug } = await params;

  const articles = allData[category] || [];
  const article = articles.find((a) => a.slug === slug);

  const siteUrl = "https://www.prpromotionhub.com";
  const currentUrl = `${siteUrl}/${category}/${slug}`;

  const imageUrl = article?.image?.startsWith("http")
    ? article.image
    : `${siteUrl}${article?.image || "/images/pr-logo.webp"}`;

  if (!article) {
    return {
      title: "Article Not Found – PR Promotion Hub",
      description: "The requested article could not be found.",
      robots: { index: false, follow: false },
    };
  }

  const slugOverride = slugMetadataMap[slug] || {};

  return {
    title: slugOverride.title ?? article.title,
    description: slugOverride.description ?? article.shortdescription,

    keywords: `${article.category}, pr news, marketing news, business news, ${article.title}`,

    authors: [{ name: article.author.name }],

    alternates: {
      canonical: currentUrl,
    },

    openGraph: {
      title: slugOverride.title ?? article.title,
      description: slugOverride.description ?? article.shortdescription,
      url: currentUrl,
      siteName: "PR Promotion Hub",
      locale: "en_US",
      type: "article",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: slugOverride.title ?? article.title,
      description: slugOverride.description ?? article.shortdescription,
      images: [imageUrl],
      site: "@prpromotionhub",
      creator: "@prpromotionhub",
    },
  };
}

export default async function DetailPage({ params }: DetailPageProps) {
  const { category, slug } = await params;
  const data = allData[category?.toLowerCase()];

  const article = data?.find((item) => item.slug === slug);



  if (!data || !article) {
    return (
      <main className="max-w-7xl mx-auto h-screen px-6 flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-bold">404 – Page Not Found</h1>
        <p className="mt-4 text-gray-600">
          The article you’re looking for doesn’t exist.
        </p>
      </main>
    );
  }

  // Get sorted news from all categories
  const allSortedNews = getSortedNews([
    prnewsData as NewsItem[],
    marketingData as NewsItem[],
    worldData as NewsItem[],
    usData as NewsItem[],
    financeData as NewsItem[],
    technologyData as NewsItem[],
    entertainmentData as NewsItem[],
  ]);

  // Filter out the current article to avoid duplicates
  const filteredNews = allSortedNews.filter((item) => item.slug !== slug);

  // Distribute news items
  const whatsHotItem = filteredNews[0] || article; // Fallback to current article if none else available
  const popularNews = filteredNews.slice(1, 5); // Next 4 items for "Popular News"
  const relatedNews = filteredNews.slice(5, 8); // Next 3 items for "Related News"

  return (
    <main>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsArticle",

            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://www.prpromotionhub.com/${article.category}/${article.slug}/`,
            },

            headline: article.title,
            description: article.shortdescription,

            image: {
              "@type": "ImageObject",
              url: article.image.startsWith("http")
                ? article.image
                : `https://www.prpromotionhub.com${article.image}`,
              width: 1200,
              height: 630,
            },

            author: {
              "@type": "Organization",
              name: "PR Promotion Hub",
              url: "https://www.prpromotionhub.com/",
            },

            publisher: {
              "@type": "Organization",
              name: "PR Promotion Hub",
              logo: {
                "@type": "ImageObject",
                url: "https://www.prpromotionhub.com/images/pr-logo.webp",
                width: 628,
                height: 116,
              },
            },

            datePublished: article.date,
            dateModified: article.date,
          }),
        }}
      />

      <WhatsHotBar data={whatsHotItem} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5 mb-10">
        <Article article={article} popularNews={popularNews} />

        <RelatedNewsSection data={relatedNews} article={article} />
      </div>
    </main>
  );
}

