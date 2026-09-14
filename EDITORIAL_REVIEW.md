# PR Promotion Hub Blog: content and presentation

Historical revision notes follow. The latest user-directed edition restores the supplied design, retains 40 posts and replaces their images with generated illustrations. See ILLUSTRATION_EDITION.md for current scope; the earlier presentation and image-retention notes below describe the previous edition.

The September 11, 2026 edition presents this collection as a blog of guides, explainers and perspectives. The homepage features a selected guide and practical reads, followed by a browsable archive. Topic navigation, post layouts, About, FAQ and blog standards reflect that positioning. Blog and BlogPosting structured data describe the collection and its posts. Existing paths, citations, correction notes and content dates remain intact.

All 162 article URLs from the supplied archive have revised, source-based text. Unsupported reporting has been replaced by labeled explainers where necessary. Existing slugs, archive dates and illustrations are retained; materially changed framing is disclosed on the article.

The initial content revision was September 10, 2026, followed by a September 11 content pass documented in CONTENT_PASS.md. Each reporting cutoff is separate: this is a reviewed archive, not a live news feed. Original source access dates are September 9–10; sources checked again during the content pass show September 11. Research and writing used AI assistance. No original interviews, independent field reporting, named expert review or verified personal bylines are claimed.

## Editing articles
Article data lives in `public/data/{category}.json`. Each entry has a headline, summary, content label, reporting cutoff, revision date, sections and sources. Section `sourceIds` are one-based indexes into that article’s source list. Keep source scope and uncertainty explicit. Do not remove a material correction note merely to make an older URL look newly published.

## Running and building
Use Node.js 20.9 or newer, run `npm ci`, then `npm run dev`.
`npm run build` creates the static website in `out/`. Serve that directory with a static host that supports directory index files and `404.html`. The existing Next.js architecture, npm lockfile and build script are preserved; static export and unoptimized images support the review host.

The default metadata origin in `src/utils/siteConfig.ts` is the private review Site. Set `NEXT_PUBLIC_SITE_URL=https://www.prpromotionhub.com` before a production build, or edit that default. The preview’s Sites project ID in `.openai/hosting.json` identifies this separate private review project; do not use it to publish into a different project.

## Before original-site publication
- Confirm the legal operator, beneficial owners, funding relationships and responsible editorial contact.
- Confirm any historical sponsorship and add article-level disclosures where relevant.
- Have the operator review the revised articles and approve human bylines only for actual participants.
- Establish image provenance, rights and event-specific captions. Archive images are labeled as illustrations because this revision did not authenticate them.
- Test the retained email inboxes. Comment submission was replaced with a contact link because the old form did not transmit comments.
- Refresh time-sensitive stories if presenting them as current. A revision date is not a reporting cutoff.
- Have the operator review the inherited privacy notice and terms against actual production services. This editorial work is not a legal review.

Original source assets are retained for continuity. They are not evidence of ownership or licensing.
