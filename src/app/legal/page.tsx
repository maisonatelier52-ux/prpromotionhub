import type { Metadata } from "next";
import PolicyPage from "@/component/PolicyPage";
export const metadata: Metadata = {
  "title": "Blog information",
  "description": "Read the site’s methodology, blog standards and disclosure pages to understand this edition.",
  "alternates": {
    "canonical": "/legal"
  }
};
export default function Page() { return <PolicyPage title="Blog information" intro="Read the site’s methodology, blog standards and disclosure pages to understand this edition." sections={[
  {
    "heading": "Identity and ownership",
    "paragraphs": [
      "PR Promotion Hub is the blog’s publishing name. This review did not verify an operating legal entity, corporate registration or ownership of every asset. The ownership and funding page explains which disclosures still require documentation."
    ]
  },
  {
    "heading": "Use of sourced material",
    "paragraphs": [
      "Articles link to third-party sources whose material and trademarks remain subject to their respective rights. A link does not imply endorsement by the source publisher. Existing images require provenance and rights checks before reuse beyond the review site."
    ]
  },
  {
    "heading": "Scope of the articles",
    "paragraphs": [
      "The material is general information with explicit reporting dates. Financial, legal, health and safety matters can depend on current facts and individual circumstances. Use the cited authoritative sources for the applicable rules or conditions rather than treating an archived article as personalized advice."
    ]
  },
  {
    "heading": "Contact and corrections",
    "paragraphs": [
      "The contact page retains the publication’s existing email addresses. This revision did not test their delivery or response. The source-methodology and corrections pages explain how a supported factual correction should be documented."
    ]
  }
]} />; }

