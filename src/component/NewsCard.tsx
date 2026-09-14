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
  data: NewsData[];
  onClose?: () => void;
}

export default function NewsCard({ data ,onClose }: Props) {
  return (
    <div className="divide-y divide-gray-200">
      {data.map((item) => (
        <Link
          key={item.slug}
          href={`/${item.category}/${item.slug}`}
          title={item.title}
          onClick={onClose}
          className="flex items-center gap-4 py-4"
        >
          {/* Image */}
          <div className="relative w-12 h-12 flex-shrink-0">
            <Image
              src={item.image}
              alt={item.imageAlt ?? item.title}
              fill
              sizes="48px"
              className="rounded-full object-cover"
            />
          </div>

          {/* Title */}
          <p className="text-[15px] leading-snug font-medium text-black hover:underline">
            {item.title}
          </p>
        </Link>
      ))}
    </div>
  );
}
