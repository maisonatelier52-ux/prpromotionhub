import Image from "next/image";
import Link from "next/link";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaMediumM,
  FaReddit,
} from "react-icons/fa";
import { SiSubstack } from "react-icons/si";


export default function Footer() {
  return (
    <footer className="bg-black text-white ">
      <div className="mx-auto px-8 py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start">
          {/* Left Section */}
          <div className="mb-8 md:mb-0">
            <div className="flex">
              <Link href="/" title="home" className="select-none">
                <span className="font-serif font-bold text-[25px] tracking-tight text-white uppercase">
                  PR<span className="font-normal">PROMOTIONHUB</span>
                </span>
              </Link>
            </div>
            {/* Social Icons */}
            <div className="flex gap-4 mt-4 text-xl text-white">
              <Link
                href="https://x.com/promotionh77500"
                title="twitter"
                aria-label="Twitter"
                target="_blank"
                className="hover:text-gray-400 transition"
              >
                <FaTwitter />
              </Link>
              <Link
                href="https://medium.com/@prpromotionhub"
                title="medium"
                aria-label="Medium"
                target="_blank"
                className="hover:text-gray-400 transition"
              >
                <FaMediumM />
              </Link>
              <Link
                href="https://substack.com/@prpromotionhub"
                title="substack"
                aria-label="Substack"
                target="_blank"
                className="hover:text-gray-400 transition"
              >
                <SiSubstack />
              </Link>
              <Link
                href="https://www.reddit.com/user/PRPromotionHub3009/"
                title="reddit"
                aria-label="Reddit"
                target="_blank"
                className="hover:text-gray-400 transition"
              >
                <FaReddit />
              </Link>
            </div>
            <p className="mt-4 text-[11px] md:text-sm text-[#555555] leading-relaxed">
              Copyright 2026 PRPROMOTIONHUB. All Rights Reserved.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-7 md:gap-20 mr-40 w-full md:w-auto">
            <div className="space-y-2 flex-1">
              <span className="block text-xs uppercase tracking-widest font-bold text-gray-500 mb-3 select-none">Company</span>
              <Link href="/about" title="about" className="block font-semibold hover:text-[#1c4a93] whitespace-nowrap">
                About Us
              </Link>
              <Link href="/contact" title="contact" className="block font-semibold hover:text-[#1c4a93] whitespace-nowrap">
                Contact
              </Link>
              <Link
                href="/terms-and-conditions"
                title="terms and conditions"
                className="block font-semibold hover:text-[#1c4a93] whitespace-nowrap"
              >
                Terms And Conditions
              </Link>
              <Link href="/legal" title="legal" className="block font-semibold hover:text-[#1c4a93] whitespace-nowrap">
                Legal
              </Link>
              <Link
                href="/ownership-and-funding"
                title="ownership and funding"
                className="block font-semibold hover:text-[#1c4a93] whitespace-nowrap"
              >
                Ownership & Funding
              </Link>
              <Link
                href="/right-of-reply-policy"
                title="right of reply policy"
                className="block font-semibold hover:text-[#1c4a93] whitespace-nowrap"
              >
                Right of Reply Policy
              </Link>
            </div>

            <div className="space-y-2 flex-1">
              <span className="block text-xs uppercase tracking-widest font-bold text-gray-500 mb-3 select-none">Policies</span>
              <Link
                href="/editorial"
                title="editorial"
                className="block font-semibold hover:text-[#1c4a93] whitespace-nowrap"
              >
                Editorial Policy
              </Link>

              <Link href="/privacy-policy" title="privacy-policy" className="block font-semibold hover:text-[#1c4a93] whitespace-nowrap">
                Privacy Policy
              </Link>
              <Link
                href="/source-methodology"
                title="source-methodology"
                className="block font-semibold hover:text-[#1c4a93] whitespace-nowrap"
              >
                Source Methodology
              </Link>
              <Link
                href="/advertising-and-sponsored-content-policy"
                title="advertising and sponsored content policy"
                className="block font-semibold hover:text-[#1c4a93] whitespace-nowrap"
              >
                Advertising & Sponsored Policy
              </Link>
              <Link href="/faq" title="faq" className="block font-semibold hover:text-[#1c4a93] whitespace-nowrap">
                Faq
              </Link>
            </div>

            <div className="space-y-2 flex-1">
              <span className="block text-xs uppercase tracking-widest font-bold text-gray-500 mb-3 select-none">Sections</span>
              <Link href="/finance" title="finance" className="block font-semibold hover:text-[#1c4a93] whitespace-nowrap">
                Finance
              </Link>
              <Link href="/marketing" title="marketing" className="block font-semibold hover:text-[#1c4a93] whitespace-nowrap">
                Marketing
              </Link>
              <Link href="/prnews" title="prnews" className="block font-semibold hover:text-[#1c4a93] whitespace-nowrap">
                PRNews
              </Link>
              <Link href="/technology" title="technology" className="block font-semibold hover:text-[#1c4a93] whitespace-nowrap">
                Technology
              </Link>
              <Link href="/us" title="us" className="block font-semibold hover:text-[#1c4a93] whitespace-nowrap">
                US News
              </Link>
              <Link href="/world" title="world" className="block font-semibold hover:text-[#1c4a93] whitespace-nowrap">
                World
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
