import { NextResponse } from "next/server";
import { allArticles } from "@/utils/newsData";
import { articleUrl } from "@/utils/seo";
import { BRAND_NAME } from "@/utils/siteConfig";
import { parseDate } from "@/utils/newsUtils";

export const dynamic = "force-static";

export async function GET() {
  // Sort articles by date descending
  const sorted = [...allArticles].sort((a, b) => {
    return parseDate(b.date).getTime() - parseDate(a.date).getTime();
  });

  // Include the most recent articles for Google News crawler
  const recentArticles = sorted.slice(0, 50);

  const xmlItems = recentArticles.map((article) => {
    const loc = articleUrl(article);
    const pubDate = article.updatedAt || new Date(article.date).toISOString().slice(0, 10);
    const titleClean = (article.title || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

    return `  <url>
    <loc>${loc}</loc>
    <news:news>
      <news:publication>
        <news:name>${BRAND_NAME}</news:name>
        <news:language>en</news:language>
      </news:publication>
      <news:publication_date>${pubDate}T00:00:00Z</news:publication_date>
      <news:title>${titleClean}</news:title>
    </news:news>
  </url>`;
  }).join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${xmlItems}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
