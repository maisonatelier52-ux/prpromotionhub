
export interface Article {
  category: string;
  title: string;
  slug: string;
  image: string;
  date: string;
  shortdescription: string;
  description: string;
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
  // Handle formats like "Jan. 1, 2026" or "Dec. 31, 2025"
  // Remove the dot after month if present
  const cleanedDate = dateStr.replace('.', '');
  return new Date(cleanedDate);
}

export function getSortedNews(allNews: Article[][]): Article[] {
  const flattened = allNews.flat();
  return flattened.sort((a, b) => {
    const dateA = parseDate(a.date);
    const dateB = parseDate(b.date);
    return dateB.getTime() - dateA.getTime();
  });
}
