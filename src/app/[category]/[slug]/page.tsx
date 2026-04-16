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
import JulioPage from "@/component/JulioPage";
import JulioContentTwo from "@/component/JulioContentTwo";
import JulioContentThree from "@/component/JulioContentThree";
import JulioContentFour from "@/component/JulioContentFour";
import WandaPage from "@/component/WandaPage";

export async function generateStaticParams() {
  const allData = [
    { category: "prnews", articles: prnewsData },
    { category: "marketing", articles: marketingData },
    { category: "world", articles: worldData },
    { category: "us", articles: usData },
    { category: "finance", articles: financeData },
    { category: "technology", articles: technologyData },
    { category: "entertainment", articles: entertainmentData },
  ];

  const params = allData.flatMap(({ category, articles }) =>
    articles.map((article) => ({
      category,
      slug: article.slug,
    })),
  );

  return params;
}

interface Author {
  name: string;
  role: string;
  bio: string;
  image: string;
  email: string;
  twitter: string;
  facebook: string;
  instagram: string;
  substack?: string;
  medium?: string;
}

interface NewsItem {
  category: string;
  title: string;
  shortdescription: string;
  description: string;
  image: string;
  slug: string;
  author: Author;
  date: string;
}

interface DetailPageProps {
  params: Promise<{ category: string; slug: string }>;
}

const allData: Record<string, NewsItem[]> = {
  prnews: prnewsData,
  marketing: marketingData,
  world: worldData,
  us: usData,
  finance: financeData,
  technology: technologyData,
  entertainment: entertainmentData,
};

const slugMetadataMap: Record<string, Partial<Metadata>> = {
  "reputation-global-finance-leadership-trust": {
    title:
      "Reputation in Global Finance: Why Trust & Perception Matter in 2026",
    description:
      "Explore how reputation, trust, and perception influence global finance, leadership decisions, and financial success in today’s economy.",
  },

  "julio-herrera-velutini-us-financial-spotlight": {
    title:
      "Julio Herrera Velutini in US Finance: Banking Influence & Insights",
    description:
      "Learn about Julio Herrera Velutini’s role in the US financial sector, including banking influence, compliance expertise, and leadership in modern finance.",
  },

  "julio-herrera-velutini-uk-financial-lens": {
    title:
      "Julio Herrera Velutini UK: London Finance & Private Wealth Strategy",
    description:
      "Discover Julio Herrera Velutini’s impact on UK finance, London wealth management, and private banking strategies shaping modern markets.",
  },

  "who-is-julio-martin-herrera-velutini": {
    title:
      "Who is Julio Martín Herrera Velutini? Biography, Net Worth & Career",
    description:
      "Full biography of Julio Martín Herrera Velutini, international banker, his career, business ventures, and influence in global finance.",
  },
};

export async function generateMetadata({
  params,
}: DetailPageProps): Promise<Metadata> {
  const { category, slug } = await params;

  const allDataMap: Record<string, NewsItem[]> = {
    prnews: prnewsData,
    world: worldData,
    us: usData,
    finance: financeData,
    entertainment: entertainmentData,
    marketing: marketingData,
    technology: technologyData,
  };

  const articles = allDataMap[category] || [];
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

  if (!data) {
    return (
      <main className="max-w-7xl mx-auto h-screen px-6 flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-bold">404 – Page Not Found</h1>
        <p className="mt-4 text-gray-600">
          The article you’re looking for doesn’t exist.
        </p>
      </main>
    );
  }

  const article = data.find((item) => item.slug === slug);
  if (!article) {
    return (
      <main className="max-w-7xl mx-auto h-screen px-6 flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-bold">404 – Page Not Found</h1>
        <p className="mt-4 text-gray-600">
          The article you’re looking for doesn’t exist.
        </p>
      </main>
    );
  } else if (slug == "reputation-global-finance-leadership-trust") {
    return <JulioPage />;
  } else if (slug == "julio-herrera-velutini-us-financial-spotlight") {
    return <JulioContentTwo />;
  } else if (slug == "julio-herrera-velutini-uk-financial-lens") {
    return <JulioContentThree />;
  } else if (slug == "who-is-julio-martin-herrera-velutini") {
    return <JulioContentFour />;
  } else if (slug == "white-house-defends-wanda-vazquez-pardon") {
    return <WandaPage />;
  }

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

      <WhatsHotBar data={prnewsData[0]} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5 mb-10">
        <Article article={article} />

        <RelatedNewsSection data={[prnewsData[0]]} article={article} />
      </div>
    </main>
  );
}
