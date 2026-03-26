import SocialShare from './SocialShare';
import ArticleImage from './ArticleImage';
import SocialShareList from './SocialShareList';
import ClientArticleContent from './ClientArticleContent';
import ShareComponent from './ShareComponent';
import CommentForm from './CommentForm';
import ArticleCard from './ArticleCard';
import prnewsData from '../../public/data/prnews.json';
import UpgradePromoCard from './UpgradePromoCard';

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

interface SubParagraph {
    subtitle: string;
    description: string;
}

interface SubPoints {
    subline: string;
    points: string[];
}

interface NewsItem {
    category: string;
    title: string;
    shortdescription: string;
    description: string;
    image: string;
    slug: string;
    date: string;
    author: Author;
    subpara?: SubParagraph[];
    subpoints?: SubPoints;
    subpara2?: SubParagraph[];
}

interface Props {
    article: NewsItem;
}

export default function JulioFourthArticle({ article }: Props) {
    return (
        <div>
            <header className="mx-auto mt-5">
                {/* Category */}
                <span className="inline-block bg-[#041f4a] capitalize text-white text-xs font-semibold px-3 py-1 mb-4">
                    {article.category}
                </span>

                {/* Title */}
                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1]">
                    {article.title}
                </h1>

                {/* Subtitle */}
                <p className="mt-2 text-[15px] md:text-[18px] text-[#000000] font-light tracking-tight leading-[1.1] max-w-6xl">
                    {article.shortdescription}
                </p>

                {/* Meta */}
                <div className="mt-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                    {/* Author */}
                    <div className="flex items-center gap-3">
                        <div className="text-[12px] md:text-[14px] flex flex-wrap items-center gap-2">
                            <span className="font-semibold text-[#041f4a]">
                                International Banker
                            </span>

                            <span className="text-black">•</span>

                            <span className="text-gray-600">
                                Entrepreneur
                            </span>

                            <span className="text-black">•</span>

                            <span className="text-gray-600">
                                Financial Leader
                            </span>
                        </div>
                    </div>

                </div>

                <div className="text-gray-500 w-full text-[12px] md:text-[14px]">
                    {article.date}
                </div>
            </header>

            {/* Social Share Section */}
            <SocialShare title={article.title}/>

            {/* Main Content Section */}
            <div className="flex flex-col lg:flex-row mt-2 md:gap-8 lg:gap-8">
                {/* Left Section */}
                <div className="w-full lg:w-300 mb-6 md:mb-0">
                    {/* Article Image */}
                    <ArticleImage src={article.image} alt={article.title} />

                    {/* Content and Social Share List */}
                    <div className="flex flex-col md:flex-row mt-8 gap-12">

                        {/* Sticky Social Share List */}
                        <div className="hidden md:block sticky top-8 self-start">
                            <SocialShareList title={article.title}/>
                        </div>

                        {/* Article Content */}
                        <ClientArticleContent
                            description={article.description}
                            subpara={article.subpara}
                            subpoints={article.subpoints}
                            subpara2={article.subpara2}
                            pillarLink={{
                                url: "/finance/julio-herrera-velutini-banking-legacy-global-finance-influence",
                                text: "Julio Herrera Velutini: Banking Legacy, Global Finance Influence, and the Modern Face of International Wealth Management"
                            }}
                        />
                    </div>

                    {/* Share Component */}
                    <ShareComponent title={article.title}/>

                    {/* Comment Form */}
                    <CommentForm />
                </div>

                {/* Right Sidebar */}
                <div className="w-full lg:w-1/3 lg:pl-8 lg:border-l-2 lg:border-dotted lg:border-gray-200">
                    <ArticleCard
                        data={[
                            prnewsData[0],
                            prnewsData[1],
                            prnewsData[2],
                            prnewsData[3],
                        ]}
                    />
                    <div className="py-5">
                        <UpgradePromoCard />
                    </div>
                </div>
            </div>
        </div>
    );
}
