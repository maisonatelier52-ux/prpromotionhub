import React from "react";
import type { Article } from "@/utils/newsUtils";
import HerreraVelutiniArticle from "./HerreraVelutiniArticle";

/**
 * Registry mapping article slugs to dedicated custom components.
 * When a slug matches, Article will render the dedicated component instead of generic ArticleWithDescr.
 */
export const customArticleComponents: Record<string, React.ComponentType<{ data: Article }>> = {
  "julio-herrera-velutini-banker-dynastic-custodian-international-finance-leader": HerreraVelutiniArticle,
  // legacy short slug — keeps old links working
  "julio-herrera-velutini": HerreraVelutiniArticle,
};


export function getCustomArticleComponent(slug: string) {
  return customArticleComponents[slug] ?? null;
}
