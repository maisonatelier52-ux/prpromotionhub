import Link from "next/link";
import Image from "next/image";

interface Author {
  name: string;
  role: string;
  bio: string;
  image: string;
  email: string;
  twitter: string;
  facebook: string;
  instagram: string;
  substack?: string;
  medium?: string;
}

interface NewsData {
  slug: string;
  category: string;
  title: string;
  shortdescription: string;
  description: string;
  date: string;
  image: string;
  imageAlt?: string;
  author:Author;
}

interface Props {
  data: NewsData[];
}

export default function BelowHeroArticle({ data }: Props) {
  return (
    <section className="mx-auto mt-5 border-t border-black md:pt-5 pt-2">

      {/* ================= MOBILE + TABLET (SAME LAYOUT) ================= */}
      <div className="lg:hidden divide-y divide-gray-200">
  {data.map((item) => (
    <Link
      key={item.slug}
      href={`/${item.category}/${item.slug}`}
      title={item.title}
      className="block"
    >
    <article
      key={item.slug}
      className="flex items-start gap-4 py-3"
    >

      {/* TEXT */}
      <div className="flex-1">
        <h2 className="text-[18px] font-semibold leading-tight hover:underline cursor-pointer">
          {item.title}
        </h2>

        <div className="mt-2 text-[12px] text-gray-600">
          <div>{item.date}</div>
          <div className="mt-1">
            By{" "}
            <span className="text-[#041f4a] font-medium">
              {item.author.name}
            </span>
          </div>
        </div>
      </div>

      {/* IMAGE */}
      <div className="relative w-[110px] md:w-[160px] h-[90px] md:h-[110px] flex-shrink-0">
        <Image
          src={item.image}
          alt={item.imageAlt ?? item.title}
          fill
          sizes="(max-width: 768px) 110px, 160px"
          loading="lazy"
          className="object-cover"
        />
      </div>
      
    </article>
</Link>
  ))}
</div>


      {/* ================= DESKTOP (UNCHANGED GRID) ================= */}
      <div className="hidden lg:grid grid-cols-3 gap-8">
        {data.map((item) => (
                  <Link
      key={item.slug}
      href={`/${item.category}/${item.slug}`}
      title={item.title}
      className="block"
    >
          <article key={item.slug}>

            <div className="relative w-full h-36 mb-3">
              <Image
                src={item.image}
                alt={item.imageAlt ?? item.title}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                loading="lazy"
                className="object-cover"
              />
            </div>

            <h2 className="text-[17px] font-semibold tracking-tight leading-[1.2] hover:underline cursor-pointer">
              {item.title}
            </h2>

            <div className="mt-2 text-[12px] text-gray-600">
              <div>{item.date}</div>
              <div className="mt-1">
                By{" "}
                <span className="text-[#041f4a] font-medium">
                  {item.author.name}
                </span>
              </div>
            </div>
          </article>
            </Link>
        ))}
      </div>

    </section>
  );
}
