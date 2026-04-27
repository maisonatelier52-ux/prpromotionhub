import { FaQuoteLeft } from 'react-icons/fa';

interface NewsData {
  title: string;
  slug: string;
  category: string;
  shortdescription: string;
  description: string;
  image: string;
}

interface Props {
  data: NewsData;
}

export default function   ArticleWithDescr({ data }: Props) {
  // Split description into sentences
  const sentences = data.description.split('. ');
  const mid = Math.ceil(sentences.length / 2);

  const firstHalf = sentences.slice(0, mid).join('. ') + '.';
  const secondHalf = sentences.slice(mid).join('. ');

  return (
    <section className="w-full mx-auto text-black">
      {/* First paragraph with drop cap */}
      <p className="">
        {/* <span className="float-left text-5xl md:text-6xl font-bold leading-none mt-1 mr-2">
          {firstHalf.charAt(0)}
        </span> */}
        <span className="leading-tight text-[16px]">
          {firstHalf}
        </span>
      </p>

      {/* Quote Section */}
      <div className="w-full mx-auto py-2 mb-2 text-center">
        {/* <FaQuoteLeft className="mx-auto text-red-600 text-2xl md:text-3xl mb-3" /> */}

        {/* <p className="text-[15px] md:text-[20px] font-semibold leading-tight">
          “{data.shortdescription}”
        </p> */}

      
      </div>

      {/* Remaining Description */}
      <div className="w-full mx-auto">
        <p className="tracking-tight text-[16px]">
          {secondHalf}
        </p>
      </div>
    </section>
  );
}
