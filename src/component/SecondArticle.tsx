import Image from "next/image";
import Link from "next/link";

interface Author {
  name: string;
  role: string;
  bio: string;
  image: string;
  imageAlt?: string;
  email: string;
  twitter: string;
  facebook: string;
  instagram: string;
  substack?: string;
  medium?: string;
}

interface HeroArticleProps {
  image: string;
  imageAlt?: string;
  category: string;
  title: string;
  author: Author;
  date: string;
  shortdescription: string
  slug:string
};

export default function SecondArticle({
  image,
  imageAlt,
  category,
  title,
  author,
  slug,
  date,
  shortdescription,
}: HeroArticleProps) {
  return (
    <article className="w-full">
              <Link
  href={`/${category}/${slug}`}
  title={title}
>

      {/* Image */}
     <div className="relative w-full h-60 sm:h-84 md:h-94 lg:h-110">
            <Image
              src={image}
              alt={imageAlt ?? title}
                   title={title}
              fill
              priority
              className="object-cover"
            />
            {/* Red small box with part inside the image */}
            <div className="absolute bottom-0  left-1/2 transform -translate-x-1/2 bg-[#041f4a] text-white text-[9px] sm:text-[10px] md:text-[11px] lg:text-[12px] font-bold px-4 py-2 capitalize tracking-wide text-center" style={{ marginBottom: '-10px' }}>
              {category}
            </div>
          </div>


      <div className=" mx-auto text-center">
    <h3 className="mt-6 text-[25px] sm:text-[30px] md:text-[40px] lg:text-[42px] font-semibold tracking-tight leading-[1.1]">
          {title}
        </h3>
    <p className="hidden lg:block mt-1 text-[15px] md:text-[18px] text-[#666666] tracking-tight leading-[1.1]">
  {shortdescription}
</p>

        <div className="mt-2 text-[12px] text-gray-600">
          <span>{date}</span>
          <span className="mx-2">•</span>
          <span>
            By{" "}
            <span className="font-semibold text-[#041f4a]">
              {author.name}
            </span>
          </span>
        </div>
      </div>
</Link>
    </article>
  );
}
