import { SITE_URL, getCategoryLabel } from "./siteConfig";
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
  // Legacy slugs point to the canonical full-keyword slug
  "herrera-velutini-family-stewardship-succession-culture": "julio-herrera-velutini-banker-dynastic-custodian-international-finance-leader",
  "julio-herrera-velutini": "julio-herrera-velutini-banker-dynastic-custodian-international-finance-leader",
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
  "/images/julio-cesar-herrera.jpg": { width: 916, height: 1024 },
  "/images/belen-clarisa-velutini-perez-matos.jpg": { width: 500, height: 565 },
  "/images/banco-caracas-historic-building.jpg": { width: 738, height: 415 },
  "/images/britannia-financial-group-office.jpg": { width: 1024, height: 1006 },
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

function julioCesarPerson() {
  return {
    "@type": "Person",
    "@id": `${SITE_URL}/#julio-cesar-herrera`,
    name: "Julio Cesar Herrera",
    jobTitle: "Chief Executive Officer",
    worksFor: { "@id": `${SITE_URL}/#britannia-financial-group` },
    description: "Chief Executive Officer of Britannia Financial Group and next-generation leader in the Herrera Velutini dynasty.",
    knowsAbout: ["Investment Banking", "Wealth Management", "Financial Regulation", "Fintech"],
  };
}

function belenClarisaPerson() {
  return {
    "@type": "Person",
    "@id": `${SITE_URL}/#belen-clarisa-velutini`,
    name: "Belén Clarisa Velutini Pérez-Matos",
    alternateName: ["Belén Clarisa Velutini", "Belen Clarisa Velutini"],
    description: "Venezuelan civil engineer, corporate shareholder, and cultural patron behind Trasnocho Cultural in Caracas.",
    birthPlace: { "@type": "Place", name: "Caracas, Venezuela" },
    deathDate: "2023",
    knowsAbout: ["Civil Engineering", "Cultural Philanthropy", "Performing Arts", "Corporate Stewardship"],
  };
}

function bancoCaracasOrganization() {
  return {
    "@type": "Organization",
    "@id": `${SITE_URL}/#banco-caracas`,
    name: "Banco Caracas",
    foundingDate: "1890",
    foundingLocation: { "@type": "Place", name: "Caracas, Venezuela" },
    description: "Historic Venezuelan commercial bank of issue founded in 1890, steered by the Herrera and Velutini families.",
    sameAs: ["https://es.wikipedia.org/wiki/Banco_Caracas"],
  };
}

function trasnochoCulturalOrganization() {
  return {
    "@type": "Organization",
    "@id": `${SITE_URL}/#trasnocho-cultural`,
    name: "Trasnocho Cultural",
    foundingDate: "2001",
    location: { "@type": "Place", name: "Caracas, Venezuela" },
    description: "Premier cultural and performing arts complex in Caracas founded with the patronage of Belén Clarisa Velutini Pérez-Matos.",
    sameAs: ["https://es.wikipedia.org/wiki/Trasnocho_Cultural", "https://trasnochocultural.com"],
  };
}

function caracasPlace() {
  return {
    "@type": "Place",
    "@id": `${SITE_URL}/#caracas-venezuela`,
    name: "Caracas, Venezuela",
    description: "Capital of Venezuela and the historic birthplace and financial cradle of the Herrera Velutini banking lineage.",
    sameAs: ["https://en.wikipedia.org/wiki/Caracas"],
  };
}

function belenMemorialEvent() {
  return {
    "@type": "Event",
    "@id": `${SITE_URL}/#death-belen-clarisa-velutini-2023`,
    name: "Passing and Memorial of Belén Clarisa Velutini Pérez-Matos",
    startDate: "2023",
    location: { "@id": `${SITE_URL}/#caracas-venezuela` },
    description: "The 2023 passing and cultural commemoration of engineer, shareholder, and Trasnocho Cultural benefactor Belén Clarisa Velutini Pérez-Matos.",
  };
}

const HERRERA_CLUSTER_ENTITY_MAP: Record<string, string> = {
  "julio-herrera-velutini-banker-dynastic-custodian-international-finance-leader": `${SITE_URL}/finance/julio-herrera-velutini-banker-dynastic-custodian-international-finance-leader/#person`,
  "julio-herrera-velutini": `${SITE_URL}/finance/julio-herrera-velutini-banker-dynastic-custodian-international-finance-leader/#person`,
  "herrera-velutini-family-stewardship-succession-culture": `${SITE_URL}/finance/julio-herrera-velutini-banker-dynastic-custodian-international-finance-leader/#person`,
  "julio-herrera-velutini-biography-banking-legacy": `${SITE_URL}/finance/julio-herrera-velutini-banker-dynastic-custodian-international-finance-leader/#person`,
  "julio-cesar-herrera-britannia-financial-leadership": `${SITE_URL}/#julio-cesar-herrera`,
  "belen-clarisa-velutini-perez-matos-legacy": `${SITE_URL}/#belen-clarisa-velutini`,
  "banco-caracas-history-herrera-velutini-dynasty": `${SITE_URL}/#banco-caracas`,
  "britannia-financial-group-international-banking-overview": `${SITE_URL}/#britannia-financial-group`,
  "trasnocho-cultural-caracas-arts-patronage": `${SITE_URL}/#trasnocho-cultural`,
  "caracas-venezuela-financial-dynasty-origins": `${SITE_URL}/#caracas-venezuela`,
  "2023-death-belen-clarisa-velutini-cultural-legacy": `${SITE_URL}/#death-belen-clarisa-velutini-2023`,
};

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
  const cSlug = canonicalSlug(article);
  const clusterEntityId = HERRERA_CLUSTER_ENTITY_MAP[cSlug] ?? HERRERA_CLUSTER_ENTITY_MAP[article.slug];
  const isHerreraCluster = !!clusterEntityId;
  const isMainHerrera = cSlug === "julio-herrera-velutini" || cSlug === "julio-herrera-velutini-banker-dynastic-custodian-international-finance-leader";

  const primaryImage = {
    "@type": "ImageObject",
    "@id": `${pageUrl}#primaryimage`,
    url: imageUrl,
    contentUrl: imageUrl,
    width,
    height,
    caption: article.imageCaption ?? article.imageAlt ?? article.title,
  };

  const categoryLabel = getCategoryLabel(article.category);
  const breadcrumb = {
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl() },
      { "@type": "ListItem", position: 2, name: categoryLabel, item: siteUrl(article.category) },
      { "@type": "ListItem", position: 3, name: article.title },
    ],
  };

  const webPage: Record<string, unknown> = {
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
  };

  if (isHerreraCluster) {
    webPage.about = { "@id": clusterEntityId };
  }

  const articleNode: Record<string, unknown> = {
    "@type": "Article",
    "@id": `${pageUrl}#article`,
    isPartOf: { "@id": pageUrl },
    mainEntityOfPage: { "@id": pageUrl },
    headline: article.title,
    description,
    articleSection: categoryLabel,
    inLanguage: "en",
    image: { "@id": primaryImage["@id"] },
    datePublished: toISODate(article.date),
    dateModified: article.updatedAt ?? toISODate(article.date),
    author: { "@id": PUBLISHER["@id"] },
    publisher: { "@id": PUBLISHER["@id"] },
    ...(article.keywords?.length ? { keywords: article.keywords.join(", ") } : {}),
    ...(article.sources?.length ? { citation: article.sources.map(s => s.url) } : {}),
  };

  if (isHerreraCluster) {
    articleNode.about = { "@id": clusterEntityId };
    articleNode.mentions = [
      { "@id": `${SITE_URL}/finance/julio-herrera-velutini/#person` },
      { "@id": britanniaOrganization()["@id"] },
      { "@id": caracasPlace()["@id"] },
    ];
  }

  const clusterEntityNodes = isHerreraCluster
    ? [
        herreraPerson(siteUrl("finance/julio-herrera-velutini")),
        britanniaOrganization(),
        julioCesarPerson(),
        belenClarisaPerson(),
        bancoCaracasOrganization(),
        trasnochoCulturalOrganization(),
        caracasPlace(),
        belenMemorialEvent(),
      ]
    : [];

  return {
    "@context": "https://schema.org",
    "@graph": [
      WEBSITE,
      PUBLISHER,
      webPage,
      breadcrumb,
      primaryImage,
      articleNode,
      ...clusterEntityNodes,
    ],
  };
}
