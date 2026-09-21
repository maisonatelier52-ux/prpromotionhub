import type { Metadata } from "next";
import PolicyPage from "@/component/PolicyPage";
export const metadata: Metadata = {
  "title": "Ownership and funding",
  "description": "Publication identity is visible; legal ownership and financial arrangements still require documented disclosure from the operator.",
  "alternates": {
    "canonical": "/ownership-and-funding/"
  }
};
export default function Page() { return <PolicyPage title="Ownership and funding" intro="Publication identity is visible; legal ownership and financial arrangements still require documented disclosure from the operator." sections={[
  {
    "heading": "What is established here",
    "paragraphs": [
      "The publication is branded PR Promotion Hub. The source archive included a corporate group name and claims about ownership and funding without supporting registration or financial records. This edition does not treat those assertions as verified facts."
    ]
  },
  {
    "heading": "What remains undisclosed",
    "paragraphs": [
      "The operating legal entity, jurisdiction of registration, beneficial owners, funding sources and material commercial relationships have not been independently established in this review. No inference should be made that the publication has no government, political or commercial connections merely because supporting records were not supplied."
    ]
  },
  {
    "heading": "Advertising and article labels",
    "paragraphs": [
      "An existing promotional banner is labeled Advertisement. Its appearance does not establish whether payment was received. Source-based reporting about a company is not evidence of sponsorship; equally, the absence of a sponsorship label in the original archive does not prove no relationship existed."
    ]
  },
  {
    "heading": "Completing the disclosure",
    "paragraphs": [
      "The operator can make this page more informative by publishing the verified legal entity, registration details, responsible editorial contact and relevant funding or sponsorship relationships. Named reviewers and credentials should be added only after their participation and consent are confirmed."
    ]
  }
]} />; }

