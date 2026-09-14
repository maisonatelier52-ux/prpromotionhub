import Link from "next/link";

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

export default function LatestNewsList({data}:Props) {
  return (
    <div className="w-full">
      {/* Heading */}
      <h2 className="text-[20px] md:text-[28px] font-semibold border-b-4 border-black inline-block mb-3">
        Recent in the Archive
      </h2>

      {/* List */}
      <div className="flex flex-col divide-y divide-gray-200">
        {data.map((item) => (
                     <Link
      key={item.slug}
      href={`/${item.category}/${item.slug}`}
      title={item.title}
      className="block"
    >

          <div key={item.slug} className="py-2">
            <h3 className="text-[18px] font-semibold leading-tight">
              {item.title}
            </h3>

            <div className="mt-2 text-[12px] text-gray-600">
              <span>{item.date}</span>
              <span className="mx-2">|</span>
              <span className="text-[#041f4a] font-medium">
                {item.category}
              </span>
            </div>
          </div>
</Link>
        ))}
      </div>
    </div>
  );
}
