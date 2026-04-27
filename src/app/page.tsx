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

const todayDate = new Intl.DateTimeFormat("en-CA", {
  timeZone: "America/New_York",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
}).format(new Date());


export default function Home() {
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
      <WhatsHotBar data={usData[7]} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FeaturedEditorialGrid data={[marketingData[2], financeData[4], usData[1],worldData[2]]} />

        {/* first data must be pr news */}
        <HeroSection data={[prnewsData[0], marketingData[1], financeData[5], worldData[1], techData[0], entertainmentData[0], usData[1], prnewsData[3], usData[2], techData[1], techData[2], prnewsData[4]]} />

        <EditorialGrid data={[marketingData[0], marketingData[3], marketingData[4], marketingData[5]]} />
        <div className="mx-auto mt-8">
          <CategorySectionHeader title="Trending Topics" />
          <SecondSection data={[worldData[0], prnewsData[2],worldData[4]]} />
        </div>
        <TravelSectionWithSubscribe data={[financeData[6], financeData[7], financeData[11], financeData[9]]} />

        <div className="mx-auto mt-8">
          <CategorySectionHeader title="Breaking News" />
          <SecondSection data={[worldData[9], usData[8], entertainmentData[8]]} />
        </div>
        <LatestNewsWithStickyPromo data={[financeData[10], marketingData[6], techData[7], worldData[6], worldData[7], usData[6], worldData[8], entertainmentData[6]]} />
      </div>
    </div>
  );
}
