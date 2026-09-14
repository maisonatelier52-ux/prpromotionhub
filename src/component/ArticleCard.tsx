import Image from 'next/image';
import Link from 'next/link';

interface NewsData {
  slug: string;
  category: string;
  title: string;
  shortdescription: string;
  description: string;
  date: string;
  image: string;
  imageAlt?: string;
}

interface Props {
  data: NewsData[];
}

export default function ArticleCard({ data }: Props) {
  return (
    <section>
   <div className="w-full border border-black">
    <div className="border-t-4 border-black py-2 flex justify-center">
      <h2 className="text-[18px] font-semibold tracking-wide">
        MORE TO READ
      </h2>
    </div>
  </div>
      <div className="flex flex-col justify-start gap-4 pt-4">
        {data.map((item) => (
          <article
            key={item.slug}
            className="relative w-full "
          >
               <div className="flex gap-4 w-full">
              <div className="relative w-18 h-16 sm:w-22 sm:h-20 md:w-24 md:h-26 lg:w-25 lg:h-28 shrink-0">
                <Link
                  href={`/${item.category}/${item.slug}`}
                  title={item.title}
                  className="flex items-center gap-2 py-3 truncate"
                >
                  <Image src={item.image} alt={item.imageAlt ?? item.title} fill className="object-cover" />
                </Link>
              </div>
              <div className="relative flex flex-col gap-2 overflow-hidden">
           
                <span className="bg-[#041f4a] text-white text-xs font-bold px-2 py-1 w-fit hidden md:inline-block">
                  {item.category}
                </span>

                <h3 className="relative z-10 text-[15px] font-semibold leading-snug line-clamp-3">
                  <Link href={`/${item.category}/${item.slug}`} className="hover:underline">{item.title}</Link>
                </h3>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
