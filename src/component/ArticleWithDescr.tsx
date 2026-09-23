import Link from 'next/link';
import type { Article } from '@/utils/newsUtils';

export default function ArticleWithDescr({
  data,
  relatedArticles,
}: {
  data: Article;
  relatedArticles?: Article[];
}) {
  return (
    <article className="article-copy">
      {data.editorialNote && <aside className="editorial-note"><strong>About this post</strong><p>{data.editorialNote}</p></aside>}
      {data.sections?.length ? data.sections.map((section, index) => (
        <section key={index} aria-labelledby={`section-${index}`}>
          <h2 id={`section-${index}`}>{section.heading}</h2>
          {section.paragraphs.map((paragraph, i) => (
            // dangerouslySetInnerHTML lets embedded <a> links in JSON paragraphs render as real anchors
            <p key={i} dangerouslySetInnerHTML={{ __html: paragraph }} />
          ))}
          {!!section.sourceIds?.length && <p className="section-sources">Sources: {section.sourceIds.map((id, i) => <span key={id}>{i > 0 ? ', ' : ''}<a href={`#source-${id}`}>{data.sources?.[id - 1]?.publisher ?? id} [{id}]</a></span>)}</p>}
        </section>
      )) : (data.description || data.shortdescription || '').split(/\n\s*\n/).map((paragraph, index) => <p key={index}>{paragraph}</p>)}

      <footer className="article-editorial-footer"><p>This post was prepared with source-based research and editorial review by PR Promotion Hub.</p><p><Link href="/source-methodology">How we use sources</Link> · <Link href="/corrections">Send a correction</Link></p></footer>
    </article>
  );
}
