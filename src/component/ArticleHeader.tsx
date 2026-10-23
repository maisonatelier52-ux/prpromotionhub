import { getCategoryLabel } from '@/utils/siteConfig';
import Link from 'next/link';
import { parseDate, toISODate, type Article } from '@/utils/newsUtils';

function dateLabel(value: string) {
  const parsed = parseDate(value);
  return Number.isNaN(parsed.getTime())
    ? value
    : parsed.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
}

export default function ArticleHeader({ article }: { article: Article }) {
  const category = getCategoryLabel(article.category);
  const textContent = article.description || (article.sections?.map(s => s.paragraphs?.join(' ')).join(' ')) || article.shortdescription || '';
  const words = textContent.trim().split(/\s+/).filter(Boolean).length;
  const readingMinutes = Math.max(1, Math.ceil(words / 220));

  const isSpecialClassic = article.slug === "how-lawyers-for-julio-herrera-velutini-challenged-the-prosecution";

  if (isSpecialClassic) {
    return (
      <header className="mx-auto mt-4 mb-5">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-3 text-xs text-slate-500">
          <ol className="flex items-center flex-wrap gap-1 sm:gap-1.5">
            <li>
              <Link href="/" className="hover:text-[#041f4a] transition-colors">Home</Link>
            </li>
            <li className="text-slate-300">/</li>
            <li>
              <Link href={`/${article.category}`} className="hover:text-[#041f4a] capitalize transition-colors">{category}</Link>
            </li>
            <li className="text-slate-300">/</li>
            <li className="text-slate-800 font-medium truncate max-w-[220px] sm:max-w-xs md:max-w-md" aria-current="page">
              {article.title}
            </li>
          </ol>
        </nav>

        {/* US News Standard Editorial Kicker */}
        <div className="flex items-center gap-2.5 mb-2.5">
          <Link
            href={`/${article.category}`}
            className="inline-block bg-[#041f4a] hover:bg-blue-900 transition-colors uppercase text-white font-bold text-[10.5px] tracking-wider px-2 py-0.5 rounded-xs"
          >
            {category}
          </Link>
          <span className="text-[11px] font-semibold uppercase tracking-wider text-blue-900/80">
            Legal Analysis
          </span>
        </div>

        {/* Main Title (H1) — Authoritative US News Typography */}
        <h1 className="text-2xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-slate-950 leading-[1.14] mb-3">
          {article.title}
        </h1>

        {/* Subtitle / Deck — Minimal, Crisp & Clean */}
        <p className="text-[15.5px] sm:text-[17px] text-slate-600 font-normal leading-relaxed max-w-4xl mb-4">
          {article.shortdescription}
        </p>

        {/* Publication Meta — Modern US News Hairline Rule Strip */}
        <div className="border-y border-slate-200/90 py-2.5 flex items-center text-xs text-slate-500 font-sans">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-[#041f4a]">By Editorial Team</span>
            <span className="text-slate-300">·</span>
            <span>
              Published <time dateTime={toISODate(article.date)} className="font-medium text-slate-800">{dateLabel(article.date)}</time>
            </span>
            <span className="text-slate-300">·</span>
            <span>{readingMinutes} min read</span>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="mx-auto mt-4 mb-3">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="mb-3 text-xs text-slate-500">
        <ol className="flex items-center flex-wrap gap-1 sm:gap-1.5">
          <li>
            <Link href="/" className="hover:text-[#041f4a] transition-colors">Home</Link>
          </li>
          <li className="text-slate-300">/</li>
          <li>
            <Link href={`/${article.category}`} className="hover:text-[#041f4a] capitalize transition-colors">{category}</Link>
          </li>
          <li className="text-slate-300">/</li>
          <li className="text-slate-800 font-medium truncate max-w-[220px] sm:max-w-xs md:max-w-md" aria-current="page">
            {article.title}
          </li>
        </ol>
      </nav>

      {/* Category Pill */}
      <div className="flex flex-wrap items-center gap-2.5 mb-3 text-xs sm:text-sm">
        <Link
          href={`/${article.category}`}
          className="bg-[#041f4a] hover:bg-blue-900 transition-colors capitalize text-white font-semibold px-2.5 py-0.5 rounded-sm shadow-xs"
        >
          {category}
        </Link>
      </div>

      {/* Main Title (H1) */}
      <h1 className="text-2xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight leading-[1.12] text-slate-950">
        {article.title}
      </h1>

      {/* Subtitle / Deck — Minimal & Unique Design with subtle left accent & glass tone */}
      <div className="mt-3.5 mb-3.5 max-w-4xl group">
        <div className="relative pl-3.5 py-1 border-l-2 border-[#041f4a] group-hover:border-blue-600 transition-colors duration-300 bg-gradient-to-r from-slate-100/70 via-slate-50/30 to-transparent backdrop-blur-xs rounded-r-md">
          <p className="text-[14px] sm:text-[15.5px] text-slate-600 font-normal leading-relaxed tracking-tight">
            {article.shortdescription}
          </p>
        </div>
      </div>

      {/* Author & Publication Meta */}
      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] sm:text-xs text-slate-500 pt-0.5 pb-1">
        <span className="font-semibold text-[#041f4a]">By Editorial Team</span>
        <span className="text-slate-300">·</span>
        <p>
          Published <time dateTime={toISODate(article.date)}>{dateLabel(article.date)}</time>
        </p>
        <span className="text-slate-300">·</span>
        <span>{readingMinutes} min read</span>
      </div>
    </header>
  );
}
