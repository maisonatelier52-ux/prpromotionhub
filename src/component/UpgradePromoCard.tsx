import Link from "next/link";

export default function UpgradePromoCard() {
  return (
    <aside className="w-full">
      {/* Top spacer */}
      <div className="mb-6" />

      <p className="text-xs uppercase tracking-widest text-slate-500 mb-2">Opinion</p>

      <div className="w-full bg-[#111111] text-white p-6 sm:p-7 flex flex-col justify-between border-t-4 border-[#ffb600] shadow-sm">
        <div>
          {/* Header & Quotation Icon */}
          <div className="flex items-center justify-between mb-3">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#ffb600] bg-[#ffb600]/10 px-2.5 py-1 rounded">
              Perspective
            </span>
            <span className="font-serif text-4xl text-[#ffb600]/50 select-none leading-none">“</span>
          </div>

          {/* Quote within quotation marks */}
          <blockquote className="font-serif text-base sm:text-lg leading-relaxed text-gray-100 italic my-2">
            &ldquo;Public relations is not about spin or manufacturing perception; it is the discipline of earning trust through radical transparency, verified facts, and consistent integrity in an age of constant noise.&rdquo;
          </blockquote>

          {/* Attribution */}
          <div className="mt-5 pt-4 border-t border-neutral-800">
            <p className="font-sans font-bold text-sm text-white tracking-wide">
              PR Promotion Hub Editorial
            </p>
            <p className="text-xs text-neutral-400 mt-0.5">
              Perspectives on Public Relations & Media Ethics
            </p>
          </div>
        </div>

        {/* Action button */}
        <Link
          href="/editorial"
          className="mt-6 group flex items-center justify-between bg-[#ffb600] text-black px-4 py-2.5 text-xs font-semibold tracking-wide uppercase hover:bg-white transition-colors"
        >
          <span>Read Blog Standards</span>
          <span className="transform group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </aside>
  );
}

