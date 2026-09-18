import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { RESEARCH_REPORTS } from "@/utils/researchData";
import { BRAND_NAME, SITE_URL } from "@/utils/siteConfig";

export const metadata: Metadata = {
  title: `Industry Research & Executive Reports 2026 | ${BRAND_NAME}`,
  description: "Downloadable benchmarking studies, empirical surveys, and whitepapers on the state of corporate communication, AI in PR, and reputation defense.",
  alternates: {
    canonical: `${SITE_URL}/research/`
  }
};

export default function ResearchPage() {
  return (
    <main id="main-content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <nav aria-label="Breadcrumb" className="text-xs text-slate-500 mb-6">
        <ol className="flex items-center gap-2">
          <li><Link href="/" className="hover:text-[#041f4a] hover:underline">Home</Link></li>
          <li>/</li>
          <li className="text-[#041f4a] font-semibold" aria-current="page">Research &amp; Reports</li>
        </ol>
      </nav>

      <header className="border-b border-[#E2E8F0] pb-8 mb-12">
        <span className="accent-badge mb-3">Intelligence &amp; Benchmarks</span>
        <h1 className="font-editorial text-3xl sm:text-5xl font-bold text-[#041f4a] leading-tight">
          Executive Research &amp; Industry Reports
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
          Empirical data, CCO benchmarking surveys, and tactical playbooks for communications leaders navigating algorithmic media landscapes and reputation risk.
        </p>
      </header>

      <div className="space-y-12">
        {RESEARCH_REPORTS.map((report, idx) => (
          <article
            key={report.id}
            className="flex flex-col lg:flex-row gap-8 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg p-6 sm:p-8 hover:border-[#2563eb] transition shadow-2xs group"
          >
            {/* Cover image / preview */}
            <div className="lg:w-1/3 flex-shrink-0">
              <div className="relative aspect-[4/3] rounded overflow-hidden border border-slate-200 shadow-xs">
                <Image
                  src={report.coverImage}
                  alt={report.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover group-hover:scale-103 transition duration-300"
                  priority={idx === 0}
                />
                <div className="absolute top-3 left-3 bg-[#041f4a]/90 backdrop-blur-xs text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                  {report.category}
                </div>
              </div>
            </div>

            {/* Details */}
            <div className="lg:w-2/3 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mb-2">
                  <span>Published: <strong>{report.publishDate}</strong></span>
                  <span>•</span>
                  <span>Scope: <strong>{report.pages} Pages ({report.format})</strong></span>
                  <span>•</span>
                  <span>Lead Author: <strong>{report.author}</strong></span>
                </div>

                <Link href={`/research/${report.slug}/`}>
                  <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#041f4a] group-hover:text-[#2563eb] transition leading-snug">
                    {report.title}
                  </h2>
                </Link>

                <p className="text-sm font-medium text-slate-700 italic mt-1 mb-3">
                  {report.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {report.description}
                </p>

                {/* Key findings */}
                <div className="mt-4 pt-4 border-t border-slate-200">
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-[#041f4a] mb-2">
                    Executive Key Findings:
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                    {report.keyFindings.map((finding) => (
                      <li key={finding} className="flex items-start gap-2">
                        <span className="text-[#2563eb] font-bold text-sm leading-none">•</span>
                        <span>{finding}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <span className="text-xs text-slate-500">
                  Complimentary Open-Access Research Edition
                </span>
                <Link
                  href={`/research/${report.slug}/`}
                  className="inline-flex items-center justify-center bg-[#041f4a] text-white text-xs font-bold px-5 py-2.5 rounded hover:bg-[#2563eb] transition shadow-xs"
                >
                  Read Executive Summary &amp; Access PDF &rarr;
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
