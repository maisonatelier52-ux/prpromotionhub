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
    slug: string;
    category: string;
    title: string;
    shortdescription: string;
    description: string;
    date: string;
    image: string;
  imageAlt?: string;
    author: Author;
}

interface Props {
    data: NewsData;
}

export default function CategoryCard({ data }: Props) {
    return (
        <article className="w-full">

            {/* ================= MOBILE + TABLET ================= */}
            <Link
                href={`/${data.category}/${data.slug}`}
                title={data.title}
            >
                <div className="flex gap-4 lg:hidden">
                    {/* Text */}
                    <div className="flex-1">
                        <h2 className="text-[18px] md:text-[22px] font-semibold tracking-tight leading-[1.1] hover:underline cursor-pointer">
                            {data.title}
                        </h2>

                        <div className="mt-1 text-[12px] text-gray-600">
                            <div>{data.date}</div>
                            <div className="mt-">
                                By{" "}
                                <span className="text-[#041f4a] font-medium">
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

            {/* ================= DESKTOP (UNCHANGED) ================= */}
            <Link
                href={`/${data.category}/${data.slug}`}
                title={data.title}
            >
                <div className="hidden lg:grid grid-cols-2 gap-8 items-center">
                    {/* Image */}
                    <div className="relative w-full h-66">
                        <Image
                            src={data.image}
                            alt={data.imageAlt ?? data.title}
                            title={data.title}
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Content */}
                    <div>
                        <h2 className="text-[24px] font-semibold tracking-tight leading-[1.1]">
                            {data.title}
                        </h2>
                        <p className="tracking-tight leading-[1.1] text-[14px] text-[#666] mt-1">{data.shortdescription}</p>

                        <div className="mt-2   text-[12px] text-gray-600">
                            <div>{data.date}</div>
                            <div className="">
                                By{" "}
                                <span className="text-[#041f4a] font-medium">
                                    {data.author.name}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </article>
    );
}
