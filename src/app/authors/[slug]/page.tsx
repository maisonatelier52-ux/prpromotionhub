import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { FaLinkedinIn, FaTwitter, FaEnvelope } from "react-icons/fa";
import { AUTHORS_DATA } from "@/utils/authorsData";
import { allArticles } from "@/utils/newsData";
import { BRAND_NAME, SITE_URL, CATEGORY_LABELS } from "@/utils/siteConfig";
import { toISODate } from "@/utils/newsUtils";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return Object.keys(AUTHORS_DATA).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const author = AUTHORS_DATA[slug];
  if (!author) return {};

  const pageUrl = `${SITE_URL}/authors/${author.slug}/`;

  return {
    title: `${author.name} - ${author.role} | ${BRAND_NAME}`,
    description: author.bio,
    alternates: { canonical: pageUrl },
    openGraph: {
      title: `${author.name} | ${BRAND_NAME} Editorial Board`,
      description: author.bio,
      url: pageUrl,
      type: "profile",
      images: [{ url: author.avatar, width: 400, height: 400, alt: author.name }],
    },
    twitter: {
      card: "summary",
      title: `${author.name} | ${BRAND_NAME}`,
      description: author.bio,
    },
  };
}

export default async function AuthorProfilePage({ params }: Props) {
  const { slug } = await params;
  const author = AUTHORS_DATA[slug];
  if (!author) notFound();

  // Find all articles written by this author or assigned to default desk
  const authorArticles = allArticles.filter((art) => {
    if (author.slug === "pr-promotion-hub") return true;
    return art.author?.slug === author.slug || art.author?.name?.toLowerCase().includes(author.name.toLowerCase());
  }).slice(0, 12);

  const authorSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/authors/${author.slug}/#person`,
    name: author.name,
    jobTitle: author.role,
    description: author.bio,
    image: author.avatar,
    sameAs: [author.linkedin, author.twitter].filter(Boolean),
    knowsAbout: author.expertise,
    alumniOf: author.education,
    worksFor: {
      "@type": "NewsMediaOrganization",
      "@id": `${SITE_URL}/#organization`,
      name: BRAND_NAME,
      url: `${SITE_URL}/`
    }
  };

  return (
    <main id="main-content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(authorSchema).replace(/</g, "\\u003c") }}
      />

      <nav aria-label="Breadcrumb" className="text-xs text-slate-500 mb-6">
        <ol className="flex items-center gap-2">
          <li><Link href="/" className="hover:text-[#041f4a] hover:underline">Home</Link></li>
          <li>/</li>
          <li><Link href="/authors/" className="hover:text-[#041f4a] hover:underline">Authors</Link></li>
          <li>/</li>
          <li className="text-[#041f4a] font-semibold" aria-current="page">{author.name}</li>
        </ol>
      </nav>

      {/* Author Bio Banner */}
      <section className="bg-[#F8FAFC] border border-[#E2E8F0] p-8 rounded-lg mb-12">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-md relative flex-shrink-0">
            <Image
              src={author.avatar}
              alt={author.name}
              fill
              sizes="(max-width: 768px) 128px, 160px"
              className="object-cover"
              priority
            />
          </div>

          <div className="flex-1 space-y-4">
            <div>
              <span className="accent-badge mb-2">Verified Editorial Byline</span>
              <h1 className="font-editorial text-3xl sm:text-4xl font-bold text-[#041f4a]">
                {author.name}
              </h1>
              <p className="text-sm uppercase tracking-wider font-bold text-[#2563eb] mt-1">
                {author.role}
              </p>
            </div>

            <p className="text-sm text-slate-700 leading-relaxed max-w-3xl">
              {author.longBio}
            </p>

            {/* Credentials Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-600 border-t border-slate-200">
              <div>
                <strong className="text-slate-900">Education &amp; Credentials:</strong> {author.education}
              </div>
              <div>
                <strong className="text-slate-900">Experience:</strong> {author.experience}
              </div>
            </div>

            {/* Expertise Pills */}
            <div className="pt-2">
              <span className="block text-xs uppercase tracking-wider font-bold text-slate-400 mb-2">
                Core Domains of Expertise
              </span>
              <div className="flex flex-wrap gap-2">
                {author.expertise.map((exp) => (
                  <span
                    key={exp}
                    className="text-xs bg-white border border-slate-200 px-3 py-1 rounded font-medium text-slate-700"
                  >
                    {exp}
                  </span>
                ))}
              </div>
            </div>

            {/* Social & Contact Proof */}
            <div className="flex items-center gap-4 pt-3 text-sm text-slate-700 border-t border-slate-200">
              {author.linkedin && (
                <a
                  href={author.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold hover:text-[#2563eb] transition"
                >
                  <FaLinkedinIn className="text-sm text-[#041f4a]" /> LinkedIn Profile
                </a>
              )}
              {author.twitter && (
                <a
                  href={author.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold hover:text-[#2563eb] transition"
                >
                  <FaTwitter className="text-sm text-[#041f4a]" /> @{author.twitter.split("/").pop()}
                </a>
              )}
              <a
                href={`mailto:${author.email}`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold hover:text-[#2563eb] transition"
              >
                <FaEnvelope className="text-sm text-[#041f4a]" /> {author.email}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Published Articles by this Author */}
      <section>
        <div className="flex items-center justify-between border-b-2 border-[#041f4a] pb-3 mb-8">
          <h2 className="font-editorial text-2xl font-bold text-[#041f4a]">
            Published Articles &amp; Analysis ({authorArticles.length})
          </h2>
          <span className="text-xs text-slate-500">Sorted by publication date</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {authorArticles.map((art) => (
            <article
              key={art.slug}
              className="flex flex-col justify-between bg-white border border-slate-200 rounded p-5 hover:border-[#2563eb] transition group shadow-2xs"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                  <span className="font-bold text-[#041f4a] uppercase tracking-wider">
                    {CATEGORY_LABELS[art.category] || art.category}
                  </span>
                  <time dateTime={toISODate(art.date)}>{toISODate(art.date)}</time>
                </div>

                <Link href={`/${art.category}/${art.slug}/`}>
                  <h3 className="font-editorial text-lg font-bold text-[#041f4a] group-hover:text-[#2563eb] transition leading-snug">
                    {art.title}
                  </h3>
                </Link>

                <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                  {art.shortdescription || art.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
                <Link
                  href={`/${art.category}/${art.slug}/`}
                  className="text-[#041f4a] hover:text-[#2563eb] transition"
                >
                  Read Analysis &rarr;
                </Link>
                <span className="text-slate-400 font-normal">5 min read</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
