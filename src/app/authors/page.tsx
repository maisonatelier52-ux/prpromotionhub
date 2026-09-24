import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { AUTHORS_DATA } from "@/utils/authorsData";
import { BRAND_NAME, SITE_URL } from "@/utils/siteConfig";

export const metadata: Metadata = {
  title: `Editorial Board & Contributing Experts | ${BRAND_NAME}`,
  description: "Meet the journalists, communications strategists, and industry analysts behind PR Promotion Hub's rigorous reporting.",
  alternates: {
    canonical: `${SITE_URL}/authors/`
  }
};

export default function AuthorsIndexPage() {
  const authors = Object.values(AUTHORS_DATA);

  return (
    <main id="main-content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <nav aria-label="Breadcrumb" className="text-xs text-slate-500 mb-6">
        <ol className="flex items-center gap-2">
          <li><Link href="/" className="hover:text-[#041f4a] hover:underline">Home</Link></li>
          <li>/</li>
          <li className="text-[#041f4a] font-semibold" aria-current="page">Authors &amp; Editorial Board</li>
        </ol>
      </nav>

      <header className="border-b border-[#E2E8F0] pb-8 mb-12">
        <span className="accent-badge mb-3">E-E-A-T Verified Byline Directory</span>
        <h1 className="font-editorial text-3xl sm:text-5xl font-bold text-[#041f4a] leading-tight">
          Editorial Board &amp; Expert Contributors
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
          Our contributors combine decades of on-the-ground corporate communications advisory, financial markets reporting, and digital technology research.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {authors.map((author) => (
          <article
            key={author.slug}
            className="flex flex-col sm:flex-row gap-6 p-6 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg hover:border-[#2563eb] transition group shadow-2xs"
          >
            {/* Avatar */}
            <div className="flex-shrink-0">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-white shadow-xs relative mx-auto sm:mx-0 bg-[#041f4a]">
                {author.avatar ? (
                  <Image
                    src={author.avatar}
                    alt={author.name}
                    fill
                    sizes="112px"
                    className="object-cover group-hover:scale-105 transition duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center font-editorial font-bold text-2xl text-white select-none">
                    {author.name.split(" ").map(n => n[0]).join("")}
                  </div>
                )}
              </div>
            </div>

            {/* Author info */}
            <div className="flex-1 flex flex-col justify-between text-center sm:text-left">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <Link href={`/authors/${author.slug}/`} className="hover:underline">
                    <h2 className="font-editorial text-xl font-bold text-[#041f4a] group-hover:text-[#2563eb] transition">
                      {author.name}
                    </h2>
                  </Link>
                  {author.linkedin && (
                    <div className="flex items-center justify-center sm:justify-end gap-2 text-slate-500">
                      <a
                        href={author.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm hover:text-[#2563eb] transition"
                        aria-label={`${author.name} LinkedIn Profile`}
                      >
                        <FaLinkedinIn />
                      </a>
                      <a
                        href={author.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm hover:text-[#2563eb] transition"
                        aria-label={`${author.name} Twitter Profile`}
                      >
                        <FaTwitter />
                      </a>
                    </div>
                  )}
                </div>

                <p className="text-xs uppercase tracking-wider font-bold text-[#2563eb] mt-0.5">
                  {author.role}
                </p>

                <p className="text-xs text-slate-600 mt-2 leading-relaxed line-clamp-3">
                  {author.bio}
                </p>

                {/* Expertise Pills */}
                <div className="flex flex-wrap gap-1.5 mt-3 justify-center sm:justify-start">
                  {author.expertise.slice(0, 3).map((item) => (
                    <span
                      key={item}
                      className="inline-block text-[10px] font-semibold bg-white border border-slate-200 px-2 py-0.5 rounded text-slate-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-xs">
                <span className="text-slate-500 text-[11px]">{author.education}</span>
                <Link
                  href={`/authors/${author.slug}/`}
                  className="font-bold text-[#041f4a] hover:text-[#2563eb] inline-flex items-center gap-1 transition"
                >
                  View Profile &amp; Articles &rarr;
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
