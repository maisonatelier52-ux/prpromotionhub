import CategorySectionHeader from "./CategorySectionHeader";
import SecondArticle from "./SecondArticle";
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
  author:Author;
}

interface Props {
  data: NewsData[];
}


export default function SecondSection({ data }: Props) {
  return (
    <section>
   
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-15 mt-5">
        {/* Left: Main Hero Article */}
        <div className="lg:col-span-2">
          <SecondArticle
            image={data[0].image}
            category={data[0].category}
            title={data[0].title}
            author={data[0].author}
            date={data[0].date}
            shortdescription={data[0].shortdescription}
            slug={data[0].slug}
          />
        </div>

        {/* Right: Latest News */}
        <div className="lg:col-span-1 flex flex-col divide-y divide-gray-200 space-y-4  ">
          {data.slice(1, 3).map((item, index) => (
            <div
              key={item.slug}
              className='pb-4 '
            >
              <SecondEditorial
                title={item.title}
                image={item.image}
                date={item.date}
                author={item.author.name}
                category={item.category}
                slug={item.slug}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
