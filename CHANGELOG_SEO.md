# Changes – September 21, 2026

1. `public/.htaccess`: added a single-hop 301 from the old slug
   `/finance/herrera-velutini-family-stewardship-succession-culture/` to the canonical
   `/finance/julio-herrera-velutini/` (the code comment in `src/utils/seo.ts` already assumed this redirect existed).
2. `public/data/finance.json`: repaired garbled characters (`â€“`, `â€™`, etc.) that were showing in the
   meta description, image alt/caption and body text of the Herrera Velutini article (26 occurrences).
3. Herrera Velutini article: added a sourced "The public record: legal history" section, five new
   references (Bloomberg Law, Campaign Legal Center, OCCRP, two defense-side PR Newswire releases, labeled as such),
   an editor's note, and updated `updatedAt` / `reportingAsOf`.
4. `src/app/corrections/page.tsx`: removed three ledger entries that described changes not present in the
   articles (one pointed to articles that do not exist in the data). The ledger now lists only real changes.
5. Policy pages: canonical URLs now end in `/` to match `trailingSlash: true` (no redirect on every canonical).

## Still to do by the site operator (cannot be done in code)
- Publish the legal operator, owners and funding on /ownership-and-funding/.
- Add real, named authors with bios (do not invent bylines).
- Verify remaining claims in the article (e.g. the named CEO of Britannia Financial Group) against primary sources.
- Set up Google Search Console, submit the sitemap, inspect the canonical URL and request indexing.
- Earn real backlinks; re-check rankings after 3–6 months.
- Build and test (`npm ci && npm run build`) before deploying: this environment had no network, so a full build was not run.
