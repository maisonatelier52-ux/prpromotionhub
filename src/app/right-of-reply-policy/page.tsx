import type { Metadata } from "next";
import Link from "next/link";
import { 
  Reply, 
  UserCheck, 
  FileText, 
  Scale, 
  ShieldAlert, 
  Info, 
  Mail,
  ArrowRight
} from "lucide-react";

export const metadata: Metadata = {
  title: "Right of Reply Policy | PR Promotion Hub",
  description: "Read the PR Promotion Hub Right of Reply Policy. Learn who is eligible to request a reply, the content standards required, and how to submit a request.",
  openGraph: {
    title: "Right of Reply Policy | PR Promotion Hub",
    description: "Read the PR Promotion Hub Right of Reply Policy. Learn who is eligible to request a reply, the content standards required, and how to submit a request.",
    url: "https://www.prpromotionhub.com/right-of-reply-policy",
    type: "website",
  },
  alternates: {
    canonical: "https://www.prpromotionhub.com/right-of-reply-policy",
  }
};

export default function RightOfReplyPolicy() {
  const sections = [
    { id: "overview", label: "Overview", icon: <Info size={18} /> },
    { id: "eligibility", label: "Eligibility Criteria", icon: <UserCheck size={18} /> },
    { id: "submission-checklist", label: "Submission Checklist", icon: <FileText size={18} /> },
    { id: "reply-standards", label: "Content Standards", icon: <Scale size={18} /> },
    { id: "editorial-discretion", label: "Editorial Rights", icon: <ShieldAlert size={18} /> },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <header className="max-w-6xl mx-auto px-4 pb-5 md:pb-10 text-center border-b border-gray-200">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Right of Reply Policy
          </h1>
          <p className="text-gray-500 text-lg max-w-3xl mx-auto leading-relaxed">
            PR Promotion Hub is committed to fairness, accuracy, and balanced reporting. Here, we outline our policy regarding the Right of Reply for individuals or organizations mentioned in our coverage.
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
                  1. Overview & Fairness Commitment
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-4">
                  <p>
                    At <strong>PR Promotion Hub</strong>, we aim to provide comprehensive and balanced news coverage. However, we acknowledge that journalistic reporting and distributed press releases may sometimes present assertions, critiques, or allegations that affect the reputation or business interests of third parties.
                  </p>
                  <p>
                    In the interest of fairness and truth, we support the <strong>Right of Reply</strong>. This policy ensures that any individual or organization subject to significant criticism or factual dispute in our published content has a reasonable opportunity to respond and present their perspective to our audience.
                  </p>
                </div>
              </section>

              {/* Eligibility Criteria */}
              <section id="eligibility" className="scroll-mt-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3 border-b pb-3">
                  <span className="p-2 bg-blue-50 text-[#041f4a] rounded-lg"><UserCheck size={24} /></span>
                  2. Eligibility Criteria
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-4">
                  <p>
                    To qualify for a Right of Reply under this policy, a claimant must satisfy the following conditions:
                  </p>
                  <ul className="space-y-4 list-none p-0 my-4">
                    <li className="flex gap-3">
                      <ArrowRight className="text-blue-600 shrink-0 mt-1" size={16} />
                      <div>
                        <strong>Direct Reference:</strong> The claimant must be explicitly named or clearly identifiable in the article in question.
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <ArrowRight className="text-blue-600 shrink-0 mt-1" size={16} />
                      <div>
                        <strong>Adverse Impact:</strong> The article must contain allegations of fact, criticism, or depictions that could damage the claimant's professional standing, reputation, or personal character.
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <ArrowRight className="text-blue-600 shrink-0 mt-1" size={16} />
                      <div>
                        <strong>Timely Request:</strong> The request must be submitted within <strong>30 days</strong> of the article's publication date.
                      </div>
                    </li>
                  </ul>
                  <p className="text-gray-500 text-sm italic">
                    Note: General disagreements with editorial analysis, opinions, or market commentary do not qualify for a Right of Reply. The policy is strictly focused on disputed factual claims or accusations.
                  </p>
                </div>
              </section>

              {/* Submission Checklist */}
              <section id="submission-checklist" className="scroll-mt-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3 border-b pb-3">
                  <span className="p-2 bg-blue-50 text-[#041f4a] rounded-lg"><FileText size={24} /></span>
                  3. Submission Checklist
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-4">
                  <p>
                    To submit a Right of Reply request, please send an email to <span className="font-semibold">editorial@prpromotionhub.com</span> with the subject line <strong>"Right of Reply Request"</strong>. The request must include:
                  </p>
                  <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs shrink-0 mt-0.5 font-semibold">1</span>
                      <p className="text-sm text-gray-600">The specific URL of the article on our website.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs shrink-0 mt-0.5 font-semibold">2</span>
                      <p className="text-sm text-gray-600">Identification of the specific sentences or claims that are disputed.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs shrink-0 mt-0.5 font-semibold">3</span>
                      <p className="text-sm text-gray-600">A draft of your proposed reply (we recommend keeping it under 400 words).</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs shrink-0 mt-0.5 font-semibold">4</span>
                      <p className="text-sm text-gray-600">Proof of identity, or proof of authorization if submitting on behalf of an organization.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Reply Standards */}
              <section id="reply-standards" className="scroll-mt-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3 border-b pb-3">
                  <span className="p-2 bg-blue-50 text-[#041f4a] rounded-lg"><Scale size={24} /></span>
                  4. Content Standards for Replies
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-4">
                  <p>
                    To ensure quality and legal safety, the response submitted by the claimant must adhere to the following standards:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div className="p-5 border border-gray-200 bg-white rounded-xl">
                      <h4 className="font-bold text-[#041f4a] mb-2 flex items-center gap-2">
                        <Reply size={18} className="text-blue-600" />
                        Factual & Relevant
                      </h4>
                      <p className="text-sm text-gray-600">
                        The reply must focus directly on correcting the disputed facts or addressing the criticism. It should not deviate into unrelated topics or marketing promotions.
                      </p>
                    </div>
                    <div className="p-5 border border-gray-200 bg-white rounded-xl">
                      <h4 className="font-bold text-[#041f4a] mb-2 flex items-center gap-2">
                        <Reply size={18} className="text-blue-600" />
                        Respectful & Lawful
                      </h4>
                      <p className="text-sm text-gray-600">
                        The reply must not contain abusive language, hate speech, vulgarity, or defamatory allegations against third parties. It must comply with civil legal codes.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Editorial Rights */}
              <section id="editorial-discretion" className="scroll-mt-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3 border-b pb-3">
                  <span className="p-2 bg-blue-50 text-[#041f4a] rounded-lg"><ShieldAlert size={24} /></span>
                  5. Editorial Rights & Formatting Options
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-4">
                  <p>
                    Once a request is reviewed and validated, PR Promotion Hub will publish the reply. We reserve the following rights regarding publication:
                  </p>
                  <ul className="space-y-3 list-none p-0">
                    <li className="flex items-start gap-2">
                      <span className="text-[#041f4a] font-bold shrink-0 mt-0.5">•</span>
                      <span><strong>Format of Publication:</strong> We may append the reply directly to the original article in a clearly labeled box, publish a follow-up article with mutual links, or correct the original content if it is proven factual errors occurred.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#041f4a] font-bold shrink-0 mt-0.5">•</span>
                      <span><strong>Minor Editing:</strong> We reserve the right to edit the reply for length, spelling, grammar, and syntax. We will not alter the core substance of the reply without consulting the claimant.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#041f4a] font-bold shrink-0 mt-0.5">•</span>
                      <span><strong>Refusal:</strong> We reserve the right to reject a reply if the claimant fails to provide proof of identity, or if the reply contains abusive, illegal, or false statements.</span>
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
              Need to Request a Right of Reply?
            </h2>
            <p className="text-gray-600 mb-6 max-w-lg mx-auto">
              If your company or brand has been criticized or mentioned in an article, and you wish to submit an official statement or reply, please contact us.
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
                href="/editorial" 
                title="editorial"
                className="px-6 py-3 bg-white text-gray-700 border border-gray-300 rounded-full font-bold hover:bg-gray-50 transition-all shadow-sm"
              >
                Read Editorial Policy
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
