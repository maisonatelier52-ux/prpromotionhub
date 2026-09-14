# PR Promotion Hub Blog

PR Promotion Hub is a blog of practical guides, sourced explainers and perspectives on public relations, marketing, business, technology and current affairs. This edition contains the latest 40 posts by original publication date, from May 25 to September 7, 2026. The other 122 revised posts are preserved in a separate reusable export.

This edition restores the original supplied homepage grids, image cards, masthead proportions, category layout, article sidebar and black footer. Blog wording and the revised source-based text remain. All 40 posts have distinct AI-generated illustrations, with WebP files capped at 100,000 bytes. The two existing advertisement placements also use new illustrations. The brand logo and favicon remain.

Retained posts keep their original routes, source links, correction notes and dates. Removed posts are excluded from page generation and the sitemap; their full records, Markdown copies and existing images are in `archived-articles-122.zip`, delivered separately. Historical coverage retains its reporting cutoff; an image or copy revision does not make an old event current. See `ILLUSTRATION_EDITION.md` and `ILLUSTRATION_MANIFEST.json` for this edition.

See [CONTENT_PASS.md](CONTENT_PASS.md) for the content pass and topic corrections.

See [EDITORIAL_REVIEW.md](EDITORIAL_REVIEW.md) for the editing schema, sourcing approach, date conventions, production setup and operator disclosures that still need confirmation.

## Development

Use Node.js 20.9 or later and npm.

1. Run `npm ci`.
2. Run `npm run dev`.
3. Open the local URL printed by Next.js.

## Static build

Run `npm run build`. The complete website is exported to `out/`; serve that directory on a static host supporting directory index files and `404.html`. The production build uses the existing system font stack and does not download Google Fonts.

Set `NEXT_PUBLIC_SITE_URL` before building for another domain. The default points to the separate private review Site. The project ID in `.openai/hosting.json` belongs to that review Site.

## Content

Articles live in `public/data/*.json`. Keep original slugs stable. Update the headline, summary, sections, references and reporting cutoff together; retain material correction notes. A revision date must not imply the underlying reporting is current.

Run `npm run lint` for the repository's ESLint checks.
