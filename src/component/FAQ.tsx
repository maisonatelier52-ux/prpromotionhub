import Link from "next/link";
export default function FAQ() {
  return <aside className="mt-8 border-t border-slate-300 pt-5 text-sm leading-relaxed text-slate-700">
    <h2 className="font-bold text-lg text-[#041f4a] mb-3">Read with the evidence</h2>
    <p className="mb-3">Source links identify the publisher and what each reference supports. An official statement records a position; it may not independently verify the claim.</p>
    <p className="mb-3">The reporting cutoff shows the period covered. A revision date records an edit and does not make an archived story current.</p>
    <Link href="/source-methodology" className="underline text-[#064f91]">How these articles were prepared →</Link>
  </aside>;
}

