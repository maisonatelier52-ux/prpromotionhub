import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { RESEARCH_REPORTS } from "@/utils/researchData";
import { BRAND_NAME, SITE_URL } from "@/utils/siteConfig";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return RESEARCH_REPORTS.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const report = RESEARCH_REPORTS.find((r) => r.slug === slug);
  if (!report) return {};

  const pageUrl = `${SITE_URL}/research/${report.slug}/`;

  return {
    title: `${report.title} | ${BRAND_NAME} Executive Research`,
    description: report.description,
    alternates: { canonical: pageUrl },
    openGraph: {
      title: report.title,
      description: report.description,
      url: pageUrl,
      type: "article",
      images: [{ url: report.coverImage, width: 1200, height: 630, alt: report.title }],
    },
  };
}

export default async function ReportDetailPage({ params }: Props) {
  const { slug } = await params;
  const report = RESEARCH_REPORTS.find((r) => r.slug === slug);
  if (!report) notFound();

  return (
    <main id="main-content" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <nav aria-label="Breadcrumb" className="text-xs text-slate-500 mb-6">
        <ol className="flex items-center gap-2">
          <li><Link href="/" className="hover:text-[#041f4a] hover:underline">Home</Link></li>
          <li>/</li>
          <li><Link href="/research/" className="hover:text-[#041f4a] hover:underline">Research</Link></li>
          <li>/</li>
          <li className="text-[#041f4a] font-semibold" aria-current="page">{report.title}</li>
        </ol>
      </nav>

      <header className="border-b border-[#E2E8F0] pb-8 mb-10">
        <div className="flex items-center gap-2 mb-3">
          <span className="accent-badge">{report.category}</span>
          <span className="text-xs text-slate-500">• {report.publishDate}</span>
        </div>
        <h1 className="font-editorial text-3xl sm:text-5xl font-bold text-[#041f4a] leading-tight">
          {report.title}
        </h1>
        <p className="mt-4 text-lg text-slate-700 font-medium italic leading-relaxed">
          {report.subtitle}
        </p>
      </header>

      <div className="space-y-10">
        {/* Cover Image & Metadata Card */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-[#F8FAFC] border border-[#E2E8F0] p-6 rounded-lg">
          <div className="md:col-span-5 relative aspect-[4/3] rounded overflow-hidden shadow-xs border border-slate-200">
            <Image
              src={report.coverImage}
              alt={report.title}
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
              priority
            />
          </div>
          <div className="md:col-span-7 space-y-3 text-xs text-slate-700">
            <div>
              <span className="font-bold text-[#041f4a] block">Lead Author / Research Desk:</span>
              <span>{report.author}</span>
            </div>
            <div>
              <span className="font-bold text-[#041f4a] block">Document Scope:</span>
              <span>{report.pages} Pages, Complete Analytical Matrix</span>
            </div>
            <div>
              <span className="font-bold text-[#041f4a] block">Format:</span>
              <span>{report.format}</span>
            </div>
            <div className="pt-3">
              <a
                href="#download-access"
                className="w-full sm:w-auto bg-[#041f4a] text-white font-bold px-6 py-3 rounded hover:bg-[#2563eb] transition text-xs text-center inline-block"
              >
                Download Full Executive Report (PDF) &darr;
              </a>
            </div>
          </div>
        </div>

        {/* Executive Overview */}
        <section className="space-y-4 leading-relaxed text-slate-800">
          <h2 className="font-editorial text-2xl font-bold text-[#041f4a]">Executive Summary &amp; Scope</h2>
          <p>{report.description}</p>
          <p>
            Commissioned by the PR Promotion Hub Research Collective, this study synthesizes empirical data, primary corporate disclosures, and interviews with senior communications executives. The goal is to establish baseline metrics for modern communications performance, risk mitigation, and algorithmic narrative stewardship.
          </p>
        </section>

        {/* Key Findings */}
        <section className="space-y-4">
          <h2 className="font-editorial text-2xl font-bold text-[#041f4a]">Core Empirical Findings</h2>
          <div className="space-y-3">
            {report.keyFindings.map((finding, idx) => (
              <div key={finding} className="p-4 bg-white border border-slate-200 rounded flex gap-4 items-start shadow-xs">
                <span className="w-6 h-6 rounded-full bg-[#041f4a] text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <p className="text-sm text-slate-800 leading-relaxed font-medium">{finding}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Citation & Methodology */}
        <section id="download-access" className="border-t border-[#E2E8F0] pt-8 space-y-3 text-xs text-slate-600">
          <h3 className="font-bold text-[#041f4a] uppercase tracking-wider">Citation &amp; Academic Reference</h3>
          <p>
            To cite this study in corporate reports or academic literature:
          </p>
          <div className="p-3 bg-slate-100 rounded font-mono text-[11px] text-slate-800 break-all border border-slate-200">
            PR Promotion Hub Research Collective ({report.publishDate.slice(0, 4)}). &ldquo;{report.title}: {report.subtitle}&rdquo;. PR Promotion Hub Digital Publication. {SITE_URL}/research/{report.slug}/
          </div>
        </section>
      </div>
    </main>
  );
}
