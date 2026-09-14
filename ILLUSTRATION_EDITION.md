# Original design · latest 40 posts · illustration edition

Requested on September 11, 2026: retain the latest 40 articles, restore the supplied design, replace article images with normal-quality WebP illustrations under 100 KB, and export the remaining articles for reuse.

## Article selection

Selection uses the original publication date, newest first. Revision dates are not used. Equal publication dates use the original file name and array position as a deterministic tie-breaker. The selected dates range from May 25 to September 7, 2026.

The previous content pass remains intact. The 40 retained posts preserve their complete text, source records, dates and correction notes. The other 122 complete records are in a separately delivered JSON file and ZIP. The ZIP provides one Markdown file per article, category data files, original associated images and reimport instructions. Images in that export remain the supplied archive assets and need provenance/rights review before reuse.

## Design

The supplied design is the reference for the homepage's featured cards, hero and sidebar, editorial grids, secondary stories and final list; category cards and pagination; the article's social rail and right sidebar; masthead proportions; and the black footer. The original system font and visual classes are retained. Headings describe blog content without claiming breaking news or measured popularity. Source sections, correction notices and AI disclosures remain available.

All 40 posts are distributed across the original homepage sections. The final list uses the existing Show More control. Category pages use actual topic labels, so an empty topic can remain when no matching article falls within the latest 40.

## Illustrations

Each retained post has its own raster illustration created with the built-in image-generation tool. The two existing advertisement placements also receive new artwork. The existing brand logo and favicon are preserved. `ILLUSTRATION_MANIFEST.json` records every selected illustration's prompt, alternative text, WebP path, dimensions, byte count and SHA-256 digest.

Artwork uses conceptual scenes in a consistent navy, teal and ochre palette. Product drawings, maps and unlabelled chart shapes are conceptual, not product specifications, geographic data or actual market observations.

Files are resized to 960 × 540 and encoded as WebP at normal quality, with a strict maximum of 100,000 bytes. Conversion strips source metadata. Captions disclose AI-generated illustration; image descriptions identify the depicted subject. Original generated image files are retained outside the site checkout, and unused old assets are removed from the published image folder.

## Validation

The production build and output audit check the 40 active posts, original route aliases, rendered local image and link targets, citations, metadata, sitemap, illustration byte limits and formats, and completeness of the 122-post export. Artwork is inspected separately from page layout. No browser interaction test is implied by these checks.
