import CategorySectionHeader from "./CategorySectionHeader";
import EditorialCard from "./EditorialCard";

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
  author:Author;
}

interface Props {
  data: NewsData[];
}


export default function EditorialGrid({ data }: Props) {
  return (
    <section className="mx-auto mt-8">
      <CategorySectionHeader title="Ideas & context" />

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-5">
        {data.map((item, index) => (
          <div
            key={item.slug}
            className="border-b border-gray-200 pb-6 last:border-b-0 lg:border-b-0 lg:pb-0"

          >
            <EditorialCard
              title={item.title}
              image={item.image}
              imageAlt={item.imageAlt}
              date={item.date}
              author={item.author.name}
              category={item.category}
              slug={item.slug}
            />
          </div>
        ))}
      </div>

    </section>
  );
}
