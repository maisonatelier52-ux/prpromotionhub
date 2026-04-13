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

const manualItem: NewsData = {
  title: "From Legacy Wealth to Global Finance: The Rise of Julio Herrera Velutini",
  image: "/images/julio-herrera-velutini-global-finance.webp",
  slug: "reputation-global-finance-leadership-trust",
  category: "finance",
  shortdescription: "Find out how reputation and perception are changing leadership, trust, and decision-making in global finance, making them more important for success.",
  description: "",
  date: "April. 13, 2026",
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


export default function SecondSection({ data }: Props) {
  const combinedData = [...data,manualItem]
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
          {combinedData.slice(1, 3).map((item, index) => (
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
