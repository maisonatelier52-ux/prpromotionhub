import Link from "next/link";

export default function TrendingKeywordsBar() {
  const trendingTopics = [
    { label: "Crisis Communication", href: "/reputation/", count: "24 Analysis Pieces" },
    { label: "AI in Public Relations", href: "/technology/", count: "18 Reports" },
    { label: "Corporate Reputation", href: "/corporate-affairs/", count: "31 Guides" },
    { label: "CEO Positioning", href: "/corporate-affairs/", count: "12 Profiles" },
    { label: "Media Relations 2026", href: "/public-relations/", count: "19 Frameworks" },
    { label: "MarTech Intelligence", href: "/marketing/", count: "15 Benchmarks" },
    { label: "Financial Disclosures", href: "/business/", count: "22 Briefings" },
    { label: "Brand Defense & Risk", href: "/reputation/", count: "16 Studies" },
  ];

  return (
    <section className="border-t border-b border-[#E2E8F0] py-5 my-10 bg-[#F8FAFC]">
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="w-2.5 h-2.5 rounded-full bg-[#2563eb] animate-ping" />
          <span className="text-xs uppercase tracking-wider font-bold text-[#041f4a]">
            Trending Topics &amp; Clusters:
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          {trendingTopics.map((topic) => (
            <Link
              key={topic.label}
              href={topic.href}
              className="inline-flex items-center gap-1.5 bg-white border border-slate-200 hover:border-[#2563eb] px-3 py-1.5 rounded-full text-xs font-medium text-slate-700 hover:text-[#041f4a] transition shadow-2xs"
            >
              <span>{topic.label}</span>
              <span className="text-[10px] text-slate-400 font-normal">({topic.count.split(" ")[0]})</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
