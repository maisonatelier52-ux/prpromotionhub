import Link from "next/link";
import Image from "next/image";
import { RESEARCH_REPORTS } from "@/utils/researchData";

export default function ResearchReportsSection() {
  const reports = RESEARCH_REPORTS.slice(0, 2);

  return (
    <section className="my-14 border-t-2 border-[#041f4a] pt-10">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#2563eb] block">
            Original Whitepapers &amp; Benchmarks
          </span>
          <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-black">
            Research &amp; Executive Reports
          </h2>
        </div>
        <Link
          href="/research/"
          className="text-xs font-bold text-[#041f4a] hover:text-[#2563eb] uppercase tracking-wider mt-2 sm:mt-0"
        >
          Browse Full Research Archive &rarr;
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {reports.map((report) => (
          <div
            key={report.id}
            className="flex flex-col sm:flex-row gap-6 bg-[#F8FAFC] border border-[#E2E8F0] p-6 rounded-lg hover:border-[#041f4a] transition shadow-2xs group"
          >
            <div className="sm:w-2/5 flex-shrink-0">
              <div className="relative aspect-[4/3] rounded overflow-hidden shadow-xs border border-slate-200">
                <Image
                  src={report.coverImage}
                  alt={report.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover group-hover:scale-103 transition duration-300"
                />
                <span className="absolute top-2 left-2 bg-[#041f4a] text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                  {report.format.split(" ")[0]}
                </span>
              </div>
            </div>

            <div className="sm:w-3/5 flex flex-col justify-between space-y-3">
              <div>
                <span className="text-[10px] text-slate-500 font-semibold block uppercase tracking-wider">
                  {report.pages} Pages • {report.publishDate}
                </span>
                <Link href={`/research/${report.slug}/`}>
                  <h3 className="font-editorial text-lg font-bold text-black hover:text-black hover:underline transition leading-snug">
                    {report.title}
                  </h3>
                </Link>
                <p className="text-xs text-black line-clamp-3 mt-1.5 leading-relaxed">
                  {report.description}
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href={`/research/${report.slug}/`}
                  className="inline-flex items-center text-xs font-bold text-[#041f4a] hover:text-[#2563eb] transition"
                >
                  Download Report PDF &rarr;
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
