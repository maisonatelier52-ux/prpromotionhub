export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://pr-promotion-hub-editorial-review.web-developm-8730.chatgpt.site").replace(/\/$/, "");
export const REVIEW_DATE = "2026-09-11";
export const CATEGORY_LABELS: Record<string, string> = {
  prnews: "Public Relations", technology: "Technology", finance: "Finance",
  entertainment: "Entertainment", world: "World Affairs", us: "U.S. Affairs",
};
export const SITE_DESCRIPTION = "The PR Promotion Hub blog: practical guides, sourced explainers and perspectives on public relations, business, technology and current affairs.";

