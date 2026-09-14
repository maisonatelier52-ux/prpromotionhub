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
import { SITE_URL, SITE_DESCRIPTION } from "@/utils/siteConfig";

export const metadata: Metadata = { alternates: { canonical: "/" } };
export default function Home() {
  const posts = getSortedNews([allArticles]);
  const schema = { "@context": "https://schema.org", "@type": "Blog", "@id": `${SITE_URL}/#blog`, name: "PR Promotion Hub Blog", url: SITE_URL, description: SITE_DESCRIPTION };
  return <main id="main-content">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    <WhatsHotBar data={posts[0]} />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <FeaturedEditorialGrid data={posts.slice(1,5)} />
      <HeroSection data={posts.slice(5,17)} />
      <EditorialGrid data={posts.slice(17,21)} />
      <div className="mx-auto mt-8"><CategorySectionHeader title="Perspectives" /><SecondSection data={posts.slice(21,24)} /></div>
      <TravelSectionWithSubscribe data={posts.slice(24,28)} />
      <div className="mx-auto mt-8"><CategorySectionHeader title="More to explore" /><SecondSection data={posts.slice(28,31)} /></div>
      <LatestNewsWithStickyPromo data={posts.slice(31)} />
    </div>
  </main>;
}
