import type { Metadata } from "next";
import Link from "next/link";
import { 
  Scale, 
  Building2, 
  ShieldAlert, 
  Link2, 
  Info, 
  Mail,
  ArrowRight
} from "lucide-react";

export const metadata: Metadata = {
  title: "Legal & Disclaimers | PR Promotion Hub",
  description: "Access the PR Promotion Hub legal directory, general disclaimers, intellectual property notices, and compliance information.",
  openGraph: {
    title: "Legal & Disclaimers | PR Promotion Hub",
    description: "Access the PR Promotion Hub legal directory, general disclaimers, intellectual property notices, and compliance information.",
    url: "https://www.prpromotionhub.com/legal",
    type: "website",
  },
  alternates: {
    canonical: "https://www.prpromotionhub.com/legal",
  }
};

export default function Legal() {
  const sections = [
    { id: "overview", label: "Overview", icon: <Info size={18} /> },
    { id: "entity-info", label: "Corporate Information", icon: <Building2 size={18} /> },
    { id: "disclaimers", label: "General Disclaimers", icon: <Scale size={18} /> },
    { id: "intellectual-property", label: "Intellectual Property", icon: <ShieldAlert size={18} /> },
    { id: "legal-directory", label: "Legal Directory", icon: <Link2 size={18} /> },
  ];

  const directoryLinks = [
    { name: "Terms & Conditions", url: "/terms-and-conditions", desc: "Our global terms governing site usage, distribution rules, and user accountability." },
    { name: "Privacy Policy", url: "/privacy-policy", desc: "Explains how we collect, secure, and handle user and visitor data." },
    { name: "Editorial Policy", url: "/editorial", desc: "Outlines our commitments to journalistic integrity, verification, and transparency." },
    { name: "Advertising & Sponsored Policy", url: "/advertising-and-sponsored-content-policy", desc: "Our guidelines on paid distributions, sponsored labels, and ad safety." },
    { name: "Right of Reply Policy", url: "/right-of-reply-policy", desc: "The standard process for individuals or entities to dispute facts and submit a reply." },
    { name: "Source Methodology", url: "/source-methodology", desc: "How our writers gather news and verify first-hand vs. second-hand sources." },
    { name: "Ownership & Funding", url: "/ownership-and-funding", desc: "Disclosures about our parent publishing group and revenue streams." }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <header className="max-w-6xl mx-auto px-4 pb-5 md:pb-10 text-center border-b border-gray-200">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Legal & Compliance Hub
          </h1>
          <p className="text-gray-500 text-lg max-w-3xl mx-auto leading-relaxed">
            Welcome to the PR Promotion Hub legal directory. Here, you will find our corporate disclosures, general disclaimers, intellectual property rules, and links to all our official policies.
          </p>
        </header>

        <main className="max-w-6xl mx-auto py-5 md:py-12">
          <div className="grid lg:grid-cols-[250px_1fr] gap-10 md:gap-16">
            {/* Sticky Sidebar Navigation */}
            <aside className="lg:w-64 shrink-0">
              <div className="sticky top-10 space-y-4">
                <p className="text-xs uppercase tracking-widest font-bold text-gray-400">Legal Contents</p>
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
                  1. Overview
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-4">
                  <p>
                    PR Promotion Hub provides global press release distribution and digital journalism services. This Legal & Compliance Hub serves as a central clearinghouse for all legal notices, governing policies, and terms of service that apply to our website, services, and corporate operations.
                  </p>
                  <p>
                    By using this website, ordering press release distributions, or reading our content, you acknowledge and agree to be bound by the policies listed in our directory below.
                  </p>
                </div>
              </section>

              {/* Entity Info Section */}
              <section id="entity-info" className="scroll-mt-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3 border-b pb-3">
                  <span className="p-2 bg-blue-50 text-[#041f4a] rounded-lg"><Building2 size={24} /></span>
                  2. Corporate Information
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-4">
                  <p>
                    The website `prpromotionhub.com` and all related subdomains are published and operated by:
                  </p>
                  <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm max-w-md my-4">
                    <p className="font-bold text-gray-900 text-lg mb-1">PR Promotion Hub Media Group</p>
                    <p className="text-sm text-gray-600 mb-2">Digital Press & News Publishing</p>
                    <p className="text-sm text-gray-600 font-mono">Website: www.prpromotionhub.com</p>
                    <p className="text-sm text-gray-600 font-mono">Email: legal@prpromotionhub.com</p>
                  </div>
                  <p>
                    Unless otherwise specified, all copyrights, intellectual property rights, database rights, and trademarks in this site and the materials published on it are owned by or licensed to PR Promotion Hub Media Group.
                  </p>
                </div>
              </section>

              {/* General Disclaimers */}
              <section id="disclaimers" className="scroll-mt-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3 border-b pb-3">
                  <span className="p-2 bg-blue-50 text-[#041f4a] rounded-lg"><Scale size={24} /></span>
                  3. General Disclaimers & Liability Limits
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-4">
                  <p>
                    <strong>Information Accuracy:</strong> While we strive to verify our sources and maintain editorial standards, all content (including articles, press releases, reports, and analytical reviews) is provided for general informational purposes only. We make no representations or warranties regarding the absolute accuracy, completeness, or suitability of the information.
                  </p>
                  <p>
                    <strong>PR Distributions:</strong> A significant portion of the content on our site consists of corporate press releases submitted by third parties. PR Promotion Hub does not endorse, verify, or assume responsibility for any claims, figures, financial guidance, or product descriptions contained in client-submitted releases.
                  </p>
                  <p>
                    <strong>No Professional Advice:</strong> No information on this website constitutes professional financial, investment, legal, or health advice. Readers are urged to conduct their own due diligence or consult qualified advisors before making business or financial decisions.
                  </p>
                </div>
              </section>

              {/* Intellectual Property */}
              <section id="intellectual-property" className="scroll-mt-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3 border-b pb-3">
                  <span className="p-2 bg-blue-50 text-[#041f4a] rounded-lg"><ShieldAlert size={24} /></span>
                  4. Intellectual Property & DMCA Compliance
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-4">
                  <p>
                    <strong>Copyright:</strong> All content, designs, and code on PR Promotion Hub are protected by copyright laws. You may not republish, scrape, modify, or redistribute our journalist-authored articles without express written authorization.
                  </p>
                  <p>
                    <strong>DMCA Notice (Copyright Infringement):</strong> We respect intellectual property rights. If you believe that any material published on our site infringes a copyright you own or control, please submit a formal DMCA takedown notice to our designated copyright agent containing:
                  </p>
                  <ul className="space-y-2 list-none p-0 my-4 bg-white p-6 rounded-xl border border-gray-200 shadow-sm text-sm text-gray-600">
                    <li className="flex gap-2">
                      <span className="text-[#041f4a] font-bold shrink-0">•</span>
                      <span>Identification of the copyrighted work claimed to have been infringed.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#041f4a] font-bold shrink-0">•</span>
                      <span>Identification of the infringing material on our site (including URLs).</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#041f4a] font-bold shrink-0">•</span>
                      <span>Your contact details (name, email, address, phone number).</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#041f4a] font-bold shrink-0">•</span>
                      <span>A statement of good-faith belief and physical or electronic signature.</span>
                    </li>
                  </ul>
                  <p>
                    Send notices to: <span className="font-semibold font-mono">dmca@prpromotionhub.com</span>.
                  </p>
                </div>
              </section>

              {/* Legal Directory */}
              <section id="legal-directory" className="scroll-mt-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3 border-b pb-3">
                  <span className="p-2 bg-blue-50 text-[#041f4a] rounded-lg"><Link2 size={24} /></span>
                  5. Compliance & Policy Directory
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-4">
                  <p>
                    Click the links below to access our specific governance and compliance policies:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    {directoryLinks.map((item, index) => (
                      <div key={index} className="p-5 border border-gray-200 bg-white rounded-xl hover:border-[#041f4a] transition-all hover:shadow-sm">
                        <h4 className="font-bold text-[#041f4a] mb-2 flex items-center gap-2">
                          <Link href={item.url} className="hover:underline flex items-center gap-1">
                            {item.name} <ArrowRight size={14} />
                          </Link>
                        </h4>
                        <p className="text-xs text-gray-600 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </div>
        </main>

        {/* Footer Navigation CTA */}
        <footer className="bg-gray-100 border-t border-gray-200 py-10 mt-10 rounded-2xl">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Need Legal or DMCA Assistance?
            </h2>
            <p className="text-gray-600 mb-6 max-w-lg mx-auto">
              If you have any questions regarding trademarks, licensing, content permissions, or require formal legal notifications, please contact our legal division.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/contact" 
                title="contact"
                className="px-6 py-3 bg-[#041f4a] text-white rounded-full font-bold hover:bg-blue-900 transition-all shadow-sm flex items-center gap-2 justify-center"
              >
                <Mail size={18} /> Contact Legal Counsel
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
