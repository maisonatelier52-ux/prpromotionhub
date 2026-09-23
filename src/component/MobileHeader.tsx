"use client"
import Link from 'next/link';
import { useState } from 'react';
import { CATEGORY_LABELS } from '@/utils/siteConfig';
import MobileSidebar from './MobileSidebar';

const categories = [
  { link: "/", label: "Blog" },
  ...Object.entries(CATEGORY_LABELS).map(([slug, label]) => ({ link: "/" + slug, label })),
];

export default function MobileHeader() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="w-full bg-white text-black relative z-50 border-b border-slate-200">
        <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100">
          <Link href="/" title="home">
            <span className="site-logo font-serif font-bold text-[22px] tracking-tight text-black uppercase">
              PR<span className="font-normal">PROMOTIONHUB</span>
            </span>
          </Link>

          <button
            onClick={() => setOpen(!open)}
            className="relative w-8 h-8 flex items-center justify-center text-black"
            aria-label="Blog menu" aria-expanded={open}
          >
            {!open ? (
              <div className="flex flex-col items-end gap-1">
                <span className="h-[2px] w-6 bg-black" />
                <span className="h-[2px] w-4 bg-black" />
                <span className="h-[2px] w-3 bg-black" />
              </div>
            ) : (
              <div className="relative w-6 h-6">
                <span className="absolute top-1/2 left-0 w-6 h-[2px] bg-black rotate-45" />
                <span className="absolute top-1/2 left-0 w-6 h-[2px] bg-black -rotate-45" />
              </div>
            )}
          </button>
        </div>

        <div
          className="no-scrollbar flex gap-5 px-4 py-2.5 text-[14px] font-semibold overflow-x-auto whitespace-nowrap bg-white text-slate-700"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {categories.map((item) => (
            <Link
              key={item.link}
              href={item.link}
              className="hover:text-[#102b4a] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </header>

         {open && <MobileSidebar onClose={() => setOpen(false)} />}
    </>
  );
}
