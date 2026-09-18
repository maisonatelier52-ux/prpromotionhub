import Link from 'next/link';
import type { Article } from '@/utils/newsUtils';

export default function ArticleWithDescr({ data }: { data: Article }) {
  return (
    <article className="article-copy">
      {data.editorialNote && <aside className="editorial-note"><strong>About this post</strong><p>{data.editorialNote}</p></aside>}
      {data.takeaways?.length ? <aside className="article-takeaways" aria-label="Key points"><h2>Key points</h2><ul>{data.takeaways.map(point => <li key={point}>{point}</li>)}</ul></aside> : null}
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
      {!!data.sources?.length && <section className="article-sources" aria-labelledby="sources-heading"><h2 id="sources-heading">Sources &amp; further reading</h2><ol>{data.sources.map((source, i) => <li id={`source-${i + 1}`} key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer">{source.title}</a><p>{source.publisher} · {source.note}</p><p>Accessed {source.accessedAt}</p></li>)}</ol></section>}
      <footer className="article-editorial-footer"><p>This post was prepared with source-based research and editorial review by PR Promotion Hub.</p><p><Link href="/source-methodology">How we use sources</Link> · <Link href="/corrections">Send a correction</Link></p></footer>
    </article>
  );
}
