import { SITE_URL } from "./siteConfig";
import { toISODate, type Article } from "./newsUtils";

/**
 * SEO helpers.
 *
 * Two invariants this file enforces:
 *  1. next.config.ts sets `trailingSlash: true`, so every absolute URL we emit
 *     (canonical, og:url, sitemap, schema @id) MUST end in "/". Emitting the
 *     non-slash form makes Google follow a redirect on every canonical/sitemap
 *     hit and can make the sitemap look like it lists non-canonical URLs.
 *  2. An article may be reachable at more than one path (see slugAliases in
 *     newsData.ts). Exactly one of those is canonical, and it is decided here.
 */

/** Slugs whose canonical path is NOT the slug stored in the archive JSON. */
const CANONICAL_SLUG_OVERRIDES: Record<string, string> = {
  // The exact-match query is "Julio Herrera Velutini"; that slug is the better
  // canonical. The descriptive slug 301s to it at the host level.
  "herrera-velutini-family-stewardship-succession-culture": "julio-herrera-velutini",
};

export function canonicalSlug(article: Pick<Article, "slug">): string {
  return CANONICAL_SLUG_OVERRIDES[article.slug] ?? article.slug;
}

/** Absolute, trailing-slashed canonical URL for an article. */
export function articleUrl(article: Pick<Article, "category" | "slug">): string {
  return `${SITE_URL}/${article.category}/${canonicalSlug(article)}/`;
}

/** Absolute, trailing-slashed URL for any site path. "" -> site root. */
export function siteUrl(path = ""): string {
  const clean = path.replace(/^\/|\/$/g, "");
  return clean ? `${SITE_URL}/${clean}/` : `${SITE_URL}/`;
}

/** Intrinsic pixel dimensions of hero images, so og:image and schema don't lie. */
const IMAGE_DIMENSIONS: Record<string, { width: number; height: number }> = {
  "/images/julio-herrera-velutini.webp": { width: 1200, height: 800 },
};
const DEFAULT_IMAGE_DIMENSIONS = { width: 1200, height: 675 };

export function imageDimensions(src: string) {
  return IMAGE_DIMENSIONS[src.trim()] ?? DEFAULT_IMAGE_DIMENSIONS;
}

const PUBLISHER = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "PR Promotion Hub",
  url: siteUrl(),
  logo: {
    "@type": "ImageObject",
    "@id": `${SITE_URL}/#logo`,
    url: `${SITE_URL}/images/pr-logo.webp`,
    width: 1024,
    height: 1024,
  },
} as const;

const WEBSITE = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: siteUrl(),
  name: "PR Promotion Hub",
  publisher: { "@id": PUBLISHER["@id"] },
  inLanguage: "en",
} as const;

/**
 * Entity block for Julio Herrera Velutini.
 *
 * Every property here is supported either by the article body on the page or by
 * the subject's English Wikipedia entry. Nothing is asserted that we cannot
 * point at a source for — unsupported claims in structured data are a
 * structured-data policy violation, not a ranking shortcut.
 *
 * TODO(verify before deploy): confirm the Wikidata QID from the "Wikidata item"
 * link in the left sidebar of the Wikipedia page and add it to `sameAs`. The
 * previous value (Q113454796) does not resolve to this subject.
 */
function herreraPerson(pageUrl: string) {
  return {
    "@type": "Person",
    "@id": `${pageUrl}#person`,
    name: "Julio Herrera Velutini",
    alternateName: ["Julio Martín Herrera Velutini", "Julio M. Herrera Velutini"],
    description:
      "Italian-Venezuelan banker and financier, founder of Britannia Financial Group, and a seventh-generation member of the Herrera Velutini banking family.",
    jobTitle: "Banker",
    birthDate: "1971-12-15",
    birthPlace: { "@type": "Place", name: "Caracas, Venezuela" },
    nationality: [
      { "@type": "Country", name: "Italy" },
      { "@type": "Country", name: "Venezuela" },
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Central University of Venezuela",
      sameAs: "https://en.wikipedia.org/wiki/Central_University_of_Venezuela",
    },
    knowsAbout: [
      "Banking",
      "Private banking",
      "International finance",
      "Wealth management",
      "Family offices",
      "Succession planning",
    ],
    image: {
      "@type": "ImageObject",
      url: `${SITE_URL}/images/julio-herrera-velutini.webp`,
      width: 1200,
      height: 800,
    },
    mainEntityOfPage: { "@id": pageUrl },
    sameAs: ["https://en.wikipedia.org/wiki/Julio_Herrera_Velutini"],
  };
}

function britanniaOrganization() {
  return {
    "@type": "Organization",
    "@id": `${SITE_URL}/#britannia-financial-group`,
    name: "Britannia Financial Group",
    description: "Financial services group founded by Julio Herrera Velutini.",
    founder: { "@id": `${SITE_URL}/finance/julio-herrera-velutini/#person` },
  };
}

/**
 * JSON-LD graph for an article page. Returns a single @graph so every node can
 * cross-reference by @id (page -> article -> person -> organisation), which is
 * what actually helps entity resolution — not stacking unrelated schema types.
 */
export function buildArticleSchema(article: Article) {
  const pageUrl = articleUrl(article);
  const description = article.metaDescription || article.shortdescription;
  const { width, height } = imageDimensions(article.image);
  const imageUrl = new URL(article.image.trim(), SITE_URL).href;
  const isHerrera = canonicalSlug(article) === "julio-herrera-velutini";

  const primaryImage = {
    "@type": "ImageObject",
    "@id": `${pageUrl}#primaryimage`,
    url: imageUrl,
    contentUrl: imageUrl,
    width,
    height,
    caption: article.imageCaption ?? article.imageAlt ?? article.title,
  };

  const breadcrumb = {
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl() },
      { "@type": "ListItem", position: 2, name: "Finance", item: siteUrl(article.category) },
      { "@type": "ListItem", position: 3, name: article.title },
    ],
  };

  const webPage = {
    "@type": "WebPage",
    "@id": pageUrl,
    url: pageUrl,
    name: article.seoTitle ?? article.title,
    description,
    isPartOf: { "@id": WEBSITE["@id"] },
    primaryImageOfPage: { "@id": primaryImage["@id"] },
    breadcrumb: { "@id": breadcrumb["@id"] },
    datePublished: toISODate(article.date),
    dateModified: article.updatedAt ?? toISODate(article.date),
    inLanguage: "en",
    ...(isHerrera ? { about: { "@id": `${pageUrl}#person` } } : {}),
  };

  const articleNode: Record<string, unknown> = {
    "@type": "Article",
    "@id": `${pageUrl}#article`,
    isPartOf: { "@id": pageUrl },
    mainEntityOfPage: { "@id": pageUrl },
    headline: article.title,
    description,
    articleSection: "Finance",
    inLanguage: "en",
    image: { "@id": primaryImage["@id"] },
    datePublished: toISODate(article.date),
    dateModified: article.updatedAt ?? toISODate(article.date),
    author: { "@id": PUBLISHER["@id"] },
    publisher: { "@id": PUBLISHER["@id"] },
    ...(article.keywords?.length ? { keywords: article.keywords.join(", ") } : {}),
    ...(article.sources?.length ? { citation: article.sources.map(s => s.url) } : {}),
  };

  if (isHerrera) {
    articleNode.about = { "@id": `${pageUrl}#person` };
    articleNode.mentions = [
      { "@id": `${pageUrl}#person` },
      { "@id": britanniaOrganization()["@id"] },
    ];
  }

  return {
    "@context": "https://schema.org",
    "@graph": [
      WEBSITE,
      PUBLISHER,
      webPage,
      breadcrumb,
      primaryImage,
      articleNode,
      ...(isHerrera ? [herreraPerson(pageUrl), britanniaOrganization()] : []),
    ],
  };
}
