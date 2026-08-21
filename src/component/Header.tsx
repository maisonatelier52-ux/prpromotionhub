"use client";
import Link from 'next/link';

import {
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaMediumM,
  FaReddit,
} from 'react-icons/fa';
import { SiSubstack } from 'react-icons/si';
import CategoriesNav from './CategoriesNav';
import MobileHeader from './MobileHeader';
import { useEffect, useState } from 'react';

const categories = [
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'Terms of Use', href: '/terms-and-conditions' }
];

export default function Header() {

  const [date, setDate] = useState("");
   useEffect(() => {
    setDate(
      new Date().toLocaleDateString("en-US", {
        weekday: "long",
        month: "short",
        day: "2-digit",
        year: "numeric",
      })
    );
  }, []);
  return (
    <header className="w-full">

      {/* ================= MOBILE HEADER ================= */}
      <div className="lg:hidden border-b border-black">
        <MobileHeader />
      </div>

      {/* ================= DESKTOP HEADER (UNCHANGED) ================= */}
      <div className="hidden lg:block ">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-2 text-xs text-gray-500 font-semibold border-b border-[#88888888]">
            <div>
              {date}
            </div>

            <div className="flex items-center gap-6">
              {categories.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  title={item.name}
                  className="hover:underline"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-4 text-black text-sm">
              <Link href="https://x.com/promotionh77500" title="twitter" target="_blank" rel="noopener noreferrer">
                <FaTwitter className='text-lg hover:opacity-70' />
              </Link>
              <Link href="https://medium.com/@prpromotionhub" title="medium" target="_blank" rel="noopener noreferrer">
                <FaMediumM className='text-lg hover:opacity-70' />
              </Link>
              <Link href="https://substack.com/@prpromotionhub" title="substack" target="_blank" rel="noopener noreferrer">
                <SiSubstack className='text-lg hover:opacity-70' />
              </Link>
              <Link href="https://www.reddit.com/user/PRPromotionHub3009/" title="reddit" target="_blank" rel="noopener noreferrer">
                <FaReddit className='text-lg hover:opacity-70' />
              </Link>
            </div>
          </div>

          {/* Logo row */}
          <div className="grid grid-cols-3 items-center py-2">

            <div />

            {/* Center Logo */}
            <div className="flex justify-center">
              <Link href="/" title='home' className="select-none">
                <span className="font-serif font-bold text-[32px] tracking-tight text-black uppercase">
                  PR<span className="font-normal">PROMOTIONHUB</span>
                </span>
              </Link>
            </div>

            <div />
          </div>
        </div>
        <div className='border-b border-[#88888888]'></div>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>

          <CategoriesNav />
        </div>
      </div>

    </header>
  );
}
