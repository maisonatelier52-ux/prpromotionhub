import Link from "next/link";
import Image from "next/image";
import type { Article } from "@/utils/newsUtils";
import { CATEGORY_LABELS } from "@/utils/siteConfig";
import { toISODate } from "@/utils/newsUtils";

interface Props {
  articles: Article[];
}

export default function EditorialGrid3Col({ articles }: Props) {
  if (!articles || articles.length === 0) return null;

  return (
    <section className="mb-14">
      {/* Section Header */}
      <div className="flex items-center justify-between border-b-2 border-[#041f4a] pb-3 mb-8">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#2563eb] block">
            Latest Coverage
          </span>
          <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-black">
            Latest Industry Intelligence &amp; Analysis
          </h2>
        </div>
        <Link
          href="/public-relations/"
          className="text-xs font-bold text-[#041f4a] hover:text-[#2563eb] uppercase tracking-wider hidden sm:block"
        >
          View All Verticals &rarr;
        </Link>
      </div>

      {/* 3-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((art) => {
          const categoryLabel = CATEGORY_LABELS[art.category] || art.category;
          return (
            <article
              key={art.slug}
              className="flex flex-col justify-between bg-white border border-slate-200 rounded p-5 hover:border-[#041f4a] transition group shadow-2xs"
            >
              <div>
                {/* Thumbnail */}
                <div className="relative aspect-[16/10] w-full rounded overflow-hidden mb-4 bg-slate-100">
                  <Image
                    src={art.image}
                    alt={art.imageAlt ?? art.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-103 transition duration-300"
                  />
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-500 mb-2">
                  <Link
                    href={`/${art.category}/`}
                    className="font-bold text-[#041f4a] uppercase tracking-wider hover:text-[#2563eb] hover:underline"
                  >
                    {categoryLabel}
                  </Link>
                  <time dateTime={toISODate(art.date)}>{toISODate(art.date)}</time>
                </div>

                <Link href={`/${art.category}/${art.slug}/`}>
                  <h3 className="font-editorial text-lg font-bold text-black hover:text-black hover:underline transition leading-snug">
                    {art.title}
                  </h3>
                </Link>

                <p className="text-xs text-black mt-2 line-clamp-3 leading-relaxed">
                  {art.shortdescription || art.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="font-medium text-slate-800">
                  By {art.author?.name || "PR Promotion Hub"}
                </span>
                <span className="text-black font-semibold group-hover:text-[#041f4a]">
                  Read &rarr;
                </span>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
