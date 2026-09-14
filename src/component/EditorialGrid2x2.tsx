import EditorialCard from "./EditorialCard";
import SecondEditorial from "./SecondEditorial";

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

export default function EditorialGrid2x2({ data }: Props) {
  return (
    <section className="mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-8">
        {data.map((item) => (
          <div
            key={item.slug}
            className="
              flex flex-col
              border-b border-gray-200 pb-6
              last:border-b-0
              lg:border-b-0 lg:pb-0
            "
          >
            <SecondEditorial
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

