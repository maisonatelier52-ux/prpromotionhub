import Image from 'next/image';
import Link from 'next/link';

interface NewsData {
  slug: string;
  category: string;
  title: string;
  shortdescription?: string;
  description?: string;
  date?: string;
  image: string;
  imageAlt?: string;
}

interface Props {
  data: NewsData[];
  title?: string;
}

export default function ArticleCard({ data, title = "MORE TO READ" }: Props) {
  return (
    <section>
      <div className="w-full border border-black">
        <div className="border-t-4 border-black py-2 flex justify-center">
          <h2 className="text-[18px] font-semibold tracking-wide uppercase">
            {title}
          </h2>
        </div>
      </div>
      <div className="flex flex-col justify-start gap-4 pt-4">
        {data?.map((item) => (
          <article
            key={item.slug}
            className="relative w-full"
          >
            <div className="flex gap-4 w-full">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 shrink-0 overflow-hidden">
                <Link
                  href={`/${item.category}/${item.slug}`}
                  title={item.title}
                  className="relative block w-full h-full"
                >
                  <Image
                    src={item.image}
                    alt={item.imageAlt ?? item.title}
                    fill
                    sizes="(max-width: 640px) 80px, 96px"
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </Link>
              </div>
              <div className="relative flex flex-col gap-1 overflow-hidden">
                <span className="bg-[#041f4a] text-white text-[11px] font-bold px-2 py-0.5 w-fit uppercase tracking-wider">
                  {item.category}
                </span>

                <h3 className="relative z-10 text-[14px] sm:text-[15px] font-semibold leading-snug line-clamp-3">
                  <Link href={`/${item.category}/${item.slug}`} className="hover:underline">
                    {item.title}
                  </Link>
                </h3>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
