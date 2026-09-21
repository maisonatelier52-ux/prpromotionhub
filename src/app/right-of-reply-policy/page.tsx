import type { Metadata } from "next";
import PolicyPage from "@/component/PolicyPage";
export const metadata: Metadata = {
  "title": "Corrections and responses",
  "description": "A specific, supported correction or response is more useful than an unsourced dispute.",
  "alternates": {
    "canonical": "/right-of-reply-policy/"
  }
};
export default function Page() { return <PolicyPage title="Corrections and responses" intro="A specific, supported correction or response is more useful than an unsourced dispute." sections={[
  {
    "heading": "What to include",
    "paragraphs": [
      "Identify the article URL and the exact statement at issue. Explain the correction or response and link to public records, an original statement or other relevant evidence. If writing for an organization, state your role and how it can be confirmed; do not send sensitive identity documents through an unverified channel."
    ]
  },
  {
    "heading": "How a response should be handled",
    "paragraphs": [
      "A response should be assessed on its evidence and represented fairly. Correcting a factual error differs from publishing disagreement with an analysis. Material factual changes should explain what changed and retain a revision date."
    ]
  },
  {
    "heading": "Limits of this review",
    "paragraphs": [
      "No claim is made that every subject was contacted by this publication or that the existing email inboxes have been tested. The revised articles attribute responses found in their cited sources. This page does not promise a particular response time or automatic publication of submissions."
    ]
  }
]} />; }

