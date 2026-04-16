import prnewsData from '../../../public/data/prnews.json';
import worldData from '../../../public/data/world.json';
import usData from '../../../public/data/us.json';
import marketingData from '../../../public/data/marketing.json';
import financeData from '../../../public/data/finance.json';
import technologyData from '../../../public/data/technology.json';
import entertainmentData from '../../../public/data/entertainment.json';
import LatestNewsWithStickyPromo from '../../component/LatestNewsWithStickyPromo'
import CategoryHeader from '@/component/CategoryHeader';
import WhatsHotBar from '@/component/WhatsHotBar';
import CategoryContent from '@/component/CategoryContent';
import { Metadata } from 'next';

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
  date: string;
  author: Author;
}

const allData: Record<string, NewsItem[]> = {
  prnews: prnewsData,
  world: worldData,
  us: usData,
  finance: financeData,
  marketing: marketingData,
  technology: technologyData,
  entertainment: entertainmentData
};

export async function generateStaticParams() {
  return Object.keys(allData).map((category) => ({
    category,
  }));

}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;

const categoryMeta: Record<string, { title: string; description: string }> = {
  prnews: {
    title: "Latest PR News, Press Releases & Brand Announcements (2026)",
    description:
      "Read the latest PR news, press releases, brand announcements, and media coverage. Stay updated with real-time public relations trends and business PR strategies.",
  },
  world: {
    title: "Breaking World News Today | Global Politics & International Updates",
    description:
      "Get breaking world news today, global politics, international conflicts, economic developments, and major global events updated in real time.",
  },
  us: {
    title: "US News Today: Breaking America News, Politics & Economy Updates",
    description:
      "Stay updated with US breaking news, politics, economy, business, and national developments across America with real-time updates.",
  },
  finance: {
    title: "Finance News Today: Stock Market, Economy & Investment Updates",
    description:
      "Latest finance news, stock market trends, crypto updates, economy insights, startups, and investment strategies from around the world.",
  },
  entertainment: {
    title: "Entertainment News Today: Celebrities, Movies, OTT & Music Updates",
    description:
      "Catch the latest entertainment news, celebrity gossip, movie releases, OTT updates, music trends, and media industry insights.",
  },
  marketing: {
    title: "Digital Marketing News & SEO Trends (2026) | Branding Insights",
    description:
      "Explore digital marketing news, SEO trends, branding strategies, social media growth tips, and online business insights for 2026.",
  },
  technology: {
    title: "Technology News Today: AI, Startups, Gadgets & Innovation Updates",
    description:
      "Latest technology news including AI, startups, gadgets, software updates, and innovations shaping the future of the digital world.",
  },
};

  const siteUrl = "https://www.prpromotionhub.com";
  const categoryUrl = `${siteUrl}/${category}`;

  const meta = categoryMeta[category] || {
    title: `${category.charAt(0).toUpperCase() + category.slice(1)} News – PR Promotion Hub`,
    description: `Latest ${category} news, updates, and insights from PR Promotion Hub.`,
  };

  const firstArticle = allData?.[category]?.[0];

  const firstArticleImage =
    firstArticle?.image?.startsWith("http")
      ? firstArticle.image
      : `${siteUrl}${firstArticle?.image || "/images/pr-logo.webp"}`;

  if (!firstArticle) {
    return {
      title: "Category Not Found – PR Promotion Hub",
      description: "The requested category could not be found.",
      robots: { index: false, follow: false },
    };
  }
const todayDate = new Intl.DateTimeFormat("en-CA", {
  timeZone: "America/New_York",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
}).format(new Date());


return {
  title: meta.title,
  description: meta.description,

  alternates: {
    canonical: categoryUrl,
  },

  openGraph: {
    type: "article", 
    title: meta.title,
    description: meta.description,
    url: categoryUrl,
    siteName: "PR Promotion Hub",
    locale: "en_US",
    publishedTime: todayDate, 
    modifiedTime: todayDate, 

    images: [
      {
        url: firstArticleImage,
        width: 1200,
        height: 630,
        alt: `${category} news – PR Promotion Hub`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: meta.title,
    description: meta.description,
    images: [firstArticleImage],
    site: "@prpromotionhub",
  },
};

}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  const data = allData[category];
const filteredData = category === "finance" ? data.slice(3) : data;
  if (!data) {
    return (
      <main className="max-w-7xl mx-auto h-screen px-6 flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-bold">
          404 – Page Not Found
        </h1>
        <p className="mt-4 text-gray-600">
          The category you’re looking for doesn’t exist.
        </p>
      </main>
    );
  }

  return (
    <>
      <WhatsHotBar data={data[0]} />
      <CategoryHeader category={data[0].category} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <CategoryContent data={filteredData} />
      </div>
    </>
  );
}