import type { Metadata } from "next";
export const metadata: Metadata = { title: "Terms and Conditions", alternates: { canonical: "/terms-and-conditions" } };
import Link from "next/link";
import { Scale, ShieldAlert, Copyright, ExternalLink, Info, Mail } from "lucide-react";

export default function TermsAndConditions() {
  const sections = [
    { id: "content", title: "Use of Content", icon: <Copyright size={18} /> },
    { id: "conduct", title: "User Conduct", icon: <Scale size={18} /> },
    { id: "disclaimer", title: "Disclaimer", icon: <Info size={18} /> },
    { id: "liability", title: "Limitation of Liability", icon: <ShieldAlert size={18} /> },
  ];

  return (
              <div className="min-h-screen bg-gray-50 py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">

      

      {/* Simple Header */}
     <header className="max-w-6xl mx-auto px-4 pb-5 md:pb-10 text-center border-b border-gray-200">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
          Terms & Conditions
        </h1>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-tight">
            These Terms and Conditions explain the rules, responsibilities, and limitations associated with using PRPROMOTIONHUB.
     </p>
      </header>


         <main className="max-w-6xl mx-auto py-5 md:py-12">
        <div className="grid lg:grid-cols-[250px_1fr] md:gap-0 gap-10">
          
          {/* Side Navigation */}
            <aside className="lg:w-64 shrink-0">
            <div className="sticky top-10 space-y-4">
              <p className="text-xs uppercase tracking-widest font-bold text-gray-400">Contents</p>
              <nav className="flex flex-col gap-2">
                {sections.map((s) => (
                  <Link
                    key={s.id}
                    href={`#${s.id}`}
                    className="flex items-center gap-3 text-sm font-medium text-gray-600 hover:text-[#041f4a] p-2 rounded-lg hover:bg-gray-50 transition-all"
                  >
                    {s.icon}
                    {s.title}
                  </Link>
                ))}
              </nav>
            </div>
          </aside>

          {/* Content Area */}
          <div className="space-y-10">
            
    
            {/* Use of Content */}
            <section id="content" className="scroll-mt-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-50 rounded-lg text-blue-600"><Copyright size={24} /></div>
                <h2 className="text-2xl font-bold">Use of Content</h2>
              </div>
              <div className="bg-blue-50/30 border border-blue-100 rounded-xl p-5 mb-6 text-sm text-blue-800">
                <strong>In short:</strong> You can read and share for personal use, but you cannot steal our work for profit.
              </div>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  All content published on PRPROMOTIONHUB, including articles, images, graphics, and logos, 
                  is protected by copyright and intellectual property laws. Content is provided for 
                  personal, non-commercial use unless otherwise stated.
                </p>
                <p>
                  Reproduction, distribution, or modification of content without prior written permission 
                  is strictly prohibited, except where permitted by fair use law.
                </p>
              </div>
            </section>

            {/* User Conduct */}
            <section id="conduct" className="scroll-mt-10 border-t pt-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-emerald-50 rounded-lg text-emerald-600"><Scale size={24} /></div>
                <h2 className="text-2xl font-bold">User Conduct</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-0 md:gap-4">
                {[
                  "Use the website in a lawful manner",
                  "No false or misleading submissions",
                  "No interference with site security",
                  "Respect intellectual property of others"
                ].map((rule, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                    <span className="text-sm font-medium text-gray-700">{rule}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Disclaimer */}
            <section id="disclaimer" className="scroll-mt-10 border-t pt-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-amber-50 rounded-lg text-amber-600"><Info size={24} /></div>
                <h2 className="text-2xl font-bold">Disclaimer</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                While we strive for maximum accuracy, PRPROMOTIONHUB makes no warranties regarding the 
                completeness or timeliness of content. Information is provided <span className="font-mono bg-gray-100 px-1 rounded">&quot;as is&quot;</span> 
                and is subject to change without notice. Our blog content does not constitute financial, legal, or professional advice.
              </p>
            </section>

            {/* Liability */}
            <section id="liability" className="scroll-mt-10 border-t pt-12">
              <div className="flex items-center gap-3 mb-6 text-red-700">
                <ShieldAlert size={24} />
                <h2 className="text-2xl font-bold">Limitation of Liability</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                PRPROMOTIONHUB shall not be liable for any direct, indirect, or incidental damages 
                arising from your use of this website. This includes, but is not limited to, 
                any reliance placed on the accuracy of blog posts or marketing analysis published herein.
              </p>
            </section>

          </div>
        </div>
      </main>

      {/* Footer CTA */}
      <footer className="bg-gray-50 border-t border-gray-200 py-5 mt-10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-white rounded-2xl shadow-sm mb-6">
            <Mail className="text-[#041f4a]" size={28} />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Clarification?</h2>
          <p className="text-gray-600 mb-8 max-w-lg mx-auto">
            If you have questions about our licensing or legal terms, please reach out to our team.
          </p>
          <Link 
            href="/contact" 
            title="contact"
            className="px-10 py-4 bg-[#041f4a] text-white rounded-full font-bold hover:shadow-lg hover:bg-blue-900 transition-all inline-block"
          >
            Contact Us
          </Link>
        </div>
      </footer>
        </div>
    </div>
  );
}