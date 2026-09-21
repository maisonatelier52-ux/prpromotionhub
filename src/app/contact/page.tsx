import type { Metadata } from "next";
export const metadata: Metadata = { title: "Contact and corrections", description: "Existing publication contacts and what to include with a correction.", alternates: { canonical: "/contact/" } };
export default function Contact() {
  return <main id="main-content" className="max-w-3xl mx-auto px-5 py-12">
    <h1 className="text-4xl font-bold text-[#041f4a] mb-5">Contact and corrections</h1>
    <p className="text-lg leading-relaxed text-slate-700 mb-8">For a correction, include the post URL, the statement at issue, the proposed change and a supporting source.</p>
    <div className="grid sm:grid-cols-2 gap-6 mb-8">
      <section className="border border-slate-300 p-6"><h2 className="font-bold mb-3">Blog inquiries</h2><a className="underline text-[#064f91] break-all" href="mailto:editorial@prpromotionhub.com">editorial@prpromotionhub.com</a></section>
      <section className="border border-slate-300 p-6"><h2 className="font-bold mb-3">General inquiries</h2><a className="underline text-[#064f91] break-all" href="mailto:info@prpromotionhub.com">info@prpromotionhub.com</a></section>
    </div>
    <p className="text-sm leading-relaxed text-slate-600">These addresses are retained from the supplied publication archive. Delivery, monitoring and response times were not verified in this review. The links open your email application; this site does not confirm that a message has been sent or received.</p>
  </main>;
}

