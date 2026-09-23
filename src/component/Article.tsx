import ArticleHeader from "./ArticleHeader";
import SocialShare from "./SocialShare";
import ArticleImage from "./ArticleImage";
import ArticleWithDescr from "./ArticleWithDescr";
import CommentForm from "./CommentForm";
import SocialShareList from "./SocialShareList";
import ShareComponent from "./ShareComponent";
import ArticleCard from "./ArticleCard";
import type { Article as Post } from "@/utils/newsUtils";
import { getCustomArticleComponent } from "./customArticleRegistry";
import AuthorBox from "./article/AuthorBox";
import RelatedArticlesBlock from "./article/RelatedArticlesBlock";
import VerifiedSourcesPanel from "./article/VerifiedSourcesPanel";

const HERRERA_CLUSTER_SLUGS = new Set([
  "julio-herrera-velutini-banker-dynastic-custodian-international-finance-leader",
  "julio-herrera-velutini", // short alias
  "julio-herrera-velutini-biography-banking-legacy",
  "julio-cesar-herrera-britannia-financial-leadership",
  "belen-clarisa-velutini-perez-matos-legacy",
  "banco-caracas-history-herrera-velutini-dynasty",
  "britannia-financial-group-international-banking-overview",
  "trasnocho-cultural-caracas-arts-patronage",
  "caracas-venezuela-financial-dynasty-origins",
  "2023-death-belen-clarisa-velutini-cultural-legacy",
]);



export default function Article({
  article,
  popularNews,
  clusterArticles
}: {
  article: Post;
  popularNews: Post[];
  clusterArticles?: Post[];
}) {
  const CustomArticle = getCustomArticleComponent(article.slug);
  const isHerreraCluster = HERRERA_CLUSTER_SLUGS.has(article.slug);

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
              {CustomArticle ? (
                <CustomArticle data={article} />
              ) : (
                <ArticleWithDescr data={article} relatedArticles={clusterArticles} />
              )}
            </div>
          </div>

          {/* E-E-A-T: Verified sources panel — hidden on cluster/pillar pages */}
          {!isHerreraCluster && (
            <VerifiedSourcesPanel sources={article.sources} category={article.category} />
          )}

          {/* Author attribution — hidden on cluster/pillar pages */}
          {!isHerreraCluster && (
            <AuthorBox authorSlug={article.author.slug} fallbackName={article.author.name} />
          )}

          {/* Topic cluster: related articles in the same subject area */}
          <RelatedArticlesBlock relatedArticles={clusterArticles ?? popularNews} />

          {/* Space before suggest a correction section */}
          <div className="mt-6">
            <CommentForm />
          </div>

        </div>
        <aside className="w-full lg:w-1/3 lg:pl-8 lg:border-l-2 lg:border-dotted lg:border-gray-200 lg:sticky lg:top-6 lg:self-start">
          <ArticleCard data={popularNews} />
        </aside>
      </div>
    </div>
  );
}
