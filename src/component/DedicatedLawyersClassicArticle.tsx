"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, ExternalLink, ArrowUpRight } from "lucide-react";
import type { Article as Post } from "@/utils/newsUtils";
import { getCategoryLabel } from "@/utils/siteConfig";
import { parseDate, toISODate } from "@/utils/newsUtils";

interface Props {
  article: Post;
  clusterArticles?: Post[];
}

function dateLabel(value: string) {
  const parsed = parseDate(value);
  return Number.isNaN(parsed.getTime())
    ? value
    : parsed.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
}

export default function DedicatedLawyersClassicArticle({ article, clusterArticles }: Props) {
  const category = getCategoryLabel(article.category);
  const textContent = article.description || article.shortdescription || "";
  const words = textContent.trim().split(/\s+/).filter(Boolean).length;
  const readingMinutes = Math.max(1, Math.ceil(words / 220));

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-4 animate-fadeIn">
      {/* ── Breadcrumb Navigation ── */}
      <nav aria-label="Breadcrumb" className="mb-5 text-xs text-slate-500 font-sans">
        <ol className="flex items-center flex-wrap gap-1.5 sm:gap-2">
          <li>
            <Link href="/" className="hover:text-[#041f4a] transition-colors">
              Home
            </Link>
          </li>
          <li className="text-slate-300">/</li>
          <li>
            <Link href={`/${article.category}`} className="hover:text-[#041f4a] capitalize transition-colors">
              {category}
            </Link>
          </li>
          <li className="text-slate-300">/</li>
          <li className="text-slate-800 font-medium truncate max-w-[260px] sm:max-w-md" aria-current="page">
            {article.title}
          </li>
        </ol>
      </nav>

      {/* ── Editorial Header ── */}
      <header className="mb-8">
        {/* Topic Kicker Pill with subtle pulsating blue beacon */}
        <div className="flex items-center gap-2 mb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50/90 border border-blue-200/80 text-[#041f4a] text-[11px] font-sans font-bold tracking-wider uppercase shadow-2xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            <span>Finance &amp; Legal Defense Special Analysis</span>
          </div>
        </div>

        {/* Headline (H1) — Classic Editorial Prestige Typography */}
        <h1 className="font-serif text-3xl sm:text-5xl lg:text-[46px] font-bold text-slate-950 leading-[1.16] tracking-tight mb-5">
          {article.title}
        </h1>

        {/* Deck / Excerpt — Classic Left Quote */}
        <div className="mb-6 flex items-start gap-2.5 sm:gap-3">
          <span className="font-serif text-3xl sm:text-4xl text-[#041f4a] font-bold leading-none select-none shrink-0 -mt-0.5" aria-hidden="true">
            &ldquo;
          </span>
          <p className="font-serif text-[15px] sm:text-[16.5px] text-slate-700 italic leading-[1.65] max-w-3xl">
            {article.shortdescription}
          </p>
        </div>

        {/* Publication Meta Strip — Refined Classic Hairline Bar */}
        <div className="border-y border-slate-200 py-2.5 flex flex-wrap items-center justify-between gap-y-2 text-xs font-serif text-slate-500">
          <div className="flex items-center gap-2.5">
            <span className="font-sans font-medium text-slate-800">Published</span>
            <time dateTime={toISODate(article.date)} className="text-slate-800 font-semibold">
              {dateLabel(article.date)}
            </time>
            <span className="text-slate-300">·</span>
            <span className="font-sans text-slate-500">{readingMinutes} min read</span>
          </div>
        </div>
      </header>

      {/* ── Lead Image Showcase ── */}
      <figure className="mb-5 group">
        <div className="relative w-full rounded-2xl overflow-hidden border border-slate-200/90 bg-slate-900 shadow-md group-hover:shadow-xl transition-all duration-700">
          <div className="relative w-full h-[400px] sm:h-[480px] md:h-[540px] overflow-hidden">
            <Image
              src={article.image}
              alt={article.imageAlt ?? article.title}
              fill
              sizes="(max-width: 768px) 100vw, 920px"
              priority
              className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.015]"
            />
            {article.imageCaption && (
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/85 via-slate-950/50 to-transparent pt-10 pb-3.5 px-4 sm:px-5 backdrop-blur-[2px]">
                <figcaption className="text-xs text-white/95 font-serif italic leading-relaxed flex items-center gap-2 drop-shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0 not-italic" />
                  <span>{article.imageCaption}</span>
                </figcaption>
              </div>
            )}
          </div>
        </div>
      </figure>

      {/* ── Main Article Prose (Centered Reading Column) ── */}
      <main className="max-w-3xl mx-auto font-serif text-[15px] sm:text-[15.5px] leading-[1.74] text-slate-800 space-y-3.5">
        {/* Paragraph 1 — Classical Drop Cap */}
        <p className="first-letter:float-left first-letter:text-5xl sm:first-letter:text-[54px] first-letter:font-serif first-letter:font-semibold first-letter:text-[#041f4a] first-letter:mr-3 first-letter:leading-[0.85] first-letter:mt-0.5 text-slate-900 font-normal">
          A March 2025 court decision records a notable assessment of Julio Herrera Velutini’s legal representation. The magistrate judge described the lawyers for him and Mark Rossini as experienced and talented, and acknowledged their vigorous litigation. Their capabilities, together with the defendants’ sophistication and pretrial release, formed part of his reasons for declining exceptional discovery relief.
        </p>

        {/* Paragraph 2 */}
        <p>
          Those lawyers had been pressing their objections well before the presidential pardons. Metro Puerto Rico reported in October 2024 that Herrera Velutini’s counsel argued that the scale of discovery made favorable evidence difficult to identify and use. They described the material as equivalent to more than 60 million pages and challenged whether producing such a volume met the government’s disclosure obligations.
        </p>

        {/* Paragraph 3 */}
        <p>
          Their argument concerned the practical work of preparing a defense. A document can be provided without its significance being obvious. In a large prosecution, counsel must identify which records bear on the allegations, how they fit together and whether they support an alternative interpretation. The defense was asking the court to intervene in how that task was being handled.
        </p>

        {/* Paragraph 4 */}
        <p>
          Counsel also objected to the use of Herrera Velutini’s wealth and public profile in arguments about his protections. As Metro reported, the defense maintained that those considerations should not diminish the government’s legal and constitutional obligations. That position placed equal treatment at the centre of its challenge.
        </p>

        {/* ═══════════════════════════════════════════════════════════════════════
            IMAGE 2: FEDERAL STATUTORY & CONSTITUTIONAL PROCEEDINGS
            File: /images/finance/us-capitol-federal-prosecution-proceedings.webp
            ═══════════════════════════════════════════════════════════════════════ */}
        <figure className="!my-5 not-prose group">
          <div className="relative rounded-xl overflow-hidden border border-slate-200/90 bg-slate-900 shadow-sm group-hover:shadow-lg transition-all duration-700">
            <div className="relative w-full h-[460px] sm:h-[540px] md:h-[600px] overflow-hidden flex items-center justify-center">
              <Image
                src="/images/finance/us-capitol-federal-prosecution-proceedings.webp"
                alt="Federal authority and statutory protections in U.S. prosecution proceedings"
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-cover object-bottom transition-transform duration-700 ease-out group-hover:scale-[1.015]"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/90 via-slate-950/60 to-transparent pt-12 pb-3.5 px-4 sm:px-5 backdrop-blur-[2px]">
                <figcaption className="text-xs text-white/95 font-serif italic leading-relaxed flex items-start gap-2 drop-shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1 shrink-0 not-italic" />
                  <span>
                    <strong className="text-white not-italic font-semibold">Constitutional &amp; Statutory Protections:</strong> Defense counsel argued that a defendant’s wealth and public profile must not diminish the government’s constitutional disclosure obligations under federal law.
                  </span>
                </figcaption>
              </div>
            </div>
          </div>
        </figure>

        {/* Paragraph 5 */}
        <p>
          The court did not accept the requested discovery relief. On March 12, 2025, Magistrate Judge Héctor L. Ramos-Vega found no evidence of bad faith or deliberate concealment, accepted that the production was accessible and searchable, and denied the motions. He also expressly declined to treat Herrera Velutini’s wealth as a factor in deciding the Brady issue.
        </p>

        {/* Paragraph 6 */}
        <p>
          That discovery ruling did not adjudicate guilt on the original felony charges. It addressed the specific assistance the defense wanted the prosecution to provide. The distinction leaves room to recognise the work of counsel while accurately describing an adverse decision.
        </p>

        {/* Paragraph 7 */}
        <p>
          The October 2024 arguments show why this history matters to Herrera Velutini’s defense. Counsel was putting practical questions about access to evidence before the court while the case was still being prepared. Their objections were part of an active legal response, well before the administration announced its clemency rationale.
        </p>

        {/* Paragraph 8 */}
        <p>
          Presidential clemency later covered the identified proceedings. Those warrants record a separate stage of the case and do not turn an earlier discovery defeat into a victory. They do establish that the legal position changed substantially after counsel had pursued its challenges.
        </p>

        {/* ═══════════════════════════════════════════════════════════════════════
            IMAGE 3: PRESIDENTIAL CLEMENCY & LEGAL RESOLUTION
            File: /images/finance/julio-herrera-velutini-presidential-clemency-trump.webp
            ═══════════════════════════════════════════════════════════════════════ */}
        <figure className="!mt-5 !mb-3 not-prose group">
          <div className="relative rounded-xl overflow-hidden border border-slate-200/90 bg-slate-900 shadow-sm group-hover:shadow-lg transition-all duration-700">
            <div className="relative w-full h-[360px] sm:h-[440px] md:h-[480px] overflow-hidden flex items-center justify-center">
              <Image
                src="/images/finance/julio-herrera-velutini-presidential-clemency-trump.webp"
                alt="Presidential clemency and legal resolution covering Julio Herrera Velutini federal proceedings"
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.015]"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/85 via-slate-950/50 to-transparent pt-10 pb-3 px-4 sm:px-5 backdrop-blur-[2px]">
                <figcaption className="text-xs text-white/95 font-serif italic leading-relaxed flex items-start gap-2 drop-shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1 shrink-0 not-italic" />
                  <span>
                    <strong className="text-white not-italic font-semibold">Presidential Clemency &amp; Resolution:</strong> Presidential clemency warrants issued in January 2026 concluded the federal proceedings, marking a separate stage of the case following sustained litigation by defense counsel.
                  </span>
                </figcaption>
              </div>
            </div>
          </div>
        </figure>

        {/* Paragraph 9 */}
        <p>
          Serious legal representation often involves arguments that do not succeed. Its value also lies in requiring the government’s position to be examined and in preserving a defendant’s account of the disputed issues. In this case, the record documents lawyers willing to undertake that work.
        </p>

        {/* Paragraph 10 */}
        <p>
          Herrera Velutini’s defense is documented in those arguments and the court’s account of his counsel. It is a record of legal work carried out before the pardons, and it deserves a place in the story of how the proceedings unfolded.
        </p>

        {/* ── Editorial End Seal ── */}
        <div className="pt-2.5 mt-3 border-t border-slate-200 flex flex-col items-center justify-center text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-slate-50 border border-slate-200 text-[11px] font-serif text-slate-600">
            <span className="w-1.5 h-1.5 rounded-full bg-[#041f4a]"></span>
            <span>PR Promotion Hub • Defense &amp; Finance Special Analysis</span>
          </div>
        </div>

        {/* ── Source References Section ── */}
        {article.sources && article.sources.length > 0 && (
          <section className="mt-3.5">
            <div className="rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50/50 via-white to-slate-50/50 p-4 sm:p-5 shadow-2xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 mb-3 border-b border-blue-100 gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-blue-100/90 flex items-center justify-center text-[#041f4a] shrink-0">
                    <ShieldCheck className="w-3.5 h-3.5 text-blue-700" />
                  </div>
                  <div>
                    <h2 className="font-serif text-base sm:text-lg font-bold text-[#041f4a]">
                      Sources &amp; References
                    </h2>
                  </div>
                </div>
                <Link
                  href="/source-methodology/"
                  className="text-xs font-sans text-blue-700 hover:text-[#041f4a] hover:underline inline-flex items-center gap-1"
                >
                  <span>Sourcing Methodology</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="space-y-4 text-xs sm:text-[13px] font-sans">
                {article.sources.map((source, idx) => (
                  <div key={source.url + idx} className="pl-0.5">
                    <div>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-[#041f4a] hover:text-blue-700 underline underline-offset-2 transition leading-snug break-words inline-flex items-center gap-1.5"
                      >
                        <span>{source.title}</span>
                        <ExternalLink className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                      </a>
                    </div>
                    <div className="mt-0.5">
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11.5px] text-blue-600/90 hover:text-blue-800 hover:underline break-all"
                      >
                        {source.url}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      {/* ── Related Articles (Below main prose, full max-w-4xl width) ── */}
      {clusterArticles && clusterArticles.length > 0 && (
        <section className="mt-12 pt-8 border-t border-slate-200">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-5">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#041f4a] tracking-tight">
                Related Articles
              </h2>
              <p className="text-xs sm:text-sm font-sans text-slate-600 mt-1 max-w-2xl leading-relaxed">
                In-depth reporting and strategic analysis on Julio Herrera Velutini, his international banking career, and the Herrera Velutini financial legacy.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {clusterArticles.slice(0, 4).map((item) => (
              <article
                key={item.slug}
                className="flex flex-col justify-between bg-white border border-slate-200 rounded-xl overflow-hidden hover:border-blue-400 hover:shadow-md transition-all duration-300 group"
              >
                <Link href={`/${item.category}/${item.slug}`} className="flex flex-col h-full">
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                    <Image
                      src={item.image}
                      alt={item.imageAlt ?? item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-2 left-2 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-[#041f4a]/90 text-white rounded shadow-xs">
                      {getCategoryLabel(item.category)}
                    </span>
                  </div>
                  <div className="p-3.5 flex flex-col justify-between flex-1">
                    <h3 className="font-serif text-[13.5px] font-bold text-slate-900 group-hover:text-blue-700 transition-colors line-clamp-2 leading-snug">
                      {item.title}
                    </h3>
                    <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-sans">
                      <span>{item.date}</span>
                      <span className="font-medium text-blue-700 group-hover:translate-x-0.5 transition-transform">Read &rarr;</span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
