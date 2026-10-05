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

  // Track every slug already shown in other homepage sections
  const usedSlugs = new Set(
    [
      posts[0],                   // WhatsHotBar
      ...posts.slice(1, 5),       // FeaturedEditorialGrid
      ...posts.slice(5, 17),      // HeroSection
      ...posts.slice(17, 21),     // EditorialGrid
      ...posts.slice(21, 24),     // Perspectives (SecondSection)
      ...posts.slice(24, 28),     // TravelSectionWithSubscribe
      ...posts.slice(28, 31),     // More to explore (SecondSection)
      ...posts.slice(31),         // LatestNews main feed
    ].map((p) => p.slug)
  );

  // Pick first 5 articles NOT already shown anywhere on the page
  const sidebarArticles = posts.filter((p) => !usedSlugs.has(p.slug)).slice(0, 5);

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
    <WhatsHotBar data={posts[0]} />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <FeaturedEditorialGrid data={posts.slice(1,5)} />
      <HeroSection data={posts.slice(5,17)} />
      <EditorialGrid data={posts.slice(17,21)} />
      <div className="mx-auto mt-8"><CategorySectionHeader title="Perspectives" /><SecondSection data={posts.slice(21,24)} /></div>
      <TravelSectionWithSubscribe data={posts.slice(24,28)} />
      <div className="mx-auto mt-8"><CategorySectionHeader title="More to explore" /><SecondSection data={posts.slice(28,31)} /></div>
      <LatestNewsWithStickyPromo data={posts.slice(31)} sidebarArticles={sidebarArticles} />
    </div>
  </main>;
}

