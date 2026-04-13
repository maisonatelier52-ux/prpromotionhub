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
  slug?: string;
}

interface NewsData {
  slug: string;
  category: string;
  title: string;
  shortdescription: string;
  description: string;
  date: string;
  image: string;
  author: Author;
}

interface Props {
  data: NewsData[];
}

const manualItem: NewsData = {
  title: "Why Reputation Is the Real Power in Global Finance Today",
  image: "/images/julio-herrera-velutini-us-scrutiny.webp",
  slug: "reputation-global-finance-leadership-trust",
  category: "finance",
  shortdescription: "Find out how reputation and perception are changing leadership, trust, and decision-making in global finance, making them more important for success.",
  description: "",
  date: "April 13, 2026",
  author: {
    name: "Staff Reporter",
    role: "Business & Economy Desk",
    bio: "",
    image: "",
    slug: "",
    email: "",
    twitter: "",
    facebook: "",
    instagram: "",
    substack: "",
    medium: ""
  }
};

export default function FeaturedEditorialGrid({ data }: Props) {
  const combinedData = [manualItem, ...data];

  return (
    <section className="border-l border-r border-b border-black">
      <div className="flex flex-wrap pt-5 ">
        {combinedData.map((item, index) => (
          <article
            key={item.slug}
            className="
            relative flex p-2 
            w-full md:w-1/2 lg:w-1/4
          "
          >
            <div className="flex gap-4 w-full">
              <div className="relative w-18 h-16 sm:w-22 sm:h-20 md:w-24 md:h-26 lg:w-27 lg:h-35 shrink-0">
                <Link
                  href={`/${item.category}/${item.slug}`}
                  title={item.title}
                  className="flex items-center gap-2 py-3 truncate"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                         title={item.title}
                    fill
                    className="object-cover"
                  />
                </Link>
              </div>
              <div className="relative flex flex-col gap-2 overflow-hidden">
                <span className="absolute top-3 right-0 text-[30px] md:text-[40px] lg:text-[60px] font-serif font-bold text-black opacity-[0.08] leading-none select-none ">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="bg-[#041f4a] text-white text-xs font-bold px-2 py-1 w-fit hidden md:inline-block capitalize">
                  {item.category}
                </span>

                <p className="relative z-10 text-[14px] font-semibold leading-snug line-clamp-">
                  {item.title}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
