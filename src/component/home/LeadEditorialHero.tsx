import Link from "next/link";
import Image from "next/image";
import type { Article } from "@/utils/newsUtils";
import { CATEGORY_LABELS } from "@/utils/siteConfig";
import { toISODate } from "@/utils/newsUtils";
import { getAuthorBySlug } from "@/utils/authorsData";

interface Props {
  leadStory: Article;
  secondaryStories: Article[];
}

export default function LeadEditorialHero({ leadStory, secondaryStories }: Props) {
  if (!leadStory) return null;

  const authorProfile = getAuthorBySlug(leadStory.author?.slug || "pr-promotion-hub");
  const categoryLabel = CATEGORY_LABELS[leadStory.category] || leadStory.category;

  return (
    <section className="border-b border-[#E2E8F0] pb-10 mb-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Main Lead Story (Col 1-8) */}
        <div className="lg:col-span-8 flex flex-col space-y-2">
          <div className="flex items-center gap-3">
            <Link
              href={`/${leadStory.category}/`}
              className="accent-badge"
            >
              {categoryLabel}
            </Link>
            <span className="text-xs text-slate-500 font-medium">
              Lead Editorial Investigation
            </span>
            <span className="text-xs text-slate-300">•</span>
            <span className="text-xs text-slate-500">6 min read</span>
          </div>

          <Link href={`/${leadStory.category}/${leadStory.slug}/`} className="group">
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-black transition leading-tight tracking-tight">
              {leadStory.title}
            </h2>
          </Link>

          <p className="text-base sm:text-lg text-black leading-relaxed font-normal">
            {leadStory.shortdescription || leadStory.description}
          </p>

          {/* Author Byline Meta (Clean OG Style without avatar) */}
          <div className="text-xs text-slate-600 flex flex-wrap items-center gap-x-2 gap-y-1 py-1">
            <span className="font-bold text-black">
              <Link href={`/authors/${authorProfile.slug}/`} className="hover:underline hover:text-[#041f4a]">
                {authorProfile.name}
              </Link>
            </span>
            {authorProfile.slug !== "pr-promotion-hub" && (
              <span className="text-slate-400 font-normal">({authorProfile.role})</span>
            )}
            <span className="text-slate-300">·</span>
            <span className="text-slate-500">
              Published on <time dateTime={toISODate(leadStory.date)}>{toISODate(leadStory.date)}</time>
            </span>
            {leadStory.updatedAt && (
              <>
                <span className="text-slate-300">·</span>
                <span className="text-slate-500">
                  Updated on <time dateTime={leadStory.updatedAt}>{leadStory.updatedAt}</time>
                </span>
              </>
            )}
          </div>

          {/* Lead Image */}
          <div className="relative aspect-[16/9] w-full rounded overflow-hidden border border-slate-200 mt-2 shadow-xs">
            <Image
              src={leadStory.image}
              alt={leadStory.imageAlt ?? leadStory.title}
              fill
              sizes="(max-width: 1024px) 100vw, 66vw"
              className="object-cover hover:scale-102 transition duration-500"
              priority
            />
          </div>
        </div>

        {/* Right Rail: Secondary Strategic Stories (Col 9-12) */}
        <div className="lg:col-span-4 flex flex-col divide-y divide-slate-200 lg:pl-6 lg:border-l lg:border-slate-200 space-y-6 lg:space-y-0">
          <div className="pb-4">
            <span className="text-xs uppercase tracking-widest font-bold text-[#041f4a] block">
              Strategic Executive Briefings
            </span>
          </div>

          {secondaryStories.map((story) => (
            <article key={story.slug} className="pt-5 pb-5 first:pt-0 last:pb-0 space-y-2 group">
              <div className="flex items-center justify-between text-[11px] text-slate-500">
                <Link
                  href={`/${story.category}/`}
                  className="font-bold text-[#041f4a] uppercase tracking-wider hover:text-[#2563eb] hover:underline"
                >
                  {CATEGORY_LABELS[story.category] || story.category}
                </Link>
                <time dateTime={toISODate(story.date)}>{toISODate(story.date)}</time>
              </div>

              <Link href={`/${story.category}/${story.slug}/`}>
                <h3 className="font-editorial text-base sm:text-lg font-bold text-black hover:text-black hover:underline transition leading-snug">
                  {story.title}
                </h3>
              </Link>

              <p className="text-xs text-black line-clamp-2 leading-relaxed">
                {story.shortdescription || story.description}
              </p>

              <div className="flex items-center justify-between pt-1 text-[11px] text-slate-500">
                <span>By {story.author?.name || "PR Promotion Hub"}</span>
                <span className="font-semibold text-black group-hover:text-[#041f4a]">4 min read &rarr;</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
