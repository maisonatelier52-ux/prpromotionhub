import Image from "next/image";
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
    title: string;
    image: string;
  imageAlt?: string;
    date: string;
    category: string;
    slug: string;
    author:Author;
}

interface Props {
    data: NewsData;
}

export default function RelatedNews({ data }: Props) {
    return (

        <div>
            <Link
                href={`/${data.category}/${data.slug}`}
                title={data.title}
            >
                <div className="flex gap-4 lg:hidden">

                    {/* Text */}
                    <div className="flex-1">
                        <h3 className="text-[18px] font-semibold leading-[1.2] tracking-tight hover:underline cursor-pointer">
                            {data.title}
                        </h3>

                        <div className="mt-2 text-[12px] text-gray-600">
                            <div>{data.date}</div>
                            <div className="mt-1">
                                By{" "}
                                <span className="text-[#041f4a] font-medium hover:underline cursor-pointer">
                                    {data.author.name}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="relative w-[110px] md:w-[160px] h-[90px] md:h-[110px] flex-shrink-0">
                        <Image
                            src={data.image}
                            alt={data.imageAlt ?? data.title}
                                 title={data.title}
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </Link>

            <div className="hidden lg:block">

                <Link
                    href={`/${data.category}/${data.slug}`}
                    title={data.title}
                    className="block overflow-hidden"
                >
                    <article className="w-46 lg:w-76">
                        {/* Image */}
                        <div className="relative w-full h-[130px] lg:h-[200px]">
                            <Image
                                src={data.image}
                                alt={data.imageAlt ?? data.title}
                                     title={data.title}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 270px"
                            />
                        </div>

                        {/* Title */}
                        <h3 className="mt-2 text-[15px] lg:text-[18px] tracking-tight leading-[1.1] font-semibold text-black">{data.title}</h3>

                        {/* Meta */}
                        <div className="mt-2 text-[10px] lg:text-[12px] text-gray-600 flex items-center gap-2">
                            <span>
                                By{" "}
                                <span className="text-[#041f4a] font-medium hover:underline">
                                    {data.author.name}
                                </span>
                            </span>
                            <span className="text-gray-400">|</span>
                            <span>{data.date}</span>
                        </div>
                    </article>
                </Link>
            </div>
        </div>
    );
}
