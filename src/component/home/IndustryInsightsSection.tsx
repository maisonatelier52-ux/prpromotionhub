import Link from "next/link";
import Image from "next/image";
import type { Article } from "@/utils/newsUtils";
import { CATEGORY_LABELS } from "@/utils/siteConfig";
import { toISODate } from "@/utils/newsUtils";

interface Props {
  articles: Article[];
}

export default function IndustryInsightsSection({ articles }: Props) {
  if (!articles || articles.length === 0) return null;

  return (
    <section className="bg-white text-black py-10 my-12 border-t-2 border-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-slate-200 pb-4 mb-8">
          <div>
            <span className="text-[11px] uppercase tracking-widest font-bold text-slate-500 block mb-1">
              Deep-Dive Analysis
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-black">
              Industry Insights &amp; Strategic Perspectives
            </h2>
          </div>
          <Link
            href="/insights/"
            className="text-xs font-bold text-black hover:underline uppercase tracking-wider mt-3 md:mt-0"
          >
            Explore All Insights &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.slice(0, 3).map((art) => (
            <article
              key={art.slug}
              className="flex flex-col justify-between bg-white border border-slate-200 rounded-lg p-6 hover:border-black transition group shadow-2xs"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                  <span className="text-black font-bold uppercase tracking-wider text-[11px]">
                    {CATEGORY_LABELS[art.category] || art.category}
                  </span>
                  <time dateTime={toISODate(art.date)}>{toISODate(art.date)}</time>
                </div>

                <Link href={`/${art.category}/${art.slug}/`}>
                  <h3 className="font-editorial text-xl font-bold text-black hover:text-black hover:underline transition leading-snug">
                    {art.title}
                  </h3>
                </Link>

                <p className="text-xs text-black mt-3 line-clamp-3 leading-relaxed">
                  {art.shortdescription || art.description}
                </p>

                {/* Insight Callout Box */}
                <div className="mt-4 p-3 bg-slate-50 border-l-2 border-black text-xs text-black italic leading-relaxed">
                  &ldquo;Strategic communications and regulatory alignment are the twin pillars of modern corporate narrative defense.&rdquo;
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                <span>By {art.author?.name || "Editorial Board"}</span>
                <span className="text-black font-bold group-hover:underline transition">
                  Read Full Insight &rarr;
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
