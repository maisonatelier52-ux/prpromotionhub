import Link from "next/link";
import Image from "next/image";
import type { Article } from "@/utils/newsUtils";
import { getCategoryLabel } from "@/utils/siteConfig";
import { toISODate } from "@/utils/newsUtils";

interface Props {
  relatedArticles: Article[];
}

export default function RelatedArticlesBlock({ relatedArticles }: Props) {
  if (!relatedArticles || relatedArticles.length === 0) return null;

  const fiveArticles = relatedArticles.slice(0, 5);

  return (
    <section className="border-t-2 border-[#041f4a] pt-8 mt-12 mb-2">
      <div className="flex items-center justify-between mb-6">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#2563eb] block">
            Topic Cluster Architecture
          </span>
          <h3 className="font-editorial text-2xl font-bold text-black">
            Related Intelligence &amp; Strategic Coverage
          </h3>
        </div>
        <span className="text-xs text-slate-500">5 Recommended Analyses</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {fiveArticles.map((art) => {
          const catLabel = getCategoryLabel(art.category);
          return (
            <article
              key={art.slug}
              className="flex flex-col justify-between bg-white border border-slate-200 rounded p-3 transition group shadow-2xs"
            >
              <div>
                <div className="relative aspect-[16/10] w-full rounded overflow-hidden mb-2 bg-slate-100">
                  <Image
                    src={art.image}
                    alt={art.imageAlt ?? art.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 20vw"
                    className="object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>

                <div className="flex items-center justify-between text-[10px] text-slate-500 mb-1">
                  <span className="font-bold text-[#041f4a] uppercase tracking-wider">
                    {catLabel}
                  </span>
                  <time dateTime={toISODate(art.date)}>{toISODate(art.date)}</time>
                </div>

                <Link href={`/${art.category}/${art.slug}/`}>
                  <h4 className="font-editorial text-xs font-bold text-black hover:text-black hover:underline transition leading-snug line-clamp-3">
                    {art.title}
                  </h4>
                </Link>
              </div>

              <div className="mt-3 pt-2 border-t border-slate-100 text-[10px] text-slate-500 flex items-center justify-between gap-1">
                <span className="truncate max-w-[130px]">By {art.author?.name || "Editorial Board"}</span>
                <span className="font-semibold text-[#041f4a] group-hover:text-[#2563eb] shrink-0">
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
