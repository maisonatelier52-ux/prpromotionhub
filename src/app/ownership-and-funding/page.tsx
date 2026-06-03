import type { Metadata } from "next";
import Link from "next/link";
import { 
  Building2, 
  DollarSign, 
  Scale, 
  ShieldCheck, 
  Info, 
  Mail,
  ArrowRight,
  TrendingUp
} from "lucide-react";

export const metadata: Metadata = {
  title: "Ownership & Funding | PR Promotion Hub",
  description: "Read about the ownership structure and funding models of PR Promotion Hub. We disclose our revenue streams and corporate governance to ensure transparency.",
  openGraph: {
    title: "Ownership & Funding | PR Promotion Hub",
    description: "Read about the ownership structure and funding models of PR Promotion Hub. We disclose our revenue streams and corporate governance to ensure transparency.",
    url: "https://www.prpromotionhub.com/ownership-and-funding",
    type: "website",
  },
  alternates: {
    canonical: "https://www.prpromotionhub.com/ownership-and-funding",
  }
};

export default function OwnershipAndFunding() {
  const sections = [
    { id: "overview", label: "Overview", icon: <Info size={18} /> },
    { id: "ownership", label: "Ownership Structure", icon: <Building2 size={18} /> },
    { id: "funding-model", label: "Funding & Revenue Model", icon: <DollarSign size={18} /> },
    { id: "editorial-independence", label: "Editorial Independence", icon: <Scale size={18} /> },
    { id: "transparency-governance", label: "Governance & Ethics", icon: <ShieldCheck size={18} /> },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <header className="max-w-6xl mx-auto px-4 pb-5 md:pb-10 text-center border-b border-gray-200">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Ownership & Funding
          </h1>
          <p className="text-gray-500 text-lg max-w-3xl mx-auto leading-relaxed">
            PR Promotion Hub is committed to transparency. Here, we outline who owns our platform, how we are funded, and the policies that protect our editorial independence.
          </p>
        </header>

        <main className="max-w-6xl mx-auto py-5 md:py-12">
          <div className="grid lg:grid-cols-[250px_1fr] gap-10 md:gap-16">
            {/* Sticky Sidebar Navigation */}
            <aside className="lg:w-64 shrink-0">
              <div className="sticky top-10 space-y-4">
                <p className="text-xs uppercase tracking-widest font-bold text-gray-400">Page Contents</p>
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
                  1. Overview & Transparency Pledge
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-4">
                  <p>
                    A credible news and press release distribution outlet must be honest about its financial interests. As a digital media organization operating at the intersection of public relations, business, and technology news, <strong>PR Promotion Hub</strong> maintains clear separation between who owns us, how we earn revenue, and how we write articles.
                  </p>
                  <p>
                    This page discloses our corporate structure and funding channels so that our readers, clients, and partners can trust the objectivity of the stories and releases we publish.
                  </p>
                </div>
              </section>

              {/* Ownership Structure */}
              <section id="ownership" className="scroll-mt-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3 border-b pb-3">
                  <span className="p-2 bg-blue-50 text-[#041f4a] rounded-lg"><Building2 size={24} /></span>
                  2. Ownership Structure
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-4">
                  <p>
                    PR Promotion Hub is owned and operated by <strong>PR Promotion Hub Media Group</strong>, an independent digital publishing company.
                  </p>
                  <p>
                    Key facts about our ownership:
                  </p>
                  <ul className="space-y-4 list-none p-0 my-4">
                    <li className="flex gap-3">
                      <ArrowRight className="text-blue-600 shrink-0 mt-1" size={16} />
                      <div>
                        <strong>No Government Affiliation:</strong> We are a private, independent media enterprise. We do not receive state funding, government subsidies, or backing from state-controlled enterprises.
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <ArrowRight className="text-blue-600 shrink-0 mt-1" size={16} />
                      <div>
                        <strong>No Political Ties:</strong> PR Promotion Hub is not aligned with any political party, activist group, or ideological movement. Our platform exists solely to deliver timely business news, marketing trends, and PR updates.
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <ArrowRight className="text-blue-600 shrink-0 mt-1" size={16} />
                      <div>
                        <strong>Independent Governance:</strong> Our board of directors and executive leadership operate free from the influence of external political or corporate stakeholders.
                      </div>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Funding & Revenue Model */}
              <section id="funding-model" className="scroll-mt-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3 border-b pb-3">
                  <span className="p-2 bg-blue-50 text-[#041f4a] rounded-lg"><DollarSign size={24} /></span>
                  3. Funding & Revenue Model
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-4">
                  <p>
                    To sustain our newsroom, pay our editorial staff, and maintain our distribution infrastructure, we utilize a diversified digital business model. PR Promotion Hub is funded through the following three primary channels:
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 mt-6">
                    <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all">
                      <h4 className="font-bold text-[#041f4a] mb-2 flex items-center gap-2">
                        <TrendingUp size={18} className="text-green-600" />
                        PR Distribution
                      </h4>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        We charge companies, agencies, and brands fees to host, format, and distribute their press releases and corporate announcements to search engines and our network.
                      </p>
                    </div>

                    <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all">
                      <h4 className="font-bold text-[#041f4a] mb-2 flex items-center gap-2">
                        <TrendingUp size={18} className="text-green-600" />
                        Digital Advertising
                      </h4>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        We run programmatic advertisements (such as Google AdSense) and direct display banners throughout the site. Advertisers do not receive special editorial privileges.
                      </p>
                    </div>

                    <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all">
                      <h4 className="font-bold text-[#041f4a] mb-2 flex items-center gap-2">
                        <TrendingUp size={18} className="text-green-600" />
                        Sponsored Content
                      </h4>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        We occasionally partner with brands to create customized posts. Sponsored content is always labeled clearly so readers can easily identify commercial material.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Editorial Independence */}
              <section id="editorial-independence" className="scroll-mt-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3 border-b pb-3">
                  <span className="p-2 bg-blue-50 text-[#041f4a] rounded-lg"><Scale size={24} /></span>
                  4. Editorial Independence Policy
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-4">
                  <p>
                    We maintain a strict boundary between our commercial operations and our editorial coverage. This boundary ensures that financial relationships do not influence our writing:
                  </p>
                  <div className="bg-blue-50 border border-blue-200 p-6 rounded-2xl text-blue-900">
                    <h4 className="font-bold mb-2 flex items-center gap-2">
                      <ShieldCheck size={20} />
                      Our Policy:
                    </h4>
                    <p className="text-sm leading-relaxed mb-3">
                      Clients who purchase press release distribution plans or advertise on our site cannot purchase favorable news coverage or influence our reporting choices. Our editorial team writes and publishes articles independently, guided purely by factual correctness and relevance.
                    </p>
                    <p className="text-sm leading-relaxed">
                      If an advertiser is the subject of an editorial story, we disclose the commercial relationship inside the article.
                    </p>
                  </div>
                </div>
              </section>

              {/* Governance & Ethics */}
              <section id="transparency-governance" className="scroll-mt-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3 border-b pb-3">
                  <span className="p-2 bg-blue-50 text-[#041f4a] rounded-lg"><ShieldCheck size={24} /></span>
                  5. Governance, Ethics, and Conflicts of Interest
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-4">
                  <p>
                    We hold ourselves to standard ethical practices to avoid conflicts of interest:
                  </p>
                  <ul className="space-y-3 list-none p-0">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold shrink-0 mt-0.5">•</span>
                      <span>Our editors and writers are prohibited from holding a financial interest (e.g., significant stock ownership) in companies they regularly cover, unless fully disclosed.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold shrink-0 mt-0.5">•</span>
                      <span>We do not accept paid travel or luxury gifts in exchange for product reviews or positive stories. Any sponsored reviews are marked explicitly.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold shrink-0 mt-0.5">•</span>
                      <span>Any potential conflict of interest discovered post-publication is disclosed transparently in a correction or update note.</span>
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
              Have Questions About Our Ownership or Funding?
            </h2>
            <p className="text-gray-600 mb-6 max-w-lg mx-auto">
              If you require further information, wish to report a potential conflict, or want to discuss advertising, please reach out to our team.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/contact" 
                title="contact"
                className="px-6 py-3 bg-[#041f4a] text-white rounded-full font-bold hover:bg-blue-900 transition-all shadow-sm flex items-center gap-2 justify-center"
              >
                <Mail size={18} /> Contact Editorial Team
              </Link>
              <Link 
                href="/about" 
                title="about"
                className="px-6 py-3 bg-white text-gray-700 border border-gray-300 rounded-full font-bold hover:bg-gray-50 transition-all shadow-sm"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
