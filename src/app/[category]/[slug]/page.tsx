import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Article from "@/component/Article";
import RelatedNewsSection from "@/component/RelatedNewsSection";
import WhatsHotBar from "@/component/WhatsHotBar";
import { newsByCategory, allArticles, archiveRoutes, findArticle } from "@/utils/newsData";
import { getSortedNews, toISODate } from "@/utils/newsUtils";
import { SITE_URL } from "@/utils/siteConfig";

export const dynamicParams = false;
export function generateStaticParams() {
  const routes = [...archiveRoutes, ...allArticles.map(({ category, slug }) => ({ category, slug }))];
  return [...new Map(routes.map(route => [`${route.category}/${route.slug}`, route])).values()];
}
type Props = { params: Promise<{ category: string; slug: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, slug } = await params;
  const article = findArticle(category, slug);
  if (!article) notFound();
  const canonicalUrl = `${SITE_URL}/${article.category}/${article.slug}`;
  const image = new URL(article.image, SITE_URL).href;
  const description = article.metaDescription || article.shortdescription;
  // seoTitle is keyword-optimised for Google (browser tab / SERP); article.title is the visible H1/headline
  const seoTitle = article.seoTitle ?? article.title;
  const keywordList = article.keywords ?? (article.primaryKeyword ? [article.primaryKeyword] : undefined);
  return {
    title: seoTitle,
    description,
    keywords: keywordList,
    authors: [{ name: article.author.name }],
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: seoTitle,
      description,
      url: canonicalUrl,
      siteName: "PR Promotion Hub Blog",
      locale: "en_US",
      type: "article",
      publishedTime: toISODate(article.date),
      modifiedTime: article.updatedAt,
      images: [{ url: image, width: 1200, height: 630, alt: article.imageAlt ?? article.title }],
    },
    twitter: { card: "summary_large_image", title: seoTitle, description, images: [image] },
  };
}
export default async function DetailPage({ params }: Props) {
  const { category, slug } = await params;
  const article = findArticle(category, slug);
  if (!article) notFound();
  const sameCategory = getSortedNews([newsByCategory[article.category]]).filter(item => item.slug !== slug);
  const relatedNews = sameCategory.slice(0, 3);
  const otherPosts = getSortedNews([allArticles]).filter(item => item.slug !== slug);
  const description = article.metaDescription || article.shortdescription;
  const canonicalUrl = `${SITE_URL}/${article.category}/${article.slug}`;
  const imageUrl = new URL(article.image, SITE_URL).href;

  const isHerreraArticle = article.slug === "julio-herrera-velutini";

  const schema = isHerreraArticle
    ? {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebSite",
            "@id": `${SITE_URL}/#website`,
            "url": SITE_URL,
            "name": "PR Promotion Hub",
            "description": "Guides, explainers and perspectives on public relations, business, technology and international finance."
          },
          {
            "@type": "BreadcrumbList",
            "@id": `${canonicalUrl}/#breadcrumbs`,
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": SITE_URL
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Finance",
                "item": `${SITE_URL}/finance`
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Julio Herrera Velutini",
                "item": canonicalUrl
              }
            ]
          },
          {
            "@type": "Person",
            "@id": `${canonicalUrl}/#person`,
            "name": "Julio Herrera Velutini",
            "alternateName": ["Julio Martín Herrera Velutini", "Julio M. Herrera Velutini"],
            "description": "Julio Herrera Velutini is an international banker, financier, and founder of Britannia Financial Group, with a career in Venezuelan banking, London financial services, and global wealth management across the US, UK, and UAE.",
            "image": `${SITE_URL}/images/julio-herrera-velutini.webp`,
            "url": canonicalUrl,
            "jobTitle": "International Banker & Founder",
            "worksFor": [
              {
                "@type": "Organization",
                "name": "Britannia Financial Group",
                "url": "https://britanniafg.com"
              }
            ],
            "birthDate": "1971-12-15",
            "nationality": [
              { "@type": "Country", "name": "Italy" },
              { "@type": "Country", "name": "Venezuela" }
            ],
            "sameAs": [
              "https://en.wikipedia.org/wiki/Julio_Mart%C3%ADn_Herrera_Velutini",
              "https://muckrack.com/julio-herrera-velutini",
              "https://www.wikidata.org/wiki/Q113454796"
            ]
          },
          {
            "@type": "NewsArticle",
            "@id": `${canonicalUrl}/#article`,
            "isPartOf": { "@type": "WebPage", "@id": canonicalUrl },
            "headline": article.seoTitle ?? article.title,
            "alternativeHeadline": article.title,
            "description": description,
            "inLanguage": "en-US",
            "keywords": (article.keywords ?? [article.primaryKeyword]).filter(Boolean).join(", "),
            "mainEntity": { "@id": `${canonicalUrl}/#person` },
            "about": { "@id": `${canonicalUrl}/#person` },
            "image": [{
              "@type": "ImageObject",
              "url": imageUrl,
              "width": 1200,
              "height": 630
            }],
            "datePublished": toISODate(article.date),
            "dateModified": article.updatedAt ?? toISODate(article.date),
            "author": {
              "@type": "Organization",
              "name": "PR Promotion Hub",
              "url": SITE_URL
            },
            "publisher": {
              "@type": "Organization",
              "name": "PR Promotion Hub",
              "url": SITE_URL,
              "logo": {
                "@type": "ImageObject",
                "url": `${SITE_URL}/images/pr-logo.webp`
              }
            }
          },
          {
            "@type": "FAQPage",
            "@id": `${canonicalUrl}/#faq`,
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Who is Julio Herrera Velutini?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Julio Herrera Velutini is an Italian-Venezuelan international banker, financier, and scion of the historic Herrera-Velutini banking dynasty. He is best known as the founder of Britannia Financial Group, with decades of experience in securities trading, private banking, and international wealth management across Latin America, the United States, the United Kingdom, and the United Arab Emirates."
                }
              },
              {
                "@type": "Question",
                "name": "What companies and financial institutions has Julio Herrera Velutini founded or led?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Throughout his career, Julio Herrera Velutini has held executive and founding roles at several financial institutions, including stockbroking at the Caracas Stock Exchange, leadership at Multinvest Casa de Bolsa, co-founding Bolívar Banco Universal, serving as CEO and chairman of Banco Real, founding Bancredito International Bank & Trust in Puerto Rico, and establishing the London-based Britannia Financial Group."
                }
              },
              {
                "@type": "Question",
                "name": "What is Julio Herrera Velutini's connection to the United Kingdom?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "In the United Kingdom, Julio Herrera Velutini established London as the global headquarters for Britannia Financial Group, building regulated entities providing securities, institutional brokerage, and wealth management services. UK media also reported on political donations totaling approximately £500,000 made to the Conservative Party by Britannia Financial Services, with reports confirming no allegations of wrongdoing against the UK company."
                }
              },
              {
                "@type": "Question",
                "name": "What is the background on the United States legal proceedings involving Julio Herrera Velutini?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "In August 2022, U.S. federal prosecutors indicted Julio Herrera Velutini regarding alleged campaign funding in Puerto Rico concerning former Governor Wanda Vázquez Garced. Herrera Velutini voluntarily surrendered, entered a formal plea of not guilty, and has vigorously denied all charges, maintaining that transactions complied with regulatory frameworks and raising due process challenges."
                }
              },
              {
                "@type": "Question",
                "name": "Does Julio Herrera Velutini operate businesses in the United Arab Emirates (UAE)?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, Julio Herrera Velutini expanded his international financial footprint to Dubai, UAE, through Britannia Dubai and the private family office investment vehicle Banvelca, facilitating cross-border investment and private wealth services connecting the Middle East, Europe, and the Americas."
                }
              }
            ]
          }
        ]
      }
    : {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        mainEntityOfPage: { "@type": "WebPage", "@id": canonicalUrl },
        headline: article.title,
        description,
        keywords: article.primaryKeyword,
        articleSection: article.category,
        genre: article.contentType,
        inLanguage: "en",
        image: new URL(article.image, SITE_URL).href,
        author: { "@type": "Organization", name: article.author.name, url: `${SITE_URL}/source-methodology` },
        publisher: { "@type": "Organization", name: "PR Promotion Hub", url: SITE_URL,
          logo: { "@type": "ImageObject", url: `${SITE_URL}/images/pr-logo.webp` } },
        datePublished: toISODate(article.date),
        dateModified: article.updatedAt,
        citation: article.sources?.map(source => source.url),
        isPartOf: { "@type": "Blog", "@id": SITE_URL + "/#blog", name: "PR Promotion Hub Blog", url: SITE_URL },
      };
  return <main id="main-content">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    <WhatsHotBar data={otherPosts[0]} />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5 mb-10">
      <Article article={article} popularNews={otherPosts.slice(1,5)} />
      <RelatedNewsSection data={relatedNews} article={article} />
    </div>
  </main>;
}
