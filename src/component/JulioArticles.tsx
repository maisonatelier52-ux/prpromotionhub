import SocialShare from './SocialShare';
import ArticleImage from './ArticleImage';
import SocialShareList from './SocialShareList';
import ShareComponent from './ShareComponent';
import CommentForm from './CommentForm';
import ArticleCard from './ArticleCard';
import prnewsData from '../../public/data/prnews.json';
import ClientArticleContent from './ClientArticleContent';
import JulioArticleHeader from './JulioArticleHeader';
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

export default function JulioArticles({ article }: Props) {
    return (
        <div>
            <JulioArticleHeader article={article} />

            <SocialShare title={article.title}/>
            <div className="flex flex-col lg:flex-row mt-2 md:gap-8 lg:gap-8">
                <div className="w-full lg:w-300 mb-6 md:mb-0">
                    {/* Other components on the left */}
                    <ArticleImage src={article.image} alt={article.title} />
                    <div className="flex flex-col md:flex-row mt-8 gap-12">
                        
                        {/* SocialShareList */}
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

                    {/* Share Component and Comment Form */}
                    <ShareComponent title={article.title}/>
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
