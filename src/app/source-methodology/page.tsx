import type { Metadata } from "next";
import Link from "next/link";
import { 
  FileText, 
  CheckCircle, 
  ShieldCheck, 
  Layers, 
  Link2, 
  AlertCircle, 
  Info, 
  ArrowRight,
  BookmarkCheck
} from "lucide-react";

export const metadata: Metadata = {
  title: "Source Methodology | PR Promotion Hub",
  description: "Learn how PR Promotion Hub sources, verifies, and attributes the news and press releases we publish. We hold ourselves to standard journalistic integrity and transparency.",
  openGraph: {
    title: "Source Methodology | PR Promotion Hub",
    description: "Learn how PR Promotion Hub sources, verifies, and attributes the news and press releases we publish. We hold ourselves to standard journalistic integrity and transparency.",
    url: "https://www.prpromotionhub.com/source-methodology",
    type: "website",
  },
  alternates: {
    canonical: "https://www.prpromotionhub.com/source-methodology",
  }
};

export default function SourceMethodology() {
  const sections = [
    { id: "overview", label: "Overview", icon: <Info size={18} /> },
    { id: "how-reporting-begins", label: "How Reporting Begins", icon: <FileText size={18} /> },
    { id: "source-hierarchy", label: "Source Hierarchy", icon: <Layers size={18} /> },
    { id: "verification-process", label: "Verification Process", icon: <CheckCircle size={18} /> },
    { id: "attribution-transparency", label: "Attribution & Links", icon: <Link2 size={18} /> },
    { id: "independence-disclosures", label: "Independence & Sponsored", icon: <ShieldCheck size={18} /> },
    { id: "corrections-policy", label: "Updates & Corrections", icon: <AlertCircle size={18} /> },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <header className="max-w-6xl mx-auto px-4 pb-5 md:pb-10 text-center border-b border-gray-200">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Source Methodology
          </h1>
          <p className="text-gray-500 text-lg max-w-3xl mx-auto leading-relaxed">
            PR Promotion Hub aims to show readers how articles are built: what is sourced directly, what comes from public records or official documents, what remains unverified, and where interpretation begins.
          </p>
        </header>

        <main className="max-w-6xl mx-auto py-5 md:py-12">
          <div className="grid lg:grid-cols-[250px_1fr] gap-10 md:gap-16">
            {/* Sticky Sidebar Navigation */}
            <aside className="lg:w-64 shrink-0">
              <div className="sticky top-10 space-y-4">
                <p className="text-xs uppercase tracking-widest font-bold text-gray-400">Methodology Contents</p>
                <nav className="flex flex-col gap-2">
                  {sections.map((s) => (
                    <Link
                      key={s.id}
                      href={`#${s.id}`}
                      className="flex items-center gap-3 text-sm font-medium text-gray-600 hover:text-[#041f4a] p-2 rounded-lg hover:bg-gray-100 transition-all duration-200"
                    >
                      <span className="text-gray-400 group-hover:text-[#041f4a]">{s.icon}</span>
                      {s.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Main Content Area */}
            <div className="flex-1 space-y-12 md:space-y-16">
              {/* Overview Section */}
              <section id="overview" className="scroll-mt-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3 border-b pb-3">
                  <span className="p-2 bg-blue-50 text-[#041f4a] rounded-lg"><Info size={24} /></span>
                  1. Overview & Commitment
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-4">
                  <p>
                    At <strong>PR Promotion Hub</strong>, we believe that transparency is the foundation of trust. In an era where information spreads rapidly across digital networks, readers deserve to know the origins of the news, press releases, and editorial analyses they consume.
                  </p>
                  <p>
                    Our Source Methodology is a set of standards that governs how we gather, evaluate, and attribute information. By establishing a uniform workflow, we ensure that every story published on our platform meets our criteria for authenticity, precision, and journalistic integrity.
                  </p>
                </div>
              </section>

              {/* How Reporting Begins */}
              <section id="how-reporting-begins" className="scroll-mt-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3 border-b pb-3">
                  <span className="p-2 bg-blue-50 text-[#041f4a] rounded-lg"><FileText size={24} /></span>
                  2. How Reporting Begins
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-4">
                  <p>
                    PR Promotion Hub aims to begin with verifiable material rather than recycled summaries from other publications. Before a draft is written, our editorial team searches for original records to verify the underlying facts.
                  </p>
                  <p>
                    Original materials include:
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-3 list-none p-0 my-4">
                    {[
                      "Official corporate press releases",
                      "SEC and regulatory filings",
                      "Government announcements",
                      "Direct interviews & quotes",
                      "Academic and research papers",
                      "Legal transcripts & court records"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-600 bg-white p-3 rounded-lg border border-gray-200 shadow-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p>
                    By focusing on primary data and direct correspondence, we reduce the risk of compounding errors commonly introduced by secondary summary blogs.
                  </p>
                </div>
              </section>

              {/* Source Hierarchy */}
              <section id="source-hierarchy" className="scroll-mt-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3 border-b pb-3">
                  <span className="p-2 bg-blue-50 text-[#041f4a] rounded-lg"><Layers size={24} /></span>
                  3. Source Hierarchy
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-4">
                  <p>
                    To maintain editorial consistency, we classify information sources based on their directness and verification levels:
                  </p>
                  <div className="space-y-4 mt-6">
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-xs font-semibold">1</span>
                        Primary Sources (First-Hand)
                      </h3>
                      <p className="text-sm text-gray-600">
                        Documents, recordings, or statements directly created by the subject under study. Examples: official press releases distributed by authorized corporate communications departments, certified corporate filings, direct quotes from spokespersons, and public datasets published by recognized agencies.
                      </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-semibold">2</span>
                        Secondary Sources (Second-Hand)
                      </h3>
                      <p className="text-sm text-gray-600">
                        Information compiled and analyzed by external entities. Examples: investigative reports from peer publications, industry research reviews, expert blog posts, or analytical reviews. We use secondary sources only when the primary document is inaccessible, and we always explicitly mention the original publisher.
                      </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-yellow-100 text-yellow-700 flex items-center justify-center text-xs font-semibold">3</span>
                        Unverified or Unconfirmed Reports
                      </h3>
                      <p className="text-sm text-gray-600">
                        Anonymous tips, social media speculation, or industry rumors. If an article mentions unverified claims, we clearly label them as "unconfirmed" or "rumored" to avoid presenting speculation as established fact.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Verification Process */}
              <section id="verification-process" className="scroll-mt-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3 border-b pb-3">
                  <span className="p-2 bg-blue-50 text-[#041f4a] rounded-lg"><CheckCircle size={24} /></span>
                  4. Fact-Checking & Verification Process
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-4">
                  <p>
                    Since PR Promotion Hub publishes corporate press releases and news stories, we implement a multi-stage review process to prevent fraud and misinformation:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div className="p-5 border border-gray-200 bg-white rounded-xl">
                      <h4 className="font-bold text-[#041f4a] mb-2 flex items-center gap-2">
                        <BookmarkCheck size={18} className="text-blue-600" />
                        Identity Verification
                      </h4>
                      <p className="text-sm text-gray-600">
                        For user-submitted press releases, we verify that the submitter is an authorized representative of the company using email domain verification, secondary contact checks, and corporate credential validation.
                      </p>
                    </div>
                    <div className="p-5 border border-gray-200 bg-white rounded-xl">
                      <h4 className="font-bold text-[#041f4a] mb-2 flex items-center gap-2">
                        <BookmarkCheck size={18} className="text-blue-600" />
                        Claim Substantiation
                      </h4>
                      <p className="text-sm text-gray-600">
                        Statements concerning financial transactions, regulatory approvals, or partnership claims must be accompanied by supporting proof, such as institutional links, filing numbers, or official public announcements.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Attribution and Links */}
              <section id="attribution-transparency" className="scroll-mt-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3 border-b pb-3">
                  <span className="p-2 bg-blue-50 text-[#041f4a] rounded-lg"><Link2 size={24} /></span>
                  5. Attribution & Citation Guidelines
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-4">
                  <p>
                    We believe that a transparent article must allow readers to check the raw sources themselves. Therefore, we mandate the following citation practices:
                  </p>
                  <ul className="space-y-4 list-none p-0">
                    <li className="flex gap-3">
                      <ArrowRight className="text-blue-600 shrink-0 mt-1" size={16} />
                      <div>
                        <strong>Hyperlink Citations:</strong> Wherever we mention figures, reports, or press release announcements, we insert direct hyperlinks to the original host site (e.g. linking to an SEC report on SEC.gov, or the original PDF of the press release).
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <ArrowRight className="text-blue-600 shrink-0 mt-1" size={16} />
                      <div>
                        <strong>Context Preservation:</strong> We strive to quote sources in context, ensuring that quotes are not edited to alter their original intent.
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <ArrowRight className="text-blue-600 shrink-0 mt-1" size={16} />
                      <div>
                        <strong>No Pseudonymous Citations without Cause:</strong> We only use unnamed or pseudonymous sources when their safety or employment is at risk, and when the value of the information they provide significantly outweighs the lack of identification.
                      </div>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Independence & Sponsored Content Disclosures */}
              <section id="independence-disclosures" className="scroll-mt-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3 border-b pb-3">
                  <span className="p-2 bg-blue-50 text-[#041f4a] rounded-lg"><ShieldCheck size={24} /></span>
                  6. Independence & Commercial Disclosures
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-4">
                  <p>
                    PR Promotion Hub maintains a strict separation between editorial content and sponsored distribution.
                  </p>
                  <div className="bg-blue-50 border border-blue-200 p-6 rounded-2xl text-blue-900 my-6">
                    <h4 className="font-bold mb-2">Sponsored Content and Distribution Rules:</h4>
                    <p className="text-sm leading-relaxed mb-3">
                      Any article, press release, or post that is published due to a commercial relationship, payment, or promotion is clearly and prominently labeled as <strong>"Sponsored"</strong>, <strong>"Paid Press Release"</strong>, or <strong>"Partner Content"</strong>.
                    </p>
                    <p className="text-sm leading-relaxed">
                      Our editorial team has no influence over paid distributions, and sponsors have no influence over our editorial reporting.
                    </p>
                  </div>
                </div>
              </section>

              {/* Updates & Corrections Policy */}
              <section id="corrections-policy" className="scroll-mt-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3 border-b pb-3">
                  <span className="p-2 bg-blue-50 text-[#041f4a] rounded-lg"><AlertCircle size={24} /></span>
                  7. Updates & Corrections Policy
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-4">
                  <p>
                    If a primary source updates their records or if we discover that we published inaccurate information, we take swift action:
                  </p>
                  <ul className="space-y-3 list-none p-0">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold shrink-0 mt-0.5">•</span>
                      <span>We correct the error immediately within the body of the article.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold shrink-0 mt-0.5">•</span>
                      <span>A clear update note is added to the top or bottom of the article specifying what was updated, the date of the correction, and why the change was made.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold shrink-0 mt-0.5">•</span>
                      <span>If you identify a sourcing error in our articles, please refer to our <Link href="/contact" className="text-[#041f4a] font-semibold underline hover:text-blue-800">Contact Us</Link> page.</span>
                    </li>
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </main>

        {/* Footer Navigation CTA */}
        <footer className="bg-gray-100 border-t border-gray-200 py-10 mt-10 rounded-2xl">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Commitment to Journalistic Integrity
            </h2>
            <p className="text-gray-600 mb-6 max-w-lg mx-auto">
              Our source methodology works hand-in-hand with our Editorial Policy to ensure honest and transparent journalism.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/editorial" 
                title="editorial"
                className="px-6 py-3 bg-[#041f4a] text-white rounded-full font-bold hover:bg-blue-900 transition-all shadow-sm"
              >
                Read Editorial Policy
              </Link>
              <Link 
                href="/contact" 
                title="contact"
                className="px-6 py-3 bg-white text-gray-700 border border-gray-300 rounded-full font-bold hover:bg-gray-50 transition-all shadow-sm"
              >
                Contact Editorial Team
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
