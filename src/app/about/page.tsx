import type { Metadata } from "next";
import PolicyPage from "@/component/PolicyPage";
export const metadata: Metadata = {
  "title": "About PR Promotion Hub",
  "description": "PR Promotion Hub is a blog about public relations, finance, technology and the wider world.",
  "alternates": {
    "canonical": "/about"
  }
};
export default function Page() { return <PolicyPage title="About the blog" intro="PR Promotion Hub is a blog about public relations, finance, technology and the wider world." sections={[
  {
    "heading": "What you will find",
    "paragraphs": [
      "Practical guides for evaluating ideas and making decisions, explainers that put complicated developments in context, and perspectives on the ways business, technology and public affairs intersect.",
      "Posts about current affairs are dated. They can help explain a particular development without serving as a live update. The blog also includes an archive of earlier coverage."
    ]
  },
  {
    "heading": "Evidence and perspective",
    "paragraphs": [
      "Posts identify the sources behind important factual claims and distinguish those claims from explanation and interpretation. When the evidence is limited or contested, the limitation belongs in the post. Corrections and material changes are recorded openly."
    ]
  },
  {
    "heading": "How posts are prepared",
    "paragraphs": [
      "The current collection was prepared with AI-assisted research and writing under the PR Promotion Hub organization byline. It does not claim original interviews, field reporting or review by named experts. Source links and dates help readers assess each post for themselves."
    ]
  },
  {
    "heading": "Who operates the blog",
    "paragraphs": [
      "PR Promotion Hub is the blog’s publishing name. Verified details about its legal operator, funding and historical sponsorship have not yet been supplied. The ownership and funding page explains the information still to be confirmed."
    ]
  }
]} />; }

