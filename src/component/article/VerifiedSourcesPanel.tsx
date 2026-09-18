import Link from "next/link";

interface SourceItem {
  title: string;
  url: string;
  publisher: string;
  note?: string;
  accessedAt?: string;
}

interface Props {
  sources?: SourceItem[];
  category?: string;
}

/**
 * Renders a verified sources panel only when the article has actual sources.
 * We deliberately do NOT show default/fallback sources — displaying generic
 * references that are unrelated to the article's actual claims is misleading
 * and a poor E-E-A-T signal.
 */
export default function VerifiedSourcesPanel({ sources }: Props) {
  if (!sources || sources.length === 0) return null;

  return (
    <section className="article-sources border-t-2 border-[#041f4a] pt-6 mt-10 mb-8">
      <div className="flex items-center justify-between mb-4">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#2563eb] block">
            Sources &amp; References
          </span>
          <h3 className="text-xl font-bold text-[#041f4a]">
            Verified Sources
          </h3>
        </div>
        <Link
          href="/source-methodology/"
          className="text-xs text-slate-500 hover:text-[#041f4a] underline hidden sm:block"
        >
          Our Sourcing Methodology &rarr;
        </Link>
      </div>

      <p className="text-xs text-slate-600 mb-4 leading-relaxed">
        The factual claims in this article are supported by the following primary and secondary sources:
      </p>

      <ol className="space-y-3 text-xs text-slate-700 list-decimal pl-5">
        {sources.map((source, i) => (
          <li key={source.url + i} className="pl-1">
            <a
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#041f4a] hover:text-[#2563eb] underline underline-offset-2 transition"
            >
              {source.title}
            </a>
            <div className="text-slate-500 text-[11px] mt-0.5">
              <span className="font-medium text-slate-700">{source.publisher}</span>
              {source.note && <span> · {source.note}</span>}
              {source.accessedAt && <span> · Accessed {source.accessedAt}</span>}
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-5 p-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded flex flex-col sm:flex-row sm:items-center justify-between text-[11px] text-slate-600 gap-2">
        <span>Factual inaccuracy or broken reference?</span>
        <Link
          href="/corrections/"
          className="font-bold text-[#041f4a] hover:text-[#2563eb] underline"
        >
          Submit a correction &rarr;
        </Link>
      </div>
    </section>
  );
}
