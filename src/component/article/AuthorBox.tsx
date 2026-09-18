import Link from "next/link";
import Image from "next/image";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { getAuthorBySlug } from "@/utils/authorsData";

interface Props {
  authorSlug?: string;
  fallbackName?: string;
}

export default function AuthorBox({ authorSlug, fallbackName }: Props) {
  const author = getAuthorBySlug(authorSlug || "pr-promotion-hub");

  return (
    <div className="my-10 p-6 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg">
      <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center">
        <div className="w-20 h-20 rounded-full overflow-hidden relative flex-shrink-0 border-2 border-white shadow-xs">
          <Image
            src={author.avatar}
            alt={author.name}
            fill
            sizes="80px"
            className="object-cover"
          />
        </div>

        <div className="flex-1 space-y-1.5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                Written By
              </span>
              <Link href={`/authors/${author.slug}/`} className="group">
                <h3 className="font-editorial text-lg font-bold text-[#041f4a] group-hover:text-[#2563eb] transition">
                  {author.name}
                </h3>
              </Link>
            </div>

            {author.linkedin && (
              <div className="flex items-center gap-2">
                <a
                  href={author.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-[#2563eb] text-sm"
                  aria-label={`${author.name} LinkedIn`}
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href={author.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-[#2563eb] text-sm"
                  aria-label={`${author.name} Twitter`}
                >
                  <FaTwitter />
                </a>
              </div>
            )}
          </div>

          <p className="text-xs uppercase tracking-wider font-semibold text-[#041f4a]">
            {author.role} • {author.experience}
          </p>

          <p className="text-xs text-slate-600 leading-relaxed pt-1">
            {author.bio}
          </p>

          <div className="pt-2">
            <Link
              href={`/authors/${author.slug}/`}
              className="text-xs font-bold text-[#041f4a] hover:text-[#2563eb] underline underline-offset-2"
            >
              View Full Editorial Profile &amp; Published Research &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
