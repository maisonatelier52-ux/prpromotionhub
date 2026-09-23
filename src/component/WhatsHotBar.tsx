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
  data: NewsData;
}

export default function WhatsHotBar({ data }: Props) {
  if (!data) return null;

  return (
    <div className="w-full bg-[#041f4a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href={`/${data.category}/${data.slug}`}
          title={data.title}
          className="flex items-center gap-2 py-2 sm:py-2.5 md:py-3 min-w-0"
        >
          <span className="whitespace-nowrap font-bold text-xs sm:text-sm md:text-[16px] text-blue-200">
            Featured:
          </span>

          <span className="truncate text-xs sm:text-sm md:text-[17px] font-semibold hover:underline">
            {data.title}
          </span>
        </Link>
      </div>
    </div>
  );
}
