import Image from "next/image";
import Link from "next/link";

export type EditorialCardProps = {
  title: string;
  image: string;
  imageAlt?: string;
  date: string;
  author: string;
  category:string;
  slug:string;
};

export default function EditorialCard({
  title,
  image,
  imageAlt,
  date,
  author,
  category,
  slug
}: EditorialCardProps) {
  return (
    <div>

      {/* ================= MOBILE + TABLET ================= */}
                <Link
  href={`/${category}/${slug}`}
  title={title}
>
      <div className="flex gap-4 lg:hidden">

        {/* Text */}
        <div className="flex-1">
          <h3 className="text-[18px] font-semibold leading-[1.2] tracking-tight hover:underline cursor-pointer">
            {title}
          </h3>

          <div className="mt-2 text-[12px] text-gray-600">
            <div>{date}</div>
            <div className="mt-1">
              By{" "}
              <span className="text-[#041f4a] font-medium">
                {author}
              </span>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="relative w-[110px] md:w-[160px] h-[90px] md:h-[110px] flex-shrink-0">
          <Image
            src={image}
            alt={imageAlt ?? title}
            title={title}
            fill
            sizes="(max-width: 768px) 110px, 160px"
            loading="lazy"
            className="object-cover"
          />
        </div>
      </div>
</Link>

      {/* ================= DESKTOP (UNCHANGED) ================= */}
              <Link
  href={`/${category}/${slug}`}
  title={title}
> 
      <div className="hidden lg:block">
        {/* Image */}
        <div className="relative w-full h-46 mb-3">
          <Image
            src={image}
            alt={imageAlt ?? title}
            title={title}
            fill
            sizes="(max-width: 1024px) 100vw, 33vw"
            loading="lazy"
            className="object-cover"
          />
        </div>

        {/* Title */}
        <h3 className="text-[18px] font-semibold leading-[1.2] tracking-tight hover:underline cursor-pointer">
          {title}
        </h3>

        {/* Meta */}
        <div className="mt-2 text-[12px] text-gray-600">
          <div>{date}</div>
          <div className="mt-1">
            By{" "}
            <span className="text-[#041f4a] font-medium">
              {author}
            </span>
          </div>
        </div>
      </div>
</Link>

    </div>
  );
}
