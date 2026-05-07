import ArticleHeader from './ArticleHeader';
import SocialShare from './SocialShare';
import ArticleImage from './ArticleImage';
import SocialShareList from './SocialShareList';
import ArticleWithDescr from './ArticleWithDescr';
import ShareComponent from './ShareComponent';
import CommentForm from './CommentForm';
import ArticleCard from './ArticleCard';
import prnewsData from '../../public/data/prnews.json';
import UpgradePromoCard from './UpgradePromoCard';
import FAQ from './FAQ';

import { Article as NewsItem } from '@/utils/newsUtils';

interface Props {
    article: NewsItem;
    popularNews: NewsItem[];
}


export default function Article({ article, popularNews }: Props) {
    return (
        <div>
            {/* Article Header and Social Share */}
            <ArticleHeader article={article} />
            <SocialShare title={article.title}/>

            {/* Main Content Area */}
            <div className="flex flex-col lg:flex-row mt-2 md:gap-8 lg:gap-8">

                {/* Left Content */}
                <div className="w-full lg:w-300 mb-6 md:mb-0">
                    <ArticleImage src={article.image} alt={article.title} />
                    <div className="flex flex-col md:flex-row mt-8 gap-12">

                        {/* Social Share List */}
                        <div className="hidden md:block sticky top-8 self-start">
                            <SocialShareList title={article.title}/>
                        </div>

                        {/* Article Content */}
                        <div className="flex-1">
                            <ArticleWithDescr data={article} />
                        </div>
                    </div>

                    {/* Share Component and Comment Form */}
                    <ShareComponent title={article.title}/>
                    <CommentForm />
                </div>

                {/* Right Sidebar (Article Cards) */}
                <div className="w-full lg:w-1/3 lg:pl-8 lg:border-l-2 lg:border-dotted lg:border-gray-200">
                    <ArticleCard data={popularNews} />
                    <FAQ/>
                    <div className="py-5">
                        <UpgradePromoCard />
                    </div>
                </div>
            </div>
        </div>
    );
}

