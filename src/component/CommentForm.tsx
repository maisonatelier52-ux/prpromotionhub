import Link from "next/link";
export default function CommentForm() {
  return <aside className="border-t border-slate-300 py-6 text-slate-700">
    <h2 className="font-semibold text-xl mb-2">Suggest a correction</h2>
    <p className="mb-3">Include the article URL, the statement at issue and a source supporting the change.</p>
    <Link href="/contact" className="text-[#064f91] underline">Contact and correction details →</Link>
  </aside>;
}

