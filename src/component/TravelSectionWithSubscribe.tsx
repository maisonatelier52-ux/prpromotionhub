import CategorySectionHeader from "./CategorySectionHeader";
import EditorialGrid2x2 from "./EditorialGrid2x2";

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
  author: Author;
}

interface Props {
  data: NewsData[];
}

export default function TravelSectionWithSubscribe({ data }: Props) {
  return (
    <section className="mx-auto mt-8">
      <CategorySectionHeader title="Financial Highlights" />
      <div className="mt-8">
        <EditorialGrid2x2
          data={[data[0], data[1], data[2], data[3]]}
        />
      </div>
    </section>
  );
}
