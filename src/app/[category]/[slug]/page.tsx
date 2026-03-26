  import prnewsData from '../../../../public/data/prnews.json';
  import worldData from '../../../../public/data/world.json';
  import usData from '../../../../public/data/us.json';
  import marketingData from '../../../../public/data/marketing.json';
  import financeData from '../../../../public/data/finance.json';
  import technologyData from '../../../../public/data/technology.json';
  import entertainmentData from '../../../../public/data/entertainment.json';
  import Script from "next/script";
  import { Metadata } from 'next';
  import WhatsHotBar from '@/component/WhatsHotBar';
  import Article from '@/component/Article';
  import RelatedNewsSection from '@/component/RelatedNewsSection';
  import JulioPage from '@/component/JulioPage';
  import JulioContentTwo from '@/component/JulioContentTwo';
  import JulioContentThree from '@/component/JulioContentThree';
  import JulioContentFour from '@/component/JulioContentFour';
  import WandaPage from '@/component/WandaPage';

  export async function generateStaticParams() {
    const allData = [
      { category: 'prnews', articles: prnewsData },
      { category: 'marketing', articles: marketingData },
      { category: 'world', articles: worldData },
      { category: 'us', articles: usData },
      { category: 'finance', articles: financeData },
      { category: 'technology', articles: technologyData },
      { category: 'entertainment', articles: entertainmentData }

    ];


    const params = allData.flatMap(({ category, articles }) =>
      articles.map((article) => ({
        category,
        slug: article.slug,
      }))
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
    params: Promise<{ category: string, slug: string }>;
  }

  const allData: Record<string, NewsItem[]> = {
    prnews: prnewsData,
    marketing: marketingData,
    world: worldData,
    us: usData,
    finance: financeData,
    technology: technologyData,
    entertainment: entertainmentData
  };

  const slugMetadataMap: Record<string, Partial<Metadata>> = {
    "julio-herrera-velutini-banking-legacy-global-finance-influence": {
      title: "Julio Herrera Velutini | International Banking & Global Finance Legacy",
      description:
        "Explore the profound impact of Julio Herrera Velutini on global finance, private banking, and wealth management. Learn about his storied financial dynasty."
    },

    "julio-herrera-velutini-us-financial-spotlight": {
      title: "Julio Herrera Velutini: U.S. Banking & Financial Spotlight",
      description:
        "Discover Julio Herrera Velutini's influence in the U.S. financial sector, his expertise in regulatory compliance, and his contributions to modern banking standards."
    },

    "julio-herrera-velutini-uk-financial-lens": {
      title: "Julio Herrera Velutini in the UK | London Finance & Private Wealth",
      description:
        "Learn how Julio Herrera Velutini, a seventh-generation banker, is shaping the UK's financial landscape with his London-based wealth management expertise."
    },

    "who-is-julio-martin-herrera-velutini": {
      title: "Who is Julio Martín Herrera Velutini? | Biography & Career",
      description:
        "Read the biography of Julio Martín Herrera Velutini, the Venezuelan-Italian international banker and founder of Britannia Financial Group."
    },
  };


  export async function generateMetadata(
    { params }: DetailPageProps
  ): Promise<Metadata> {
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

    const imageUrl =
      article?.image?.startsWith("http")
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
      description:
        slugOverride.description ?? article.shortdescription,

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
          <h1 className="text-3xl font-bold">
            404 – Page Not Found
          </h1>
          <p className="mt-4 text-gray-600">
            The article you’re looking for doesn’t exist.
          </p>
        </main>

      );
    }


    const article = data.find(item => item.slug === slug);
    if (!article) {
      return (
        <main className="max-w-7xl mx-auto h-screen px-6 flex flex-col items-center justify-center text-center">
          <h1 className="text-3xl font-bold">
            404 – Page Not Found
          </h1>
          <p className="mt-4 text-gray-600">
            The article you’re looking for doesn’t exist.
          </p>
        </main>

      );
    }
   
    else if (slug == 'julio-herrera-velutini-banking-legacy-global-finance-influence'){
      return (
      <JulioPage />

      )
    } 
    else if (slug == 'julio-herrera-velutini-us-financial-spotlight') {
      return (
        <JulioContentTwo />
      )
    }
    else if (slug == 'julio-herrera-velutini-uk-financial-lens') {
      return (
        <JulioContentThree />
      )
    }
    else if (slug == 'who-is-julio-martin-herrera-velutini') {
      return (
        <JulioContentFour />
      )
    }
    else if (slug == 'white-house-defends-wanda-vazquez-pardon') {
      return (
        <WandaPage />
      )
    }


    return (
      <main>
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NewsArticle",

              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": `https://www.prpromotionhub.com/${article.category}/${article.slug}/`
              },

              "headline": article.title,
              "description": article.shortdescription,

              "image": {
                "@type": "ImageObject",
                "url": article.image.startsWith("http")
                  ? article.image
                  : `https://www.prpromotionhub.com${article.image}`,
                "width": 1200,
                "height": 630 
              },

              "author": {
                "@type": "Organization",
                "name": "PR Promotion Hub",
                "url": "https://www.prpromotionhub.com/"
              },

              "publisher": {
                "@type": "Organization",
                "name": "PR Promotion Hub",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://www.prpromotionhub.com/images/pr-logo.webp",
                  "width": 628,
                  "height": 116
                }
              },

              "datePublished": article.date,
              "dateModified": article.date
            })
          }}
        />
       
        <WhatsHotBar data={prnewsData[0]} />
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5 mb-10'>
          <Article article={article} />

          <RelatedNewsSection data={[prnewsData[0]]} article={article} />

        </div>
      </main>
    );
  }