"use client";

import { usePathname } from "next/navigation";
import { SITE_URL } from "@/utils/siteConfig";
import {
  FiPrinter,
  FiMoreHorizontal,
  FiShare,
} from "react-icons/fi";
import {
  FaWhatsapp,
  FaFacebookF,
  FaLinkedinIn,
  FaRedditAlien,
} from "react-icons/fa";
import { SiX } from "react-icons/si";
import { FaLink } from "react-icons/fa6";

export default function SocialShare({ title }: { title: string }) {
  const url = SITE_URL + usePathname();

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
    } catch (e) {
      console.error("Copy failed", e);
    }
  };

  const printPage = () => {
    window.print();
  };

  return (
    <div className="flex items-center py-5 gap-3 text-sm text-black flex-wrap">
      {/* Share label */}
      <div className="flex items-center gap-1 text-sm">
        <FiShare className="text-base" />
        <span className="font-normal">Share</span>
      </div>

      {/* Icons */}
      <div className="flex items-center gap-2 flex-wrap">
        {/* WhatsApp */}
        <a
          href={`https://wa.me/?text=${encodedTitle}%20${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          title="Share on WhatsApp"
        >
          <CircleIcon>
            <FaWhatsapp className="text-[14px]" />
          </CircleIcon>
        </a>

        {/* X (Twitter) */}
        <a
          href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          title="Share on X"
        >
          <CircleIcon>
            <SiX className="text-[14px]" />
          </CircleIcon>
        </a>

        {/* Facebook */}
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          title="Share on Facebook"
        >
          <CircleIcon>
            <FaFacebookF className="text-[14px]" />
          </CircleIcon>
        </a>

        {/* LinkedIn */}
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          title="Share on LinkedIn"
        >
          <CircleIcon>
            <FaLinkedinIn className="text-[14px]" />
          </CircleIcon>
        </a>

        {/* Reddit */}
        <a
          href={`https://www.reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`}
          target="_blank"
          rel="noopener noreferrer"
          title="Share on Reddit"
        >
          <CircleIcon>
            <FaRedditAlien className="text-[14px]" />
          </CircleIcon>
        </a>

      </div>
    </div>
  );
}

/* -------------------------------- */
/* Circle Icon Button                */
/* -------------------------------- */

function CircleIcon({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:opacity-70 transition text-black">
      {children}
    </div>
  );
}
