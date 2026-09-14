import Link from "next/link";
export default function PolicyPage({ title, intro, sections }: {
  title: string; intro: string; sections: { heading: string; paragraphs: string[] }[];
}) {
  return <main id="main-content" className="max-w-4xl mx-auto px-5 sm:px-8 py-12">
    <p className="text-sm text-slate-500 mb-3">PR Promotion Hub Blog · Updated September 11, 2026</p>
    <h1 className="text-4xl font-bold leading-tight text-[#041f4a]">{title}</h1>
    <p className="text-xl leading-relaxed text-slate-600 mt-5 mb-8">{intro}</p>
    <div className="article-copy">{sections.map(section => <section key={section.heading}>
      <h2>{section.heading}</h2>{section.paragraphs.map(p => <p key={p}>{p}</p>)}
    </section>)}</div>
    <nav aria-label="Blog information" className="flex flex-wrap gap-5 mt-10 pt-6 border-t text-[#064f91] underline">
      <Link href="/source-methodology">Sources & method</Link><Link href="/editorial">Blog standards</Link>
      <Link href="/ownership-and-funding">Ownership & funding</Link><Link href="/contact">Contact</Link>
    </nav>
  </main>;
}

