import Image from "next/image";
import BelowHeroArticle from "./BelowHeroArticle";
import Link from "next/link";

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
  author:Author;
}

interface Props {
  data: NewsData[];
}

export default function HeroArticle({
  data
}: Props) {
  return (
    <article className="w-full">
      <Link
        href={`/${data[0].category}/${data[0].slug}`}
        title={data[0].title}
      >

        <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-100">
          <Image
            src={data[0].image}
            alt={data[0].title}
                 title={data[0].title}
            fill
            priority
            className="object-cover"
          />
          {/* Red small box with part inside the image */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-[#041f4a] text-white text-[9px] sm:text-[10px] md:text-[11px] lg:text-[12px] font-bold px-4 py-2 capitalize tracking-wide text-center" style={{ marginBottom: '-10px' }}>
       {data[0].category=='prnews'?'PR News':data[0].category}
          </div>
        </div>

        <div className=" mx-auto text-center">


          <h1 className="mt-6 text-[25px] sm:text-[30px] md:text-[40px] lg:text-[40px] font-semibold tracking-tight leading-[1.1]">
            {data[0].title}
          </h1>
          <div className="mt-1 md:mt-3 text-[13px] text-gray-600">
            <span>{data[0].date}</span>
            <span className="mx-2">•</span>
            <span>
              By{" "}
              <span className="font-semibold text-[#041f4a]">
                {data[0].author.name}
              </span>
            </span>
          </div>
        </div>
      </Link>
      <BelowHeroArticle data={[data[1], data[2], data[3]]} />
    </article>
  );
}
