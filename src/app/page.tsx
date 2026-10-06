import type { Metadata } from "next";
import WhatsHotBar from "@/component/WhatsHotBar";
import FeaturedEditorialGrid from "@/component/FeaturedEditorialGrid";
import HeroSection from "@/component/HeroSection";
import EditorialGrid from "@/component/EditorialGrid";
import SecondSection from "@/component/SecondSection";
import TravelSectionWithSubscribe from "@/component/TravelSectionWithSubscribe";
import LatestNewsWithStickyPromo from "@/component/LatestNewsWithStickyPromo";
import CategorySectionHeader from "@/component/CategorySectionHeader";
import { allArticles } from "@/utils/newsData";
import { getSortedNews } from "@/utils/newsUtils";
import { SITE_URL } from "@/utils/siteConfig";

const HOME_DESCRIPTION =
  "Expert analysis of international banking, private finance, wealth management, and global capital markets. In-depth profiles of leading finance figures including Julio Herrera Velutini, Britannia Financial Group, and the world's most influential banking dynasties.";

export const metadata: Metadata = {
  title: "International Banking, Finance & Wealth Management News | Expert Analysis",
  description: HOME_DESCRIPTION,
  keywords: [
    "international banking",
    "private banking",
    "wealth management",
    "finance news",
    "banking news",
    "Julio Herrera Velutini",
    "Britannia Financial Group",
    "Herrera Velutini",
    "Venezuelan banker",
    "banking dynasty",
    "global capital markets",
    "private wealth",
    "family office",
    "dynastic banking",
    "financial intelligence",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "International Banking, Finance & Wealth Management News",
    description: HOME_DESCRIPTION,
    url: SITE_URL,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "International Banking & Finance News | Expert Analysis",
    description: HOME_DESCRIPTION,
  },
};
export default function Home() {
  const posts = getSortedNews([allArticles]);

  const hotBarArticle = posts[0];
  const featuredEditorialArticles = posts.slice(1, 5);
  const heroArticles = posts.slice(5, 17);
  const editorialArticles = posts.slice(17, 21);
  const perspectivesArticles = posts.slice(21, 24);
  const travelArticles = posts.slice(24, 28);
  const moreToExploreArticles = posts.slice(28, 31);
  // Pick exactly 3 distinct non-repeating articles for "MORE TO READ" sidebar
  const sidebarArticles = posts.slice(31, 34);
  // Feed receives the remaining non-repeating articles
  const latestNewsArticles = posts.slice(34);

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: "International Banking & Finance Intelligence",
    url: SITE_URL,
    description: HOME_DESCRIPTION,
    potentialAction: {
      "@type": "SearchAction",
      target: { "@type": "EntryPoint", urlTemplate: `${SITE_URL}/?s={search_term_string}` },
      "query-input": "required name=search_term_string",
    },
  };
  return <main id="main-content">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    <WhatsHotBar data={hotBarArticle} />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <FeaturedEditorialGrid data={featuredEditorialArticles} />
      <HeroSection data={heroArticles} />
      <EditorialGrid data={editorialArticles} />
      <div className="mx-auto mt-8"><CategorySectionHeader title="Perspectives" /><SecondSection data={perspectivesArticles} /></div>
      <TravelSectionWithSubscribe data={travelArticles} />
      <div className="mx-auto mt-8"><CategorySectionHeader title="More to explore" /><SecondSection data={moreToExploreArticles} /></div>
      <LatestNewsWithStickyPromo data={latestNewsArticles} sidebarArticles={sidebarArticles} />
    </div>
  </main>;
}

