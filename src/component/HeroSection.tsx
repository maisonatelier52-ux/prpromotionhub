import HeroArticle from "./HeroArticle";
import LatestNewsList from "./LatestNewsList";

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
  slug?:string;
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
    title: "Julio Herrera Velutini and the Evolution of International Private Banking",
    image: "/images/julio-herrera-velutini.webp",
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

export default function HeroSection({ data }: Props) {
  return (
    <section className="mx-auto  mt-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 md:gap-15">
        <div className="lg:col-span-2">
          <HeroArticle data={[data[0], data[1], data[2],manualItem]} />
        </div>

        <div className="lg:col-span-1">
          <LatestNewsList data={[data[4], data[5], data[6], data[7],data[8],data[9],data[10],data[11]]} />
        </div>
      </div>
    </section>
  );
}
