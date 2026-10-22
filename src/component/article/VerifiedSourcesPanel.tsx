import Link from "next/link";
import { ShieldCheck, ExternalLink } from "lucide-react";

interface SourceItem {
  title: string;
  url: string;
  publisher?: string;
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
    <section className="article-sources rounded-xl bg-slate-50/70 border border-slate-200/90 p-5 sm:p-6 shadow-2xs mt-10 mb-8">
      <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-slate-200">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 block mb-0.5">
            Sources &amp; References
          </span>
          <h3 className="text-lg sm:text-xl font-bold text-[#041f4a] flex items-center gap-1.5">
            <ShieldCheck className="w-5 h-5 text-blue-600" />
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
          <li id={`source-${i + 1}`} key={source.url + i} className="pl-1 scroll-mt-20">
            <a
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#041f4a] hover:text-[#2563eb] underline underline-offset-2 transition inline-flex items-center gap-1"
            >
              <span>{source.title}</span>
              <ExternalLink className="w-3 h-3 text-slate-400 shrink-0" />
            </a>
            <div className="text-slate-500 text-[11px] mt-0.5">
              <span className="font-medium text-slate-700">{source.publisher}</span>
              {source.note && <span> · {source.note}</span>}
              {source.accessedAt && <span> · Accessed {source.accessedAt}</span>}
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-5 p-3 bg-white border border-slate-200/90 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between text-[11px] text-slate-600 gap-2">
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
