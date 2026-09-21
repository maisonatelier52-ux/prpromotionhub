import type { Metadata } from "next";
import PolicyPage from "@/component/PolicyPage";
export const metadata: Metadata = {
  "title": "Sources and methodology",
  "description": "How the blog’s posts use sources, distinguish interpretation and explain uncertainty.",
  "alternates": {
    "canonical": "/source-methodology/"
  }
};
export default function Page() { return <PolicyPage title="Sources and methodology" intro="How the blog’s posts use sources, distinguish interpretation and explain uncertainty." sections={[
  {
    "heading": "What this edition contains",
    "paragraphs": [
      "The September 2026 revision uses AI-assisted research and writing to produce blog posts that combine sourced context, explainers, practical guides and analysis. It does not represent original interviews, field reporting or review by named subject-matter experts. The organization byline identifies the publisher; it is not a claim of an individual reporter’s credentials."
    ]
  },
  {
    "heading": "How sources were used",
    "paragraphs": [
      "Public records, official announcements, institutional guidance and attributable reporting were used to check central claims. Each article links its references, names their publishers and explains their relevance or limits. Some briefings rely on one source; links to multiple copies of the same wire report do not create independent corroboration.",
      "A company statement supports what a company announced. An indictment supports what prosecutors alleged. Neither automatically proves promotional claims or guilt. Attribution remains visible where a source is an interested party, and competing accounts are identified where available."
    ]
  },
  {
    "heading": "When the original claim lacked support",
    "paragraphs": [
      "Unsupported figures, quotations, credentials and predictions were removed or qualified. Where the original story’s central claim could not be substantiated, the article became a labeled explainer on the same topic. Material changes in framing are described in an article note. The existing URL is retained for continuity even when its wording reflects an earlier headline."
    ]
  },
  {
    "heading": "Dates and developing stories",
    "paragraphs": [
      "The original publication date comes from the supplied archive and has not been independently authenticated. The reporting cutoff identifies the period addressed by the revised text. The revision date records this editing pass; it does not imply that every developing story was updated through that date. Source access dates record when the references were consulted.",
      "For current prices, safety conditions, rules, product availability or active proceedings, follow the appropriate live source. A dated archive can explain a development without serving as a current advisory."
    ]
  },
  {
    "heading": "Images and accountability",
    "paragraphs": [
      "Post images are AI-generated conceptual illustrations, with descriptive alternative text and an illustration caption. The artwork represents the topic; the linked sources provide the evidence for the text. Drawn charts, devices and locations are illustrative rather than factual records or product specifications.",
      "Corrections should identify the article, the disputed statement and supporting evidence. Confirmed material corrections should carry a dated explanation. The contact page contains the publication’s existing email details; this review has not tested those inboxes."
    ]
  }
]} />; }

