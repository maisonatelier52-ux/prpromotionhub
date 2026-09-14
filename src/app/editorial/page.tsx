import type { Metadata } from "next";
import PolicyPage from "@/component/PolicyPage";
export const metadata: Metadata = {
  "title": "Blog standards",
  "description": "Guidelines for useful posts, fair attribution and clearly expressed opinions.",
  "alternates": {
    "canonical": "/editorial"
  }
};
export default function Page() { return <PolicyPage title="Blog standards" intro="Guidelines for useful posts, fair attribution and clearly expressed opinions." sections={[
  {
    "heading": "Facts and interpretation",
    "paragraphs": [
      "A blog can offer a point of view while making the basis for that view clear. Factual claims need support. Predictions, estimates, allegations and provisional figures retain those qualifications. Interpretation should be recognizable as interpretation."
    ]
  },
  {
    "heading": "Practical value",
    "paragraphs": [
      "Guides should explain what to look for, which distinctions matter and where a conclusion stops being reliable. Posts should not imply firsthand experience, product testing or professional expertise that the writer has not established."
    ]
  },
  {
    "heading": "Attribution and fairness",
    "paragraphs": [
      "Sources belong close to consequential claims. A company statement describes the company’s position; an accusation does not establish guilt. Relevant responses and later developments should accompany disputed claims."
    ]
  },
  {
    "heading": "Dates and corrections",
    "paragraphs": [
      "Each post displays its archive date, substantive revision date and the period its sources address. Changing the blog’s design does not make an older post current. Material factual corrections should explain what changed and why."
    ]
  },
  {
    "heading": "AI and commercial disclosures",
    "paragraphs": [
      "The current posts disclose their use of AI-assisted research and writing. An organization byline is not a claim that a particular person reported or reviewed the post.",
      "Confirmed sponsorship, affiliate relationships and other material connections should be disclosed where relevant. Historical commercial relationships in the supplied archive have not been established by this revision."
    ]
  }
]} />; }

