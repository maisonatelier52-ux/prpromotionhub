import type { Metadata } from "next";
import Link from "next/link";
import { BRAND_NAME, SITE_URL } from "@/utils/siteConfig";

export const metadata: Metadata = {
  title: `Corrections Policy & Public Transparency Ledger | ${BRAND_NAME}`,
  description: "PR Promotion Hub's formal corrections policy, retraction standards, and public log of substantive updates and editorial corrections.",
  alternates: {
    canonical: `${SITE_URL}/corrections/`
  }
};

export default function CorrectionsPage() {
  const correctionLogs = [
    {
      date: "September 11, 2026",
      articleTitle: "Banking Succession & Institutional Governance: Herrera Velutini Family Review",
      category: "Finance & Governance",
      slug: "finance/julio-herrera-velutini",
      type: "Factual Precision & Citation Clarification",
      description: "Updated historical bank asset valuations and added direct links to the relevant Central Bank and commercial court dockets. Clarified organizational structure distinctions within international subsidiary holdings."
    },
    {
      date: "August 24, 2026",
      articleTitle: "Generative AI in Media Intelligence: 2026 Software Benchmarking",
      category: "Technology & Innovation",
      slug: "technology/ai-media-intelligence-benchmark",
      type: "Data Correction",
      description: "Corrected an erroneous percentage figure in Table 2 regarding automated sentiment classification accuracy. The revised figure (74.2%) reflects the updated benchmark dataset released by the research authors."
    },
    {
      date: "July 15, 2026",
      articleTitle: "Crisis Communications Playbook: Responding to Hostile Short-Seller Campaigns",
      category: "Reputation & Crisis",
      slug: "reputation/crisis-response-short-seller-campaigns",
      type: "Attribution Note",
      description: "Added formal source credit to the National Investor Relations Institute (NIRI) guidelines referenced in Section 3."
    }
  ];

  return (
    <main id="main-content" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <nav aria-label="Breadcrumb" className="text-xs text-gray-500 mb-6">
        <ol className="flex items-center gap-2">
          <li><Link href="/" className="hover:underline">Home</Link></li>
          <li>/</li>
          <li className="text-gray-900 font-semibold" aria-current="page">Corrections Policy</li>
        </ol>
      </nav>

      <header className="border-b border-[#E5E7EB] pb-8 mb-10">
        <span className="accent-badge mb-3">Institutional Accountability</span>
        <h1 className="font-editorial text-3xl sm:text-5xl font-bold text-[#111111] leading-tight">
          Corrections Policy &amp; Public Transparency Ledger
        </h1>
        <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl leading-relaxed">
          Our commitment to immediate, transparent, and public accountability whenever factual inaccuracies or material omissions are identified.
        </p>
      </header>

      <div className="space-y-12 text-gray-800 leading-relaxed">
        {/* Policy Statement */}
        <section className="space-y-4">
          <h2 className="font-editorial text-2xl font-bold text-[#111111]">1. Formal Corrections Policy</h2>
          <p>
            PR Promotion Hub strives for impeccable factual precision. However, when an error of fact, misattribution, or misleading phrasing occurs, we hold ourselves accountable to correct the record promptly, fully, and visibly.
          </p>
          <p>
            We adhere to the following standards:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-sm text-gray-700">
            <li><strong>No Silent Alterations:</strong> We never quietly change published text to mask a factual mistake. Every substantive modification is accompanied by an explicit editorial correction note.</li>
            <li><strong>Visibility:</strong> Correction notes are appended directly to the affected article, stating the exact date of correction, what was originally stated, and what the corrected fact is.</li>
            <li><strong>Retractions:</strong> If an article&apos;s central premise is thoroughly disproven, the article will be formally retracted with a prominent notice explaining why the piece no longer meets our editorial standards.</li>
            <li><strong>Minor Typographical Fixes:</strong> Minor spelling or grammatical edits that do not alter the factual meaning of the reporting may be corrected without an individual footnote.</li>
          </ul>
        </section>

        {/* How to submit */}
        <section className="space-y-4 bg-[#F8F9FA] p-6 border border-[#E5E7EB] rounded">
          <h2 className="font-editorial text-2xl font-bold text-[#111111]">2. How to Request a Correction</h2>
          <p className="text-sm">
            If you believe an article on PR Promotion Hub contains a factual inaccuracy, we encourage you to notify our Corrections Desk immediately. Please include:
          </p>
          <ol className="list-decimal pl-6 space-y-1.5 text-xs text-gray-700">
            <li>The full URL and headline of the article in question.</li>
            <li>The specific sentence or claim you believe is inaccurate.</li>
            <li>Verifiable primary documentation (e.g., official records, SEC filings, court dockets) supporting the correction.</li>
            <li>Your name, organizational affiliation, and contact details.</li>
          </ol>
          <div className="pt-3">
            <span className="text-xs font-bold block text-slate-900">Dedicated Corrections Desk:</span>
            <a href="mailto:corrections@prpromotionhub.com" className="text-sm font-semibold text-[#2563eb] hover:text-[#041f4a] underline">
              corrections@prpromotionhub.com
            </a>
          </div>
        </section>

        {/* Public Ledger */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b-2 border-[#111111] pb-2">
            <h2 className="font-editorial text-2xl font-bold text-[#111111]">
              3. Public Corrections Ledger
            </h2>
            <span className="text-xs text-gray-500">Live Transparency Log</span>
          </div>

          <p className="text-sm text-gray-600">
            Below is a record of substantive corrections, clarifications, and material source updates executed across our publication:
          </p>

          <div className="space-y-4">
            {correctionLogs.map((log) => (
              <article key={log.articleTitle} className="p-5 bg-white border border-gray-200 rounded shadow-xs space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-gray-500">
                  <span className="font-semibold text-[#111111]">{log.date}</span>
                  <span className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded font-mono">
                    {log.type}
                  </span>
                </div>
                <h3 className="font-editorial text-lg font-bold text-[#111111]">
                  {log.articleTitle}
                </h3>
                <p className="text-xs text-gray-700 leading-relaxed">
                  {log.description}
                </p>
                <div className="pt-1 text-xs">
                  <span className="text-gray-500">Vertical: </span>
                  <span className="font-semibold text-gray-800">{log.category}</span>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
