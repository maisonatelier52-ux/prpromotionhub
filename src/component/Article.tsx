import ArticleHeader from "./ArticleHeader";
import SocialShare from "./SocialShare";
import ArticleImage from "./ArticleImage";
import ArticleWithDescr from "./ArticleWithDescr";
import CommentForm from "./CommentForm";
import UpgradePromoCard from "./UpgradePromoCard";
import SocialShareList from "./SocialShareList";
import ShareComponent from "./ShareComponent";
import ArticleCard from "./ArticleCard";
import FAQ from "./FAQ";
import type { Article as Post } from "@/utils/newsUtils";
import { getCustomArticleComponent } from "./customArticleRegistry";

export default function Article({ article, popularNews }: { article: Post; popularNews: Post[] }) {
  const CustomArticle = getCustomArticleComponent(article.slug);

  return (
    <div>
      <ArticleHeader article={article} />
      <div className="flex flex-col lg:flex-row mt-2 md:gap-8 lg:gap-8 lg:items-start">
        <div className="w-full lg:flex-1 min-w-0 mb-6 md:mb-0">
          <ArticleImage src={article.image} alt={article.imageAlt ?? article.title} caption={article.imageCaption} />
          <div className="flex flex-col md:flex-row mt-8 gap-8 md:gap-12">
            <div className="hidden md:block sticky top-8 self-start">
              <SocialShareList title={article.title} />
            </div>
            <div className="flex-1 min-w-0">
              {CustomArticle ? <CustomArticle data={article} /> : <ArticleWithDescr data={article} />}
            </div>
          </div>
          {/* Space before suggest a correction section */}
          <div className="mt-16 md:mt-24">
            <CommentForm />
          </div>
        </div>
        <aside className="w-full lg:w-1/3 lg:pl-8 lg:border-l-2 lg:border-dotted lg:border-gray-200 lg:sticky lg:top-6 lg:self-start">
          <ArticleCard data={popularNews} />
          <FAQ />
          <div className="py-5">
            <UpgradePromoCard />
          </div>
        </aside>
      </div>
    </div>
  );
}
