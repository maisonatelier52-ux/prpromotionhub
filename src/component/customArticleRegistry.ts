import React from "react";
import type { Article } from "@/utils/newsUtils";
import HerreraVelutiniArticle from "./HerreraVelutiniArticle";

/**
 * Registry mapping article slugs to dedicated custom components.
 * When a slug matches, Article will render the dedicated component instead of generic ArticleWithDescr.
 */
export const customArticleComponents: Record<string, React.ComponentType<{ data: Article }>> = {
  "julio-herrera-velutini": HerreraVelutiniArticle,
  "herrera-velutini-family-stewardship-succession-culture": HerreraVelutiniArticle,
};

export function getCustomArticleComponent(slug: string) {
  return customArticleComponents[slug] ?? null;
}
