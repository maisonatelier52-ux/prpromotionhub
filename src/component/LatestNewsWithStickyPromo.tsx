"use client";

import { useState } from "react";
import HorizontalFeaturedArticle from "./HorizontalFeaturedArticle";
import UpgradePromoCard from "./UpgradePromoCard";
import CategorySectionHeader from "./CategorySectionHeader";

interface Author {
  name: string;
  role: string;
  bio: string;
  image: string;
  email: string;
  twitter: string;
  facebook: string;
  instagram: string;
  substack?: string;
  medium?: string;
}

interface NewsData {
  slug: string;
  category: string;
  title: string;
  shortdescription: string;
  description: string;
  date: string;
  image: string;
  imageAlt?: string;
  author: Author;
}

interface Props {
  data: NewsData[];
}

const INITIAL_COUNT = 6;
const LOAD_MORE_COUNT = 6;

export default function LatestNewsWithStickyPromo({ data }: Props) {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const showMore = () => {
    setVisibleCount((prev) => prev + LOAD_MORE_COUNT);
  };

  return (
    <div className="w-full mb-8 mt-8">
      <div className="flex flex-col lg:flex-row gap-8 md:gap-15">

        {/* LEFT SECTION */}
        <div className="relative w-full">
          <CategorySectionHeader title="More posts" />

          <div className="mt-4">
            {data.slice(0, visibleCount).map((item, index) => (
              <div key={item.slug}>
                <HorizontalFeaturedArticle data={item} />
                {index < visibleCount - 1 && (
                  <hr className="my-5 border-gray-300" />
                )}
              </div>
            ))}
          </div>

          {/* SHOW MORE / END MESSAGE */}
          <div className="mt-6">
            {visibleCount < data.length ? (
              <button
                onClick={showMore}
                className="flex items-center cursor-pointer gap-2 text-gray-500 text-sm font-medium
                 hover:text-[#041f4a] transition-colors"
              >
                Show More <span>→</span>
              </button>
            ) : (
              <div className="flex items-center justify-center gap-2 text-gray-500 text-sm">
                {/* Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6v12M10 10v8M16 4v16" />
                </svg>

                <span>You&apos;ve reached the end of the list!</span>
              </div>
            )}
          </div>

        </div>

        {/* RIGHT SECTION */}
        <div className="w-full lg:w-1/3">
          <div className="sticky top-10">
            <UpgradePromoCard />
          </div>
        </div>
      </div>
    </div>
  );
}
