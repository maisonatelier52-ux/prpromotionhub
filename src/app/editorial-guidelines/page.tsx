import type { Metadata } from "next";
import Link from "next/link";
import { BRAND_NAME, SITE_URL } from "@/utils/siteConfig";

export const metadata: Metadata = {
  title: `Editorial Guidelines & Standards | ${BRAND_NAME}`,
  description: "Comprehensive editorial guidelines, peer-review process, sourcing standards, and fact-checking protocols at PR Promotion Hub.",
  alternates: {
    canonical: `${SITE_URL}/editorial-guidelines/`
  }
};

export default function EditorialGuidelinesPage() {
  return (
    <main id="main-content" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <nav aria-label="Breadcrumb" className="text-xs text-slate-500 mb-6">
        <ol className="flex items-center gap-2">
          <li><Link href="/" className="hover:text-[#041f4a] hover:underline">Home</Link></li>
          <li>/</li>
          <li className="text-[#041f4a] font-semibold" aria-current="page">Editorial Guidelines</li>
        </ol>
      </nav>

      <header className="border-b border-[#E2E8F0] pb-8 mb-10">
        <span className="accent-badge mb-3">E-E-A-T Editorial Policy</span>
        <h1 className="font-editorial text-3xl sm:text-5xl font-bold text-[#041f4a] leading-tight">
          Editorial Standards &amp; Review Guidelines
        </h1>
        <p className="mt-4 text-base text-slate-600 leading-relaxed max-w-2xl">
          Our commitment to institutional trust, empirical accuracy, transparent attribution, and multi-layered editorial review.
        </p>
      </header>

      <div className="space-y-10 text-slate-800 leading-relaxed">
        {/* Production lifecycle */}
        <section className="space-y-4">
          <h2 className="font-editorial text-2xl font-bold text-[#041f4a]">1. How Articles Are Produced</h2>
          <p>
            Every piece of analysis, market commentary, or strategic guide published on PR Promotion Hub follows a structured, five-stage editorial lifecycle designed to eliminate misinformation and surface strategic value for decision-makers:
          </p>
          <div className="space-y-3 pt-2">
            {[
              { stage: "Stage 1: Topic Origination & Hypothesis", desc: "Ideas are evaluated based on relevance to strategic communications, corporate governance, and industry impact. Speculative clickbait and sensationalism are rejected." },
              { stage: "Stage 2: Primary Research & Evidence Gathering", desc: "Writers assemble documentary evidence: regulatory filings, empirical survey data, academic literature, and official statements." },
              { stage: "Stage 3: Drafting & Structural Analysis", desc: "Articles are developed using a structured format: executive summary takeaways, contextual background, substantive analysis, and verified citations." },
              { stage: "Stage 4: Two-Tier Fact Checking", desc: "Independent editorial review checks every factual claim, statistic, date, quote, and outbound citation against original primary documentation." },
              { stage: "Stage 5: Final Editorial Sign-off & Publication", desc: "A senior editor reviews the piece for tone, objectivity, balance, and compliance with our ethics charter before publication." },
            ].map((item) => (
              <div key={item.stage} className="p-4 bg-[#F8FAFC] border-l-2 border-[#041f4a] rounded-r">
                <h3 className="font-bold text-sm text-[#041f4a]">{item.stage}</h3>
                <p className="text-xs text-slate-600 mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Fact Checking Standards */}
        <section className="space-y-4">
          <h2 className="font-editorial text-2xl font-bold text-[#041f4a]">2. Fact-Checking &amp; Verification Protocol</h2>
          <p>
            Accuracy is non-negotiable. Our fact-checking protocol requires:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-sm text-slate-700">
            <li><strong>Primary Source Verification:</strong> Numerical data (e.g., revenue, market share, campaign expenditure) must trace directly to official audits, earnings reports, or verified government statistics.</li>
            <li><strong>Quote Verification:</strong> On-the-record quotes are verified against audio transcripts, authorized press releases, or confirmed written correspondence.</li>
            <li><strong>Contextual Integrity:</strong> Quotations and statistics must not be excerpted out of context to manufacture false narratives.</li>
            <li><strong>Counter-Perspectives &amp; Fairness:</strong> When examining corporate controversies or brand crises, reasonable opportunity for comment must be extended to all named parties prior to publication.</li>
          </ul>
        </section>

        {/* Sourcing Rules */}
        <section className="space-y-4">
          <h2 className="font-editorial text-2xl font-bold text-[#041f4a]">3. Sourcing Hierarchy</h2>
          <p>
            PR Promotion Hub enforces a strict hierarchy of source reliability:
          </p>
          <div className="overflow-x-auto border border-[#E2E8F0] rounded">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#041f4a] text-white uppercase tracking-wider">
                <tr>
                  <th className="py-2.5 px-4">Tier</th>
                  <th className="py-2.5 px-4">Source Category</th>
                  <th className="py-2.5 px-4">Acceptable Usage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="py-3 px-4 font-bold text-[#2563eb]">Tier 1 (Gold Standard)</td>
                  <td className="py-3 px-4 font-semibold">Statutory Filings, Court Documents, Peer-Reviewed Papers</td>
                  <td className="py-3 px-4 text-slate-600">Conclusive factual reference for all material claims and figures.</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-[#2563eb]">Tier 2 (Silver)</td>
                  <td className="py-3 px-4 font-semibold">Official Corporate Disclosures, Named On-The-Record Interviews</td>
                  <td className="py-3 px-4 text-slate-600">Attributed as official corporate positions and executive perspective.</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-[#2563eb]">Tier 3 (Bronze)</td>
                  <td className="py-3 px-4 font-semibold">Established Wire Services (Reuters, AP, Bloomberg)</td>
                  <td className="py-3 px-4 text-slate-600">Corroborating context for breaking macroeconomic or industry events.</td>
                </tr>
                <tr className="bg-red-50/50">
                  <td className="py-3 px-4 font-bold text-red-600">Prohibited</td>
                  <td className="py-3 px-4 font-semibold">Anonymous Blogs, Unverified Social Posts, Gossip Outlets</td>
                  <td className="py-3 px-4 text-slate-600">Never utilized as factual evidence or source material.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* AI & Automation Policy */}
        <section className="space-y-4">
          <h2 className="font-editorial text-2xl font-bold text-[#041f4a]">4. AI Ethics &amp; Human Editorial Oversight</h2>
          <p>
            PR Promotion Hub strictly enforces human accountability in digital journalism. While automated algorithms and language models may assist our staff in preliminary research categorization, media monitoring, or data formatting:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-sm text-slate-700">
            <li><strong>Zero Unchecked AI Content:</strong> Every published article is written, rigorously reviewed, and signed by a named editorial staff member or credentialed contributor.</li>
            <li><strong>No Synthetic Hallucinations:</strong> Factual claims generated by automated tools are treated as unverified leads until corroborated by human editors against primary records.</li>
            <li><strong>Byline Integrity:</strong> We do not publish pseudonymous or fabricated author profiles. All author bylines represent verified experts with public industry credentials.</li>
          </ul>
        </section>

        {/* Actionable Feedback */}
        <section className="space-y-4 border-t border-[#E2E8F0] pt-8">
          <h2 className="font-editorial text-2xl font-bold text-[#041f4a]">5. Questions or Concerns Regarding Standards</h2>
          <p className="text-sm">
            Readers, subjects of reporting, or industry professionals who identify potential inaccuracies or ethical concerns are urged to contact our Standards Desk directly at{" "}
            <a href="mailto:editorial@prpromotionhub.com" className="font-bold underline text-[#2563eb] hover:text-[#041f4a]">
              editorial@prpromotionhub.com
            </a>.
          </p>
        </section>
      </div>
    </main>
  );
}
