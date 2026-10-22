import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, TrendingUp } from 'lucide-react';

interface NewsData {
  slug: string;
  category: string;
  title: string;
  shortdescription?: string;
  description?: string;
  date?: string;
  image: string;
  imageAlt?: string;
}

interface Props {
  data: NewsData[];
  title?: string;
}

export default function ArticleCard({ data, title = "MORE TO READ" }: Props) {
  return (
    <section className="w-full">
      {/* ── Modern Editorial Section Header ── */}
      <div className="relative pb-3 mb-4 border-b border-slate-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#041f4a] ring-4 ring-blue-100" />
            <h2 className="text-[13px] sm:text-[14px] font-bold tracking-wider uppercase text-slate-950 font-sans">
              {title}
            </h2>
          </div>
          <span className="inline-flex items-center gap-1 text-[10px] font-semibold tracking-wider uppercase text-slate-500 bg-slate-100/90 px-2 py-0.5 rounded-full border border-slate-200/60">
            <TrendingUp className="w-2.5 h-2.5 text-blue-600" />
            Top Stories
          </span>
        </div>
        {/* Sleek navy accent indicator */}
        <div className="absolute -bottom-px left-0 w-12 h-[2px] bg-[#041f4a]" />
      </div>

      {/* ── Article List ── */}
      <div className="flex flex-col divide-y divide-slate-100">
        {data?.map((item, index) => (
          <article
            key={item.slug}
            className="group relative py-3.5 first:pt-0 last:pb-0 transition-colors"
          >
            <Link
              href={`/${item.category}/${item.slug}`}
              className="flex gap-3.5 w-full items-start"
            >
              {/* Thumbnail with rounded corners and subtle shadow */}
              <div className="relative w-20 h-20 sm:w-[88px] sm:h-[84px] shrink-0 rounded-lg overflow-hidden bg-slate-100 border border-slate-200/80 shadow-2xs">
                <Image
                  src={item.image}
                  alt={item.imageAlt ?? item.title}
                  fill
                  sizes="(max-width: 640px) 80px, 88px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                {/* Index tag badge overlay */}
                <span className="absolute top-1 left-1 min-w-[18px] h-[18px] px-1 rounded bg-black/65 backdrop-blur-xs text-white text-[9px] font-bold flex items-center justify-center font-sans tracking-tight">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              {/* Content text */}
              <div className="flex-1 min-w-0 flex flex-col gap-1.5">
                <div className="flex items-center justify-between gap-1.5">
                  <span className="text-[10px] font-bold tracking-wider uppercase text-[#041f4a] bg-blue-50/80 px-2 py-0.5 rounded-sm border border-blue-100/80 w-fit">
                    {item.category}
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-[#041f4a] transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
                </div>

                <h3 className="text-[13px] sm:text-[13.5px] font-semibold text-slate-900 group-hover:text-blue-700 leading-snug line-clamp-2 transition-colors font-sans">
                  {item.title}
                </h3>

                {item.date && (
                  <span className="text-[11px] text-slate-400 font-normal mt-0.5">
                    {item.date}
                  </span>
                )}
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
