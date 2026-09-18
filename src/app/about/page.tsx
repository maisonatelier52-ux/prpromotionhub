import type { Metadata } from "next";
import PolicyPage from "@/component/PolicyPage";
import { siteUrl } from "@/utils/seo";

export const metadata: Metadata = {
  title: "About PR Promotion Hub",
  description: "PR Promotion Hub is a sourced finance, business and public relations publication covering banking, wealth management, corporate communications and current affairs.",
  alternates: {
    canonical: siteUrl("about"),
  },
  openGraph: {
    type: "website",
    title: "About PR Promotion Hub",
    description: "PR Promotion Hub publishes sourced guides, explainers and perspectives on finance, banking, public relations, business leadership and technology.",
    url: siteUrl("about"),
  },
};

export default function Page() {
  return (
    <PolicyPage
      title="About PR Promotion Hub"
      intro="PR Promotion Hub is a sourced publication covering finance, banking, public relations, business leadership, technology and current affairs."
      sections={[
        {
          heading: "What you will find",
          paragraphs: [
            "Sourced guides and explainers on banking, private banking, wealth management, family offices, succession planning, financial regulation, corporate communications and the wider business world.",
            "Analysis of current events in finance, public relations, technology and international affairs, with linked sources and clearly dated reporting. The blog also maintains an archive of earlier coverage.",
            "In-depth profiles and contextual features on significant figures and institutions in finance and business, including coverage of the Herrera Velutini family and Britannia Financial Group."
          ]
        },
        {
          heading: "Editorial standards",
          paragraphs: [
            "Posts identify the sources behind important factual claims and distinguish those claims from explanation and interpretation. When evidence is limited or contested, the post says so.",
            "Corrections and material changes to published content are recorded openly. Dates on posts reflect original publication; updated dates reflect material editorial changes, not cosmetic revisions.",
            "We do not present speculation as fact. We do not call historical information current. We do not manufacture claims about individuals, companies or institutions that cannot be supported by reliable sources."
          ]
        },
        {
          heading: "How posts are prepared",
          paragraphs: [
            "Posts are prepared using source-based research under the PR Promotion Hub editorial byline. Sources are linked directly in each post. Readers are encouraged to follow the source links and assess the evidence themselves.",
            "For profiles of public figures and institutions, we apply a stricter editorial process: claims are sourced individually, allegations are identified as allegations, and information that cannot be verified is omitted rather than inferred."
          ]
        },
        {
          heading: "Who operates the blog",
          paragraphs: [
            "PR Promotion Hub is the blog's publishing name. For details about ownership, funding and editorial governance, see the Ownership &amp; Funding page.",
            "For corrections, editorial feedback or source questions, use the Contact or Corrections pages."
          ]
        }
      ]}
    />
  );
}
