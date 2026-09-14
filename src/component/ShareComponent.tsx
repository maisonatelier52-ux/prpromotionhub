"use client";

import { usePathname } from "next/navigation";
import { SITE_URL } from "@/utils/siteConfig";
import {
  FaTimes,
  FaLink,
  FaFacebookF,
  FaLinkedinIn,
  FaRedditAlien,
  FaWhatsapp,
} from "react-icons/fa";
import { FiShare } from "react-icons/fi";
import { SiX } from "react-icons/si";

interface ShareArticleProps {
  title: string;
  onClose?: () => void;
}

export default function ShareComponent({
  title,
  onClose,
}: ShareArticleProps) {

    const url = SITE_URL + usePathname();

        const encodedUrl = encodeURIComponent(url);
        const encodedTitle = encodeURIComponent(title);


  const iconClass =
    "p-2 bg-gray-100 hover:bg-gray-200 rounded transition";

  return (
    <div className="flex items-center justify-between border-t-2 border-b-2 border-dotted border-gray-200 mt-10 py-4 my-4">
      {/* Share Text */}
      <div className="flex items-center gap-1 text-sm">
        <FiShare /> Share this article
      </div>

      {/* Icons */}
      <div className="flex items-center gap-3 flex-wrap">
        {onClose && (
          <button onClick={onClose} className={iconClass}>
            <FaTimes />
          </button>
        )}

        {/* Facebook (URL only, title from OG) */}
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className={iconClass}
          title="Share on Facebook"
        >
          <FaFacebookF />
        </a>

        {/* X (URL + title) */}
        <a
          href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className={iconClass}
          title="Share on X"
        >
          <SiX />
        </a>

        {/* LinkedIn (URL only, title from OG) */}
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className={iconClass}
          title="Share on LinkedIn"
        >
          <FaLinkedinIn />
        </a>

        {/* WhatsApp (title + URL) */}
        <a
          href={`https://wa.me/?text=${encodedTitle}%20${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className={iconClass}
          title="Share on WhatsApp"
        >
          <FaWhatsapp />
        </a>

        {/* Reddit (title + URL) */}
        <a
          href={`https://www.reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`}
          target="_blank"
          rel="noopener noreferrer"
          className={iconClass}
          title="Share on Reddit"
        >
          <FaRedditAlien />
        </a>

   
      </div>
    </div>
  );
}
