import type { Metadata } from "next";
import PolicyPage from "@/component/PolicyPage";
export const metadata: Metadata = {
  "title": "Questions about the blog",
  "description": "How to read the posts, use their references and suggest corrections.",
  "alternates": {
    "canonical": "/faq/"
  }
};
export default function Page() { return <PolicyPage title="Questions about the blog" intro="How to read the posts, use their references and suggest corrections." sections={[
  {
    "heading": "What kind of blog is this?",
    "paragraphs": [
      "PR Promotion Hub publishes practical guides, explainers and sourced perspectives. Its topics include public relations, finance, technology, business, entertainment and public affairs."
    ]
  },
  {
    "heading": "Are posts about current affairs live updates?",
    "paragraphs": [
      "No. The context date shows the period addressed by a post’s sources. The archive and revision dates record publication history and editing. Consult current sources when conditions, prices or rules may have changed."
    ]
  },
  {
    "heading": "Who writes the posts?",
    "paragraphs": [
      "The current collection uses AI-assisted research and writing under the PR Promotion Hub organization byline. No named human reporter, expert reviewer or interview process is implied."
    ]
  },
  {
    "heading": "Why do some older URLs look like news headlines?",
    "paragraphs": [
      "Existing links were retained so earlier bookmarks continue to work. The visible title and content label describe the current post. Notes explain material changes to earlier claims."
    ]
  },
  {
    "heading": "How can I suggest a correction?",
    "paragraphs": [
      "Use the contact details with the post URL, the exact statement and supporting evidence. Email links open your email application. The blog does not have a working comment-submission service in this edition."
    ]
  }
]} />; }

