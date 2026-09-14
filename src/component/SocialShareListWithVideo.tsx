"use client";

import { usePathname } from "next/navigation";
import { SITE_URL } from "@/utils/siteConfig";
import {
  FiShare,
  FiMoreHorizontal,
} from "react-icons/fi";
import { FaFacebookF, FaLinkedinIn, FaRedditAlien, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiLink } from "react-icons/hi2";
import { SiX } from "react-icons/si";

export default function SocialShareListWithVideo({ title }: { title: string }) {
  const url = SITE_URL + usePathname();

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);



   const iconClass =
    "text-lg cursor-pointer hover:opacity-70 transition";
  return (
    <div className="flex flex-col sticky top-5 items-center gap-2 text-black">
      {/* Share Label */}
      <div className="flex flex-col items-center gap-1">
        <FiShare className="text-lg" />
        <span className="text-xs tracking-wide">SHARE</span>
      </div>

      {/* Icons Box */}
     <div className="flex flex-col items-center gap-4 border border-gray-300 px-3 py-4 rounded">
        {/* WhatsApp */}
        <a
          href={`https://wa.me/?text=${encodedTitle}%20${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          title="Share on WhatsApp"
        >
          <FaWhatsapp className={`${iconClass} text-green-500`} />
        </a>

        {/* X (Twitter) */}
        <a
          href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          title="Share on X"
        >
          <SiX className={iconClass} />
        </a>

        {/* Facebook */}
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          title="Share on Facebook"
        >
          <FaFacebookF className={`${iconClass} text-blue-600`} />
        </a>

        {/* LinkedIn */}
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          title="Share on LinkedIn"
        >
          <FaLinkedinIn className={`${iconClass} text-blue-700`} />
        </a>

        {/* Reddit */}
        <a
          href={`https://www.reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`}
          target="_blank"
          rel="noopener noreferrer"
          title="Share on Reddit"
        >
          <FaRedditAlien className={`${iconClass} text-orange-500`} />
        </a>
</div>
    </div>
  );
}
