import WhatsHotBar from "../component/WhatsHotBar";
import FeaturedEditorialGrid from "../component/FeaturedEditorialGrid";
import HeroSection from "../component/HeroSection";
import EditorialGrid from "../component/EditorialGrid";
import SecondSection from "../component/SecondSection";
import TravelSectionWithSubscribe from "../component/TravelSectionWithSubscribe";
import LatestNewsWithStickyPromo from "../component/LatestNewsWithStickyPromo";
import prnewsData from '../../public/data/prnews.json';
import marketingData from '../../public/data/marketing.json';
import worldData from '../../public/data/world.json';
import usData from '../../public/data/us.json';
import financeData from '../../public/data/finance.json';
import techData from '../../public/data/technology.json';
import entertainmentData from '../../public/data/entertainment.json';
import CategorySectionHeader from "@/component/CategorySectionHeader";
import Script from "next/script";
import { getSortedNews, Article } from "@/utils/newsUtils";

export default function Home() {
  const allNews = getSortedNews([
    prnewsData as Article[],
    marketingData as Article[],
    worldData as Article[],
    usData as Article[],
    financeData as Article[],
    techData as Article[],
    entertainmentData as Article[]
  ]);

  // Distribute news articles
  const whatsHotArticle = allNews[0];
  const featuredNews = allNews.slice(1, 5);
  const heroNews = allNews.slice(5, 17);
  const editorialNews = allNews.slice(17, 21);
  const trendingNews = allNews.slice(21, 24);
  const travelNews = allNews.slice(24, 28);
  const breakingNews = allNews.slice(28, 31);
  const latestNews = allNews.slice(31, 39);

  return (
    <div>
      <Script
        id="structured-data-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": "https://www.prpromotionhub.com/#organization",
                "name": "PR Promotion Hub",
                "url": "https://www.prpromotionhub.com",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://www.prpromotionhub.com/images/pr-logo.webp"
                },
                "sameAs": [
                  "https://www.facebook.com/",
                  "https://www.instagram.com/",
                  "https://www.twitter.com/"
                ]
              },
              {
                "@type": "WebSite",
                "@id": "https://www.prpromotionhub.com/#website",
                "url": "https://www.prpromotionhub.com",
                "name": "PR Promotion Hub",
                "publisher": {
                  "@id": "https://www.prpromotionhub.com/#organization"
                },
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": "https://www.prpromotionhub.com/search?q={search_term_string}",
                  "query-input": "required name=search_term_string"
                }
              }
            ]
          })
        }}
      />
      <Script
        id="structured-data-navigation"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": [
              {
                "@type": "SiteNavigationElement",
                "position": 1,
                "name": "PR News",
                "url": "https://www.prpromotionhub.com/prnews/"
              },
              {
                "@type": "SiteNavigationElement",
                "position": 2,
                "name": "World",
                "url": "https://www.prpromotionhub.com/world/"
              },
              {
                "@type": "SiteNavigationElement",
                "position": 3,
                "name": "US",
                "url": "https://www.prpromotionhub.com/us/"
              },
              {
                "@type": "SiteNavigationElement",
                "position": 4,
                "name": "Finance",
                "url": "https://www.prpromotionhub.com/finance/"
              },
              {
                "@type": "SiteNavigationElement",
                "position": 5,
                "name": "Entertainment",
                "url": "https://www.prpromotionhub.com/entertainment/"
              },
              {
                "@type": "SiteNavigationElement",
                "position": 6,
                "name": "Marketing",
                "url": "https://www.prpromotionhub.com/marketing/"
              },
              {
                "@type": "SiteNavigationElement",
                "position": 7,
                "name": "Technology",
                "url": "https://www.prpromotionhub.com/technology/"
              }
            ]
          })
        }}
      />
      <WhatsHotBar data={whatsHotArticle} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FeaturedEditorialGrid data={featuredNews} />

        <HeroSection data={heroNews} />

        <EditorialGrid data={editorialNews} />
        <div className="mx-auto mt-8">
          <CategorySectionHeader title="Trending Topics" />
          <SecondSection data={trendingNews} />
        </div>
        <TravelSectionWithSubscribe data={travelNews} />

        <div className="mx-auto mt-8">
          <CategorySectionHeader title="Breaking News" />
          <SecondSection data={breakingNews} />
        </div>
        <LatestNewsWithStickyPromo data={latestNews} />
      </div>
    </div>
  );
}

