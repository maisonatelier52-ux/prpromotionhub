import { CATEGORY_LABELS } from '@/utils/siteConfig';
import Link from 'next/link';
import { parseDate, toISODate, type Article } from '@/utils/newsUtils';

function dateLabel(value: string) {
  const parsed = parseDate(value);
  return Number.isNaN(parsed.getTime()) ? value : parsed.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
}

export default function ArticleHeader({ article }: { article: Article }) {
  const category = CATEGORY_LABELS[article.category];
  const readingMinutes = Math.max(1, Math.ceil(article.description.split(/\s+/).length / 220));
  return (
    <header className="mx-auto mt-5">
      <div className="flex flex-wrap items-center gap-3 mb-4 text-sm">
        <Link href={`/${article.category}`} className="bg-[#041f4a] capitalize text-white font-semibold px-3 py-1">{category}</Link>
        <span className="text-slate-600">Blog post{article.contentType && <> · {article.contentType === "News and analysis" ? "Commentary" : article.contentType}</>}</span>
      </div>
      <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1]">{article.title}</h1>
      <p className="mt-2 text-[15px] md:text-[18px] text-black font-light tracking-tight leading-snug max-w-6xl">{article.shortdescription}</p>
      <div className="mt-2 text-[12px] md:text-[14px] text-gray-600 leading-6">
        <p className="font-semibold text-[#041f4a]">{article.author.name}</p>
        <p>Published <time dateTime={toISODate(article.date)}>{dateLabel(article.date)}</time> · {readingMinutes} min read</p>
      </div>
    </header>
  );
}
