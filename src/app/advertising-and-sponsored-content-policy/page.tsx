import type { Metadata } from "next";
import Link from "next/link";
import { 
  Megaphone, 
  ShieldCheck, 
  Scale, 
  AlertTriangle, 
  Info, 
  Mail,
  ArrowRight,
  FileText
} from "lucide-react";

export const metadata: Metadata = {
  title: "Advertising & Sponsored Content Policy | PR Promotion Hub",
  description: "Read the PR Promotion Hub Advertising and Sponsored Content Policy. Learn how we distinguish paid content from independent journalism and our advertising standards.",
  openGraph: {
    title: "Advertising & Sponsored Content Policy | PR Promotion Hub",
    description: "Read the PR Promotion Hub Advertising and Sponsored Content Policy. Learn how we distinguish paid content from independent journalism and our advertising standards.",
    url: "https://www.prpromotionhub.com/advertising-and-sponsored-content-policy",
    type: "website",
  },
  alternates: {
    canonical: "https://www.prpromotionhub.com/advertising-and-sponsored-content-policy",
  }
};

export default function AdvertisingAndSponsoredContentPolicy() {
  const sections = [
    { id: "overview", label: "Overview", icon: <Info size={18} /> },
    { id: "advertising-principles", label: "Advertising Principles", icon: <Megaphone size={18} /> },
    { id: "sponsored-labeling", label: "Sponsored Content & Labels", icon: <FileText size={18} /> },
    { id: "prohibited-ads", label: "Prohibited Categories", icon: <AlertTriangle size={18} /> },
    { id: "editorial-autonomy", label: "Editorial Autonomy", icon: <Scale size={18} /> },
    { id: "advertiser-responsibilities", label: "Advertiser Compliance", icon: <ShieldCheck size={18} /> },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <header className="max-w-6xl mx-auto px-4 pb-5 md:pb-10 text-center border-b border-gray-200">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Advertising & Sponsored Content Policy
          </h1>
          <p className="text-gray-500 text-lg max-w-3xl mx-auto leading-relaxed">
            PR Promotion Hub accepts advertising and sponsored content. Here, we outline the rules that govern paid promotions and our dedication to maintaining reader trust.
          </p>
        </header>

        <main className="max-w-6xl mx-auto py-5 md:py-12">
          <div className="grid lg:grid-cols-[250px_1fr] gap-10 md:gap-16">
            {/* Sticky Sidebar Navigation */}
            <aside className="lg:w-64 shrink-0">
              <div className="sticky top-10 space-y-4">
                <p className="text-xs uppercase tracking-widest font-bold text-gray-400">Policy Contents</p>
                <nav className="flex flex-col gap-2">
                  {sections.map((s) => (
                    <Link
                      key={s.id}
                      href={`#${s.id}`}
                      className="flex items-center gap-3 text-sm font-medium text-gray-600 hover:text-[#041f4a] p-2 rounded-lg hover:bg-gray-100 transition-all duration-200"
                    >
                      <span className="text-gray-400">{s.icon}</span>
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
                  1. Overview & Core Philosophy
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-4">
                  <p>
                    At <strong>PR Promotion Hub</strong>, our primary mission is to deliver reliable public relations news, marketing insights, and business coverage. To support our platform, keep our news free to access, and maintain our distribution network, we accept commercial advertisements and sponsored distributions.
                  </p>
                  <p>
                    We believe that advertising can be highly valuable when it is transparent and honest. The purpose of this policy is to establish clear rules for what kinds of ads we accept, how we label promotional content, and how we protect our audience from deceptive commercial practices.
                  </p>
                </div>
              </section>

              {/* Advertising Principles */}
              <section id="advertising-principles" className="scroll-mt-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3 border-b pb-3">
                  <span className="p-2 bg-blue-50 text-[#041f4a] rounded-lg"><Megaphone size={24} /></span>
                  2. General Advertising Principles
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-4">
                  <p>
                    All advertising published on our platform must align with the following general standards:
                  </p>
                  <ul className="space-y-4 list-none p-0 my-4">
                    <li className="flex gap-3">
                      <ArrowRight className="text-blue-600 shrink-0 mt-1" size={16} />
                      <div>
                        <strong>Separation:</strong> Advertisements must be visually distinct from editorial articles. They are placed in dedicated slots or wrapped in borders to prevent confusion.
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <ArrowRight className="text-blue-600 shrink-0 mt-1" size={16} />
                      <div>
                        <strong>No Endorsement:</strong> The presence of an advertisement on PR Promotion Hub does not constitute an endorsement by our team of the product, service, or company advertised.
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <ArrowRight className="text-blue-600 shrink-0 mt-1" size={16} />
                      <div>
                        <strong>Right of Refusal:</strong> We reserve the absolute right to reject, cancel, or remove any advertisement at any time, for any reason, particularly if we believe it harms reader trust or safety.
                      </div>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Sponsored Content & Labeling */}
              <section id="sponsored-labeling" className="scroll-mt-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3 border-b pb-3">
                  <span className="p-2 bg-blue-50 text-[#041f4a] rounded-lg"><FileText size={24} /></span>
                  3. Sponsored Content & Transparency Labeling
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-4">
                  <p>
                    Sponsored content refers to articles, reports, or press releases that are published on our site in exchange for financial compensation. To ensure complete clarity, we enforce the following labeling standards:
                  </p>
                  <div className="space-y-4 mt-6">
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                        Mandatory Disclosures
                      </h3>
                      <p className="text-sm text-gray-600">
                        Any paid write-up, promotional distribution, or advertiser-funded post must feature a prominent header disclosure at the top of the page. Typical labels include: <strong>"Sponsored"</strong>, <strong>"Paid Press Release"</strong>, or <strong>"Partner Content"</strong>.
                      </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                        Search Engine Guidelines
                      </h3>
                      <p className="text-sm text-gray-600">
                        In accordance with search engine quality guidelines, all outbound links in sponsored articles are marked with the `rel="sponsored"` or `rel="nofollow"` attributes to prevent manipulation of organic search rankings.
                      </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                        Visual Styling
                      </h3>
                      <p className="text-sm text-gray-600">
                        Sponsored content may be styled slightly differently or have a specific tag indicator to distinguish it from organic, journalist-authored news posts.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Prohibited Categories */}
              <section id="prohibited-ads" className="scroll-mt-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3 border-b pb-3">
                  <span className="p-2 bg-blue-50 text-[#041f4a] rounded-lg"><AlertTriangle size={24} /></span>
                  4. Prohibited Advertising Categories
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-4">
                  <p>
                    To protect our audience, we do not accept advertisements or paid distributions related to the following categories:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mt-6">
                    {[
                      "Deceptive or misleading product claims",
                      "Get-rich-quick schemes or unverified financial advice",
                      "Adult or sexually explicit content",
                      "Weapons, ammunition, and explosive materials",
                      "Tobacco, e-cigarettes, and illegal substances",
                      "Hate speech, harassment, or highly polarizing political campaigns",
                      "Malware, phishing links, or spy software",
                      "Miracle cures, unapproved medical supplements, or dangerous drugs"
                    ].map((item, index) => (
                      <div key={index} className="flex gap-2 items-start p-3 bg-red-50/50 border border-red-100 rounded-lg text-red-900 text-sm">
                        <AlertTriangle size={16} className="text-red-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Editorial Autonomy */}
              <section id="editorial-autonomy" className="scroll-mt-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3 border-b pb-3">
                  <span className="p-2 bg-blue-50 text-[#041f4a] rounded-lg"><Scale size={24} /></span>
                  5. Editorial Autonomy & "Pay-to-Play" Rules
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-4">
                  <p>
                    We operate our commercial department and our newsroom independently.
                  </p>
                  <div className="bg-blue-50 border border-blue-200 p-6 rounded-2xl text-blue-900 my-6">
                    <h4 className="font-bold mb-2">Key Autonomy Principles:</h4>
                    <p className="text-sm leading-relaxed mb-3">
                      <strong>No Editorial Influence:</strong> Advertisers and sponsors have no voice in our editorial planning or review process. They cannot dictate the angles of our coverage, modify a draft, or veto a piece of critical news.
                    </p>
                    <p className="text-sm leading-relaxed">
                      <strong>Critical Coverage:</strong> Purchasing advertising or press release packages does not shield a company from critical reporting if they are involved in public controversies or legal disputes.
                    </p>
                  </div>
                </div>
              </section>

              {/* Advertiser Responsibilities */}
              <section id="advertiser-responsibilities" className="scroll-mt-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3 border-b pb-3">
                  <span className="p-2 bg-blue-50 text-[#041f4a] rounded-lg"><ShieldCheck size={24} /></span>
                  6. Advertiser Compliance & Legal Accountability
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-4">
                  <p>
                    Advertisers must assume full responsibility for the legality of their promotions:
                  </p>
                  <ul className="space-y-3 list-none p-0">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold shrink-0 mt-0.5">•</span>
                      <span>Advertisers must comply with all regional guidelines, including the Federal Trade Commission (FTC) guidelines on disclosures and truth-in-advertising rules.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold shrink-0 mt-0.5">•</span>
                      <span>All claims made in advertisements (such as percentages, pricing, or product efficacy) must be substantiable by the advertiser upon request.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold shrink-0 mt-0.5">•</span>
                      <span>Advertisers agree to indemnify PR Promotion Hub against any legal claims or losses arising from their advertisements.</span>
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
              Interested in Advertising or Distributing PR?
            </h2>
            <p className="text-gray-600 mb-6 max-w-lg mx-auto">
              For pricing sheets, audience demographics, or to submit a press release distribution order, get in touch with our ad operations team.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/contact" 
                title="contact"
                className="px-6 py-3 bg-[#041f4a] text-white rounded-full font-bold hover:bg-blue-900 transition-all shadow-sm flex items-center gap-2 justify-center"
              >
                <Mail size={18} /> Submit Advertising Inquiry
              </Link>
              <Link 
                href="/terms-and-conditions" 
                title="terms-and-conditions"
                className="px-6 py-3 bg-white text-gray-700 border border-gray-300 rounded-full font-bold hover:bg-gray-50 transition-all shadow-sm"
              >
                View Terms of Service
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
