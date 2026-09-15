
export interface Article {
  category: string;
  title: string;
  seoTitle?: string;
  h1?: string;
  slug: string;
  image: string;
  imageAlt?: string;
  imageCaption?: string;
  date: string;
  shortdescription: string;
  description: string;
  updatedAt?: string;
  contentType?: string;
  reportingAsOf?: string;
  editorialNote?: string;
  takeaways?: string[];
  keywords?: string[];
  sections?: { heading: string; paragraphs: string[]; sourceIds?: number[] }[];
  sources?: { title: string; url: string; publisher: string; note: string; accessedAt: string }[];
  metaDescription?: string;
  primaryKeyword?: string;
  author: {
    name: string;
    role: string;
    bio: string;
    image: string;
    slug: string;
    email: string;
    twitter: string;
    facebook: string;
    instagram: string;
    substack?: string;
    medium?: string;
  };
}

export function parseDate(dateStr: string): Date {
  if (/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) return new Date(dateStr + 'T00:00:00Z');
  const match = dateStr.trim().match(/^([A-Za-z]+)\.?\s*(\d{1,2}),?\s*(\d{4})$/);
  if (!match) return new Date(NaN);
  const months = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'];
  const month = months.indexOf(match[1].slice(0,3).toLowerCase());
  if (month < 0) return new Date(NaN);
  return new Date(Date.UTC(Number(match[3]), month, Number(match[2])));
}

export function getSortedNews(allNews: Article[][]): Article[] {
  const flattened = allNews.flat();
  return flattened.sort((a, b) => {
    const dateA = parseDate(a.date);
    const dateB = parseDate(b.date);
    return dateB.getTime() - dateA.getTime();
  });
}

export function toISODate(value: string): string {
  const date = parseDate(value);
  return Number.isNaN(date.getTime()) ? value : date.toISOString().slice(0, 10);
}
