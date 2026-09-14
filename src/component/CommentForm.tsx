import Link from "next/link";

export default function CommentForm() {
  return (
    <aside className="border-t border-slate-200/80 pt-8 pb-4 text-slate-600">
      <h2 className="font-semibold text-lg text-slate-900 mb-1.5">Suggest a correction</h2>
      <p className="text-sm text-slate-500 mb-3 leading-relaxed">
        Include the article URL, the statement at issue and a source supporting the change.
      </p>
      <Link
        href="/contact"
        className="inline-flex items-center gap-1 text-sm font-medium text-[#064f91] hover:text-blue-700 transition-colors group"
      >
        <span>Contact and correction details</span>
        <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
      </Link>
    </aside>
  );
}
