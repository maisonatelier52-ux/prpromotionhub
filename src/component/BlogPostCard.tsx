import Link from "next/link";
import { CATEGORY_LABELS } from "@/utils/siteConfig";
import { parseDate, toISODate, type Article } from "@/utils/newsUtils";
export type PostPreview = Pick<Article, "title" | "slug" | "category" | "shortdescription" | "date" | "contentType">;
export function postPreview(post: Article): PostPreview {
  const { title, slug, category, shortdescription, date, contentType } = post;
  return { title, slug, category, shortdescription, date, contentType };
}
export default function BlogPostCard({ post }: { post: PostPreview }) {
  const date = parseDate(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" });
  return <article className="flex flex-col border-t border-slate-300 pt-5 pb-4">
    <p className="text-sm text-[#345479] mb-3">{CATEGORY_LABELS[post.category]} · {post.contentType === "News and analysis" ? "Commentary" : post.contentType}</p>
    <h3 className="font-serif text-2xl font-semibold leading-snug text-[#102b4a]">
      <Link className="hover:underline decoration-1 underline-offset-4" href={`/${post.category}/${post.slug}`}>{post.title}</Link>
    </h3>
    <p className="mt-3 mb-5 text-base text-slate-600 leading-relaxed">{post.shortdescription}</p>
    <p className="mt-auto text-sm text-slate-500">Archive · <time dateTime={toISODate(post.date)}>{date}</time></p>
  </article>;
}

