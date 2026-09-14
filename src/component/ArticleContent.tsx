
import ArticleImage from "./ArticleImage";
import SocialShare from "./SocialShare";
import SocialShareList from "./SocialShareList";

interface NewsData {
  slug:string;
  category:string;
  title: string;
  image: string;
  imageAlt?: string;
  shortdescription:string;
  description:string;
}

interface Props {
 data:NewsData;
}

export default function ArticleContent({
data
}: Props) {


  return (
    <div className="w-full">
    <ArticleImage src={data.image} alt={data.imageAlt ?? data.title} />
    <SocialShareList title={data.title}/>
    </div>
  );
}
